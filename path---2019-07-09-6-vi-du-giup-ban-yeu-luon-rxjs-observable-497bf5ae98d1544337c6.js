webpackJsonp([0xb2a87eb4d3ee],{1492:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#Handle-c%C3%A1c-event-b%E1%BA%B1ng-Observable">Handle các event bằng Observable</a></li>\n<li><a href="#Operator-operator">Operator, operator</a></li>\n<li><a href="#Ai-c%C3%B3-th%E1%BB%83-l%C3%A0-Observable">Ai có thể là Observable</a></li>\n<li><a href="#Observable-cho-c%C3%A1c-HTTP-request">Observable cho các HTTP request</a></li>\n<li><a href="#K%E1%BA%BFt-h%E1%BB%A3p-c%C3%A1c-Observable">Kết hợp các Observable</a></li>\n<li><a href="#K%E1%BA%BFt">Kết</a></li>\n</ul>\n<!-- /TOC -->\n<p><strong>Observable</strong> mình dịch ra tiếng việt thế này cho bạn dễ hình dung. Một khi bạn bật chế độ <code class="language-text">observable</code> với một đứa con gái nào đó, là bạn đang trong giai đoạn bị nó ám ảnh, nhất cử nhất động của nó bạn điều để ý, nó hắc xì bạn cũng biết, một tuần nó mặc mấy bộ đồ bạn cũng biết. Chỉ cần nghe tiếng bước chân là bạn biết được hôm nay nó mang đôi dép gì (mức độ này hơi kinh khủng lắm rồi) là bạn có những phản xạ vô điều kiện bộc phát nơi cửa miệng "Chiều nay trời mưa nhe em, mang dép lào đi cho chuẩn". Phản xạ này là gọi là <strong>subscription</strong></p>\n<p>Rồi quay lại với vấn đề kỹ thuật, bài này không giải thích rõ Observable pattern, các khái niệm chính của nó, nếu muốn bạn đọc lại bài này trước đây <a href="https://luubinhan.github.io/blog/2018-10-30-gioi-thieu-reactive-programing-trong-javascript">có viết rồi</a>, như cái tựa bài viết nó spoil hết cái nội dung rồi "Ví dụ để thấy tại sao chúng ta nên <em>bật chế độ</em> Observable với một em gái nào đó"</p>\n<p>Thần chú mình muốn bạn thuộc lầu</p>\n<blockquote>\n<p>Lập trình Reactive là làm việc với luồng dữ liệu bất đồng bộ</p>\n</blockquote>\n<p>Lại phải giải thích câu này chút, <strong>Nếu những gì diễn ra trên ứng dụng đang xảy ra một cách bất đồng bộ, khả năng rất cao là Observable sẽ giúp ích cho cuộc sống của anh em chúng ta bớt khổ hơn</strong>.</p>\n<p>Có nhiều cách làm và thư viện handle vụ luồng dữ liệu bất đồng bộ này, tuy nhiên, Observable có gì mà cool, sắp được chuẩn hóa và đưa vào ECMAScript. Thư viện RxJS đang được sử dụng rộng rãi và quá ngon rồi.</p>\n<p>Rồi vô luôn ví dụ nhe</p>\n<h2 id="handle-các-event-bằng-observable"><a href="#handle-c%C3%A1c-event-b%E1%BA%B1ng-observable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handle các event bằng Observable</h2>\n<p>Chúng ta có 1 button, khi button này click tạo ra một chuỗi ngẫu nhiên. Viết bằng cả 2 cách javascript thuần, và sử dụng RxJS</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> output <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'output\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbutton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    output<span class="token punctuation">.</span>textContent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Bằng RxJS nè</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> output <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'output\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nRx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        output<span class="token punctuation">.</span>textContent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nó dài hơn khi viết javascript thuần mà man 😂. Chi mà phức tạp vậy? Đúng luôn, nhưng giờ thêm yêu cầu này vào thì sao: <em>Ở mỗi lần click đến bội số của 3 ( 3,6,9,12,...) thì mới random một string mới</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Rx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">bufferCount</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// một dòng duy nhất</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        output<span class="token punctuation">.</span>textContent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Vậy bạn viết JS thôi thì sao, khỏi nói cũng biết nó sẽ dài dòng hơn.</p>\n<h2 id="operator-operator"><a href="#operator-operator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Operator, operator</h2>\n<p>Trong ví dụ trên, <code class="language-text">.bufferCount</code> *đã cho thấy sức mạnh vượt trội** so với cách thông thường. Có thể nói thế này, <strong>chúng ta xài Observable này là vì những gì chúng ta làm được bằng operator</strong>. Trong thư viện RxJS nó cả tá Operator tha hồ mà chơi.</p>\n<p>Một ví dụ khác, cũng là vụ random string ở trên, mà giờ chỉ muốn random <strong>khi nó là một cú triple click</strong> (một phát 3 nháy, không phải double click nhoa)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> click$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nclick$<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">bufferWhen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        click$<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// kkhoảng thời gian của một cú 3 click</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">events</span> <span class="token operator">=></span> events<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        output<span class="token punctuation">.</span>textContent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>DỊch ra ngôn ngữ con người nó sẽ như thế này, <strong>trong khoảng thời gian là 400ms, trong đám event được emit (tụi này được đưa vào mảng <code class="language-text">events</code>), nếu mảng này lớn hơn hoặc bằng 3, thực hiện đống việc đã đăng ký bên dưới <code class="language-text">subscribe</code></strong></p>\n<p>Bạn đã bắt đầu yêu Observable chưa? Mình đã khoái khoái rồi đó.</p>\n<h2 id="ai-có-thể-là--observable"><a href="#ai-c%C3%B3-th%E1%BB%83-l%C3%A0--observable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ai có thể là  Observable</h2>\n<p>Đơn giản, bất kể già trẻ lớn bé, trai gái, nếu RxJS có hàm ( khi nãy là <code class="language-text">.fromEvent</code>) thì chúng ta có thể biến nó thành đối tượng bị theo dõi liên tục.</p>\n<h2 id="observable-cho-các-http-request"><a href="#observable-cho-c%C3%A1c-http-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Observable cho các HTTP request</h2>\n<p>Một sức mạnh <em>siêu nhiên</em> khác của RxJS: xử lý mấy em HTTP request rất mượt mà</p>\n<p>Ví dụ, fetching một danh sách album và render.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> albumsApiUrl <span class="token operator">=</span> <span class="token string">\'https://jsonplaceholder.typicode.com/albums\'</span><span class="token punctuation">;</span>\n\nRx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span>albumsApiUrl<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>\n        <span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Trộn chung với ví dụ ở trên, chúng ta làm cái tính năng awsome sau, click  là có danh sách album ngẫu nhiên</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Rx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span>getAlbums<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>\n        render<span class="token punctuation">,</span>\n        <span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">getAlbums</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> userId <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> Rx<span class="token punctuation">.</span>Observable<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token string">`https://jsonplaceholder.typicode.com/albums?userId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n        <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Observables 4" src="//codepen.io/mmiszy/embed/WZOJjy/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/mmiszy/pen/WZOJjy/\'>Observables 4</a> by Michał Miszczyszyn\n  (<a href=\'https://codepen.io/mmiszy\'>@mmiszy</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>Ví dụ trên có sử dụng operator <code class="language-text">flatMap</code>, 1 trong những operator siêu kinh điển của RxJS, cho phép merge 2 mảng kiểu Observable thành 1</p>\n<p>Nếu chúng ta click liên tục trong thời gian ngắn, là có vấn đề, re-render nhiều lần, chúng ta cũng ko xác định được request nào được resolve cuối cùng. Cụ thể là thế này, có thể thằng xuất phát trước lại về đích sau cùng, chuyện của network ai mà biết được thời điểm đó nó download film gì làm chậm mạng, thằng request sau có khi lại về đích trước, như vậy thì dùng cục response lúc nào để render, mình muốn response của thằng request cuối cùng.</p>\n<p>Bạn muốn, trong công cuộc tán gái, đứa nào ở lại đến giây phút cuối cùng là đứa chiến thắng, bạn sẽ dẹp luôn những đứa nào thả thính trước đó? Ví von như vậy cũng chưa chuẩn, phải là đứa nào đến sau cùng thì dữ lại, dẹp mẹ tụi tới trước (thế này thì bất công vl mấy bạn)</p>\n<p>RxJS làm được chuyện đó không? Có chứ, <strong>mọi thứ đã có operator</strong>, chuyển qua dùng <code class="language-text">switchMap</code>, sẽ chỉ có <strong>response cuối cùng được render</strong>, mấy request trước đó sẽ bị cancel hết</p>\n<p><img src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost/2017/09/Screen_Shot_2017_09_29_at_9_24_06_PM-1506713083152.png"></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Rx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">\'click\'</span><span class="token punctuation">)</span>\n<span class="gatsby-highlight-code-line">    <span class="token punctuation">.</span><span class="token function">switchMap</span><span class="token punctuation">(</span>getAlbums<span class="token punctuation">)</span>\n</span>    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>\n        render<span class="token punctuation">,</span>\n        <span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="kết-hợp-các-observable"><a href="#k%E1%BA%BFt-h%E1%BB%A3p-c%C3%A1c-observable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết hợp các Observable</h2>\n<p>Một use case khác mà chúng ta gặp hoài. Chức năng filter hoạt động như sau: cho tụi user nhập vào <code class="language-text">user id</code> bằng <code class="language-text">&lt;input /&gt;</code>, và chọn thể loại âm nhạc nó muốn bằng <code class="language-text">&lt;select /&gt;</code>. Điều quan trọng là chỉ tạo request mới khi cả 2 giá trị trong đó điều có dữ liệu, và re-render khi một trong 2 giá trị này bị thay đổi.</p>\n<p>Tạo Observable trước nhé</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> id$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">\'input\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> resource$ <span class="token operator">=</span> Rx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>select<span class="token punctuation">,</span> <span class="token string">\'change\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Chúng ta phải hợp thể 2 thằng trên vào một, để khi một trong 2 thằng có thay đổi chúng ta lấy được giá trị sau cùng của cả 2. <strong>mọi thứ đã có operator</strong>, nhiều lắm, ở đây dùng <code class="language-text">combineLatest</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Rx<span class="token punctuation">.</span>Observable\n    <span class="token punctuation">.</span><span class="token function">combineLatest</span><span class="token punctuation">(</span>id$<span class="token punctuation">,</span> resource$<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">switchMap</span><span class="token punctuation">(</span>getResource<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span></code></pre>\n      </div>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Observables 6" src="//codepen.io/mmiszy/embed/mBwLoX/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/mmiszy/pen/mBwLoX/\'>Observables 6</a> by Michał Miszczyszyn\n  (<a href=\'https://codepen.io/mmiszy\'>@mmiszy</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h2 id="kết"><a href="#k%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết</h2>\n<p>Bạn đã thấy sử dụng Observable thú vị dường nào chưa? Nếu câu trả lời là "Có ❤️, trọn đời yêu em", bạn hãy nhào vô document của nó để nghiên cứu chuyên sâu hơn. Hoặc <a href="https://luubinhan.github.io/blog/2018-10-30-gioi-thieu-reactive-programing-trong-javascript">đọc lại bài trước đây của mình</a>.</p>\n<p>Nếu câu trả lời là "No 💩, anh éo care mấy đứa ạ". Thì bạn cũng nên bớt bớt đối xử tệ với nó đi, vì trong tương lai JS sẽ đưa nào vào như một object chính thức luôn, không chạy đằng trời được đâu các bạn ạ.</p>\n<p>Hy vọng anh em hôm nay đã học thêm được cái gì đó thú vị, hẹn gặp lại anh em vào một viết thú vị khác.</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://x-team.com/blog/rxjs-observables/">6 SIMPLE EXAMPLES WHICH WILL MAKE YOU LOVE OBSERVABLES (RXJS 5)</a></p>',timeToRead:7,excerpt:"Handle các event bằng Observable Operator, operator Ai có thể là Observable Observable cho các HTTP request Kết hợp các Observable Kết…",frontmatter:{title:"6 ví dụ để bạn yêu luôn observable",cover:"",date:"2019-07-09",category:null,tags:["javascript","thu-thuat"],desc:"Thêm những lý do để dụ dỗ bạn xài Observable"},fields:{slug:"/2019-07-09-6-vi-du-giup-ban-yeu-luon-rxjs-observable"}}},pathContext:{slug:"/2019-07-09-6-vi-du-giup-ban-yeu-luon-rxjs-observable",prev:{frontmatter:{title:"10 nguyên tắc lập trình nền tảng mà lập trình viên nào cũng cần biết",desc:"Nhớ thời đại học quá nên ôn lại kiến thức vở lòng mấy bạn ơi",type:"post",category:null,tags:["javascript","hoc-thuat","kinh-nghiem"],date:"2019-07-13",cover:""},fields:{slug:"/2019-07-13-nguyen-tac-moi-lap-trinh-vien-can-biet"}},next:{frontmatter:{title:"Sử dụng React Hook Effect",desc:"Bài này mình contribute cho http://vi.reactjs.org về cách sử dụng React Hook Effect",type:"post",category:null,tags:["react","hoc-thuat"],date:"2019-07-03",cover:""},fields:{slug:"/2019-07-03-huong-dan-su-dung-react-hook-effect"}}}}}});
//# sourceMappingURL=path---2019-07-09-6-vi-du-giup-ban-yeu-luon-rxjs-observable-497bf5ae98d1544337c6.js.map