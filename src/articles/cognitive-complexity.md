---
title: "Cognitive complexity"  
headliner: "เมื่อการอ่าน code ของคนอื่นเป็นเรื่องจำเป็น"  
featured: true  
featuredImage: ../images/cognitive-complexity-feature.png 
path: "/cognitive-complexity"  
date: "2020-01-25"  
tags: ["code-quality", "programming"]
---

สำหรับหลายๆคน อาจฟังดูเหมือนเรื่องไม่ใหญ่โตอะไร 
แต่สำหรับคนที่ต้องทำงานกับระบบที่คน contribute เยอะๆ
ทำงานกับบริษัทใหญ่ที่มี culture ให้ทุกคนสามารถแก้ไขระบบของทีมอื่นได้
หรือ เป็นทีมเจ้าของระบบที่ต้อง review code ของคนอื่นเป็นประจำ
หรือ contribute project open source ต่างๆ
อาจจะประสบพบเจอกับ code จากคนมากหน้าหลายตารวมอยู่ใน project เดียวกัน
ซึ่งแน่นอนว่าทุกคนก็อาจจะไม่ได้ใช้ practice ที่ดีในการแก้ปัญหา
หรือเขียน code ที่ใช้วิธีต่างๆได้ถูกต้อง แต่ code กลับอ่านและเข้าใจยาก

---

### การวัดความซับซ้อนของ code โดยทั่วไป

ย้อนกลับไปในยุคที่การทำ software เริ่มแพร่หลาย การเขียน test นั้นเริ่มเป็นสิ่งที่ทุกคนควรทำ
แต่การเขียน test อาจจะไม่มีประสิทธิภาพ
บางครั้งต้องเขียน test case ในปริมาณที่ "มากเกินไป" ถึงจะครอบคลุมการทำงานทั้งหมด
จึงทำให้คนเริ่มสร้างมาตรฐานในการวัดความซับซ้อนของโปรแกรมขึ้นมา
หนึ่งในนั้นคือ "Cyclomatic complexity" ที่สร้างขึ้นเมื่อปี 1976

Cyclomatic complexity สร้างขึ้นด้วยไอเดียการมอง flow ของโปรแกรมเป็น graph
แล้วพิจารณาจำนวน node และ edge ที่เกิดขึ้นและคำนวนเป็นแต้ม ซึ่งใช้บอกจำนวนของ test case อย่างต่ำ
ที่ต้องเขียนเพื่อให้ test case ครอบคลุมทุก branch (ทางแยกในโปรแกรม เช่น if/loop/try-catch) ในฟังก์ชั่นนั้นๆ

ตัวอย่างเช่น...

```typescript
function getTransitiveClosure(graph: boolean[][], nodes: number): boolean[][] { // +1 
	// Warshall's algorithm
	for (let k = 0; k < nodes; k++) {                                           // +1
		for (let i = 0; i < nodes; i++) {                                       // +1
			for (let j = 0; j < nodes; j++) {                                   // +1
				graph[i][j] = graph[i][j] || (graph[i][k] && graph[k][j]);      // +3
			}
		}
	}	
	return graph;
}
```

ฟังก์ชั่นนี้มีแต้ม Cyclomatic Complexity 7 เนื่องจากมี for-loop เป็นทางแยกแล้ว 3
และยังพิจารณา condition ของค่าที่ถูก assign เข้า array อีก
สุดท้ายตัว function declaration เองก็มีมูลค่าอีก 1 แต้ม
เพราะ function เองก็เป็น sub-routine ที่แยกออกมาจากฟังก์ชั่นที่เรียกใช้

---

### Cyclomatic complexity กลายเป็น norm โดยปริยาย

ในยุคหลังมา การทำ software ร่วมกันกลายเป็นเรื่องปกติและแพร่หลาย โดยเฉพาะในโลกของ Open source
ซึ่งการเขียน code ให้ไม่ซับซ้อนมากจนเกินไปเป็นเรื่องสำคัญ เพราะจะทำให้คนที่ไม่เคยอ่าน code ชุดนั้นมาก่อน
สามารถ "เข้าใจได้ง่าย" และรวดเร็วขึ้น ทำให้ทำงานร่วมกันได้มีประสิทธิภาพมากขึ้น จึงมีคนนำ Cyclomatic complexity
มาเป็นตัวบ่งชี้ว่า ฟังก์ชั่นใดๆในโปรแกรมมีความซับซ้อนมากเกินไปหรือไม่ 
ถ้ามีมากเกินไปก็จะเป็นสัญญาณให้เจ้าของ code ทำการ "refactor" code นั้นด้วยวิธีต่างๆ
ให้โปรแกรมมีความซับซ้อนน้อยลง จนกลายเป็นเรื่องปกติที่ทุกคนใช้เป็นมาตรฐาน

แต่ตัว Cyclomatic complexity นี้ยังมีปัญหาบางอย่างที่แก้ไม่ได้
นั่นคือเรื่อง "ความเข้าใจง่ายของ code"

ลอง พิจารณาฟังก์ชั่นนี้...

```typescript
function sumOfPrimes(max: number): number {  // +1
    let total = 0;
    for (let i = 1; i <= max; ++i) {         // +1
        let isPrime = true;
        for (let j = 2; j < i; ++j) {        // +1
            if (i % j == 0) {                // +1
                isPrime = false;
                break;
            }
        }
        if (isPrime) total += i;             // +1
    }

    return total;
}
```

จะสังเกตได้ว่า code มีแต้ม Cyclomatic = 5
แต่การอ่านเพื่อให้เข้าใจว่าฟังก์ชั่นนี้ทำอะไรได้ค่อนข้างลำบาก

ทีนี้ลองพิจารณาฟังก์ชั่นนี้บ้าง...
 
```typescript
function getRoughlyTimeWord(minutes: number): string { // +1
    if (minutes < 1) return "few seconds ago";          // +1
    if (minutes < 10) return "a moment ago";            // +1
    if (minutes < 60) return "a while ago";             // +1
    if (minutes < 60 * 24) return "today";              // +1

    return "long time ago";
}
```

ฟังก์ชั่นนี้ได้ 5 แต้มเท่ากัน แต่อ่านง่ายกว่ามาก เพราะตัว `if ... return` สามารถอ่านเข้าใจง่ายด้วยตัวมันเองอยู่แล้ว
จึงเป็นปัญหาว่า statement ที่มีความซับซ้อนในการทำงานเพราะสร้างทางแยกเยอะ แต่อ่านแล้วเข้าใจง่าย
กลับถูกตีว่าเข้าใจยาก เพียงเพราะใช้มาตรฐานในการวัดไม่ถูกจุด

---

### Cognitive Complexity มาตรฐานใหม่เพื่อวัดความเข้าใจง่ายของ code
เมื่อการอ่าน code เป็นสิ่งสำคัญ Cognitive complexity จึงถูกสร้างขึ้น 
เป็น metric ที่คำนึงเรื่องความเข้าใจง่ายเป็นหลัก
ดังนั้นการทำงานของ code บาง pattern ที่อาจจะทำงานซับซ้อน
แต่ถ้าตัว statement เองอ่านแล้วเข้าใจได้ทันทีจะไม่เพิ่มแต้มความยากให้

ยกตัวอย่างเดิม แต่วัดด้วย Cognitive Complexity

// last same example but with cognitive complexity

สังเกตว่าใน function แรกนั้นมี if ซ้อนอยู่ใน for ที่ซ้อนอยู่ใน for อีกที
ซึ่ง Cyclomatic Complexity นั้นจะให้แต้ม "ลงโทษ" ทบไปเรื่อยตามจำนวนชั้นที่ซ้อนลงไป
เนื่องจากการอ่าน statement ที่มีซ้อนกันเยอะๆนั้นยากต่อการอ่าน
เพราะต้องพึ่งการจำเงื่อนไขของ block ที่ซ้อนอยู่ 
