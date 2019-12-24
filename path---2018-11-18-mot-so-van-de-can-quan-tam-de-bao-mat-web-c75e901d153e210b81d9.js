webpackJsonp([0x5c603e9127b9],{1494:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#c%C3%A1ch-qu%E1%BA%A3n-l%C3%BD-session-hi%E1%BB%87n-t%E1%BA%A1i">Cách quản lý Session hiện tại</a></p>\n<ul>\n<li><a href="#session-qu%E1%BA%A3n-l%C3%BD-b%E1%BB%9Fi-server">Session quản lý bởi server</a></li>\n<li><a href="#session-qu%E1%BA%A3n-l%C3%BD-%E1%BB%9F-client">Session quản lý ở client</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#m%E1%BB%99t-s%E1%BB%91-ki%E1%BB%83u-t%E1%BA%A5n-c%C3%B4ng">Một số kiểu tấn công</a></p>\n<ul>\n<li><a href="#csrf-cross-site-request-forgery">CSRF (Cross-Site Request Forgery)</a></li>\n<li><a href="#c%C3%A1ch-ng%C4%83n-ch%E1%BA%B7n-1-s%E1%BB%AD-d%E1%BB%A5ng-html-token">Cách ngăn chặn #1: Sử dụng HTML token</a></li>\n<li><a href="#c%C3%A1ch-ng%C4%83n-ch%E1%BA%B7n-2-origin-header">Cách ngăn chặn #2: Origin Header</a></li>\n<li><a href="#c%C3%A1ch-ng%C4%83n-ch%E1%BA%B7n-3-d%C3%B9ng-transparent-token">Cách ngăn chặn #3: dùng transparent token</a></li>\n<li><a href="#cross-site-scripting-xss">Cross-Site Scripting (XSS)</a></li>\n<li><a href="#store-xss---l%C6%B0u-%C4%91o%E1%BA%A1n-script-%C4%91%C3%B3-l%C3%AAn-tr%C3%AAn-server">Store XSS - lưu đoạn script đó lên trên server</a></li>\n<li><a href="#reflect-xss">Reflect XSS</a></li>\n<li><a href="#dom-based-xss">DOM-Based XSS</a></li>\n</ul>\n</li>\n<li><a href="#c%C3%B4ng-c%E1%BB%A5-ki%E1%BB%83m-tra">Công cụ kiểm tra</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="cách-quản-lý-session-hiện-tại"><a href="#c%C3%A1ch-qu%E1%BA%A3n-l%C3%BD-session-hi%E1%BB%87n-t%E1%BA%A1i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách quản lý Session hiện tại</h2>\n<p>HTTP = stateless</p>\n<ul>\n<li>Tất cả request từ cùng 1 client không liên quan gì với nhau</li>\n<li>Server không có cách nào để lưu tạm giá trị state\nHTTP hỗ trợ gửi đi dữ liệu authentication</li>\n<li>Thông qua <strong>Header.Authorization</strong></li>\n<li>Gửi thông tin kèm theo tất cả request</li>\n<li>Server không can thiệp gì trên từng session</li>\n</ul>\n<h3 id="session-quản-lý-bởi-server"><a href="#session-qu%E1%BA%A3n-l%C3%BD-b%E1%BB%9Fi-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Session quản lý bởi server</h3>\n<p>Server toàn quyền kiểm soát session, kiểm tra tình trạng active, expire, invalid date, xóa session</p>\n<p>Đại diện cho cách này là dùng Cookie</p>\n<ul>\n<li>Dữ liệu được truyền qua lại giữa server và client</li>\n<li>Hầu hết các trình duyệt đều hỗ trợ, <strong>khó</strong>, nếu sử dụng bên ngoài trình duyệt (ứng dụng điện thoại chẳng hạn)</li>\n<li>Bị tấn công <a href="#csrf-cross-site-request-forgery">CSRF</a></li>\n</ul>\n<p>Theo mặc định các request sẽ không nên gửi kèm thông tin xác thực tài khoản (ví dụ cookie), nếu cần gửi thêm thông tin này bằng thiết đặt <code class="language-text">withCredentials</code> thủ công, phía server đồng thời cũng gửi lại trong response header giá trị <code class="language-text">Access-Control-Allow-Credentials: true</code></p>\n<h3 id="session-quản-lý-ở-client"><a href="#session-qu%E1%BA%A3n-l%C3%BD-%E1%BB%9F-client" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Session quản lý ở client</h3>\n<p>Đưa toàn bộ thông tin session xuống phía client\nServer không kiểm soát session nào đang active\nDữ liệu session được gửi đi trên mỗi request</p>\n<p>Đại diện cho kiểu này là dùng Token (JWT đang là phổ biến nhất)</p>\n<ul>\n<li>Dữ liệu session được lưu xuống token, server gửi token này qua HTTP header hoặc body của response</li>\n<li>Ứng dụng tự quản lý chuyện gửi server token này</li>\n<li>Trên mỗi request gửi đi nó không tự chèn token vào, do đó nó không thể tấn công bằng <a href="#csrf-cross-site-request-forgery">CSRF</a></li>\n<li>Mồi ngon của tấn công <a href="#cross-site-scripting-xss">XSS</a></li>\n</ul>\n<h2 id="một-số-kiểu-tấn-công"><a href="#m%E1%BB%99t-s%E1%BB%91-ki%E1%BB%83u-t%E1%BA%A5n-c%C3%B4ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Một số kiểu tấn công</h2>\n<h3 id="csrf-cross-site-request-forgery"><a href="#csrf-cross-site-request-forgery" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSRF (Cross-Site Request Forgery)</h3>\n<p>Kiểu tấn công rất phổ biến, nếu thông tin session được gửi qua Cookie. Đại khái là nếu bạn đăng nhập vào facebook.com, sau đó truy cập vào trang web nào đó bị hack rồi, trang bị hack này sẽ gửi một trang có nội dung html bên trong đó nó dùng một thẻ nào đó (như <code class="language-text">&lt;img /&gt;</code>, <code class="language-text">&lt;iframe/&gt;</code>, <code class="language-text">&lt;link/&gt;</code>, <code class="language-text">&lt;bgsound/&gt;</code>, <code class="language-text">&lt;background /&gt;</code>) để gửi một request thay đổi email lên trang facebook.com</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>facebook.com/api/1/destroy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>facebook.com/api/1/destroy<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bgsound</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>facebook.com/api/1/destroy<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>background</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>facebook.com/api/1/destroy<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>facebook.com/api/1/destroy<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/sRrzge5.png" alt="CSRF (Cross-Site Request Forgery)"></p>\n<h4 id="cách-ngăn-chặn-1-sử-dụng-html-token"><a href="#c%C3%A1ch-ng%C4%83n-ch%E1%BA%B7n-1-s%E1%BB%AD-d%E1%BB%A5ng-html-token" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách ngăn chặn #1: Sử dụng HTML token</h4>\n<p>Dấu token bên trong HTML, ví dụ như nhét nó trong form, server khi nhận được sẽ kiểm tra lại để chắc chắn là token này hợp lệ </p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit.php<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>hidden<span class="token punctuation">\'</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>CSRFToken<span class="token punctuation">\'</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>OWY4NmQwODE4ODRjN2Q2NTlhMmZlYWEwYzU1YWQwMTVhM2JmNGYxYjJiMGI4MjJjZDE1ZDZMGYwMGEwOA==<span class="token punctuation">\'</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Tuy nhiên cách này sẽ không thích hợp với SPA, vì yêu cầu phía server phải quản lý session của từng user đang login</p>\n<h4 id="cách-ngăn-chặn-2-origin-header"><a href="#c%C3%A1ch-ng%C4%83n-ch%E1%BA%B7n-2-origin-header" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách ngăn chặn #2: Origin Header</h4>\n<p>Với những request như POST/PUT/DELETE, tự động thêm Origin Header để xác thực yêu cầu</p>\n<p><img src="https://i.stack.imgur.com/ymk6L.png" alt="Cách ngăn chặn #2: Origin Header"></p>\n<p><img src="https://i.imgur.com/wXzd41T.jpg" alt="Cách ngăn chặn #2: Origin Header"></p>\n<h4 id="cách-ngăn-chặn-3-dùng-transparent-token"><a href="#c%C3%A1ch-ng%C4%83n-ch%E1%BA%B7n-3-d%C3%B9ng-transparent-token" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách ngăn chặn #3: dùng transparent token</h4>\n<p>So sánh giá trị cookie với giá trị header</p>\n<p>User gửi đi một request, nó nhận được 1 Session Cookie và 1 CSRF Token Cookie.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Set-Cookie: session=...\nSet-Cookie: CSRF-Token=123</code></pre>\n      </div>\n<p>Khi ứng dụng gửi đi một request, javascript sẽ copy cookie và đưa vào header <code class="language-text">X-CSRF-Token</code> chỉ javascript trên trang hiện tại mới truy xuất được thông tin này</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Cookie: session=...\nCookie: CSRF-Token=123\nX-CSRF-Token: 123</code></pre>\n      </div>\n<p>Server đơn giản là kiểm tra 2 giá trị <code class="language-text">Cookie: CSRF-Token</code> và <code class="language-text">X-CSRF-Token</code> có khớp không</p>\n<h3 id="cross-site-scripting-xss"><a href="#cross-site-scripting-xss" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cross-Site Scripting (XSS)</h3>\n<p>Hacker sẽ tìm cách để chạy javascript trên trang trình duyệt của user, khi user truy cập vào một trang đã bị hack. Hacker sẽ dùng những cách sau</p>\n<h4 id="store-xss---lưu-đoạn-script-đó-lên-trên-server"><a href="#store-xss---l%C6%B0u-%C4%91o%E1%BA%A1n-script-%C4%91%C3%B3-l%C3%AAn-tr%C3%AAn-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Store XSS - lưu đoạn script đó lên trên server</h4>\n<p><img src="https://i.imgur.com/45lHKy2.jpg" alt="Cross-Site Scripting (XSS)"></p>\n<h4 id="reflect-xss"><a href="#reflect-xss" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reflect XSS</h4>\n<p><img src="https://i.imgur.com/dbRVLC5.jpg" alt="Reflect XSS"></p>\n<h4 id="dom-based-xss"><a href="#dom-based-xss" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DOM-Based XSS</h4>\n<p><img src="https://i.imgur.com/29G28Ee.jpg" alt="Reflect XSS"></p>\n<p>Cách phổ biến để phòng chống</p>\n<ul>\n<li>Filter hết mấy đoạn html nguy hiểm (như &#x3C; >, " ", &#x26;) trước khi lưu</li>\n<li>Dùng thư viện để escape context-sensitive trước khi output</li>\n</ul>\n<h2 id="công-cụ-kiểm-tra"><a href="#c%C3%B4ng-c%E1%BB%A5-ki%E1%BB%83m-tra" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Công cụ kiểm tra</h2>\n<p>Một số trang online để check</p>\n<p><a href="https://securityheaders.com/">https://securityheaders.com/</a></p>\n<p><a href="https://sitecheck.sucuri.net/">https://sitecheck.sucuri.net/</a></p>\n<p><a href="https://www.ssllabs.com/ssltest/">https://www.ssllabs.com/ssltest/</a></p>\n<p><a href="https://quttera.com/">https://quttera.com/</a></p>\n<p><a href="https://detectify.com/">https://detectify.com/</a></p>\n<p><a href="https://app.webinspector.com/">https://app.webinspector.com/</a></p>\n<p><a href="https://app.upguard.com/webscan">https://app.upguard.com/webscan</a></p>\n<p><a href="https://www.youtube.com/watch?v=UFPGOvDrTOk" target="_blank" rel="noopener noreferrer">Getting Single Page Application Security Right by Philippe De Ryck</a></p>',timeToRead:7,excerpt:"Cách quản lý Session hiện tại Session quản lý bởi server Session quản lý ở client Một số kiểu tấn công CSRF (Cross-Site Request Forgery)…",frontmatter:{title:"Bảo mật web - Một số kiểu tấn công",cover:"",date:"2018-11-18",category:null,tags:["javascript"],desc:"Tổng quát các vấn đề bạn cần quan tâm để bảo mật ứng dụng web"},fields:{slug:"/2018-11-18-mot-so-van-de-can-quan-tam-de-bao-mat-web"}}},pathContext:{slug:"/2018-11-18-mot-so-van-de-can-quan-tam-de-bao-mat-web",prev:{frontmatter:{title:"Xử lý lỗi nếu có xảy ra trong javascript",desc:"Lỗi nếu có xảy ra, phải được xử lý hết tránh để chết nguyên ứng dụng. Điểm lại một vài cách xử lý lỗi trong javascript",type:"post",category:null,tags:["javascript"],date:"2018-11-19",cover:""},fields:{slug:"/2018-11-19-xu-ly-loi-neu-co-xay-ra-trong-javascript"}},next:{frontmatter:{title:"Viết animation cho Vue Component",desc:"Làm một số animation đơn giản bằng công cụ có sẵn của Vue",type:"post",category:null,tags:["vuejs"],date:"2018-11-17",cover:""},fields:{slug:"/2018-11-17-huong-dan-lam-animation-voi-vue-component"}}}}}});
//# sourceMappingURL=path---2018-11-18-mot-so-van-de-can-quan-tam-de-bao-mat-web-c75e901d153e210b81d9.js.map