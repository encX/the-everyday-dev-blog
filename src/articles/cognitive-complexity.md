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

// insert a function with some pitfall in code amd briefly describe it.

จากปัญหาเหล่านี้จึงเกิดเป็น static code analyzer หรือที่รู้จักกันในชื่อว่า lint tool ขึ้นมา
