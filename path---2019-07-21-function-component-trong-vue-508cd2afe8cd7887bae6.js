webpackJsonp([0xe3c4820ba9ae],{1546:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#Function-Component-trong-Vue-l%C3%A0-g%C3%AC">Function Component trong Vue là gì</a></li>\n<li><a href="#Truy-xu%E1%BA%A5t-d%E1%BB%AF-li%E1%BB%87u">Truy xuất dữ liệu</a></li>\n<li><a href="#Attribute">Attribute</a></li>\n<li><a href="#K%E1%BA%BFt">Kết</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="function-component-trong-vue-là-gì"><a href="#function-component-trong-vue-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Function Component trong Vue là gì</h2>\n<p>Component <strong>không</strong> chứa <code class="language-text">state</code> và không có <code class="language-text">instance</code>, không thể tham chiếu đến chính nó bằng từ khóa <code class="language-text">this</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// dùng vue template</span>\n<span class="gatsby-highlight-code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">></span></span>\n</span>\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// dùng render function</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">\tfunctional<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n</span>\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">//...</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="truy-xuất-dữ-liệu"><a href="#truy-xu%E1%BA%A5t-d%E1%BB%AF-li%E1%BB%87u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Truy xuất dữ liệu</h2>\n<p>Nếu không có <code class="language-text">state</code> hay <code class="language-text">instance</code> vậy làm sao chúng ta có thể tham chiếu đến dữ liệu và phương thức? Vue cung cấp tham số <code class="language-text">context</code> bên dưới hàm render để chúng ta truy xuất: <strong>prop, children, slot, scopedSlot, data, parent, listener, injection</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">\t\t<span class="token punctuation">{</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>someProp <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</span>\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\tprops<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tsomeProp<span class="token punctuation">:</span> String\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\tfunctional<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n\tprops<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tsomeProp<span class="token punctuation">:</span> String\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">const</span> someProp <span class="token operator">=</span> ctx<span class="token punctuation">.</span>props<span class="token punctuation">.</span>someProp\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="attribute"><a href="#attribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Attribute</h2>\n<p><strong>attribute không được truyền xuống tự động, ví dụ như <code class="language-text">class</code> và <code class="language-text">id</code> mặc định bị bỏ qua</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> src<span class="token operator">/</span>components<span class="token operator">/</span>ArticleTeaser<span class="token punctuation">.</span>vue <span class="token operator">--</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n\t<span class="token operator">&lt;</span>UiHeadline\n\t\tid<span class="token operator">=</span><span class="token string">"hyphenCase(article.title)"</span>\n\t\t<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"ArticleTeaser__title"</span>\n\t\t@click<span class="token operator">=</span><span class="token string">"readMore"</span>\n\t<span class="token operator">></span>\t\n\t\t<span class="token punctuation">{</span><span class="token punctuation">{</span> article<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">UiHeadline</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> src<span class="token operator">/</span>components<span class="token operator">/</span>UiHeadline<span class="token punctuation">.</span>vue <span class="token operator">--</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><code class="language-text">id</code>, <code class="language-text">class</code>, kể cả <code class="language-text">@click</code> cũng không được truyền xuống. Nếu không mở source code đó ai mà biết được tại sao truyền các attribute này xuống mà nó không chạy.</p>\n<p>Hên là có cách giải quyết, nếu bạn đã viết function component thì bạn phải chịu trách nhiệm bổ sung cách giải quyết cho nó</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span>\n<span class="gatsby-highlight-code-line">\t\t<span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>data.attrs<span class="token punctuation">"</span></span>\n</span><span class="gatsby-highlight-code-line">\t\t<span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>listeners<span class="token punctuation">"</span></span>\n</span>\t<span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Tuy nhiên, chưa xong hết được, vì <code class="language-text">class</code> nó lại không nằm trong <code class="language-text">data.attrs</code></p>\n<p>Bạn phải thông qua <code class="language-text">data.class</code>/ <code class="language-text">data.staticClass</code> và <code class="language-text">data.style</code>/<code class="language-text">data.staticStyle</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Đưa vào <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">data.class</span><span class="token template-punctuation string">`</span></span> <span class="token operator">--</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UiHeadline</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[\'my-class\']<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Đưa vào <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">data.staticClass</span><span class="token template-punctuation string">`</span></span> <span class="token operator">--</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UiHeadline</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-class<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span>\n<span class="gatsby-highlight-code-line">\t\t<span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[data.class, data.staticClass]<span class="token punctuation">"</span></span>\n</span><span class="gatsby-highlight-code-line">\t\t<span class="token attr-name">:</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value">[data.style<span class="token punctuation">,</span> data.staticStyle]</span><span class="token punctuation">"</span></span>\n</span>\t\t<span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>data.attrs<span class="token punctuation">"</span></span>\n\t\t<span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>listeners<span class="token punctuation">"</span></span>\n\t<span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="kết"><a href="#k%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết</h2>\n<p>Thế quái nào chúng ta lại muốn viết function component, khi mà ta phải tự xử nhiều thứ quá hiển nhiên như vậy.</p>\n<p>Anh Austin Gil ảnh có đo, thì thấy <a href="https://codesandbox.io/s/vue-stateful-vs-functional-yterr">function component nó nhanh hơn chút xíu so với một component có state</a>. Cái này theo bên React họ lại bảo bây giờ các js engine của trình duyệt nó handle dạng function và class gần như không khác nhiều </p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://stegosource.com/vue-js-functional-components-what-why-and-when/">Vue.js functional components: What, Why, and When?</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://markus.oberlehner.net/blog/working-with-functional-vue-components/">Working With Functional Vue.js Components</a></p>',timeToRead:3,excerpt:"Function Component trong Vue là gì Truy xuất dữ liệu Attribute Kết Function Component trong Vue là gì Component  không  chứa   và không có…",frontmatter:{title:"Function Component trong Vue",cover:"",date:"2019-07-21",category:null,tags:["vuejs","hoc-thuat"],desc:"Không được xuất chúng như là function component của React, nên function component trong Vue không có nhiều người để ý. Hy vọng tương lai nó sẽ được nâng cấp để cạnh tranh với bên React đang quảng bá quá rầm rộ."},fields:{slug:"/2019-07-21-function-component-trong-vue"}}},pathContext:{slug:"/2019-07-21-function-component-trong-vue",prev:{frontmatter:{title:"Nguyên lý nền tảng của lập trình function",desc:"Khái niệm ngàn người biết, bạn cũng phải biết",type:"post",category:null,tags:["javascript","hoc-thuat"],date:"2019-07-26",cover:""},fields:{slug:"/2019-07-26-nguyen-ly-chung-cua-lap-trinh-huong-function"}},next:{frontmatter:{title:"10 nguyên tắc lập trình nền tảng mà lập trình viên nào cũng cần biết",desc:"Nhớ thời đại học quá nên ôn lại kiến thức vở lòng mấy bạn ơi",type:"post",category:null,tags:["javascript","hoc-thuat","kinh-nghiem"],date:"2019-07-13",cover:""},fields:{slug:"/2019-07-13-nguyen-tac-moi-lap-trinh-vien-can-biet"}}}}}});
//# sourceMappingURL=path---2019-07-21-function-component-trong-vue-508cd2afe8cd7887bae6.js.map