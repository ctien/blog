webpackJsonp([52976512473363],{1443:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#Package-l%C3%A0-g%C3%AC-v%C3%A0-module-l%C3%A0-g%C3%AC">Package là gì, và module là gì</a></li>\n<li><a href="#C%C3%A0i-%C4%91%E1%BA%B7t">Cài đặt</a></li>\n<li><a href="#Ki%E1%BB%83m-tra">Kiểm tra</a></li>\n<li><a href="#Publish">Publish</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="package-là-gì-và-module-là-gì"><a href="#package-l%C3%A0-g%C3%AC-v%C3%A0-module-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Package là gì, và module là gì</h2>\n<p>Npm sẽ phân biệt 2 khái niệm <strong>package</strong> và <strong>module</strong> </p>\n<p><strong>Package</strong> là một thư mục chứa một gói phần mềm được mô tả bởi file package.json</p>\n<p><strong>Module</strong> là một thư mục chứa file package.json, chứa một <code class="language-text">default export</code>, cho phép loading module này bằng <code class="language-text">require()</code> trong Node</p>\n<p>Thư mục <strong>node_modules</strong> là nơi mà thằng Node.js sẽ tìm các module cần thiết</p>\n<p>Một cách tóm tắt, hầu hết các npm package chúng ta cài là module, tuy nhiên hông nhất thiết npm package là module</p>\n<p>Những package CLI chỉ chứa các đoạn command-line, chúng ta ko thể load được bằng require, kiểu package như vậy không thể xem là module</p>\n<p>Module là được load từ 1 file như thế này mới xem là module</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> acronym <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'acronym\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="cài-đặt"><a href="#c%C3%A0i-%C4%91%E1%BA%B7t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cài đặt</h2>\n<p>Tạo một thư mục trống, init package npm mới bằng <code class="language-text">npm init</code> hoặc <code class="language-text">npm init --yes</code> nếu muốn trả lời yes cho tất cả các câu hỏi.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">mkdir acronym <span class="token operator">&amp;&amp;</span> cd acronym\nnpm init <span class="token operator">--</span>yes</code></pre>\n      </div>\n<p>Trỏ vào thư mục này, chúng ta sẽ có file <code class="language-text">package.json</code> như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n          <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"acronym"</span><span class="token punctuation">,</span>\n          <span class="token string">"version"</span><span class="token punctuation">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>\n          <span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n          <span class="token string">"main"</span><span class="token punctuation">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>\n          <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              <span class="token string">"test"</span><span class="token punctuation">:</span> <span class="token string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token string">"author"</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n          <span class="token string">"license"</span><span class="token punctuation">:</span> <span class="token string">"ISC"</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Theo mặc định, một sẽ có 1 file <code class="language-text">index.js</code>, với <code class="language-text">default export</code></p>\n<p>Sửa file <strong>package.json</strong>, để bổ sung thông tin tác giả, chúng ta đi theo nguyên tắc là <code class="language-text">Your Name &lt;email@example.com&gt;</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">    <span class="token punctuation">{</span>\n          <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"acronym"</span><span class="token punctuation">,</span>\n          <span class="token string">"version"</span><span class="token punctuation">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>\n          <span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">"Transform sentences to acronyms."</span><span class="token punctuation">,</span>\n          <span class="token string">"main"</span><span class="token punctuation">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>\n          <span class="token string">"author"</span><span class="token punctuation">:</span> <span class="token string">"luubinhan &lt;luubinhan@gmail.me>"</span> <span class="token comment">// không bắt buộc</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>File <code class="language-text">index.js</code> nội dung đại loại sẽ như thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">    <span class="token string">"use strict"</span><span class="token punctuation">;</span>\n\n    module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">acronym</span><span class="token punctuation">(</span>sentence<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="kiểm-tra"><a href="#ki%E1%BB%83m-tra" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kiểm tra</h2>\n<p>Trước khi publish nó lên npm, trong ta có thể dùng <code class="language-text">npm link</code> để kiểm tra dưới local trước. Đại khái <code class="language-text">npm link</code> sẽ cho phép chúng ta trỏ thư mục package vào thư mục <code class="language-text">node_modules</code> global. Chúng ta cần thực hiện 2 bước</p>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code class="language-powershell">cd ~<span class="token operator">/</span>duong<span class="token operator">-</span>dan<span class="token operator">-</span>toi<span class="token operator">-</span>thu<span class="token operator">-</span>muc<span class="token operator">/</span>acronym\nnpm link</code></pre>\n      </div>\n<p>Sau đó, trong thư mục sử dụng package</p>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code class="language-powershell">cd ~<span class="token operator">/</span>duong<span class="token operator">-</span>dan<span class="token operator">-</span>toi<span class="token operator">-</span>thu<span class="token operator">-</span>muc<span class="token operator">/</span>project<span class="token operator">-</span>nao<span class="token operator">-</span><span class="token keyword">do</span>\nnpm link acronym</code></pre>\n      </div>\n<p>Bên trong thư mục <strong>node_modules</strong> bây giờ sẽ như thế này</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_900,q_auto:good,f_auto/media/16958/DAUsrFheT8GoWDgais3E_Screen%20Shot%202017-06-26%20at%205.59.29%20PM.png"></p>\n<h2 id="publish"><a href="#publish" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Publish</h2>\n<p>Nếu package chúng ta bị trùng tên trên npm, sẽ nhận thông báo khi publish</p>\n<p><img src="https://scotch-res.cloudinary.com/image/upload/dpr_1,w_900,q_auto:good,f_auto/media/16958/Ib1IU5lWQfSrmfi23EOU_Screen%20Shot%202017-06-09%20at%2012.35.50%20PM%20(2).png"></p>\n<p>Tất nhiên trước khi có quyền publish lên npm chúng ta phải tạo một user trên npm, bằng lệnh <code class="language-text">npm adduser</code> hoặc lên site nó đăng ký. Sau đó login bằng <code class="language-text">npm login</code> để nó nhớ chúng ta.</p>\n<p>Có thể kiểm tra npm có nhớ chúng ta chưa bằng <code class="language-text">npm whoami</code> (tui là ai)</p>\n<p>Mọi thứ đã hoàn tất, <code class="language-text">npm publish</code> để trình làng một module cho thiên hạ</p>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code class="language-powershell">npm publish</code></pre>\n      </div>\n<p>Package sau khi publish sẽ nằm ở đây <code class="language-text">https://npmjs.com/package/&lt;package&gt;</code></p>\n<p>Ngày nó đó ko muốn cho thiên hạ xài nữa</p>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code class="language-powershell">npm unpublish</code></pre>\n      </div>\n<p>Khi cần update lên version mới</p>\n<div class="gatsby-highlight">\n      <pre class="language-powershell"><code class="language-powershell">npm version &lt;update_type></code></pre>\n      </div>\n<p>Đọc thêm <a href="https://npmjs.com/package/%3Cpackage%3E">cách đặt tên version ở đây</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://scotch.io/bar-talk/how-to-build-and-publish-a-npm-package">How to Build and Publish an npm Package</a></p>',timeToRead:3,excerpt:"Package là gì, và module là gì Cài đặt Kiểm tra Publish Package là gì, và module là gì Npm sẽ phân biệt 2 khái niệm  package  và  module…",frontmatter:{title:"Hướng dẫn tạo một package, publish nó lên npm",cover:"",date:"2019-06-06",category:null,tags:["javascript"],desc:"Nếu bạn có một package nào đó muốn chia sẽ cùng mọi người trên npm, thì đây là cách bạn publish package make-by-me như vậy lên npm"},fields:{slug:"/2019-06-06-huong-dan-publish-package-len-npm"}}},pathContext:{slug:"/2019-06-06-huong-dan-publish-package-len-npm",prev:{frontmatter:{title:"Không cho cuộn trang khi mở Modal",desc:"Xử lý cuộn trang khi mở modal",type:"post",category:null,tags:["css","javascript"],date:"2019-06-07",cover:""},fields:{slug:"/2019-06-07-huong-dang-xu-ly-modal-va-scroll"}},next:{frontmatter:{title:"JSON.stringify vở lòng cho người mới",desc:"Một trong hàm kinh điển bắt buộc phải biết của mội frontend developer",type:"post",category:null,tags:["javascript"],date:"2019-06-01",cover:""},fields:{slug:"/2019-06-01-huong-dan-vo-long-su-dung-json-stringify"}}}}}});
//# sourceMappingURL=path---2019-06-06-huong-dan-publish-package-len-npm-a16808e5b6905d7975b6.js.map