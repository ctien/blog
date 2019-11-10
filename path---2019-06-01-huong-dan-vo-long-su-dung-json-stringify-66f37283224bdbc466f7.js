webpackJsonp([94672628334438],{1505:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#tr%C6%B0%E1%BB%9Dng-h%E1%BB%A3p-%C4%91%E1%BA%B7c-bi%E1%BB%87t-v%C3%A0-l%E1%BB%97i">Trường hợp đặc biệt và lỗi</a></li>\n<li><a href="#c%C3%A1c-tham-s%E1%BB%91-c%C3%B2n-l%E1%BA%A1i-c%E1%BB%A7a-jsonstringify">Các tham số còn lại của <code class="language-text">JSON.stringify</code></a></li>\n<li><a href="#h%C3%A0m-tojson">Hàm <code class="language-text">toJSON()</code></a></li>\n</ul>\n<!-- /TOC -->\n<p><code class="language-text">JSON.stringify</code> là hàm kinh điển để chuyển một object trong javascript sang JSON. Bài viết này sẽ nhìn lại những kiến thức vở lòng của <code class="language-text">JSON.stringify</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> answer<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \'{"answer":42}\'</span>\n<span class="token comment">// typeof str = string</span></code></pre>\n      </div>\n<p><code class="language-text">JSON.stringify</code> hay sử dụng chung với <code class="language-text">JSON.parse</code>. Đây là cách chúng ta có thể sao chép một object trong javascript (không bị dính trường hợp reference đến object cũ)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> answer<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> clone <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// clone.answer = 42</span>\n<span class="token comment">// clone !== obj</span></code></pre>\n      </div>\n<h2 id="trường-hợp-đặc-biệt-và-lỗi"><a href="#tr%C6%B0%E1%BB%9Dng-h%E1%BB%A3p-%C4%91%E1%BA%B7c-bi%E1%BB%87t-v%C3%A0-l%E1%BB%97i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Trường hợp đặc biệt và lỗi</h2>\n<p>Khi object <code class="language-text">obj</code> có 1 property mà giá trị là <code class="language-text">obj</code> (trỏ về chính nó), <code class="language-text">JSON.stringify</code> trả về một error</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\nobj<span class="token punctuation">.</span>answer <span class="token operator">=</span> obj<span class="token punctuation">;</span>\n\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// TypeError: TypeError: Converting circular structure to JSON</span></code></pre>\n      </div>\n<p>Các trường hợp đặc biệt như <code class="language-text">NaN</code> và <code class="language-text">Infinity</code>, <code class="language-text">JSON.stringify</code> sẽ chuyển về <code class="language-text">null</code>, chứ ko trả lỗi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> nan<span class="token punctuation">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'not a number\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inf<span class="token punctuation">:</span> Number<span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// \'{"nan": null, "inf": null}\'</span></code></pre>\n      </div>\n<p>Nó cũng sẽ lọc bỏ hết các property giá trị là <code class="language-text">undefined</code> hoặc function</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function-variable function">fn</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> undef<span class="token punctuation">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">// \'{}\'</span></code></pre>\n      </div>\n<h2 id="các-tham-số-còn-lại-của-code-classlanguage-textjsonstringifycode"><a href="#c%C3%A1c-tham-s%E1%BB%91-c%C3%B2n-l%E1%BA%A1i-c%E1%BB%A7a-code-classlanguage-textjsonstringifycode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Các tham số còn lại của <code class="language-text">JSON.stringify</code></h2>\n<p><code class="language-text">JSON.stringify</code> nhận vào 3 tham số, đa phần chúng ta ít biết tới 2 tham số còn lại.</p>\n<p>Tham số thứ 2 là <code class="language-text">replacer</code>, một hàm nhận vào cặp <code class="language-text">key/value</code> có thể dụng để thay đổi giá trị output sau cùng.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> d<span class="token punctuation">:</span> <span class="token punctuation">{</span> e<span class="token punctuation">:</span> <span class="token number">4</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// nếu giá trị là number, cộng thêm 1</span>\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">replacer</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \'{"a":2,"b":3,"c":4,"d":{"e":5}}\'</span></code></pre>\n      </div>\n<p>Tham số thứ 3 là <code class="language-text">spaces</code>, cho phép format lại output theo dạng dễ đọc</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> d<span class="token punctuation">:</span> <span class="token punctuation">{</span> e<span class="token punctuation">:</span> <span class="token number">4</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \'{"a":1,"b":2,"c":3,"d":{"e":4}}\'</span>\n\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'  \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kết quả tương tự</span>\n<span class="token comment">// {</span>\n<span class="token comment">//   "a": 1,</span>\n<span class="token comment">//   "b": 2,</span>\n<span class="token comment">//   "c": 3,</span>\n<span class="token comment">//   "d": {</span>\n<span class="token comment">//     "e": 4</span>\n<span class="token comment">//   }</span>\n<span class="token comment">// }</span>\n\n<span class="token comment">// Ko nhất thiết phải là dấu khoảng trắng</span>\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'__\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// {</span>\n<span class="token comment">// __"a": 1,</span>\n<span class="token comment">// __"b": 2,</span>\n<span class="token comment">// __"c": 3,</span>\n<span class="token comment">// __"d": {</span>\n<span class="token comment">// ____"e": 4</span>\n<span class="token comment">// __}</span>\n<span class="token comment">// }</span></code></pre>\n      </div>\n<p>Ví dụ như ta có thể để lọc bỏ các dữ liệu nhạy cảm như password</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Jean-Luc Picard\'</span><span class="token punctuation">,</span>\n  password<span class="token punctuation">:</span> <span class="token string">\'stargazer\'</span><span class="token punctuation">,</span>\n  nested<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    hashedPassword<span class="token punctuation">:</span> <span class="token string">\'c3RhcmdhemVy\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">replacer</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/password/i</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \'{"name":"Jean-Luc Picard","nested":{}}\'</span></code></pre>\n      </div>\n<h2 id="hàm-code-classlanguage-texttojsoncode"><a href="#h%C3%A0m-code-classlanguage-texttojsoncode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hàm <code class="language-text">toJSON()</code></h2>\n<p>Khi đi qua các property trong object, nếu bên trong object có hàm <code class="language-text">toJSON()</code>, <code class="language-text">JSON.stringify</code> dùng giá trị trả về của hàm này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Jean-Luc Picard\'</span><span class="token punctuation">,</span>\n  nested<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token string">\'not in output\'</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">toJSON</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'test\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// \'{"name":"Jean-Luc Picard","nested":"test"}\'</span></code></pre>\n      </div>\n<p>Rất nhiều thư viện sử dụng <code class="language-text">JSON.stringify()</code> kết hợp với <code class="language-text">toJSON()</code> để đảm bảo output lúc serialize ra đúng như mong muốn (như <a href="https://momentjs.com/docs/#/displaying/as-json/">Moment JS</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="http://thecodebarbarian.com/the-80-20-guide-to-json-stringify-in-javascript.html">The 80/20 Guide to JSON.stringify in JavaScript</a></p>',timeToRead:3,excerpt:"Trường hợp đặc biệt và lỗi Các tham số còn lại của  Hàm   là hàm kinh điển để chuyển một object trong javascript sang JSON. Bài viết này sẽ…",frontmatter:{title:"JSON.stringify vở lòng cho người mới",cover:"",date:"2019-06-01",category:null,tags:["javascript","hoc-thuat"],desc:"Một trong hàm kinh điển bắt buộc phải biết của mội frontend developer"},fields:{slug:"/2019-06-01-huong-dan-vo-long-su-dung-json-stringify"}}},pathContext:{slug:"/2019-06-01-huong-dan-vo-long-su-dung-json-stringify",prev:{frontmatter:{title:"Hướng dẫn tạo một package, publish nó lên npm",desc:"Nếu bạn có một package nào đó muốn chia sẽ cùng mọi người trên npm, thì đây là cách bạn publish package make-by-me như vậy lên npm",type:"post",category:null,tags:["javascript","step-by-step"],date:"2019-06-06",cover:""},fields:{slug:"/2019-06-06-huong-dan-publish-package-len-npm"}},next:{frontmatter:{title:"Giải thích Flux Pattern theo phong cách John Wick",desc:"Điểm lại các khái niệm trong Flux action, dispatch, store, điều kiện tiên quyết đề đọc bài này là nên xem lại John Wick",type:"post",category:null,tags:["react","hoc-thuat"],date:"2019-05-28",cover:"https://i.imgur.com/fbC5Rb5.jpg"},fields:{slug:"/2019-05-28-giai-thich-pattern-flux-trong-react"}}}}}});
//# sourceMappingURL=path---2019-06-01-huong-dan-vo-long-su-dung-json-stringify-66f37283224bdbc466f7.js.map