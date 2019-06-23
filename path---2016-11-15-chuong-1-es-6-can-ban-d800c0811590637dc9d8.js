webpackJsonp([25],{"./node_modules/json-loader/index.js!./.cache/json/2016-11-15-chuong-1-es-6-can-ban.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h1>Những nâng cấp cho Object</h1>\n<p>Một object trong javascript được khai như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">let</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>\n title<span class="token punctuation">:</span> <span class="token string">\'ES6\'</span><span class="token punctuation">,</span>\n author<span class="token punctuation">:</span> <span class="token string">\'anluu\'</span><span class="token punctuation">,</span>\n publisher<span class="token punctuation">:</span> <span class="token string">\'luckyluu\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Những nâng cấp trong ES6</p>\n<h1>Cách viết tắt cho cặp Property: Value</h1>\n<p>Bình thường thì khai báo dạng giá trị của một object bằng <code>property: value</code>, bây giờ không cần <code>value</code> nữa, nếu <code>property</code> tham chiếu tới một biến hoặc hàm, nói cách khác là nếu nó cùng tên với hàm hoặc biến được định nghĩa trước đó</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">var</span> api <span class="token operator">=</span> <span class="token punctuation">{</span>listeners<span class="token punctuation">,</span> listen<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Giúp rút object nhìn "sạch sẽ" hơn</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">var</span> api <span class="token operator">=</span> <span class="token punctuation">{</span> getItem<span class="token punctuation">,</span> setItem<span class="token punctuation">,</span> clear <span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token keyword">return</span> key <span class="token keyword">in</span> store <span class="token operator">?</span> store<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n store<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n store <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Computed Property Names</h1>\n<p>Nếu cần khai báo <code>property</code> là một biến, nó không phải là một giá trị định sẵn, với ES5 thì sẽ viết như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> expertise <span class="token operator">=</span> <span class="token string">\'journalism\'</span>\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n name<span class="token punctuation">:</span> <span class="token string">\'Sharon\'</span><span class="token punctuation">,</span>\n age<span class="token punctuation">:</span> <span class="token string">\'28\'</span>\n<span class="token punctuation">}</span>\nperson<span class="token punctuation">[</span>expertise<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n years<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n interests<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'international\'</span><span class="token punctuation">,</span><span class="token string">\'politics\'</span><span class="token punctuation">,</span><span class="token string">\'internet\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Với ES6 property của object không nhất thiết phải là tên cố định, nếu là một biến chỉ việc wrap nó lại trong dấu []. Như ví dụ trên có thể viết lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> expertise <span class="token operator">=</span> <span class="token string">\'journalism\'</span>\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n name<span class="token punctuation">:</span> <span class="token string">\'Sharon\'</span><span class="token punctuation">,</span>\n age<span class="token punctuation">:</span> <span class="token string">\'28\'</span><span class="token punctuation">,</span>\n <span class="token punctuation">[</span>expertise<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  years<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n  interests<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'international\'</span><span class="token punctuation">,</span><span class="token string">\'politics\'</span><span class="token punctuation">,</span><span class="token string">\'internet\'</span><span class="token punctuation">]</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>Lưu ý</strong> không nên kết hợp sử dụng giữa property value shorthand và computed property name vì sẽ sinh ra lỗi và đọc rất khó hiểu</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> expertise <span class="token operator">=</span> <span class="token string">\'journalism\'</span>\n<span class="token keyword">var</span> journalism <span class="token operator">=</span> <span class="token punctuation">{</span>\n years<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n interest<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'international\'</span><span class="token punctuation">,</span><span class="token string">\'politics\'</span><span class="token punctuation">,</span><span class="token string">\'internet\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n name<span class="token punctuation">:</span> <span class="token string">\'Sharon\'</span><span class="token punctuation">,</span>\n age<span class="token punctuation">:</span> <span class="token string">\'28\'</span><span class="token punctuation">,</span>\n <span class="token punctuation">[</span>expertise<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Tình huống thường sử dụng đến computed property name khi muốn thêm một entity vào một object map sử dụng entity.id như là key. Thay vì có câu khai báo thứ 3 để thêm grocery vào groceries map, chúng ta có thể viết khai báo inline nó trong groceries luôn</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> grocery <span class="token operator">=</span> <span class="token punctuation">{</span>\n id<span class="token punctuation">:</span> <span class="token string">\'bananas\'</span><span class="token punctuation">,</span>\n name<span class="token punctuation">:</span> <span class="token string">\'Bananas\'</span><span class="token punctuation">,</span>\n units<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span>\n price<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n currency<span class="token punctuation">:</span> <span class="token string">\'USD\'</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> groceries <span class="token operator">=</span> <span class="token punctuation">{</span>\n <span class="token punctuation">[</span>grocery<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">:</span> grocery\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Tình huống khác, khi có một hàm nhận một tham số truyền vào để tạo ra một đối tượng mới, đây là cách làm của ES5, tạo một object mới, khai báo các property động dựa vào tham số truyền vào, sau đó trả về object. Ví dụ hàm getEnvelope sẽ trả về type="error" với description khi có lỗi, type="success" + description khi mọi thứ ok</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> getEnvelope <span class="token punctuation">(</span>type<span class="token punctuation">,</span> description<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token keyword">var</span> envelope <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n envelope<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> description\n <span class="token keyword">return</span> envelope\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Có thể viết bằng một dòng khai báo với computed property names</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> getEnvelope <span class="token punctuation">(</span>type<span class="token punctuation">,</span> description<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token keyword">return</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">:</span> description\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Định nghĩa một phương thức</h2>\nBình thường để định nghĩa một phương thức trong object\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> reserver <span class="token operator">=</span> <span class="token number">4</span>\n<span class="token keyword">var</span> emitter <span class="token operator">=</span> <span class="token punctuation">{</span>\n emit<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>evenName<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token keyword">get</span> <span class="token function">fuel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> reserver\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token keyword">set</span> <span class="token function">fuel</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  reserver <span class="token operator">=</span> value\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Với ES6, với hàm set và get thì vẫn giữ như cũ, phương thức có thể khai bảo mà không cần từ khóa function</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> reserver <span class="token operator">=</span> <span class="token number">4</span>\n<span class="token keyword">var</span> emitter <span class="token operator">=</span> <span class="token punctuation">{</span>\n <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n   reserver <span class="token operator">=</span> <span class="token number">0</span>\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token keyword">get</span> <span class="token function">fuel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> reserver\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token keyword">set</span> <span class="token function">fuel</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  reserver <span class="token operator">=</span> value\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nemitter<span class="token punctuation">.</span>fuel <span class="token operator">=</span> <span class="token number">10</span>\nemitter<span class="token punctuation">.</span><span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Tức nhiên vẫn khai báo phương thức như bình thường được, cách khai bao mới này có vẻ hơi dễ lẫn lộn giữa phương thức và object, tất nhiên đây chỉ là thêm option để viết chứ không khuyến khích viết theo kiểu này vì nhìn code không được tường minh.</p>\n<p>Chương sau, <a href="https://luckyluu.wordpress.com/2016/11/16/chuong-1-es6-can-ban-phan-2/">Arrow Function</a>, một trong nhưng phương thức mới siêu cool mà bạn sẽ sử dụng rất nhiều.</p>',frontmatter:{date:"December 04, 2016",path:"/2016-11-15-chuong-1-es6-can-ban",tags:["javascript"],title:"Chương 1: ES6 Căn bản (phần 1) - Những nâng cấp cho Object",desc:"Nếu bạn đã đọc bài FrontEnd Developer 2016 nên học gì? Chắc bạn đã rối không biết bắt đầu từ đâu nếu muốn dấn thân vào cuộc chơi nhiều cám dỗ này. Mình nghĩ cái đầu tiên cần học là ES6."}}},pathContext:{prev:{excerpt:"Sạo vậy thôi chứ làm gì mà trở thành master ngay lập tức được, lý lẽ bình thường muốn master bất cứ thứ gì cũng cần mồ hôi và nước mắt. Hiểu được 5 khái niệm được cho là căn cơ nhất này sẽ giúp bạn dễ xa lầy hơn. Component JSX Props & State Component...",html:'<p>Sạo vậy thôi chứ làm gì mà trở thành master ngay lập tức được, lý lẽ bình thường muốn master bất cứ thứ gì cũng cần mồ hôi và nước mắt. Hiểu được 5 khái niệm được cho là căn cơ nhất này sẽ giúp bạn dễ xa lầy hơn.</p>\n<ol>\n<li>Component</li>\n<li>JSX</li>\n<li>Props &#x26; State</li>\n<li>Component API</li>\n<li>Component Type</li>\n</ol>\n<h1>Khái niệm #1: React component hoạt động ra sau</h1>\n<p>Điều đầu tiên cần nằm lòng là tất cả những gì React xây dựng điều xoay quanh component. Thế thì component là gì. Ví dụ tuyệt vời nhất là select HTML element, select có thể xem như một component được định nghĩa sẵn với kiểu hiện thị riêng của nó (màu xám, có label, nút tam giác nằm ở góc phải) và tự nó xử lý tác vụ đóng mở mấy cái option</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/800/1*dPxDcCmCItzEyQuPpHOS3Q/RS/w704.gif"></p>\n<p>Giờ tưởng tượng là chúng ta sẽ tự build ra một cái component tương tự như select với giao diện và event chúng ta tự kiểm soát</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/800/1*AZ2IbiM4WskvgvIyhq6qPA/RS/w704.gif"></p>\n<p>Đó là những gì React giúp chúng ta làm, xây dựng một đối tượng không chỉ output ra một HTML templete thông thường,  chúng ta sẽ viết ra những function để control những event trên cái template đó</p>\n<p>Để tạo ra một React component căn bản nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>component</span> <span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Hello World<span class="token operator">!</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Khái niệm #2: JSX chạy thế nào</h1>\n<p>Có thể thấy là với cách tạo ra một component như React thì javascript và HTML sống chung một nhà. Vũ khí bí mật của React để làm được chuyện "what-the-heck" đó là JSX language.</p>\n<p>Ngày xưa, đi học được dạy phải tách biệt HTML ra một file và JS ra một file, thời gian sau này anh em làm frontend thấy làm gom như vậy làm thấy nhanh hơn, mà cũng không quá evil như mấy ông thầy dạy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>component</span> <span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nreturnToday is<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Để ý cái cách ta chèn code javascript ở trong HTML bằng cách đưa nào vào bên trong dấu {}, đó là cách viết JSX</p>\n<h1>Khái niệm 3: Props và State</h1>\n<p>Bạn chắc chắn biết đến attribute href cho thẻ a , chưa biết? về lại w3com học nhé. Với một component của React những attribute như vậy được gọi là props . Props là cách mà các component tương tác lẫn nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">ParentComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChildComponent message<span class="token operator">=</span><span class="token string">"Hello World"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ChildComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> And then I said<span class="token punctuation">,</span> <span class="token string">"{this.props.message}"</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Dữ liệu trong component có thể truyền từ cha xuống con và không có ngược lại</p>\n<p>Đôi khi dữ liệu sẽ không phải được truyền từ cha xuống con, mà nó chỉ là một dữ liệu tạm thời nào đó, ví dụ như giá trị input của user chẳng hạn, lúc đó nó được gọi là state</p>\n<p>Cho dễ hình dung, nếu xem cái bảng nam châm là một component thì props là nút gạt xóa, state là những gì viết trên bảng</p>\n<p><img src="https://img.readitlater.com/i/cdn-images-1.medium.com/max/1000/1*aYxNrkwkAPwIoGc0-3k_Ug/RS/w704.jpeg"></p>\n<p>Bên trong một component, state được quản lý bằng hàm setState thường được viết lòng trong một hàm xử lý sự kiện</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n handleClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>setState <span class="token punctuation">(</span><span class="token punctuation">{</span>clicked<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span> Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h1>Khái niệm #4: Component API</h1>\n<p>Những hàm như render và setState là một phần của component API, ngoài ra nó còn một số hàm hữu ích khác nữa như constructor để khởi tạo state và kích hoạt các phương thức, một số hàm trigger trước khi component được load, sau khi load, sau khi unmounting. vâng vâng.</p>\n<p>Thật ra việc master được React phần nhiều là master được việc lập trình và khái niệm để kiến trúc ra một component hơn là một loạt các API được hỗ trợ sẵn, vậy nên phần này kết thúc ở đây.</p>\n<h1>Khái niệm 5: Component Type</h1>\n<p>Mấy ví dụ trên, định nghĩa một component được khai báo dạng class</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Giờ thì hãy quên cách viết này đi! Bây giờ ai cũng viết một component ở dạng function component</p>\n<p>Một functional component là một function nhận một props object như tham số truyền vào và trả về một đống HTML lằn xà ngoằn. Y hệt như cách viết template kinh điển, khác biệt cơ bản là ở chổ mình có thể xài JavaScript bất cứ chổ nào khi cần</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> myComponent <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Hello <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span> Today is <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Viết cách này có một hậu quả là mình không thể access được phương thức của component, trên thực tế việc này không ảnh hưởng gì làm vì phần lớn trường hợp ta không dùng tới.</p>\n<p>Và như vậy component này sẽ không có phương thức setState , không có state luôn, người ta còn gọi là stateless functional component.</p>\n<p>Cách viết này rất là gọn gàng, phù hợp cho những trường component đơn giản, nên áp dụng khi có thể.</p>\n<p>Nguồn</p>\n<blockquote>\n<blockquote>\n<p><a href="https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3">https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3</a></p>\n</blockquote>\n</blockquote>',id:"C:/xampp/htdocs/luckyluu/posts/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2017-01-10T13:35:13.234Z",path:"/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react",tags:["javascript","react"],title:"Nắm vững 5 khái niệm sau, xem như master React"}},next:{excerpt:"Hey mình có dự án mới về web, không code web lâu quá rồi, không biết bây giờ viết web thì nên làm bằng gì? Mình chỉ là frontend developer, nhưng bạn đã tìm đúng người rồi đó, mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học gì để tạo web...",html:'<p><em>Hey mình có dự án mới về web, không code web lâu quá rồi, không biết bây giờ viết web thì nên làm bằng gì?</em></p>\n<p>Mình chỉ là frontend developer, nhưng bạn đã tìm đúng người rồi đó, mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học gì để tạo web apps</p>\n<!--more-->\n<p><em>Ngon, giờ mình cần một trang hiển thị những hoạt động gần đây của user, mình chỉ cần dữ liệu từ REST sau đó hiện thị lên table, trên đó mình có thể cho phép user lọc lại theo điều kiện họ muốn, chắc là xài jQuery để hiện thị dữ liệu hả?</em></p>\n<p>Trời, thời nào rồi ông, giờ còn ai viết jQuery nữa. Học React đi, năm 2016 rồi còn làm cái đó bằng jQuery.</p>\n<p><em>React, có nghe qua, mà nó là cái gì</em></p>\n<p>Thư viện siêu ngon của mấy thằng làm trong Facebook phát triển, người ta xài cái này để handle mấy cái view cho dễ.</p>\n<p><em>Mình dùng React để hiển thị dữ liệu từ server?</em></p>\n<p>Đúng rồi, trước tiên cần thêm React và React DOM vô</p>\n<p><em>Sau phải tới 2 thư viện?</em></p>\n<p>Cái đầu là thư viện chính, còn cái DOM là để thao tác với cái DOM, mà bây giờ cái DOM được mô tả trong cái JSX</p>\n<p><em>JSX là cái quái gì ?</em></p>\n<p>JSX là syntax mở rộng của javascript, giống hệt như XML, tốt hơn HTML bình thường</p>\n<p><em>HTML bình thường thì có vấn đề gì</em></p>\n<p>Giờ chả ai đi viêt HTML thuần nữa ông ơi</p>\n<p><em>Vậy 2 thư viện đó là đủ ?</em></p>\n<p>Còn, cần thêm Babel</p>\n<p><em>Thêm một thư viện nữa ?</em></p>\n<p>Babel cho phép xác định phiên bản javascript muốn dúng, nếu không có Babel vẫn dùng React được, nhưng sẽ là ES5, tụi con nít bây giờ code trên ES2016+ không</p>\n<p><em>ES5? ES2016+? mất phương hướng rồi, đó giờ chưa nghe tới</em></p>\n<p>ES5 viết tắt cho ECMAScript 5, là phiên bản thứ 5 từ khi javascript được chuẩn hóa năm 1999, mới nhất là 7.</p>\n<p><em>Không hiểu đang nói gì hết, bắt đầu rối quá. Tui chỉ cần tải một mớ dữ liệu từ server, include jquery từ CDN, gọi một cái AJAX, sau không làm vậy cho đơn giản?</em></p>\n<p>2016 rồi chú, ai xài jQuery nữa, kết thúc thời đại của cái kiểu code hầm bà lằng một đống bùi nhùi.</p>\n<p><em>Vậy giải pháp là load 3 thư viện rồi hiển thị dữ liệu lên HTML</em></p>\n<p>Cần thêm cái Module manager</p>\n<p><em>Module manager nó là cái gì</em></p>\n<p>Cái này tùy thuộc vào môi trường, trên web thì thường là phải hổ trợ AMD hoặc CommonJS modules</p>\n<p><em>rồi vậy AMD và Common JS là cái chi chi ?</em></p>\n<p>Định nghĩa nè. Có nhiều cách để mấy cái thư viện javascript và classe tương tác với nhau, biết kiểu export và requires hông? mình có thể viết nhiều file javascript rồi sử dụng Browserify để gom nó lại thành một cục</p>\n<p><em>Browserify ?</em></p>\n<p>Công cụ cho phép gom các CommonJS đã được định nghĩa, những file dependencies, thằng này được tạo ra để có thể gọi các thư viện được publish trên npm</p>\n<p><em>npm?</em></p>\n<p>Nó là cái kho javascript công cộng, được những anh lập trình thông minh đẹp trai tin dùng để đứa đứa con javascript của mình lên đây.</p>\n<p><em>Giống kiểu CDN hả?</em></p>\n<p>Không hẳn, nó như cái trung tâm dữ liệu nơi tác giả đưa source lên, nếu cần xài thì mình tải xuống chứ không gọi trực tiếp như CDN.</p>\n<p><em>À, giống Bower</em></p>\n<p>Đúng rồi, 2016, chắc ít ai xài Bower lắm cha.</p>\n<p><em>Tự thấy lạc hậu quá, vậy là cần tải mấy cái thư viện từ npm rồi sau nữa</em></p>\n<p>Trong trường hợp của chú, để sử dụng React, down cái React module về rồi import vô trong code.</p>\n<p><em>Giống Angular!</em></p>\n<p>Angular là chuyện của 2015. Mà cũng đúng, Angular sẽ sánh vai cùng với VueJS và RxJS trong tương lai còn dài</p>\n<p><em>Phải làm nhiều quá ta</em></p>\n<p>Đó là lý do cần có task manager như Grunt hoặc Gulp hoặc Broccoli để tự động chạy Browserify, biết sử dụng Mimosa hông?</p>\n<p><em>Nghe lạ tai rồi, đang nói khỉ gió gì vậy</em></p>\n<p>Task managers. Thật ra cũng không còn ngon như thời mới ra nữa, sau đó người ta chuyển qua dùng Makefiles, và bây giờ là Webpack</p>\n<p><em>Ủa tưởng Makefiles chỉ được phổ biến với cộng đồng C hoặc C++ chứ</em></p>\n<p>Đúng, nhưng người ta vẫn hay bảo, chúng ta thích làm cho mọi thứ phức tạp hết lên rồi sau đó lại quay về với những điều căn bản nhất.</p>\n<p><em>Còn Webpack là gì</em></p>\n<p>Một trình quản lý module khác cho trình duyệt, một phiên bản tốt hơn Browserify</p>\n<p><em>Tốt hơn chổ nào</em></p>\n<p>Nó cho phép sử dụng những module manager khác nhau không chỉ riêng CommonJS, đề phòng không hổ trợ ES6</p>\n<p><em>Quá confuse với mới CommoJS/ES6 luôn</em></p>\n<p>Ai cũng vậy, javascript đó giờ nó vậy</p>\n<p><em>Còn gì nữa không</em></p>\n<p>Học Typescript, nó cũng là javascript nhưng tốt hơn, và nếu đang dùng ES6 thì viết Typescript cho nó đã, giảm lỗi run-time, xài thêm cái flow để kiểm tra nữa.</p>\n<p><em>.... Flow là gì á</em></p>\n<p>Của mấy cậu nhà Facebook chế, kiểm tra lỗi khi rõ. Họ code bằng OCaml, code theo kiểu function đã lắm</p>\n<p><em>OCaml, code hướng Function ?</em></p>\n<p>Con cưng của 2016 man, chỉ cần biết code theo kiểu functional thì tốt hơn OOP, đó là những gì mà lập trình viên 2016 họ làm.</p>\n<p><em>Hồi đó học OOP ở truong trường, tưởng cái đó good lắm chứ</em></p>\n<p>Như Java trước khi bị mua lại bởi Oracle. Ý là OOP đã từng tốt và vẫn được sử dụng tới giờ, nhưng bây giờ người ta nhận ra rằng chỉnh sửa một cái state cũng giống như đá đích đứa con nít, mọi người sử dụng đối tượng immutable và code theo functional. Mà bây giờ có thư viện Ramda rồi, viết javascript theo hướng function có gì khó.</p>\n<p><em>Nữa hả Ramda là cái chi chi</em></p>\n<p>Thư viện của David Chamber viết. Nếu muốn học kiểu viết functional thì nên biết đến tên của Erik Meijer</p>\n<p><em>Dừng ở đây được rồi, cái gì cũng tốt, nhưng mà quá phức tạp và chả cần thiết, lấy dữ liệu hiển thị lên mà nhằn vậy hả, có thằng khùng nào học hết cái nùi đó chỉ để hiển thị cái table lên không, rồi quay lại với React đi, giờ làm sao</em></p>\n<p>Thật ra React không có giữ việc fetch dữ liệu, nó chỉ hiện thị thôi</p>\n<p><em>Đậu xanh. vậy chở sao get dữ liệu</em></p>\n<p>Dùng Fetch để fetch dữ liệu từ server</p>\n<p><em>Đặt tên hay quá</em></p>\n<p>Fetch là native implement cho một XMLHttpRequests tới server</p>\n<p><em>AJAX chứ gì</em></p>\n<p>AJAX chỉ là XMLHttpRequest. Fetch cho phép thực thi AJAX trên promises để tránh thảm họa với callback</p>\n<p><em>Thảm họa callback</em></p>\n<p>Đúng rồi, mỗi lần thực thi một asynchronous request tới server, mình phải đợi server response, nghĩa là mình phải thêm một function trong một function, nó được gọi là callback pyramid from hell.</p>\n<p><em>Vậy giải quyết là</em></p>\n<p>Bằng cách đưa cái callback qua promise, có thể viết code dễ hiểu hơn, dễ test hơn, thực thi một lúc nhiều request cùng lúc</p>\n<p><em>Fetch làm chuyện đó ?</em></p>\n<p>Đúng trong trường hợp user sử dụng trình duyệt hổ trợ, bằng không phải sử dụng thêm Fetch polyfill hoặc Request, Bluebird, Axios</p>\n<p><em>Trời đất ơi vậy cần bao nhiêu thư viện, bao nhiêu thư viện cho cái việc đơn giản này</em></p>\n<p>Cần javascript. Có tới hàng ngàn cái thư viện được viết bằng javascript làm được một việc. Mình chọn cái tốt nhất, thư viện thì nhiều nhưng xài có chọn lọc.</p>\n<p><em>Vậy Bluebird, Request, Axios làm chuyện gì</em></p>\n<p>Thư viện này cho phép thực thi XMLHttpRequest rồi trả về promises</p>\n<p><em>jQuery AJAX cũng làm được vậy</em></p>\n<p>KHÔNG AI dùng "J" trong năm 2016 đâu, chỉ sử dụng Fetch, polyfill,....</p>\n<p><em>Thôi chắc dừng ở đây đi</em></p>\n<p>Thật đó nếu giờ là tui phải sử dụng templating engine, tui sẽ chỉ sử dụng Typescript + SystemJS + Babel.</p>\n<p><em>Hiển thị dữ liệu thôi, cần phải phức tạp hóa vậy không trời, hay cho tui biết cần xài cái templating engine nào đi rồi tui tự học tiếp</em></p>\n<p>Vậy ông quen với cái nào</p>\n<p><em>Quên rồi, lâu quá không còn đụng tới</em></p>\n<p>jTemplate, jQote, PURE?</p>\n<p><em>Hổng quen, cho cái khác đi</em></p>\n<p>Transparency? JSRender? MarkupJS? KnockoutJS, PlatesJS? jQuery-tmpl? Handlebars? cũng còn vài người xài cái này.</p>\n<p><em>Có cái nào dễ biết hơn chút không</em></p>\n<p>Nhứt đầu rồi, underscore? công nghệ từ 2014 ông có biết không?</p>\n<p><em>Chưa bao giờ đụng tới</em></p>\n<p>Jade? DustJS? DotJS? EJS ? Coffeescript ?</p>\n<p><em>Thôi tui xin quay lại với code backen, quá nhiều thay đổi cần phải học tui không thể handle hết, cộng động javascript mấy ông đúng là điên hết rồi nếu nghĩ là có ai đó có thể biết hết chừng đó thứ</em></p>\n<p>Hiểu rồi, ông nên vô học Python đi</p>\n<p><em>Tại sao?</em></p>\n<p>Chưa từng nghe tới Python 3 luôn sao?</p>\n<p>Dịch từ: <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.gg2qmpxxd">https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.gg2qmpxxd</a></p>\n<p>Tác giả: Jose Aguinaga\nWeb Engineer. UX &#x26; Interactions Designer. Full-Stack Javascript Developer</p>',
id:"C:/xampp/htdocs/luckyluu/posts/2016-12-04-front-end-developer-2016-nen-hoc-gi/index.md absPath of file >>> MarkdownRemark",timeToRead:7,frontmatter:{date:"2016-12-04T13:35:13.234Z",path:"/2016-12-04-front-end-developer-2016-nen-hoc-gi",tags:["javascript","css"],title:"FrontEnd Developer 2016 thì nên học cái gì?"}}}}}});
//# sourceMappingURL=path---2016-11-15-chuong-1-es-6-can-ban-d800c0811590637dc9d8.js.map