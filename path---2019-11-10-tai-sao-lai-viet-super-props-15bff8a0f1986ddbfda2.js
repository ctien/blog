webpackJsonp([0xbed1d1a5ebfa],{1597:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Nghe nói <a href="https://reactjs.org/docs/hooks-intro.html">Hook</a> đang là trend. Trớ trêu thay, tôi muốn viết bài đầu tiên cho blog này để nói về điều thú vị của <em>class</em> component.</p>\n<p><strong>Vấn đề này <em>không</em> liên quan tới việc sử dụng React một cách hiệu quả. Nhưng bạn sẽ cảm thấy chúng thú vị nếu như bạn muốn tìm hiểu sâu hơn về cách hoạt động.</strong></p>\n<p>Đây là bài đầu tiên.</p>\n<hr>\n<p>Chúng ta đã viết <code class="language-text">super(props)</code> không biết bao nhiêu lần trong đời:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Checkbox</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> isOn<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Dĩ nhiên, nếu áp dụng <a href="https://github.com/tc39/proposal-class-fields">class field proposal</a> thì có thể bỏ qua <em>nghi thức</em> này:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Checkbox</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> isOn<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Cú pháp này <a href="https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers">đã  được hoạch định</a> khi React 0.13 đã hỗ trợ cho plain class năm 2015. KHai báo <code class="language-text">constructor</code> và gọi <code class="language-text">super(props)</code> luôn là kế hoạch tạm thời cho đến khi có một cách khác tốt hơn.</p>\n<p>Quay về ví dụ,  chỉ sử dụng các tính năng của ES2015:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Checkbox</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> isOn<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Tại sao chúng ta lại gọi <code class="language-text">super</code>? Chúng ta có thể <em>không</em> gọi chúng được không? Nếu chúng ta gọi chúng, thì chuyện gì sẽ xảy ra nếu chúng ta không truyền <code class="language-text">props</code>? Truyền thêm các tham số khác được không?</strong> Cùng tìm hiểu nào.</p>\n<hr>\n<p>Trong JavaScript, <code class="language-text">super</code> để gọi lại constructor của class cha. (Trong ví dụ của chúng ta, nó trỏ về <code class="language-text">React.Component</code>.)</p>\n<p>Điều quan trọng, bạn <strong>không thể sử dụng <code class="language-text">this</code></strong> trong constructor nếu chưa gọi đến constructor của class cha. JavaScript sẽ không để bạn làm việc này:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Checkbox</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 🔴  Không thể dùng `this` được</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// ✅  Giờ thì dùng được rồi</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> isOn<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Có một lý do chính đáng giải thích vì sao JavaScript phải thực hiện constructor của lớp cha trước khi đụng vào <code class="language-text">this</code>. Hãy xem xét trường hợp sau:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PolitePerson</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">greetColleagues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 🔴  Điều này không cho phép, đọc lý do ở bên dưới</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">greetColleagues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'Chào buổi sáng!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hãy tưởng tượng, khi bạn có thể dùng <code class="language-text">this</code> trước <code class="language-text">super</code>. Một tháng sau, chúng ta đổi <code class="language-text">greetColleagues</code>, thêm <code class="language-text">this.name</code> khi alert:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">  <span class="token function">greetColleagues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'Chào buổi sáng!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'Tên tôi là \'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">\', rất vui được gặp bạn!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nhưng chúng ta quên rằng <code class="language-text">this.greetColleagues()</code> được gọi trước <code class="language-text">super()</code>, giá trị <code class="language-text">this.name</code> <strong>chỉ có sau khi gọi <code class="language-text">super()</code></strong>! Lúc này bạn có thể thấy, code như thế này khó để biết được lỗi ở đâu.</p>\n<p>Để tránh những điều như vậy, <strong>JavaScript chỉ định rằng nếu bạn muốn sử dụng <code class="language-text">this</code> bên trong constructor, bạn <em>phải</em> gọi <code class="language-text">super</code> trước.</strong> Để cho thằng cha làm việc của nó! Và điều này cũng áp dụng với các lớp React components:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// ✅  Okay, dùng `this` được rồi</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> isOn<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta cùng đến với câu hỏi khác: phải sao phải truyền vào <code class="language-text">props</code>?</p>\n<hr>\n<p>Bạn hãy nghĩ đơn giản rằng khi truyền <code class="language-text">props</code> vào <code class="language-text">super</code> là cần thiết để <code class="language-text">React.Component</code> constructor có thể thiết lập <code class="language-text">this.props</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// Bên trong React</span>\n<span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nó thật sự là <a href="https://github.com/facebook/react/blob/1d25aa5787d4e19704c049c3cfa985d3b5190e0d/packages/react/src/ReactBaseClasses.js#L22">cách mà chúng tôi thực hiện bên trong React.Component</a>.</p>\n<p>Bằng cách nào đó, nếu bạn gọi <code class="language-text">super()</code> mà không có tham số <code class="language-text">props</code>, bạn vẫn có thể sử dụng <code class="language-text">this.props</code> trong phương thức <code class="language-text">render</code> và các phương thức khác. (Nếu không tin, hãy tự kiểm tra xem!)</p>\n<p>Vậy <em>nó</em> hoạt động như thế nào? Hóa ra <strong>React đã gán <code class="language-text">props</code> cho một instance ngay sau constructor:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">  <span class="token comment">// Bên trong React</span>\n  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourComponent</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  instance<span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Thế nên khi bạn quên bỏ thằng <code class="language-text">props</code> vào <code class="language-text">super()</code>, thì trong React bạn vẫn có thể gọi nó sau đó. Có một lý do cho việc này.</p>\n<p>Khi React hỗ trợ thêm class, nó không chỉ hỗ trợ class cho mỗi phiên bản ES6. Mà mục tiêu chính là hỗ trợ nhiều class abstract nhất có thể. <a href="https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#other-languages">Không rõ</a> làm thế nào ClojureScript, CoffeeScript, ES6, Fable, Scala.js, TypeScript, hoặc các giải pháp khác định nghĩa component. Vì vậy, React sử dụng <code class="language-text">super()</code> không hề là quan điểm cá nhân.</p>\n<p>Vậy có nghĩa là bạn có thể gọi <code class="language-text">super()</code> thay vì <code class="language-text">super(props)</code>?</p>\n<p><strong>Không. Như vậy rất khó hiểu.</strong> Chắc chắn, React sẽ gán <code class="language-text">this.props</code> <em>sau khi</em>  constructor chạy. Nhưng <code class="language-text">this.props</code> vẫn  là <code class="language-text">undefined</code> <em>giữa</em> lúc gọi <code class="language-text">super</code> và kết thúc constructor:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// Bên trong React</span>\n<span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Bên trong code của bạn</span>\n<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 😬 Chúng ta không truyền vào props</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// ✅ {}</span>\n<span class="gatsby-highlight-code-line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 😬 undefined - chưa định nghĩa </span>\n</span>  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Việc debug sẽ trở nên khó khăn nếu như một vài phương thức được gọi <em>từ</em> constructor. <strong>Đó là lý do vì sao luôn khuyến khích bạn sử dụng <code class="language-text">super(props)</code>, mặc dù nó không phải quy định bắt buộc:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ✅ Chúng ta truyền props vào </span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// ✅ {}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ✅ {}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Điều này đảm bảo <code class="language-text">this.props</code> sẽ được thiết lập trong constructor.</p>\n<hr>\n<p>Có một điều cuối mà khiến cho các fan lâu năm của React tò mò.</p>\n<p>Bạn có thể thấy rằng khi sử dụng Context API bên trong class (hoặc với <code class="language-text">contextTypes</code> cũ hoặc với <code class="language-text">contextType</code> API được thêm vào ở React 16.6), <code class="language-text">context</code> được đẩy vào tham số thứ hai trong constructor.</p>\n<p>Vậy tại sao chúng ta không viết là <code class="language-text">super(props, context)</code>? Có thể chứ, nhưng context ít khi sử dụng nên việc phát sinh lỗi cũng ít xuất hiện.</p>\n<p><strong>Với <a href="https://github.com/tc39/proposal-class-fields">class fields proposal</a> thì những vấn đề này hầu như biến mất.</strong> Không có constructor, tất cả các tham số đều được truyền vào một cách tự động. Đây là những lý do cho phép một biểu thức <code class="language-text">state = {}</code> bao gồm cả các tham chiếu <code class="language-text">this.props</code> hoặc <code class="language-text">this.context</code> nếu cần thiết.</p>\n<p>Với Hooks, chúng ta thậm chí không có <code class="language-text">super</code> hoặc <code class="language-text">this</code>. Nhưng chủ đề đó sẽ giành cho một ngày khác.</p>\n<p><strong>Bài viết được dịch từ</strong> <a target="_blank" rel="noopener noreferrer" href="https://overreacted.io/why-do-we-write-super-props/">Why Do We Write super(props)?</a></p>',timeToRead:6,excerpt:"Nghe nói  Hook  đang là trend. Trớ trêu thay, tôi muốn viết bài đầu tiên cho blog này để nói về điều thú vị của  class  component. Vấn đề…",frontmatter:{title:"Tại sao lại viết Super(props)",cover:"",date:"2019-11-10",category:null,tags:["hoc-thuat","javascript","react"],desc:"Bài cũ, dịch cũng lâu rồi, giờ mới đăng lên trang cá nhân của mình"},fields:{slug:"/2019-11-10-tai-sao-lai-viet-super-props"}}},pathContext:{slug:"/2019-11-10-tai-sao-lai-viet-super-props",prev:{frontmatter:{title:"Gắn video làm background toàn màn hình",desc:"Chia sẽ kỹ thuật làm background video để chạy full màn hình",type:"post",category:null,tags:["thu-thuat","javascript","react","css"],date:"2019-11-12",cover:""},fields:{slug:"/2019-11-12-lam-video-fullscreen-voi-react"}},next:{frontmatter:{title:"Thuật toán QuickSort",desc:"Một thuật toán rất phổ biến mà chúng ta phải nắm thật chắc và hình dung được cách hiện thực nó ngay khi được nhắc tới.",type:"post",category:null,tags:["hoc-thuat","javascript"],date:"2019-11-02",cover:""},fields:{slug:"/2019-11-02-gioi-thieu-thuat-toan-quicksort"}}}}}});
//# sourceMappingURL=path---2019-11-10-tai-sao-lai-viet-super-props-15bff8a0f1986ddbfda2.js.map