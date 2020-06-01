---
title: "System Decoupling"  
headliner: "รักแรกมันแยกยาก รักมากมันยากแยก ระบบใหญ่แปลกๆ จับแยกยังไงได้บ้าง ?"  
featured: true  
path: "/system-decoupling"  
date: "2020-05-14"  
tags: ["system-engineering"]
---

## เกริ่น
ครั้งหนึ่งมีโอกาสได้เริ่มโปรเจคใหม่ขึ้นมาอันนึง งานกำลังไปได้สวย
ระบบขยายความสามารถตามความความต้องการที่เพิ่มขึ้นเรื่อยๆ
code base เริ่มใหญ่ขึ้น ซึ่งแปลว่า test ก็เยอะขึ้นตามไปด้วย 
_(หรือเปล่าน้าา ทำงานเขียน test กันหรือเปล่าน้า อิอิ)_
ระบบยิ่งใหญ่ test ก็ต้องรัดกุมตามไปด้วย End-to-End test แทบจะโดนทุก path
ดังนั้น เมื่อมีการเพิ่มหรือเปลี่ยนแปลงระบบอะไรไป
กว่าจะไปถึง production ก็จะเสียเวลาระหว่างทางมากขึ้น

ที่ว่าไปนั่นคือในแง่การพัฒนาระบบ ส่วนในแง่คนทำงานก็ลำบากขึ้นไปด้วย
พอระบบใหญ่แล้ว แน่นอน ตามมาด้วย learning curve ที่สูงมาก
กว่าคนที่เข้ามาใหม่จะดู code แล้วเข้าใจระบบจนทำงานได้จริงๆก็นาน
มองในแง่ธุรกิจ แค่เผินๆก็ได้
จ้างพนักงานเข้ามาแล้วเขาสามารถเริ่มสร้างมูลค่าได้ภายใน 1 อาทิตย์ กับ 1 เดือนมันก็ต่างกันแล้ว

// todo: that's why we split it
done
==========
draft 
// todo: rethink about title and topic in general (decoupling or spliting (maybe this is split and decouple as a separated article ?))

มองภาพง่ายๆเหมือนทำงานหลายสัญญา เช่น

- สัญญา 1
  - ขึ้นระบบ platform ร้านค้า
  - หน้าเว็บโชว์สินค้ายอดนิยม ลูกค้า Search ได้ Filter ได้ตามประเภทสินค้า
  - มีระบบซื้อขาย ชำระเงิน ตัด inverntory
  - มีระบบหลังบ้านสำหรับร้านค้าจัดการ Inventory ตัวเอง
- สัญญา 2
  - feature ส่ง E-Mail และ SMS แจ้งสถานะการสั่งซื้อ
  - แก้ไขผลการ search ให้ brand ที่ลูกค้าดูบ่อยๆขึ้นมาก่อน
- สัญญา 3
  - feature chat ระหว่างร้านค้ากับลูกค้า
  - feature แนะนำสินค้าที่ลูกค้าน่าจะสนใจ
  - feature ส่ง notification หาลูกค้ากรณีที่สินค้าที่น่าจะสนใจมีโปรโมชั่น

_(Tips : จะใช้ตัวอย่างนี้ไปตลอดบทความ ลองทำความเข้าใจ requirement คร่าวๆดู)_

Models
- Monolith (as background)
- Shared storage
- Direct API call (HTTP/GRPC)
- Message exchange (+delayed exchange)
- Scheduled job

Example 
- All-in-one marketplace system
  - sell/inventory system (direct transactional)
  - messaging system [chat/email/sms] (mq)
  - recommendation system [analytics] (mq for recommendation update, scheduled to retention noti)
- Final Composition
  - FE web (+BFF)
  - BE inventory + recommendation + communication
  - MQ
  - SQL for inventory
  - KV store for recommendation matrix

Caveat
- Sync (transactional) vs Async (Job) need
- Stateful systems prevent Scaling

TD;DR - แยกระบบออกตาม "Domain" ของสิ่งที่รับผิดชอบ ดูแลง่าย Scale ง่าย และไม่จำเป็นต้องทำ API call เสมอไป
