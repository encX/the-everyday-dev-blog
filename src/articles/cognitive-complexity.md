---
title: "Cognitive complexity"  
headliner: "เมื่อการอ่าน code ของคนอื่นเป็นเรื่องจำเป็น"  
featured: true  
featuredImage: ../images/cognitive-complexity-feature.png 
path: "/cognitive-complexity"  
date: "2019-12-16"  
tags: ["code-quality", "programming"]
---

# เมื่อการอ่าน code ของคนอื่นเป็นเรื่องจำเป็น

สำหรับหลายๆคน อาจฟังดูเหมือนเรื่องไม่ใหญ่โตอะไร 
แต่สำหรับคนที่ต้องทำงานกับระบบที่คน contribute เยอะๆ
ทำงานกับบริษัทใหญ่ที่มี culture ให้ทุกคนสามารถแก้ไขระบบของทีมอื่นได้
หรือ เป็นทีมเจ้าของระบบที่ต้อง review code ของคนอื่นเป็นประจำ
หรือ contribute project open source ต่างๆ
อาจจะประสบพบเจอกับ code จากคนมากหน้าหลายตารวมอยู่ใน project เดียวกัน
ซึ่งแน่นอนว่าทุกคนก็อาจจะไม่ได้ใช้ practice ที่ดีในการแก้ปัญหา
หรือเขียน code โดยไม่ได้ระวัง pitfall (สิ่งที่ควรหลีกเลี่ยง) ของภาษาหรือ framework ที่ใช้

// insert a function with some pitfall in code and briefly describe it.

จากปัญหาเหล่านี้จึงเกิดเป็น static code analyzer หรือที่รู้จักกันในชื่อว่า lint tool ขึ้นมา
ซึ่งจุดมุ่งหมายของ lint tool คือการตรวจ code หา code ที่จะหรืออาจจะทำงานไม่ถูกต้อง
มาถึงตรงนี้บางคนอาจถามว่า "แล้ว compiler บอกไม่ได้หรือ ว่า code มีจุดผิดพลาด จะ compile ผ่านตั้งแต่แรกหรือ ?"

คำตอบก็คือได้ แต่ไม่ทุกอย่าง แน่นอนว่า compiler จะฟ้องแน่นอน ถ้า code เรามี "Syntax error" 
เช่น statement ภาษา C# ต่อไปนี้
```csharp
var a = "something';
```
แน่นอน ทุกคนเห็นว่าตัวเปิดปิด string เป็นคนละตัวกัน โปรแกรม compile ไม่ได้แน่ๆ

แต่ถ้าทุกคนลองพิจารณา code ต่อไปนี้

```javascript
function degreeToRadiant(degree) {
  if (degree === NaN) return NaN
  else return degree * Math.Pi / 180;
}
```

ถ้าดูผ่านๆหรือบางคนไม่ได้คุ้นเคยกับ JavaScript อาจจะไม่รู้สึกว่ามีอะไรผิด
แต่จริงๆแล้ว `NaN` หรือ not-a-number ใน JavaScript เป็น object ชนิดพิเศษ
ซึ่งแน่นอน เพียงแค่เป็น object ใน JavaScript ก็ไม่สามารถเปรียบเทียบด้วยเครื่องหมาย `==` หรือ `===` ได้อยู่แล้ว
เพราะจะให้ผลลัพธ์เป็น `false` ตลอด ไม่ว่าจะเป็น `NaN === NaN` หรือ `{} === {}` ก็ตาม
และ `NaN` ยังเป็น object พิเศษที่ไม่สามารถแกะ property ออกมาดูได้ 
สิ่งที่ทำได้อย่างเดียวคือใช้ built-in function `Number.isNaN()` หรือ global `isNaN()` เท่านั้น

ดังนั้นโปรแกรมด้านบนจึงเข้า else ตลอดเวลา ซึ่งโปรแกรมจะเกิด Runtime error ขึ้นถ้า parameter `degree`
ไม่ได้เป็น type `Number` (`NaN` จัดอยู่ใน type `Number` แต่เป็นข้อยกเว้นในกรณีนี้)

และภาษา JavaScript เป็น Interpreted language ที่ไม่มีการ compile เพราะฉนั้น
ปัญหา Syntax error จะยังมองไม่เห็นจนกระทั่งนำไป execute จริงๆ
และปัญหาการเขียนโดยไม่เลี่ยง pitfall จึงจะยิ่งยากและเสียเวลาในการหา Error ใน code

ซึ่งตัว lint tool สามารถดักจับเคสเหล่านี้ได้ทันทีโดยไม่ต้องนำ code ไป execute ก่อน
โดยการทำงานของ lint tool คือ จะนำ code ไปสร้าง Abstract syntax tree
เพื่อดู flow การทำงานของโปรแกรมและดักจับ pattern ของ flow ต่างๆตามกฏที่ตั้งไว้ได้

เมื่อเรามี lint tool กับกับกฏที่ช่วยเรื่อง pitfall แล้ว
การเขียน code จะมี feedback loop (ความไวที่จะรู้ได้ว่าโปรแกรมผิดพลาด) ที่ดีขึ้น
และยังสามารถทำให้ตัวคนเขียน code สามารถเขียนรู้จากข้อผิดพลาดที่เกิดขึ้นได้เร็วขึ้นด้วย
