---
title: 'eclipse镜像下载及插件仓库'
date: 2023-12-16T23:14:31+08:00
draft: false
categories: ["编程笔记"]
tags: ["Eclipse"]
author: "Wuji"
---

Eclipse 官网下载太慢，可以通过国内镜像下载。
<!--more-->

## 软件镜像

点击下载[Eclipse清华镜像源](https://mirrors.tuna.tsinghua.edu.cn/eclipse/technology/epp/downloads/release/)



## 插件镜像配置

以 Luna 为例，点击 `Help` → `Install New Software...` → `Available Software Sites` 可以看到所有的更新源，将其中的 `https://download.eclipse.org` 全部替换成以下链接即可。

```markdown
https://mirrors.tuna.tsinghua.edu.cn/eclipse
```
