---
title: "System Decoupling"  
headliner: "รักแรกมันแยกยาก รักมากมันยากแยก ระบบใหญ่แปลกๆ จับแยกยังไงได้บ้าง ?"  
featured: true  
featuredImage: -
path: "/system-decoupling"  
date: "2020-05-14"  
tags: ["system-engineering"]
---
TD;DR - แยกระบบออกตาม "Domain" ของสิ่งที่รับผิดชอบ ดูแลง่าย Scale ง่าย และไม่จำเป็นต้องทำ API call เสมอไป

มีโอกาสได้เริ่มโปรเจคหนึ่งขึ้นมา งานกำลังไปได้สวย
ระบบขยายตามความความต้องการที่เพิ่มขึ้นเรื่อยๆ 

Models
- Monolith (as background)
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

