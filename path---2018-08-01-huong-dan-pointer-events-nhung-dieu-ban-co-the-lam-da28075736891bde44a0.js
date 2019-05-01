webpackJsonp([0xb218f0c61674],{1319:function(n,a){n.exports={data:{markdownRemark:{html:'<p><code class="language-text">pointer-events</code> thường được sử dụng nhất để bỏ qua sự kiện click trên element.</p>\n<h1 id="thay-đổi-style-của-element-parent-khi-hover"><a href="#thay-%C4%91%E1%BB%95i-style-c%E1%BB%A7a-element-parent-khi-hover" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thay đổi style của element parent khi hover</h1>\n<p>Khi button được hover lên, chúng ta thay đổi style của thằng cha</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>parent<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>btn<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    Hover me\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> border-color 0.15s ease-in-out<span class="token selector">;\n  &amp;:hover</span> <span class="token punctuation">{</span>\n    <span class="token property">border-color</span><span class="token punctuation">:</span> #0069d9<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.btn</span> <span class="token punctuation">{</span>\n  <span class="token property">pointer-events</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu đoạn code trên ko set <code class="language-text">pointer-events: none</code> thì khi ta hover lên <code class="language-text">&lt;div class=&#39;parent&#39;/&gt;</code> nó sẽ thay đổi ngay, ở đây ta đang chặn lại để sự thay đổi chỉ xảy ra khi hover lên button</p>\n<h1 id="thay-đổi-style-của-element-khác"><a href="#thay-%C4%91%E1%BB%95i-style-c%E1%BB%A7a-element-kh%C3%A1c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thay đổi style của element khác</h1>\n<p>Khi hover lên <code class="language-text">.btn</code>, <code class="language-text">.element</code> sẽ thay đổi màu text</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>parent<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>btn<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>element<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token selector">;\n  &amp;:hover</span> <span class="token punctuation">{</span>\n    <span class="token selector">.element</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> #28a745<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.btn</span> <span class="token punctuation">{</span>\n  <span class="token property">pointer-events</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://codepen.io/MartijnCuppens/pen/MBjqbM">Xem toàn bộ demo</a></p>',timeToRead:1,excerpt:" thường được sử dụng nhất để bỏ qua sự kiện click trên element. Thay đổi style của element parent khi hover Khi button được hover lên, chúng…",frontmatter:{title:"Những điều có thể làm với pointer-events",cover:"",date:"2018-08-01",category:null,tags:["css"],desc:"Một vài ứng dụng khác của pointer-events"},fields:{slug:"/2018-08-01-huong-dan-pointer-events-nhung-dieu-ban-co-the-lam"}}},pathContext:{slug:"/2018-08-01-huong-dan-pointer-events-nhung-dieu-ban-co-the-lam",prev:{frontmatter:{title:"Hướng dẫn cơ bản để làm việc với Javascript regular expression",desc:"Những khái niệm quan trọng nhất kèm ví dụ dễ hiểu nhất để bạn không còn sợ mỗi khi đụng vô regular expression",type:"post",category:null,tags:["javascript"],date:"2018-08-05",cover:""},fields:{slug:"/2018-08-05-huong-dan-lam-viec-voi-javascript-regular-expressions"}},next:{frontmatter:{title:"Tầm quan trọng của thuộc tính sizes, srcset trong thẻ img",desc:"Hướng dẫn sử dụng srcset và sizes để tối ưu việc load ảnh responsive",type:"post",category:null,tags:["css","mobile-web-specialist"],date:"2018-07-30",cover:""},fields:{slug:"/2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img"}}}}}});
//# sourceMappingURL=path---2018-08-01-huong-dan-pointer-events-nhung-dieu-ban-co-the-lam-da28075736891bde44a0.js.map