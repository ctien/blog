webpackJsonp([0x67457ea5f804],{1348:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Mình lấy một pattern trong cuộc sống để bạn dễ hình dung trước: cơ quan phát thanh của thị trấn, quản lý toàn bộ các loa phát thanh xung quanh thị trấn. Khi có một công dân trong thị trấn đăng ký kết hôn, mất trộm,... một sự kiện nào đó xảy ra trong thị trấn, cơ quan này sẽ lan tin tức đến toàn bộ dân làng, nếu tin tức này liên quan đến người nào đó, ví dụ anh này có hẹn hò với chị kia mà còn đăng ký kết hôn chị nọ, thì các nhà đó tự giải quyết với nhau.</p>\n<p>Giờ phân vai</p>\n<ul>\n<li><strong>Observable</strong>: cơ quan phát thanh</li>\n<li><strong>Observer</strong>: các hộ dân trong xã</li>\n<li><strong>Notify</strong>: hành động lan tin cho toàn xã</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Observable</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// chứa danh sách các hộ dân trong xã</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token comment">// thêm hộ dân mới vào xã mình</span>\n    <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// bỏ xã ra đi</span>\n    <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">subscriber</span> <span class="token operator">=></span> subscriber <span class="token operator">!==</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// lan tin cho toàn xã</span>\n    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">observer</span> <span class="token operator">=></span> <span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Ví dụ sử dụng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> p3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.js-p3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// một số hành động sẽ làm khi nghe tin từ loa phường</span>\n<span class="token keyword">const</span> <span class="token function-variable function">updateP1</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=></span> p1<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">updateP2</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=></span> p2<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">updateP3</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=></span> p3<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>\n\n<span class="token comment">// thành lập ủy ban loa phường</span>\n<span class="token keyword">const</span> headingsObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// cho em đăng ký với mấy anh ơi</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP2<span class="token punctuation">)</span><span class="token punctuation">;</span>\nheadingsObserver<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>updateP3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// khi giá trị input thay đổi</span>\n<span class="token comment">// bắn tin tức này đến cho cả làng</span>\ninput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'keyup\'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  headingsObserver<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Đây là phiên bản siêu đơn giản của observer pattern, nếu muốn tìm hiểu sâu hơn nữa bạn có thể đọc <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript">Learning Javascript Design Patterns</a> của anh Addy Osmani. Observe pattern còn được gọi "Publication/Subscription", thật ra thì nó có xíu khác biệt mà Addy <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript">đã đề cập</a></p>\n<p>Trong Observer pattern, <em>Observer</em> (object) muốn nhận thông báo phải đăng ký hộ khẩu (subscribe), trong khi đó Publish/Subscribe pattern sử dụng như một cầu nối đứng giữa object muốn nhận thông báo (subscriber) và object bắn ra sự kiện (publisher), ý tưởng ở đây là để tách sự phụ thuộc của subscriber và publisher. Giống như Youtube họ ko tự sản xuất video mà các bạn Youtuber làm video và phát qua kênh Youtube</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// email đã nhận</span>\n<span class="token keyword">var</span> mailCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n \n<span class="token comment">// khởi tạo subscriber sẽ lắng nghe sự kiện "inbox/newMessage" </span>\n<span class="token keyword">var</span> subscriber1 <span class="token operator">=</span> <span class="token function">subscribe</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">topic<span class="token punctuation">,</span> data</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n \n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">"A new message was received: "</span><span class="token punctuation">,</span> topic <span class="token punctuation">)</span><span class="token punctuation">;</span>\n   \n  <span class="token comment">// Dùng dữ liệu trả về để render và nội dung  </span>\n  <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">".messageSender"</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> data<span class="token punctuation">.</span>sender <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">$</span><span class="token punctuation">(</span> <span class="token string">".messagePreview"</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> data<span class="token punctuation">.</span>body <span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment">// Một subscriber khác cũng lắng nghe sự kiện này và thực hiện một tác vụ khác </span>\n<span class="token comment">// Update lại counter </span>\n<span class="token keyword">var</span> subscriber2 <span class="token operator">=</span> <span class="token function">subscribe</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">topic<span class="token punctuation">,</span> data</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span> \n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.newMessageCounter\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span> <span class="token operator">++</span>mailCounter <span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token function">publish</span><span class="token punctuation">(</span> <span class="token string">"inbox/newMessage"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  sender<span class="token punctuation">:</span> <span class="token string">"hello@google.com"</span><span class="token punctuation">,</span>\n  body<span class="token punctuation">:</span> <span class="token string">"Hey there! How are you doing today?"</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n<span class="token comment">// unsubscribe( subscriber1 );</span>\n<span class="token comment">// unsubscribe( subscriber2 );</span></code></pre>\n      </div>\n<p>Tức là ở đây thằng Observer ta móc nó vào sự kiện xảy ra trên đối tượng (ví dụ trên là input), còn Pub/Sub thì sẽ có thằng đứng giữa 2 đứa, làm nhiệm vụ cung cấp 2 hàm là <code class="language-text">publish</code> để tạo sự kiện, <code class="language-text">subscribe</code> để lắng nghe sự kiện.</p>',timeToRead:3,excerpt:"Mình lấy một pattern trong cuộc sống để bạn dễ hình dung trước: cơ quan phát thanh của thị trấn, quản lý toàn bộ các loa phát thanh xung…",frontmatter:{title:"Giải thích Observer Pattern trong javascript",cover:"",date:"2018-04-17",category:null,tags:["javascript","react"],desc:"Observer là một pattern khá phổ biến trong javascript, bài giải thích ngắn gọn về pattern này"},fields:{slug:"/2018-04-17-huong-dan-giai-thich-observer-pattern-trong-javascript"}}},pathContext:{slug:"/2018-04-17-huong-dan-giai-thich-observer-pattern-trong-javascript",prev:{frontmatter:{title:"Một số cách làm Animation trong React",desc:"Tổng hợp một số phương pháp làm animation với React",type:"post",category:null,tags:["javascript","react"],date:"2018-04-24",cover:""},fields:{slug:"/2018-04-24-huong-dan-huong-dan-lam-animation-voi-react"}},next:{frontmatter:{title:"Giới thiệu Expo, nhập môn React Native",desc:"Để bắt đầu với React Native, cách nhanh nhất không cần cài Android Studio, Xcode có ngay môi trường để chạy test React Native thì Expo chính là cái bạn cần",type:"post",category:null,tags:["javascript","react","react-native"],date:"2018-04-16",cover:""},fields:{slug:"/2018-04-16-huong-dan-react-native-bat-dau-voi-expo"}}}}}});
//# sourceMappingURL=path---2018-04-17-huong-dan-giai-thich-observer-pattern-trong-javascript-2fac42b333347fa19307.js.map