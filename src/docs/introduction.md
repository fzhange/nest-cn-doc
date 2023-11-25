---
title: 介绍
icon: 

---

# 介绍

Nest(NestJs)是一个用于构建高效，可伸缩的node服务端应用的框架。基于typescript，结合了OOP(面向对象编程)、FP(函数式编程)和FRP(函数式响应式编程)的。

同时Nest底层整合了强大的`Express`框架（默认情况下），同时也可选的支持`Fastify`框架。

Nest在这些框架之上做了一层抽象，同时也直接暴露的他们的`api`给开发者。

# 设计哲学

首先感谢`node`使得`Js`变成了一种前后端通用的语言。这里有好多惊艳的项目，比如`vue` `react` `Angular`,他们使得前端开发变的更高效，便捷。同时在node端，也存在大量优秀的库。然而虽然存在大量的libraries、helpers、tools在node端。但是没有一个应用可以高效的解决node应用的`结构`问题

`Nest`提供了开箱即用的应用架构，可以帮助开发者创建、高可测、可伸缩、松散耦合、简易维护的node应用。

# 安装

你可以使用[nest-cli](https://docs.nestjs.com/)，或者clone一个项目。（两个可以产生相同的结果）

使用nest脚手架可以参考下面的命令

```bash
npm i -g @nestjs/cli
nest new project-name
```

::: info
使用严格模式创建一个新的typescript项目，需要传递 --strict 参数
:::

使用Git去初始化一个TS的nest项目也是支持的

```bash
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start
```

::: info
If you'd like to clone the repository without the git history, you can use [degit](https://github.com/Rich-Harris/degit).
:::

如果你想初始化一个Js的应用，可以使用`javascript-starter.git`

你也可以通过`npm`或者`yarn`安装核心包和一些支持的文件。

```bash
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```
