webpackJsonp([62501304217952],{1588:function(n,a){n.exports={data:{markdownRemark:{html:'<h2 id="1"><a href="#1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1</h2>\n<p>Kết quả của <code class="language-text">typeof a</code> và <code class="language-text">typeof b</code> trong đoạn code sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> a <span class="token operator">=</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  a<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> a<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">typeof</span> a<span class="token punctuation">;</span> <span class="token comment">// => ???</span>\n<span class="token keyword">typeof</span> b<span class="token punctuation">;</span> <span class="token comment">// => ???</span></code></pre>\n      </div>\n<p>Đáp án</p>\n<p>Lắc léo là ở chổ <code class="language-text">let a = b = 0</code>. Câu này khai báo một biến cục bộ <code class="language-text">a</code>, <strong>đồng thời khai báo một biến toàn cục <code class="language-text">b</code></strong></p>\n<p>Vì không có một khai báo nào của <code class="language-text">b</code>, javascript tự hiểu b chính là <code class="language-text">window.b = 0</code> 😂😂</p>\n<p>Trường hợp này gọi là <em>vô tình</em> tạo ra một biến toàn cục, sự <em>vô tình</em> này còn có thể thấy ở</p>\n<p><img src="https://dmitripavlutin.com/static/41b7ea0d888dd9b298e41b9ff9bf4590/a8429/accitental-global-variables.webp"></p>\n<p>Trình duyệt sẽ  chạy đoạn code trên như thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">let</span> a<span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  window<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  a <span class="token operator">=</span> window<span class="token punctuation">.</span>b<span class="token punctuation">;</span>\n</span>  a<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> a<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>✅ Kết quả</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">typeof</span> a<span class="token punctuation">;</span>        <span class="token comment">// => \'undefined\'</span>\n<span class="token keyword">typeof</span> window<span class="token punctuation">.</span>b<span class="token punctuation">;</span> <span class="token comment">// => \'number\'</span></code></pre>\n      </div>\n<h2 id="2"><a href="#2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2</h2>\n<p>Giá trị của <code class="language-text">clothes[0]</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> clothes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'jacket\'</span><span class="token punctuation">,</span> <span class="token string">\'t-shirt\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nclothes<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\nclothes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// => ???</span></code></pre>\n      </div>\n<p>Lắc léo ở giá trị <code class="language-text">length</code> của một array là một giá trị đặc biệt, đặc biệt ở chổ nó tạo ra side-effect, nếu thay đổi giá trị này sẽ ảnh hưởng trực tiếp đến array đó. 😂😂</p>\n<p>Trong trường hợp trên, với việc <code class="language-text">clothes.length = 0</code> chúng ta đã xóa toàn bộ item trong array clothes</p>\n<p>✅ Kết quả <code class="language-text">clothes[0]</code> là <code class="language-text">undefined</code></p>\n<h2 id="3"><a href="#3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3</h2>\n<p>Nội dung của array <code class="language-text">numbers</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">{</span>\n  numbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nnumbers<span class="token punctuation">;</span> <span class="token comment">// => ???</span></code></pre>\n      </div>\n<p>Lắc léo là ở chổ <code class="language-text">;</code>, nếu bạn ko để ý kỹ.</p>\n<p><img src="https://dmitripavlutin.com/static/edd9c7bd7fa83cc909f5b7694686bdfd/89df5/for-and-null-statement-pitfall-4.png" alt="The null statement effect"></p>\n<p>Đoạn <code class="language-text">for</code> chạy 4 lần mà không làm gì cả vì <code class="language-text">;</code> 😂😂</p>\n<p>Trình duyệt sẽ chạy theo kiểu</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> i<span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// does nothing</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">// a simple block</span>\n  numbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nnumbers<span class="token punctuation">;</span> <span class="token comment">// => [5]</span></code></pre>\n      </div>\n<p>✅ Kết quả <code class="language-text">numbers</code> chỉ gồm 1 phần tử với giá trị bằng 5</p>\n<p><em>Câu chuyện có thật, tác giả bài viết này bị chấm rớt bởi câu phỏng vấn này, lý do được đưa ra rất hợp lý: Chúng tôi cần những người cẩn thận và chi tiết</em></p>\n<h2 id="4"><a href="#4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4</h2>\n<p>Giá trị trả về của <code class="language-text">arrayFromValue()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">arrayFromValue</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span>\n    <span class="token punctuation">[</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">arrayFromValue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => ???</span></code></pre>\n      </div>\n<p>Rất nhiều người sẽ không nghĩ rằng việc xuống dòng giữa <code class="language-text">return</code> và <code class="language-text">[items]</code> ảnh hưởng gì tới kết quả cuối cùng.</p>\n<p>Javascript tự động thêm dấu <code class="language-text">;</code> vào sau câu <code class="language-text">return</code> 😂😂</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">arrayFromValue</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">return</span><span class="token punctuation">;</span>  \n</span>  <span class="token punctuation">[</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">arrayFromValue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => undefined</span></code></pre>\n      </div>\n<p>✅ Kết quả của <code class="language-text">arrayFromValue(10)</code> là <code class="language-text">undefined</code></p>\n<h2 id="5"><a href="#5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5</h2>\n<p>Kết quả của <code class="language-text">console.log</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> i<span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token punctuation">}</span>\n</span>  <span class="token function">setTimeout</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu câu trả lời của bạn là 0, 1, 2 thì xin chúc mừng, bạn đã sai. 😂😂</p>\n<p>Có 2 quá trình xảy ra với đoạn code trên, lắc léo là ở chổ <code class="language-text">setTimeout</code></p>\n<p><strong>Quá trình 1</strong></p>\n<ol>\n<li><code class="language-text">for()</code> chạy 3 lần. Mỗi lần chạy nó tạo ra một hàm <code class="language-text">log()</code>, nhận giá trị <code class="language-text">i</code>, sau đó <code class="language-text">setTimeout()</code> đưa hàm nào vào queue để chạy sau (xem thêm về event loop để hiểu cái queue này)</li>\n<li>Khi vòng lặp <code class="language-text">for()</code> kết thúc, giá trị <code class="language-text">i</code> đang là 3</li>\n</ol>\n<p><strong>Quá trình 2</strong></p>\n<p>Sau 100ms, nó thực hiện bước 2, 3 hàm <code class="language-text">log()</code> đã đưa vào queue sẽ lần lượt được gọi, lúc này này <code class="language-text">i</code> đang là 3</p>\n<p>✅ Kết quả log ra là 3, 3, 3</p>\n<h2 id="6"><a href="#6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6</h2>\n<p>Kết quả của so sánh</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span> <span class="token comment">// => ???</span></code></pre>\n      </div>\n<p>Trước tiên, xem giá trị của phép cộng <code class="language-text">0.1 + 0.2</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">;</span> <span class="token comment">// => 0.30000000000000004</span></code></pre>\n      </div>\n<p>😂😂Javascript không cho kết quả <code class="language-text">0.3</code> ! 😂😂</p>\n<p>Cái sự tình này xảy ra là giá trị <strong>thập phân</strong> khi chuyển về nhị phân không thực sự chính xác</p>\n<p>✅ Nên <code class="language-text">0.1 + 0.2 === 0.3</code> sẽ là <code class="language-text">false</code></p>\n<h2 id="7"><a href="#7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7</h2>\n<p>Chuyện gì xảy ra khi truy cập <code class="language-text">myVar</code> và <code class="language-text">myConst</code> trước khi khai báo</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="gatsby-highlight-code-line">myVar<span class="token punctuation">;</span>   <span class="token comment">// => ???</span>\n</span><span class="gatsby-highlight-code-line">myConst<span class="token punctuation">;</span> <span class="token comment">// => ???</span>\n</span>\n<span class="token keyword">var</span> myVar <span class="token operator">=</span> <span class="token string">\'value\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> myConst <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><img src="https://dmitripavlutin.com/static/670c31f21f45e9b8a453e726293f4de0/a8429/temporal-dead-zone-and-hoisting-javascript.webp"></p>\n<p>✅ Hoisting và temporal dead zone là 2 khái niệm quan trọng ảnh hưởng tới vòng đời của một biến trong javascript</p>\n<p>Truy cập vào <code class="language-text">myVar</code> trước khi khai báo sẽ trả về <code class="language-text">undefined</code>, nếu khai báo bằng <code class="language-text">var</code></p>\n<p>Tuy nhiên, nếu truy cập <code class="language-text">myConst</code> trước khi khai báo sẽ trả về <code class="language-text">ReferenceError</code>, nếu khai báo bằng <code class="language-text">const</code>, nó sẽ nằm trong khu vực <strong>temporal dead zone</strong>, không ai giải quyết cho đến khi có người nhận trách nhiệm.</p>\n<h2 id="kết-luận"><a href="#k%E1%BA%BFt-lu%E1%BA%ADn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết luận</h2>\n<p>Bạn sẽ thắc mắc, có những câu hỏi chả bao giờ sử dụng trong quá trình làm việc, mình cũng có cảm giác tương tự như vậy khi được hỏi những câu lắc léo thế này. Nhưng thực tế vẫn bị hỏi khi phỏng vấn.</p>\n<p>Các bạn có nghĩ những câu hỏi <em>lắc léo</em> như vậy có cần thiết trong lúc phỏng vấn không? Viết bình luận ở dưới nhé.</p>\n<p><a href="https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/">7 Simple but Tricky JavaScript Interview Questions</a></p>',timeToRead:4,excerpt:"1 Kết quả của   và   trong đoạn code sau Đáp án Lắc léo là ở chổ  . Câu này khai báo một biến cục bộ  ,  đồng thời khai báo một biến toàn…",frontmatter:{title:"7 Câu hỏi phỏng vấn lắc léo với Javascript",cover:"https://dmitripavlutin.com/static/c4adb4f5373b24b71c1a3c87c806e39c/26b3e/people-at-interview.webp",date:"2019-10-18",category:null,tags:["javascript"],desc:"Thử kiến thức javascript của bạn đã đủ cho cuộc phỏng vấn cam go sắp tới chưa"},fields:{slug:"/2019-10-18-7-cau-hoi-phong-van-lac-leo-voi-js"}}},pathContext:{slug:"/2019-10-18-7-cau-hoi-phong-van-lac-leo-voi-js",prev:{frontmatter:{title:"Những ứng dụng tuyệt vời của Renderless component trong Vue",desc:"Để tái sử dụng component trong Vue mà không biết tới slot thì quá thiếu sót. Một vài ví dụ để bạn sử dụng slot nhiều hơn.",type:"post",category:null,tags:["vuejs"],date:"2019-10-20",cover:""},fields:{slug:"/2019-10-20-huong-dan-ung-dung-tuyet-voi-cua-vue-renderless-component"}},next:{frontmatter:{title:"Tổng quát về viết unit test cho FE",desc:"Cái nhìn tổng quát để bạn có thể bắt đầu làm quen với test, những khái niệm, vấn đề gặp thường xuyên khi viết test",type:"post",category:null,tags:["javascript"],date:"2019-10-17",cover:""},fields:{slug:"/2019-10-17-viet-test-js"}}}}}});
//# sourceMappingURL=path---2019-10-18-7-cau-hoi-phong-van-lac-leo-voi-js-6323b48199d7f5f98de9.js.map