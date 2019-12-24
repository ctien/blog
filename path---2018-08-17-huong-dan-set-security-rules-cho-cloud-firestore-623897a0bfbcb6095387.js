webpackJsonp([0xc6d501255b2f],{1438:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#khai-b%C3%A1o">Khai báo</a></li>\n<li><a href="#rules-readwrite">Rules read/write</a></li>\n<li><a href="#chia-nh%E1%BB%8F-thao-t%C3%A1c-ra">Chia nhỏ thao tác ra</a></li>\n<li><a href="#k%E1%BA%BF-th%E1%BB%ABa">Kế thừa</a></li>\n</ul>\n<!-- /TOC -->\n<p>Cloud FireStore Security Rules cho phép chúng ta tùy chỉnh việc cấp quyền truy cập đến <strong>documents</strong> và <strong>collection</strong> trong database. Chúng ta có thể thiết lập quyền trên toàn bộ database hoặc một <strong>document</strong> xác định.</p>\n<h1 id="khai-báo"><a href="#khai-b%C3%A1o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khai báo</h1>\n<p>Câu lệnh khai báo của Firestore Security Rules </p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /databases/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    // <span class="token punctuation">..</span>.\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">service cloud.firestore</code> để giới hạn chúng ta chỉ áp rule này xuống Cloud Firestore, tránh xung đột với các service khác của Firebase</p>\n<p><code class="language-text">match /databases/{database}/documents</code> chỉ định rule này chỉ áp dụng cho các database trong project. Hiện tại mỗi project trên Firebase sẽ chỉ hỗ trợ một database Firestore</p>\n<h1 id="rules-readwrite"><a href="#rules-readwrite" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rules read/write</h1>\n<p>Câu lệnh <code class="language-text">match</code> sẽ chỉ định đường dẫn của <em>document</em> bị ảnh hưởng, bên trong đó ta dùng lệnh <code class="language-text">allow</code> để diễn giải chi tiết về rule</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /databases/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    // tất cả document trong collection cities\n    match /cities/<span class="token punctuation">{</span>city<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      allow read: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n      allow write: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tất cả câu <code class="language-text">match</code> phải chỉ đến <strong>documents</strong>, không trỏ tới <strong>collections</strong>, có thể dùng <code class="language-text">match /cities/HCM</code> hoặc sử dụng ký tự đại diện bất kỳ document nào bên trong <code class="language-text">cities</code> như ví dụ <code class="language-text">match /cities/{city}</code></p>\n<h1 id="chia-nhỏ-thao-tác-ra"><a href="#chia-nh%E1%BB%8F-thao-t%C3%A1c-ra" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chia nhỏ thao tác ra</h1>\n<p>Tình huống: chúng ta muốn lúc tạo có những điều khác với lúc xóa document, hoặc cho phép read 1 document nhưng không cho phép đọc toàn bộ</p>\n<p>Câu điều kiện <code class="language-text">read</code> có thể chia nhỏ ra thành <code class="language-text">get</code> và <code class="language-text">list</code>, trong khi <code class="language-text">write</code> có thể chia nhỏ thành <code class="language-text">create</code>, <code class="language-text">update</code>, <code class="language-text">delete</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /databases/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    match /cities/<span class="token punctuation">{</span>city<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      // điều kiện trên <span class="token number">1</span> document\n      allow get: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n\n      // điều kiện khi queries nhiều document, hoặc gọi hết collection\n      allow list: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    match /cities/<span class="token punctuation">{</span>city<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      // lúc tạo\n      allow create: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n\n      // lúc update\n      allow update: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n\n      // lúc delete\n      allow delete: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="kế-thừa"><a href="#k%E1%BA%BF-th%E1%BB%ABa" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kế thừa</h1>\n<p>Như đã biết, nếu chưa biết thì giờ mình giải thích nhanh, database trên Firebase lưu dạng collections(giống như array), trong các collection là document (một object). Trên mỗi document nó có thể chứa các collection khác nữa. Vậy thì các rules trên document nó sẽ ảnh hưởng thế nào đến các sub collection này.</p>\n<p>Với ví dụ ở trên, trong <code class="language-text">cities</code> chúng ta chứa một sub collection là <code class="language-text">landmarks</code>. Rule trên <code class="language-text">cities</code> sẽ không ảnh hưởng đến <code class="language-text">landmarks</code>, trừ khi chúng ta cố tình set nó như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /databases/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    match /cities/<span class="token punctuation">{</span>city<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      allow read, write: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n        // áp dụng luôn cho collections con\n        match /landmarks/<span class="token punctuation">{</span>landmark<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n          allow read, write: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Khi viết lồng câu <code class="language-text">match</code> như vậy, câu <code class="language-text">match</code> bên dưới sẽ <strong>luôn relative</strong> với thằng trên. Và chúng ta cũng có thể viết như sau, kết quả tương tự với cách viết ở trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /databases/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    match /cities/<span class="token punctuation">{</span>city<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      match /landmarks/<span class="token punctuation">{</span>landmark<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n        allow read, write: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /databases/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    match /cities/<span class="token punctuation">{</span>city<span class="token punctuation">}</span>/landmarks/<span class="token punctuation">{</span>landmark<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      allow read, write: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu không chỉ áp dụng rule cho đúng thằng <code class="language-text">landmarks</code>, sử dụng cú pháp đại diện cho toàn bộ collection nằm dưới <code class="language-text">cities</code>, <code class="language-text">{name=**}</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /database/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    match /cities/<span class="token punctuation">{</span>document<span class="token operator">=</span>**<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      allow read, write: <span class="token keyword">if</span> <span class="token operator">&lt;</span>condition<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Với cách viết trên toàn bộ document nằm ở <code class="language-text">/cities/hochiminh/landmarks/landmark81</code>, <code class="language-text">/cities/hochiminh/landmarks/bitexco</code>, <code class="language-text">cities/hochiminh</code></p>\n<p>Nếu chúng ta viết lại <code class="language-text">match /cities/{city}/{document=**} thì nó chỉ ảnh hưởng đến sub collection, thằng</code>cities/hochiminh` sẽ không bị ảnh hưởng.</p>\n<p>Nếu có nhiều câu <code class="language-text">allow</code> khớp với <code class="language-text">match</code>, thì kết quả sẽ là một phép <code class="language-text">hoặc</code>, bất kỳ thằng nào thõa điều kiện thì <code class="language-text">allow</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell"><span class="token function">service</span> cloud.firestore <span class="token punctuation">{</span>\n  match /databases/<span class="token punctuation">{</span>database<span class="token punctuation">}</span>/documents <span class="token punctuation">{</span>\n    // <span class="token string">\'cities\'</span> collection.\n    match /cities/<span class="token punctuation">{</span>city<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      allow read, write: <span class="token keyword">if</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    // <span class="token string">\'cities\'</span> collection hoặc subcollections.\n    match /cities/<span class="token punctuation">{</span>document<span class="token operator">=</span>**<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      allow read, write: <span class="token keyword">if</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Ví dụ ở trên toàn bộ collection cities sẽ cho phép read, write vì điều kiện thứ 2 luôn <code class="language-text">true</code>, mặc dù thằng trước nó luôn <code class="language-text">false</code></p>\n<p><a href="https://firebase.google.com/docs/firestore/security/rules-structure">Link bài gốc của Google</a></p>',timeToRead:4,excerpt:"Khai báo Rules read/write Chia nhỏ thao tác ra Kế thừa Cloud FireStore Security Rules cho phép chúng ta tùy chỉnh việc cấp quyền truy cập…",frontmatter:{title:"Hướng dẫn cách cài đặt security rules cho Cloud Firestore",cover:"",date:"2018-08-17",category:null,tags:["firestore","firebase","security"],desc:"Series hướng dẫn sử dụng các service Firebase"},fields:{slug:"/2018-08-17-huong-dan-set-security-rules-cho-cloud-firestore"}}},pathContext:{slug:"/2018-08-17-huong-dan-set-security-rules-cho-cloud-firestore",prev:{frontmatter:{title:"Hướng dẫn viết điều kiện security rules cho Cloud Firestore - Phần 2",desc:"Series hướng dẫn sử dụng các service Firebase",type:"post",category:null,tags:["firestore","firebase","security"],date:"2018-08-18",cover:""},fields:{slug:"/2018-08-17-huong-dan-viet-dieu-kien-security-rules-cho-cloud-firetore"}},next:{frontmatter:{title:"Flow sử lý trong modern JS - từ callback đến promise, đến Async/Await",desc:"Cùng nhìn lại quá trình tiến hóa của javascript trong cách sử lý flow",type:"post",category:null,tags:["javascript"],date:"2018-08-14",cover:""},fields:{slug:"/2018-08-14-huong-dan-flow-xy-ly-trong-modern-js-callback-promise-async-await"}}}}}});
//# sourceMappingURL=path---2018-08-17-huong-dan-set-security-rules-cho-cloud-firestore-623897a0bfbcb6095387.js.map