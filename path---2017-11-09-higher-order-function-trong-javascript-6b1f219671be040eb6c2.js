webpackJsonp([53],{"./node_modules/json-loader/index.js!./.cache/json/2017-11-09-higher-order-function-trong-javascript.json":function(n,t){n.exports={data:{markdownRemark:{html:'<h2>Callback function</h2>\n<p>Javascript xem một function như một dạng object, function có thể trở thành giá trị của một biến, có thể dùng như một đối số hoặc giá trị return như một object.</p>\n<p>Javscript là ngôn ngữ single-threaded, nghĩa là một lần nó chỉ chạy một tính toán tuần tự. Nếu đã từng viết javascript nhiều bạn sẽ thấy việc sử dụng <code>callback</code> trong javascript rất nhiều, function A được truyền vào cho function B, sau khi thực hiện các đoạn code trong function B, nó sẽ gọi lại function A và chạy các đoạn code trong function A</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clicker<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Hoac viet</span>\n\n<span class="token keyword">var</span> proveIt <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> proveIt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lưu ý là mình pass vào <code>proveIt</code> chứ không phải <code>proveIt()</code>, mình đang truyền vào proveIt như một <em>object</em> chứ nếu truyền <code>proveIt()</code> là mình sẽ truyền vào kết quả xử lý của hàm <em>proveIt</em></p>\n<p>Với cái khả năng đơn giản như đang giỡn là truyền vào một cái inline function như vậy với một function được định danh đâu đó mở ra muôn vàng kiểu viết biến hóa. Chúng ta có thể xây dựng những function rất rất nhỏ để xử dụng ở nhiều nơi, nhiều chổ, nhiều project khác nhau nếu chúng ta áp dụng nguyên tác viết pure function ( nếu cùng một giá trị truyền vào, luôn luôn trả về cùng kết quả).</p>\n<h1>Function như một giá trị trả về</h1>\n<p>Ví dụ ta có một hàm để thay thể chuỗi "Millennials" thành "Snake People"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> snakify <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Snake People are always up to something.</span>\n</code></pre>\n      </div>\n<p>Rồi ta lại có thêm một hàm thay thể chuổi "Baby Boomers" thành "Aging Hippies"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> hippify <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Aging Hippies just look the other way.</span>\n</code></pre>\n      </div>\n<p>Chúng ta có viết lại 2 hàm này một cách thông minh và phức tạp hơn chút</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> attitude <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> replacement<span class="token punctuation">,</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> replacement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> snakify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hippify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Snake People are always up to something.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Aging Hippies just look the other way.</span>\n</code></pre>\n      </div>\n<p>Bằng việc khai báo 1 function mới (snakify, hippyfy) reference tới function <code>attitude</code> chỉ đưa vào 2 tham số đầu tiên, cho phép function mới này nhận bất kỳ giá trị truyền vào nào trở thành tham số truyền vào thứ 3 của function <code>attitude</code>.</p>\n<p>Javascript cho phép truyền vào một function số lượng argument ít hơn số lượng được khai báo, khi đó những argument ko được truyền vào thì xem như undefined. Thứ 2 nữa là function có thể nhận vào thêm argument sau khi nó được gọi bằng cách viết như trên, snakify trỏ đến attitude, khi gọi snakify thì argument truyền vào của snakify trở thành argument còn thiếu trong attitude</p>\n<p>Đọc thêm phần closures ở đây \'<a href="https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet">https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet</a>\'</p>',frontmatter:{date:"November 09, 2017",path:"/2017-11-09-higher-order-function-trong-javascript",tags:["javascript"],title:"Higher-Order function trong javascript",desc:"Một trong những đặc thù của Javascript khiến nó rất phù hợp với function programming là cho phép viết function higher-order, kiểu function cho phép nhận một function khác như một argument hoặc trả về một function"}}},pathContext:{prev:{excerpt:"Accessibility không chỉ là trách nhiệm của Developer Tình huống như thế này, bạn nhận một website thiết kế one page được approve từ khách hàng, sếp yêu cầu bạn code xong trang này trong 1 tuần, trong đó bao gồm 2 ngày làm việc với bên QA để mọi thứ...",html:'<h2>Accessibility không chỉ là trách nhiệm của Developer</h2>\n<p>Tình huống như thế này, bạn nhận một website thiết kế one page được approve từ khách hàng, sếp yêu cầu bạn code xong trang này trong 1 tuần, trong đó bao gồm 2 ngày làm việc với bên QA để mọi thứ perfect trước khi tới tay khách hàng. Khi nhìn vào thiết kế này, bạn nhìn ra vấn đề là trên các thiết bị nào nhỏ nhỏ xíu, mấy cái chữ nằm đè trên background này có thể gây khó đọc.</p>\n<p>Developer sẽ có một vài lựa chọn sau:</p>\n<ol>\n<li>Im lặng mặc dù nó biết như thế nó sẽ ảnh hưởng đến accessibility</li>\n<li>Kệ, làm luôn mặc dù hơi khác thiết kế chút, cứ làm xong rồi giải thích sau.</li>\n<li>Gởi một bản gợi ý những thay đổi nên làm tới anh designer hoặc khách hàng trước khi làm.</li>\n</ol>\n<p>Cái tình huống này gặp như cơm bữa, every project luôn, bạn có thể quánh giá mình thoải mái, nhưng mình sẽ chọn lựa chọn 1. Im lặng.</p>\n<p>Nếu chọn cách làm thứ 2, vâng bạn sẽ dính phải hàng tá chỉ trích từ khách hàng, từ sếp, sau không làm đúng hợp đồng, đúng yêu cầu ban đầu, và lựa chọn thứ 3 cũng tương tự. Nếu bạn là người làm việc có \'tâm\' và thứ làm cách 3 đi và xem bạn nhận được gì. Khách hàng chưa hẳn đồng ý với điều bạn nói, sếp không hài lòng vì bạn dành thời gian để đưa ra những ý kiến ko đem đến tiền, thử nghĩ nếu bạn làm cách 1, sau đó khách hàng thấy sai, kếu sửa, vậy là sếp lại có cớ đòi thêm tiền.</p>\n<p>Vâng còn một lựa chọn thứ 4 nữa, là lựa chọn mình đang làm, đi phổ cập kiến thức accessibility cho những anh designer.</p>\n<h2>Accessibility cho dân ngoại đạo</h2>\n<p>Bạn đem share kiến thức về accessibility cho bất kể là ai: UI Designer, content provider, project managers, khách hàng,... để mọi người biết và quan tâm đến nó, biết sự tồn tại và cần thiết của nó, để mọi người bỏ ngay cái suy nghĩ "đẹp là được"</p>\n<h3>Đừng quá chú trọng đến Animations</h3>\n<p>Với khả năng của css, js, những thư viện hiện có sẵn đầy rẫy được share miễn phí, trang web bây giờ có thể nhìn như một cái slide powerpoint với những animation chim bay, cò bay, tuyết rơi, đèn pha lấp lánh. Ở gốc độ người sử dụng, lần đầu tiên bạn vào trang web chắc hẳn họ sẽ thốt lên "WOW, cool ghê", nhưng tưởng tượng bạn làm một website với mục tiêu người sử dụng truy cập hàng tuần, hàng ngày thì những animation chỉ có vứt đi.</p>\n<h3>Độ tương phản cần thiết để đọc</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961153/low-contrast-text_twvimd.jpg"></p>\n<p>Màu chữ và màu nền không đủ độ tương phản làm rất khó đọc.</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961159/low-contrast-text-sunshine_ugzxpt.jpg"></p>\n<p>Tương tự, bạn sẽ lướt qua và không để ý đến sự tồn tại của dòng caption bên dưới "Sunshine sue"</p>\n<p>Giải pháp? Test màu nền và màu chữ bằng công cụ sau <a href="https://webaim.org/resources/contrastchecker/">https://webaim.org/resources/contrastchecker/</a></p>\n<h3>Thận trọng khi đặt chữ đè lên hình</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1511044772/burberry-fix_mqdy7i.jpg"></p>\n<p>Đố đọc được mấy chữ màu trắng</p>\n<h3>Kiểm trả kích thước font chữ, độ đậm của chữ</h3>\n<p>Xu hướng bây giờ mấy bạn thường cứ thích dùng font chữ mỏng lét, font weight 200 thậm chí 100, nếu lướt ngang thì nhìn UI rất là elegant những mà muốn đọc thì phải nhìn thật kỹ</p>\n<p><img src="https://notlaura.com/wp-content/uploads/2017/10/typography-improvements-1200x408.jpg"></p>\n<h3>Link mở trang mới, cảnh báo người dùng</h3>\n<p>Khi gắn link mở ra một tab mới, gắn một icon để thông báo cho người ta biết "Link này mở tab mới đó nha"</p>\n<h3>Phân biệt giữa các icon social media</h3>\n<p>Nếu nhìn thấy một button với icon Facebook trên đó, bạn nghĩ nó là gì? dẫn đến trang profile!. Nếu icon đó là một thao tác như share thì cần phân định rõ với lại một icon dẫn đến profile</p>\n<h3>Đừng tin tưởng tuyệt đối vào icon và màu sắc để truyền tải nội dung</h3>\n<p>Đại đa số người sử dụng web nhiều đều biết icon hamburger để mở ra menu chính của trang, nhưng đừng gom đũa cả nắm như thế mà bỏ hết chữ nghĩa, dồn hết vào menu hamburgerd - cho gọn.</p>\n<p>Các bạn trên vnexpress nghĩ sẽ rất là cool nếu trên menu mỗi chuyên mục sẽ có màu sắc khác nhau, nhưng thực tế phủ phàng rằng, sự phân định màu sắc theo quan điểm cá nhân này của bạn thiết kế không đem đến lợi ích vì cho người đọc, ai nói mục màu xanh dương thì đại diện cho các bài viết thuộc chuyên mục gia đình, xanh lá là cho thể thao.</p>\n<h3>Sẽ ra sau nếu không có tương tác</h3>\n<p>Lỗi dể thấy trên các trang bán hàng nếu đặt giá hoặc nút mua sản phẩm ẩn đi, chỉ xuất hiện khi có chuột hover lên, và nếu không có hover lên thì sao? người dùng chẳng thấy gì cả, trên điện thoại người ta cũng không rảnh đâu mà đưa tay lên để xem giá từng sản phẩm.</p>\n<p>Còn nhiều nào rãnh viết tiếp</p>',id:"E:/anluu/luckyluu/posts/2017-11-29-goc-nhin-ve-accessible-ui-web/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-11-29T13:35:13.234Z",path:"/2017-11-29-goc-nhin-ve-accessible-ui-web",tags:["ux-ui"],title:"Góc nhìn về Accessible UI"}},next:{excerpt:"Cùng nhìn thử cách Google làm với: Giới thiệu một tính năng mới của sản phẩm Quyết định tách 2 tác vụ là  xem  và  edit  ra 2 màn hình khác nhau Áp dụng Google Material Design Pattern Giới thiệu tính năng mới Khi có một thay đổi về giao diện, hoặc...",html:'<p>Cùng nhìn thử cách Google làm với:</p>\n<ol>\n<li>Giới thiệu một tính năng mới của sản phẩm</li>\n<li>Quyết định tách 2 tác vụ là <strong>xem</strong> và <strong>edit</strong> ra 2 màn hình khác nhau</li>\n<li>Áp dụng Google Material Design Pattern</li>\n</ol>\n<h2>Giới thiệu tính năng mới</h2>\n<p>Khi có một thay đổi về giao diện, hoặc tính năng sản phẩm sẽ có 2 mặt: người sử dụng sẽ cảm thấy rất hứng thú và một vài người thì rất sợ những thay đổi này, vì vốn đã quá quen với cách làm việc của hệ thống cũ. Giới thiệu và guide người sử dụng những thay đổi này để họ biết và chấp nhận nó là cần thiết.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*jedZ6ACXCLZTIXlA2SAw3w.png"></p>\n<p>Không ép buộc người sử dụng cập nhập tính năng mới ngay lập tức, Google hiển thị một thông báo nhỏ ở trên cùng để user biết có tính năng mới được cập nhập cho cái công cụ người dùng đã quá quen thuộc và sử dụng hàng ngày, kiểu như</p>\n<blockquote>\n<p>Cứ sử dụng Calendar như bình thường nhé, khi nào sẵn sàng thì cập nhập tính năng mới nè, vui lắm.</p>\n</blockquote>\n<p><a href="https://cdn-images-1.medium.com/max/2000/1*rxdA2Wzp4SmS6MleIHe7yw.png"></a></p>\n<p><a href="https://cdn-images-1.medium.com/max/2000/1*6aRa42RkpvmrokqUCXW9JQ.png"></a></p>\n<p>Như vậy với 3 cú click chuột cùng một vài câu thông báo ngắn gọn, user có thể cập nhập Calendar lên phiên bản mới, không những thế Google còn cho phép user quay lại phiên bạn cũ nếu thấy phiên bản mới khó sử dụng, khi đó một lời mời gởi feedback sẽ được gởi cho user trả lời cầu hỏi: Điều chi đã khiến em không thích phiên bản mới của anh. </p>\n<p>Việc phải duy trì 2 phiên bản đồng thời như vậy chứng tỏ Google rất giàu! Một chút chi phí đó để xây dựng lòng tin vào người sử dụng, người sử dụng bị cấy trong đầu ý nghĩ "Sản phẩm của Google thì nào cũng hướng tới tốt nhất cho người sử dụng"</p>\n<h2>Tách 2 màn hình xem và edit</h2>\n<p>Trước đây để xem những thông tin như địa điểm, mô tả, link phải chuyển tới một trang mới, bây giờ xem được trực tiếp trên một cửa sổ popup nhỏ ở ngay màn hình chính.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*VPdG6U1MRMrA0_vjMd0tyQ.png"></p>\n<p>Một ví dụ điển hình cho quyết định có nên tách trang để xem thông tin chi tiết và trang chỉnh sửa thông tin chi tiết, thường chúng ta xe gộp nó lại thành một. </p>\n<p>Nghe thì có vẻ là chuyện rất hiển nhiên thôi, nhưng các bạn sẽ nghe rất nhiều luồn ý kiến khác nhau từ những người làm trong team như "Tại sao không cho 2 trang thành 1 thôi, nơi user có thể có thể làm được mọi thứ, one stop solution". Nghe thì cũng rất hợp lý, nhưng khi thực hiện bạn sẽ bị một chuyện là quá nhiều control trên màn hình edit, trang nhìn sẽ vô cùng rối vì quá nhiều tính năng cần được show ra trên màn hình này, và khi có quá nhiều control trên một màn hình thì user chắc chắn bị rối. Đây là dựa trên lý thuyết JTBD - Job to be done, <a href="https://hbr.org/2016/09/know-your-customers-jobs-to-be-done">Xem thêm về JTBD</a></p>\n<p>Thử tưởng tượng, bạn ngồi xuống sắp xếp lịch công việc trong tháng tới, tuần tới, ngày tới, có phải bạn sẽ cần lướt qua những công việc được sắp xếp trước và sau để phân bố thời gian cho hợp lý.</p>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*fW40s0zTUC1HtTK1O6SGbg.png"></p>\n<p>Với dạng tác vụ kiểu reminder hay event, user cần set thông tin giờ và địa điểm, một popup khác với chỉ 2 field quan trọng nhất này để user có thể chỉnh sửa ngay trên màn hình chính, nếu user muốn có nhiều thay đổi hơn nữa, có thể quyết định click "More option" để tới màn hình edit</p>\n<h2>Design Pattern</h2>\n<p><img src="https://cdn-images-1.medium.com/max/2000/1*s0wREfdCJb42NqMQlj6NTw.png" alt="Trang Settings cũ và mới"></p>\n<p>Trang Settings của Calendar giờ cũng được \'nâng cấp\' theo chuẩn Google\'s Material Design</p>\n<p>Nhìn vô là thấy liền Material Design giúp cho việc chuẩn hóa các sản phẩm của Google theo UX nhanh và hiệu quả như thế nào</p>\n<ul>\n<li>Những thông tin liên quan được group vào trong Card giúp dễ scan nội dung bên trong hơn</li>\n<li>Bên trong Card, các cụm control như Dropdown, Checkbox, Radio được gắn liền kề với phần mô tả, thay vì trước đây user phải hướng mắt theo đường zizag trái phải, trái phải, giờ nhìn từ trên xuống là thấy liền</li>\n<li>Nút Back nằm trên cùng giúp Web App và Mobile App gần như giống nhau về trải nghiệm</li>\n<li>Chữ nghĩa cũng được sắp xếp lại theo hướng kế thừa từ to tới nhỏ, tăng độ tương phản chứ không còn mờ mờ như hồi xưa.</li>\n</ul>',id:"E:/anluu/luckyluu/posts/2017-11-02-mot-vai-cai-tien-google-calendar/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-11-02T13:35:13.234Z",path:"/2017-11-02-mot-vai-cai-tien-google-calendar",tags:["ux-ui"],title:"Một vài cải tiến của Google Calendar"}}}}}});
//# sourceMappingURL=path---2017-11-09-higher-order-function-trong-javascript-6b1f219671be040eb6c2.js.map