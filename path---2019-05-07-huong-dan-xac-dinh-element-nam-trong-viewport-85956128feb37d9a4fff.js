webpackJsonp([0x7ce4fcd586a7],{1525:function(n,a){n.exports={data:{markdownRemark:{html:'<p>"Nằm trong viewport" nghĩa là nó đang hiển thị bên trong phần <strong>nhìn thấy được</strong> của trình duyệt, function này cần thiết khi chúng ta cần tới lazy loading, hiệu ứng này kia.</p>\n<p>Phần quan trọng nhất của function này là dùng <code class="language-text">Element.getBoundingClientRect()</code>, nó cho chúng ta giá trị position của element so với viewport. Nó trả về một object chứa <code class="language-text">height</code>, <code class="language-text">width</code>, khoảng cách đến <code class="language-text">top</code>, <code class="language-text">right</code>, <code class="language-text">bottom</code>, <code class="language-text">left</code> với viewport</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// chọn element</span>\n<span class="token keyword">var</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'h1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// lấy position của element trên</span>\n<span class="token keyword">var</span> bounding <span class="token operator">=</span> h1<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bounding<span class="token punctuation">)</span>\n<span class="token comment">// {</span>\n<span class="token comment">//  height: 118,</span>\n<span class="token comment">//  width: 591.359375,</span>\n<span class="token comment">//  top: 137,</span>\n<span class="token comment">//  bottom: 255,</span>\n<span class="token comment">//  left: 40.3125,</span>\n<span class="token comment">//  right: 631.671875</span>\n<span class="token comment">// }</span></code></pre>\n      </div>\n<p>Nếu một element nằm trong viewport được xác định như sau</p>\n<ul>\n<li><code class="language-text">top</code>, <code class="language-text">left</code> >= 0</li>\n<li><code class="language-text">right</code> &#x3C;= độ rộng của viewport</li>\n<li><code class="language-text">bottom</code> &#x3C;= độ cao của viewport</li>\n</ul>\n<p>Để check độ rộng của viewport, chúng ta có 2 cách, một số trình duyệt hỗ trợ <code class="language-text">window.innerWidth</code>, một số khác hỗ trợ <code class="language-text">document.documentElement.clientWidth</code>, số còn lại thì support cả 2. Rắc rối nhở!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Cũng tương tự với giá trị viewport height</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Chúng ta kiểm tra xem element có nằm trong viewport không</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>\n    bounding<span class="token punctuation">.</span>top <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n    bounding<span class="token punctuation">.</span>left <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n    bounding<span class="token punctuation">.</span>right <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n    bounding<span class="token punctuation">.</span>bottom <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Trong viewport!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Không nằm trong viewport... whoa la la\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta gom lại vào một function helper để dành xài</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token function-variable function">isInViewport</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">elem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> bounding <span class="token operator">=</span> elem<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        bounding<span class="token punctuation">.</span>top <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n        bounding<span class="token punctuation">.</span>left <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>\n        bounding<span class="token punctuation">.</span>bottom <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n        bounding<span class="token punctuation">.</span>right <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Sử dụng function này, chúng ta có thể làm lazy load image</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span> <span class="token attr-name">data-image</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>url/to/my/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hình sẽ được load khi scroll tới đây..<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> image <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'[data-image]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'scroll\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInViewport</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        image<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">\'&lt;img src="\'</span> <span class="token operator">+</span> image<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'data-image\'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'">\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/">How to test if an element is in the viewport with vanilla JavaScript</a></p>',timeToRead:2,excerpt:'"Nằm trong viewport" nghĩa là nó đang hiển thị bên trong phần  nhìn thấy được  của trình duyệt, function này cần thiết khi chúng ta cần tới…',frontmatter:{title:"Kiểm tra element có nằm trong viewport không bằng javascript",cover:"",date:"2019-05-07",category:null,tags:["javascript"],desc:"Học cách viết một helper function để kiểm tra element nằm trong viewport"},fields:{slug:"/2019-05-07-huong-dan-xac-dinh-element-nam-trong-viewport"}}},pathContext:{slug:"/2019-05-07-huong-dan-xac-dinh-element-nam-trong-viewport",prev:{frontmatter:{title:"7 thủ thuật trong javascript",desc:"7 thủ thuật hữu ích trong javascript",type:"post",category:null,tags:["javascript"],date:"2019-05-12",cover:""},fields:{slug:"/2019-05-12-7-thu-thuat-trong-javascript"}},next:{frontmatter:{title:"Sử dụng try...catch đúng cách",desc:"Nhìn lại một cách cặn kẽ hơn cách chúng ta xử lý trường hợp lỗi trong javascript",type:"post",category:null,tags:["javascript"],date:"2019-05-01",cover:""},fields:{slug:"/2019-05-01-huong-dan-su-dung-try-catch-dung-cach"}}}}}});
//# sourceMappingURL=path---2019-05-07-huong-dan-xac-dinh-element-nam-trong-viewport-85956128feb37d9a4fff.js.map