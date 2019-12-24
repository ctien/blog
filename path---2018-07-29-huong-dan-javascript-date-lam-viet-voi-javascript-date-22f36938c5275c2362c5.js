webpackJsonp([52630458300696],{1429:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Để làm việc với kiểu ngày giờ, chúng ta sử dụng kiểu <code class="language-text">Date</code> trong javascript, chúng ta sẽ không nói về thư viện <code class="language-text">moment.js</code>, được công nhận là thư viện xịn nhất để làm việc với ngày tháng, chúng ta chỉ nói javascript thuần</p>\n<h1 id="khởi-tạo-date-object"><a href="#kh%E1%BB%9Fi-t%E1%BA%A1o-date-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khởi tạo Date Object</h1>\n<p>Mặc dù chỉ gọi là <strong>Date</strong>, nhưng Date object sẽ bao gồm luôn các api về thời gian</p>\n<p>Khởi tạo ngày với giá trị ngày, giờ hiện tại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// nếu truyền vào 0, chúng ta có giá trị Jan 1st 1970 (UTC)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Cần nhớ 1 điều: đơn vị thời gian UNIX sẽ tính theo giây, Date trong javascript sẽ tính theo đơn vị mili giây</p>\n<p>Convert từ UNIX sang javascript date</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> timestamp <span class="token operator">=</span> <span class="token number">1530826365</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>timestamp <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu chúng ta truyền vào một <code class="language-text">string</code>, nó sẽ tự động <code class="language-text">parse</code> giá trị đó thành ngày tháng phú hợp</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018-07-22\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018-07\'</span><span class="token punctuation">)</span> <span class="token comment">//July 1st 2018, 00:00:00</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018\'</span><span class="token punctuation">)</span> <span class="token comment">//Jan 1st 2018, 00:00:00</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'07/22/2018\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018/07/22\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018/7/22\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018-07-22 07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018-07-22T07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'25 March 2018\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'25 Mar 2018\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'25 March, 2018\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'March 25, 2018\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'March 25 2018\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'March 2018\'</span><span class="token punctuation">)</span> <span class="token comment">//Mar 1st 2018, 00:00:00</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018 March\'</span><span class="token punctuation">)</span> <span class="token comment">//Mar 1st 2018, 00:00:00</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018 MARCH\'</span><span class="token punctuation">)</span> <span class="token comment">//Mar 1st 2018, 00:00:00</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'2018 march\'</span><span class="token punctuation">)</span> <span class="token comment">//Mar 1st 2018, 00:00:00</span></code></pre>\n      </div>\n<p>Nếu dùng <code class="language-text">Date.parse</code> nó sẽ trả về timestamp mili giây chứ không phải Date Object</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'2018-07-22\'</span><span class="token punctuation">)</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'2018-07\'</span><span class="token punctuation">)</span> <span class="token comment">//July 1st 2018, 00:00:00</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'2018\'</span><span class="token punctuation">)</span> <span class="token comment">//Jan 1st 2018, 00:00:00</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'07/22/2018\'</span><span class="token punctuation">)</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'2018/07/22\'</span><span class="token punctuation">)</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'2018/7/22\'</span><span class="token punctuation">)</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018\'</span><span class="token punctuation">)</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'2018-07-22 07:22:13\'</span><span class="token punctuation">)</span>\nDate<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'2018-07-22T07:22:13\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Cũng có thể đưa từng giá trị riêng lẻ năm, tháng, ngày, giờ, phút, giây, mili giây</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="timezones"><a href="#timezones" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Timezones</h1>\n<p>Khi khởi tạo một giá trị ngày giờ chúng ta có thể truyền thêm tham số <em>timezone</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// bằng cách thêm +HOURS</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13 +0700\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// bằng cách thêm tên</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13 (CET)\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu truyền sai giá trị timezone, javascript sẽ dùng UTC mặc định, không quăng lỗi. Nếu format date time đưa vào sai, giá trị trả về là \'Invalid Date\'</p>\n<h1 id="convert-và-format-kiểu-date"><a href="#convert-v%C3%A0-format-ki%E1%BB%83u-date" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Convert và Format kiểu Date</h1>\n<p>Với một Date object, chúng ta có một số api để chuyển giá trị thành <em>string</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n\ndate<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n<span class="token comment">// "Sun Jul 22 2018 07:22:13 GMT+0200 (Central European Summer Time)"</span>\ndate<span class="token punctuation">.</span><span class="token function">toTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//"07:22:13 GMT+0200 (Central European Summer Time)"</span>\ndate<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//"Sun, 22 Jul 2018 05:22:13 GMT"</span>\ndate<span class="token punctuation">.</span><span class="token function">toDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//"Sun Jul 22 2018"</span>\ndate<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//"2018-07-22T05:22:13.000Z" (ISO 8601 format)</span>\ndate<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//"22/07/2018, 07:22:13"</span>\ndate<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//"07:22:13"</span>\ndate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//1532236933000</span>\ndate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//1532236933000</span></code></pre>\n      </div>\n<h1 id="lấy-giá-trị-từ-date-object"><a href="#l%E1%BA%A5y-gi%C3%A1-tr%E1%BB%8B-t%E1%BB%AB-date-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lấy giá trị từ Date Object</h1>\n<p>Một số api để get giá trị của Date</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n\ndate<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//22</span>\ndate<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//0 (0 là chủ nhật, 1 là thứ 2..)</span>\ndate<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//2018</span>\ndate<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//6 (Bắt đầu từ 0)</span>\ndate<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//7</span>\ndate<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//22</span>\ndate<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//13</span>\ndate<span class="token punctuation">.</span><span class="token function">getMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//0 (không xác định)</span>\ndate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//1532236933000</span>\ndate<span class="token punctuation">.</span><span class="token function">getTimezoneOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//-120 (Tùy theo khu vực và vùng miền).</span></code></pre>\n      </div>\n<p>Các phương thức trên sẽ có thêm version UTC, trả về giá trị UTC không phụ thuộc vào giá trị timezone hiện tại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">date<span class="token punctuation">.</span><span class="token function">getUTCDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//22</span>\ndate<span class="token punctuation">.</span><span class="token function">getUTCDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//0 (0 means sunday, 1 means monday..)</span>\ndate<span class="token punctuation">.</span><span class="token function">getUTCFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//2018</span>\ndate<span class="token punctuation">.</span><span class="token function">getUTCMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//6 (starts from 0)</span>\ndate<span class="token punctuation">.</span><span class="token function">getUTCHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//5 (not 7 like above)</span>\ndate<span class="token punctuation">.</span><span class="token function">getUTCMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//22</span>\ndate<span class="token punctuation">.</span><span class="token function">getUTCSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//13</span>\ndate<span class="token punctuation">.</span><span class="token function">getUTCMilliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//0 (not specified)</span></code></pre>\n      </div>\n<h1 id="set-giá-trị"><a href="#set-gi%C3%A1-tr%E1%BB%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set giá trị</h1>\n<p>Các phương thức để set giá trị</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n\ndate<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setDay</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setFullYear</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token comment">//note: đừng dùng setYear(), bỏ rồi</span>\ndate<span class="token punctuation">.</span><span class="token function">setMonth</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setHours</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setMinutes</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setSeconds</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setMilliseconds</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setTimezoneOffset</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Lưu ý, nếu ta dùng <code class="language-text">date.setHours(48)</code> sẽ vẫn ok, nó sẽ tự động cộng lên thành một ngày mới, tương tự cho <code class="language-text">setMinutes</code>, <code class="language-text">setSeconds</code></p>\n<p>Version UTC</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n\ndate<span class="token punctuation">.</span><span class="token function">setUTCDate</span><span class="token punctuation">(</span>newalue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setUTCDay</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setUTCFullYear</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setUTCMonth</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setUTCHours</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setUTCMinutes</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setUTCSeconds</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>\ndate<span class="token punctuation">.</span><span class="token function">setUTCMilliseconds</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span></code></pre>\n      </div>\n<h1 id="javascript-tự-động-cộng-thêm-giá-trị-ngày-giờ"><a href="#javascript-t%E1%BB%B1-%C4%91%E1%BB%99ng-c%E1%BB%99ng-th%C3%AAm-gi%C3%A1-tr%E1%BB%8B-ng%C3%A0y-gi%E1%BB%9D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Javascript tự động cộng thêm giá trị ngày giờ</h1>\n<p>Nếu chúng ta đưa vào giá trị ngày lớn hơn 31, javascript sẽ cộng lên thành tháng tiếp theo, chứ không báo lỗi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>\n<span class="token comment">//Thu Aug 09 2018 00:00:00 GMT+0200</span></code></pre>\n      </div>\n<h1 id="so-sánh-2-giá-trị-ngày-giờ"><a href="#so-s%C3%A1nh-2-gi%C3%A1-tr%E1%BB%8B-ng%C3%A0y-gi%E1%BB%9D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So sánh 2 giá trị ngày giờ</h1>\n<p>Sử dụng <code class="language-text">Date.getTime()</code> để so sánh sự khác nhau theo mili giây</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> date1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 10, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> date2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> diff <span class="token operator">=</span> date2<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> date1<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Kiểm tra 2 giá trị Date có bằng nhau không</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> date1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 10, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> date2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 10, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>date2<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> date1<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//dates are equal</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Lưu ý là đang so sánh đến mili giây, nên nếu so sánh 2 giá trị <code class="language-text">July 10, 2018 07:22:13</code> và <code class="language-text">July 10, 2018</code> thì nó sẽ không bằng nhau.</p>\n<h1 id="format-theo-locale"><a href="#format-theo-locale" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Format theo locale</h1>\n<p>Nếu trình duyệt hỗ trợ <code class="language-text">Intl</code>, ta có thể sử dụng để localize number, string, currencies, date</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// "12/22/2017"</span>\n<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">\'July 22, 2018 07:22:13\'</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>DateTimeFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>DateTimeFormat</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token comment">//"7/22/2018"</span>\n\n<span class="token comment">// đưa thêm option để customize lại output</span>\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n  year<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n  month<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n  day<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n  hour<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n  minute<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span>\n  second<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>DateTimeFormat</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token comment">//"7/22/2018, 7:22:13 AM"</span>\n<span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>DateTimeFormat</span><span class="token punctuation">(</span><span class="token string">\'it-IT\'</span><span class="token punctuation">,</span> options2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token comment">//"22/7/2018, 07:22:13"</span></code></pre>\n      </div>\n<p><a href="https://flaviocopes.com/javascript-dates/">Link bài gốc</a></p>',
timeToRead:6,excerpt:"Để làm việc với kiểu ngày giờ, chúng ta sử dụng kiểu   trong javascript, chúng ta sẽ không nói về thư viện  , được công nhận là thư viện xịn…",frontmatter:{title:"Làm việc với date trong javascript",cover:"https://flaviocopes.com/javascript-dates/Screen%20Shot%202018-07-06%20at%2007.20.58.png",date:"2018-07-29",category:null,tags:["javascript"],desc:"Làm việc với kiểu ngày tháng trong javascript không phức tạp lắm, nhưng rất thường xài"},fields:{slug:"/2018-07-29-huong-dan-javascript-date-lam-viet-voi-javascript-date"}}},pathContext:{slug:"/2018-07-29-huong-dan-javascript-date-lam-viet-voi-javascript-date",prev:{frontmatter:{title:"Tầm quan trọng của thuộc tính sizes, srcset trong thẻ img",desc:"Hướng dẫn sử dụng srcset và sizes để tối ưu việc load ảnh responsive",type:"post",category:null,tags:["css","mobile-web-specialist"],date:"2018-07-30",cover:""},fields:{slug:"/2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img"}},next:{frontmatter:{title:"Tạo animation với flip technique",desc:"Trong bài này chúng ta sẽ tìm hiểu kỹ thuật FLIP có thể sử dụng để animate position và kích thước của bất kỳ DOM element nào",type:"post",category:null,tags:["css"],date:"2018-07-25",cover:""},fields:{slug:"/2018-07-25-huong-dan-tao-animate-voi-flip-technique"}}}}}});
//# sourceMappingURL=path---2018-07-29-huong-dan-javascript-date-lam-viet-voi-javascript-date-22f36938c5275c2362c5.js.map