webpackJsonp([0xc95acd2b3ce8],{1531:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#%C4%91i%E1%BB%81u-ki%E1%BB%87n-l%E1%BB%93ng-v%C3%A0o-nhau">Điều kiện lồng vào nhau</a></li>\n<li><a href="#arrayincludes">Array.includes</a></li>\n<li><a href="#return">return</a></li>\n<li><a href="#d%C3%B9ng-object-thay-cho-switchcase">Dùng Object thay cho switch...case</a></li>\n<li><a href="#params-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-v%C3%A0-destructuring">params mặc định và destructuring</a></li>\n<li><a href="#arrayevery-arraysome">Array.every, Array.some</a></li>\n</ul>\n<!-- /TOC -->\n<p>Một trong những <strong>món ăn</strong> mà anh em lập trình chúng ta phải nhai đi nhai lại trong suốt cuộc đời, dù là bạn đang viết ngôn ngữ gì là <strong>C U ĐIỀU KIỆN</strong>. Nếu không khéo trong lúc <strong>nấu code</strong>, thì món ngon đó đôi khi trở thành món dỡ ẹt, người sau vào ăn không thấy ngon, chúng ta tự ăn cũng không thấy ngon.</p>\n<p><em>Bài này được viết trong một chiều chủ nhật đang đói bụng</em></p>\n<h2 id="điều-kiện-lồng-vào-nhau"><a href="#%C4%91i%E1%BB%81u-ki%E1%BB%87n-l%E1%BB%93ng-v%C3%A0o-nhau" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Điều kiện lồng vào nhau</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">❌ <span class="token constant">T</span>ạm<span class="token punctuation">,</span> chưa ngon\n<span class="token keyword">let</span> result<span class="token punctuation">;</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>condition2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">return</span> result<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Có vẻ không vấn đề nhỉ? Nhưng thật ra nó sẽ chạy y chang khi chúng ta viết thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">❌ Không ngon\n<span class="token keyword">let</span> result<span class="token punctuation">;</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n   <span class="token keyword">if</span><span class="token punctuation">(</span>condition2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">return</span> result<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Du là thế nào đi nữa, gặp lồng câu điều kiện <code class="language-text">else...if...</code>  là phải tìm cách khử liền</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">✅ Chuẩn cơm mẹ nấu\n<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>condition2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="arrayincludes"><a href="#arrayincludes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Array.includes</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">❌ Không ngon\n<span class="token keyword">if</span> <span class="token punctuation">(</span> animal <span class="token operator">==</span> <span class="token string">\'dog\'</span> <span class="token operator">||</span> animal <span class="token operator">==</span> <span class="token string">\'cat\'</span> <span class="token operator">||</span> animal <span class="token operator">==</span> <span class="token string">\'turtle\'</span><span class="token punctuation">)</span>\n\n✅ Chuẩn cơm mẹ nấu\n<span class="token punctuation">[</span><span class="token string">\'cat\'</span><span class="token punctuation">,</span> <span class="token string">\'dog\'</span><span class="token punctuation">,</span> <span class="token string">\'turtle\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span>\nhoặc\n<span class="token punctuation">[</span><span class="token string">\'cat\'</span><span class="token punctuation">,</span> <span class="token string">\'dog\'</span><span class="token punctuation">,</span> <span class="token string">\'turtle\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span></code></pre>\n      </div>\n<h2 id="return"><a href="#return" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>return</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">❌ Không ngon\n<span class="token keyword">const</span> <span class="token function-variable function">printAnimalDetails</span> <span class="token operator">=</span> <span class="token parameter">animal</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> result<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>animal<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>animal<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>animal<span class="token punctuation">.</span>gender<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          result <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is a </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          result <span class="token operator">=</span> <span class="token string">"No animal gender"</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        result <span class="token operator">=</span> <span class="token string">"No animal name"</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      result <span class="token operator">=</span> <span class="token string">"No animal type"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    result <span class="token operator">=</span> <span class="token string">"No animal"</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu bạn vẫn viết code thế này thì mình cũng lại!</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">✅ Chuẩn cơm mẹ nấu\n<span class="token keyword">const</span> <span class="token function-variable function">printAnimalDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>type<span class="token punctuation">,</span> name<span class="token punctuation">,</span> gender <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>type<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">\'No animal type\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">\'No animal name\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>gender<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">\'No animal gender\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is a </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="dùng-object-thay-cho-switchcase"><a href="#d%C3%B9ng-object-thay-cho-switchcase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dùng Object thay cho switch...case</h2>\n<p>Đoạn code return loại trái cây có màu sắc như điều kiện truyền vào</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">❌ Không ngon\n<span class="token keyword">function</span> <span class="token function">printFruits</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'red\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">\'apple\'</span><span class="token punctuation">,</span> <span class="token string">\'strawberry\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'yellow\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">\'banana\'</span><span class="token punctuation">,</span> <span class="token string">\'pineapple\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'purple\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">\'grape\'</span><span class="token punctuation">,</span> <span class="token string">\'plum\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Code như trên không sai, mà nếu dùng object làm thì sẽ ngon hơn nhiều</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">✅ Chuẩn cơm mẹ nấu\n<span class="token keyword">function</span> <span class="token function">printFruits</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> fruitColor <span class="token operator">=</span> <span class="token punctuation">{</span>\n      red<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'apple\'</span><span class="token punctuation">,</span> <span class="token string">\'strawberry\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      yellow<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'banana\'</span><span class="token punctuation">,</span> <span class="token string">\'pineapple\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      purple<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'grape\'</span><span class="token punctuation">,</span> <span class="token string">\'plum\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> fruitColor<span class="token punctuation">[</span>color<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="params-mặc-định-và-destructuring"><a href="#params-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-v%C3%A0-destructuring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>params mặc định và destructuring</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">❌ Không ngon\n<span class="token keyword">function</span> <span class="token function">printVegetableName</span><span class="token punctuation">(</span><span class="token parameter">vegetable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">if</span> <span class="token punctuation">(</span>vegetable <span class="token operator">&amp;&amp;</span> vegetable<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span>vegetable<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'unknown\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">✅ Chuẩn cơm mẹ nấu\n<span class="token keyword">function</span> <span class="token function">printVegetableName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span>name <span class="token operator">||</span> <span class="token string">\'unknown\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="arrayevery-arraysome"><a href="#arrayevery-arraysome" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Array.every, Array.some</h2>\n<p>Đoạn code kiểm tra tất cả trái cây có màu đó</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">❌ Không ngon\n<span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'apple\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'red\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'banana\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'yellow\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'grape\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'purple\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> isAllRed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> f <span class="token keyword">of</span> fruits<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isAllRed<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n    isAllRed <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span>color <span class="token operator">==</span> <span class="token string">\'red\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isAllRed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Thay vì dùng vòng lặp for, có thể dùng <code class="language-text">Array.every</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isAllRed <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">f</span> <span class="token operator">=></span> f<span class="token punctuation">.</span>color <span class="token operator">==</span> <span class="token string">\'red\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isAllRed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chỉ cần vài item trong đó thỏa điều kiện là được, ta dùng <code class="language-text">Array.some</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> isAllRed <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">f</span> <span class="token operator">=></span> f<span class="token punctuation">.</span>color <span class="token operator">==</span> <span class="token string">\'red\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://dev.to/hellomeghna/tips-to-write-better-conditionals-in-javascript-2189">📜 Tips to write better Conditionals in JavaScript</a></p>',timeToRead:3,excerpt:"Điều kiện lồng vào nhau Array.includes return Dùng Object thay cho switch...case params mặc định và destructuring Array.every, Array.some…",frontmatter:{title:"Viết câu điều kiện tốt hơn trong javascript",cover:"",date:"2019-10-13",category:null,tags:["javascript"],desc:"Xem xét một trong những câu lệnh được sử dụng nhiều nhất trong lập trình: câu điều kiện"},fields:{slug:"/2019-10-13-viet-cau-dieu-kien-trong-javascript"}}},pathContext:{slug:"/2019-10-13-viet-cau-dieu-kien-trong-javascript",prev:{frontmatter:{title:"Tổng quát về viết unit test cho FE",desc:"Cái nhìn tổng quát để bạn có thể bắt đầu làm quen với test, những khái niệm, vấn đề gặp thường xuyên khi viết test",type:"post",category:null,tags:["javascript"],date:"2019-10-17",cover:""},fields:{slug:"/2019-10-17-viet-test-js"}},next:{frontmatter:{title:"Sử dụng flat state trong Vue Store",desc:"Nhét những tập dữ liệu lớn trong Vuex store, đặc biệt là các cấu trúc dữ liệu lồng nhau luôn gây ra vấn đề không sớm thì muộn. Bài viết giới thiệu cách tiếp cận với flat state trong Vuex store",type:"post",category:null,tags:["vuejs"],date:"2019-10-12",cover:""},fields:{slug:"/2019-10-12-flat-state-trong-vue-store-de-toi-uu-toc-do"}}}}}});
//# sourceMappingURL=path---2019-10-13-viet-cau-dieu-kien-trong-javascript-66a28ae010d08b3275fe.js.map