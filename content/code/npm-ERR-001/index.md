---
title: '解决npm install 报错 npm ERR! network request to http://registry.cnpmjs.org/vue-cli failed'
date: 2024-01-11T02:58:25+08:00
draft: false
categories: ["编程笔记"]
tags: ["npm","npm报错"]
author: "Wuji"
---

<!--more-->

#### 报错信息：

```cmd
npm ERR! code ENOTFOUND
npm ERR! syscall getaddrinfo
npm ERR! errno ENOTFOUND
npm ERR! network request to http://registry.cnpmjs.org/@vitejs%2fplugin-vue failed, reason: getaddrinfo ENOTFOUND npm.aliyun.com
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
```

#### 解决办法

起初我尝试使用`阿里镜像源`，虽然开始下载，最终还是报错了。根据网上的说法尝试使用`淘宝镜像源`，结果真的完美解决。

#### **结论：使用淘宝镜像。代码如下**

```cmd
npm config set registry https://registry.npm.taobao.org
```
