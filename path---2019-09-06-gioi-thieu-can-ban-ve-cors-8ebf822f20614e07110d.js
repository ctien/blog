webpackJsonp([0x6a000d904cbe],{1559:function(e,n){e.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#access-control-allow-origin">Access-Control-Allow-Origin</a></li>\n<li>\n<p><a href="#c%c3%a1c-ki%e1%bb%83u-request-cors">Các kiểu request CORS</a></p>\n<ul>\n<li><a href="#request-%c4%91%c6%a1n-thu%e1%ba%a7n-nh%c6%b0-get-post-head">Request đơn thuần như <code class="language-text">GET</code>, <code class="language-text">POST</code>, <code class="language-text">HEAD</code></a></li>\n<li><a href="#preflight-request">Preflight request</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<p>Cross-Origin Resource Sharing (CORS) là một cơ chế sử dụng thông tin trên HTTP header để báo với trình duyệt, cho phép ứng dụng web chạy từ <em>nhà</em> này, có quyền truy xuất resource từ 1 <strong>nhà</strong> khác (2 thằng gọi là khác nhà khi khác tên miền, khác port, khác giao thức http và https)</p>\n<p>Ví dụ một request cross-origin: nhà bạn ở <a href="http://domain-a.com">http://domain-a.com</a> dùng javascript gửi request bên nhà <a href="http://api.domain-b.com/data.json">http://api.domain-b.com/data.json</a></p>\n<p>Vì lý do bảo mật, trình duyệt sẽ không cho thực hiện các request cross-origin như vậy. Nghĩa là các ứng dụng web gọi API chỉ có thể sử dụng resource từ cùng <em>nhà</em> (same-origin policy là từ chuẩn, nếu bạn cần research thêm), trừ khi response từ <em>nhà</em> khác đó cho phép gọi CORS (bằng cách thêm một số thông tin trên header)</p>\n<p>Các request có thể dùng CORS</p>\n<ul>\n<li>Gửi một network request bằng <code class="language-text">fetch</code></li>\n<li>Web font, hoặc load <code class="language-text">@font-face</code> trong CSS</li>\n<li>WebGL texture</li>\n<li>Image, video</li>\n</ul>\n<p>Khi config thành công trên server, server sẽ trả thêm một số thông tin trên header để trình duyệt biết và cấp phép chạy</p>\n<h2 id="access-control-allow-origin"><a href="#access-control-allow-origin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Access-Control-Allow-Origin</h2>\n<p>Chỉ định các tên miền nào được phép truy cập,  ví dụ để cho phép tất cả tên miền có thể gọi tới</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">Access-Control-Allow-Origin<span class="token operator">:</span> *</code></pre>\n      </div>\n<p>Cho phép 1 tên miền cụ thể</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">Access-Control-Allow-Origin<span class="token operator">:</span> https<span class="token operator">:</span><span class="token comment">//example.com</span></code></pre>\n      </div>\n<h2 id="các-kiểu-request-cors"><a href="#c%C3%A1c-ki%E1%BB%83u-request-cors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Các kiểu request CORS</h2>\n<p>Có 2 kiểu CORS request: các request <em>đơn thuần</em>, và các request <strong>preflight</strong>, 2 cái này sẽ do trình duyệt xác định sử dụng cái nào, là một developer chúng ta cũng thật sự không cần quan tâm.</p>\n<h3 id="request-đơn-thuần-như-code-classlanguage-textgetcode-code-classlanguage-textpostcode-code-classlanguage-textheadcode"><a href="#request-%C4%91%C6%A1n-thu%E1%BA%A7n-nh%C6%B0-code-classlanguage-textgetcode-code-classlanguage-textpostcode-code-classlanguage-textheadcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Request đơn thuần như <code class="language-text">GET</code>, <code class="language-text">POST</code>, <code class="language-text">HEAD</code></h3>\n<p>Các request được trình duyệt xếp loại <em>đơn thuần</em> là\nGET, POST, HEAD\nSử dụng <a href="https://fetch.spec.whatwg.org/#cors-safelisted-request-header">CORS safe -listed header</a>\nKhi sử dụng <code class="language-text">Content-Type</code>, chỉ các giá trị sau là được cho phép <code class="language-text">application/x-www-form-urlencoded</code>, <code class="language-text">multipart/form-data</code>,  <code class="language-text">text/plain</code>\nKhông có các listener nào được đăng ký trên <code class="language-text">XMLHttpRequestUpload</code>\nKhông sử dụng <a href="https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream">ReadableStream</a></p>\n<h3 id="preflight-request"><a href="#preflight-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Preflight request</h3>\n<p>Đơn giản là ngược lại các trường hợp ở trên thì sẽ là dạng preflight, trình duyệt sẽ gửi đi một request ở phương thức <code class="language-text">options</code> để xác định server có hỗ trợ ko trước khi thực sự gửi đi request chính.</p>\n<p>Đối với loại preflight request, ngoài việc chuyển phương thức sang <code class="language-text">options</code>, nó sẽ set thêm một số thuộc tính trên header</p>\n<p><code class="language-text">Access-Control-Request-Method</code>:  phương thức GET hay POST nên được sử dụng\n<code class="language-text">Access-Control-Request-Headers</code>: kiểu header muốn sử dụng\n<code class="language-text">Origin</code>: nơi gửi request</p>\n<p>Ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"># Request\ncurl -i -X OPTIONS localhost<span class="token operator">:</span><span class="token number">3001</span>/api/ping \\\n-H \'Access-Control-Request-Method<span class="token operator">:</span> GET\' \\\n-H \'Access-Control-Request-Headers<span class="token operator">:</span> Content-Type<span class="token punctuation">,</span> Accept\' \\\n-H \'Origin<span class="token operator">:</span> http<span class="token operator">:</span><span class="token comment">//localhost:3000\'</span></code></pre>\n      </div>\n<p>Chúng ta có thể tạm dịch nó ra ngôn ngữ tự nhiên là “Tao muốn thực hiện một request dạng GET với <code class="language-text">content-type</code> và <code class="language-text">Accept</code> header từ địa chỉ localhost:3000 có được ko?”</p>\n<p>Kết quả trả về từ server sẽ cho phép trình duyệt tiến hành tiếp, hay dừng lại ở đó. Response từ server sẽ như thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json">HTTP/<span class="token number">1.1</span> <span class="token number">204</span> No Content\nAccess-Control-Allow-Origin<span class="token operator">:</span> *\nAccess-Control-Allow-Methods<span class="token operator">:</span> GET<span class="token punctuation">,</span>HEAD<span class="token punctuation">,</span>PUT<span class="token punctuation">,</span>PATCH<span class="token punctuation">,</span>POST<span class="token punctuation">,</span>DELETE\nVary<span class="token operator">:</span> Access-Control-Request-Headers\nAccess-Control-Allow-Headers<span class="token operator">:</span> Content-Type<span class="token punctuation">,</span> Accept\nContent-Length<span class="token operator">:</span> <span class="token number">0</span>\nDate<span class="token operator">:</span> Fri<span class="token punctuation">,</span> <span class="token number">05</span> Apr <span class="token number">2019</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">41</span><span class="token operator">:</span><span class="token number">08</span> GMT\nConnection<span class="token operator">:</span> keep-alive</code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/\n">📜 CORS Tutorial: A Guide to Cross-Origin Resource Sharing</a></p>',timeToRead:4,excerpt:"Access-Control-Allow-Origin Các kiểu request CORS Request đơn thuần như  ,  ,  Preflight request Cross-Origin Resource Sharing (CORS) là một…",frontmatter:{title:"Làm quen khái niệm CORS của Web",cover:"",date:"2019-09-06",category:null,tags:["javascript","hoc-thuat"],desc:"Bài này khá căn bản và cần thiết cho bạn nào chưa biết gì về CORS, nghe ai đó nói về từ khóa ghê gớm này mà ko biết nó là gì, không để cập đến vấn đề setup làm sao để chạy CORS trên server - vì mình ko biết code phía server đâu"},fields:{slug:"/2019-09-06-gioi-thieu-can-ban-ve-cors"}}},pathContext:{slug:"/2019-09-06-gioi-thieu-can-ban-ve-cors",prev:{frontmatter:{title:"Làm quen với phương pháp Atomic để structure source code, design",desc:"Atom, molecule, organism, template, và page là những khái niệm chính của phương pháp này",type:"post",category:null,tags:["javascript","ux-ui","kinh-nghiem"],date:"2019-09-13",cover:"https://miro.medium.com/max/1838/1*uhcVPeGql8ejpHjYIbpdJQ.png"},fields:{slug:"/2019-09-13-giai-thich-phuong-phap-atomic"}},next:{frontmatter:{title:"Làm quen với kiến trúc Serverless",desc:"Mình không phải chuyên gia trong lĩnh vực này, nghiên cứu để biết thêm, thấy cũng hay, chia sẽ cho mọi người cùng đọc",type:"post",category:null,tags:["javascript","hoc-thuat"],date:"2019-08-30",cover:""},fields:{slug:"/2019-08-30-lam-quen-voi-kien-truc-serverless"}}}}}});
//# sourceMappingURL=path---2019-09-06-gioi-thieu-can-ban-ve-cors-8ebf822f20614e07110d.js.map