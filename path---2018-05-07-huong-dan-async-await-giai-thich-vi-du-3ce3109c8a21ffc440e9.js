webpackJsonp([45510163150066],{1380:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#gi%E1%BB%9Bi-thi%E1%BB%87u">Giới thiệu</a></li>\n<li><a href="#promise">Promise</a></li>\n<li><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-k%E1%BA%BFt-h%E1%BB%A3p-nhi%E1%BB%81u-promise">Vấn đề: Kết hợp nhiều Promise</a></li>\n<li><a href="#h%C3%A0m-async">Hàm Async</a></li>\n<li><a href="#await">Await</a></li>\n<li><a href="#x%E1%BB%AD-l%C3%BD-khi-c%C3%B3-l%E1%BB%97i">Xử lý khi có lỗi</a></li>\n<li><a href="#await-b%C3%AAn-trong-loop">Await bên trong loop</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="giới-thiệu"><a href="#gi%E1%BB%9Bi-thi%E1%BB%87u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giới thiệu</h1>\n<p><code class="language-text">Async/await</code> sinh ra để giải quyết đống lộn xộn <strong>callback</strong> của <code class="language-text">Promise</code>. Cú pháp <code class="language-text">async/await</code> sẽ giúp chúng ta diễn giải logic này một cách dễ đọc hơn, dễ maintain hơn.</p>\n<p>Trước khi bắt đầu, cũng nhìn lại một cách tổng quát Promise là gì, nếu đã nắm vững Promise, bạn có thể bỏ qua phần này.</p>\n<h1 id="promise"><a href="#promise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promise</h1>\n<p><strong>Promise</strong> trong Javascript giống như <code class="language-text">Future</code> trong Java, <code class="language-text">Task</code> trong C#, một kiểu <strong>abstraction</strong> cho phép các đoạn code chạy bất tuần tự, đầy đủ thì có thể xem thêm bài viết của mình <a href="2017-10-12-javascript-promise">ở đây về Promise trong Javascript</a></p>\n<p><strong>Promise</strong> thường được dùng trong các thao tác I/O và network, ví dụ: đọc file, tạo một HTTP request.</p>\n<p>Bình thường, do Javascript chạy kiểu single threat, mỗi một threat chỉ thực hiện một xử lý, Promise sẽ đảm bảo không chặn như vậy (còn cách nó làm như thế nào, bạn đọc bài ở link trên sẽ hiểu), thay vào đó nó sẽ gọi hàm callback mà chúng ta gắn vào trong <code class="language-text">then</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Giờ xem xét đoạn code sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Bắt đầu chạy\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Không thể biết được Promise đã kết thúc chưa..."</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu chạy đoạn code này nhiều lần, chúng ta sẽ nhận những kết quả khác nhau, có khi đoạn <code class="language-text">console.log(result)</code> chạy trước, có khi chạy sau.</p>\n<p><strong>Không có một cách nào hợp lý để chúng ta block lại các xử lý cho đến khi <code class="language-text">Promise</code> kết thúc</strong>. Muốn vậy chúng ta phải đưa đoạn code phía sau Promise vào bên trong hàm callback</p>\n<p><img src="https://nikgrozev.com/images/blog/async-await/SimplePromiseExample.png" alt="Hướng dẫn các bạn nắm vững asyn await trong javascript, kèm ví dụ cụ thể"></p>\n<p>Nếu chúng ta đưa đoạn code vào trong <code class="language-text">then</code>, nó chỉ được gọi khi Promise đó trả về <code class="language-text">success</code>, nếu <code class="language-text">error</code> thì nghĩ chạy luôn. Phải đưa thêm xử lý vào <code class="language-text">catch</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Success\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="vấn-đề-kết-hợp-nhiều-promise"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-k%E1%BA%BFt-h%E1%BB%A3p-nhi%E1%BB%81u-promise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề: Kết hợp nhiều Promise</h1>\n<p>Sử dụng 1 Promise thì không vấn đề vì, nếu cần xử lý cho một logic bất tuần tự phức tạp hơn, chúng ta sẽ phải gọp nhiều Promise.</p>\n<p>Ví dụ chúng ta cần ứng dụng thực hiện</p>\n<ol>\n<li>Tạo một HTTP request, đợi đến khi hoàn tất, in kết quả ra</li>\n<li>Sau đó tạo thêm 2 HTTP request chạy song song</li>\n<li>Sau khi cả 2 request này hoàn tất, in kết quả ra</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// tạo first request</span>\n<span class="token keyword">const</span> call1Promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncall1Promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result1</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> call2Promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> call3Promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>call2Promise<span class="token punctuation">,</span> call3Promise<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// cả 2 promise 2, 3 đã hoàn tất</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><img src="https://nikgrozev.com/images/blog/async-await/CombinedPromises.png" alt="Hướng dẫn các bạn nắm vững asyn await trong javascript, kèm ví dụ cụ thể"></p>\n<p>Và nếu chúng ta thêm một vài thao tác xử lý bất tuần tự nữa, thêm câu <code class="language-text">catch</code> nữa, mọi thứ sẽ bắt đầu rối như canh hẹ luôn.</p>\n<h1 id="hàm-async"><a href="#h%C3%A0m-async" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hàm Async</h1>\n<p><strong>Async function</strong> là một cách để chúng ta định nghĩa một <strong>hàm trả về 1 Promise đã được resolve</strong></p>\n<p>Ví dụ, 2 hàm sau là hoàn toàn như nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'TEST\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// hàm asyncF này = với hàm f ở trên</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'TEST\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tương tự, hàm <code class="language-text">async</code> sẽ <em>throw</em> một exception giống như <code class="language-text">reject</code> của promise</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// asyncF = f</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token string">\'Error\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="await"><a href="#await" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Await</h1>\n<p>Bên trong hàm <code class="language-text">async</code> ta có thể sử dụng thêm từ khóa là <code class="language-text">await</code>, và chỉ có thể sử dụng <code class="language-text">await</code> trong hàm <code class="language-text">async</code> thôi nhé, nó sẽ cho phép ta chỉ định một tác vụ phải <strong>đợi tao chạy xong</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// sau khi promise được resolved, kết quả đó sẽ dược đưa về cho response</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// bên ngoài hàm async ta phải dùng then chứ không thể gọi await, nhớ là hàm f trả về promise</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Giờ chúng ta viết lại hàm xử lý lồng nhiều Promise ở trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// đưa nó vô hàm async</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// đợi và print kết quả</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// chạy bất tuần tự 2 đứa này</span>\n    <span class="token keyword">const</span> call2Promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> call3Promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// đợi khi cả 2 thằng trên chạy xong và được resolve</span>\n    <span class="token keyword">const</span> response2 <span class="token operator">=</span> <span class="token keyword">await</span> call2Promise<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> response3 <span class="token operator">=</span> <span class="token keyword">await</span> call3Promise<span class="token punctuation">;</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// gọi hàm async</span>\n<span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nó sẽ tương tự như cách sử dụng <code class="language-text">Promise.all(...).then(...)</code> chỉ là ta viết khác đi.</p>\n<p><img src="https://nikgrozev.com/images/blog/async-await/AsyncAwaitExample.png"></p>\n<h1 id="xử-lý-khi-có-lỗi"><a href="#x%E1%BB%AD-l%C3%BD-khi-c%C3%B3-l%E1%BB%97i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xử lý khi có lỗi</h1>\n<p>Trong ví dụ trên chúng ta đã mặc định là 2 hàm <code class="language-text">call2Promise</code> và <code class="language-text">call3Promise</code> luôn thành công, nếu lỡ bất kỳ thằng nào chết, nó sẽ <code class="language-text">reject</code> ngay, dù có thằng nào đó thành công,</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Success\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu chúng ta dùng <code class="language-text">try/catch</code>, nếu một thằng bị lỗi nó cũng không văng ra ngoài luôn</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> call2Promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> call3Promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'CALL\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//vẫn được chạy dù 1 trong 2 thằng có lỗi</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="await-bên-trong-loop"><a href="#await-b%C3%AAn-trong-loop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Await bên trong loop</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'before async: \'</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'after async: \'</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bạn đoán thử xem đoạn code trên in ra kết quả gì?</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">before async:  0\nbefore async:  1\nbefore async:  2\nafter async:  3\nafter async:  3\nafter async:  3</code></pre>\n      </div>\n<p>Không đúng nhé, khi gặp <code class="language-text">await</code>, nó sẽ đợi <code class="language-text">resolve</code> mới chạy tiếp vòng loop, nên kết quả đúng sẽ là</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">before async:  0\nafter async: 0\nbefore async: 1\nafter async: 1\nbefore async: 2\nafter async: 2</code></pre>\n      </div>\n<p>Khi gặp <code class="language-text">async/await</code> trong vòng lặp, hay có nhiều <code class="language-text">await</code> bên trong hàm <code class="language-text">async</code>, thì nhớ là <strong>THẰNG Ở SAU CHỈ ĐƯỢC CHẠY KHI THẰNG TRƯỚC NÓ ĐÃ RESOLVE</strong>. Trường hợp mình hông muốn nó đợi như vậy, cho nó gọi cùng lúc luôn (song song) thì viết lại như sau</p>\n<p>Block lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">parallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> result1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Không block</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">parallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> promise1 <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> promise2 <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> result1 <span class="token operator">=</span> <span class="token keyword">await</span> promise1<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token keyword">await</span> promise2<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bạn có thắc mắc tại sao chỉ với việc tách biến thế này lại làm cho 2 <code class="language-text">await</code> chạy cùng lúc mà nó thằng trước không <code class="language-text">block</code> thằng chạy sau lại? </p>\n<p>2 cách viết này là hoàn toàn khác nhau, thật ra mình cũng chưa đủ trình để giải thích cặn kẽ tại sao nó lại chạy được, hy vọng bạn nào đọc mà hiểu thì comment giải thích dùm mình. Còn theo cách hiểu của mình</p>\n<p>Đây là cách chạy của đoạn code #1</p>\n<p><a href="https://i.imgur.com/ZbSjV3V.jpg">Imgur - Giải thích async/await của javascript</a></p>\n<p>Cách chạy của đoạn code #2\n<a href="https://i.imgur.com/F2l59c0.jpg">Imgur - Giải thích async/await của javascript</a></p>\n<p><a href="http://nikgrozev.com/2017/10/01/async-await/">Link tham khảo IKOLAY GROZEV</a>\n<a href="https://stackoverflow.com/questions/43302584/why-doesnt-the-code-after-await-run-right-away-isnt-it-supposed-to-be-non-blo">Why doesn\'t the code after await run right away? Isn\'t it supposed to be non-blocking?</a></p>',
timeToRead:7,excerpt:"Giới thiệu Promise Vấn đề: Kết hợp nhiều Promise Hàm Async Await Xử lý khi có lỗi Await bên trong loop Giới thiệu  sinh ra để giải quyết…",frontmatter:{title:"Giải thích async/await của javascript",cover:"",date:"2018-05-07",category:null,tags:["javascript"],desc:"Hướng dẫn các bạn nắm vững async/await trong javascript, kèm ví dụ cụ thể"},fields:{slug:"/2018-05-07-huong-dan-async-await-giai-thich-vi-du"}}},pathContext:{slug:"/2018-05-07-huong-dan-async-await-giai-thich-vi-du",prev:{frontmatter:{title:"React Context API - có phải sẽ thay thế Redux",desc:"Thử sử dụng React Context API để thay thể Redux cho State Management",type:"post",category:null,tags:["javascript","react"],date:"2018-05-16",cover:""},fields:{slug:"/2018-05-16-huong-dan-react-context-api-ke-thay-the-redux"}},next:{frontmatter:{title:"Transition trong React Native với React Navigation",desc:"Hướng dẫn làm transition trong React Native với react navigation",type:"post",category:null,tags:["javascript","react","react-native"],date:"2018-05-02",cover:""},fields:{slug:"/2018-05-02-huong-dan-transition-voi-react-navigation"}}}}}});
//# sourceMappingURL=path---2018-05-07-huong-dan-async-await-giai-thich-vi-du-3ce3109c8a21ffc440e9.js.map