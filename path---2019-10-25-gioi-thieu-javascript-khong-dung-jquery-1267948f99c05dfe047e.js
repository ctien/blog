webpackJsonp([0xb874c95ef485],{1586:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#ch%e1%bb%8dn-element">Chọn element</a></li>\n<li><a href="#ch%e1%ba%a1y-function-tr%c3%aan-c%c3%a1c-element-%c4%91%c3%a3-ch%e1%bb%8dn">Chạy function trên các element đã chọn</a></li>\n<li><a href="#t%c3%acm-element-con-b%c3%aan-trong-element-cha-%c4%91%c3%a3-ch%e1%bb%8dn">Tìm element con bên trong element cha đã chọn</a></li>\n<li><a href="#di-chuy%e1%bb%83n-qua-c%c3%a1c-element-k%e1%bb%81-c%e1%ba%adn">Di chuyển qua các element kề cận</a></li>\n<li><a href="#g%e1%ba%afn-s%e1%bb%b1-ki%e1%bb%87n">Gắn sự kiện</a></li>\n<li><a href="#dispatch-event">Dispatch event</a></li>\n<li><a href="#styling-cho-element">Styling cho element</a></li>\n<li><a href="#%e1%ba%a8n-hi%e1%bb%87n-element">Ẩn hiện element</a></li>\n<li><a href="#document-ready">Document ready</a></li>\n<li><a href="#l%c3%a0m-vi%e1%bb%87c-v%e1%bb%9bi-class">Làm việc với class</a></li>\n<li><a href="#network-request">Network request</a></li>\n<li><a href="#t%e1%ba%a1o-element">Tạo element</a></li>\n</ul>\n<!-- /TOC -->\n<p>Hiện giờ chúng ta đã làm việc nhiều với các framework <em>hại điện</em> hơn nhiều so với jQuery, nên rất ít chi đụng tới DOM thật, không còn ngày tháng <em>xào trộn</em> HTML bằng jQuery, chúng ta chỉ định nghĩa khi nào render, render cái gì. Tuy nhiên, kỹ năng <em>sờ mó</em> vào DOM là cần thiết cho mọi lập trình viên FE. Bây giờ muốn <em>sờ</em> vào DOM chúng ta cần nắm cách dùng javascript thuần.</p>\n<h2 id="chọn-element"><a href="#ch%E1%BB%8Dn-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chọn element</h2>\n<blockquote>\n<p>document.querySelector(\'.vuilaptrinh\')</p>\n</blockquote>\n<p>Nó trả về một HTMLElement object <strong>đầu tiên</strong> thỏa điều kiện CSS Selector, cái <code class="language-text">.vuilaptrinh</code> này gọi là CSS Selector.</p>\n<p>Nói là đầu tiên vì nếu có <em>dăm ba cái</em> <code class="language-text">.vuilaptrinh</code> nó cũng chỉ trả về thằng đầu tiên</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vuilaptrinh<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vuilaptrinh<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vuilaptrinh<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<blockquote>\n<p>document.querySelectorAll(\'.vuilaptrinh\')</p>\n</blockquote>\n<p>Nó sẽ trả về một danh sách các element thỏa điều kiện CSS selector, ví dụ 3 thằng <code class="language-text">.vuilaptrinh</code> ở trên đều được chọn.</p>\n<h2 id="chạy-function-trên-các-element-đã-chọn"><a href="#ch%E1%BA%A1y-function-tr%C3%AAn-c%C3%A1c-element-%C4%91%C3%A3-ch%E1%BB%8Dn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chạy function trên các element đã chọn</h2>\n<p>"Sờ" được các element này rồi, thì chúng ta sẽ muốn làm tiếp cái gì đó, chứ không chỉ <em>sờ cho vui</em>, chúng ta phải loop qua toàn bộ element đã <em>sờ</em> được bằng vòng lặp <code class="language-text">.forEach</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'.vuilaptrinh\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">vui</span> <span class="token operator">=></span> <span class="token punctuation">{</span> vui<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span> <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="tìm-element-con-bên-trong-element-cha-đã-chọn"><a href="#t%C3%ACm-element-con-b%C3%AAn-trong-element-cha-%C4%91%C3%A3-ch%E1%BB%8Dn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tìm element con bên trong element cha đã chọn</h2>\n<p>Chúng ta gọi lại <code class="language-text">.querySelector</code> trên element cha thôi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> cha <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.vuilaptrinh\'</span><span class="token punctuation">)</span>\ncha<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.luckyluu\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="di-chuyển-qua-các-element-kề-cận"><a href="#di-chuy%E1%BB%83n-qua-c%C3%A1c-element-k%E1%BB%81-c%E1%BA%ADn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Di chuyển qua các element kề cận</h2>\n<p>Hồi nhỏ học tiếng anh, cô dạy "brother", "sister" là anh chị em, lớn lên xem Youtube mới biết, tụi nước ngoài nó dùng từ <strong>sibling</strong> để nói anh chị em, chứ ít khi dùng brother, sister. Javascript bê luôn nguyên chữ này vào để xài</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bochungno<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>anhtrai<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vuilaptrinh<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>emgai<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.vuilaptrinh\'</span><span class="token punctuation">)</span>\nbox<span class="token punctuation">.</span>nextElementSibling<span class="token punctuation">;</span> <span class="token comment">// emgai</span>\nbox<span class="token punctuation">.</span>previousElementSibling<span class="token punctuation">;</span> <span class="token comment">// anhtrai</span>\nbox<span class="token punctuation">.</span>parentElement<span class="token punctuation">;</span> <span class="token comment">// bochungno</span></code></pre>\n      </div>\n<h2 id="gắn-sự-kiện"><a href="#g%E1%BA%AFn-s%E1%BB%B1-ki%E1%BB%87n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gắn sự kiện</h2>\n<blockquote>\n<p>addEventListener</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mouseenter"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keyup"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="dispatch-event"><a href="#dispatch-event" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dispatch event</h2>\n<p>Nếu cần <em>bún</em> ra một sự kiện bằng javascript một cách chủ động, ko đợi sự kiện <em>tự</em> xảy ra</p>\n<blockquote>\n<p>dispatchEvent</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">document<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">\'myEvent\'</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.box\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">\'myEvent\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="styling-cho-element"><a href="#styling-cho-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styling cho element</h2>\n<p>Cái này cần tra cứu và học một số thuộc tính hay xài, nguyên tắc chung là viết thuộc tính css theo kiểu camelCase</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"#000"</span><span class="token punctuation">;</span>\nbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>\nbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>paddingLeft <span class="token operator">=</span> <span class="token string">"10px"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="ẩn-hiện-element"><a href="#%E1%BA%A9n-hi%E1%BB%87n-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ẩn hiện element</h2>\n<blockquote>\n<p>style.display</p>\n</blockquote>\n<p>Trỏ đến thuộc tính <code class="language-text">style</code>, thay đổi giá trị display thành <code class="language-text">none</code> hoặc <code class="language-text">block</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="document-ready"><a href="#document-ready" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Document ready</h2>\n<p>Một trong những tình huống hay gặp là chúng ta cần chạy một đoạn javascript sau khi HTML đã render xong</p>\n<blockquote>\n<p>DOMContentLoaded</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// khai báo hàm ready để xài cho tiện</span>\n<span class="token keyword">var</span> <span class="token function-variable function">ready</span> <span class="token operator">=</span> <span class="token parameter">callback</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">!=</span> <span class="token string">\'loading\'</span><span class="token punctuation">)</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token keyword">else</span> document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'DOMContentLoaded\'</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n <span class="token comment">// thực hiện xử lý gì đó</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="làm-việc-với-class"><a href="#l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-class" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Làm việc với class</h2>\n<blockquote>\n<p>classList</p>\n</blockquote>\n<p>Thông qua <code class="language-text">classList</code> chúng ta có thể thêm-xóa-toggle một class</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.box\'</span><span class="token punctuation">)</span>\nbox<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'focus\'</span><span class="token punctuation">)</span>\nbox<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">\'focus\'</span><span class="token punctuation">)</span>\nbox<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">\'focus\'</span><span class="token punctuation">)</span>\nbox<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'focus\'</span><span class="token punctuation">,</span> <span class="token string">\'blurred\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Để kiểm tra element có class nào đó không</p>\n<blockquote>\n<p>classList.contains</p>\n</blockquote>\n<p>Ví dụ, kiểm tra xem element là <code class="language-text">.box</code> có chứa class là <code class="language-text">active</code> không</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.box\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">\'focus\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="network-request"><a href="#network-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Network request</h2>\n<blockquote>\n<p>fetch</p>\n</blockquote>\n<p>Mình có bài chi tiết về API này rồi, các bạn đọc lại <a href="/2018-10-01-huong-dan-gioi-thieu-fetch-javascript">Giới thiệu fetch() của javascript</a></p>\n<h2 id="tạo-element"><a href="#t%E1%BA%A1o-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tạo element</h2>\n<p>Tạo thẻ <code class="language-text">&lt;div /&gt;</code> với nội dung là <code class="language-text">&lt;div&gt;text&lt;/div&gt;</code>, rồi chèn nó vào <code class="language-text">&lt;div class=&#39;box&#39; /&gt;</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span>\n<span class="token comment">// thêm nội dung text</span>\nel<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">\'text\'</span>\n<span class="token comment">// chèn element nào vào đâu đó</span>\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.box\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span></code></pre>\n      </div>',timeToRead:5,excerpt:"Chọn element Chạy function trên các element đã chọn Tìm element con bên trong element cha đã chọn Di chuyển qua các element kề cận Gắn sự…",frontmatter:{title:"Bạn không cần jQuery",cover:"",date:"2019-10-25",category:null,tags:["javascript"],desc:"Không cần jQuery, bạn thể thể dùng javascript thuần để thực hiện những thao tác trước đây bạn nghĩ phải có jQuery cơ"},fields:{slug:"/2019-10-25-gioi-thieu-javascript-khong-dung-jquery"}}},pathContext:{slug:"/2019-10-25-gioi-thieu-javascript-khong-dung-jquery",prev:{frontmatter:{title:"Có gì mới trong DevTools của Chrome 78",desc:"Master chrome devtool là cần thiết cho một frontend developer, mình sẽ bắt đầu series cập nhập những tính năng mới nhất của Chrome, theo như lộ trình định sẵn thì cứ 6 tuần nó sẽ có bản cập nhập mới cho Chrome",type:"post",category:null,tags:["chrome"],date:"2019-10-27",cover:"https://i.imgur.com/bj1kcFp.png"},fields:{slug:"/2019-10-27-chrome-78-co-gi-moi"}},next:{frontmatter:{title:"Giới thiệu Temporal Dead Zone trong javascript",desc:"Bạn đã biết hoisted? bạn cần biết thêm khái niệm Temporal Dead Zone là đủ một cặp",type:"post",category:null,tags:["javascript"],date:"2019-10-21",cover:""},fields:{slug:"/2019-10-21-gioi-thieu-temporary-dead-zone-cua-javascript"}}}}}});
//# sourceMappingURL=path---2019-10-25-gioi-thieu-javascript-khong-dung-jquery-1267948f99c05dfe047e.js.map