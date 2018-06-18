webpackJsonp([27],{"./node_modules/json-loader/index.js!./.cache/json/2018-06-18-tim-hieu-middleware-va-redux.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Middleware là gì</h2>\n<p>Nghe tên thì hơi phức tạp nhưng thực sự nó đơn giản lắm, nó là một hàm sẽ modify và được gọi trước khi action được dispatch.</p>\n<p>Mô phỏng quá trình hoạt động không có middleware</p>\n<p><img src="https://viblo.asia/uploads/5c72ff3e-859a-457a-ae11-e1392baa90af.gif"></p>\n<p>và khi áp dụng middleware</p>\n<p><img src="https://viblo.asia/uploads/8ff8bd43-308a-47da-b382-891adae237d2.gif"></p>\n<h2>Tại sao và tại sao</h2>\n<p>Trong thế giới của Rect, Redux là lựa chọn được ưa chuộng để có một container chứa chỉ chứa state. Ý tưởng chính của redux là tất cả những logic của app thì đưa vào <strong>reducers</strong>, là những function nhận vào 1 <code>state</code>, 1 <code>action</code> và trả về <code>state</code> mới. <strong>Reducers</strong> buộc phải là <em>pure function</em> không phụ thuộc và chỉnh sửa global state, để mà dễ test, dể refactor, performance tốt hơn.</p>\n<p>Thí dụ 1 redux store lưu giá trị counter</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> redux <span class="token keyword">from</span> <span class="token string">\'redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Nếu để ý chúng ta có thể thấy redux có 2 ràng buộc</p>\n<ol>\n<li><strong>Reducers</strong> PHẢI là hàm sync, trả về <code>state</code> mới</li>\n<li>Do không được thay đổi global state, reducers không được sử dụng những hàm như <code>setInterval()</code></li>\n</ol>\n<p>Thí dụ chúng ta làm một cái app để bấm thời gian, sau khi user bấm stop hiển thị giá trị thời gian đã chạy và sau đó lưu lại trên server bằng HTTP request. Chuyện gì sẽ xảy ra khi ta đang muốn quăng một hàm chạy async?</p>\n<p>Reducer của chúng ta cần listen 3 actions:</p>\n<ol>\n<li><code>START_TIMER</code>, khi bắt đầu tính thời gian</li>\n<li><code>STICK</code>, khi ta thay đổi giá trị hiện tại</li>\n<li><code>STOP_TIMER</code> khi chúng ta không nhận được action <code>TICK</code> nào nữa</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> stopWatch <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> <span class="token string">\'START_TIMMER\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>startTime<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span> elapsed<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token keyword">case</span> <span class="token string">\'TICK\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>elapsed<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime <span class="token operator">-</span> state<span class="token punctuation">.</span>startTime<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">case</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>stopWatch<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Khi user click button start, chúng ta dispatch event <code>START_TIMER</code>, khi user click stop, ta dispatch <code>STOP_TIMMER</code></p>\n<p>Vấn đề là làm sao dispatch <code>TICK</code>, nếu chúng ta gọi <code>setInterval()</code> trong <code>START_TIMER</code> thì lúc đó chúng ta đã thay đổi global state và vi phạm best practices của redux. Chổ thích hợp nhất để dispatch <code>TICK</code> là ở middleware</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> timerMiddleware <span class="token operator">=</span> store <span class="token operator">=</span><span class="token operator">></span> next <span class="token operator">=</span><span class="token operator">></span> action <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'START_TIMER\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        action<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'TICK\'</span><span class="token punctuation">,</span> currentTime<span class="token punctuation">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">clearInterval</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> stopWatch <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'START_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        startTime<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span>\n        elapsed<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        interval<span class="token punctuation">:</span> action<span class="token punctuation">.</span>interval\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'TICK\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> elapsed<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime <span class="token operator">-</span> state<span class="token punctuation">.</span>startTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> interval<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> middleware <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>timerMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>stopWatch<span class="token punctuation">,</span> middleware<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Syntax của redux middleware là điều cần phải bàn tới: 1 middleware function là 1 function return 1 function return 1 function. Nhất đầu ghê chưa. Thật ra đang dùng currying function trong javascript (<a href="https://luubinhan.github.io/blog/2018-03-02-gioi-thieu-higher-order-component-trong-react">đọc cà-ri function ở đây</a>). Function đầu tiên nhận vào <code>store</code> làm parameter, function thứ 2 sẽ nhận function <code>next</code> làm parameter, và function thứ 3 nhận dispatch <code>action</code> làm parameter. <code>store</code> và <code>action</code> là giá trị store và dispatch action hiện tại. Chiếc đũa thuần kỳ ở đây chính là function <code>next</code>, bạn có thể gọi nó là "sau khi middleware chạy xong, truyền cái cái action này cho middleware kế tiếp". Nói cách khác, middleware có thể là hàm async.</p>\n<p>Tiếp theo chúng ta sẽ lưu giá trị sau khi user click stop lên server.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> promiseMiddleware <span class="token operator">=</span> store <span class="token operator">=</span><span class="token operator">></span> next <span class="token operator">=</span><span class="token operator">></span> action <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// kiểm tra payload nếu là promise thì đợi nó resolve</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>payload <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n            res <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> action<span class="token punctuation">.</span>payload <span class="token operator">=</span> res<span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            err <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> action<span class="token punctuation">.</span>error <span class="token operator">=</span> err<span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> middleware <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>timerMiddleware<span class="token punctuation">,</span> promiseMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>stopWatch<span class="token punctuation">,</span> middleware<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Khi gởi lên một HTTP request, chúng ta sẽ gởi request này ở dạng <code>promise</code>, <code>promiseMiddelware</code> sẽ đứng đợi promise này có giá trị trả về thì mới gọi <code>next(action)</code></p>\n<p>Ta sẽ gởi lên server bằng <code>axios</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">\'axios\'</span><span class="token punctuation">;</span>\n\nstore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'SAVE_TIME\'</span><span class="token punctuation">,</span> payload<span class="token punctuation">:</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">\'/save\'</span><span class="token punctuation">,</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Reducer listen <code>SAVE_TIME</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> stopwatch <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'START_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        startTime<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span>\n        elapsed<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        interval<span class="token punctuation">:</span> action<span class="token punctuation">.</span>interval\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'TICK\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> elapsed<span class="token punctuation">:</span> action<span class="token punctuation">.</span>currentTime <span class="token operator">-</span> state<span class="token punctuation">.</span>startTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'STOP_TIMER\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> interval<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'SAVE_TIME\'</span><span class="token punctuation">:</span>\n      <span class="token comment" spellcheck="true">// If there was an error, set the error property on the state</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> error<span class="token punctuation">:</span> action<span class="token punctuation">.</span>error <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment" spellcheck="true">// Otherwise, clear all the timer state</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> startTime<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> error<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Một số ứng dụng của Middleware</h2>\n<h3>Loging</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> loggerMiddleware <span class="token operator">=</span> store <span class="token operator">=</span><span class="token operator">></span> next <span class="token operator">=</span><span class="token operator">></span> action <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Đợi user confirm</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> confirmationMiddleware <span class="token operator">=</span> store <span class="token operator">=</span><span class="token operator">></span> next <span class="token operator">=</span><span class="token operator">></span> action <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>shouldConfirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">\'Are you sure?\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Một số lựa chọn</h2>\n<p>Một số thư viện để làm việc với middleware cho Redux rất phổ biến có thể tham khảo là <code>redux-thunk</code>, <code>redux-saga</code>, <code>redux-observable</code></p>\n<p><a href="https://www.codementor.io/vkarpov/beginner-s-guide-to-redux-middleware-du107uyud">Link bài gốc của tác giả Vkarpov</a></p>\n<p>Tham khảo thêm:</p>\n<ul>\n<li><a href="https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/middleware.js">Realworld example sử dụng redux, middleware</a></li>\n<li><a href="https://medium.com/@meagle/understanding-87566abcfb7a">Tìm hiểu Middleware của tác giả Mark</a></li>\n<li><a href="https://redux.js.org/api-reference/applymiddleware">applyMiddleware</a></li>\n</ul>',frontmatter:{date:"June 18, 2018",path:"/2018-06-18-tim-hieu-middleware-va-redux",tags:["react","redux","javascript","middleware"],title:"Sử dụng Middleware với Redux dành cho người mới bắt đầu",desc:"Nếu đã nắm rõ redux, bước tiếp theo phải tìm hiểu là middleware"}}},pathContext:{prev:!1,next:{excerpt:"CSS modules là gì Dựa vào cái tên chắc phần nào cũng đoán được, nó là kiểu viết module hóa stylesheet thành từng file nhỏ, không còn sử dụng một file stylesheet tập trung nữa. Thêm vào đó, tất cả tên class lúc này sẽ được scope lại local, có thế viết...",html:'<h2>CSS modules là gì</h2>\n<p>Dựa vào cái tên chắc phần nào cũng đoán được, nó là kiểu viết module hóa stylesheet thành từng file nhỏ, không còn sử dụng một file stylesheet tập trung nữa. Thêm vào đó, tất cả tên class lúc này sẽ được scope lại local, có thế viết bằng vanilla CSS hay SCSS (lựa chọn hàng đầu của các frontend chất).</p>\n<p>file Button.scss</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token selector">.button </span><span class="token punctuation">{</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>file Button.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> styles <span class="token keyword">from</span> <span class="token string">\'./Button.scss\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>button<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>An Luu Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Với cách viết này, class <code>.button</code> lúc trả về sẽ là <code>button-[hash string ở đây]</code>, nên sẽ không sợ bị trùng tên, chắc chắn không gây side effect lên các component khác vì chả bao giờ trung tên đâu.</p>\n<p>Một lợi ích khác là khi viết ta có thể viết <code>.my-class-name</code> kiểu kebab case, nhưng khi viết js chúng ta có lại thích transform thành <code>styles.myClassName</code> theo kiểu camel case.</p>\n<p>CSS module thoạt thì thấy không có chi đặc biệt, đơn giản chỉ là thế thôi, nhưng lợi ích của việc này là giúp chúng ta rất dễ maintain stylesheet vì nó buộc khi chúng ta viết css phải đơn giản nhất có thể.</p>\n<h2>Xóa style đầy tự tin</h2>\n<p>Thích nhất là viết feature mới và đập bỏ cái code chuối cả nãy hồi xưa. Phần khó nhất là gì? Làm sao biết được xóa cái style cũ này đi có bị gì không? Lỡ đâu đang xài đâu đó.</p>\n<p>Ở cái <code>Button</code> ví dụ trên, phần stylesheet và component gần như là gắn chặt vào nhau như hình với bóng, mối quan hệ một-một giữa component và style sheet đó là một quy ước cho một component được viết tốt, file style sheet đó chỉ phục vụ cho đúng component đó, nếu mà lỡ xóa file stylesheet hoặc class nào mà đang sử dụng, chắc chắn quá trình build sẽ báo ngay lỗi cho chúng ta biết lỡ xóa phần nào.</p>\n<h2>Một vài lựa chọn nâng cao</h2>\n<p>Những thư viện CSS-trong-JS nâng cao như styled-components hay emotion cũng được nhiều front-end chất xài, cung cấp nhiều tính năng tân tiến hơn, nếu không ngại học thêm và tìm hiểu cách hoạt động thì cũng là lựa chọn không đến nổi.</p>\n<p>Với kiểu viết CSS Module với Vanilla CSS hay SCSS đã được tín nhiệm từ nhiều năm qua, bên cạnh đó thì SCSS còn có biến nè, kiểu viết nesting rất tiện lợi nè,... thì thật ra chỉ sử dụng SCSS thôi cũng đã là đủ</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./App.scss\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>styles<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>log ra xem có cái mợ gì</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*o9VrQ1idA8SqwJ_o6TL9Hg.png"></p>\n<p>Bài dịch của tác giả: Spencer Miskoviak</p>\n<p><a href="https://medium.com/@skovy/writing-maintainable-styles-and-components-with-css-modules-308a9216a6c2">Link bài gốc</a></p>\n<p><a href="https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9">https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9</a></p>',
id:"E:/anluu/luckyluu/posts/2018-06-15-lam-viec-voi-css-module/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-06-15T13:35:13.234Z",path:"/2018-06-15-lam-viec-voi-css-module",tags:["react","javascript"],title:"Làm việc với CSS Modules trong React"}}}}}});
//# sourceMappingURL=path---2018-06-18-tim-hieu-middleware-va-redux-043dff706aa6ea991f3c.js.map