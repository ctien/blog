webpackJsonp([0x6a36ae43d3b0],{1579:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Một <strong>giải thuật</strong> sẽ bao gồm <strong>các bước tuần tự</strong> để giải quyết một vấn đề, để đi qua các bước tuần tự này, sẽ tốn một <strong>khoản thời gian</strong> nhất định để hoàn thành. Thời gian tiêu tốn của một giải thuật để giải quyết vấn đề được gọi là <strong>Độ phức tạp của thuật toán</strong></p>\n<p>Trong trường hợp xấu nhất, <strong>thời gian chạy của một giải thuật tỉ lệ thuận với số lượng tham số đầu vào</strong></p>\n<p>Giống như giải toán, chuyện có nhiều cách khác nhau để giải cùng một bài toán là bình thường. Ví dụ như nhân 2 con số, có rất nhiều cách để tính nhẩm được, chứ không phải chỉ có đúng một cách mà thầy cô bạn dạy hồi tiểu học, cách nào giúp ta nhẩm nhanh hơn thì được gọi là ít phức tạp hơn.</p>\n<p>Độ phức tạp của thuật toán được diễn đạt bằng ký hiệu <strong>chữ O viết hoa</strong>. O cho biết thời gian cần chạy của giải thuật <strong>tỉ lệ như thế nào</strong> với số lượng tham số đầu vào (như một dạng đơn vị hé)</p>\n<p><img src="https://i1.wp.com/www.jenniferbland.com/wp-content/uploads/big-o-complexity.png?w=783&#x26;ssl=1"></p>\n<h2 id="o1---độ-phức-tạp-không-đổi"><a href="#o1---%C4%91%E1%BB%99-ph%E1%BB%A9c-t%E1%BA%A1p-kh%C3%B4ng-%C4%91%E1%BB%95i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>O(1) - Độ phức tạp không đổi</h2>\n<p>Giải thuật nào có độ phức tạp bằng <strong>O(1)</strong> nghĩa là giải thuật đó không phụ thuộc giá trị input có <em>bự</em> bao nhiêu đi nữa, nó luôn có độ phức tạp không đổi.</p>\n<p>Nếu một hàm có độ phức tạp bằng O(1) nghĩa là trường hợp đẹp nhất của hàm, tối ưu nhất.</p>\n<p><img src="https://i0.wp.com/www.jenniferbland.com/wp-content/uploads/O1-constant-time-complexity.jpg?w=416&#x26;ssl=1"></p>\n<p>Ví dụ, hash table</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">/*1 triệu phần tử chẳng hạn*/</span> <span class="token punctuation">}</span>\n\n<span class="token comment">// Câu lệnh sau có O(1)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">"một key bất kỳ"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment">// hàm lấy giá trị cuối cùng của mảng</span>\n<span class="token comment">// độ phức tạp là O(1), dù mảng có bao nhiêu phần tử </span>\n<span class="token comment">// cũng ko ảnh hưởng thời gian chạy</span>\n<span class="token keyword">const</span> <span class="token function-variable function">getLast</span> <span class="token operator">=</span> <span class="token parameter">items</span> <span class="token operator">=></span> items<span class="token punctuation">[</span>items<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="olog-n"><a href="#olog-n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>O(log n)</h2>\n<p>Thời gian chạy càng tăng, mức độ phức tạp càng giảm</p>\n<p>Ví dụ bạn muốn tìm số điện thoại của một người trong cuốn danh bạ khoản một triệu cái tên. Điều đầu tiên chúng làm là tìm mở đại khoản giữa cuốn danh bạ, so sanh cái tên hiện tại nằm trước hay nằm sau trang đó, lặp lại tương tự với nhóm mới tìm được.</p>\n<p>Rõ ràng khi càng tìm, số lượng tên phải kiểm tra càng giảm đáng kể (mỗi lần bỏ qua 1 nữa). Nếu có 3 tên, chúng ta chỉ tốn 2 bước là tìm ra. Có 15 tên, chúng ta chỉ cần tối đa 4 bước.</p>\n<p><img src="https://i1.wp.com/www.jenniferbland.com/wp-content/uploads/Olog-n-logarithmic-complexity.jpg?w=472&#x26;ssl=1"></p>\n<p>Thời gian thực hiện thuật toán giảm đáng kể khi số lượng input giảm.</p>\n<p>Ví dụ như thuật toán tìm kiếm QuickSort</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">quickSort</span> <span class="token operator">=</span> <span class="token parameter">list</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> \n    <span class="token keyword">return</span> list<span class="token punctuation">;</span>\n  <span class="token keyword">let</span> pivot <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> left  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> \n  <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> total <span class="token operator">=</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> total<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span>\n      left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span>\n      right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span><span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> \n    pivot<span class="token punctuation">,</span> \n    <span class="token operator">...</span><span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">quickSort</span><span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token string">\'q\'</span><span class="token punctuation">,</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'z\'</span><span class="token punctuation">,</span><span class="token string">\'w\'</span><span class="token punctuation">,</span><span class="token string">\'s\'</span><span class="token punctuation">,</span><span class="token string">\'x\'</span><span class="token punctuation">,</span><span class="token string">\'e\'</span><span class="token punctuation">,</span><span class="token string">\'d\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'r\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="on---thời-gian-tịnh-tiến-theo-số-lượng-input"><a href="#on---th%E1%BB%9Di-gian-t%E1%BB%8Bnh-ti%E1%BA%BFn-theo-s%E1%BB%91-l%C6%B0%E1%BB%A3ng-input" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>O(n) - Thời gian tịnh tiến theo số lượng input</h2>\n<p>Đây là những thuật toán có tốc độ tăng <strong>song hành</strong> với số lượng input tăng, trường hợp xấu nhất sẽ rơi vào khi số lượng input nhiều nhất</p>\n<p>Ví dụ, bạn in ra giá trị của một mảng 10 phần tử, loop qua toàn bộ các phần tử để làm việc in này. Khi số lượng phần tử tăng lên thành 1000 lần thì bạn cũng phải loop qua 1000 phần tử</p>\n<p><img src="https://i2.wp.com/www.jenniferbland.com/wp-content/uploads/On-Linear-Complexity.jpg?w=463&#x26;ssl=1"></p>\n<p>Ví dụ các vòng lặp <code class="language-text">for</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">findIndex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> match</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> total <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> total<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> match<span class="token punctuation">)</span>\n      <span class="token keyword">return</span> i<span class="token punctuation">;</span>\n   <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> array<span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token string">\'c\'</span><span class="token punctuation">,</span> <span class="token string">\'d\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// loop 1 lần, tốt nhất</span>\n<span class="token function">findIndex</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>\n<span class="token comment">// loop 4 lần, xấu nhất</span>\n<span class="token function">findIndex</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token string">\'d\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n<span class="token comment">// loop 4 lần, xấu nhất</span>\n<span class="token function">findIndex</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token string">\'e\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1 </span></code></pre>\n      </div>\n<h2 id="on2----thời-gian-chạy-tăng-theo-n-mũ-2"><a href="#on2----th%E1%BB%9Di-gian-ch%E1%BA%A1y-t%C4%83ng-theo-n-m%C5%A9-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>O(n^2)  - Thời gian chạy tăng theo n mũ 2</h2>\n<p>Ngược lại với <strong>O(log n)</strong>, thời gian chạy của thuật toán nào có giá trị này sẽ tăng theo **số lượng input mũ 2)</p>\n<p><img src="https://i1.wp.com/www.jenniferbland.com/wp-content/uploads/On2-quadratic-time-complexity.jpg?w=382&#x26;ssl=1"></p>\n<p>Trong lập trình chúng ta sẽ tránh để các đoạn code nào bị rơi vào độ phức tạp O(n^2)</p>\n<p>Ví dụ, 2 vòng lặp for lồng nhau, bubble sort.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">findMatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> string<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> string<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n         <span class="token keyword">if</span> <span class="token punctuation">(</span>string<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> string<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span>\n   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://www.freecodecamp.org/news/time-is-complex-but-priceless-f0abd015063c/">https://www.freecodecamp.org/news/time-is-complex-but-priceless-f0abd015063c/</a></p>\n<p><a href="http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html">http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html</a></p>\n<p><a href="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051">https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051</a></p>\n<p><a href="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b">https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b</a></p>\n<p><a href="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b">https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b</a></p>\n<p><a href="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/">https://www.jenniferbland.com/time-complexity-analysis-in-javascript/</a></p>',timeToRead:4,excerpt:"Một  giải thuật  sẽ bao gồm  các bước tuần tự  để giải quyết một vấn đề, để đi qua các bước tuần tự này, sẽ tốn một  khoản thời gian  nhất…",frontmatter:{title:"Độ phức tạp của thuật toán",cover:"",date:"2019-10-28",category:null,tags:["javascript","hoc-thuat"],desc:"Một cách chuẩn hóa trong ngành lập trình để đánh giá độ phức tạp của giải thuật"},fields:{slug:"/2019-10-28-gioi-thieu-ve-do-phuc-tap-cua-thuat-toan"}}},pathContext:{slug:"/2019-10-28-gioi-thieu-ve-do-phuc-tap-cua-thuat-toan",prev:{frontmatter:{title:"JAMstack và ngành công nghiệp hủ tiếu gõ Việt Nam",desc:"Sau khi đọc bài này, bạn sẽ hiểu được JAMstack là gì, lợi lộc gì, để hiện thức hóa JAMstack bạn cần nghiên cứu những công cụ gì",type:"post",category:null,tags:["hoc-thuat"],date:"2019-10-30",cover:""},fields:{slug:"/2019-10-30-gioi-thieu-jamstack"}},next:{frontmatter:{title:"Có gì mới trong DevTools của Chrome 78",desc:"Master chrome devtool là cần thiết cho một frontend developer, mình sẽ bắt đầu series cập nhập những tính năng mới nhất của Chrome, theo như lộ trình định sẵn thì cứ 6 tuần nó sẽ có bản cập nhập mới cho Chrome",type:"post",category:null,tags:["chrome"],date:"2019-10-27",cover:"https://i.imgur.com/bj1kcFp.png"},fields:{slug:"/2019-10-27-chrome-78-co-gi-moi"}}}}}});
//# sourceMappingURL=path---2019-10-28-gioi-thieu-ve-do-phuc-tap-cua-thuat-toan-3f902565459a8cc8b31c.js.map