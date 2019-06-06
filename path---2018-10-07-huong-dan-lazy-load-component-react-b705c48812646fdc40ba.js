webpackJsonp([0xf2a216f8b19d],{1358:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81">Vấn đề</a></li>\n<li><a href="#gi%E1%BA%A3i-ph%C3%A1p">Giải pháp</a></li>\n<li><a href="#code-v%C3%AD-d%E1%BB%A5">Code ví dụ</a></li>\n<li><a href="#lazy-load-react-router">Lazy load react-router</a></li>\n<li><a href="#t%E1%BB%95ng-k%E1%BA%BFt">Tổng kết</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="vấn-đề"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề</h1>\n<p>Bạn viết code, chạy thử trên localhost, yeah mọi thứ super nhanh</p>\n<p><img src="https://pm1.narvii.com/6456/c88c177b7cee6af26086088dfcfa09cf401b676e_hq.jpg" alt="Hướng dẫn lazy load component trong React"></p>\n<p>Nhưng khi chạy trên production thì mọi thứ sẽ trở nên như thế này</p>\n<p><img src="https://vetstreet-brightspot.s3.amazonaws.com/32/b9e550dfd411e1a02d005056ad4734/file/tortoise-137584694-lc080612.jpg" alt="Hướng dẫn lazy load component trong React"></p>\n<p>Sẽ có rất nhiều giải pháp để xử lý vấn đề này.</p>\n<p>Tại sao chúng ta phải load một component mà user chưa sử dụng đến, thậm chí có khi trong suốt quá trình làm việc, user sẽ không đụng đến một số màn hình?</p>\n<h1 id="giải-pháp"><a href="#gi%E1%BA%A3i-ph%C3%A1p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải pháp</h1>\n<p>Nếu bạn làm web nhiều thì chắc có nghe đến lazy load image, để giảm bớt số lượng request gởi đi và dữ liệu trả về cho lần load đầu tiên. Trong React cũng có khái niệm tương tự như vậy.</p>\n<p>Tất cả những việc đó thực hiện được là nhờ sự thần thánh của <strong>webpack</strong></p>\n<p>Thông thường chúng ta import component như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> ScreenComponent <span class="token keyword">from</span> <span class="token string">\'./ScreenComponent\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Vậy đã bao giờ bạn thử</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./ScreenComponent\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Vâng, nó sẽ trả về 1 <strong>Promise</strong>!</p>\n<p>Nếu import như thế, Webpack sẽ split file build ra và thực hiện việc load chỉ khi được gọi</p>\n<h1 id="code-ví-dụ"><a href="#code-v%C3%AD-d%E1%BB%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code ví dụ</h1>\n<p><img src="https://i.imgur.com/5zJ4s8b.png" alt="Hướng dẫn lazy load component trong React"></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Todo <span class="token keyword">from</span> <span class="token string">\'./Todo\'</span><span class="token punctuation">;</span>\n\n<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      todos<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// ...</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Add todo\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>submitValue<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Todo</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>todos<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu ở màn hình này, user chưa có gì trong <code class="language-text">state.todos</code>, chúng ta không thực sự cần <code class="language-text">import Todo from &#39;./Todo&#39;;</code>, chỉ khi user nhấn add để thêm một item vào trong <code class="language-text">state.todos</code> chúng ta mới cần load component <code class="language-text">&lt;Todo /&gt;</code></p>\n<p>Thêm <code class="language-text">state.LLTodo</code> để kiểm tra việc load component todo chưa, chúng ta đưa việc load này vào <code class="language-text">componentDidUpdate()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token comment">//import Todo from \'./Todo\'; // bỏ component import ở đây</span>\n\n<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      todos<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      LLTodo<span class="token punctuation">:</span> <span class="token keyword">null</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> prevState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>LLTodo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">lazyLoadTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function-variable function">lazyLoadTodo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> lazyLoad <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./Todo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">debugger</span><span class="token punctuation">;</span> <span class="token comment">// để xem nó trả về gì</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/EQHSNyp.png" alt="Hướng dẫn lazy load component trong React"></p>\n<p>Nó đã trả về cho chúng ta một Promise, sửa lại hàm này thành async</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function-variable function">lazyLoadTodo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token keyword">default</span><span class="token punctuation">:</span> Todo<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./Todo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>LLTodo<span class="token punctuation">:</span> Todo<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta kiểm tra việc render này theo <code class="language-text">state.LLTodo</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>LLTodo<span class="token punctuation">,</span> todos<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> lazyLoadTodo <span class="token operator">=</span> LLTodo <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LLTodo</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todos<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Add todo\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>submitValue<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">{</span>lazyLoadTodo<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Để thực sự thấy được kết quả, chúng ta có thể build, hoặc trên mở tab network, khi nhập giá trị vào trong input, một file <code class="language-text">[tên].chunk.js</code> sẽ được load thêm vào.</p>\n<p><img src="https://i.imgur.com/h9LyiS9.png" alt="Hướng dẫn lazy load component trong React"></p>\n<p>File 1.chunk.js được load khi component được update</p>\n<p><img src="https://i.imgur.com/8v6S8QR.png" alt="Hướng dẫn lazy load component trong React"></p>\n<p>Mở file này ra để check xem sau</p>\n<p><img src="https://i.imgur.com/Y9lytUD.png" alt="Hướng dẫn lazy load component trong React"></p>\n<p>Đúng là file component của chúng ta được được tách ra :D</p>\n<h1 id="lazy-load-react-router"><a href="#lazy-load-react-router" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lazy load react-router</h1>\n<p>Giờ xem xét phần chúng ta setup cho cái route, đại khái nó sẽ như thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'./Home\'</span>\n<span class="token keyword">import</span> Blog <span class="token keyword">from</span> <span class="token string">\'./Blog\'</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>HomeComponent<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blog<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>BlogComponent<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Áp dụng lazy load component với <em>route</em>, ở đây mình viết thêm một hàm <code class="language-text">asyncComponent</code>, nó sẽ nhận vào hàm <code class="language-text">import(&#39;path/to/file&#39;)</code> và return về component đó.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">asyncComponent</span><span class="token punctuation">(</span><span class="token parameter">getComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">class</span> <span class="token class-name">AsyncComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> Component <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    state <span class="token operator">=</span> <span class="token punctuation">{</span> \n      <span class="token comment">// chổ này hơi tricky, trỏ về chính nó</span>\n      Component<span class="token punctuation">:</span> AsyncComponent<span class="token punctuation">.</span>Component \n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> prevState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// không re-load nếu đã có rồi</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">Component</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          AsyncComponent<span class="token punctuation">.</span>Component <span class="token operator">=</span> Component<span class="token punctuation">;</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> AsyncComponent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hàm <code class="language-text">asyncComponent()</code> này chúng ta sẽ truyền vào cho nó function là <code class="language-text">getComponent()</code> (chính là hàm import)</p>\n<p>Chỉnh lại cách chúng ta import component cho từng route</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// Dynamically imported components</span>\n<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">asyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./Home\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> module<span class="token punctuation">.</span>default<span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> Blog <span class="token operator">=</span> <span class="token function">asyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./Blog\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> module<span class="token punctuation">.</span>default<span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">exact</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/blog<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Blog<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/PN8f7w9.png" alt="Hướng dẫn lazy load component trong React"></p>\n<h1 id="tổng-kết"><a href="#t%E1%BB%95ng-k%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tổng kết</h1>\n<p>Việc lazy load component không quá khó, không cần thêm bất kỳ thư viện, config gì cả nếu bạn đang init project bằng <code class="language-text">create-react-app</code>, nhưng nó sẽ là giải pháp phải làm khi file bundle của bạn đã quá lớn và ngày càng lớn hơn.</p>\n<p>Chúc các bạn có một ngày Happy Interview!</p>',
timeToRead:4,excerpt:"Vấn đề Giải pháp Code ví dụ Lazy load react-router Tổng kết Vấn đề Bạn viết code, chạy thử trên localhost, yeah mọi thứ super nhanh Nhưng…",frontmatter:{title:"Hướng dẫn lazy load component trong React",cover:"",date:"2018-10-07",category:null,tags:["javascript","react","performance"],desc:"Sự là hôm rồi đi phỏng vấn, được hỏi câu này mà mình đó giờ chưa làm nên không biết, nay có thời gian rảnh rỗi tìm hiểu, chia sẻ lại cho các bạn chưa biết."},fields:{slug:"/2018-10-07-huong-dan-lazy-load-component-react"}}},pathContext:{slug:"/2018-10-07-huong-dan-lazy-load-component-react",prev:{frontmatter:{title:"Sử dụng aria trên site eCommerce, vấn đề accessibility cần quan tâm",desc:"Accessible là một thuật ngữ ít bạn làm web quan tâm, không có nghĩa là nó không tồn tại, cùng tham khảo những aria nào cần bổ sung cho trang ecommerce",type:"post",category:null,tags:["ux-ui","mobile-web-specialist"],date:"2018-10-08",cover:""},fields:{slug:"/2018-10-08-huong-dan-aria-va-su-dung-voi-ecommerce-site"}},next:{frontmatter:{title:"Nâng cao tốc độ Component",desc:"Bài viết của team làm Facebook Ads chia sẽ, cùng điểm qua các vấn đề căn bản để tối ưu component",type:"post",category:null,tags:["react","performance"],date:"2018-10-06",cover:""},fields:{slug:"/2018-10-06-huong-dan-thiet-ket-component-de-nang-cao-toc-do"}}}}}});
//# sourceMappingURL=path---2018-10-07-huong-dan-lazy-load-component-react-b705c48812646fdc40ba.js.map