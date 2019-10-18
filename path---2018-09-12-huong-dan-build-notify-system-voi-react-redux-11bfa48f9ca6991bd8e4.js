webpackJsonp([0xc3450a6c2a95],{1402:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#actions--reducer">Actions &#x26; Reducer</a></li>\n<li><a href="#components">Components</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="actions--reducer"><a href="#actions--reducer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Actions &#x26; Reducer</h1>\n<p>Bắt đầu với <em>reducer</em>, mặc định là một mảng rỗng, toàn bộ nội dung thông báo sẽ add vào mảng này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// scr/reducers/toast.js</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">toasts</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span>payload<span class="token punctuation">,</span> type<span class="token punctuation">}</span> <span class="token operator">=</span> action<span class="token punctuation">;</span>\n\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đừng quên thêm vào trong <code class="language-text">combineReducers</code> nhé</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// src/reducers/index.js</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> toasts <span class="token keyword">from</span> <span class="token string">"./toasts"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  toasts\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Chúng ta sẽ cần 1 function <code class="language-text">createToast</code> nhận vào options và trả về một object với id tự động tăng khi gọi, có sẵn một số default options sẽ merge với giá trị options truyền vào</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// src/factories/createToast.js</span>\n<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'#6796e6\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createToast</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>defaultOptions<span class="token punctuation">,</span>\n    <span class="token operator">...</span>options<span class="token punctuation">,</span>\n    id<span class="token punctuation">:</span> id<span class="token operator">++</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta sẽ cần thêm 1 action để tạo một toast notification trong store, 1 action để remove khỏi store</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// src/constants/index.js</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD_TOAST</span> <span class="token operator">=</span> <span class="token string">"ADD_TOAST"</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">REMOVE_TOAST</span> <span class="token operator">=</span> <span class="token string">"REMOVE_TOAST"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// src/actions/index.js</span>\n<span class="token keyword">import</span> createToast <span class="token keyword">from</span> <span class="token string">"../factories/createToast"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADD_TOAST</span><span class="token punctuation">,</span> <span class="token constant">REMOVE_TOAST</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../constants"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addToast</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    payload<span class="token punctuation">:</span> <span class="token function">creatToast</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    type<span class="token punctuation">:</span> <span class="token constant">ADD_TOAST</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">removeToast</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    payload<span class="token punctuation">:</span> id<span class="token punctuation">,</span>\n    type<span class="token punctuation">:</span> <span class="token constant">REMOVE_TOAST</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Giờ đến nhiệm vụ của reducer là phải xử lý khi có 2 action trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// src/reducers/toasts.js</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADD_TOAST</span><span class="token punctuation">,</span> <span class="token constant">REMOVE_TOAST</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../constants"</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">toasts</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> payload<span class="token punctuation">,</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> action<span class="token punctuation">;</span>\n\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token constant">ADD_TOAST</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span>payload<span class="token punctuation">,</span> <span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">case</span> <span class="token constant">REMOVE_TOAST</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">toast</span> <span class="token operator">=></span> toast<span class="token punctuation">.</span>id <span class="token operator">!==</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Xong việc xử lý trong Redux, giờ đến cái Component</p>\n<h1 id="components"><a href="#components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components</h1>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> bindActionCreators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Toast <span class="token keyword">from</span> <span class="token string">"./Toast"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> removeToast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../actions"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Toast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> actions<span class="token punctuation">,</span> toasts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span>removeToast<span class="token punctuation">}</span> <span class="token operator">=</span> actions<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>toasts<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>toasts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">toast</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span> <span class="token operator">=</span> toast<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Toast</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">toast</span><span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span> <span class="token attr-name">onDismissClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">removeToast</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nToasts<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  actions<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    removeToast<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n  toasts<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token parameter">dispatch</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  actions<span class="token punctuation">:</span> <span class="token function">bindActionCreators</span><span class="token punctuation">(</span><span class="token punctuation">{</span> removeToast <span class="token punctuation">}</span><span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  toasts<span class="token punctuation">:</span> state<span class="token punctuation">.</span>toasts\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Toasts<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Ở component <code class="language-text">Toasts</code> này chúng ta render tất cả notification có trong <strong>store</strong>, đưa vào function xử lý nút close trên mỗi component.</p>\n<p>Đến Component <code class="language-text">Toast</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// src/components/Toast.jsx</span>\n\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Toast</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>onDismissClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nToast<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n  onDismissClick<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n  text<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Toast<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Ở đây chúng ta không muốn component này update gì cả, nên ở <code class="language-text">shouldComponentUpdate</code> chúng ta <code class="language-text">return false</code></p>\n<p><a href="https://www.natterly.com/blog/toast-notification-system-in-a-react-redux-application">Link bài gốc</a>;</p>',timeToRead:3,excerpt:"Actions & Reducer Components Actions & Reducer Bắt đầu với  reducer , mặc định là một mảng rỗng, toàn bộ nội dung thông báo sẽ add vào mảng…",frontmatter:{title:"Làm toast notification system trong React/Redux",cover:"",date:"2018-09-12",category:null,tags:["react","javascript"],desc:"Có lẽ ko có ứng dụng web nào lại ko cần thông báo đến user kết quả của một thao tác nào đó, xây một notification system để sử dụng là hết sức cần thiết"},fields:{slug:"/2018-09-12-huong-dan-build-notify-system-voi-react-redux"}}},pathContext:{slug:"/2018-09-12-huong-dan-build-notify-system-voi-react-redux",prev:{frontmatter:{title:"Sử dụng Flow để check type trong React Redux",desc:"Chúng ta sẽ không nói nhiều cách sử dụng Redux trong bài này, các bạn có thể xem các bài trước, ở đây mình chỉ đi đến vấn đề đưa Flow vào để check type trong Redux",type:"post",category:null,tags:["react","redux"],date:"2018-09-13",cover:""},fields:{slug:"/2018-09-13-huong-dan-su-dung-flow-voi-react-redux"}},next:{frontmatter:{title:"Dependency injection trong Javascript",desc:"Dependency injection là một khái niệm hay gặp không chỉ trong Angular mà còn ở nhiều ngôn ngữ lập trình khác, Dependency injection không có gì ghê gớm cả, chỉ do cách dùng từ có vẻ to lớn vậy thôi",type:"post",category:null,tags:["javascript"],date:"2018-09-11",cover:""},fields:{slug:"/2018-09-11-huong-dan-giai-thich-dependency-injection-cho-nguoi-moi-bat-dau-khong-biet-gi"}}}}}});
//# sourceMappingURL=path---2018-09-12-huong-dan-build-notify-system-voi-react-redux-11bfa48f9ca6991bd8e4.js.map