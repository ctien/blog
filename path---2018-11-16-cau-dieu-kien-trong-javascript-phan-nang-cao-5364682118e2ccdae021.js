webpackJsonp([71893902693764],{1384:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#ph%C3%A2n-bi%E1%BB%87t-expression-v%C3%A0-statement">Phân biệt Expression và Statement</a></li>\n<li><a href="#ph%C3%A2n-bi%E1%BB%87t-truefalse-truthyfalsy">Phân biệt <code class="language-text">true/false</code>, <code class="language-text">truthy/falsy</code></a></li>\n<li><a href="#ph%C3%A2n-bi%E1%BB%87t-to%C3%A1n-t%E1%BB%AD-and--v%C3%A0-or-">Phân biệt toán tử AND <code class="language-text">&amp;&amp;</code> và OR <code class="language-text">||</code></a></li>\n<li><a href="#thay-statement-b%E1%BA%B1ng-expression">Thay statement bằng expression</a></li>\n<li><a href="#m%E1%BB%99t-s%E1%BB%91-c%C3%A1ch-vi%E1%BA%BFt-t%E1%BA%AFt-v%C3%A0-l%C6%B0u-%C3%BD">Một số cách viết tắt và lưu ý</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="phân-biệt-expression-và-statement"><a href="#ph%C3%A2n-bi%E1%BB%87t-expression-v%C3%A0-statement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phân biệt Expression và Statement</h2>\n<p>Trước tiên chúng ta ôn lại expression và statement trong javascript.</p>\n<div class="note">An expression is any phrase that the JavaScript engine can evaluate to <strong>produce a value.</strong></div>\n<p>Expression là một đoạn code luôn trả về 1 giá trị.\nBên dưới là expression</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// number</span>\n<span class="token number">0xFF</span>\n\n<span class="token comment">// array</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n<span class="token comment">// object</span>\n<span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// regexp</span>\n<span class="token operator">/</span><span class="token operator">^</span>\\d<span class="token operator">+</span>$<span class="token operator">/</span>\n\n<span class="token comment">// logical AND operation</span>\n<span class="token punctuation">(</span>x <span class="token operator">&amp;&amp;</span> y<span class="token punctuation">)</span>\n\n<span class="token comment">// bitwise XOR operation</span>\n<span class="token punctuation">(</span>x <span class="token operator">^</span> y<span class="token punctuation">)</span>\n\n<span class="token comment">// ternary operation</span>\n<span class="token punctuation">(</span>x <span class="token operator">?</span> y <span class="token punctuation">:</span> z<span class="token punctuation">)</span>\n\n<span class="token comment">// arithmetic operation</span>\n<span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span> <span class="token operator">/</span> z\n\n<span class="token comment">// assignment</span>\nx <span class="token operator">=</span> <span class="token string">\'string\'</span>\n\n<span class="token comment">// function expression</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// function invocation</span>\n<span class="token function">x</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>\n\n<span class="token comment">// object property access</span>\nobj<span class="token punctuation">.</span>students<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name</code></pre>\n      </div>\n<div class="note">\nA statement is any sentence or command that the JavaScript engine can execute to make <strong>something happen</strong> or cause some <strong>side-effect</strong>.\n</div>\n<p>Statement là lệnh, tập lệnh thực hiện một hành động.</p>\n<p>Câu điều kiện, khai báo biến, khai báo hàm, loop, throw, try/catch/finally là  statement</p>\n<h2 id="phân-biệt-code-classlanguage-texttruefalsecode-code-classlanguage-texttruthyfalsycode"><a href="#ph%C3%A2n-bi%E1%BB%87t-code-classlanguage-texttruefalsecode-code-classlanguage-texttruthyfalsycode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phân biệt <code class="language-text">true/false</code>, <code class="language-text">truthy/falsy</code></h2>\n<p>Tất cả giá trị trong javascript đều có thể phân thành <strong>truthy</strong> hoặc <strong>falsy</strong> ( không phải true/false)</p>\n<p>Các giá trị sau được xếp vào <strong>falsy</strong></p>\n<div class="note">\n  \'\', "", ``, 0, -0, null, undefined, NaN, false\n</div>\n<p>Các giá trị còn lại được coi là <strong>truthy</strong>. Khi nào javascript cần giá trị là <code class="language-text">Boolean</code>, nó sẽ tự động đưa những giá trị trong nhóm truthy thành <code class="language-text">true</code>, nhóm falsy thành <code class="language-text">false</code></p>\n<p>Nếu không tin, bạn có thể kiểm tra</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></code></pre>\n      </div>\n<p>Hoặc bạn có thể dùng operator <code class="language-text">!!</code> để chuyển một giá trị thành boolean.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></code></pre>\n      </div>\n<h2 id="phân-biệt-toán-tử-and-code-classlanguage-textampampcode-và-or-code-classlanguage-textcode"><a href="#ph%C3%A2n-bi%E1%BB%87t-to%C3%A1n-t%E1%BB%AD-and-code-classlanguage-textampampcode-v%C3%A0-or-code-classlanguage-textcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phân biệt toán tử AND <code class="language-text">&amp;&amp;</code> và OR <code class="language-text">||</code></h2>\n<p>Operator <code class="language-text">&amp;&amp;</code> và <code class="language-text">||</code> sẽ cho kết quả là một boolean. Lưu ý là <code class="language-text">&amp;&amp;</code> sẽ ưu tiên chạy trước <code class="language-text">||</code>, nếu muốn thay đổi thứ tự ưu tiên thì phải dùng <code class="language-text">()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></code></pre>\n      </div>\n<p>2 toán tử AND và OR có một đặc điểm: thằng đứng trước luôn được tính giá trị, thằng thứ 2 có thể sẽ không được đếm xỉa luôn. </p>\n<p><code class="language-text">&amp;&amp;</code> và <code class="language-text">||</code> <strong>không phải lúc nào cũng trả về kết quả boolean</strong> (true, false), nó thích trả về gì là nó trả thôi.</p>\n<div class="note">Nếu mệnh đề đầu của <code>&&</code> nó trả về <strong>truthy</strong> nó tính kết quả và trả về mệnh đề 2, nếu mệnh đề đầu là <strong>falsy</strong> thì bỏ qua mệnh đề 2. </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// \'a\' là \'truthy\', nên \'a\' &amp;&amp; \'b\' sẽ trả về \'b\'</span>\n<span class="token punctuation">(</span><span class="token string">\'a\'</span> <span class="token operator">&amp;&amp;</span> <span class="token string">\'b\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'a\'</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token punctuation">(</span><span class="token string">\'a\'</span> <span class="token operator">&amp;&amp;</span> <span class="token string">\'b\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'b\'</span><span class="token punctuation">;</span> <span class="token comment">// true</span></code></pre>\n      </div>\n<div class="note">Nếu mệnh đề đầu của <code>||</code> trả về <strong>truthy</strong>, nó ko quan tâm đến mệnh đề 2, nếu mệnh đề đầu là <strong>falsy</strong> nó sẽ tính và trả về giá trị mệnh đề 2</div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span>a <span class="token operator">||</span> b<span class="token punctuation">)</span> <span class="token operator">===</span> a<span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token punctuation">(</span>a <span class="token operator">||</span> b<span class="token punctuation">)</span> <span class="token operator">===</span> b<span class="token punctuation">;</span> <span class="token comment">// false</span></code></pre>\n      </div>\n<h2 id="thay-statement-bằng-expression"><a href="#thay-statement-b%E1%BA%B1ng-expression" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thay statement bằng expression</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// viết kiểu statement</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>canDeletePost<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">deletePost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// viết kiểu expresion</span>\nuser <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>canDeletePost <span class="token operator">&amp;&amp;</span> <span class="token function">deletePost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Một câu if...else... đơn giản như kiểm tra độ mạnh mật khẩu</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">let</span> strength <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>password<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  strength <span class="token operator">=</span> <span class="token string">\'Strong\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  strength <span class="token operator">=</span> <span class="token string">\'Weak\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// viết kiểu expresion,</span>\n<span class="token keyword">const</span> strength <span class="token operator">=</span> <span class="token punctuation">(</span>password<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token string">\'Strong\'</span> <span class="token operator">||</span> <span class="token string">\'Weak\'</span><span class="token punctuation">;</span>\n<span class="token comment">// khuyên dùng ternary operator trong trường hợp này</span>\n<span class="token keyword">const</span> strength <span class="token operator">=</span> <span class="token punctuation">(</span>password<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">\'Strong\'</span> <span class="token punctuation">:</span> <span class="token string">\'Weak\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>ternary operator là kiểu viết thế này, nếu bạn có quên</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">condition <span class="token operator">?</span> <span class="token constant">A</span> <span class="token punctuation">:</span> <span class="token constant">B</span></code></pre>\n      </div>\n<p>Trong nhiều trường hợp như ví dụ bên dưới, việc sử dụng expression sẽ vô vùng nguy hiểm</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">let</span> xmlhttp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  <span class="token comment">// Modern browsers</span>\n  xmlhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>ActiveXObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  <span class="token comment">// Older versions of Internet Explorer (IE &lt;= 6)</span>\n  xmlhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">\'Microsoft.XMLHTTP\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu chúng ta viết bằng expression</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> xmlhttp <span class="token operator">=</span> window<span class="token punctuation">.</span>XMLHttpRequest <span class="token operator">&amp;&amp;</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token operator">||</span> window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">&amp;&amp;</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">\'Microsoft.XMLHTTP\'</span><span class="token punctuation">)</span>\n  <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Lạm dụng expression như vậy là không nên, chúng ta nên viết một cách rõ ràng hơn bằng ternary operator</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> xmlhttp <span class="token operator">=</span> window<span class="token punctuation">.</span>XMLHttpRequest\n  <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">:</span> window<span class="token punctuation">.</span>ActiveXObject\n    <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">\'Microsoft.XMLHTTP\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="một-số-cách-viết-tắt-và-lưu-ý"><a href="#m%E1%BB%99t-s%E1%BB%91-c%C3%A1ch-vi%E1%BA%BFt-t%E1%BA%AFt-v%C3%A0-l%C6%B0u-%C3%BD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Một số cách viết tắt và lưu ý</h2>\n<p>Luật De Morgan</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// là như nhau</span>\n<span class="token operator">!</span><span class="token constant">A</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token constant">B</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">||</span> <span class="token constant">B</span><span class="token punctuation">)</span>\n\n<span class="token comment">// như nhau luôn</span>\n<span class="token operator">!</span><span class="token constant">A</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token constant">B</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">B</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu <code class="language-text">A</code>, <code class="language-text">B</code>, <code class="language-text">C</code> là các giá trị Boolean</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// chuyển AND qua OR</span>\n<span class="token constant">A</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">B</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">A</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token constant">B</span><span class="token punctuation">)</span>\n\n<span class="token comment">// chuyển OR qua AND</span>\n<span class="token constant">A</span> <span class="token operator">||</span> <span class="token constant">B</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">A</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token constant">B</span><span class="token punctuation">)</span>\n\n<span class="token comment">// bỏ nested AND</span>\n<span class="token constant">A</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token constant">B</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">C</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">A</span> <span class="token operator">||</span> <span class="token constant">B</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">C</span>\n\n<span class="token comment">// bỏ nested OR</span>\n<span class="token constant">A</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token constant">B</span> <span class="token operator">||</span> <span class="token constant">C</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">A</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token constant">B</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token constant">C</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Chúng ta có ví dụ ở trên sử dụng ternary operator để giải quyết các câu if lồng vào nhau.</p>\n<p>ternary operator có độ ưu tiên thấp hơn các xử lý logic và tính toán  khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// câu này</span>\n<span class="token constant">A</span> <span class="token operator">?</span> <span class="token constant">B</span> <span class="token operator">+</span> <span class="token constant">C</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">D</span> <span class="token punctuation">:</span> <span class="token constant">E</span> <span class="token operator">||</span> <span class="token constant">F</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">G</span>\n\n<span class="token comment">// sẽ chạy theo thứ tự sao</span>\n<span class="token constant">A</span> <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token operator">+</span><span class="token constant">C</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">D</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token constant">E</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token constant">F</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">G</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu lồng nhiều ternary operator vào nhau nó sẽ chạy từ <strong>phải qua trái</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token constant">A</span> <span class="token operator">?</span> <span class="token constant">B</span> <span class="token punctuation">:</span> <span class="token constant">C</span> <span class="token operator">?</span> <span class="token constant">D</span> <span class="token punctuation">:</span> <span class="token constant">E</span> <span class="token operator">?</span> <span class="token constant">F</span> <span class="token punctuation">:</span> <span class="token constant">G</span>\n\n<span class="token comment">// sẽ chạy theo thứ tự</span>\n<span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">?</span> <span class="token constant">B</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token constant">C</span> <span class="token operator">?</span> <span class="token constant">D</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token constant">E</span> <span class="token operator">?</span> <span class="token constant">F</span> <span class="token punctuation">:</span> <span class="token constant">G</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Để thay đổi độ ưu tiên của nó trong expression chúng ta phải dùng dấu <code class="language-text">()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// expresion</span>\n<span class="token constant">A</span> <span class="token operator">?</span> <span class="token constant">B</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token constant">C</span> <span class="token operator">?</span> <span class="token constant">D</span> <span class="token punctuation">:</span> <span class="token constant">E</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">F</span> <span class="token punctuation">:</span> <span class="token constant">G</span>\n\n<span class="token comment">// ưu tiên chạy sẽ là</span>\n<span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">?</span> <span class="token constant">B</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token constant">C</span> <span class="token operator">?</span> <span class="token constant">D</span> <span class="token punctuation">:</span> <span class="token constant">E</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">F</span> <span class="token punctuation">:</span> <span class="token constant">G</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Rất vui là bạn cũng đọc được tới đây của bài viết, nếu bạn đã hiểu hết những gì mình trình bày, Bravo, bạn là chuyên gia rồi, nếu chưa hiểu hết bạn nên đọc lại vài lần vì cách viết câu điều kiện và hiểu cách nó chạy như thế nào, thứ tự ra sao là kiến thức cực kỳ quan trọng để bạn đọc hiểu đưọc những đoạn code quá xá phức tạp của mấy bác Senior</p>\n<p><a href="https://hackernoon.com/conditional-javascript-for-experts-d2â456è67c" target="_blank" rel="noopener noreferrer">Conditional JavaScript for Experts</a></p>',timeToRead:6,excerpt:"Phân biệt Expression và Statement Phân biệt  ,  Phân biệt toán tử AND   và OR  Thay statement bằng expression Một số cách viết tắt và lưu ý…",frontmatter:{title:"Câu điều kiện trong javascript",cover:"",date:"2018-11-16",category:null,tags:["javascript"],desc:"Nắm vững conditional expression trong javascript để viết code sạch sẽ hơn"},fields:{slug:"/2018-11-16-cau-dieu-kien-trong-javascript-phan-nang-cao"}}},pathContext:{slug:"/2018-11-16-cau-dieu-kien-trong-javascript-phan-nang-cao",prev:{frontmatter:{title:"Viết animation cho Vue Component",desc:"Làm một số animation đơn giản bằng công cụ có sẵn của Vue",type:"post",category:null,tags:["vuejs"],date:"2018-11-17",cover:""},fields:{slug:"/2018-11-17-huong-dan-lam-animation-voi-vue-component"}},next:{frontmatter:{title:"Hổ trợ v-model trên một custom Vue component",desc:"Hướng dẫn cách viết một component để có thể dùng v-model",type:"post",category:null,tags:["vuejs"],date:"2018-11-15",cover:""},fields:{slug:"/2018-11-15-them-v-model-cho-vue-component-tu-viet"}}}}}});
//# sourceMappingURL=path---2018-11-16-cau-dieu-kien-trong-javascript-phan-nang-cao-5364682118e2ccdae021.js.map