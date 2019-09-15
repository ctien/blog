webpackJsonp([0xbf69b0e7fdc0],{1387:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#query-doucment-d%E1%BB%B1a-tr%C3%AAn-authuid">Query doucment dựa trên <code class="language-text">auth.uid</code></a></li>\n<li><a href="#query-document-d%E1%BB%B1a-tr%C3%AAn-field">Query document dựa trên field</a></li>\n<li><a href="#t%C3%ADnh-to%C3%A1n-r%C3%A0ng-bu%E1%BB%99c-l%C3%BAc-query">Tính toán ràng buộc lúc query</a></li>\n</ul>\n<!-- /TOC -->\n<p>Chúng ta sẽ tiếp tục series về Firestore, nếu 2 bài trước thì chúng ta đã biết cách set security rule, giờ để xem ảnh hưởng của rule này lên lúc query data</p>\n<p>Khi write và read documents, để tiết kiệm thời gian và resource, Cloud Firestore đánh giá các kết quả có thể xảy ra chứ không chạy qua tất cả giá trị. Nếu câu query có document mà user không có quyền truy cập, toàn bộ cái request sẽ fail</p>\n<p>Lưu ý: cách chạy này chỉ áp dụng khi query nhiều documents từ 1 collection. Khi bạn dùng ID để truy xuất đến 1 document sẽ không giống như trên.</p>\n<h1 id="query-doucment-dựa-trên-code-classlanguage-textauthuidcode"><a href="#query-doucment-d%E1%BB%B1a-tr%C3%AAn-code-classlanguage-textauthuidcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Query doucment dựa trên <code class="language-text">auth.uid</code></h1>\n<p>Ví dụ bên dưới mô ta cách viết câu query để lấy documents. Hình dung database bao gồm 1 collection của documents <code class="language-text">story</code></p>\n<p>/stories/{storyid}</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">"A Great Story"</span><span class="token punctuation">,</span>\n  content<span class="token punctuation">:</span> <span class="token string">"Once upon a time..."</span><span class="token punctuation">,</span>\n  author<span class="token punctuation">:</span> <span class="token string">"some_auth_id"</span><span class="token punctuation">,</span>\n  published<span class="token punctuation">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Security rule trên story</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">service cloud.firestore {\n  match /databases/{database}/documents {\n    match /stories/{storyid} {\n      // Chỉ user đăng nhập có id = author\n      allow read, write: if request.auth.uid == resource.data.author;\n    }\n  }\n}</code></pre>\n      </div>\n<p>Câu query nếu sẽ fail vì nó không khớp với security rules ở trên, mặc dù user đăng nhập chính là author của 1 document trong collection</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">\'stories\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Trường hợp này chúng ta phải viết như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> user  <span class="token operator">=</span> firebase<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>currentUser<span class="token punctuation">;</span>\ndb<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">\'stories\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">\'author\'</span><span class="token punctuation">,</span> <span class="token string">\'==\'</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="query-document-dựa-trên-field"><a href="#query-document-d%E1%BB%B1a-tr%C3%AAn-field" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Query document dựa trên field</h1>\n<p>Để hình dung tương quan giữa rule và lúc query, xét ví dụ rule bên dưới, collection <em>stories</em> cho phép bất kỳ user nào truy cập vào <strong>story</strong> documents khi giá trị của field <em>published</em> là <code class="language-text">true</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">service cloud.firestore {\n  match /databases/{database}/documents {\n    match /stories/{storyid} {\n      allow read: if resource.data.published == true || request.auth.uid == resource.data.author\n\n      allow write: if request.auth.uid == resource.data.author;\n    }\n  }\n}</code></pre>\n      </div>\n<p>Để query data ở trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">\'stories\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">\'published\'</span><span class="token punctuation">,</span> <span class="token string">\'==\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="tính-toán-ràng-buộc-lúc-query"><a href="#t%C3%ADnh-to%C3%A1n-r%C3%A0ng-bu%E1%BB%99c-l%C3%BAc-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tính toán ràng buộc lúc query</h1>\n<p>Trong biến <code class="language-text">request.query</code> bao gồm <code class="language-text">limit</code>, <code class="language-text">offset</code>, và <code class="language-text">orderBy</code>, ví dụ chúng ta đặt ra rule là không trả về dữ liệu nếu câu query không chứa limit hoặc limit lớn hơn quy định</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">allow list: if request.query.limit &lt;= 10</code></pre>\n      </div>\n<p>Một cách đầy đủ hơn, gom các điều kiện về author và publish vào trong hàm <code class="language-text">authorOrPublished()</code> để tránh lập lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">service cloud.firestore {\n  match /databases/{database}/documents {\n    match /stories/{storyid} {\n      // `true` nếu story đang &#39;published&#39;\n      // hoặc authored = người đang request\n      function authorOrPublished() {\n        return resource.data.published == true || request.auth.uid == resource.data.author;\n      }\n\n      allow list: if request.query.limit &lt;= 10 &amp;&amp;\n                     authorOrPublished();\n\n      allow get: if authorOrPublished();\n      \n      allow write: if request.auth.uid == resource.data.author;\n    }\n  }\n}</code></pre>\n      </div>\n<p><a href="https://firebase.google.com/docs/firestore/security/rules-query">Link bài gốc</a></p>',timeToRead:3,excerpt:"Query doucment dựa trên  Query document dựa trên field Tính toán ràng buộc lúc query Chúng ta sẽ tiếp tục series về Firestore, nếu 2 bài…",frontmatter:{title:"Hướng dẫn viết query data cho Cloud Firestore - Phần 3",cover:"",date:"2018-08-19",category:null,tags:["firestore","firebase"],desc:"Series hướng dẫn sử dụng các service Firebase"},fields:{slug:"/2018-08-19-huong-dan-viet-query-data-tren-firestore"}}},pathContext:{slug:"/2018-08-19-huong-dan-viet-query-data-tren-firestore",prev:{frontmatter:{title:"Checkbox hay Toggle switch - gợi ý cho thiết kế",desc:"7 trường hợp thường thấy trong thiết kế form",type:"post",category:null,tags:["ux-ui"],date:"2018-08-21",cover:"https://cdn-images-1.medium.com/max/1600/1*hiOlnb_Z7HEzr6yxn2qHsA.png"},fields:{slug:"/2018-08-21-huong-dan-su-dung-checkbox-va-toggle-switch"}},next:{frontmatter:{title:"Hướng dẫn viết điều kiện security rules cho Cloud Firestore - Phần 2",desc:"Series hướng dẫn sử dụng các service Firebase",type:"post",category:null,tags:["firestore","firebase","security"],date:"2018-08-18",cover:""},fields:{slug:"/2018-08-17-huong-dan-viet-dieu-kien-security-rules-cho-cloud-firetore"}}}}}});
//# sourceMappingURL=path---2018-08-19-huong-dan-viet-query-data-tren-firestore-ae5311134c2d47000676.js.map