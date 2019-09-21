webpackJsonp([91247667982992],{1441:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Với Vue nó khác với React là data có thể binding two-way, không ràng buộc one-way data flow, đơn giản là khai báo <code class="language-text">v-model</code> cho dữ liệu nào muốn đồng bộ hóa, còn nếu binding một chiều thì dùng <code class="language-text">v-bind</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n// hoặc có thể viết\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>e => email = e.target.balue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<div class="note">Nghĩa là để <code>v-model</code> có thể chạy được, element hoặc component gắn nó phải nhận vào một prop (mặc định là <code>value</code>) và emit một event (mặc định là <code>input</code>)</div>\n<p>Tùy thuộc vào element, Vue sẽ dùng xử lý dữ liệu được emit, trên input type là radio , nó sẽ dùng prop checked và event là change.</p>\n<h2 id="thêm-code-classlanguage-textv-modelcode-cho-một-component-chúng-ta-tự-viết"><a href="#th%C3%AAm-code-classlanguage-textv-modelcode-cho-m%E1%BB%99t-component-ch%C3%BAng-ta-t%E1%BB%B1-vi%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thêm <code class="language-text">v-model</code> cho một component chúng ta tự viết</h2>\n<p>Chúng ta sẽ làm một component sử dụng <code class="language-text">&lt;input /&gt;</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n\t<span class="token operator">&lt;</span>input @input<span class="token operator">=</span>”handleInput” <span class="token operator">/</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\tname<span class="token punctuation">:</span> <span class="token string">"basic-input"</span><span class="token punctuation">,</span>\n\tprops<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tvalue\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      Content<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleInput</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Chỉ cần thêm props <code class="language-text">value</code> cho component là chúng ta có thể sử dụng <code class="language-text">v-model</code> trên <code class="language-text">basic-input</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="tùy-biến-code-classlanguage-textv-modelcode-prop-và-event"><a href="#t%C3%B9y-bi%E1%BA%BFn-code-classlanguage-textv-modelcode-prop-v%C3%A0-event" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tùy biến <code class="language-text">v-model</code> prop và event</h2>\n<p>Nếu nhu cầu cao hơn, chúng ta có thể không muốn dùng đến các event, prop mặc định để <code class="language-text">v-model</code> chạy được, để làm được việc ấy, thêm một property cho component tên <code class="language-text">model</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    tabilu\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  model<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    prop<span class="token punctuation">:</span> <span class="token string">"tabilu"</span><span class="token punctuation">,</span>\n    event<span class="token punctuation">:</span> <span class="token string">"blur"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleInput</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"blur"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Khi Vue nó gặp component như vầy</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Nó sẽ tự độ convert sang</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic-input</span> <span class="token attr-name">:tabilu</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>e => email = e.target.value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p><a href="https://scotch.io/tutorials/add-v-model-support-to-custom-vuejs-component" target="_blank" rel="noopener noreferrer">Add <code class="language-text">v-model</code> Support to Custom Vue.js Component</a></p>',timeToRead:2,excerpt:"Với Vue nó khác với React là data có thể binding two-way, không ràng buộc one-way data flow, đơn giản là khai báo   cho dữ liệu nào muốn…",frontmatter:{title:"Hổ trợ v-model trên một custom Vue component",cover:"",date:"2018-11-15",category:null,tags:["vuejs"],desc:"Hướng dẫn cách viết một component để có thể dùng v-model"},fields:{slug:"/2018-11-15-them-v-model-cho-vue-component-tu-viet"}}},pathContext:{slug:"/2018-11-15-them-v-model-cho-vue-component-tu-viet",prev:{frontmatter:{title:"Câu điều kiện trong javascript",desc:"Nắm vững conditional expression trong javascript để viết code sạch sẽ hơn",type:"post",category:null,tags:["javascript"],date:"2018-11-16",cover:""},fields:{slug:"/2018-11-16-cau-dieu-kien-trong-javascript-phan-nang-cao"}},next:{frontmatter:{title:"Chỉ dẫn thiết kế form từ Google",desc:"Bài này nằm trong loạt bài chuẩn kiến thức để đi thi web mobile specialist của google. Một vài đều cần nhớ khi thiết kế và làm việc với form",type:"post",category:null,tags:["ux-ui","mobile-web-specialist"],date:"2018-11-14",cover:""},fields:{slug:"/2018-11-14-chi-dan-thiet-ke-form-cua-google"}}}}}});
//# sourceMappingURL=path---2018-11-15-them-v-model-cho-vue-component-tu-viet-23c8898accff27e1917c.js.map