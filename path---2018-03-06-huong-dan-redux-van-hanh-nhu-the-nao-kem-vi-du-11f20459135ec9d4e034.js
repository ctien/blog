webpackJsonp([95538541662431],{1336:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#Ch%E1%BB%89-s%E1%BB%AD-d%E1%BB%A5ng-State-c%E1%BB%A7a-React">Chỉ sử dụng State của React</a></li>\n<li><a href="#Th%C3%AAm-Redux">Thêm Redux</a></li>\n<li><a href="#Action">Action</a></li>\n<li><a href="#Kh%C3%B4ng-bao-gi%E1%BB%9D-%C4%91%C6%B0%E1%BB%A3c-ph%C3%A9p-thay-%C4%91%E1%BB%95i-State-tr%E1%BB%B1c-ti%E1%BA%BFp">Không bao giờ được phép thay đổi State trực tiếp</a></li>\n<li><a href="#Action-t%E1%BB%AB-%C4%91%C3%A2u-m%C3%A0-c%C3%B3">Action từ đâu mà có</a></li>\n</ul>\n<!-- /TOC -->\n<p>Nếu chưa biết tại sao lại sinh ra thằng Redux này, có thể xem ở tuts trước của mình.</p>\n<h2 id="chỉ-sử-dụng-state-của-react"><a href="#ch%E1%BB%89-s%E1%BB%AD-d%E1%BB%A5ng-state-c%E1%BB%A7a-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chỉ sử dụng State của React</h2>\n<p>Component sẽ build</p>\n<p><img src="https://daveceddia.com/images/counter-plain.png" alt="Redux vận hành như thế nào"></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Giải thích ngắn gọn cho dễ theo dõi</p>\n<ul>\n<li>Giá trị <code class="language-text">count</code> được lưu trong <em>state</em> của component <code class="language-text">Counter</code></li>\n<li>Khi user click \'+\', hàm <code class="language-text">increment</code> sẽ tăng giá trị <code class="language-text">count</code> lên</li>\n<li>Khi state bị thay đổi, React sẽ render lại <code class="language-text">Counter</code> và những component bên trong của nó, giá trị mới sẽ hiển thị</li>\n</ul>\n<h2 id="thêm-redux"><a href="#th%C3%AAm-redux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thêm Redux</h2>\n<p>Như đã đề cập trong tuts trước, Redux lưu <em>state</em> lại trong 1 cái <strong>store</strong>, tranh lẫn lộn, <strong>store</strong> là nơi lưu <strong>state</strong>, và <strong>state</strong> dữ liệu.</p>\n<p>Cài redux và react-redux package</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install redux react-redux --save</code></pre>\n      </div>\n<p>Tại sao phải 2 cái package?, cái redux chỉ cho ta cái <strong>store</strong>, để lấy được cái <em>state</em> ra, sử dụng hàm <code class="language-text">connect</code> trong <code class="language-text">react-redux</code>, vì redux không phải chỉ làm việc chung được với React thôi không, nó có thể chơi với Vue, Angular không chừng.</p>\n<p>Bỏ state đi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">connect</code> nó với store thôi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\n<span class="token comment">// Viết thêm hàm này</span>\n<span class="token keyword">function</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Thay cái</span>\n<span class="token comment">// export default Counter;</span>\n\n<span class="token comment">// bằng</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Ok vậy là xong phần connect component với các state ở trong <em>store</em>, chúng ta cần khai báo Store!</p>\n<p>Bọc toàn bộ cái <code class="language-text">App</code> bên trong component <code class="language-text">Provider</code> của <em>react-redux</em> để tất cả component bên trong <code class="language-text">App</code> có thể sử dụng hàm <code class="language-text">connect</code> để gọi đến <em>store</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Chưa xong, chúng ta phải setup cái store để đưa vào cho Provider</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Vẫn chưa đủ, thật sự Redux không được thông minh như chúng ta tưởng tượng, lúc đầu mình đã nghĩ rằng khi create store như vậy nó sẽ cho mình những giá trị default bên trong store. Nhưng không chúng ta phải làm tay tất cả. Chúng ta phải cung cấp cho nó 1 hàm gọi là <code class="language-text">reducer</code>, cái hàm <code class="language-text">reducer</code> này phải <em>return</em> về một giá trị cho state, luôn phải return state nhé. Bên trong <code class="language-text">reducer</code> ta sẽ xào nấu state theo yêu cầu, nó sẽ nhận state hiện tại và trả về state mới.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  count<span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="action"><a href="#action" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Action</h2>\n<p>Action là gì, nó đóng vai trò như thế nào và nó đến từ đâu? Làm thế nào mà ta đổi giá trị <code class="language-text">counter</code>?</p>\n<p><code class="language-text">action</code> là 1 JS object nó sẽ cho biết bạn đang muốn <code class="language-text">order</code> món nào, như tờ giấy ghi <code class="language-text">order</code> trong nhà hàng ấy mà, nó sẽ chưa thông tin \'món\' bạn order, đầu bếp <code class="language-text">reducer</code> sẽ dựa vào đó mà xào nấu ra \'món\' bạn order</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'DECREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Reducer sẽ căn cứ vào <code class="language-text">action.type</code> để thực hiện thay đổi và trả về state mới, nên nhớ chúng ta phải LUÔN LUÔN trả về state trong <code class="language-text">reducer</code>, nếu có hay không có thay đổi cũng phải trả về <em>state</em></p>\n<h2 id="không-bao-giờ-được-phép-thay-đổi-state-trực-tiếp"><a href="#kh%C3%B4ng-bao-gi%E1%BB%9D-%C4%91%C6%B0%E1%BB%A3c-ph%C3%A9p-thay-%C4%91%E1%BB%95i-state-tr%E1%BB%B1c-ti%E1%BA%BFp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Không bao giờ được phép thay đổi State trực tiếp</h2>\n<p>State là một immutable object, tuyệt đối <strong>KHÔNG</strong> thay đổi state như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">brokenReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token comment">// BẬY: đừng thay giá trị bằng kiểu này</span>\n      state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n\n    <span class="token keyword">case</span> <span class="token string">\'DECREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token comment">// BẬY: đừng thay giá trị bằng kiểu này</span>\n      state<span class="token punctuation">.</span>count<span class="token operator">--</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Làm như vậy cũng cấm tuyệt đối nhé: </p>\n<ul>\n<li><code class="language-text">state.foo = 7</code></li>\n<li><code class="language-text">state.items.push(newItem)</code></li>\n<li><code class="language-text">delete state.something</code></li>\n</ul>\n<h2 id="action-từ-đâu-mà-có"><a href="#action-t%E1%BB%AB-%C4%91%C3%A2u-m%C3%A0-c%C3%B3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Action từ đâu mà có</h2>\n<p>Action không tự sinh ra, nó được <code class="language-text">dispatch</code> ra từ hàm <code class="language-text">dispatch</code>. Hàm <code class="language-text">dispatch</code> thì đặc biệt là nó không được import, mình có thể gọi <code class="language-text">store.dispatch(someAction)</code>, nhưng cái store này thì nó năm ở trong 1 file thôi, Vậy hàm <code class="language-text">dispatch</code> này làm sao có đây?</p>\n<p>Thật ra lúc chúng ta gọi <code class="language-text">connect</code> thì hàm <code class="language-text">connect</code> cũng đã <em>map</em> cái hàm <code class="language-text">dispatch</code> vào trong props của component luôn.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'INCREMENT\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'DECREMENT\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',
timeToRead:6,excerpt:"Chỉ sử dụng State của React Thêm Redux Action Không bao giờ được phép thay đổi State trực tiếp Action từ đâu mà có Nếu chưa biết tại sao lại…",frontmatter:{title:"Redux vận hành như thế nào",cover:"",date:"2018-03-06",category:"react",tags:["react","javascript","redux"],desc:"Actions, reducers, action creators, middleware, pure functions, immutability,... những ngoại ngữ làm rối bất kỳ ai nếu chưa biết redux"},fields:{slug:"/2018-03-06-huong-dan-redux-van-hanh-nhu-the-nao-kem-vi-du"}}},pathContext:{slug:"/2018-03-06-huong-dan-redux-van-hanh-nhu-the-nao-kem-vi-du",prev:{frontmatter:{title:"Sử dụng biến Node Environment",desc:"Biến environment là một phần cơ bản cần biết khi làm việc với Node",type:"post",category:"javascript",tags:["javascript","webpack"],date:"2018-03-09",cover:""},fields:{slug:"/2018-03-09-huong-dan-su-dung-bien-enviroment-nhu-the-nao"}},next:{frontmatter:{title:"8 câu điều kiện khi render trong React",desc:"Tutorial này sẽ cover những câu điều kiện dùng để render component phổ biến nhất",type:"post",category:"react",tags:["react","javascript"],date:"2018-03-05",cover:""},fields:{slug:"/2018-03-05-8-huong-dan-cach-render-component-trong-react"}}}}}});
//# sourceMappingURL=path---2018-03-06-huong-dan-redux-van-hanh-nhu-the-nao-kem-vi-du-11f20459135ec9d4e034.js.map