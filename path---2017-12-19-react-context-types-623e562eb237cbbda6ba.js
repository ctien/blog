webpackJsonp([47533368831554],{1266:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#t%E1%BA%A1i-sao-kh%C3%B4ng-n%C3%AAn-s%E1%BB%AD-d%E1%BB%A5ng-context">Tại sao không nên sử dụng <code class="language-text">context</code></a></li>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-sao">Sử dụng sao</a></li>\n<li><a href="#%E1%BB%A9ng-d%E1%BB%A5ng">Ứng dụng</a></li>\n<li><a href="#lifecycle-methods">Lifecycle Methods</a></li>\n</ul>\n<!-- /TOC -->\n<p>Khi build một component chúng ta thường khai báo <code class="language-text">props</code> và <code class="language-text">state</code> cho nó, nó trực quan dễ kiểm soát. Trong một số trường hợp đặc biệt, nếu muốn truyền dữ liệu từ trên xuống dưới mà không cần phải đi truyền tuần tự từng component một, có thể sử dụng <code class="language-text">context</code></p>\n<h2 id="tại-sao-không-nên-sử-dụng-code-classlanguage-textcontextcode"><a href="#t%E1%BA%A1i-sao-kh%C3%B4ng-n%C3%AAn-s%E1%BB%AD-d%E1%BB%A5ng-code-classlanguage-textcontextcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao không nên sử dụng <code class="language-text">context</code></h2>\n<p>Trong tương lai không xa <code class="language-text">context</code> sẽ được gỡ bỏ khỏi React, trên thực tế cho thấy việc sử dụng <code class="language-text">context</code> khiến việc maintain ứng dụng rất vất vả vì không biết được giá trị context từ đâu mà có. Khuyến cáo sử dụng Redux hoặc Mobx để quản lý state cho các component</p>\n<h2 id="sử-dụng-sao"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-sao" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng sao</h2>\n<p>Ví dụ có 3 component: OngNoi, Cha, Con</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Con</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Cha</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Con</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Con</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">OngNoi</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cha</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Props <em>color</em> được truyền từ OngNoi > Cha > Con, nếu sử dụng context có thể truyền thẳng từ OngNoi > Con</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Con</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nCon<span class="token punctuation">.</span>contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Cha</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Con</span><span class="token punctuation">></span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Con</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">OngNoi</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">"purple"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cha</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nOngNoi<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Bằng cách thêm kai báo cho component OngNoi <code class="language-text">childContextTypes</code> và hàm <code class="language-text">getChildContext</code>, thằng <em>Con</em> sẽ có thể truy cập đến <em>color</em> bằng <code class="language-text">contextTypes</code></p>\n<h2 id="Ứng-dụng"><a href="#%E1%BB%A8ng-d%E1%BB%A5ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ứng dụng</h2>\n<p>Trong React Router 4, component <em>Router</em> có khai báo context này, nến khi truyền các prop cho component <em>Router</em>, các component Route và Link bên trong có thể truy cập đến prop của Router</p>\n<h2 id="lifecycle-methods"><a href="#lifecycle-methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lifecycle Methods</h2>\n<p>Khi có xuất hiện khai báo <code class="language-text">contextTypes</code> trong component, các phương thức sau sẽ tiếp nhận thêm tham số <code class="language-text">context</code></p>\n<ul>\n<li>constructor(props, context)</li>\n<li>componentWillReceiveProps(nextProps, nextContext)</li>\n<li>shouldComponentUpdate(nextProps, nextState, nextContext)</li>\n<li>componentWillUpdate(nextProps, nextState, nextContext)</li>\n</ul>',timeToRead:3,excerpt:"Tại sao không nên sử dụng  Sử dụng sao Ứng dụng Lifecycle Methods Khi build một component chúng ta thường khai báo   và   cho nó, nó trực…",frontmatter:{title:"React Context Types",cover:"",date:"2017-12-19",category:"ux-ui",tags:["react","javascript"],desc:"Khi bắt đầu học React, thường chúng ta chỉ quan tâm tới prop và state, nhưng lại không để ý đến context"},fields:{slug:"/2017-12-19-react-context-types"}}},pathContext:{slug:"/2017-12-19-react-context-types",prev:{frontmatter:{title:"Một vài cải tiến của Google Calendar",desc:"Cách đây hơn một tuần Google Calendar vừa có nâng cấp lên bản mới, cùng nhìn thử giao diện có gì thay đổi",type:"post",category:"ux-ui",tags:["ux-ui"]},fields:{slug:"/2017-11-02-mot-vai-cai-tien-google-calendar"}},next:{frontmatter:{title:"React Children và React cloneElement",desc:"Tìm hiểu cách sử dụng react Children và react cloneElement",type:"post",category:"react",tags:["javascript","react"]},fields:{slug:"/2017-10-27-react-children-react-clone-element"}}}}}});
//# sourceMappingURL=path---2017-12-19-react-context-types-623e562eb237cbbda6ba.js.map