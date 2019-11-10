webpackJsonp([226066161146],{1496:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#preload">preload</a></li>\n<li><a href="#prefetch">prefetch</a></li>\n<li><a href="#preconnect">preconnect</a></li>\n<li><a href="#dns-prefetch">dns-prefetch</a></li>\n<li><a href="#prerender">prerender</a></li>\n</ul>\n<!-- /TOC -->\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/style.css<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/style.css<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dns-prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prerender<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="preload"><a href="#preload" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>preload</h2>\n<p><code class="language-text">&lt;link rel=&quot;preload&quot; /&gt;</code>  sẽ báo với trình duyệt download và cache một resource (như script hoặc stylesheet) nhanh nhất có thể. Nếu chúng ta cần resource đó ngay sau khi trang đang load.</p>\n<p>Một khi trình duyệt đã download xong resource này, trình duyệt sẽ không làm gì hết, file script đó sẽ ko được thực thi, file stylesheet sẽ ko được áp dụng. Nó cache lại ở đó, khi có một thằng nào khác cần tới nó, nó sẽ được cung cấp ngay lập tức.</p>\n<p>Cú pháp</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/style.css<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Các giá trị có thể cung cấp cho <code class="language-text">as</code></p>\n<ul>\n<li>style</li>\n<li>script</li>\n<li>font</li>\n<li>fetch</li>\n</ul>\n<p>Chúng ta cần phải cung cấp giá trị <code class="language-text">as</code> để trình duyệt biết thứ tự ưu tiên download về cho đúng.</p>\n<p>Ví dụ, sử dụng custom font, nếu sử dụng font face chúng ta đặt việc load file này trong css</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>index.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* index.css */</span>\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url">url(\'comic-sans.woff2\')</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'woff2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Theo mặc định file <code class="language-text">comic-sans.woff2</code> chỉ được download khi file <code class="language-text">index.css</code> đã được load và áp dụng. Chúng ta có thể <em>cưỡng ép</em> load file font này về trước</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>comic-sans.woff2<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>font<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="prefetch"><a href="#prefetch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>prefetch</h2>\n<p><code class="language-text">&lt;link rel=&quot;prefetch&quot; /&gt;</code> yêu cầu trình duyệt download và cache lại resource ngầm bên dưới, nó sẽ có độ ưu tiên thấp, không tranh giành thứ tự ưu tiên với các resource quan trọng hơn. Thí dụ như bạn cần resource đó ở các trang sau nữa, bạn có thể load trước để sẵn ở trang hiện tại.</p>\n<p>Cú pháp</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/style.css<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Ví dụ, user di chuyển từ home page sang trang product page, đa phần luồng đi của user sẽ là như thế, trừ trường hợp học bookmark lại trang đó, hoặc nhấp vào một link được share. Chúng ta có thể sử dụng <code class="language-text">&lt;link rel=&quot;prefetch&quot; /&gt;</code> để tải trước các file css, js sẽ dùng trên trang product.</p>\n<h2 id="preconnect"><a href="#preconnect" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>preconnect</h2>\n<p><code class="language-text">&lt;link rel=&quot;preconnect&quot; /&gt;</code> được dùng để tăng tốc độ load ban đầu bằng việc báo với trình duyệt, chúng ta sẽ load một resource từ domain nào đó không sớm thì muộn. Thí dụ chúng ta load font từ Google, CDN, JSON từ API server.</p>\n<p>Thực hư tăng tốc được bao nhiêu thì cũng chưa rõ, nhưng đây là cách chúng ta báo với trình duyệt</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://api.my-app.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="dns-prefetch"><a href="#dns-prefetch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dns-prefetch</h2>\n<p><code class="language-text">&lt;link rel=&quot;dns-prefetch&quot; /&gt;</code> công dụng cũng tương tự như <code class="language-text">preconnect</code>, nó sẽ setup sẵn các config cần thiết trên trình duyệt khi cần thực hiện một DNS resolution</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dns-prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://api.my-app.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="prerender"><a href="#prerender" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>prerender</h2>\n<p><code class="language-text">&lt;link rel=&quot;prerender&quot; /&gt;</code> yêu cầu trình duyệt load 1 url và render nó trong một tab ẩn,  khi user click vào đường link đến url đó, trang web sẽ được hiển thị ngay và luôn.</p>\n<p>Tuy nhiên là thuộc tính này tính đến thời điểm hiện tại rất ít trình duyệt hỗ trợ</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prerender<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://my-app.com/pricing<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://3perf.com/blog/link-rels/watch?v=I14fXc7sXdU&list=WL&index=2&t=0s">Preload, prefetch and other link tags\n</a></p>',timeToRead:3,excerpt:"preload prefetch preconnect dns-prefetch prerender preload   sẽ báo với trình duyệt download và cache một resource (như script hoặc…",frontmatter:{title:"Preload, prefetch và các thuộc tính khác trên link",cover:"",date:"2019-04-25",category:null,tags:["css"],desc:"Cùng tìm hiểu các attribute sử dụng trên thẻ link để cải thiện hiệu năng"},fields:{slug:"/2019-04-25-cac-thuoc-tinh-dung-tren-the-link-can-biet"}}},pathContext:{slug:"/2019-04-25-cac-thuoc-tinh-dung-tren-the-link-can-biet",prev:{frontmatter:{title:"Sử dụng try...catch đúng cách",desc:"Nhìn lại một cách cặn kẽ hơn cách chúng ta xử lý trường hợp lỗi trong javascript",type:"post",category:null,tags:["javascript"],date:"2019-05-01",cover:""},fields:{slug:"/2019-05-01-huong-dan-su-dung-try-catch-dung-cach"}},next:{frontmatter:{title:"Có gì mới trong DevTools của Chrome 74",desc:"Master chrome devtool là cần thiết cho một frontend developer, mình sẽ bắt đầu series cập nhập những tính năng mới nhất của Chrome, theo như lộ trình định sẵn thì cứ 6 tuần nó sẽ có bản cập nhập mới cho Chrome",type:"post",category:null,tags:["chrome"],date:"2019-04-24",cover:""},fields:{slug:"/2019-04-24-chrome-74-co-gi-moi"}}}}}});
//# sourceMappingURL=path---2019-04-25-cac-thuoc-tinh-dung-tren-the-link-can-biet-58008332c9d74fa911bf.js.map