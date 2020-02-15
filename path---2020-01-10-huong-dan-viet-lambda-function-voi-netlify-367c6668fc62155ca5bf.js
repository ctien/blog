webpackJsonp([0x7e4c0077ff34],{1611:function(n,t){n.exports={data:{markdownRemark:{html:'<h2 id="lambda-function-là-gì"><a href="#lambda-function-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lambda function là gì?</h2>\n<p>Giải thích về Serverless bạn đọc bài trước có đăng</p>\n<p>Nếu bạn chỉ có một trang blog như thế này, viết bằng Gatsby, không có backend làm sao bạn có thể có được tính năng cho phép user đăng ký nhận bản tin? Ví dụ dùng dịch vụ của MailChimp đi.</p>\n<p>Chúng ta ko thể đưa API key vào trang frontend được, hiển nhiên quá mà! Ai cũng có thể lấy được cái key này thì sao.</p>\n<p>Chúng ta phải thông qua một bên ở giữa, là Lambda function trên Netlify, chúng ta đưa key này cho Netlify, nó sẽ có trách nhiệm bảo mật key này và truyền thông tin tới MailChimp</p>\n<p>Chữ Lambda được <strong>phát minh</strong> đầu tiên bởi Amazon AWS, sau này Netlify cũng dùng luôn tên này, nó là kiểu các <em>hàm trung gian</em>, giúp chúng ta giao tiếp với phía server (vì đây là dạng serverless, chúng ta dùng dịch vụ của nó cung cấp, giống như vua chúa, nếu muốn giao tiếp với anh thì chú cứ thông qua thái dám, họ sẽ truyền tin tới cho anh)</p>\n<p>Cứ dùng trang mặc định của Gatsby</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540301648/sv9k9cv1zdtr4ebqpr09.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Tạo một thư mục bên trong source code, nó sẽ chứa toàn bộ các hàm sẽ giao tiếp với Lambda. Thư mục này đặt đâu cũng được, cứ đặt vào dưới thư mục gốc tên <code class="language-text">functions</code></p>\n<blockquote>\n<p>Mỗi file chỉ chứa 1 function</p>\n</blockquote>\n<p>test.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">exports<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Mỗi function sẽ nhận 3 parameter </p>\n<ul>\n<li><code class="language-text">event</code>: chứa post data, header</li>\n<li><code class="language-text">context</code>: function này được call ở đâu, thông tin user hiện tại</li>\n<li><code class="language-text">callback</code>: hàm callback thôi, hàm này nhận param đâu tiền là error nếu có lỗi</li>\n</ul>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540301809/exdwztr8lfepei1x88ux.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<h2 id="chạy-các-function-lambda-ở-local"><a href="#ch%E1%BA%A1y-c%C3%A1c-function-lambda-%E1%BB%9F-local" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chạy các function Lambda ở local</h2>\n<p>Cần cài <code class="language-text">netlify-lambda</code> để chạy test dưới local </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">npm install netlify<span class="token operator">-</span>lambda</code></pre>\n      </div>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540301932/y8uyqgcmxa8i9sczpljo.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code class="language-powershell">netlify<span class="token operator">-</span>lambda serve &lt;functions_directory></code></pre>\n      </div>\n<p><code class="language-text">&lt;functions_directory&gt;</code> là thư mục chứa mấy function chúng ta viết</p>\n<p>Thêm đoạn <em>shortcut</em> vào trong package.json để chạy lệnh này</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540302074/xnpujx0smgs1ftul0hr2.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Bước cuối cùng cần làm, tạo file config để báo với Netlify, đây không phải là thư mục chứa source code của chúng ta, đây là thư mục sau khi build. Tạo file <code class="language-text">Netlify.toml</code> trong thư mục gốc</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540302243/gzlbxxtidpi0lukcxmmy.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Sau khi build, file bên trong <code class="language-text">functions</code> sẽ được đưa vào thư mục tên <code class="language-text">lambda</code></p>\n<p>Chạy lại đoạn script <em>shortcut</em> hồi nãy khai báo <code class="language-text">npm run start:lambda</code>, bên dưới hình này đoạn chạy bị lỗi là khi chưa tạo file <code class="language-text">Netlify.toml</code>, chúng ta bắt buộc phải tạo file này trước khi chạy</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540302301/vyr4hwlxacgkhvkvhzdn.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Mở Postman lên gọi test thử</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540302549/jblo4vceh9ylxxipnct8.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Function đầu tiên đã chạy thành công!!!</p>\n<p>Chúng ta truyền thêm một object <code class="language-text">{ &quot;name&quot; : &quot;James&quot; }</code>, và muốn nhận được một JSON object thay vì là một <code class="language-text">string</code>. Muốn vậy trong phần body chúng ta phải gọi <code class="language-text">JSON.stringify</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    statusCode<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n    body<span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> msg<span class="token punctuation">:</span> <span class="token string">"Thanks for visiting "</span> <span class="token operator">+</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// nếu không nhận được name= james</span>\n\n<span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"You\'re not James"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540303047/s7lrt4qmn8svganfbd6s.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Test trên Postman</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540303082/gmlkczsp2hhlasrrko2d.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Trường hợp phát sinh lỗi</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540303092/y1uu9ipfgy0rq6p3mtwr.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<h2 id="deploy-lên-netlify"><a href="#deploy-l%C3%AAn-netlify" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploy lên Netlify</h2>\n<p>Nãy giờ chúng ta đang chạy các Lambda function ở dưới local bằng lệnh <code class="language-text">serve</code>,  để đưa lên Netlify, chúng ta cần <code class="language-text">build</code> source code trước khi đẩy lên Netlify</p>\n<p>Chúng ta phải setup chạy 2 script, một để build Gatsby, sau đó build mấy functions lambda</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"props"</span><span class="token operator">:</span> <span class="token string">"npm run build; npm run build:lambda"</span></code></pre>\n      </div>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540315111/hv7omcr0angknnup175q.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Lưu ý: do đang dùng gatsby, nên cần 2 lệnh này, nếu bạn dùng một thằng khác, thì lệnh sẽ khác, tuy cách setup</p>\n<p>Phải cập nhập lại <strong>Netlify.toml</strong>, chúng ta sẽ báo với Netlify: "Ê, khi nào tao chạy xong <code class="language-text">prop</code>, thì mày deploy nhe"</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540315122/lytjmmofmjjgixzxycwo.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Sau khi commit lên Github, Netlify sẽ bắt đầu trigger deploy, vào trang chính của Netlify, trong tab <strong>Deployment</strong>, bạn có theo dõi xem nó đang deploy tới đâu rồi</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540315158/kulpc3u2tqftgxijpr6c.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Sau khi deploy thành công, bạn có thể chuyển qua tab <strong>Function</strong>, các function nào đã có sẽ được liệt kê ở đây</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_800,q_auto:good,f_auto/v1540315181/nblkoi0l6shvdvvybtje.png" alt="Viết và Deploy một Lambda Function trên Netlify"></p>\n<p>Cơ bản là thế thôi, các bạn có thể làm <em>"mọi thứ"</em> với function mình viết (miễn là nó có cho), như gửi email, lưu dữ liệu xuống DB, gọi một API</p>\n<p><a href="https://scotch.io/tutorials/build-and-deploy-a-serverless-function-to-netlify">https://scotch.io/tutorials/build-and-deploy-a-serverless-function-to-netlify</a></p>',timeToRead:4,excerpt:"Lambda function là gì? Giải thích về Serverless bạn đọc bài trước có đăng Nếu bạn chỉ có một trang blog như thế này, viết bằng Gatsby, không…",frontmatter:{title:"Viết và Deploy một Lambda Function trên Netlify",cover:"",date:"2020-01-10",category:null,tags:["netlify","thu-thuat"],desc:""},fields:{slug:"/2020-01-10-huong-dan-viet-lambda-function-voi-netlify"}}},pathContext:{slug:"/2020-01-10-huong-dan-viet-lambda-function-voi-netlify",prev:{frontmatter:{title:"Viết React Higher-Order Component bằng TypeScript",desc:"Cuộc sống đưa đẩy bạn phải viết TypeScript, thì bài này sẽ giúp bạn chút ít khi viết type với HOC",type:"post",category:null,tags:["hoc-thuat","react"],date:"2020-01-19",cover:""},fields:{slug:"/2020-01-19-viet-type-cho-hoc-voi-typescript"}},next:{frontmatter:{title:"Phương pháp test React Component",desc:"Bài viết được dịch từ tài liệu chính thức của React",type:"post",category:null,tags:["hoc-thuat","react"],date:"2020-01-09",cover:""},fields:{slug:"/2020-01-09-phuong-phap-test-react-component"}}}}}});
//# sourceMappingURL=path---2020-01-10-huong-dan-viet-lambda-function-voi-netlify-367c6668fc62155ca5bf.js.map