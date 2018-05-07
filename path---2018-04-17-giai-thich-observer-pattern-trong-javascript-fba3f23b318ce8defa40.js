webpackJsonp([32],{"./node_modules/json-loader/index.js!./.cache/json/2018-04-17-giai-thich-observer-pattern-trong-javascript.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Hình dung cái pattern này như sau: Chúng ta có 1 cái <em>instance</em> sẽ đảm nhiệm quản lý <strong>tập các đối tượng</strong> (observer) và thông báo đến tất cả các <strong>observer</strong> này khi có một thay đổi nào đó xảy ra.</p>\n<p>Tưởng tượng ta có các elements (có <strong>s</strong> nha) sẽ được cập nhập khi có một <strong>event</strong> xảy ra (ví dụ như nhập giá trị input). Chúng ta cần <strong>thêm</strong> (= <strong>subscribe</strong>) các <em>elements</em> (= <strong>observer</strong>) sẽ thay đổi khi chúng ta nhập giá trị cho <code>input</code>, code nó như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Observable</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// chứa danh sách các đối tượng đang subscribe theo sự kiện</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token comment" spellcheck="true">// thêm đối tượng đó vào mảng observers</span>\n    <span class="token function">subscribe</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// cũng nên có function để remove nó ra khỏi mảng observer nhỉ</span>\n    <span class="token function">unsubscribe</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>subscriber <span class="token operator">=</span><span class="token operator">></span> subscriber <span class="token operator">!==</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// gởi đi thông báo khi xảy ra sự kiện và một số dữ liệu kèm theo</span>\n    <span class="token function">notify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>observer <span class="token operator">=</span><span class="token operator">></span> <span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Sử dụng nó</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// các action sẽ thêm vào mảng observers</span>\n<span class="token keyword">const</span> updateP1 <span class="token operator">=</span> text <span class="token operator">=</span><span class="token operator">></span> p1<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token keyword">const</span> updateP2 <span class="token operator">=</span> text <span class="token operator">=</span><span class="token operator">></span> p2<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token keyword">const</span> updateP3 <span class="token operator">=</span> text <span class="token operator">=</span><span class="token operator">></span> p3<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// khởi tạo Observer class</span>\n<span class="token keyword">const</span> headingsObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// cho em đăng ký với mấy anh ơi</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP2<span class="token punctuation">)</span><span class="token punctuation">;</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// khi giá trị input thay đổi: đưa nào đăng ký thì tao gởi mail, lộn gọi đến action tụi bây đăng ký thực hiện</span>\ninput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> e <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  headingsObserver<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Đây là phiên bản siêu đơn giản của observer pattern, nếu muốn tìm hiểu sâu hơn nữa bạn có thể đọc <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript">Learning Javascript Design Patterns</a> của tác giả Addy Osmani. Observe pattern còn được gọi "Publication/Subscription", thật ra thì nó có xíu khác biệt mà Addy <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript">đã đề cập</a></p>\n<p>Trong Observer pattern, <em>Observer</em> (object) muốn nhận thông báo phải <em>subscribe</em> vào object sẽ fire ra sự kiện, trong khi đó Publish/Subscribe pattern sử dụng như một cầu nối đứng giữa object muốn nhận thông báo (subscriber) và object fire ra sự kiện (publisher), ý tưởng ở đây là để tách sự phụ thuộc của subscriber và publisher, cho phép các event chỉ định có thể truyền đi những arguments chứa giá trị mà subscriber cần.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code> \n<span class="token comment" spellcheck="true">// email đã nhận</span>\n<span class="token keyword">var</span> mailCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n \n<span class="token comment" spellcheck="true">// khởi tạo subscribers sẽ lắng nghe sự kiện "inbox/newMessage".</span>\n \n<span class="token comment" spellcheck="true">// Render preview</span>\n<span class="token keyword">var</span> subscriber1 <span class="token operator">=</span> <span class="token function">subscribe</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> topic<span class="token punctuation">,</span> data <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n \n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">"A new message was received: "</span><span class="token punctuation">,</span> topic <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n  <span class="token comment" spellcheck="true">// Dùng dữ liệu trả về để render và nội dung  </span>\n  <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">".messageSender"</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> data<span class="token punctuation">.</span>sender <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">".messagePreview"</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> data<span class="token punctuation">.</span>body <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment" spellcheck="true">// Một subscriber khác cũng lắng nghe sự kiện này và thực hiện một tác vụ khác</span>\n \n<span class="token comment" spellcheck="true">// Update lại counter</span>\n \n<span class="token keyword">var</span> subscriber2 <span class="token operator">=</span> <span class="token function">subscribe</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> topic<span class="token punctuation">,</span> data <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n \n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.newMessageCounter\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> <span class="token operator">++</span>mailCounter <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token function">publish</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  sender<span class="token punctuation">:</span> <span class="token string">"hello@google.com"</span><span class="token punctuation">,</span>\n  body<span class="token punctuation">:</span> <span class="token string">"Hey there! How are you doing today?"</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment" spellcheck="true">// unsubscribe( subscriber1 );</span>\n<span class="token comment" spellcheck="true">// unsubscribe( subscriber2 );</span>\n</code></pre>\n      </div>\n<p>Tức là ở đây thằng Observer ta móc nó vào sự kiện xảy ra trên đối tượng (ví dụ trên là input), còn Pub/Sub thì sẽ có thằng đứng giữa 2 đứa, làm nhiệm vụ cung cấp 2 hàm là <code>publish</code> để tạo sự kiện, <code>subscribe</code> để lắng nghe sự kiện.</p>',frontmatter:{date:"April 17, 2018",path:"/2018-04-17-giai-thich-observer-pattern-trong-javascript",tags:["javascript","react"],title:"Giải thích Observer Pattern trong javascript",desc:"Observer là một pattern khá phổ biến trong javascript, bài giải thích ngắn gọn về pattern này"}}},pathContext:{prev:!1,next:{excerpt:"Expo là cái gì Expo là một framework để đẩy nhanh việc viết app React Native. Giống như Laravel hay Symphony cho PHP, Ruby on Rail của Ruby. Đồng thời cung cấp một công cụ để chạy thử và test. Hạn chế của Expo Trước khi nghiên cứu tiếp, một vài vấn...",html:'<h2>Expo là cái gì</h2>\n<p>Expo là một framework để đẩy nhanh việc viết app React Native. Giống như Laravel hay Symphony cho PHP, Ruby on Rail của Ruby. Đồng thời cung cấp một công cụ để chạy thử và test.</p>\n<h2>Hạn chế của Expo</h2>\n<p>Trước khi nghiên cứu tiếp, một vài vấn đề quan trọng sau cần biết trước</p>\n<ol>\n<li><strong>Expo không hổ trợ các đoạn code chạy background</strong>, ví dụ như việc tracking vị trí thiết bị là chạy ngầm, một khi đã đóng ứng dụng lại, là coi như xong, không thể track được vị trí của thiết bị nữa.</li>\n<li><strong>Expo chỉ hổ trợ những API mà Expo SDK hổ trợ</strong>, có nghĩa là nếu ứng dụng đang viết có một trường hợp cần tương tác với Bluetooh, vốn không được hổ trợ bởi Expo SDK thì bạn phải viết code React Native thuần luôn, hoặc tự viết thêm native code sử dụng thư viện ExpoKit.</li>\n<li><strong>Sử dụng Expo là chết dính với bộ toolset của nó</strong>. Một số đồ chơi sẽ không chạy được với Expo, trong trường hợp cần xài tới thì phải <em>eject</em> cái app ra khỏi Expo.</li>\n<li><strong>Ứng dụng Expo chỉ build online</strong>. Expo cung cấp một công cụ command-line là <em>Exp</em>, cho phép khởi chạy việc build lên Expo server, một khi hoàn tất, một URL để download <strong>.apk</strong> hoặc <strong>ipa</strong></li>\n</ol>\n<p>Mặc dù nghe có vẻ khá hạn chế, nhưng thực sự Expo rất mạnh, rất nhiều thứ hổ trợ sẵn cho Androi và iOS. Có nghĩa là nếu app đang viết không có gì quá đặc biệt, quá "đỉnh của đỉnh" thì việc sử dụng Expo sẽ mang tới rất nhiều lợi ích.</p>\n<h2>App sẽ viét</h2>\n<p>Làm cái game kiểu tìm cập <em>đóa</em></p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/30546/image/memory-game-default.png"></p>\n<p>Và đây là mặt kia của thẻ</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/30546/image/memory-game-done.png"></p>\n<p>Sau khi tìm ra được hết các cặp, user nhấn reset để chơi lại</p>\n<h2>Cài Expo</h2>\n<p>Không giống với việc viết React Native thuần, chúng ta phải cài và cấu hình Android Studio, Xcode và một số thứ linh tinh khác, tất cả những gì để bắt đầu với Expo là</p>\n<ol>\n<li>Cài Node.js, viết React thì phải có rồi</li>\n<li>Cài Expo Client trên thiết bị iOS hoặc Android, cái này để preview app.</li>\n<li>Cài bộ CLI tool của Expo, để mà khởi chạy một dự án Expo mới, chạy build,... dễ lắm như sau</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install expo --global</code></pre>\n      </div>\n<h3>Tạo một dự án Expo mới</h3>\n<p>Một khi hoàn tất 3 thứ công việc đơn giản trên, giờ chúng ta tạo một app mới</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>exp init MemoryGame\n\n// trỏ vô thư mục mới tạo\ncd MemoryGame\n\n// Let ruuuuuuun\nexp start</code></pre>\n      </div>\n<p>Nếu sử dụng Expo XDE thì có thể tạo và chạy Expo app qua giao diện, tải <a href="https://github.com/expo/xde/releases">ở đây nè</a>. Sau khi chạy xong thì trên màn hình command-line sẽ có đoạn QR code</p>\n<p><img src="https://cms-assets.tutsplus.com/uploads/users/1125/posts/30546/image/run-dev-server.png"></p>\n<p>Rút điện thoại ra, mở app Expo lên, quét đoạn QR code này và xong. Sẽ thấy màn hình mặc định của ứng dụng, mỗi lần bấm <code>Control + S</code> là nó sẽ tự động load lại.</p>\n<h3>Ví dụ</h3>\n<p>Toàn bộ code ví dụ có thể download <a href="https://github.com/tutsplus/easier-react-native-development-with-expo">ở đây</a>, bạn có thể down về chạy thử. Mình không phân tích toàn bộ code ở đây vì, mình chỉ tập trung giới thiệu về Expo, mình mặc định các bạn đã biết React, React Native căn bản nhé.</p>',id:"E:/anluu/luckyluu/posts/2018-04-16-react-native-bat-dau-voi-expo/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2018-04-16T13:35:13.234Z",path:"/2018-04-16-react-native-bat-dau-voi-expo",tags:["javascript","react","react-native"],title:"Giới thiệu Expo, nhập môn React Native"}}}}}});
//# sourceMappingURL=path---2018-04-17-giai-thich-observer-pattern-trong-javascript-fba3f23b318ce8defa40.js.map