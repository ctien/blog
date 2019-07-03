webpackJsonp([0xca39d089b0d2],{1340:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#single-threat-processing">Single-threat processing</a></li>\n<li><a href="#asynchronous-v%E1%BB%9Bi-callbacks">Asynchronous với Callbacks</a></li>\n<li>\n<p><a href="#promises">Promises</a></p>\n<ul>\n<li><a href="#finally">finally()</a></li>\n<li><a href="#all">all()</a></li>\n<li><a href="#race">race()</a></li>\n</ul>\n</li>\n<li><a href="#asyncawait">Async/Await</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="single-threat-processing"><a href="#single-threat-processing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Single-threat processing</h1>\n<p>Xét thử đoạn code</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">result1 <span class="token operator">=</span> <span class="token function">doSomething1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nresult2 <span class="token operator">=</span> <span class="token function">doSomething2</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Các ngôn ngữ sẽ xử lý đoạn code trên theo trình tự từ trên xuống dưới, Javascript không chỉ theo trình tự như vậy mà còn chạy trên 1 <strong>single processing threat</strong>, có nghĩa khi có một đoạn code đang chạy trên trình duyệt, trình duyệt đứng lại đợi xử lý xong mới chạy đến đoạn thứ 2, ví dụ khi click 1 button, javascript chạy xử lý và update lại DOM nếu có, một khi hoàn tất, trình duyệt tiếp tục xử lý đến thằng khác trong queue.</p>\n<ul>\n<li>Note: thằng PHP cũng dùng single threat, nhưng nó chạy trên server multi-threat như Apache. Nếu có 2 request tới cùng một trang PHP trong cùng thời điểm sẽ tạo ra 2 threat chạy độc lập</li>\n</ul>\n<h1 id="asynchronous-với-callbacks"><a href="#asynchronous-v%E1%BB%9Bi-callbacks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Asynchronous với Callbacks</h1>\n<p>Dễ thấy vấn đề với <em>single threat</em> là nếu một action tốn quá nhiều thời gian xử lý, như Ajax, trình duyệt sẽ bị <strong>chết đứng</strong> ở thời điểm đó. Giải pháp là dùng <em>asyncchronouse process</em>, nó ko bắt trình duyệt đợi nó chạy xong, mà sẽ gọi đến một function đã đăng ký (*<em>callback function</em>) khi complete.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">doSomethingAsync</span><span class="token punctuation">(</span>callback1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'finished\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// call when doSomethingAsync completes</span>\n<span class="token keyword">function</span> <span class="token function">callback1</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'doSomethingAsync complete\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Mọi thứ với callback đều ok nếu chúng ta không lồng cả chục cái callback vào trong một function</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token function">async2</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token function">async3</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'async1, async2, async3 complete.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">//.... có thánh mới debug được code kiểu này</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="promises"><a href="#promises" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promises</h1>\n<p>Được giới thiệu trong ES6, thật ra nó vẫn là dùng callback, nhưng được tổ chức lại, syntax rõ ràng hơn. <strong>Promise</strong> là một *<em>object</em> với 2 function được truyền vào như argument</p>\n<ul>\n<li><strong>resolve</strong>: được gọi khi chạy hoàn tất</li>\n<li><strong>reject</strong>: được gọi nếu có lỗi</li>\n</ul>\n<p>Ví dụ sử dụng promise</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'database\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// connect to database</span>\n<span class="token keyword">function</span> <span class="token function">asyncDBconnect</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    db<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>param<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> connection<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">else</span> <span class="token function">resolve</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu trả về một <strong>Promise</strong>, có thể gọi một chuỗi các callback trong phương thức <code class="language-text">.then()</code>, phương thức đứng sau sẽ nhận <code class="language-text">resolve</code> từ phương thức trước. Nếu lỗi ở bất kỳ vị trí nào trong <code class="language-text">then()</code> nó sẽ quăng ngay xuống <code class="language-text">catch()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">asyncDBconnect</span><span class="token punctuation">(</span><span class="token string">\'http://localhost:1234\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>asyncGetSession<span class="token punctuation">)</span>      \n  <span class="token comment">// passed result of asyncDBconnect</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>asyncGetUser<span class="token punctuation">)</span>         \n  <span class="token comment">// passed result of asyncGetSession</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>asyncLogAccess<span class="token punctuation">)</span>       \n  <span class="token comment">// passed result of asyncGetUser</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=></span> <span class="token punctuation">{</span>           \n    <span class="token comment">// non-asynchronous function</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'complete\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n    <span class="token comment">//   (passed result of asyncLogAccess)</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>            \n    <span class="token comment">//   (result passed to next .then())</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> <span class="token punctuation">{</span>             \n    <span class="token comment">// called on any reject</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="finally"><a href="#finally" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>finally()</h2>\n<p>Trong ES2018 giới thiệu thêm <code class="language-text">.finally()</code> gọi ở cuối cùng của promise, sẽ được gọi dù là <em>resolve</em> hay <em>reject</em>. Muốn dùng <code class="language-text">.finally()</code> nhớ cài thêm polyfill</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">doSomething1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>doSomething2<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>doSomething3<span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// tidy-up here!</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="all"><a href="#all" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>all()</h2>\n<p>Nếu muốn chạy cùng một lúc nhiều function sau khi <em>resolve</em>, dùng <code class="language-text">Promise.all()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span> async1<span class="token punctuation">,</span> async2<span class="token punctuation">,</span> async3 <span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>values <span class="token operator">=></span> <span class="token punctuation">{</span>           \n    <span class="token comment">// array of resolved values</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// (in same order as function array)</span>\n    <span class="token keyword">return</span> values<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// called on any reject</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu một trong 3 cái <code class="language-text">async1</code>, <code class="language-text">async2</code>, <code class="language-text">async3</code> ở trên bị lỗi, nó sẽ quăng xuống <code class="language-text">catch</code> ngay.</p>\n<h2 id="race"><a href="#race" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>race()</h2>\n<p><code class="language-text">Promise.race()</code> sẽ gọi resolve hoặc reject nếu thằng đầu tiên có kết quả (nhiều thằng chạy đua, thằng nào chạy tới đích trước tao lấy kết quả thằng đó)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span> async1<span class="token punctuation">,</span> async2<span class="token punctuation">,</span> async3 <span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>value <span class="token operator">=></span> <span class="token punctuation">{</span>            \n    <span class="token comment">// single value</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> <span class="token punctuation">{</span>             \n    <span class="token comment">// called on any reject</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Promise giải quyết được callback hell, tuy nhiên nó cũng có vấn đề của riêng nó khi sử dụng toàn bộ asynchronous trong chuỗi Promise</p>\n<h1 id="asyncawait"><a href="#asyncawait" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Async/Await</h1>\n<p>ES2017 giới thiệu <code class="language-text">async</code> và <code class="language-text">await</code>, cách viết nhìn <strong>ngon</strong> hơn của Promise, tránh được việc chuỗi các callback bằng <code class="language-text">then()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">asyncDBconnect</span><span class="token punctuation">(</span><span class="token string">\'http://localhost:1234\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>asyncGetSession<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>asyncGetUser<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>asyncLogAccess<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// run connect (self-executing function)</span>\n<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Viết lại bằng <code class="language-text">asyn/await</code></p>\n<ul>\n<li>Thêm từ khóa <code class="language-text">async</code> vào phía trước hàm có xử lý asynchronous</li>\n<li>Bên trong hàm <code class="language-text">async</code>, đặt từ khóa <code class="language-text">await</code> vào trước phương thức sử lý asynchronous trả về Promise-based</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span>\n      connection <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncDBconnect</span><span class="token punctuation">(</span><span class="token string">\'http://localhost:1234\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncGetSession</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncGetUser</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      log <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncLogAccess</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> log<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// run connect (self-executing async function)</span>\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">await</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Như đã nói <code class="language-text">async/await</code> vẫn phụ thuộc nhiều vào Promise, code sạch hơn, debug dễ hơn, quản lý lỗi tốt hơn, nhưng cũng cần nắm vững về Promise thì mới hiểu được cách nó chạy. Đôi khi chúng ta lại quên rằng dùng <code class="language-text">Promise.all()</code> sẽ hiệu quả hơn rất nhiều một chuỗi các câu <code class="language-text">await</code></p>\n<p><code class="language-text">async/await</code> sẽ không chạy bên trong vòng lập</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Thậm chí cũng không chạy luôn</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  array<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> i <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Vòng lập sẽ chạy tuần tự và luôn <strong>complete</strong> trước khi các xử lý <code class="language-text">asynchronous</code> bên trong</p>\n<p>ES2018 giới thiệu thêm cách lập asynchronous</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">doSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tuy nhiên ta có thể đạt được cùng kết quả với hàm <code class="language-text">map</code> của <em>array</em> và <code class="language-text">Promise.all()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span>\n  todo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token string">\'c\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  alltodo <span class="token operator">=</span> todo<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>v<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'iteration\'</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> <span class="token function">processSomething</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>alltodo<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a href="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/">Link bài gốc sitepoint.com, tác giả Craig Buckler</a></p>',
timeToRead:5,excerpt:"Single-threat processing Asynchronous với Callbacks Promises finally() all() race() Async/Await Single-threat processing Xét thử đoạn code…",frontmatter:{title:"Flow sử lý trong modern JS - từ callback đến promise, đến Async/Await",cover:"",date:"2018-08-14",category:null,tags:["javascript"],desc:"Cùng nhìn lại quá trình tiến hóa của javascript trong cách sử lý flow"},fields:{slug:"/2018-08-14-huong-dan-flow-xy-ly-trong-modern-js-callback-promise-async-await"}}},pathContext:{slug:"/2018-08-14-huong-dan-flow-xy-ly-trong-modern-js-callback-promise-async-await",prev:{frontmatter:{title:"Hướng dẫn cách cài đặt security rules cho Cloud Firestore",desc:"Series hướng dẫn sử dụng các service Firebase",type:"post",category:null,tags:["firestore","firebase","security"],date:"2018-08-17",cover:""},fields:{slug:"/2018-08-17-huong-dan-set-security-rules-cho-cloud-firestore"}},next:{frontmatter:{title:"Con đường để trở thành React Native developer ( phiên bản 2018)",desc:"Tiếp theo bài trước mình sẽ dịch thêm một bài để các bạn bắt đầu học lập trình React Native",type:"post",category:null,tags:["react","javascript","react-native"],date:"2018-08-13",cover:""},fields:{slug:"/2018-08-13-huong-dan-con-dong-hoc-lap-trinh-react-native"}}}}}});
//# sourceMappingURL=path---2018-08-14-huong-dan-flow-xy-ly-trong-modern-js-callback-promise-async-await-34f710590be46a96c0a6.js.map