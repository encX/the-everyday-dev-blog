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
ซึ่งแน่นอนว่าทุกคนก็อาจจะไม่ได้เขียน code สวยงาม
ไม่ได้ใช้ practice ที่ดีในการแก้ปัญหา หรือ แม้แต่อ่านแล้วไม่สามารถเข้าใจได้เลยด้วยซ้ำ

// insert some unreadable function here

จากปัญหาเหล่านี้จึงเกิดเป็น lint tool หรือ static code analyzer ขึ้นมา
