webpackJsonp([0xde04e7300615],{1392:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#n%C3%B3-qu%C3%A1-ch%E1%BA%ADm">Nó quá chậm</a></p>\n<ul>\n<li><a href="#parsing-gi%C3%A1-tr%E1%BB%8B-iso-8601">Parsing giá trị ISO 8601</a></li>\n<li><a href="#parsing-gi%C3%A1-tr%E1%BB%8B-epoch">Parsing giá trị EPOCH</a></li>\n<li><a href="#format">Format</a></li>\n<li><a href="#t%C3%ADnh-to%C3%A1n">Tính toán</a></li>\n<li><a href="#so-s%C3%A1nh">So sánh</a></li>\n</ul>\n</li>\n<li><a href="#n%C3%B3-qu%C3%A1-n%E1%BA%B7ng">Nó quá nặng</a></li>\n<li><a href="#n%C3%B3-mutable">Nó Mutable</a></li>\n<li><a href="#qu%C3%A1-kh%C3%B3-%C4%91%E1%BB%83-debug">Quá khó để debug</a></li>\n</ul>\n<!-- /TOC -->\n<p>Trước đây khi nhắc đến thư viện xử lý ngày tháng, là trong đầu mọi developer frontend sẽ nghĩ ngay tới <a href="https://momentjs.com/">Moment.js</a>, tuy nhiên dạo gần đây, đâu đâu cũng nghe cũng thấy đến các bài viết khuyên chúng ta bỏ ngay moment.js hoặc ít nhất là xài một cách cẩn trọng hơn.</p>\n<p>Thằng Date object build sẵn của javascript thì ko đủ xài. Sớm hay muộn chúng ta cùng cần đến một thư viện thứ 3 để làm việc với ngày tháng, và lựa chọn hiển nhiên trước đây là moment.js. Một thư viện tất cả trong một, giải quyết tuốt tuồn tật các vấn đề liên quan đến ngày tháng.</p>\n<p><strong>Vậy tại sao bây giờ người ta chê nó?</strong></p>\n<h2 id="nó-quá-chậm"><a href="#n%C3%B3-qu%C3%A1-ch%E1%BA%ADm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nó quá chậm</h2>\n<p>Trong quá trình thực hiện optimize cho dự án, tác giả bài này (ko phải mình nhé) đã phát hiện ra rằng, phần lớn những chổ <strong>tắt nghẽn</strong> là ở chỗ  parsing ngày chuẩn ISO8601 từ database, cụ thể là hàm <code class="language-text">moment(ISO8601_DATE_HERE)</code>, khá là sốc với kết quả này, vì ko dùng bất cứ một định dạng đặc biệt nào, một input chuẩn ISO bình thường, nếu mà dùng <code class="language-text">moment(new Date(ISO8601_DATE_HERE))</code> thì nhanh hơn gấp 7 lần.</p>\n<p>Thực hiện test và so sánh với một số thư viện khác</p>\n<p><img src="https://i.imgur.com/QjK9gvY.png" alt="Nó quá nặng"></p>\n<h3 id="parsing-giá-trị-iso-8601"><a href="#parsing-gi%C3%A1-tr%E1%BB%8B-iso-8601" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parsing giá trị ISO 8601</h3>\n<p>Moment.js tốn khoảng 9 giây để parse 100.000 giá trị ngày ISO8601, trong khi đó <a href="https://github.com/iamkun/dayjs">Day.js</a> chỉ mất .5 giây, các API cung cấp khá giống nhau, tuy nhiên thằng Day.js <strong>khôn hơn</strong>, nó xác định giá trị <code class="language-text">z</code> ở cuối string, nếu có nó sẽ gọi <code class="language-text">new Date(string)</code>. Trong khi Moment.js, <a href="https://moment.github.io/luxon/">Luxon</a> và <a href="https://js-joda.github.io/js-joda/">JS-Joda</a> sử dụng một regex của từng thằng để làm.</p>\n<blockquote>\n<p>Lưu ý không dùng Day.js hay Date-Fns nếu bạn cần hỗ trợ IE9, <em>hy vọng là bạn không xui tới vậy</em>, từ ES5 thì <code class="language-text">Date.parse</code> mới làm việc tốt với ISO 8601</p>\n</blockquote>\n<h3 id="parsing-giá-trị-epoch"><a href="#parsing-gi%C3%A1-tr%E1%BB%8B-epoch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parsing giá trị EPOCH</h3>\n<p>Kết quả parse EPOCH Time thì các thư viện cho kết quả tương đương, tuy nhiên nếu bạn là đứa nghiện tốc độ, khuyến nghị sử dụng Date-Fns</p>\n<h3 id="format"><a href="#format" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Format</h3>\n<p>Về vấn đề format, các thư viện lại gần như ko cung cấp hàm nào cả, đa phần tụi nó sẽ dùng regex để thực hiện. Riêng thằng JS-Joda sử dụng một hàm trong đó nó ì các kiểu để kiểm tra, rồi <code class="language-text">charAt</code> nên nhanh hơn một chút so với những thằng dùng regex</p>\n<h3 id="tính-toán"><a href="#t%C3%ADnh-to%C3%A1n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tính toán</h3>\n<p>Các phép toán trên ngày tháng đúng là lằn xà ngoằn, moment.js làm khá tốt hơn hẳn Day.js và Luxon, tuy nhiên vô đối vấn là JS-Joda trên vụ này.</p>\n<h3 id="so-sánh"><a href="#so-s%C3%A1nh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So sánh</h3>\n<p>Kiểm tra 2 giá trị ngày có là bằng nhau tương đối phức tạp hơn so sánh 2 ngày có lớn hơn nhau, bởi vì chúng ta không thực hiện so sánh giá trị khoảng thời gian (timestamps)\nMấy thư viện khác ngoài Luxon có vẻ ok, không rõ vì sao Luxon lại lấp vấp vụ này.</p>\n<h2 id="nó-quá-nặng"><a href="#n%C3%B3-qu%C3%A1-n%E1%BA%B7ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nó quá nặng</h2>\n<p><img src="https://i.imgur.com/X7EsHHT.png" alt="Nó quá nặng"></p>\n<p>Moment.js dung lượng khoảng 232kB (zip lại thì cỡ 66 kB), mà theo Yoshihide Jimbo thì có thể cắt bớt chỉ còn 68 kB ( 23 kB zip) bằng cách loại bỏ locale.</p>\n<p>JS-Joda chỉ nhẹ hơn Moment.js chút xíu, tuy nhiên do nó cũng là thư viện nặng vì phải chứa period và time zone, 2 thằng này dùng Moment.js bạn phải cài thêm dạng plugin</p>\n<p>Mấy thằng còn lại như Luxon, Day.js, Date-Fns thì nhẹ khỏi nói, ít nhất cũng phải nhẹ hơn 22 lần so với moment.js</p>\n<p>Nếu bạn đang dùng moment.js ở Backend thì ko sợ nhiều, chứ còn ở Frontend thì 1kb cũng có giá của nó.</p>\n<h2 id="nó-mutable"><a href="#n%C3%B3-mutable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nó Mutable</h2>\n<p>Ví dụ bạn đang làm một cái app lịch hiển thị những sự kiện sắp diễn ra.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> startedAt <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> endedAt   <span class="token operator">=</span> startedAt<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'year\'</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>startedAt<span class="token punctuation">)</span> <span class="token comment">// > 2020-02-09T13:39:07+01:00</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>endedAt<span class="token punctuation">)</span>   <span class="token comment">// > 2020-02-09T13:39:07+01:00</span></code></pre>\n      </div>\n<p><code class="language-text">startedAt</code>, <code class="language-text">endedAt</code> đều là mutable (có thể thay đổi), rõ ràng chúng ta không muốn giá trị của <code class="language-text">startedAt</code> bị thay đổi sau khi gọi hàm <code class="language-text">add</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> init   <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> add    <span class="token operator">=</span> init<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'year\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> sub    <span class="token operator">=</span> init<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">\'months\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> start  <span class="token operator">=</span> init<span class="token punctuation">.</span><span class="token function">startOf</span><span class="token punctuation">(</span><span class="token string">\'year\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> end    <span class="token operator">=</span> init<span class="token punctuation">.</span><span class="token function">endOf</span><span class="token punctuation">(</span><span class="token string">\'year\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> utc    <span class="token operator">=</span> init<span class="token punctuation">.</span><span class="token function">utc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> local  <span class="token operator">=</span> init<span class="token punctuation">.</span><span class="token function">local</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> offset <span class="token operator">=</span> init<span class="token punctuation">.</span><span class="token function">utcOffset</span><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Tất cả đống biến này đều trỏ tới cùng 1 object.  Giải quyết cũng đơn giản</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> startedAt <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> endedAt   <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span>startedAt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'year\'</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<blockquote>\n<p>Khi dùng Moment.js luôn nhớ dùng cách này để tạo một instance mới</p>\n</blockquote>\n<h2 id="quá-khó-để-debug"><a href="#qu%C3%A1-kh%C3%B3-%C4%91%E1%BB%83-debug" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quá khó để debug</h2>\n<p>Nếu giá trị input đẹp đẽ, sạch sẽ, mọi việc đều sẽ trót lọt (ko tính đến vụ mutation nhé). Tuy nhiên đời mà ai lại ko có lỗi lầm</p>\n<p>Giờ chúng ta thử ví dụ, có object là. <code class="language-text">person { lastVisitedAt }</code> </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> lastVisitedAt<span class="token punctuation">:</span> <span class="token string">\'2017-11-11T00:00:00.000Z\'</span> <span class="token punctuation">}</span>\n<span class="token function">moment</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>lastVsitedAt<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// > \'2019-02-08T16:01:45+01:00\'</span></code></pre>\n      </div>\n<p>Nếu bạn lỡ gõ nhầm tên property như vậy đi <code class="language-text">lastVsitedAt</code>, thì <code class="language-text">moment(undefined)</code> cũng không <code class="language-text">throw error</code> luôn.</p>\n<p>Giờ thử đưa mấy giá trị lạ lạ như sau vào moment()</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment">// > 2019-02-08T17:07:22+01:00</span>\n<span class="token function">moment</span><span class="token punctuation">(</span>undefined<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// > 2019-02-08T17:07:22+01:00</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">// > Invalid date</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// > 2019-02-08T17:07:22+01:00</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// > Invalid date</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// > 2019-02-08T17:07:22+01:00</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">// > Invalid date</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">// > 1970-01-01T01:00:00+01:00</span></code></pre>\n      </div>\n<p>Moment.js ko throw error mà chỉ trả về <code class="language-text">Invalid Date object</code></p>\n<p>Khi gọi <code class="language-text">toISOString()</code> nó lại lạ kỳ trả về <code class="language-text">null</code> chứ ko phải chuỗi <code class="language-text">Invalid Date</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>          <span class="token comment">// >  2019-02-08T16:14:10.835Z</span>\n<span class="token function">moment</span><span class="token punctuation">(</span>undefined<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// >  2019-02-08T16:14:10.835Z</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">// >  null</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// >  2019-02-08T16:14:10.836Z</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// >  null</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// >  2019-02-08T16:14:10.836Z</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">// >  null</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">// >  1970-01-01T00:00:00.000Z</span></code></pre>\n      </div>\n<p>Nói cách ngắn gọn, <code class="language-text">undefined</code> không hợp lệ trong moment(), nhưng <code class="language-text">null</code> thì ok. Bị lỗi ư, nó trả về một <code class="language-text">Invalid Date object</code>, <code class="language-text">null</code> hoặc custom object tuỳ vào nó vui hay buồn.</p>\n<p>Nếu kết quả này chưa làm bạn thuyết phục, hay tự kiểm chứng nhé.\n<a href="https://repl.it/@piotrekfracek/DateTime">https://repl.it/@piotrekfracek/DateTime</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://overreacted.io/how-are-function-components-different-from-classes/">Why you shouldn\'t use Moment.js...</a></p>',timeToRead:7,excerpt:"Nó quá chậm Parsing giá trị ISO 8601 Parsing giá trị EPOCH Format Tính toán So sánh Nó quá nặng Nó Mutable Quá khó để debug Trước đây khi…",frontmatter:{title:"Vì sao quần hùng kéo nhau không xài moment.js nữa",cover:"",date:"2019-03-17",category:null,tags:["javascript"],desc:"Tất cả chúng ta đã từng và đang sử dụng moment.js mà ko hề dành chút thời gian để xem nó ảnh hưởng như thế nào đến performance"},fields:{slug:"/2019-03-17-vi-sao-ban-ko-nen-xai-moment-js"}}},pathContext:{slug:"/2019-03-17-vi-sao-ban-ko-nen-xai-moment-js",prev:!1,next:{frontmatter:{title:"Function Component khác Class component như thế nào trong React",desc:"Ngày xưa khi chưa có hook, thì rất dễ để trả lời câu này, nhưng từ ngày hook được sử dụng, câu hỏi lại này lại được đặt ra, ủa vậy 2 thằng nó khác nhau ở điểm nào.",type:"post",category:null,tags:["react"],date:"2019-03-12",cover:""},fields:{slug:"/2019-03-12-su-khac-nhau-giua-function-component-va-class-component-trong-react"}}}}}});
//# sourceMappingURL=path---2019-03-17-vi-sao-ban-ko-nen-xai-moment-js-8d4f09493a80be1ef350.js.map