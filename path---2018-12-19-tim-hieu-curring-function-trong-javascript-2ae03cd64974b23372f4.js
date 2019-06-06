webpackJsonp([56616045361135],{1400:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#th%E1%BA%BF-n%C3%A0o-g%E1%BB%8Di-l%C3%A0-carrying">Thế nào gọi là Carrying?</a></li>\n<li><a href="#currying-c%C3%B3-h%E1%BB%AFu-d%E1%BB%A5ng-kh%C3%B4ng">Currying có hữu dụng không?</a></li>\n<li><a href="#chuy%E1%BB%83n-b%E1%BA%A5t-c%E1%BB%A9-h%C3%A0m-n%C3%A0o-th%C3%A0nh-h%C3%A0m-currying">Chuyển bất cứ hàm nào thành hàm Currying</a></li>\n</ul>\n<!-- /TOC -->\n<p>Bạn sẽ gặp kiểu lập trình truyền vào <strong>function như một argument</strong> (callback) cho một function khác không chỉ trong Javascript mà còn có thể thấy ở Haskell, Clojure, Erlang và Scala</p>\n<p>Việc sử dụng function như một argument đẻ ra thêm một số khái niệm khác: <strong>Pure function*, **Currying</strong>, <strong>Higher-Order Function</strong></p>\n<h2 id="thế-nào-gọi-là-carrying"><a href="#th%E1%BA%BF-n%C3%A0o-g%E1%BB%8Di-l%C3%A0-carrying" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thế nào gọi là Carrying?</h2>\n<p>Thay vì truyền vào cho function 1 lúc nhiều argument, chúng ta lại chuyển kiểu viết đó thành 1 function chỉ nhận 1 argument, nhưng bên trong đó chúng ta lòng các function con bên trong, và return về function con này.</p>\n<p>Ví dụ cho dễ hiểu hé. Đây là kiểu viết truyền nhiều argument ai cũng biết.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">*</span> c<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span></code></pre>\n      </div>\n<p>Đây là phiên bản <em>cà-ry</em> của function <code class="language-text">multiply</code> ở trên, kết quả cuối cùng cũng ko thay đổi.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">*</span> c\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span></code></pre>\n      </div>\n<p>Bạn có thể chửi viết chi mà phức con mẹ nó tạp vậy, callback hell. Nhưng lợi ích của nó là giúp chúng ta gọi được hàm multiply theo kiểu <code class="language-text">multiply(1)(2)(3)</code> thay vì `multiply(1,2,3). Vẫn chưa thấy lợi ích? Hy vọng viết thế này bạn sẽ thấy được công năng của nó</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> mul1 <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> mul2 <span class="token operator">=</span> <span class="token function">mul1</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">mul2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// result : 6</span></code></pre>\n      </div>\n<p>Tận dụng scope mà <code class="language-text">mul2</code> có thể truy xuất đến kết quả của <code class="language-text">mul1</code>. Dù đã được gọi nhưng kết quả của <code class="language-text">multiply</code> sẽ ko <em>chết liền</em> mà vẫn tồn tại cho đến khi chạy đến lần gọi sau cùng.</p>\n<p>Bạn cũng có thể viết Currying function theo kiểu sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">volume</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">*</span> c\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">volume</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">volume</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">390</span><span class="token punctuation">,</span><span class="token number">320</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">volume</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">940</span><span class="token punctuation">,</span><span class="token number">340</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="currying-có-hữu-dụng-không"><a href="#currying-c%C3%B3-h%E1%BB%AFu-d%E1%BB%A5ng-kh%C3%B4ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Currying có hữu dụng không?</h2>\n<p>Thí dụ bạn có một hàm để tính giá trị discount, giảm ngay 10% cho khách hàng thân thiết.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> discount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> price <span class="token operator">*</span> discount\n<span class="token punctuation">}</span>\n<span class="token comment">// Giảm ngay 50 đồng khi khách hàng đã tiêu 500 đồng.</span>\n<span class="token keyword">const</span> price <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">0.10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $50 </span>\n<span class="token comment">// $500  - $50 = $450</span></code></pre>\n      </div>\n<p>Khách hàng tiêu tiền điên cuồng, chúng ta gọi hàm này say mê</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> price <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">1500</span><span class="token punctuation">,</span><span class="token number">0.10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $150</span>\n<span class="token comment">// $1,500 - $150 = $1,350</span>\n<span class="token keyword">const</span> price <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span><span class="token number">0.10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $200</span>\n<span class="token comment">// $2,000 - $200 = $1,800</span>\n<span class="token keyword">const</span> price <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">0.10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $5</span>\n<span class="token comment">// $50 - $5 = $45</span>\n<span class="token keyword">const</span> price <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span><span class="token number">0.10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $500</span>\n<span class="token comment">// $5,000 - $500 = $4,500</span>\n<span class="token keyword">const</span> price <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">0.10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $30</span>\n<span class="token comment">// $300 - $30 = $270</span></code></pre>\n      </div>\n<p>Chúng ta có thể đưa vào giá trị discount ở lần đầu tiên, đến các lần gọi tiếp theo, chúng ta ko cần truyền giá trị 10% này nữa</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token parameter">discount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> price <span class="token operator">*</span> discount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> tenPercentDiscount <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">tenPercentDiscount</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// $50</span>\n<span class="token keyword">const</span> twentyPercentDiscount <span class="token operator">=</span> <span class="token function">discount</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">twentyPercentDiscount</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>\n<span class="token comment">// $500 - $100 = $400</span>\n<span class="token function">twentyPercentDiscount</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1000</span>\n<span class="token comment">// $5,000 - $1,000 = $4,000</span>\n<span class="token function">twentyPercentDiscount</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200000</span>\n<span class="token comment">// $1,000,000 - $200,000 = $600,000</span></code></pre>\n      </div>\n<p>Nói một cách ngắn gọn, khi cần truyền vào 1 argument ít thay đổi, cố định trong đa số các trường hợp, nghĩ đến carrying.</p>\n<h2 id="chuyển-bất-cứ-hàm-nào-thành-hàm-currying"><a href="#chuy%E1%BB%83n-b%E1%BA%A5t-c%E1%BB%A9-h%C3%A0m-n%C3%A0o-th%C3%A0nh-h%C3%A0m-currying" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chuyển bất cứ hàm nào thành hàm Currying</h2>\n<p>Chúng ta sẽ viết một cái hàm, nhiệm vụ của nó là biến một hàm bất kỳ và trả về một phiên bản currying  của function đó.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>_arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>_arg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Giải thích hàm này nha, hàm <code class="language-text">curry</code> này nhận vào argument đầu tiên là một function, các argument tiếp theo sẽ là giá trị số. Sử dụng với hàm <code class="language-text">multiply</code> ban đầu</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">*</span> c<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// phiên bản currying</span>\n<span class="token keyword">const</span> multiplyCurrying <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>multiply<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">multiplyCurrying</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">multiplyCurrying</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339">Understanding currying in javascript</a></p>',timeToRead:4,excerpt:"Thế nào gọi là Carrying? Currying có hữu dụng không? Chuyển bất cứ hàm nào thành hàm Currying Bạn sẽ gặp kiểu lập trình truyền vào  function…",frontmatter:{title:"Tìm hiểu Currying function trong Javascript",cover:"",date:"2018-12-19",category:null,tags:["javascript"],desc:"Bài viết này chúng ta sẽ tìm hiểu về cái cà-ri này, nó chạy ra sao, hữu dụng thế nào."},fields:{slug:"/2018-12-19-tim-hieu-curring-function-trong-javascript"}}},pathContext:{slug:"/2018-12-19-tim-hieu-curring-function-trong-javascript",prev:{frontmatter:{title:"Viết component gọn gàng hơn với Computed Setter",desc:"Một gợi ý để sử dụng computed setter với các dữ liệu bên ngoài component như Vuex",type:"post",category:null,tags:["vuejs"],date:"2018-12-20",cover:""},fields:{slug:"/2018-12-20-su-dung-computed-setter-voi-vuex"}},next:{frontmatter:{title:"this.setState trong React chạy như thế nào",desc:"Giải đáp thắc mắc vì sao this.setState có thể update DOM, chạy được trên mobile, chạy được trên bất kỳ môi trường nào",type:"post",category:null,tags:["react"],date:"2018-12-12",cover:""},fields:{slug:"/2018-12-12-setstate-chay-nhu-the-nao"}}}}}});
//# sourceMappingURL=path---2018-12-19-tim-hieu-curring-function-trong-javascript-2ae03cd64974b23372f4.js.map