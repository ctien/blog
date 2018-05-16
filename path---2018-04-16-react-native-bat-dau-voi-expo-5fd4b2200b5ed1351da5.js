webpackJsonp([34],{"./node_modules/json-loader/index.js!./.cache/json/2018-04-16-react-native-bat-dau-voi-expo.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Expo là cái gì</h2>\n<p>Expo là một framework để đẩy nhanh việc viết app React Native. Giống như Laravel hay Symphony cho PHP, Ruby on Rail của Ruby. Đồng thời cung cấp một công cụ để chạy thử và test.</p>\n<h2>Hạn chế của Expo</h2>\n<p>Trước khi nghiên cứu tiếp, một vài vấn đề quan trọng sau cần biết trước</p>\n<ol>\n<li><strong>Expo không hổ trợ các đoạn code chạy background</strong>, ví dụ như việc tracking vị trí thiết bị là chạy ngầm, một khi đã đóng ứng dụng lại, là coi như xong, không thể track được vị trí của thiết bị nữa.</li>\n<li><strong>Expo chỉ hổ trợ những API mà Expo SDK hổ trợ</strong>, có nghĩa là nếu ứng dụng đang viết có một trường hợp cần tương tác với Bluetooh, vốn không được hổ trợ bởi Expo SDK thì bạn phải viết code React Native thuần luôn, hoặc tự viết thêm native code sử dụng thư viện ExpoKit.</li>\n<li><strong>Sử dụng Expo là chết dính với bộ toolset của nó</strong>. Một số đồ chơi sẽ không chạy được với Expo, trong trường hợp cần xài tới thì phải <em>eject</em> cái app ra khỏi Expo.</li>\n<li><strong>Ứng dụng Expo chỉ build online</strong>. Expo cung cấp một công cụ command-line là <em>Exp</em>, cho phép khởi chạy việc build lên Expo server, một khi hoàn tất, một URL để download <strong>.apk</strong> hoặc <strong>ipa</strong></li>\n</ol>\n<p>Mặc dù nghe có vẻ khá hạn chế, nhưng thực sự Expo rất mạnh, rất nhiều thứ hổ trợ sẵn cho Androi và iOS. Có nghĩa là nếu app đang viết không có gì quá đặc biệt, quá "đỉnh của đỉnh" thì việc sử dụng Expo sẽ mang tới rất nhiều lợi ích.</p>\n<h2>App sẽ viét</h2>\n<p>Làm cái game kiểu tìm cập <em>đóa</em></p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/30546/image/memory-game-default.png"></p>\n<p>Và đây là mặt kia của thẻ</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/30546/image/memory-game-done.png"></p>\n<p>Sau khi tìm ra được hết các cặp, user nhấn reset để chơi lại</p>\n<h2>Cài Expo</h2>\n<p>Không giống với việc viết React Native thuần, chúng ta phải cài và cấu hình Android Studio, Xcode và một số thứ linh tinh khác, tất cả những gì để bắt đầu với Expo là</p>\n<ol>\n<li>Cài Node.js, viết React thì phải có rồi</li>\n<li>Cài Expo Client trên thiết bị iOS hoặc Android, cái này để preview app.</li>\n<li>Cài bộ CLI tool của Expo, để mà khởi chạy một dự án Expo mới, chạy build,... dễ lắm như sau</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install expo --global</code></pre>\n      </div>\n<h3>Tạo một dự án Expo mới</h3>\n<p>Một khi hoàn tất 3 thứ công việc đơn giản trên, giờ chúng ta tạo một app mới</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>exp init MemoryGame\n\n// trỏ vô thư mục mới tạo\ncd MemoryGame\n\n// Let ruuuuuuun\nexp start</code></pre>\n      </div>\n<p>Nếu sử dụng Expo XDE thì có thể tạo và chạy Expo app qua giao diện, tải <a href="https://github.com/expo/xde/releases">ở đây nè</a>. Sau khi chạy xong thì trên màn hình command-line sẽ có đoạn QR code</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/30546/image/run-dev-server.png"></p>\n<p>Rút điện thoại ra, mở app Expo lên, quét đoạn QR code này và xong. Sẽ thấy màn hình mặc định của ứng dụng, mỗi lần bấm <code>Control + S</code> là nó sẽ tự động load lại.</p>\n<h3>Ví dụ</h3>\n<p>Toàn bộ code ví dụ có thể download <a href="https://github.com/tutsplus/easier-react-native-development-with-expo">ở đây</a>, bạn có thể down về chạy thử. Mình không phân tích toàn bộ code ở đây vì, mình chỉ tập trung giới thiệu về Expo, mình mặc định các bạn đã biết React, React Native căn bản nhé.</p>\n<p>Tác giả: Wern Ancheta\nLink bài gốc: <a href="https://code.tutsplus.com/tutorials/easier-react-native-development-with-expo--cms-30546">https://code.tutsplus.com/tutorials/easier-react-native-development-with-expo--cms-30546</a></p>',frontmatter:{date:"April 16, 2018",path:"/2018-04-16-react-native-bat-dau-voi-expo",tags:["javascript","react","react-native"],title:"Giới thiệu Expo, nhập môn React Native",desc:"Để bắt đầu với React Native, cách nhanh nhất không cần cài Android Studio, Xcode hay những công cụ khác để có thể một trường để chạy test React Native thì Expo chính là thứ phải biết"}}},pathContext:{prev:{excerpt:"Hình dung cái pattern này như sau: Chúng ta có 1 cái  instance  sẽ đảm nhiệm quản lý  tập các đối tượng  (observer) và thông báo đến tất cả các  observer  này khi có một thay đổi nào đó xảy ra. Tưởng tượng ta có các elements (có  s  nha) sẽ được cập...",html:'<p>Hình dung cái pattern này như sau: Chúng ta có 1 cái <em>instance</em> sẽ đảm nhiệm quản lý <strong>tập các đối tượng</strong> (observer) và thông báo đến tất cả các <strong>observer</strong> này khi có một thay đổi nào đó xảy ra.</p>\n<p>Tưởng tượng ta có các elements (có <strong>s</strong> nha) sẽ được cập nhập khi có một <strong>event</strong> xảy ra (ví dụ như nhập giá trị input). Chúng ta cần <strong>thêm</strong> (= <strong>subscribe</strong>) các <em>elements</em> (= <strong>observer</strong>) sẽ thay đổi khi chúng ta nhập giá trị cho <code>input</code>, code nó như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Observable</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// chứa danh sách các đối tượng đang subscribe theo sự kiện</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token comment" spellcheck="true">// thêm đối tượng đó vào mảng observers</span>\n    <span class="token function">subscribe</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// cũng nên có function để remove nó ra khỏi mảng observer nhỉ</span>\n    <span class="token function">unsubscribe</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>subscriber <span class="token operator">=</span><span class="token operator">></span> subscriber <span class="token operator">!==</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// gởi đi thông báo khi xảy ra sự kiện và một số dữ liệu kèm theo</span>\n    <span class="token function">notify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>observer <span class="token operator">=</span><span class="token operator">></span> <span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Sử dụng nó</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// các action sẽ thêm vào mảng observers</span>\n<span class="token keyword">const</span> updateP1 <span class="token operator">=</span> text <span class="token operator">=</span><span class="token operator">></span> p1<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token keyword">const</span> updateP2 <span class="token operator">=</span> text <span class="token operator">=</span><span class="token operator">></span> p2<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token keyword">const</span> updateP3 <span class="token operator">=</span> text <span class="token operator">=</span><span class="token operator">></span> p3<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// khởi tạo Observer class</span>\n<span class="token keyword">const</span> headingsObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// cho em đăng ký với mấy anh ơi</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP2<span class="token punctuation">)</span><span class="token punctuation">;</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// khi giá trị input thay đổi: đưa nào đăng ký thì tao gởi mail, lộn gọi đến action tụi bây đăng ký thực hiện</span>\ninput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> e <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  headingsObserver<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Đây là phiên bản siêu đơn giản của observer pattern, nếu muốn tìm hiểu sâu hơn nữa bạn có thể đọc <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript">Learning Javascript Design Patterns</a> của tác giả Addy Osmani. Observe pattern còn được gọi "Publication/Subscription", thật ra thì nó có xíu khác biệt mà Addy <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript">đã đề cập</a></p>\n<p>Trong Observer pattern, <em>Observer</em> (object) muốn nhận thông báo phải <em>subscribe</em> vào object sẽ fire ra sự kiện, trong khi đó Publish/Subscribe pattern sử dụng như một cầu nối đứng giữa object muốn nhận thông báo (subscriber) và object fire ra sự kiện (publisher), ý tưởng ở đây là để tách sự phụ thuộc của subscriber và publisher, cho phép các event chỉ định có thể truyền đi những arguments chứa giá trị mà subscriber cần.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code> \n<span class="token comment" spellcheck="true">// email đã nhận</span>\n<span class="token keyword">var</span> mailCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n \n<span class="token comment" spellcheck="true">// khởi tạo subscribers sẽ lắng nghe sự kiện "inbox/newMessage".</span>\n \n<span class="token comment" spellcheck="true">// Render preview</span>\n<span class="token keyword">var</span> subscriber1 <span class="token operator">=</span> <span class="token function">subscribe</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> topic<span class="token punctuation">,</span> data <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n \n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">"A new message was received: "</span><span class="token punctuation">,</span> topic <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n  <span class="token comment" spellcheck="true">// Dùng dữ liệu trả về để render và nội dung  </span>\n  <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">".messageSender"</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> data<span class="token punctuation">.</span>sender <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">".messagePreview"</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> data<span class="token punctuation">.</span>body <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment" spellcheck="true">// Một subscriber khác cũng lắng nghe sự kiện này và thực hiện một tác vụ khác</span>\n \n<span class="token comment" spellcheck="true">// Update lại counter</span>\n \n<span class="token keyword">var</span> subscriber2 <span class="token operator">=</span> <span class="token function">subscribe</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> topic<span class="token punctuation">,</span> data <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n \n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.newMessageCounter\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> <span class="token operator">++</span>mailCounter <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token function">publish</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  sender<span class="token punctuation">:</span> <span class="token string">"hello@google.com"</span><span class="token punctuation">,</span>\n  body<span class="token punctuation">:</span> <span class="token string">"Hey there! How are you doing today?"</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment" spellcheck="true">// unsubscribe( subscriber1 );</span>\n<span class="token comment" spellcheck="true">// unsubscribe( subscriber2 );</span>\n</code></pre>\n      </div>\n<p>Tức là ở đây thằng Observer ta móc nó vào sự kiện xảy ra trên đối tượng (ví dụ trên là input), còn Pub/Sub thì sẽ có thằng đứng giữa 2 đứa, làm nhiệm vụ cung cấp 2 hàm là <code>publish</code> để tạo sự kiện, <code>subscribe</code> để lắng nghe sự kiện.</p>',id:"E:/anluu/luckyluu/posts/2018-04-17-giai-thich-observer-pattern-trong-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2018-04-17T13:35:13.234Z",path:"/2018-04-17-giai-thich-observer-pattern-trong-javascript",tags:["javascript","react"],title:"Giải thích Observer Pattern trong javascript"}},next:{excerpt:"Ngày xưa khi Firefox ra đời đánh dấu sự tàn lụi của IE6, với những tính năng siêu ngầu như: cho phép user cài thêm  extensions , thay  theme  như thay áo. Ai cũng khoái. Vài năm sau, dân chơi thứ thiệt bước vào cuộc đấu, cái tên ai cũng biết là ai...",html:'<p><img src="https://cdn-images-1.medium.com/max/1000/1*Gd9wkMJQxrCi8UNZWRgx-Q.png"></p>\n<p>Ngày xưa khi Firefox ra đời đánh dấu sự tàn lụi của IE6, với những tính năng siêu ngầu như: cho phép user cài thêm <strong>extensions</strong>, thay <strong>theme</strong> như thay áo. Ai cũng khoái.</p>\n<p>Vài năm sau, dân chơi thứ thiệt bước vào cuộc đấu, cái tên ai cũng biết là ai đấy - <strong>Chrome</strong>. Khi vừa xuất hiện thực sự Chrome trở thành cơn địa chấn, số lượng người dùng lúc ban đầu nhiều không tưởng, và không ngừng tăng, bởi vì nó được chống lưng bởi Google, con ác chủ bài để Google có thể chiếm hết thị phần trình duyệt. Chắc chắn bạn cũng đang dùng Chrome để đọc blog này!</p>\n<p>Web <em>bây giờ</em> khác xưa nhiều rồi, công nghệ tân thời tốn điện hơn xưa, à ko, tốn RAM và CPU hơn, web ko còn là những trang tin đơn giản, nó còn là những ứng dụng phức tạp chạy trên trình duyệt bằng những công nghệ, ngôn ngữ không ngừng thay đổi để <strong>thõa mãn</strong> thú tính của người sử dụng, chúng ta đấy.</p>\n<blockquote>\n<p>Tui một developer chạy con Macbook Pro cấu hình cao nhất, mới nhất. Khi bắt đầu lập trình và bật Chrome DevTools lên, pin tụt nhanh như chó phóng qua hàng rào</p>\n</blockquote>\n<p>Và nếu bạn cũng là developer như tui, chắc bạn cũng sẽ bật Task manager lên và kiểm tra, a đù, sao Chrome mày ăn RAM tao kinh dị vạy.</p>\n<p>Rồi bạn nghe đâu với bản <a href="https://blog.mozilla.org/blog/2017/11/14/introducing-firefox-quantum/?utm_source=twitter&#x26;utm_medium=social&#x26;utm_campaign=quantum-launch-2017&#x26;utm_content=launch-blog">Firefox Quantum</a> mới bọn dev của mozila đã ngồi fix hơn 7 triệu dòng code để Firefox cạnh tranh về tốc độ với Google! Quảng cáo ngầu ghê!</p>\n<p>Năm 2017 Quantum chạy chính thức trên Android, Linux, iOS, Mac, Windows, nói chung chạy tuốt, phải hơn sau 10 năm từ ngày phiên bản đầu tiên, phiên bản đã giết chết IE mới có một cập nhập thực sự đáng đồng tiền bát cháo.</p>\n<p><img src="https://www.mozilla.org/media/img/firefox/home/hero-laptop.cd8ad96e2fbc.png"></p>\n<p>Bên cạnh giao diện cool mới, nó load web nhanh hơn gấp đôi so với phiên bản Firefox 6, sử dụng ít hơn 30% RAM so với Chrome.</p>\n<p>Sau 10 năm lăn lộn trên chiến trường, Mozilla đã hiểu được rằng để cạnh tranh được với đối thủ bây giờ thì không chỉ cần một vài cải tiến nhỏ là được, mọi thứ phải thực sự <strong>AWSOME</strong>.</p>\n<p>Có thể những tính năng được đưa vào Firefox Quantum bạn cũng có thể tìm thấy trên Chrome, nhưng điều gì khiến tui vẫn thích Firefox và luôn muốn mình sử dụng Firefox khi có thể?</p>\n<p>Các công ty lớn điều sẽ muốn người sử dụng sản phẩm từ một nhà cung cấp khác quay lưng và sử dụng sản phẩm của mình, công ty sẽ cung cấp những tính năng chỉ-có-thể-tìm-thấy trên sản phẩm của họ để cầm chân người dùng trong ecosymtem của công ty.</p>\n<p>Lấy ví dụ như Apple Keynote chỉ có thể sử dụng với Safari, iMessage chỉ có trên iOS, bạn phải say-good-bye khi chuyển qua Android, trang update của Microsoft chỉ có thể sự dụng trên IE, Edge, để chép nhạc vào iphone bạn phải cài iTune,... ngược lại Firefox có thể nói là kẻ phá đám đứng ngoài khu vườn thượng uyển đó, là đối thủ cạnh tranh để chống lại sự độc quyền và khiến việc các công ty lớn bắt chúng ta phụ thuộc ngày càng nhiều vào các công ty này trở nên khó hơn, khiến họ phải dè chừng và không ngừng cái tiến sản phẩm. Như câu nói nghe suốt "Có cạnh tranh thì mới có phát triển", như khi Grab đã loại đi Uber rồi và khi chúng ta sẽ ra sau, Youtube của google một khi đã giết hết tất cả đối thủ trong mảng Video trực tuyến, chúng ta ăn quảng cáo còn hơn cả trên truyền hình, xem một clip 10 phút là đã có quảng cáo, vừa vào xem đã phải xem quảng cáo trước.</p>\n<p>Bonus: từ hàng triệu yêu cầu từ user, Firefox đã có tính năng tắt hết cái <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1368744">Push-Notify</a>, một trong những yêu cầu hết sực bực mình khi các trang web bây giờ đều đòi cấp phép cho nó quăng thông báo quảng cáo qua trình duyệt dù mình không đang truy cập nó.</p>\n<p>Fanboy Firefox cho hay :D</p>\n<p>Dịch từ đâu quên nguồn</p>',id:"E:/anluu/luckyluu/posts/2018-04-05-tai-sao-tui-van-thich-firefox/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2018-04-05T13:35:13.234Z",path:"/2018-04-05-tai-sao-tui-van-thich-firefox",tags:["ux-ui"],title:"Chém gió: Tại sao tui vẫn thích Firefox"}}}}}});
//# sourceMappingURL=path---2018-04-16-react-native-bat-dau-voi-expo-5fd4b2200b5ed1351da5.js.map