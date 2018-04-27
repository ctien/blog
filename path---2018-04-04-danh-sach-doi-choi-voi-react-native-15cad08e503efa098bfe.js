webpackJsonp([32],{"./node_modules/json-loader/index.js!./.cache/json/2018-04-04-danh-sach-doi-choi-voi-react-native.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h2>đồ chơi Development</h2>\n<h3>SDK</h3>\n<p>Chưa ai qua mặt được <a href="https://expo.io/">Expo</a>. Expo cho phép dựng app mà ko cần Android Studio hay Xcode.</p>\n<p>Workflow để làm việc với Expo</p>\n<ol>\n<li>Tạo project mới sử dụng <a href="https://github.com/react-community/create-react-native-app">create-react-native-app</a></li>\n<li>Code, code và code...</li>\n<li>Chạy thử bằng Expo app có thể tìm thấy trong app store, google play</li>\n</ol>\n<p>Không cần kết nối điện thoại với máy tính, chỉ cần điện thoại kết nối cùng mạng với localhost đang chạy, điện thoại có cài Expo app, scan đoạn QR code trên command line là được.</p>\n<p>Điều hạn chế của Expo là nó ko cho phép cài thêm một số package khác nữa ngoài những package đã được cài sẵn của Expo như Camera, Facebook, Map. Trường hợp cần những package này, sử dụng <code>react-native init</code>, lúc đó bạn phải handle mọi thứ, phức tạp hơn dùng Expo.</p>\n<h3>Check code chuẩn</h3>\n<p>Nếu bị nghiện code cho chuẩn như lê duẩn, ESLint là người bạn đồng hành, mình hay sử dụng bộ style guide cấu hình sẵn của <a href="https://github.com/airbnb/javascript">Airbnb\'s Javascript Style Guide</a>.</p>\n<p>Nếu sử dụng ESLint thì mình nghĩ bạn nên dùng thêm một số plugin của VSCode hay Atom, một số plugin của Sublime text mình cài về thì chạy không như ý lắm.</p>\n<h3>Debugging</h3>\n<p>Ứng dụng chạy trên desktop <a href="https://infinite.red/reactotron">Reactotron</a> cho phép debug React và React Native với những tính năng như: inspecting, mofifying, subscribing, tracking HTTP, đo performance ứng dụng, track error...</p>\n<h2>Boilerplate và UI Frameworks</h2>\n<p><a href="https://github.com/bartonhammond/snowflake">Snowflake</a> bao gồm cả Frontend đến Back-End code của ứng dụng, một lựa chọn tốt để bắt đầu dự án mới nhanh nhất.</p>\n<p>React Native có sẵn một số components UI cơ bản, nếu muốn custome style thì chúng ta phải viết thêm CSS, còn không, nếu muốn nhiều hơn những component đã được viết sẵn, màu mè hoa lá hẹ hết rồi thì có thể dùng <a href="https://nativebase.io/">NativeBase</a> tương đối kế thừa khái niệm của Bootstrap, hoặc React Native Kittens có một số components cũng hay ho.</p>\n<h2>Thư viện và components</h2>\n<p>Làm navigation thì nghĩ ngày đến <a href="https://reactnavigation.org/">React navigatio</a> của chính facebook luôn.</p>\n<p>Quản lý state thì dùng <a href="http://mobx.js.org/">Mobx</a> hoặc <a href="http://redux.js.org/">Redux</a>, redux thì thường cho những dữ liệu nhiều và lớn, năm 2018 chúng ta sẽ vẫn sử dụng Redux nhé, đừng tưởng là nó đã cũ và có cái khác thay thế.</p>\n<p><a href="https://github.com/oblador/react-native-animatable">Animatable</a> rất có ích khi muốn làm animation cho layout hay mấy cái micro animation trên component.</p>\n<p>Một số UI Components khác có thể tham khảo</p>\n<ul>\n<a href="https://github.com/christopherdro/react-native-calendar" rel="external" target="_blank"><strong>react-native-calendar</strong></a></li>\n<li>\n<a href="https://github.com/xgfe/react-native-datepicker" target="_self"><strong>react-native-</strong></a><a href="https://github.com/xgfe/react-native-datepicker" target="_self"><strong>datepicker</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-progress" rel="external" target="_blank"><strong>react-native-progress</strong></a></li>\n<li>\n<a href="https://github.com/maxs15/react-native-spinkit" rel="external" target="_blank"><strong>react-native-spinkit</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-vector-icons" rel="external" target="_blank"><strong>Vector Icons</strong></a></li>\n<li>\n<a href="https://github.com/leecade/react-native-swiper" rel="external" target="_blank"><strong>react-native-swiper</strong></a></li>\n<li>\n<a href="https://github.com/skv-headless/react-native-scrollable-tab-view" rel="external" target="_blank"><strong>react-native-scrollable-tab-view</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-lightbox" rel="external" target="_blank"><strong>react-native-lightbox</strong></a></li>\n<li>\n<a href="https://github.com/airbnb/react-native-maps" rel="external" target="_blank"><strong>react-native-maps</strong></a></li>\n<li>\n<a href="https://github.com/sghiassy/react-native-sglistview" rel="external" target="_blank"><strong>SGListView</strong></a></li>\n<li>\n<a href="https://github.com/jaredpalmer/formik" rel="external" target="_blank"><strong>Formik</strong></a></li>\n<li>\n<a href="https://github.com/AlexanderZaytsev/react-native-i18n" rel="external" target="_blank"><strong>react-native-i18n</strong></a></li>\n<li>\n<a href="https://github.com/zo0r/react-native-push-notification" rel="external" target="_blank"><strong>react-native-push-notification</strong></a></li>\n<li>\n<strong><a href="https://community.algolia.com/react-instantsearch/" rel="external" target="_blank">InstantSearch</a></strong></li>\n<li>\n<a href="https://github.com/itinance/react-native-fs" rel="external" target="_blank"><strong>react-native-fs</strong></a></li>\n<li>\n<strong><a href="https://github.com/lwansbrough/react-native-camera" rel="external" target="_blank">react-native-camera</a></strong></li>\n<li>\n<strong><a href="https://github.com/react-native-community/react-native-video" rel="external" target="_blank">react-native-video</a></strong></li>\n<li>\n<strong><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">react-native-</a><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">sqlite</a><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">-storage</a></strong></li>\n<li>\n<a href="https://github.com/thewei/react-native-store" rel="external" target="_blank"><strong>react-native-store</strong></a></li>\n<li>\n<strong><a href="https://github.com/oney/react-native-webrtc" rel="external" target="_blank">react-native-</a><a href="https://github.com/oney/react-native-webrtc" rel="external" target="_blank">webrtc</a></strong></li>\n</ul>\n<h2>Web Services</h2>\n<h3>Database</h3>\n<p><a href="https://realm.io/">Realm</a> real-time database chuyên cho mobile app, bào gồm các tính năng như two-way data sync, offline-first, data push.</p>\n<p>Nếu Realm có quá nhiều tính năng ko dùng đến, thì có thể sử dụng <a href="https://facebook.github.io/react-native/docs/asyncstorage.html">AsyncStorage</a> đi kèm React Native</p>\n<h3>Analytics</h3>\n<p><a href="https://get.fabric.io/">Fabric</a> bộ công cụ tất cả trong một hoặc nếu thích Google Analytics thì có nhiều <a href="https://github.com/idehub/react-native-google-analytics-bridge">thư viện khác</a> hổ trợ</p>\n<h3>Push Notifications</h3>\n<p>Cái này thì ko có nhiều service lắm, nói cách khác <a href="https://firebase.google.com/docs/cloud-messaging/">Firebase Cloud Messaging</a> (trước đây là Google Cloud Messaging) gần như thống trị, để sử dụng FCM chúng ta sẽ cần tới <a href="https://github.com/evollu/react-native-fcm">react-native-fcm package</a></p>\n<h3>Code update</h3>\n<p><a href="https://microsoft.github.io/code-push/">CodePush</a> cho phép deploy code mới nhất trực tiếp đến device của user, nó giống như kho trung tâm, nơi chúng ta quăng hết HTML, CSS, Javascript, assets lên đó hết. Thông qua CodePush chúng ta không cần upload những thay đổi lên app store và đợi user chọn update ứng dụng. Sử dụng với đống <a href="https://github.com/Microsoft/react-native-code-push">thư viện này</a> </p>',frontmatter:{date:"April 04, 2018",path:"/2018-04-04-danh-sach-doi-choi-voi-react-native",tags:["javascript","react","react-native"],title:"Danh sách đồ chơi để bắt đầu với React Native",desc:"Để bắt đầu và đào sâu vọc vạch với React Native, bạn sẽ cần đụng tới những món đồ chơi sau"}}},pathContext:{prev:!1,next:{excerpt:"Xéeeeeeeeeet cái hàm sau Gọi một hàm A hàm A trả về Promise, thì hàm A là dạng hàm blocking hàm   là một hàm  . Dòng  A  sẽ đợi đến khi chạy xong hàm  . Hàm gọi là  blocking  khi mà khi chạy hàm này mấy thằng khác không chạy đồng thời với nó, ngược...",html:'<p>Xéeeeeeeeeet cái hàm sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// kết quả in ra</span>\n<span class="token comment" spellcheck="true">// Result: DONE</span>\n</code></pre>\n      </div>\n<h2>Gọi một hàm A hàm A trả về Promise, thì hàm A là dạng hàm blocking</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asynFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// A</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// tương tự như</span>\n    <span class="token comment" spellcheck="true">// asyncFunc().then(x => console.log(\'Result: \' + x))</span>\n<span class="token punctuation">}</span>\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>hàm <code>main</code> là một hàm <code>async</code>. Dòng <em>A</em> sẽ đợi đến khi chạy xong hàm <code>asyncFunc()</code>.</p>\n<p>Hàm gọi là <em>blocking</em> khi mà khi chạy hàm này mấy thằng khác không chạy đồng thời với nó, ngược lại <em>non-blocking</em> là hàm mà không can thiệp việc các hàm khác chạy cùng lúc với nó</p>\n<h2><code>Promise</code> là một container để cưu mang giá trị trả về từ một <code>asynchronously</code></h2>\n<p>Nếu hàm trả về <code>Promise</code> thì cái <code>Promise</code> này giống như một cái thùng chứa, hàm thực thi bên trong sẽ quăng kết quả trả về vào đó. Mô phỏng việc này bằng một <code>Array</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> blank <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> blank<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> blank<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> blank <span class="token operator">=</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// đợi đến khi giá trị trả về được fill</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> blank<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//A</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Tất nhiên với một <code>Promise</code> thực thụ không thể truy cập giá trị như dòng <em>A</em> (blank[0]), mà chúng ta sử dụng hàm <code>then()</code> và một <em>callback</em></p>\n<h2><code>Promise</code> là một đối tượng tạo ra sự kiện</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token punctuation">{</span> success<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">//A</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> handler <span class="token keyword">of</span> eventEmitter<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">handler</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> eventEmitter<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>success<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//B</span>\n</code></pre>\n      </div>\n<p>Dòng <em>B</em> đăng ký lắng nghe sự kiện sau khi gọi hàm <code>asyncFunc()</code>. Kết quả trả về của <code>Promise</code> sẽ là một chuỗi event sau khi thực thi kèm với giá trị gì đấy ứng với từng event.</p>',id:"E:/anluu/luckyluu/posts/2018-04-03-ba-cach-de-hieu-promise/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-04-03T13:35:13.234Z",path:"/2018-04-03-ba-cach-de-hieu-promise",tags:["javascript","react"],title:"Ba cách để hiểu Promise"}}}}}});
//# sourceMappingURL=path---2018-04-04-danh-sach-doi-choi-voi-react-native-15cad08e503efa098bfe.js.map