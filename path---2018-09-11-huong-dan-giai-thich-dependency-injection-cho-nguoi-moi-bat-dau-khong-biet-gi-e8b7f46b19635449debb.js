webpackJsonp([0xa6c9f856508a],{1335:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#t%E1%BA%A1i-sao">Tại sao</a></li>\n<li><a href="#c%C3%A1ch-gi%E1%BA%A3i-quy%E1%BA%BFt-c%E1%BB%A7a-requiresamd">Cách giải quyết của requires/AMD</a></li>\n<li><a href="#ki%E1%BB%83u-reflection">Kiểu Reflection</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="tại-sao"><a href="#t%E1%BA%A1i-sao" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao</h1>\n<p>Giờ hãy tưởng tượng chúng ta có 2 module, cái đầu tiên để gọi ajax và cái thứ 2 để route</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">service</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Service\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> <span class="token function-variable function">router</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Router\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta có một function khác cần 2 module trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">other</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đoạn code trên không có vấn đề gì cả trừ việc nó không có flexible. Nếu như chúng ta muốn dùng <code class="language-text">ServiceXML</code> hoặc <code class="language-text">ServiceJSON</code>, chúng ta không thể cứ đè ra sửa nội dung bên trong của function.</p>\n<p>Giải pháp chúng ta sẽ phải làm là đưa 2 cái dependency là <code class="language-text">service</code>, <code class="language-text">router</code> như một params cho function <code class="language-text">doSomething</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">service<span class="token punctuation">,</span> router<span class="token punctuation">,</span> other</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bằng cách này, chúng ta có thể sử dụng hàm <code class="language-text">doSomething</code> rất nhiều chổ. Tuy nhiên nó sinh ra một vấn đề khác. Nếu chúng ta sử dụng hàm <code class="language-text">doSomething</code> ở <strong>n</strong> chổ, giờ chúng ta thêm một dependency thứ 3, ko lẽ ngồi sửa hết toàn bộ những chổ đang sử dụng <code class="language-text">doSomething</code>.</p>\n<p>Tóm tắt lại chúng ta muốn</p>\n<ul>\n<li>Có thể đăng ký số lượng dependency</li>\n<li>injector cho phép nhận vào function và return về một function với những params nó mong muốn</li>\n<li>Không viết nhiều, càng ngắn càng tốt</li>\n<li>injector giữ nguyên scope của function truyền vào</li>\n<li>function truyền vào cho phép nhận custom arguments, không chỉ những dependency đã mô tả</li>\n</ul>\n<h1 id="cách-giải-quyết-của-requiresamd"><a href="#c%C3%A1ch-gi%E1%BA%A3i-quy%E1%BA%BFt-c%E1%BB%A7a-requiresamd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách giải quyết của requires/AMD</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'service\'</span><span class="token punctuation">,</span> <span class="token string">\'router\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">service<span class="token punctuation">,</span> router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Ý tưởng trước hết là mô tả những dependency cần và sau đó viết function sử dụng nó. Thứ tự argument quan trọng. Chúng ta sẽ viết 1 module gọi <strong>injector</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> doSomething <span class="token operator">=</span> injector<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'service\'</span><span class="token punctuation">,</span> <span class="token string">\'router\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">service<span class="token punctuation">,</span> router<span class="token punctuation">,</span> other</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">be</span><span class="token punctuation">(</span><span class="token string">\'Service\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">be</span><span class="token punctuation">(</span><span class="token string">\'Router\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">be</span><span class="token punctuation">(</span><span class="token string">\'Other\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token string">\'Other\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Ở đây chúng ta đang dùng <code class="language-text">expect.js</code> như một thư viện assertion  để đảm bảo đoạn code bên trong hàm <code class="language-text">doSomething</code> viết như chúng ta mong muốn</p>\n<p>Giờ chúng ta xem xét đến module injector, chúng ta sẽ viết theo kiểu <strong>singleton</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> injector <span class="token operator">=</span> <span class="token punctuation">{</span>\n  dependencies<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">register</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>dependencies<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">resolve</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">deps<span class="token punctuation">,</span> func<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nó đơn giản là một object với 2 function và một biến được dùng như storage. Chúng ta cần kiểm tra mảng <code class="language-text">deps</code> và tìm trong biến <code class="language-text">dependencies</code>, sau đó việc còn lại là gọi <code class="language-text">.apply</code> để thực thi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function-variable function">resolve</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">deps<span class="token punctuation">,</span> func<span class="token punctuation">,</span> scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>deps<span class="token punctuation">.</span>length<span class="token punctuation">,</span> d<span class="token operator">=</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dependencies<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dependencies<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Can\\\'t resolve \'</span> <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>scope <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">Array.prototype.slice.call(arguments, 0)</code> để transform các biến arguments sang một array. Viết thế này cũng còn một hàng chế là các custom params luôn phải nằm sau dependency, và không thể thay đổi thứ tự của params</p>\n<h1 id="kiểu-reflection"><a href="#ki%E1%BB%83u-reflection" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kiểu Reflection</h1>\n<p>Đây cũng là kiểu tìm viết dependency injection của Angular.</p>\n<p>Giờ nếu chúng ta gọi <code class="language-text">doSomething.toString()</code> chúng ta có kết quả sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">"<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">service<span class="token punctuation">,</span> router<span class="token punctuation">,</span> other</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>"</code></pre>\n      </div>\n<p>Trong javascript chúng ta có thể đọc một function như một string, sau đó ta có thể biết được expect được params của function này và tên của nó. Angular sử dụng cái regular expression sau để export arguments</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token regex">/^function\\s*[^\\(]*\\(\\s*([^\\)]*)\\)/m</span></code></pre>\n      </div>\n<p>Dùng nó để chỉnh lại class <code class="language-text">resolve</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function-variable function">resolve</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> func<span class="token punctuation">,</span> deps<span class="token punctuation">,</span> scope<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  func <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  deps <span class="token operator">=</span> func<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/^function\\s*[^\\(]*\\(\\s*([^\\)]*)\\)/m</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/ /g</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  scope <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>deps<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> d <span class="token operator">=</span> deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>dependencies<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> d <span class="token operator">!=</span> <span class="token string">\'\'</span> <span class="token operator">?</span> self<span class="token punctuation">.</span>dependencies<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token punctuation">:</span> a<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>scope <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Sử dụng RegExp chúng ta có kết quả</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">[</span><span class="token string">"function (service, router, other)"</span><span class="token punctuation">,</span> <span class="token string">"service, router, other"</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Chúng ta sẽ chỉ sử dụng đến item thứ 2. Sau khi xóa hết các khoảng trắng còn thừ và split cái string này ra thành một array, chúng ta có <strong>deps</strong> như mong muốn. Một thay đổi khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\nargs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>dependencies<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> d <span class="token operator">!=</span> <span class="token string">\'\'</span> <span class="token operator">?</span> self<span class="token punctuation">.</span>dependencies<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token punctuation">:</span> a<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Chạy qua tất cả giá trị dependency và nếu có còn thiếu thì đưa vào arguments để thay thế.</p>\n<p>Injector mới này có thể sử dụng như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> doSomething <span class="token operator">=</span> injector<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">service<span class="token punctuation">,</span> other<span class="token punctuation">,</span> router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">be</span><span class="token punctuation">(</span><span class="token string">\'Service\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">be</span><span class="token punctuation">(</span><span class="token string">\'Router\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">be</span><span class="token punctuation">(</span><span class="token string">\'Other\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token string">"Other"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Không cần quan tâm dependency và chúng ta có thể viết lộn xì ngầu với lại các params khác nó vẫn biết được đâu là dependency.</p>\n<p><a href="http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript">Link bài gốc</a></p>',timeToRead:4,excerpt:"Tại sao Cách giải quyết của requires/AMD Kiểu Reflection Tại sao Giờ hãy tưởng tượng chúng ta có 2 module, cái đầu tiên để gọi ajax và cái…",frontmatter:{title:"Dependency injection trong Javascript",cover:"",date:"2018-09-11",category:null,tags:["javascript"],desc:"Dependency injection là một khái niệm hay gặp không chỉ trong Angular mà còn ở nhiều ngôn ngữ lập trình khác, Dependency injection không có gì ghê gớm cả, chỉ do cách dùng từ có vẻ to lớn vậy thôi"},fields:{slug:"/2018-09-11-huong-dan-giai-thich-dependency-injection-cho-nguoi-moi-bat-dau-khong-biet-gi"}}},pathContext:{slug:"/2018-09-11-huong-dan-giai-thich-dependency-injection-cho-nguoi-moi-bat-dau-khong-biet-gi",prev:{frontmatter:{title:"Làm toast notification system trong React/Redux",desc:"Có lẽ ko có ứng dụng web nào lại ko cần thông báo đến user kết quả của một thao tác nào đó, xây một notification system để sử dụng là hết sức cần thiết",type:"post",category:null,tags:["react","javascript"],date:"2018-09-12",cover:""},fields:{slug:"/2018-09-12-huong-dan-build-notify-system-voi-react-redux"}},next:{frontmatter:{title:"Tại sao sử dụng Flow, và sử dụng Flow như thế nào trong React",desc:"Tại sao chúng ta cần type checking trong javascript, tại sao Flow lại là lựa chọn của nhiều developer hiện nay",type:"post",category:null,tags:["react"],date:"2018-09-10",cover:""},fields:{slug:"/2018-09-10-huong-dan-lam-viec-voi-flow-react-type-checking"}}}}}});
//# sourceMappingURL=path---2018-09-11-huong-dan-giai-thich-dependency-injection-cho-nguoi-moi-bat-dau-khong-biet-gi-e8b7f46b19635449debb.js.map