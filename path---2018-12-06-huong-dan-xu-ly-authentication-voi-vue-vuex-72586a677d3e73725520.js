webpackJsonp([47107598145727],{1442:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#khai-b%C3%A1o-vuex-auth-module">Khai báo Vuex Auth Module</a></li>\n<li><a href="#t%E1%BB%B1-%C4%91%E1%BB%99ng-authen">Tự động authen</a></li>\n<li><a href="#authen-route">Authen Route</a></li>\n<li><a href="#x%E1%BB%AD-l%C3%BD-c%C3%A1c-t%C3%ACnh-hu%E1%BB%91ng-kh%C3%A1c">Xử lý các tình huống khác</a></li>\n</ul>\n<!-- /TOC -->\n<p>Chúng ta có những câu hỏi sau</p>\n<ul>\n<li>Lưu lại token như thế nào?</li>\n<li>Làm cách nào để redirect user sau khi authen</li>\n<li>Làm sao để chặn user truy cập một số route nếu chưa authen</li>\n</ul>\n<p>Chúng ta sẽ cùng xem xét các vấn đề trên, áp dụng trong dự án sử dụng Vue, Vuex</p>\n<p>Tuy nhiên cũng nên nhớ rằng mỗi project sẽ sử dụng luồng authen khác nhau. Nên không nên áp dụng cứng nhắc các cách được đề xuất trong bài viết này.</p>\n<p>Trước khi đọc bài này mình khuyến cáo bạn nắm rõ <a href="/2018-11-08-gioi-thieu-vuex-cho-nguoi-moi-bat-dau">kiến thức căn bản của Vuex trong bài viết này</a></p>\n<h2 id="khai-báo-vuex-auth-module"><a href="#khai-b%C3%A1o-vuex-auth-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khai báo Vuex Auth Module</h2>\n<p>Một số giá trị chúng ta cần đưa vào store:</p>\n<ul>\n<li><code class="language-text">token</code>: lúc khởi tạo nếu có trong localStorage thì lấy giá trị này</li>\n<li><code class="language-text">status</code>: trạng thái của network request (<code class="language-text">loading</code>, <code class="language-text">success</code>, <code class="language-text">error</code>)</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>\n  token<span class="token punctuation">:</span> localStorage<span class="token punctuation">.</span><span class="token function">getIte</span><span class="token punctuation">(</span><span class="token string">\'user-token\'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n  status<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Getters để lấy giá trị state này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">isAuthenticated</span><span class="token punctuation">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token operator">!</span>state<span class="token punctuation">.</span>token<span class="token punctuation">,</span>\n  <span class="token function-variable function">authStatus</span><span class="token punctuation">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>status\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Actions xử lý login, logout</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token constant">AUTH_REQUEST</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">}</span><span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Dùng promise để sau khi login thành công</span>\n    <span class="token comment">// chúng ta có thể redirect user đi đến trang khác</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> \n      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token constant">AUTH_REQUEST</span><span class="token punctuation">)</span>\n      <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>url<span class="token punctuation">:</span> <span class="token string">\'auth\'</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> user<span class="token punctuation">,</span> method<span class="token punctuation">:</span> <span class="token string">\'POST\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resp</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> token <span class="token operator">=</span> resp<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token\n                localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'user-token\'</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span>\n                <span class="token comment">// thêm header authorization:</span>\n                axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">\'Authorization\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> token\n                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token constant">AUTH_SUCCESS</span><span class="token punctuation">,</span> resp<span class="token punctuation">)</span>\n                <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token constant">USER_REQUEST</span><span class="token punctuation">)</span>\n                <span class="token function">resolve</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token constant">AUTH_ERROR</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// nếu có lỗi, xóa hết token đang có trên trình duyệt</span>\n        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">\'user-token\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token constant">AUTH_LOGOUT</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token constant">AUTH_LOGOUT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">\'user-token\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">delete</span> axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">\'Authorization\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Mutations thực hiện update lại store</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token constant">AUTH_REQUEST</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">\'loading\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token constant">AUTH_SUCCESS</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">\'success\'</span>\n    state<span class="token punctuation">.</span>token <span class="token operator">=</span> token\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token constant">AUTH_ERROR</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">\'error\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="tự-động-authen"><a href="#t%E1%BB%B1-%C4%91%E1%BB%99ng-authen" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tự động authen</h2>\n<p>Hiện tại nếu chúng ta f5 lại, chúng ta vẫn có token bên trong store (do lấy từ localStorage). Tuy nhiên authorization header trong Axios chưa được set</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'user-token\'</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">\'Authorization\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> token\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="authen-route"><a href="#authen-route" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Authen Route</h2>\n<p>Chúng ta chắc chắn sẽ muốn cấp quyền vào một số route chỉ khi có token</p>\n<p>Ví dụ đã đăng nhập sẽ được vào <code class="language-text">/account</code>, chưa đăng nhập có thể vào <code class="language-text">/login</code> và <code class="language-text">/</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">\'../store\'</span> <span class="token comment">// your vuex store </span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ifNotAuthenticated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ifAuthenticated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">\'/login\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'history\'</span><span class="token punctuation">,</span>\n  routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'Home\'</span><span class="token punctuation">,</span>\n      component<span class="token punctuation">:</span> Home<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token string">\'/account\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'Account\'</span><span class="token punctuation">,</span>\n      component<span class="token punctuation">:</span> Account<span class="token punctuation">,</span>\n      beforeEnter<span class="token punctuation">:</span> ifAuthenticated<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token string">\'/login\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'Login\'</span><span class="token punctuation">,</span>\n      component<span class="token punctuation">:</span> Login<span class="token punctuation">,</span>\n      beforeEnter<span class="token punctuation">:</span> ifNotAuthenticated<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="xử-lý-các-tình-huống-khác"><a href="#x%E1%BB%AD-l%C3%BD-c%C3%A1c-t%C3%ACnh-hu%E1%BB%91ng-kh%C3%A1c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xử lý các tình huống khác</h2>\n<p>Các tình huống khác có thể xảy ra như token hết hạn, user chưa được quyền gọi API</p>\n<p>Sử dụng Axios, chúng ta có option là <code class="language-text">interceptors</code>, nó như lính gác cổng, tất cả những response trả về từ network request sẽ đi qua đây. Chúng ta kiểm tra tất cả request nào trả về lỗi HTTP 401, dispatch ra logout action</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>config <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>err<span class="token punctuation">.</span>config<span class="token punctuation">.</span>__isRetryRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// nếu là lỗi chưa đăng nhập unauthorized, gọi lên logout</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token constant">AUTH_LOGOUT</span><span class="token punctuation">)</span>\n      <span class="token comment">// có thể đưa user về trang đăng nhập ở đây!</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a target="_blank" class="btn btn-default" rel="noopener noreferrer" href="https://github.com/sqreen/vue-authentication-example">Toàn bộ source code</a></p>\n<p>Tham khảo</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://blog.sqreen.io/authentication-best-practices-vue/">Authentication Best Practices for Vue</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16">Structuring a Vue project — Authentication</a></p>',timeToRead:4,excerpt:"Khai báo Vuex Auth Module Tự động authen Authen Route Xử lý các tình huống khác Chúng ta có những câu hỏi sau Lưu lại token như thế nào? Làm…",frontmatter:{title:"Authentication với Vue và Vuex",cover:"",date:"2018-12-06",category:null,tags:["vuejs"],desc:"Khi bắt đầu một dự án, việc chúng ta làm đầu tiên, luôn là trang đăng ký đăng nhập, hoặc gọi là xử lý luồng authen cho ngầu."},fields:{slug:"/2018-12-06-huong-dan-xu-ly-authentication-voi-vue-vuex"}}},pathContext:{slug:"/2018-12-06-huong-dan-xu-ly-authentication-voi-vue-vuex",prev:{frontmatter:{title:"Map và Object trong Javascript",desc:"Hôm rồi lên đọc document về kiểu Map trên MDN, mình khá lúng túng vì thấy nó khá giống với một Object. Viết lại cho những ai cũng đang gặp thắc mắc như mình",type:"post",category:null,tags:["javascript","mobile-web-specialist"],date:"2018-12-07",cover:""},fields:{slug:"/2018-12-07-giai-thich-su-dung-map-hay-object"}},next:{frontmatter:{title:"Tạo Array trong Javascript",desc:"Cùng xem qua các cách để tạo một array mới",type:"post",category:null,tags:["javascript"],date:"2018-12-02",cover:""},fields:{slug:"/2018-12-02-tao-array-trong-javascript"}}}}}});
//# sourceMappingURL=path---2018-12-06-huong-dan-xu-ly-authentication-voi-vue-vuex-72586a677d3e73725520.js.map