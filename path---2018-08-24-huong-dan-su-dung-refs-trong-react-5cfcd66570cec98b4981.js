webpackJsonp([0xaaca55edf6d0],{1388:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#c%C3%A1ch-s%E1%BB%AD-d%E1%BB%A5ng-ref">Cách sử dụng Ref</a></li>\n<li><a href="#l%C6%B0u-gi%C3%A1-tr%E1%BB%8B-c%E1%BB%A7a-ref">Lưu giá trị của ref</a></li>\n<li><a href="#d%C3%B9ng-string-cho-gi%C3%A1-tr%E1%BB%8B-c%E1%BB%A7a-ref">Dùng string cho giá trị của ref</a></li>\n<li><a href="#%C4%91%C6%B0a-ref-t%E1%BB%AB-component-n%C3%A0y-sang-component-kh%C3%A1c">Đưa ref từ component này sang component khác</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="cách-sử-dụng-ref"><a href="#c%C3%A1ch-s%E1%BB%AD-d%E1%BB%A5ng-ref" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách sử dụng Ref</h1>\n<p>Trong bản React 16.3 chúng ta có thểm API là <code class="language-text">createRef</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>exampleRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>exampleRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Để truy cập đến <code class="language-text">&lt;input /&gt;</code> trong ví dụ trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>exampleRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="lưu-giá-trị-của-ref"><a href="#l%C6%B0u-gi%C3%A1-tr%E1%BB%8B-c%E1%BB%A7a-ref" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lưu giá trị của ref</h1>\n<p>Nếu không dùng <code class="language-text">createRef</code> thì chúng ta cũng có thể lưu giá trị ref này bằng một hàm callback</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>element <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> element<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>input<span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="dùng-string-cho-giá-trị-của-ref"><a href="#d%C3%B9ng-string-cho-gi%C3%A1-tr%E1%BB%8B-c%E1%BB%A7a-ref" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dùng string cho giá trị của ref</h1>\n<p>Cách sơ khai ban đầu, gán giá trị cho ref là một string</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>textInput<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token comment">// đâu đó trong component</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>textInput<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="Đưa-ref-từ-component-này-sang-component-khác"><a href="#%C4%90%C6%B0a-ref-t%E1%BB%AB-component-n%C3%A0y-sang-component-kh%C3%A1c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đưa ref từ component này sang component khác</h1>\n<p>Ref chỉ có thể access được trong chính component đang khai báo, nếu muốn truyền ref qua component khác, chúng ta dùng <code class="language-text">React.forwardRef()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> Input <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// App component</span>\n<span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Trong App component</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span></code></pre>\n      </div>',timeToRead:2,excerpt:"Cách sử dụng Ref Lưu giá trị của ref Dùng string cho giá trị của ref Đưa ref từ component này sang component khác Cách sử dụng Ref Trong bản…",frontmatter:{title:"Cách sử dụng refs trong React",cover:"",date:"2018-08-24",category:null,tags:["react","javascript"],desc:"Refs dùng để truy cập trực tiếp đến DOM trong React, nó sẽ rất hữu dụng ví dụ trong trường hợp chúng ta muốn thay đổi value của input mà ko muốn ử dụng props hoặc re-render lại toàn bộ component"},fields:{slug:"/2018-08-24-huong-dan-su-dung-refs-trong-react"}}},pathContext:{slug:"/2018-08-24-huong-dan-su-dung-refs-trong-react",prev:{frontmatter:{title:"Tại sao sử dụng Flow, và sử dụng Flow như thế nào trong React",desc:"Tại sao chúng ta cần type checking trong javascript, tại sao Flow lại là lựa chọn của nhiều developer hiện nay",type:"post",category:null,tags:["react","javascript"],date:"2018-09-10",cover:""},fields:{slug:"/2018-09-10-huong-dan-lam-viec-voi-flow-react-type-checking"}},next:{frontmatter:{title:"Checkbox hay Toggle switch - gợi ý cho thiết kế",desc:"7 trường hợp thường thấy trong thiết kế form",type:"post",category:null,tags:["ux-ui"],date:"2018-08-21",cover:"https://cdn-images-1.medium.com/max/1600/1*hiOlnb_Z7HEzr6yxn2qHsA.png"},fields:{slug:"/2018-08-21-huong-dan-su-dung-checkbox-va-toggle-switch"}}}}}});
//# sourceMappingURL=path---2018-08-24-huong-dan-su-dung-refs-trong-react-5cfcd66570cec98b4981.js.map