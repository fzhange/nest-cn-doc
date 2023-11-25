import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-e8aa996c.js";const t={},i=e(`<h1 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h1><p>nodeJs &gt;= 16</p><h1 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h1><p>基于nest-cli初始化项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> @nestjs/cli
nest new project-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>使用严格模式创建一个新的typescript项目，需要传递 --strict 参数</p></div><p>创建后的项目结构如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">file</th><th style="text-align:center;">description</th></tr></thead><tbody><tr><td style="text-align:center;">app.controller.ts</td><td style="text-align:center;">一个单路由的基础controller</td></tr><tr><td style="text-align:center;">app.controller.spec.ts</td><td style="text-align:center;">controller的单元测试</td></tr><tr><td style="text-align:center;">app.module.ts</td><td style="text-align:center;">应用的根模块</td></tr><tr><td style="text-align:center;">app.service.ts</td><td style="text-align:center;">一个单方法的基础service</td></tr><tr><td style="text-align:center;">main.ts</td><td style="text-align:center;">应用入口</td></tr></tbody></table><p><code>main.ts</code>包含一个<code>async function</code>用来引导整成应用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.module&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用核心方法类<code>NestFactory</code>创建一个Nest应用实例。<code>Nest</code>暴露了一些静态方法允许创建一个应用实例。<code>create</code>方法会返回一个满足<code>INestApplication</code>接口的<code>object</code></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>By default, if any error happens while creating the application your app will exit with the code 1. If you want to make it throw an error instead disable the option abortOnError (e.g., NestFactory.create(AppModule, { abortOnError: false })).</p></div><h1 id="平台" tabindex="-1"><a class="header-anchor" href="#平台" aria-hidden="true">#</a> 平台</h1><p>Nest致力成为一个平台。平台的不依赖性，使其可以创建更多抽象的可复用的逻辑，同时开发者可以发挥不同应用类型的优势。技术上Nest可以适配任何一种Node的Http框架，只要有合适的适配器。这<code>Express</code> <code>fastify</code>两种Http框架是开箱即用的。你可以任选一种你喜欢的。</p><p>无论用哪个platform，都会暴露自己的interface。分别可以看<code>NestExpressApplication</code> and <code>NestFastifyApplication</code></p><p>这里展示一个demo</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>NestExpressApplication<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="running-application" tabindex="-1"><a class="header-anchor" href="#running-application" aria-hidden="true">#</a> Running Application</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>To speed up the development process (x20 times faster builds), you can use the SWC builder by passing the -b swc flag to the start script, as follows <code>npm run start -- -b swc</code>.</p></div><p>To watch for changes in your files, you can run the following command to start the application:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run start:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will watch your files, automatically recompiling and reloading the server.</p><h1 id="linting-and-formatting" tabindex="-1"><a class="header-anchor" href="#linting-and-formatting" aria-hidden="true">#</a> Linting and formatting</h1><p>Nest脚手架自带 <code>eslint</code> <code>prettier</code></p><p>针对CI CD、 git hooks etc.可以使用以下脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Lint and autofix with eslint</span>
$ <span class="token function">npm</span> run lint

<span class="token comment"># Format with prettier</span>
$ <span class="token function">npm</span> run <span class="token function">format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),p=[i];function c(o,l){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","first-step.html.vue"]]);export{u as default};
