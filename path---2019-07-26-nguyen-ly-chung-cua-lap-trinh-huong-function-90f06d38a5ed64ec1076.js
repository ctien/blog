webpackJsonp([5052454535252],{1499:function(n,t){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#n%c3%b3i-v%e1%bb%81-l%e1%bb%a3i-%c3%adch">Nói về lợi ích</a></li>\n<li><a href="#immutable">Immutable</a></li>\n<li><a href="#pure-function">Pure Function</a></li>\n<li><a href="#%c4%90%e1%bb%87-quy">Đệ quy</a></li>\n<li><a href="#t%e1%bb%95ng-k%e1%ba%bft">Tổng kết</a></li>\n<li><a href="#t%c3%a0i-li%e1%bb%87u-tham-kh%e1%ba%a3o">Tài liệu tham khảo</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="nói-về-lợi-ích"><a href="#n%C3%B3i-v%E1%BB%81-l%E1%BB%A3i-%C3%ADch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nói về lợi ích</h2>\n<p>Trước tiên chúng ta phải nói về lợi ích của kiểu lập trình hướng function, để có thể có động lực <em>nghiên cứu đào sâu</em>, một vài điểm được nhiều người thống nhất</p>\n<p>Code của chúng ta trở nên "module" hơn, nhắc về module thì lấy ví dụ trò xếp hình là dễ hình dung nhất</p>\n<p><img src="https://cdn.redshift.autodesk.com/2014/10/benefits_of_modular_construction_lego.jpg" alt="Minh họa Module"></p>\n<ul>\n<li>\n<p>Các function độc lập, khi kết nối với nhau tạo ra một chương trình\nModule cũng sẽ giúp code dễ hiểu hơn, 1 function = 1 công dụng, <em>không có gì dấu diếm</em></p>\n</li>\n<li>\n<p>Dễ copy/paste hơn</p>\n</li>\n<li>\n<p>Dễ test hơn</p>\n</li>\n</ul>\n<p>Bên dưới chúng ta sẽ đề cập đến những nguyên lý nền tảng, mà kinh nghiệm thực tế đúc kết được, như sử dụng <strong>immutable</strong> thay vì <strong>mutable</strong>, viết <strong>pure function</strong>, chia nhỏ bằng đệ quy, là những <strong>nguyên lý</strong> nền tảng, không ám chỉ một ngôn ngữ cụ thể nào</p>\n<h2 id="immutable"><a href="#immutable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Immutable</h2>\n<p>Nói đến lập trình function trước tiên phải nói về <strong>immutable</strong></p>\n<blockquote>\n<p>Immutable là dạng dữ liệu sau khi tạo ra thì không thay đổi nữa</p>\n</blockquote>\n<p>Mutate là gì? ví dụ, gán tham chiếu vào một biến đã có</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'luckyluu\'</span> <span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line"><span class="token keyword">var</span> y <span class="token operator">=</span> x\n</span>\nx <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'vuilaptrinh\'</span> <span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>\n<span class="token comment">// => {name: "vuilaptrinh"} { name: "luckyluu" }</span></code></pre>\n      </div>\n<p>Giá trị <code class="language-text">x</code> tham chiếu đến một vùng nhớ khác khi viết <code class="language-text">x = { name: &#39;vuilaptrinh&#39; }</code>, trong khi đó <code class="language-text">y</code> vẫn tham chiếu đến vùng nhớ cũ là <code class="language-text">{ name: &#39;luckyluu&#39; }</code></p>\n<p>Trường hợp 2 là chỉnh sửa giá một object có sẵn</p>\n<div class="gatsby-highlight">\n      <pre class="language-js "><code class="language-js ">var x = { name: &#39;luckyluu&#39; }\nvar y = x\n\nx.name = &#39;vuilaptrinh&#39;\nconsole.log(x, y)\n// =&gt; {name: &quot;vuilaptrinh&quot;} { name: &quot;vuilaptrinh&quot; }</code></pre>\n      </div>\n<p>Không thay đổi <code class="language-text">y</code>, nhưng cả 2 cùng tham chiếu tới cùng một <code class="language-text">x</code>.</p>\n<p>Riêng javascript chúng ta phải dùng hẳn một thư viện <a href="https://immutable-js.github.io/immutable-js/docs/#/">immutable-js</a> vì việc "chặn" không cho thay đổi dữ liệu trong javascript thì "f..king complicated", đừng nghĩ <code class="language-text">const bienA</code> là đã mutable, nó chỉ thay đổi scope thôi bạn ơi</p>\n<p>Immutable là một cách làm không tốn nhiều chi phí để ngăn chặn các con bug chúng ta gặp trong các tình huống cá biệt, như 2 luồng xử lý cũng thực hiện ghi đè một giá trị-cùng lúc, hay trong một lần đọc dữ liệu nào đó mà bạn "nhỡ tay" đã thay đổi dữ liệu mà không hay biết.</p>\n<p>Cái gì cũng có giá của nó! Tùy vào ngôn ngữ và cục object bự cỡ nào, chi phí bỏ ra để <code class="language-text">clone</code> object ban đầu để chỉnh sửa sẽ khác nhau. Phát sinh vấn đề "xả rác" lung tung qua việc khai báo các object mới liên tục khi cần chỉnh sửa, do đó các trường hợp phát triển GUI (viết một editor như VS Code gọi là phát triển GUI) hay game sẽ không phù hợp với immutable, tất nhiên luôn có một vài chỗ vẫn dùng được</p>\n<p>Khi bắt đầu dùng immutable, chúng ta phải tiếp cận khi viết code, phải suy nghĩ từng "cục" code nên làm thêm nào để <em>sạch</em> hơn, an toàn với sức khỏe bà mẹ và trẻ em hơn</p>\n<h2 id="pure-function"><a href="#pure-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pure Function</h2>\n<p>Thế nào là một <strong>Function Sạch</strong> ?</p>\n<p>Đó giờ chúng ta vẫn viết function, lập trình hướng function thì có gì khác? <strong>function</strong> ở đây ám chỉ các hàm hoạt động như hàm toán học như <code class="language-text">f(x) = x + 1</code>, những hàm toán học này rất đơn giản, nhận một giá trị, và trả về một giá trị, không chỉnh sửa giá trị bên ngoài, dù nó được truyền vào như tham số của hàm, nếu cùng tham số truyền vào, <strong>luôn luôn</strong> nhận được cùng kết quả trả về. Truyền vào cho <code class="language-text">f(x) = x + 1</code> là 2 thì bất cứ lần nào cũng nhận được kết quả là 3. </p>\n<p>Nhờ vậy chúng ta có thể <strong>cache</strong> kết quả này, sử dụng kết quả cache trong trường hợp có cùng input. Chúng ta cũng có thể gọi các function này trên nhiều luồng chạy song song mà không phải lo lắng gì. Nếu các function không phụ thuộc lẫn nhau, chúng ta cũng có thể gọi nó theo bất cứ thứ tự nào mà không quan tâm đến vấn đề <strong>race condition</strong></p>\n<blockquote>\n<p>Race condition, mình giải thích nôm na thế này, bạn là chàng trai lắm em theo đuổi, người đến trước, kẻ đến sau, mức độ quyết liệt của mỗi em lại khác nhau không phụ thuộc ai trước, ai sau, em xuất phát sau quá quyết liệt, nên ngỏ lời đòi cưới trước, bạn đồng ý, sau đó em xuất phát trước, cuối cùng cũng chạy tới được nhà bạn, bạn lại đồng ý tiếp. Thế là tiêu đời bạn rồi.</p>\n</blockquote>\n<h2 id="đệ-quy"><a href="#%C4%91%E1%BB%87-quy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đệ quy</h2>\n<p>Function gọi lại chính nó, không phụ thuộc biến đếm liên quan gì tới lập trình function?</p>\n<p>Ý tưởng cốt lõi của đệ quy là chia bài toán lớn thành bài toán tương tự như vậy, nhưng quy mô nhỏ hơn. Vấn đề nhỏ hơn nghĩa là cũng dễ hiểu hơn, cách giải quyết cũng rõ rành rành hơn. Khi chúng ta đổi mặt với vòng lặp, nghĩ xem đệ quy có phải là lựa chọn đúng hơn không. Ví dụ lặp bình thường phù hợp khi cần đi qua tất cả phần tử trong mảng, đệ quy lại phù hợp áp dụng quicksort trong mảng (thứ 6 tuần sau mình viết bài này nha!)</p>\n<p>Khi làm việc với đệ quy, luôn nhớ sử dụng và nằm lòng câu hỏi <strong>điều gì sẽ thực thi khi nó ở vị trí cuối cùng</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> acc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tacc <span class="token operator">=</span> acc <span class="token operator">||</span> <span class="token number">1</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">factorial</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> acc <span class="token operator">*</span> x<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">\t\t<span class="token keyword">return</span> acc\n</span>\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hạn chế được yếu điểm của đệ quy là <strong>tràn stack</strong> với câu hỏi trên.</p>\n<h2 id="tổng-kết"><a href="#t%E1%BB%95ng-k%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tổng kết</h2>\n<p>Tóm lại tại sao thiên hạ <strong>rần rần</strong> với lập trình function hâm he triệt lập trình hướng đối tượng OOP</p>\n<ul>\n<li>Không tạo ra side effect</li>\n<li>Thứ tự chạy function không quan trọng</li>\n<li>Dễ đọc (ý là người khác dễ đọc lại và hiểu mình đang viết gì)</li>\n</ul>\n<p>Tất nhiên không phải lúc nào lập trình function cũng phù hợp với bất kỳ trường hợp nào, đôi khi side effect là cần thiết, bắt buộc, bạn không thể viết toàn bộ chương trình bằng pure function</p>\n<p>Theo quan điểm cá nhân: lập trình function trở nên phổ biến bởi 2 nguyên nhân: 1. Ngày càng nhiều vi xử lý có khả năng xử lý đồng thời trên đa luồng, 2. Đây là kiểu viết rất dễ tiếp cận với mọi người (như ai cũng xài windows vì bẻ khóa nó thì không có gì dễ đến thế)</p>\n<h2 id="tài-liệu-tham-khảo"><a href="#t%C3%A0i-li%E1%BB%87u-tham-kh%E1%BA%A3o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tài liệu tham khảo</h2>\n<p><a target="_blank" rel="noopener noreferrer" href="https://www.lucidchart.com/techblog/2017/11/29/functional-programming-principles-every-imperative-programmer-should-use/">FUNCTIONAL PROGRAMMING PRINCIPLES EVERY IMPERATIVE PROGRAMMER SHOULD USE</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/questions/36504/why-functional-languages">Why functional languages? </a></p>',timeToRead:6,excerpt:"Nói về lợi ích Immutable Pure Function Đệ quy Tổng kết Tài liệu tham khảo Nói về lợi ích Trước tiên chúng ta phải nói về lợi ích của kiểu…",frontmatter:{title:"Nguyên lý nền tảng của lập trình function",cover:"",date:"2019-07-26",category:null,tags:["javascript","hoc-thuat"],desc:"Khái niệm ngàn người biết, bạn cũng phải biết"},fields:{slug:"/2019-07-26-nguyen-ly-chung-cua-lap-trinh-huong-function"}}},pathContext:{slug:"/2019-07-26-nguyen-ly-chung-cua-lap-trinh-huong-function",prev:{frontmatter:{title:"Sử dụng Slot trong Vue",desc:"Để tái sử dụng component trong Vue mà không biết tới slot thì quá thiếu sót. Một vài ví dụ để bạn sử dụng slot nhiều hơn.",type:"post",category:null,tags:["vuejs"],date:"2019-08-03",cover:""},fields:{slug:"/2019-08-03-huong-dan-su-dung-slot-trong-vuejs"}},next:{frontmatter:{title:"Function Component trong Vue",desc:"Không được xuất chúng như là function component của React, nên function component trong Vue không có nhiều người để ý. Hy vọng tương lai nó sẽ được nâng cấp để cạnh tranh với bên React đang quảng bá quá rầm rộ.",type:"post",category:null,tags:["vuejs","hoc-thuat"],date:"2019-07-21",cover:""},fields:{slug:"/2019-07-21-function-component-trong-vue"}}}}}});
//# sourceMappingURL=path---2019-07-26-nguyen-ly-chung-cua-lap-trinh-huong-function-90f06d38a5ed64ec1076.js.map