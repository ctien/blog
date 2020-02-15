webpackJsonp([0x9d7c03838cfc],{1552:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Khi đọc tài liệu trên <a href="https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">MDN về Array.prototype.reduce()</a> chúng ta sẽ có cái nhìn khá tổng quát về <code class="language-text">.reduce()</code>, những ví dụ cộng, nhân số cơ bản để chúng ta dễ nắm cách hàm <code class="language-text">.reduce()</code> chạy. Tuy nhiên vì nó quá căn bản, nên bạn sẽ không thể thấy hết được sự <strong>lợi hại</strong> của <code class="language-text">.reduce()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> sampleArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> sum <span class="token operator">=</span> sampleArray<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Tổng:\'</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ⦘ Tổng: 10</span>\n\n<span class="token keyword">const</span> product <span class="token operator">=</span> sampleArray<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>multiply<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Nhân lại bằng:\'</span><span class="token punctuation">,</span> product<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ⦘ Nhân lại bằng: 24</span></code></pre>\n      </div>\n<p>Có thể nhiều người không để ý, biến tích lũy (accumulator = tham số đầu tiên) và giá trị hiện tại (tham số thứ 2) không nhất thiết phải giống nhau.</p>\n<p>Chúng ta có thể khai báo một hàm reducer như sau là hoàn toàn hợp lệ</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">fizzBuzzReducer</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">%</span> <span class="token number">15</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>acc<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Fizz Buzz\\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>acc<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Fizz\\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>acc<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Buzz\\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>acc<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span>\n    <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>fizzBuzzReducer<span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Với bài viết này chúng ta cũng xem xét những ứng dụng khác, <strong>cao cấp</strong> hơn của <code class="language-text">.reduce()</code>, sử dụng việc thay đổi <em>kiểu</em> của biến tích lũy như ví dụ trên, mở ra nhiều ứng dụng bảo đảm là <strong>hay</strong></p>\n<h2 id="chuyển-một-array-sang-object"><a href="#chuy%E1%BB%83n-m%E1%BB%99t-array-sang-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chuyển một array sang object</h2>\n<p>Chúng ta có một array thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> peopleArr  <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        username<span class="token punctuation">:</span>    <span class="token string">\'glestrade\'</span><span class="token punctuation">,</span>\n        displayname<span class="token punctuation">:</span> <span class="token string">\'Inspector Lestrade\'</span><span class="token punctuation">,</span>\n        email<span class="token punctuation">:</span>       <span class="token string">\'glestrade@met.police.uk\'</span><span class="token punctuation">,</span>\n        authHash<span class="token punctuation">:</span>    <span class="token string">\'bdbf9920f42242defd9a7f76451f4f1d\'</span><span class="token punctuation">,</span>\n        lastSeen<span class="token punctuation">:</span>    <span class="token string">\'2019-05-13T11:07:22+00:00\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        username<span class="token punctuation">:</span>    <span class="token string">\'mholmes\'</span><span class="token punctuation">,</span>\n        displayname<span class="token punctuation">:</span> <span class="token string">\'Mycroft Holmes\'</span><span class="token punctuation">,</span>\n        email<span class="token punctuation">:</span>       <span class="token string">\'mholmes@gov.uk\'</span><span class="token punctuation">,</span>\n        authHash<span class="token punctuation">:</span>    <span class="token string">\'b4d04ad5c4c6483cfea030ff4e7c70bc\'</span><span class="token punctuation">,</span>\n        lastSeen<span class="token punctuation">:</span>    <span class="token string">\'2019-05-10T11:21:36+00:00\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        username<span class="token punctuation">:</span>    <span class="token string">\'iadler\'</span><span class="token punctuation">,</span>\n        displayname<span class="token punctuation">:</span> <span class="token string">\'Irene Adler\'</span><span class="token punctuation">,</span>\n        email<span class="token punctuation">:</span>       <span class="token keyword">null</span><span class="token punctuation">,</span>\n        authHash<span class="token punctuation">:</span>    <span class="token string">\'319d55944f13760af0a07bf24bd1de28\'</span><span class="token punctuation">,</span>\n        lastSeen<span class="token punctuation">:</span>    <span class="token string">\'2019-05-17T11:12:12+00:00\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu cần chuyển nó qua dạng object, lấy giá trị <code class="language-text">username</code> làm key</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">keyByUsernameReducer</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>acc<span class="token punctuation">,</span> <span class="token punctuation">[</span>person<span class="token punctuation">.</span>username<span class="token punctuation">]</span><span class="token punctuation">:</span> person <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> peopleObj <span class="token operator">=</span> peopleArr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>keyByUsernameReducer<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ⦘ {</span>\n<span class="token comment">//     "glestrade": {</span>\n<span class="token comment">//         "username":    "glestrade",</span>\n<span class="token comment">//         "displayname": "Inspector Lestrade",</span>\n<span class="token comment">//         "email":       "glestrade@met.police.uk",</span>\n<span class="token comment">//         "authHash":    "bdbf9920f42242defd9a7f76451f4f1d",</span>\n<span class="token comment">//          "lastSeen":    "2019-05-13T11:07:22+00:00"</span>\n<span class="token comment">//     },</span>\n<span class="token comment">//     "mholmes": {</span>\n<span class="token comment">//         "username":    "mholmes",</span>\n<span class="token comment">//         "displayname": "Mycroft Holmes",</span>\n<span class="token comment">//         "email":       "mholmes@gov.uk",</span>\n<span class="token comment">//         "authHash":    "b4d04ad5c4c6483cfea030ff4e7c70bc",</span>\n<span class="token comment">//          "lastSeen":    "2019-05-10T11:21:36+00:00"</span>\n<span class="token comment">//     },</span>\n<span class="token comment">//     "iadler":{</span>\n<span class="token comment">//         "username":    "iadler",</span>\n<span class="token comment">//         "displayname": "Irene Adler",</span>\n<span class="token comment">//         "email":       null,</span>\n<span class="token comment">//         "authHash":    "319d55944f13760af0a07bf24bd1de28",</span>\n<span class="token comment">//          "lastSeen":    "2019-05-17T11:12:12+00:00"</span>\n<span class="token comment">//     }</span>\n<span class="token comment">// }</span></code></pre>\n      </div>\n<h2 id="chuyển-một-array-thành-một-array-khác"><a href="#chuy%E1%BB%83n-m%E1%BB%99t-array-th%C3%A0nh-m%E1%BB%99t-array-kh%C3%A1c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chuyển một array thành một array khác</h2>\n<p>Bình thường khi nghĩ tới <code class="language-text">.reduce()</code> chúng ta nghĩ tới viết lấy một mảng sau đó đưa nó về 1 giá trị bằng biến tích lũy, giá trị này hoàn toàn có thể là một array khác.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> fileLines <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">\'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Inspector Stanley Hopkins,Inspector Athelney Jones\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">splitLineReducer</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> line</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex">/,/g</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> investigators <span class="token operator">=</span> fileLines<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>splitLineReducer<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [</span>\n<span class="token comment">//   "Inspector Algar",</span>\n<span class="token comment">//   "Inspector Bardle",</span>\n<span class="token comment">//   "Mr. Barker",</span>\n<span class="token comment">//   "Inspector Barton",</span>\n<span class="token comment">//   "Inspector Baynes",</span>\n<span class="token comment">//   "Inspector Bradstreet",</span>\n<span class="token comment">//   "Inspector Sam Brown",</span>\n<span class="token comment">//   "Monsieur Dubugue",</span>\n<span class="token comment">//   "Birdy Edwards",</span>\n<span class="token comment">//   "Inspector Forbes",</span>\n<span class="token comment">//   "Inspector Forrester",</span>\n<span class="token comment">//   "Inspector Gregory",</span>\n<span class="token comment">//   "Inspector Tobias Gregson",</span>\n<span class="token comment">//   "Inspector Hill",</span>\n<span class="token comment">//   "Inspector Stanley Hopkins",</span>\n<span class="token comment">//   "Inspector Athelney Jones"</span>\n<span class="token comment">// ]</span></code></pre>\n      </div>\n<p>Tất nhiên trong điều kiện có thể sử dụng <code class="language-text">.flatMap()</code> (  không hỗ trợ trên edge và IE) thì nên dùng <code class="language-text">.flatMap()</code> thay cho reduce</p>\n<h2 id="thực-hiện-2-tính-toán-cùng-lúc"><a href="#th%E1%BB%B1c-hi%E1%BB%87n-2-t%C3%ADnh-to%C3%A1n-c%C3%B9ng-l%C3%BAc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thực hiện 2 tính toán cùng lúc</h2>\n<p>Nếu cần thực hiện 2 tính toán dựa trên 1 array, ví dụ lấy giá trị nhỏ nhất và lớn nhất trong dãy số</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> readings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">3.2</span><span class="token punctuation">,</span> <span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token number">0.4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> maxReading <span class="token operator">=</span> readings<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span> Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> minReading <span class="token operator">=</span> readings<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">,</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">.reduce</code> không chỉ có thể trả về number, nó có thể trả về bất cứ kiểu gì, chúng ta có thể đưa 2 giá trị này vào một object</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">minMaxReducer</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> reading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        minReading<span class="token punctuation">:</span> Match<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>acc<span class="token punctuation">.</span>minReading<span class="token punctuation">,</span> reading<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        maxReading<span class="token punctuation">:</span> Match<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>acc<span class="token punctuation">.</span>maxReading<span class="token punctuation">,</span> reading<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> initMinMax <span class="token operator">=</span> <span class="token punctuation">{</span>\n    minReading<span class="token punctuation">:</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">,</span>\n    maxReading<span class="token punctuation">:</span> Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> minMax <span class="token operator">=</span> readings<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>minMaxReducer<span class="token punctuation">,</span> initMinMax<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Vấn đề duy nhất của cách thứ 2 này là performance không tốt.</p>\n<h2 id="kết-hợp-map-và-filter-cùng-lúc"><a href="#k%E1%BA%BFt-h%E1%BB%A3p-map-v%C3%A0-filter-c%C3%B9ng-l%C3%BAc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết hợp map và filter cùng lúc</h2>\n<p>Lấy lại ví dụ với mảng <code class="language-text">peopleArr</code> ở trên, chúng ta lấy người vừa đăng nhập sau cùng, không tính các user không có email. Cách thứ nhất để làm là tách ra làm 3 bước</p>\n<ul>\n<li>Lọc hết các user không có email</li>\n<li>Lấy giá trị <code class="language-text">lastSeen</code></li>\n<li>Tìm giá trị lớn nhất</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">notEmptyEmail</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>email <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>email <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">getLastSeen</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x<span class="token punctuation">.</span>lastSeen<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">greater</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span> <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> peopleWithEmail <span class="token operator">=</span> peopleArr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>notEmptyEmail<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> lastSeenDates   <span class="token operator">=</span> peopleWithEmail<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>getLastSeen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> mostRecent      <span class="token operator">=</span> lastSeenDates<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>greater<span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Một cách khác để làm với <code class="language-text">reduce</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">notEmptyEmail</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>email <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>email <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">greater</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span> <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">notEmptyMostRecent</span><span class="token punctuation">(</span><span class="token parameter">currentRecent<span class="token punctuation">,</span> person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">notEmptyEmail</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">greater</span><span class="token punctuation">(</span>currentRecent<span class="token punctuation">,</span> person<span class="token punctuation">.</span>lastSeen<span class="token punctuation">)</span> <span class="token punctuation">:</span> currentRecent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> mostRecent <span class="token operator">=</span> peopleArr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>notEmptyMostRecent<span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="chạy-các-phương-thức-async-theo-hàng-đợi"><a href="#ch%E1%BA%A1y-c%C3%A1c-ph%C6%B0%C6%A1ng-th%E1%BB%A9c-async-theo-h%C3%A0ng-%C4%91%E1%BB%A3i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chạy các phương thức async theo hàng đợi</h2>\n<p>Rất hữu ích khi cần giới hạn số lượng request API, hoặc lấy kết quả của một Promise truyền cho thằng kế tiếp. Ví dụ lấy message cho tất cả user trong mảng <code class="language-text">peopleArr</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">fetchMessages</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://example.com/api/messages/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> person<span class="token punctuation">.</span>username<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">chainedFetchMessages</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// p là một promise</span>\n    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchMessages</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">:</span> data <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> msgObj <span class="token operator">=</span> peopleArr\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>getUsername<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>chainedFetchMessages<span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/">FUNCTIONAL JAVASCRIPT: HOW TO USE ARRAY REDUCE FOR MORE THAN JUST NUMBERS\n</a></p>',
timeToRead:6,excerpt:"Khi đọc tài liệu trên  MDN về Array.prototype.reduce()  chúng ta sẽ có cái nhìn khá tổng quát về  , những ví dụ cộng, nhân số cơ bản để…",frontmatter:{title:"Một vài ứng dụng hay ho của reduce",cover:"",date:"2019-05-26",category:null,tags:["javascript","thu-thuat"],desc:"Hãy học sử dụng reduce, vượt qua những ví vụ căn bản bằng cộng, trừ, nhân, chia"},fields:{slug:"/2019-05-26-ung-dung-cao-cap-cua-reduce"}}},pathContext:{slug:"/2019-05-26-ung-dung-cao-cap-cua-reduce",prev:{frontmatter:{title:"Giải thích Flux Pattern theo phong cách John Wick",desc:"Điểm lại các khái niệm trong Flux action, dispatch, store, điều kiện tiên quyết đề đọc bài này là nên xem lại John Wick",type:"post",category:null,tags:["react","hoc-thuat"],date:"2019-05-28",cover:"https://i.imgur.com/fbC5Rb5.jpg"},fields:{slug:"/2019-05-28-giai-thich-pattern-flux-trong-react"}},next:{frontmatter:{title:"Giới thiệu về window.requestAnimationFrame",desc:"",type:"post",category:null,tags:["javascript"],date:"2019-05-24",cover:""},fields:{slug:"/2019-05-24-gioi-thieu-ve-request-animation"}}}}}});
//# sourceMappingURL=path---2019-05-26-ung-dung-cao-cap-cua-reduce-4f7175dfa77a81294a32.js.map