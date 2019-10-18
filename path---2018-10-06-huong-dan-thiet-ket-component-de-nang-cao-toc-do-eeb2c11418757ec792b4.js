webpackJsonp([0xf588c42dadb5],{1417:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-shouldcomponentupdate-v%C3%A0-reactpurecomponent">Sử dụng <code class="language-text">shouldComponentUpdate</code> và <code class="language-text">React.PureComponent</code></a></li>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-d%E1%BB%AF-li%E1%BB%87u-immutability-%C4%91%E1%BB%83-so-s%C3%A1nh">Sử dụng dữ liệu Immutability để so sánh</a></li>\n<li><a href="#chuy%C3%AAn-bi%E1%BB%87t-h%C3%B3a-%C4%91%E1%BB%83-maintain-v%C3%A0-c%E1%BA%A3i-thi%E1%BB%87n-hi%E1%BB%87u-n%C4%83ng">Chuyên biệt hóa để maintain và cải thiện hiệu năng</a></li>\n<li><a href="#%C4%91%E1%BB%99c-l%E1%BA%ADp-tr%C3%AAn-t%E1%BB%ABng-children">Độc lập trên từng <code class="language-text">children</code></a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="sử-dụng-code-classlanguage-textshouldcomponentupdatecode-và-code-classlanguage-textreactpurecomponentcode"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-code-classlanguage-textshouldcomponentupdatecode-v%C3%A0-code-classlanguage-textreactpurecomponentcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng <code class="language-text">shouldComponentUpdate</code> và <code class="language-text">React.PureComponent</code></h1>\n<p><strong>re-render</strong> là thứ sẽ tiêu tốn công sức và chúng ta phải hạn chế nó tối đa, bằng hook <code class="language-text">shouldComponentUpdate(nextProps, nextState)</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span> <span class="token operator">||</span>\n    <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Pure component là những component chỉ dùng giá trị <code class="language-text">props</code> và <code class="language-text">state</code> để <code class="language-text">render</code>, không cần tính toán logic, nó cũng sẽ không có hook <code class="language-text">shouldComponentUpdate</code>, React sẽ dùng kiểu so sánh <strong>tương đối</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// chỉ phụ thuộc vào props và state khi render</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>width<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>width<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>rows<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Vì vậy phải đảm bảo các <code class="language-text">children</code> của một PureComponent cùng là một PureComponent, nếu không có trường hợp nó sẽ không render đúng.</p>\n<p>Ví dụ như bên dưới, 2 object này React sẽ so sánh được</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  size<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// .vs</span>\n<span class="token punctuation">{</span>\n  size<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">,</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'red\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nhưng object thế này thì thua</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  isActive<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  balance<span class="token punctuation">:</span> <span class="token string">\'1500000\'</span><span class="token punctuation">,</span>\n  picture<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token number">29</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    first<span class="token punctuation">:</span> <span class="token string">\'An\'</span><span class="token punctuation">,</span>\n    last<span class="token punctuation">:</span> <span class="token string">\'Luu\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  contact<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token function-variable function">email</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">\'123456\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      email<span class="token punctuation">:</span> <span class="token string">\'anluu@gmail\'</span><span class="token punctuation">,</span>\n      address<span class="token punctuation">:</span> <span class="token string">\'123 Sai Gon\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="sử-dụng-dữ-liệu-immutability-để-so-sánh"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-d%E1%BB%AF-li%E1%BB%87u-immutability-%C4%91%E1%BB%83-so-s%C3%A1nh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng dữ liệu Immutability để so sánh</h1>\n<p>Cách làm áp dụng ở đây tương tự như việc trả hàng hóa</p>\n<p><img src="https://uidesign.gearbest.com/gb_blog/2101-2400/2375/6-tips-about-applying-for-a-product-return-on-GearBest-Z00.jpg"></p>\n<p>Nếu gói hàng bị trả chưa khui gì cả, người bán hàng chỉ cần kiểm tra xung quanh đảm bảo gói hàng chưa bị khui thì họ sẽ xem như nó còn nguyên vẹn, không cần kiểm tra bên trong.</p>\n<p>Tương tự, nếu chúng ta dùng dữ liệu Immuatable, chúng ta có thể nhanh chóng biết được 2 object hay mảng đó có khác nhau hay không.</p>\n<p>Để biết thêm về Immutable, <a href="https://facebook.github.io/immutable-js/">đọc thêm ở đây</a></p>\n<h1 id="chuyên-biệt-hóa-để-maintain-và-cải-thiện-hiệu-năng"><a href="#chuy%C3%AAn-bi%E1%BB%87t-h%C3%B3a-%C4%91%E1%BB%83-maintain-v%C3%A0-c%E1%BA%A3i-thi%E1%BB%87n-hi%E1%BB%87u-n%C4%83ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chuyên biệt hóa để maintain và cải thiện hiệu năng</h1>\n<p>Chuyên biệt hóa là việc tách nhỏ các component ra, mỗi một component đảm nhiệm một công việc cụ thể</p>\n<p>Ví dụ, thay vì viết 1 component là <code class="language-text">ScrollingTable</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ScrollingTable</span></span>\n  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>123<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name">\n  <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value">blue</span><span class="token punctuation">"</span></span>\n  <span class="token attr-name">scrollTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>offsetTop<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Nên viết thành 2 component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">OuterScroller</span></span> <span class="token attr-name">scrollTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>offsetTop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InnerTable</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>123<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value">blue</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">OuterScroller</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h1 id="độc-lập-trên-từng-code-classlanguage-textchildrencode"><a href="#%C4%91%E1%BB%99c-l%E1%BA%ADp-tr%C3%AAn-t%E1%BB%ABng-code-classlanguage-textchildrencode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Độc lập trên từng <code class="language-text">children</code></h1>\n<p>Có thể hình dùng việc lồng ghép các component theo kiểu parent-children giống như một cái cây-thân-nhánh-lá</p>\n<p><img src="https://media.istockphoto.com/vectors/tree-background-vector-id518399734?k=6&#x26;m=518399734&#x26;s=612x612&#x26;w=0&#x26;h=qxXFy440iXG-CXB9jlC-TyWPKU0NRWLa3cGYu_-ukQI="></p>\n<p>Khi lồng ghép quá nhiều dẫn đến việc để so sánh và biết được sự khác nhau giữa <strong>cây cũ</strong> và <strong>cây mới</strong> là vô cùng tốn sức</p>\n<p>Không những vậy, các component children sẽ thay đổi thường xuyên. Lấy ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">var</span> Parent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">!==</span> nextProps<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Parent</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Parent</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Tất nhiên đây là ví dụ để bạn dễ hình dung rằng các component children thường xuyên thay đổi, việc kiểm tra <code class="language-text">shouldComponentUpdate</code> lúc này rất khó nói trước là <code class="language-text">true</code> hay <code class="language-text">false</code></p>\n<p>Khuyến khích sử dụng ContainerComponent để kết nối vào store và Component chỉ đảm nhiệm việc render HTML</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// BudgetWidgetContainer</span>\n<span class="token keyword">var</span> BudgetWidgetContainer <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">PureComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  \n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BudgetWidget</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>amount<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">&lt;BudgetWidget/&gt;</code> không quan tâm value từ đâu có, nó chỉ việc render HTML, chúng ta có thể sử dụng component như vậy ở nhiều nơi, chúng ta chỉ cần viết lại Container Component</p>\n<p><a href="https://www.youtube.com/watch?v=KYzlpRvWZ6c">Xem video gốc của bài viết</a></p>',timeToRead:4,excerpt:"Sử dụng   và  Sử dụng dữ liệu Immutability để so sánh Chuyên biệt hóa để maintain và cải thiện hiệu năng Độc lập trên từng  Sử dụng   và  re…",frontmatter:{title:"Nâng cao tốc độ Component",cover:"",date:"2018-10-06",category:null,tags:["react","performance"],desc:"Bài viết của team làm Facebook Ads chia sẽ, cùng điểm qua các vấn đề căn bản để tối ưu component"},fields:{slug:"/2018-10-06-huong-dan-thiet-ket-component-de-nang-cao-toc-do"}}},pathContext:{slug:"/2018-10-06-huong-dan-thiet-ket-component-de-nang-cao-toc-do",prev:{frontmatter:{title:"Hướng dẫn lazy load component trong React",desc:"Sự là hôm rồi đi phỏng vấn, được hỏi câu này mà mình đó giờ chưa làm nên không biết, nay có thời gian rảnh rỗi tìm hiểu, chia sẻ lại cho các bạn chưa biết.",type:"post",category:null,tags:["javascript","react","performance"],date:"2018-10-07",cover:""},fields:{slug:"/2018-10-07-huong-dan-lazy-load-component-react"}},next:{frontmatter:{title:"Giới thiệu focus",desc:"Chúng ta nói về focus và làm cách nào chúng ta sử dụng nó trong ứng dụng web",type:"post",category:null,tags:["mobile-web-specialist","ux-ui"],date:"2018-10-05",cover:""},fields:{slug:"/2018-10-05-gioi-thieu-focus"}}}}}});
//# sourceMappingURL=path---2018-10-06-huong-dan-thiet-ket-component-de-nang-cao-toc-do-eeb2c11418757ec792b4.js.map