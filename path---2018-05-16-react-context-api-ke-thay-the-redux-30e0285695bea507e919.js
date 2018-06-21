webpackJsonp([37],{"./node_modules/json-loader/index.js!./.cache/json/2018-05-16-react-context-api-ke-thay-the-redux.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Bản React 16.3.0 được giới thiệu với khá nhiều khái niệm và tính năng mới của React, trong đó được nhiều quan tâm hơn cả là Context API. Chúng ta sẽ cùng tìm hiểu</p>\n<ul>\n<li>Context API là cái gì</li>\n<li>Thay thể Redux bằng Context API bằng cách nào</li>\n<li>Khi nào thì nên sử dụng Context API</li>\n</ul>\n<h2>Context API là cái gì</h2>\n<p>Định nghĩa official từ React docs</p>\n<blockquote>\n<p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>\n</blockquote>\n<p>Khái niệm về Context thì không phải là mới, mà nó đã có từ trước, cũng tương tự như Redux, giúp chúng ta truyền dữ liệu từ trên xuống theo <em>đường tắt</em>, tức không theo một thứ tự từ 1->2->3->4.</p>\n<p>Cái khác từ phiên bản React 16.3.0 có lẽ là ở chổ mọi thử được implement một cách rõ ràng hơn, dễ hình dung hơn, thay vì trước đây việc sử dụng Context API không được khuyến khích vì nó còn đang trong giai đoạn phát triển, chưa hoàn thiện nên để tránh sự cố có thể xảy ra, trên tài liệu chính thức của React luôn nói rõ không nên xài trong thời điểm đó.</p>\n<h2>Sử dụng React Context API như thế nào</h2>\n<p>Sẽ bao gồm 3 bước</p>\n<ol>\n<li>Khởi tạo giá trị ban đầu cho context api bằng <code>React.createContext</code>, hàm này trả về một object bao gồm là <code>Provider</code> và <code>Consumer</code></li>\n<li>Sử dụng <code>Provider</code> này trên component trên cùng, truyền vào giá trị qua prop <code>value</code></li>\n<li>Component <code>Consumer</code> có thể sử dụng ở bất cứ đâu bên dưới <code>Provider</code>, <code>Consumer</code> có thể get được giá trị của prop <code>value</code> của <code>Provider</code> thông qua prop <code>children</code></li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> DEFAULT_STATE <span class="token operator">=</span> <span class="token punctuation">{</span>\n    allChar<span class="token punctuation">:</span> Char<span class="token punctuation">,</span>\n    searchTerm<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>DEFAULT_STATE<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Provider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> DEFAULT_STATE<span class="token punctuation">;</span>\n\n  searchTermChanged <span class="token operator">=</span> searchTerm <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>searchTerm<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThemeContext.Provider</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span>\n          searchTermChanged<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>searchTermChanged<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ThemeContext.Provider</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Chúng ta tạo ra một component <code>Provider</code>, component này sẽ trả về context Provider, bên trong context Provider chúng ta đưa tất tật state của component vào trong trong prop <code>value</code> và các hàm sử lý state luôn. Sau đó chúng ta có thể dùng component <code>Provider</code> mới build này như một root component (component nằm trên cùng)</p>\n<p>Chúng ta tạo thêm một component <code>Consumer</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>ThemeContext<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./Provider\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThemeContext.Consumer</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span>allChar<span class="token punctuation">,</span> searchTerm<span class="token punctuation">,</span> searchTermChanged<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> char <span class="token operator">=</span> searchTerm\n            <span class="token operator">?</span> allChar<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n                char <span class="token operator">=</span><span class="token operator">></span>\n                  char<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchTerm<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span>\n              <span class="token punctuation">)</span>\n            <span class="token punctuation">:</span> allChar<span class="token punctuation">;</span>\n\n          <span class="token keyword">return</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> child <span class="token operator">=</span><span class="token operator">></span>\n            React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              char<span class="token punctuation">,</span>\n              searchTerm<span class="token punctuation">,</span>\n              searchTermChanged<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n          <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ThemeContext.Consumer</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Bên trong component <code>Comsumer</code> thực ra ta trả về context <code>Consumer</code> từ context đã tạo trước đó. Sau đó ta sử dụng cặp <code>React.Children.map</code> và <code>React.cloneElement</code> để đưa toàn bộ các state vào trong prop</p>\n<p>Chúng ta sử dụng 2 component mới này để bọc lấy component <code>App</code> là xong</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Provider <span class="token keyword">from</span> <span class="token string">\'./Provider\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Consumer <span class="token keyword">from</span> <span class="token string">\'./Consumer\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Consumer</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Consumer</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Khi nào thì nên sử dụng Context API</h2>\n<p>Mỗi app mỗi khác, tùy theo nhu cầu và <strong>tình hình</strong> của từng app, câu trả lời đúng nhất chắc là phải để thực nhiệm sử dụng trên nhiều dự án. Có thể nói là react context API implement đơn giản hơn nhiều so với Redux hay MobX. Theo cá nhân mình thấy Context API sẽ chưa thay thể được Redux, nếu bạn đã và đang sử dụng Redux và chưa có gì phàn nàn về nó thì cứ xài tiếp thôi.</p>\n<p>Full Source Code: <a href="https://github.com/rajatgeekyants/superhero">https://github.com/rajatgeekyants/superhero</a></p>\n<p>Tác giả: Rajat S</p>\n<p>Link bài gốc: <a href="https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3">https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3</a></p>',frontmatter:{date:"May 16, 2018",path:"/2018-05-16-react-context-api-ke-thay-the-redux",tags:["javascript","react"],title:"React Context API - có phải sẽ thay thế Redux",desc:"Thử sử dụng React Context API để thay thể Redux cho State Management"}}},pathContext:{prev:!1,next:{excerpt:"Ngày xưa chúng ta viết javascript sử dụng  , nó sinh ra chuyện quá nhiều   lồng nhau, tiến bộ hộ, javascript cập nhập khái niệm  , những vẫn vướn phải nhiều   lồng nhau, và giờ javascript đẻ thêm khái niệm   để khử   lồng nhau. Bản thân promise là...",html:'<p>Ngày xưa chúng ta viết javascript sử dụng <code>callback</code>, nó sinh ra chuyện quá nhiều <code>callback</code> lồng nhau, tiến bộ hộ, javascript cập nhập khái niệm <code>promise</code>, những vẫn vướn phải nhiều <code>promise</code> lồng nhau, và giờ javascript đẻ thêm khái niệm <code>asyn/await</code> để khử <code>promise</code> lồng nhau.</p>\n<p>Bản thân promise là bất đồng bộ. Trước đây chúng ta sẽ lồng <code>promise</code> tiếp theo sau hàm <code>then</code>, để thực hiện nhiều <code>promise</code> đồng bộ, chúng ta phải cho phép nó đợi lẫn nhau, nói một cách khác nếu khi chúng ta muốn thực thi một tác vụ bất đồng bộ và tác vụ này lại đợi một tác vụ bất đồng bộ khác chạy xong.</p>\n<p>Chúng ta sẽ sử dụng từ khóa <code>async</code> gắn vào vào trước hàm trả về 1 <code>promise</code>. Nên nhớ là hàm <code>async</code> trả về <code>promise</code>. Mọi thao tác bên trong hàm <code>async</code> sẽ chạy bất đồng bộ. </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'TEST\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// hàm asyncF này = với hàm f ở trên</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'TEST\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Tương tự hàm <code>async</code> sẽ throw một exception giống như rejecting của promise</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// asyncF = f</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token string">\'Error\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Bên trong hàm <code>async</code> ta có thể sử dụng thêm từ khóa là <code>await</code>, và chỉ có thể sử dụng <code>await</code> trong hàm <code>async</code> thôi nhé, nó sẽ cho phép ta chỉ định một tác vụ phải chạy đồng bộ, phải đợi cái <code>promise</code> trả về.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// sau khi promise được resolved, kết quả đó sẽ dược đưa về cho response</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// bên ngoài hàm async ta phải dùng then chứ không thể gọi await, nhớ là hàm f trả về promise</span>\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Thay vì lổng nhiều <code>promise</code> trong <code>then</code>, chúng ta có thể viết</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// đưa nó vô hàm async</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// đợi và print kết quả</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// chạy bất đồng bộ 2 đứa này</span>\n    <span class="token keyword">const</span> call2Promise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> call3Promise <span class="token operator">=</span> <span class="token function">rp</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment" spellcheck="true">// đợi khi cả 2 thằng trên chạy xong và được resolve</span>\n    <span class="token keyword">const</span> response2 <span class="token operator">=</span> <span class="token keyword">await</span> call2Promise<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> response3 <span class="token operator">=</span> <span class="token keyword">await</span> call3Promise<span class="token punctuation">;</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// gọi hàm async</span>\n<span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Finished\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Tức là ở đây chúng ta cho 2 hàm send đi 1 request chạy song song, nhưng ta phải đợi cả 2 hàm này có kết quả rồi ta mới chạy tiếp. Nó sẽ tương tự như cách sử dụng <code>Promise.all(...).then(...)</code> chỉ là ta viết khác đi cho nó dễ hiểu, đỡ rối.</p>\n<p>Trong ví dụ trên chúng ta đã mặc định là 2 hàm <code>call2Promise</code> và <code>call3Promise</code> luôn thành công, nếu lỡ thằng nào chết chúng ta phải <code>try/catch</code> để bắt lỗi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> promiseResult <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">\'Error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Nếu không handle lỗi trong hàm <code>async</code>, thì nó sẽ trả về rejected promise khi có bug</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">//...</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Success\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token keyword">catch</span><span class="token punctuation">(</span>err <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Như vậy <code>async/await</code> không hẳn là kẻ thay thế cho <code>promise</code>, nó chỉ là bổ sung thêm cho <code>promise</code> một tính năng đồng bộ cho nhiều tao tác bất đồng bộ! Chúng ta sẽ vẫn viết <code>promise</code> thuần cho những tác vụ chỉ cần những đặc tính của <code>promise</code></p>\n<p>Tác Giả: IKOLAY GROZEV\nLink Bài Gốc: <a href="http://nikgrozev.com/2017/10/01/async-await/">http://nikgrozev.com/2017/10/01/async-await/</a></p>',id:"E:/anluu/luckyluu/posts/2018-05-07-asyn-await-giai-thich-vi-du/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2018-05-07T13:35:13.234Z",path:"/2018-05-07-asyn-await-giai-thich-vi-du",tags:["javascript"],title:"Async Await giải thích và ví dụ"}}}}}});
//# sourceMappingURL=path---2018-05-16-react-context-api-ke-thay-the-redux-30e0285695bea507e919.js.map