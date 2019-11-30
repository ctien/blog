webpackJsonp([67208384722860],{1549:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#khai-b%c3%a1o-function">Khai báo function</a></li>\n<li><a href="#iife">IIFE</a></li>\n<li><a href="#es6-module">ES6 Module</a></li>\n</ul>\n<!-- /TOC -->\n<p>Một trong những pattern có tên rất <em>kiêu</em> trong javascript "íp-phi" - <strong>IIFE</strong></p>\n<p>Trước khi tìm hiểu nó là gì, tại sao chúng ta cần nó, ôn lại khái niệm function căn bản trong javascript</p>\n<h2 id="khai-báo-function"><a href="#khai-b%C3%A1o-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khai báo function</h2>\n<p>Một javascript developer đều biết cách khai báo chính quy này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">sayHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token function">alert</span><span class="token punctuation">(</span>“Hello world”<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">sayHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>1 cách khác, gọi là <strong>function expression</strong>, đặt biến và gán nó vào function</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">sayHelloWorld</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">sayHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Các callback chúng ta viết điều là function expression kiểu này</p>\n<blockquote>\n<p>Function trong javascript có thể xem như những giá trị khác, có thể truyền vào như tham số cho function khác</p>\n</blockquote>\n<h2 id="iife"><a href="#iife" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IIFE</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello IIFE"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu copy đoạn này dán vào console của trình duyệt, câu <code class="language-text">alert</code> sẽ xuất hiện, nhưng nó sẽ không bao giờ có thể hiện lại lần nữa</p>\n<blockquote>\n<p>function này sau khi hoàn thành nhiệm vụ, nó đi luôn không quay lại</p>\n</blockquote>\n<p>Nếu bạn tinh ý, bạn sẽ thắc mắc tại sao lại có <code class="language-text">!</code> phía trước function vậy?</p>\n<p>Khi javascript thấy keyword <strong>function</strong> nó sẽ xem khúc sau là phần khai báo cho function. Nhưng khi chúng ta thêm <strong>!</strong> phía trước, chúng ta đang ép javascript xem nó là một <strong>expression</strong>, nghĩa là phải trả về một giá trị</p>\n<p>Điều thú vị là ở chổ <code class="language-text">{}()</code>, <strong>nó chạy function này luôn</strong></p>\n<blockquote>\n<p>Một function gọi luôn sau khi tạo, gọi xong thì hết gọi lại được gọi là IIFE</p>\n</blockquote>\n<p>Không nhất thiết phải dùng <code class="language-text">!</code>, bạn có thể dùng <code class="language-text">+</code>, <code class="language-text">-</code>, <code class="language-text">~</code>, <code class="language-text">void</code> để ép nó về <em>expression</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">void</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Một cách khác nữa, cách này vẫn hay dùng nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// hoặc</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Chúng ta vẫn sử dụng IIFE như một module trong javascript (trước đây), vì nó cho chúng ta đưa biến vào một <em>đặc khu kinh tế</em>, những thằng khác sẽ không truy cập được biến khai báo bên trong IIFE</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">initGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token comment">// biến private</span>\n\t<span class="token keyword">var</span> live\n\t<span class="token keyword">var</span> weapon\n\n\t<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token comment">// function private</span>\n\t<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tlive <span class="token operator">=</span> <span class="token number">5</span>\n\t\tweapon <span class="token operator">=</span> <span class="token number">10</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Tất nhiên nếu là module, thì phải có những thứ public để thằng khác gọi tới, muốn thằng nào public chúng ta return là được</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">initGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token comment">// biến private</span>\n\t<span class="token keyword">var</span> live\n<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token comment">// function private</span>\n\t<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tlive <span class="token operator">=</span> <span class="token number">5</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\tinit<span class="token punctuation">:</span> init\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu muốn truyền vào tham số cho IIFE </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">IIFE</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> times</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> times<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">"Hello!"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="es6-module"><a href="#es6-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES6 Module</h2>\n<p>Khi ES6 ra đời, cách viết IIFE không còn được “thịnh hành” như trước</p>\n<p>Thí dụ, trước đây để biến private</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> scoped <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scoped<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span></code></pre>\n      </div>\n<p>Giờ có <code class="language-text">let</code> và <code class="language-text">const</code> đặt nó vào block là xem như private</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> scoped <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scoped<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span></code></pre>\n      </div>\n<p>Cách viết này gọn gàng, nhìn vào ai cũng hiểu, ko cần giải thích nhiều như IIFE</p>\n<p>Module được hiểu là <strong>từng file</strong> javascript, những gì không <code class="language-text">export</code> là private hết</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// myModule.js</span>\n<span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    counter<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>    \n\n<span class="token comment">// logic.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> increment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'myModule.js\'</span><span class="token punctuation">;</span>\n<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Bài viết đã tham khảo</p>\n<ul>\n<li>📜 <a href="https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6">Mastering Immediately-Invoked Function Expressions ― Chandra Gundamaraju</a></li>\n<li>📜 <a href="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0">Do ES6 Modules make the case of IIFEs obsolete?</a></li>\n</ul>',timeToRead:3,excerpt:'Khai báo function IIFE ES6 Module Một trong những pattern có tên rất  kiêu  trong javascript "íp-phi" -  IIFE Trước khi tìm hiểu nó là gì,…',frontmatter:{title:"IIFE trong javascript là cái gì vại",cover:"",date:"2019-09-20",category:null,tags:["javascript","hoc-thuat"],desc:"Giới thiệu về Íp-Phi trong javascript, tuy không còn dùng nhiều nữa, nhưng vẫn là một kiến thức tốt cần biết"},fields:{slug:"/2019-09-20-gioi-thieu-iife-cua-javascript"}}},pathContext:{slug:"/2019-09-20-gioi-thieu-iife-cua-javascript",prev:{frontmatter:{title:"Điều gì nói một trang web có UX tốt trên mobile",desc:"Sau kết quả nghiên cứu hơn 199 giờ, lấy ý kiến trên một lượng lớn user ở Mỹ, mời họ về công ty của Google, gửi feedback rồi nhận tiền, Google đã tổng hợp một danh sách các điều mà user cho là site này ngon",type:"post",category:null,tags:["ux-ui","hoc-thuat"],date:"2019-09-23",cover:"https://www.tgcindia.com/wp-content/uploads/2018/10/what-is-good-ux-1.png"},fields:{slug:"/2019-09-23-thiet-ke-website-the-nao-la-chuan-ux-cho-mobile"}},next:{frontmatter:{title:"Bức ảnh chế thú vị về so sánh trong Javascript",desc:"Qua bức ảnh chế này, chúng ta biết được nhiều điều hay ho về so sánh trong javascript",type:"post",category:null,tags:["javascript","hoc-thuat"],date:"2019-09-15",cover:"https://miro.medium.com/max/500/0*69mYzhumogiPLSh6.png"},fields:{slug:"/2019-09-15-anh-che-javascript"}}}}}});
//# sourceMappingURL=path---2019-09-20-gioi-thieu-iife-cua-javascript-42b29a74a1b77836da3a.js.map