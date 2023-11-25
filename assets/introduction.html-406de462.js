import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as d,a as n,b as e,d as t,f as s}from"./app-e8aa996c.js";const r={},l=s('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>Nest(NestJs)是一个用于构建高效，可伸缩的node服务端应用的框架。基于typescript，结合了OOP(面向对象编程)、FP(函数式编程)和FRP(函数式响应式编程)的。</p><p>同时Nest底层整合了强大的<code>Express</code>框架（默认情况下），同时也可选的支持<code>Fastify</code>框架。</p><p>Nest在这些框架之上做了一层抽象，同时也直接暴露的他们的<code>api</code>给开发者。</p><h1 id="设计哲学" tabindex="-1"><a class="header-anchor" href="#设计哲学" aria-hidden="true">#</a> 设计哲学</h1><p>首先感谢<code>node</code>使得<code>Js</code>变成了一种前后端通用的语言。这里有好多惊艳的项目，比如<code>vue</code> <code>react</code> <code>Angular</code>,他们使得前端开发变的更高效，便捷。同时在node端，也存在大量优秀的库。然而虽然存在大量的libraries、helpers、tools在node端。但是没有一个应用可以高效的解决node应用的<code>结构</code>问题</p><p><code>Nest</code>提供了开箱即用的应用架构，可以帮助开发者创建、高可测、可伸缩、松散耦合、简易维护的node应用。</p><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>',8),p={href:"https://docs.nestjs.com/",target:"_blank",rel:"noopener noreferrer"},h=s(`<p>使用nest脚手架可以参考下面的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> @nestjs/cli
nest new project-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>使用严格模式创建一个新的typescript项目，需要传递 --strict 参数</p></div><p>使用Git去初始化一个TS的nest项目也是支持的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/nestjs/typescript-starter.git project
$ <span class="token builtin class-name">cd</span> project
$ <span class="token function">npm</span> <span class="token function">install</span>
$ <span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"Info",-1),v={href:"https://github.com/Rich-Harris/degit",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>如果你想初始化一个Js的应用，可以使用<code>javascript-starter.git</code></p><p>你也可以通过<code>npm</code>或者<code>yarn</code>安装核心包和一些支持的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> i <span class="token parameter variable">--save</span> @nestjs/core @nestjs/common rxjs reflect-metadata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function _(f,g){const a=c("ExternalLinkIcon");return i(),d("div",null,[l,n("p",null,[e("你可以使用"),n("a",p,[e("nest-cli"),t(a)]),e("，或者clone一个项目。（两个可以产生相同的结果）")]),h,n("div",u,[m,n("p",null,[e("If you'd like to clone the repository without the git history, you can use "),n("a",v,[e("degit"),t(a)]),e(".")])]),b])}const j=o(r,[["render",_],["__file","introduction.html.vue"]]);export{j as default};
