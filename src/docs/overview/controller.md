---
title: 第一步
icon: 

---

# Prerequisites

nodeJs >= 16

# 设置

基于nest-cli初始化项目

```bash
npm i -g @nestjs/cli
nest new project-name
```
::: info
使用严格模式创建一个新的typescript项目，需要传递 --strict 参数
:::

创建后的项目结构如下
```bash
src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```
|           file           |                 description | 
| :------------------------: | :-----------------------: | 
| app.controller.ts	      | 一个单路由的基础controller  | 
| app.controller.spec.ts  |  controller的单元测试 | 
| app.module.ts           |  应用的根模块 | 
| app.service.ts	        |   一个单方法的基础service |
| main.ts                 |  应用入口 | 

`main.ts`包含一个`async function`用来引导整成应用

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

我们使用核心方法类`NestFactory`创建一个Nest应用实例。`Nest`暴露了一些静态方法允许创建一个应用实例。`create`方法会返回一个满足`INestApplication`接口的`object`

::: tip
By default, if any error happens while creating the application your app will exit with the code 1. If you want to make it throw an error instead disable the option abortOnError (e.g., NestFactory.create(AppModule, { abortOnError: false })).
:::

# 平台

Nest致力成为一个平台。平台的不依赖性，使其可以创建更多抽象的可复用的逻辑，同时开发者可以发挥不同应用类型的优势。技术上Nest可以适配任何一种Node的Http框架，只要有合适的适配器。这`Express` `fastify`两种Http框架是开箱即用的。你可以任选一种你喜欢的。

无论用哪个platform，都会暴露自己的interface。分别可以看`NestExpressApplication` and `NestFastifyApplication`

这里展示一个demo

```ts
const app = await NestFactory.create<NestExpressApplication>(AppModule);
```

# Running Application

```bash
npm run start
```
::: tip
To speed up the development process (x20 times faster builds), you can use the SWC builder by passing the -b swc flag to the start script, as follows `npm run start -- -b swc`.
:::

To watch for changes in your files, you can run the following command to start the application:

```bash
$ npm run start:dev
```
This command will watch your files, automatically recompiling and reloading the server.

# Linting and formatting

Nest脚手架自带 `eslint` `prettier`

针对CI CD、 git hooks etc.可以使用以下脚本

```bash
# Lint and autofix with eslint
$ npm run lint

# Format with prettier
$ npm run format
```