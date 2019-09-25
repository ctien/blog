webpackJsonp([87167837510505],{1436:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Mình đã có bài giới thiệu về <a href="/2017-10-20-react-lifecycle-la-gi">lifecycle hook của React Component</a>, Vue component cũng có lifecycle hook, biết hết các hook cơ bản là quan trọng vì sớm muộn chúng ta cũng muốn chạy một số đoạn code khi component được thêm vào DOM, được update, hoặc xóa.</p>\n<p><img src="https://d33wubrfki0l68.cloudfront.net/435786c6cbd23e078c35c2b21f40e1756b2c3d30/2098f/images/vuejs/external/component-lifecycle.png" alt="Giới thiệu lifecycle hook của Vue JS"></p>\n<p>Chúng ta có thể nhóm nó theo</p>\n<!-- TOC -->\n<ul>\n<li><a href="#1-kh%E1%BB%9Fi-t%E1%BA%A1o">1. Khởi tạo</a></li>\n<li><a href="#2-ch%C3%A8n-v%C3%A0o-dom">2. Chèn vào DOM</a></li>\n<li><a href="#3-c%E1%BA%ADp-nh%E1%BA%ADp">3. Cập nhập</a></li>\n<li><a href="#4-x%C3%B3a">4. Xóa</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="1-khởi-tạo"><a href="#1-kh%E1%BB%9Fi-t%E1%BA%A1o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Khởi tạo</h2>\n<p>Các hook xảy ra trước khi component được chèn vào DOM, khác với các hook khác, những hook thuộc nhóm này sẽ chạy trong quá trình server-side render. Chúng ta cũng không truy cập được DOM và <code class="language-text">this.$el</code> trong đây</p>\n<p><code class="language-text">beforeCreate</code></p>\n<p>Sự kiện xảy ra khi mới vừa khởi tạo component, <code class="language-text">data</code> chưa khởi tạo, và các sự kiện chưa được setup</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t<span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Không ai chạy trước mình đâu!\'</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">created</code></p>\n<p>Có thể truy xuất đến <code class="language-text">data</code> và <code class="language-text">events</code>. Template và Virtual DOM chưa được mount và render</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      property<span class="token punctuation">:</span> <span class="token string">\'Blank\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  computed<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token function">propertyComputed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Thay đổi khi this.property thay đổi\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>property<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>property <span class="token operator">=</span> <span class="token string">\'Giá trị property mới\'</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'propertyComputed sẽ update vì this.property đã thay đổi\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="2-chèn-vào-dom"><a href="#2-ch%C3%A8n-v%C3%A0o-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Chèn vào DOM</h2>\n<p>Các hook được sử dụng thường xuyên nhất. Cho phép truy cập lúc component ngay trước và sau lần render đầu tiên, tất nhiên nó sẽ không chạy lúc server render</p>\n<p>Không nên sử dụng trong trường hợp muốn fetch dữ liệu cho component lúc khởi tạo. Thay vào đó dùng <code class="language-text">created</code> ( hoặc <code class="language-text">created</code> + <code class="language-text">activated</code> cho component <code class="language-text">keep-alive</code> )</p>\n<p><code class="language-text">beforeMount</code></p>\n<p>Ngay trước lần render đầu tiên và sau khi template hoặc render function được compile. Thường thì rất chẳng ai đụng đến hook này.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t<span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'this.$el chưa tồn tại\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">mounted</code></p>\n<p>Chúng ta có thể truy cập tất cả, cũng là hook được sử dụng nhiều nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>text here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n\t<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// text here</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="3-cập-nhập"><a href="#3-c%E1%BA%ADp-nh%E1%BA%ADp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Cập nhập</h2>\n<p>Các hook sẽ được gọi khi component được re-render.</p>\n<p>Không nên sử dụng các hook này nếu muốn biết các reactive property nào trên component đã thay đổi. Thay vào đó hãy sử dụng <code class="language-text">computed</code> và <code class="language-text">watch</code></p>\n<p><code class="language-text">beforeUpdate</code></p>\n<p>Sau khi data thay đổi, trước khi render lại component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\tcounter<span class="token punctuation">:</span> <span class="token number">0</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setInterval</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">updated</code></p>\n<p>Sau khi component đã re-render</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dom-element<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span> counter <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\tcounter<span class="token punctuation">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// gọi mỗi giây</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">\'dom-element\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setInterval</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="4-xóa"><a href="#4-x%C3%B3a" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Xóa</h2>\n<p><code class="language-text">beforeDestroy</code></p>\n<p>Trước khi destroy</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      someLeakyProperty<span class="token punctuation">:</span> <span class="token string">\'Em sẽ sử dụng hết bộ nhớ luôn!\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>someLeakyProperty <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>someLeakyProperty\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">destroyed</code></p>\n<p>Sau khi đã destroy</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Chẳng bao giờ xài cái này</span>\n    MyCreepyAnalyticsService<span class="token punctuation">.</span><span class="token function">informService</span><span class="token punctuation">(</span><span class="token string">\'Mọi dấu vết đã được xóa\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Ngoài ra, component <code class="language-text">keep-alive</code> còn có 2 hook khác là <code class="language-text">activated</code> và <code class="language-text">deactivated</code></p>\n<p><a href="https://alligator.io/vuejs/component-lifecycle/" target="_blank" rel="noopener noreferrer">Understanding Vue.js Lifecycle Hooks</a></p>',timeToRead:3,excerpt:"Mình đã có bài giới thiệu về  lifecycle hook của React Component , Vue component cũng có lifecycle hook, biết hết các hook cơ bản là quan…",frontmatter:{title:"Giới thiệu lifecycle hook của Vue JS",cover:"",date:"2018-11-07",category:null,tags:["vuejs"],desc:"Giới thiệu nhanh gọn lẹ cho bạn nào chưa biết"},fields:{slug:"/2018-11-07-gioi-thieu-lifecycle-method-vuejs"}}},pathContext:{slug:"/2018-11-07-gioi-thieu-lifecycle-method-vuejs",prev:{frontmatter:{title:"Giới thiệu Vuex cho người mới bắt đầu",desc:"Mình không giới thiệu cụ thể từng phần trong Vuex, các bạn cần nắm redux store của React để hiểu được bài này, các khái niệm và nguyên tắc gần như là giống nhau, khác cách đặt tên thôi.",type:"post",category:null,tags:["vuejs"],date:"2018-11-08",cover:""},fields:{slug:"/2018-11-08-gioi-thieu-vuex-cho-nguoi-moi-bat-dau"}},next:{frontmatter:{title:"Chia sẻ của lead team React Native trong quá trình lập team React Native",desc:"Bài viết sẽ phù hợp với founder của một startup, hoặc CTO. Bài viết này là chia sẻ của một team lead đang làm React Native, khía cạnh kỹ thuật cũng như cách tổ chức một team.",type:"post",category:null,tags:["react-native"],date:"2018-11-06",cover:""},fields:{slug:"/2018-11-06-react-native-lap-team-nhu-the-nao"}}}}}});
//# sourceMappingURL=path---2018-11-07-gioi-thieu-lifecycle-method-vuejs-d9a486bcefc26e1dea84.js.map