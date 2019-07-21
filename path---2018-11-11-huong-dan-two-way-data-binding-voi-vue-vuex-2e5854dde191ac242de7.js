webpackJsonp([33428291843854],{1430:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Sử dụng directive <code class="language-text">v-model</code>, chúng có thể dễ dàng thực hiện two-way data binding cho element, một trong những tính năng rất hay ho mà Vue cung cấp.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// thay đổi giá trị của message ở đây</span>\n    <span class="token comment">// hoặc nhập vào input</span>\n    <span class="token comment">// cả 2 dữ liệu này được đồng bộ hóa</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Tuy nhiên khi làm những ứng dụng lớn, chúng ta sẽ có những nhu cầu cao hơn, cần đến Vuex.</p>\n<p>Nếu đưa toàn bộ dữ liệu vào vuex store, chúng ta sẽ sửa lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.message<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token comment">// LƯU Ý đây là cách làm SAI</span>\n      form<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>form\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token comment">// Setup store</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  strict<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  state<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    form<span class="token punctuation">:</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Khi xem console trên trên trình duyệt nó sẽ quăng thông báo</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Error: [vuex] Do not mutate vuex store state outside mutation handlers</code></pre>\n      </div>\n<p>Bởi vì state của store là <strong>mutation</strong>, tức không được trực tiếp sửa, mà phải thông qua các hàm mutations</p>\n<p>Theo như <a href="https://vuex.vuejs.org/guide/forms.html" target="_blank" rel="noopener noreferrer">tài liệu chính thức của Vuex</a>, đây là cách chúng ta bind dữ liệu trên form</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>firstName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lastName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  computed<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    firstName<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>form<span class="token punctuation">.</span>firstName<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token keyword">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">\'updateFirstName\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    lastName<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>form<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token keyword">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">\'updateLastName\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    message<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>form<span class="token punctuation">.</span>message<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token keyword">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">\'updateMessage\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Tuy nhiên là chúng ta lặp lại một số code, code sẽ rất dài nếu có quá nhiều fields.</p>\n<p>Chúng ta có thể dùng thêm <a href="https://github.com/maoberlehner/vuex-map-fields" target="_blank" rel="noopener noreferrer">vuex-map-fields</a>, refactor lại code ở trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>firstName<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lastName<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span>mapFields<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'vuex-map-fields\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  computed<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span><span class="token function">mapFields</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token string">\'form.firstName\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'form.lastName\'</span><span class="token punctuation">,</span>\n      <span class="token string">\'form.message\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Ngoài ra <code class="language-text">vuex-map-fields</code> cũng cung cấp các hàm <code class="language-text">getters</code> và hàm <code class="language-text">mutations</code> cho dữ liệu</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> getField<span class="token punctuation">,</span> updateField <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'vuex-map-fields\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  strict<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  state<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    form<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      firstName<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      lastName<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  getters<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    getField<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  mutations<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    updateField<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Mọi thứ cứ để <code class="language-text">vuex-map-fields</code> lo! Bạn không cần tự viết mấy hàm getters và mutations đơn giản quá làm gì, trừ trường hợp bạn muốn bổ sung một số logic đặc biệt</p>\n<p><a href="https://markus.oberlehner.net/blog/form-fields-two-way-data-binding-and-vuex/" target="_blank" rel="noopener noreferrer">Bài giới thiệu của tác giả library</a></p>',timeToRead:2,excerpt:"Sử dụng directive  , chúng có thể dễ dàng thực hiện two-way data binding cho element, một trong những tính năng rất hay ho mà Vue cung cấp…",frontmatter:{title:"Cách làm two-way data binding cho form field trong Vue và Vuex",cover:"",date:"2018-11-11",category:null,tags:["vuejs"],desc:"Two-way data binding trong Vue và Vuex làm như thế nào cho đúng mà nhanh"},fields:{slug:"/2018-11-11-huong-dan-two-way-data-binding-voi-vue-vuex"}}},pathContext:{slug:"/2018-11-11-huong-dan-two-way-data-binding-voi-vue-vuex",prev:{frontmatter:{title:"Copy object trong javascript",desc:"Luận bàn các cách mà chúng ta copy một object trong javascript, shallow copy và deep copy",type:"post",category:null,tags:["javascript"],date:"2018-11-13",cover:""},fields:{slug:"/2018-11-13-copy-mot-object-trong-javascript"}},next:{frontmatter:{title:"Kinh nghiệm tổ chức Vuex cho ứng dụng lớn",desc:"Nếu bạn đã sử dụng thông thạo Vuex để tạo các ứng dụng be bé như ToDo list, Shopping Cart, hãy nâng trình của mình lên bằng các ứng dụng có nhiều dữ liệu hơn.",type:"post",category:null,tags:["vuejs"],date:"2018-11-10",cover:""},fields:{slug:"/2018-11-10-huong-dan-to-chuc-vuex-store-tren-du-an-lon"}}}}}});
//# sourceMappingURL=path---2018-11-11-huong-dan-two-way-data-binding-voi-vue-vuex-2e5854dde191ac242de7.js.map