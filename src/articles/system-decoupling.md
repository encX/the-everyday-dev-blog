---
title: "System Decoupling"  
headliner: "รักแรกมันแยกยาก รักมากมันยากแยก ระบบใหญ่แปลกๆ จับแยกยังไงได้บ้าง ?"  
featured: true  
featuredImage: -
path: "/system-decoupling"  
date: "2020-05-14"  
tags: ["system-engineer"]
---
TD;DR - 

Models
- Monolith (as background)
- Direct API call (HTTP/GRPC)
- Message exchange (+delayed exchange)
- Scheduled job

Example 
- All-in-one marketplace system
  - sell/inventory system (transactional)
  - messaging system [chat/email] (mq)
  - recommendation system [analytics] (scheduled)
- and add service to utilize only SMS
- Then break Email and SMS apart

Caveat
- Sync (transactional) vs Async (Job) need
- Stateful systems prevent Scaling

