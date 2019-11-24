webpackJsonp([31503309406067],{1556:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Thời điểm hiện tại nếu bạn đang làm Frontend thì chắc hẳn đang sử dụng một framework nào đó trong 3 thằng này, Vue, React, và Angular. Nếu trước đây trên cả tá framework, và cả tá ví dụ về làm một ứng dụng web ToDoMVC trên github, thì cuộc chơi giờ đây đã đỡ hơn rất nhiều, khi chúng ta chỉ còn 3 lựa chọn sáng giá.</p>\n<p>Để viết một ứng dụng phức tạp, chúng ta bắt buộc phải sử dụng framework, vì nếu không có những framework như vậy, chúng ta sẽ tốn không biết bao nhiêu thời gian để đạt được kết quả cuối cùng.</p>\n<p>Chắc các bạn cũng như mình đã quá mệt mỏi với những bài viết so sánh 3 framework trên, ai ngon hơn ai, các bạn cũng nên dừng tìm kiếm câu trả lời cho câu hỏi "Top 10 framework nên xài trong năm 2019". Tại sao? Vì những bài viết này đa phần sẽ tập trung vào  đếm số lượng <em>sao</em> trên Github, số lượng tải về từ NPM, số câu hỏi liên quan trên Stack Overflow. Những con số thống kê vô hồn này chỉ có tác dụng trong những trường hợp cụ thể, như đi quảng bá về mức độ phủ rộng của những framework này. Nếu bạn là dân kỹ thuật và nhìn nhận ở góc độ kỹ thuật, phán xét những framework này ở góc độ kỹ thuật chứ không thể căn cứ trên số lượt <em>view</em> và <em>download</em></p>\n<blockquote>\n<p>Kỹ thuật quyết định bên trong của từng framework là gì, đâu là sự khác nhau thực sự của từng framework</p>\n</blockquote>\n<p>Mục tiêu cuối cùng của các framework đều là để giúp chúng ta viết ứng dụng web hiệu quả nhất có thể, việc cạnh tranh giữa các framework với nhau là ý tưởng tốt hay không? Mỗi framework sẽ có một số lượng người sử dụng nhất định, như React-Angular-Vue hiện tại có khoản hơn nửa triệu developer đang <em>ăn nằm</em> với nó hằng ngày.</p>\n<p>Không có khái niệm "điểm tốt" và "điểm chưa tốt" cho các framework. Người ta thường hay hỏi mấy câu, framework nào xài ngon nhất. Một dạng câu hỏi bạn nên ngừng làm khó nhau vì không thể nào so sánh như toán học 3 > 2 > 1</p>\n<p>Việc thiết kế phần mềm luôn đòi hỏi một sự đánh đổi, đặc biệt là với web, chắc có lẽ vì có quá nhiều thứ người ta muốn làm thông qua web, từ một trang web đơn giản chỉ là HTML tĩnh đến cả một hệ thống phức tạp nhất bạn có thể nghĩ ra, để đáp ứng toàn bộ những nhu cầu khác nhau đó, các framework phải chấp nhận đánh đổi một số thứ, chứ ko thể đáp ứng toàn bộ với một giải pháp toàn diện được</p>\n<h2 id="scope"><a href="#scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scope</h2>\n<blockquote>\n<p>Framework cung cấp bao nhiêu đồ chơi cho bạn</p>\n</blockquote>\n<p>Một trong những ví dụ kinh điển giữa <strong>thư viện</strong> và <strong>framework</strong> là React và Angular. React được xem là thư viện trong khi Angular sẽ là framework</p>\n<p>Là một thư viện, React chỉ muốn tập trung cung cấp mô hình để phát triển UI. Để hình dung dễ hơn, liên tưởng tới các nhà máy sản xuất bún, scope rất cụ thể, tôi sẽ tập trung vào việc sản xuất ra bún, việc các bạn đem bún này về nấu thành món gì là do bạn, lý do tại sao ecosystem của React luôn luôn sôi động, rất nhiều dev đã chế biến thành các món khác nhau, như với món bún chúng ta có bún riêu, canh bún, bún đậu mắm tôm, bún cá châu đốc, bún mắm, vâng vâng.</p>\n<p>Trong khi đó, Angular với tư cách là một framework thực thụ, nó sẽ tiếp cận vấn đề theo hướng từ trên xuống. Hình dung như mì gói nuôi nhân tài ở Việt Nam, với mọi thứ đóng gói đầy đủ để bạn có một món cứu đói tạm thời, bột nêm, dầu, hành. Angular cung cấp hệ thống form validation, animation,... rất nhiều tính năng khác mà chúng ta rất cần thiết để dựng nên một ứng dụng hoàn chỉnh. Với scope lớn như vậy, mọi tính năng khi thiết kế đã được nghĩ đến làm thế nào để chúng <em>sống chung</em> với nhau một cách mượt mà</p>\n<p><strong>Lợi ích khi có scope nhỏ và cụ thể</strong></p>\n<ul>\n<li>Ít khái niệm, dễ tiếp cận ngay từ đầu. Trong React bạn sẽ có mô hình làm component, prop, state, virtual DOM, hook, bao nhiêu kiến thức thôi là bạn đã có thể bắt đầu làm quen React.</li>\n<li>Linh động, món bún có thể kết hợp với rất nhiều thứ gia vị, cách nấu khác nhau để cho ra các món ăn khác nhau.</li>\n<li>Team duy trì React <em>rảnh</em> hơn, những chuyện khác đã có cộng đồng gánh vác, như đi làm React Router, React Redux, React Form, họ sẽ có thời gian nhiều hơn để tập trung vào các ý tưởng mới cho bản thân React</li>\n</ul>\n<p><strong>Hạn chế khi scope nhỏ và cụ thể</strong></p>\n<ul>\n<li>Khi bạn phải xây dựng một ứng dụng phức tạp, một vài concept cơ bản là không đủ xài, bạn phải tự viết khá nhiều. Giống như bắt bạn diễn tả tất cả những câu nói hằng ngày bằng cách chỉ sử dụng 10 từ, thì bạn diễn đạt ý như thế nào?</li>\n<li>Cách làm (<em>pattern</em>) mới ngày càng nhiều. Nói học React rất dễ là bạn thực sự chưa biết đến ngoài React ra, bạn có phải học vô số các cách làm (pattern) khác, như Redux, mặc dù không có trong tài liệu chính thức trên React, nhưng lại là thứ bạn không thể bỏ qua nếu muốn dùng React như một React Developer chân chính. Nào là Higher Other Component, Render Props, React hook, rồi quá trời cách để sử dụng CSS trong JS, tài liệu chính thức của React sẽ không nói bạn nên dùng gì, bạn phải tự tìm hiểu và chọn cái nào mình thích. Những kiến thức này bạn phải nạp từ từ như là một kiến thức chính quy để bạn có thể vỗ ngực xưng tên <em>tao là React Developer</em>.</li>\n<li>Ecosystem phát triển quá nhanh không đồng nghĩa với chất lượng các thư viện dành cho React cái nào cũng ngon, rất nhiều thư viện nổi lên một thời rồi ra đi mãi mãi, như Flux, rồi bao nhiêu là cách viết CSS trong JS. Trong ta luôn trong cảm giác lo sợ <strong>lỡ mất không xài thằng ngon nhất rồi</strong></li>\n</ul>\n<p><strong>Lợi ích khi có scope bao la bát ngát</strong></p>\n<ul>\n<li>Các vấn đề thường gặp đã được giải quyết hết, bạn có ngay tô mì để ăn trong 5 phút mà không cần suy nghĩ nhiều, cứ lên trang chủ, đọc tài liệu, học cái framework xong là xài, để nghiên cứu giây mơ rễ má có thể để sau. Đâu ai cấm bạn ăn mì gói bỏ thêm thịt bò, trứng hay tôm càng.</li>\n<li>Các tính năng bên trong được thiết kế để làm việc mượt mà đảm bảo tính thống nhất của toàn bộ hệ thống, không cần chạy đi đâu để kiếm giải pháp cho một vấn đề quá căn bản, bạn cứ lên trang chính thức của nó xem người ta giải quyết vấn đề đó như thế nào, không còn phải suy nghĩ lựa chọn đâu là cách tốt nhất trong hơn chục cái giải pháp được đưa ra.</li>\n</ul>\n<p><strong>Hạn chế của scope bao quát bát ngát hết vườn hoa</strong></p>\n<ul>\n<li>Học là một quá trình dài, nhiều khi để tới được bước có một cái gì đó hiển thị trên màn hình, bạn phải trải qua cả khóa học bài bảng. Những người không có kiến thức về một ngôn ngữ Backend nào cả, chỉ biết HTML, CSS, javascript mà đọc tài liệu của Angular thì phải nói là một trãi nghiệm vô cùng đau thương</li>\n<li>Đôi khi một giải pháp được cung cấp sẵn lại không phù hợp với tính huống gặp phải, chúng ta ước gì có thể làm cách khác, nhưng điều đó là không thể.</li>\n<li>Hệ thống lớn đòi hỏi chi phí rất lớn để duy trì cũng như đưa ra các ý tưởng mới, rất nhiều thành phần phải tích hợp để cả hệ thống có thể kết nối hoạt động trơn tru</li>\n</ul>\n<h2 id="cơ-chế-render"><a href="#c%C6%A1-ch%E1%BA%BF-render" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cơ chế render</h2>\n<blockquote>\n<p>Cách structure, cách quản lý code của framework</p>\n</blockquote>\n<p>Để đơn giản chúng ta so sánh JSX và Templates</p>\n<p><strong>Điểm cộng của JSX/Virtual DOM</strong></p>\n<ul>\n<li>Tất cả điều là javascript, ai cũng thích, bạn không cần biết những syntax mới được định nghĩa bởi framework, những kiến thức bạn nạp vào là kiến thức nền tảng của javascript, một khi bạn đã cứng tay, bạn có thể thiên biến vạn hóa theo sở thích.</li>\n<li>Xem <em>view</em> như một dạng *data *, một component sẽ return một thứ gì đó dựa vào những giá trị input khác nhau, bạn có thể làm những thứ như chụp một cái snapshot dựa trên virtual DOM, render nó trên những target khác như terminal, PDF, Canvas, WebGL</li>\n</ul>\n<p><strong>Điểm trừ của JSX/Virtual DOM</strong></p>\n<ul>\n<li>Vốn dĩ sẽ tiêu tốn tài nguyên. Khi React mới ra đời, họ cũng đã trả lời cho câu hỏi <em>làm như vậy có chậm không?</em>, <em>vâng nó chậm nhưng vẫn nhanh đủ để dùng</em>. Nếu nhìn nhận về mặc kỹ thuật, phải làm rất nhiều thao tác xử lý trên virtual DOM. Kích thước của một VDom chuẩn sẽ liên quan tới kích thước của view chứ không phải số lượng node sẽ thay đổi.</li>\n<li>Hàm render cơ bản rất linh động, vì linh động nên nó cũng rất khó optimize, linh động ở đây muốn nói đến một hàm render như thế này</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">\'text\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">:</span> <span class="token string">"vuilaptrinh.com"</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">\'content\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> children<span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta có thể tạo parent node trước, rồi sau đó nhét thêm các node con, hoặc bất cứ thứ gì bạn có thể nghĩ ra được, javascript rất linh động, có nhiều tình huống đặc biệt chúng ta khó có thể đảm bảo optimize được cho tất cả.</p>\n<ul>\n<li>Giải pháp của React cho tình huống này không tập trung vào việc làm cho virtual DOM nhanh hơn, mà làm cho chúng ta <em>cảm giác</em> performance tốt hơn (giống như việc gửi tin nhắn trên facebook luôn cảm giác như gửi được liền chứ không cần đợi), việc đó được thực hiện bằng các kỹ thuật runtime scheduling, concurrent mode, time slicing. Những giải pháp này buộc họ phải tự tạo và quản lý một <em>stack</em> riêng, một công việc rất tốn kém</li>\n</ul>\n<p><strong>Điểm cộng của Template</strong></p>\n<ul>\n<li>Với cách tiếp cận trực tiếp hơn cho việc render, performance đương nhiên sẽ <em>gần</em> hơn render performance của trình duyệt, với cách viết template như thế này sẽ không thể nào thay đổi được thứ tứ của những element đã khai báo</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Việc đoán trước được những gì có thể thay đổi, giúp việc cải thiện hiệu năng cũng sẽ dễ tiếp cận hơn </p>\n<ul>\n<li>Tùy vào tình huống, có thể giá trị baseline runtime sẽ thấp hơn</li>\n</ul>\n<p><strong>Điểm trừ của Template</strong></p>\n<ul>\n<li>Dính chặt vào cú pháp của Template, bạn sẽ mất đi một ít tự do bay nhảy bằng javascript thông thường. Sự sáng tạo của chúng ta bị giới hạn trong những thứ mà framework cung cấp. Lỡ đâu bạn đã là một master javascript và bạn thấy cách làm của framework này <em>chuối</em> cả nải và muốn làm khác hơn.</li>\n<li>Cái giá phải trả cho giá trị baseline runtime thấp sẽ là kết quả trả về của mỗi template sẽ dài dòng hơn. Đôi khi để code chạy nhanh nhất có thể, chúng ta phải nhét cứng một số thông tin bên trong output</li>\n</ul>\n<h2 id="cơ-chế-state"><a href="#c%C6%A1-ch%E1%BA%BF-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cơ chế State</h2>\n<blockquote>\n<p>mutable vs immutable, dirty checking vs dependency tracking, reactivity vs simulated reactivity</p>\n</blockquote>\n<p>Rất tiếc, Evan You không có thời gian trình bài phần này trong bài thuyết trình của mình.</p>\n<h2 id="tổng-kết"><a href="#t%E1%BB%95ng-k%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tổng kết</h2>\n<p>Nếu bạn đang muốn chọn một framework một cách hợp lý, bạn phải hiểu được những gì mà framework đó đang đánh đổi, biết hướng đi của framework đó có khớp với những gì bạn ưu tiên hàng đầu cho dự án mình làm.</p>\n<p>Các bạn có thể xem Video bài thuyết trình của Evan You <a href="https://www.youtube.com/watch?v=ANtSWq-zI0s">ở đây</a></p>',timeToRead:9,excerpt:"Thời điểm hiện tại nếu bạn đang làm Frontend thì chắc hẳn đang sử dụng một framework nào đó trong 3 thằng này, Vue, React, và Angular. Nếu…",frontmatter:{title:"Lựa chọn framework frontend nào trong thời điểm hiện tại",cover:"https://hackernoon.com/drafts/7m4a23g7.png",date:"2019-11-24",category:null,tags:["hoc-thuat","javascript"],desc:"Đây không phải là một bài so sánh đâu mới là framework chạy nhanh nhất"},fields:{slug:"/2019-11-24-huong-dan-chon-framework-frontend"}}},pathContext:{slug:"/2019-11-24-huong-dan-chon-framework-frontend",prev:!1,next:{frontmatter:{title:"Thiết đặt ESLint cho dự án React",desc:"Các thiết đặt và công cụ cần thiết để eslint hoạt động tốt trong dự án React",type:"post",category:null,tags:["thu-thuat","tool"],date:"2019-11-23",cover:""},fields:{slug:"/2019-11-23-thiet-dat-eslint"}}}}}});
//# sourceMappingURL=path---2019-11-24-huong-dan-chon-framework-frontend-52d10a820daec7c6d6bc.js.map