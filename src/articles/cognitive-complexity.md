---
title: "Cognitive complexity"  
headliner: "เมื่อการอ่าน code ของคนอื่นเป็นเรื่องจำเป็น"  
featured: true  
featuredImage: ../images/cognitive-complexity-feature.jpg 
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
แล้วพิจารณาจำนวน node และ edge ที่เกิดขึ้นและคำนวนเป็น**"แต้ม"** ซึ่งใช้บอกจำนวนของ test case อย่างต่ำ
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
function sumOfPrimes(order: number): number { // +1
    let total = 0;
    for (let i = 1; i <= order; ++i) {        // +1
        let isPrime = true;
        for (let j = 2; j < i; ++j) {         // +1
            if (i % j === 0) {                // +1
                isPrime = false;
                break;
            }
        }
        if (isPrime) total += i;              // +1
    }

    return total;
}
```

จะสังเกตได้ว่า code มีแต้ม Cyclomatic = 5
แต่การอ่านเพื่อให้เข้าใจว่าฟังก์ชั่นนี้ทำอะไรได้ค่อนข้างลำบาก

ทีนี้ลองพิจารณาฟังก์ชั่นนี้บ้าง...
 
```typescript
function getRoughlyTimeWord(minutesAgo: number): string { // +1
    if (minutesAgo < 1) return "few seconds ago";         // +1
    if (minutesAgo < 10) return "a moment ago";           // +1
    if (minutesAgo < 60) return "about an hour ago";      // +1
    if (minutesAgo < 60 * 24) return "today";             // +1

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

ยกตัวอย่างเดิม แต่วัดด้วย Cognitive Complexity ดูบ้าง

```typescript
function sumOfPrimes(order: number): number {
    let total = 0;
    for (let i = 1; i <= order; ++i) {   // +1
        let isPrime = true;
        for (let j = 2; j < i; ++j) {    // +2
            if (i % j === 0) {           // +3
                isPrime = false;
                break;                   // +1
            }
        }
        if (isPrime) total += i;         // +2
    }

    return total;
}
```

function นี้ Cognitive Complexity = 9 เนื่องจากมี statement ซ้อนกันหลายชั้น วิธี Cognitive complexity จึงให้แต้มโทษทบยอดลงไปแต่ละชั้น
ดังนั้น ทั้ง `for (let j ...` และ `if (isPrime)` ก็จะถูก +2 ทั้งคู่เพราะตัวมันเองมีความลึก 2
และ `if (i % j === 0)` ก็ถูก +3 เพราะอยู่ชั้น 3 เป็นต้น 

```typescript
function getRoughlyTimeWord(minutesAgo: number): string {
    if (minutesAgo < 1) return "few seconds ago";      // +1
    if (minutesAgo < 10) return "a moment ago";        // +1
    if (minutesAgo < 60) return "about an hour ago";   // +1
    if (minutesAgo < 60*24) return "today";            // +1

    return "long time ago";
}
```

กลับกัน function นี้มีคะแนนลดลงไปอีกเพราะไม่ได้นับตัว function เองเป็นความซับซ้อน
ตัว `if` แต่ละเงื่อนไขก็ได้รับอย่างละ 1 แต้ม จึงทำให้มีคะแนนรวมเพียง 4

จะสังเกตได้ว่า Cognitive Complexity จะไม่ได้พึ่งคณิตศาสตร์ (Graph) ในการวัดเหมือน Cyclomatic Complexity
แต่จะให้ความสำคัญกับการอ่าน statement ในแต่ละรูปแบบแทน

ยกตัวอย่างเปรียบเทียบคร่าวๆ ...

#### if..else vs Shorthand
```typescript
// Case A (Cyclomatic complexity 2; Cognitive complexity 2)
let a: string;
if (someVar === valueX) {                 // cyc +1 ; cog +1
    a = "some value";
} else if (anotherVar === valueY) {       // cyc +1 ; cog +1
    a = "another value";
} else {
    a = "other value";
}

// Case B (Cyclomatic complexity 2; Cognitive complexity 0)
const b = someVar === valueX             // cyc +1
    ? "some value"
    : anotherVar === valueY              // cyc +1
        ? "another value"
        : "other value";
```
การเขียน `if` ปกตินั้นได้แต้มเพราะการจะเข้่าใจว่า statement ในแต่ละ `if` นั้นทำงานอะไรบ้่าง
ต้องมองเข้าไปในแต่ละ scope ซึ่งใช้เวลาพอสมควร เพราะแต่ละ scope อาจมีหลาย statement
ต่างกับ shorthand ที่เราสามารถมองรู้เลยว่า value ของตัวแปรจะเป็นค่าใดตามเงื่อนไขที่กำหนด

#### if..else vs switch
```typescript
// Case A (Cyclomatic complexity 4; Cognitive complexity 3)
function A(param: string): string {                // cyc +1
    if (param === 'create') return createData();   // cyc +1 ; cog +1
    if (param === 'update') return updateData();   // cyc +1 ; cog +1
    if (param === 'delete') return deleteData();   // cyc +1 ; cog +1
    throw new Error('Unknown operation.');
}

// Case B (Cyclomatic complexity 4; Cognitive complexity 1)
function B(param: string): string {                      // cyc +1
    switch (param) {                                     //          cog +1
        case 'create': return createData();              // cyc +1
        case 'update': return updateData();              // cyc +1
        case 'delete': return deleteData();              // cyc +1
        default: throw new Error('Unknown operation.');
    }
}
```
เนื่องจาก `switch` เรารู้อยู่แล้วว่าตัวแปรไหนกำลังถูกพิจารณาเป็นค่าต่างๆ
แค่เพียงมองผ่านๆก็รู้แล้วว่า ถ้าตัวแปรมีค่าใดๆ จะได้ผลลัพธ์อย่างไร
_(เฉพาะกรณี `switch` แล้ว `return` เลย; ถ้า `switch` แล้ว `break` จะถูกบวกค่าการ break ออกจาก scope)_

ต่างกับ `if` ที่ต้องคอยระวังว่าแต่ละ condition เชคตัวแปรใดอยู่ ซึ่งอาจจะไม่เหมือนกันก็ได้
จึงทำให้มีแต้มความยากสำหรับแต่ละ condition

ส่วนของรายละเอียดเพิ่มเติมสามารถอ่าน white paper ของ SonarSource ได้จาก reference ด้านล่าง

---

### Cognitive Complexity ในการใช้งานจริง
เนื่องจาก Cognitive Complexity ยังไม่เป็นที่แพร่หลาย tools ที่มีความสามารถในการวัด
หรือ IDE tools ที่สามารถโชว์แต้มได้ขณะเขียน code เลย ยังมีน้อย

#### Lint tools
1. SonarQube
2. ESLint (ใช้ plugin `eslint-plugin-sonarjs`)
![Cognitive complexity inspection tool](../images/cognitive-complexity-lint_ide.png)

#### IDE inspection tool
1. CongitiveComplexity (JetBrain's Rider plugin)
![Cognitive complexity inspection tool](../images/cognitive-complexity-ide-tool.png)

---

สำหรับใครที่ยังไม่เข้าใจว่า lint tools คืออะไร ใช้งานอย่างไร หรือมีประโยชน์อย่างไร
ตอนต่อไปจะอธิบายถึงการใช้ lint tools ให้มีประสิทธิภาพสำหรับทั้ง project ทำคนเดียว
และที่ทำร่วมกัน

---

#### Reference
1. [Cognitive Complexity: A new way of measuring understandability, G. Ann Campbell](https://www.sonarsource.com/docs/CognitiveComplexity.pdf)