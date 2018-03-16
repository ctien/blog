webpackJsonp([36],{"./node_modules/json-loader/index.js!./.cache/json/2017-11-29-goc-nhin-ve-accessible-ui-web.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Accessibility không chỉ là trách nhiệm của Developer</h2>\n<p>Tình huống như thế này, bạn nhận một website thiết kế one page được approve từ khách hàng, sếp yêu cầu bạn code xong trang này trong 1 tuần, trong đó bao gồm 2 ngày làm việc với bên QA để mọi thứ perfect trước khi tới tay khách hàng. Khi nhìn vào thiết kế này, bạn nhìn ra vấn đề là trên các thiết bị nào nhỏ nhỏ xíu, mấy cái chữ nằm đè trên background này có thể gây khó đọc.</p>\n<p>Developer sẽ có một vài lựa chọn sau:</p>\n<ol>\n<li>Im lặng mặc dù nó biết như thế nó sẽ ảnh hưởng đến accessibility</li>\n<li>Kệ, làm luôn mặc dù hơi khác thiết kế chút, cứ làm xong rồi giải thích sau.</li>\n<li>Gởi một bản gợi ý những thay đổi nên làm tới anh designer hoặc khách hàng trước khi làm.</li>\n</ol>\n<p>Cái tình huống này gặp như cơm bữa, every project luôn, bạn có thể quánh giá mình thoải mái, nhưng mình sẽ chọn lựa chọn 1. Im lặng.</p>\n<p>Nếu chọn cách làm thứ 2, vâng bạn sẽ dính phải hàng tá chỉ trích từ khách hàng, từ sếp, sau không làm đúng hợp đồng, đúng yêu cầu ban đầu, và lựa chọn thứ 3 cũng tương tự. Nếu bạn là người làm việc có \'tâm\' và thứ làm cách 3 đi và xem bạn nhận được gì. Khách hàng chưa hẳn đồng ý với điều bạn nói, sếp không hài lòng vì bạn dành thời gian để đưa ra những ý kiến ko đem đến tiền, thử nghĩ nếu bạn làm cách 1, sau đó khách hàng thấy sai, kếu sửa, vậy là sếp lại có cớ đòi thêm tiền.</p>\n<p>Vâng còn một lựa chọn thứ 4 nữa, là lựa chọn mình đang làm, đi phổ cập kiến thức accessibility cho những anh designer.</p>\n<h2>Accessibility cho dân ngoại đạo</h2>\n<p>Bạn đem share kiến thức về accessibility cho bất kể là ai: UI Designer, content provider, project managers, khách hàng,... để mọi người biết và quan tâm đến nó, biết sự tồn tại và cần thiết của nó, để mọi người bỏ ngay cái suy nghĩ "đẹp là được"</p>\n<h3>Đừng quá chú trọng đến Animations</h3>\n<p>Với khả năng của css, js, những thư viện hiện có sẵn đầy rẫy được share miễn phí, trang web bây giờ có thể nhìn như một cái slide powerpoint với những animation chim bay, cò bay, tuyết rơi, đèn pha lấp lánh. Ở gốc độ người sử dụng, lần đầu tiên bạn vào trang web chắc hẳn họ sẽ thốt lên "WOW, cool ghê", nhưng tưởng tượng bạn làm một website với mục tiêu người sử dụng truy cập hàng tuần, hàng ngày thì những animation chỉ có vứt đi.</p>\n<h3>Độ tương phản cần thiết để đọc</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961153/low-contrast-text_twvimd.jpg"></p>\n<p>Màu chữ và màu nền không đủ độ tương phản làm rất khó đọc.</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961159/low-contrast-text-sunshine_ugzxpt.jpg"></p>\n<p>Tương tự, bạn sẽ lướt qua và không để ý đến sự tồn tại của dòng caption bên dưới "Sunshine sue"</p>\n<p>Giải pháp? Test màu nền và màu chữ bằng công cụ sau <a href="https://webaim.org/resources/contrastchecker/">https://webaim.org/resources/contrastchecker/</a></p>\n<h3>Thận trọng khi đặt chữ đè lên hình</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1511044772/burberry-fix_mqdy7i.jpg"></p>\n<p>Đố đọc được mấy chữ màu trắng</p>\n<h3>Kiểm trả kích thước font chữ, độ đậm của chữ</h3>\n<p>Xu hướng bây giờ mấy bạn thường cứ thích dùng font chữ mỏng lét, font weight 200 thậm chí 100, nếu lướt ngang thì nhìn UI rất là elegant những mà muốn đọc thì phải nhìn thật kỹ</p>\n<p><img src="https://notlaura.com/wp-content/uploads/2017/10/typography-improvements-1200x408.jpg"></p>\n<h3>Link mở trang mới, cảnh báo người dùng</h3>\n<p>Khi gắn link mở ra một tab mới, gắn một icon để thông báo cho người ta biết "Link này mở tab mới đó nha"</p>\n<h3>Phân biệt giữa các icon social media</h3>\n<p>Nếu nhìn thấy một button với icon Facebook trên đó, bạn nghĩ nó là gì? dẫn đến trang profile!. Nếu icon đó là một thao tác như share thì cần phân định rõ với lại một icon dẫn đến profile</p>\n<h3>Đừng tin tưởng tuyệt đối vào icon và màu sắc để truyền tải nội dung</h3>\n<p>Đại đa số người sử dụng web nhiều đều biết icon hamburger để mở ra menu chính của trang, nhưng đừng gom đũa cả nắm như thế mà bỏ hết chữ nghĩa, dồn hết vào menu hamburgerd - cho gọn.</p>\n<p>Các bạn trên vnexpress nghĩ sẽ rất là cool nếu trên menu mỗi chuyên mục sẽ có màu sắc khác nhau, nhưng thực tế phủ phàng rằng, sự phân định màu sắc theo quan điểm cá nhân này của bạn thiết kế không đem đến lợi ích vì cho người đọc, ai nói mục màu xanh dương thì đại diện cho các bài viết thuộc chuyên mục gia đình, xanh lá là cho thể thao.</p>\n<h3>Sẽ ra sau nếu không có tương tác</h3>\n<p>Lỗi dể thấy trên các trang bán hàng nếu đặt giá hoặc nút mua sản phẩm ẩn đi, chỉ xuất hiện khi có chuột hover lên, và nếu không có hover lên thì sao? người dùng chẳng thấy gì cả, trên điện thoại người ta cũng không rảnh đâu mà đưa tay lên để xem giá từng sản phẩm.</p>\n<p>Còn nhiều nào rãnh viết tiếp</p>',frontmatter:{date:"November 29, 2017",path:"/2017-11-29-goc-nhin-ve-accessible-ui-web",tags:["ux-ui"],title:"Góc nhìn về Accessible UI",desc:"Thuật ngữ Accessiblity đang hot trong thời gian gần đây, đã đến lúc thiết kế với tư duy sản phẩm cho mọi người."}}},pathContext:{prev:{excerpt:"Khi build một component chúng ta thường khai báo   và   cho nó, nó trực quan dễ kiểm soát. Trong một số trường hợp đặc biệt, nếu muốn truyền dữ liệu từ trên xuống dưới mà không cần phải đi truyền tuần tự từng component một, có thể sử dụng  Tại sao...",html:'<p>Khi build một component chúng ta thường khai báo <code>props</code> và <code>state</code> cho nó, nó trực quan dễ kiểm soát. Trong một số trường hợp đặc biệt, nếu muốn truyền dữ liệu từ trên xuống dưới mà không cần phải đi truyền tuần tự từng component một, có thể sử dụng <code>context</code></p>\n<h2>Tại sao không nên sử dụng <code>context</code></h2>\n<p>Trong tương lai không xa <code>context</code> sẽ được gỡ bỏ khỏi React, trên thực tế cho thấy việc sử dụng <code>context</code> khiến việc maintain ứng dụng rất vất vả vì không biết được giá trị context từ đâu mà có. Khuyến cáo sử dụng Redux hoặc Mobx để quản lý state cho các component</p>\n<h2>Sử dụng sao</h2>\n<p>Ví dụ có 3 component: OngNoi, Cha, Con</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">Con</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Cha</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token operator">&lt;</span>Con color<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>Con<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">OngNoi</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Cha text<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span> color<span class="token operator">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Props <em>color</em> được truyền từ OngNoi > Cha > Con, nếu sử dụng context có thể truyền thẳng từ OngNoi > Con</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">Con</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nCon<span class="token punctuation">.</span>contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Cha</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token operator">&lt;</span>Con<span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>Con<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">OngNoi</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">"purple"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>Cha text<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nOngNoi<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Bằng cách thêm kai báo cho component OngNoi <code>childContextTypes</code> và hàm <code>getChildContext</code>, thằng <em>Con</em> sẽ có thể truy cập đến <em>color</em> bằng <code>contextTypes</code></p>\n<h2>Ứng dụng</h2>\n<p>Trong React Router 4, component <em>Router</em> có khai báo context này, nến khi truyền các prop cho component <em>Router</em>, các component Route và Link bên trong có thể truy cập đến prop của Router</p>\n<h2>Lifecycle Methods</h2>\n<p>Khi có xuất hiện khai báo <code>contextTypes</code> trong component, các phương thức sau sẽ tiếp nhận thêm tham số <code>context</code></p>\n<ul>\n<li>constructor(props, context)</li>\n<li>componentWillReceiveProps(nextProps, nextContext)</li>\n<li>shouldComponentUpdate(nextProps, nextState, nextContext)</li>\n<li>componentWillUpdate(nextProps, nextState, nextContext)</li>\n</ul>',id:"E:/anluu/luckyluu/posts/2017-12-19-react-context-types/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2017-12-19T13:35:13.234Z",path:"/2017-12-19-react-context-types",tags:["react","javascript"],title:"React Context Types"}},next:{excerpt:"Callback function Javascript xem một function như một dạng object, function có thể trở thành giá trị của một biến, có thể dùng như một đối số hoặc giá trị return như một object. Javscript là ngôn ngữ single-threaded, nghĩa là một lần nó chỉ chạy một...",html:'<h2>Callback function</h2>\n<p>Javascript xem một function như một dạng object, function có thể trở thành giá trị của một biến, có thể dùng như một đối số hoặc giá trị return như một object.</p>\n<p>Javscript là ngôn ngữ single-threaded, nghĩa là một lần nó chỉ chạy một tính toán tuần tự. Nếu đã từng viết javascript nhiều bạn sẽ thấy việc sử dụng <code>callback</code> trong javascript rất nhiều, function A được truyền vào cho function B, sau khi thực hiện các đoạn code trong function B, nó sẽ gọi lại function A và chạy các đoạn code trong function A</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"clicker"</span><span class="token operator">></span>Click Here<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Hoac viet</span>\n\n<span class="token keyword">var</span> proveIt <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"You click"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'clicker\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> proveIt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lưu ý là mình pass vào <code>proveIt</code> chứ không phải <code>proveIt()</code>, mình đang truyền vào proveIt như một <em>object</em> chứ nếu truyền <code>proveIt()</code> là mình sẽ truyền vào kết quả xử lý của hàm <em>proveIt</em></p>\n<p>Với cái khả năng đơn giản như đang giỡn là truyền vào một cái inline function như vậy với một function được định danh đâu đó mở ra muôn vàng kiểu viết biến hóa. Chúng ta có thể xây dựng những function rất rất nhỏ để xử dụng ở nhiều nơi, nhiều chổ, nhiều project khác nhau nếu chúng ta áp dụng nguyên tác viết pure function ( nếu cùng một giá trị truyền vào, luôn luôn trả về cùng kết quả).</p>\n<h1>Function như một giá trị trả về</h1>\n<p>Ví dụ ta có một hàm để thay thể chuỗi "Millennials" thành "Snake People"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> snakify <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Snake People are always up to something.</span>\n</code></pre>\n      </div>\n<p>Rồi ta lại có thêm một hàm thay thể chuổi "Baby Boomers" thành "Aging Hippies"</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> hippify <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Aging Hippies just look the other way.</span>\n</code></pre>\n      </div>\n<p>Chúng ta có viết lại 2 hàm này một cách thông minh và phức tạp hơn chút</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> attitude <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> replacement<span class="token punctuation">,</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> replacement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> snakify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/millenials/ig</span><span class="token punctuation">,</span> <span class="token string">"Snake People"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> hippify <span class="token operator">=</span> <span class="token function">attitude</span><span class="token punctuation">(</span><span class="token regex">/baby boomers/ig</span><span class="token punctuation">,</span> <span class="token string">"Aging Hippies"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">snakify</span><span class="token punctuation">(</span><span class="token string">"The Millenials are always up to something."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Snake People are always up to something.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hippify</span><span class="token punctuation">(</span><span class="token string">"The Baby Boomers just look the other way."</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// The Aging Hippies just look the other way.</span>\n</code></pre>\n      </div>\n<p>Bằng việc khai báo 1 function mới (snakify, hippyfy) reference tới function <code>attitude</code> chỉ đưa vào 2 tham số đầu tiên, cho phép function mới này nhận bất kỳ giá trị truyền vào nào trở thành tham số truyền vào thứ 3 của function <code>attitude</code>.</p>\n<p>Javascript cho phép truyền vào một function số lượng argument ít hơn số lượng được khai báo, khi đó những argument ko được truyền vào thì xem như undefined. Thứ 2 nữa là function có thể nhận vào thêm argument sau khi nó được gọi bằng cách viết như trên, snakify trỏ đến attitude, khi gọi snakify thì argument truyền vào của snakify trở thành argument còn thiếu trong attitude</p>\n<p>Đọc thêm phần closures ở đây \'<a href="https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet">https://luubinhan.github.io/blog/2017-09-25-10-khai-niem-javascript-can-biet</a>\'</p>',id:"E:/anluu/luckyluu/posts/2017-11-09-higher-order-function-trong-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2017-11-09T13:35:13.234Z",path:"/2017-11-09-higher-order-function-trong-javascript",tags:["javascript"],title:"Higher-Order function trong javascript"}}}}}});
//# sourceMappingURL=path---2017-11-29-goc-nhin-ve-accessible-ui-web-d54e8e0447d46169c9ae.js.map