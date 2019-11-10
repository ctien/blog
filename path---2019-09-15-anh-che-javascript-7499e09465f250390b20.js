webpackJsonp([0xa17e73c34769],{1521:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Ảnh chế Javascript</p>\n<p>Vô tình lụm xem được cái hình này trên Reddit</p>\n<p><img src="https://miro.medium.com/max/500/0*kjcbVX8Y9TFoHGDO.png" alt="Nguyên tắc bắt cầu javascript"></p>\n<p>Bạn có thể copy nguyên đoạn code này paste vào trình duyệt để xem kết quả</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token number">0</span> <span class="token operator">==</span> <span class="token string">\'0\'</span>\n<span class="token number">0</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token comment">// Nguyên tắc bắt cầu có đúng?</span>\n\n<span class="token string">\'0\'</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Chuyện gì đã xảy ra vậy?</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token number">0</span> <span class="token operator">==</span> <span class="token string">\'0\'</span> <span class="token comment">// => true</span></code></pre>\n      </div>\n<p>Với các ngôn ngữ lập trình khác thì chưa biết, nhưng với javascript <code class="language-text">==</code> sẽ tự ý chuyển 2 giá trị muốn so sánh về cùng một kiểu, hay người ta vẫn gọi là ko quan tâm đến kiểu dữ liệu khi so sánh.</p>\n<p>Trong nhiều trường hợp chúng ta cũng có thể sử dụng cách so sánh <code class="language-text">==</code> để tiện, javascript tự động chuyển về một kiểu, tuy nhiên sẽ ko khuyến khích cách này</p>\n<p>Theo như <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3">specify</a></p>\n<blockquote>\n<p>Nếu x = Number, y = String, trả về x == ToNumber(y), </p>\n</blockquote>\n<p>Nó đưa giá trị bên phải về number mà không báo cho ai biết hết</p>\n<p><img src="https://miro.medium.com/max/581/0*njs7mQoUYjWG13Sm.jpeg" alt="Tự động convert string sang number"></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token number">0</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// => true</span></code></pre>\n      </div>\n<blockquote>\n<p>Nếu x là String hoặc Number, y là Object, trả về x == ToPrimitive(y)</p>\n</blockquote>\n<p><img src="https://miro.medium.com/max/618/0*qN97ouGakJx0Gthb.jpg" alt="Array là object"></p>\n<p>Đúng! Array trong javascript cũng là object</p>\n<p>ToPrimitive(y) ở đây, JS sẽ gọi vào hàm <code class="language-text">.toString</code> để convert về kiểu primitive, trường hợp là array nó nối toàn bộ giá trị trong array thành chuỗi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => "1,2,3"</span>\n<span class="token punctuation">[</span><span class="token string">\'hello\'</span><span class="token punctuation">,</span><span class="token string">\'world\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => "hello,world</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// => ""</span></code></pre>\n      </div>\n<p>Toàn bộ những điều vô lý này đã được đưa vào <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-8.12.8">văn bản chính quy</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">\'0\'</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<p><img src="https://miro.medium.com/max/500/0*69mYzhumogiPLSh6.png" alt="So sánh string và array"></p>\n<p>Cứ theo nguyên tắc đã quy định mà làm</p>\n<blockquote>\n<p>Nếu x là String hoặc Number, y là Object, trả về x == ToPrimitive(y)</p>\n</blockquote>\n<p>Bước một <code class="language-text">ToPrimitive([])</code> => chúng ta sẽ trở thành so sánh <code class="language-text">&#39;0&#39; == &#39;&#39;</code>, khác nhau rõ ràng hé.</p>',timeToRead:2,excerpt:"Ảnh chế Javascript Vô tình lụm xem được cái hình này trên Reddit Bạn có thể copy nguyên đoạn code này paste vào trình duyệt để xem kết quả…",frontmatter:{title:"Bức ảnh chế thú vị về so sánh trong Javascript",cover:"https://miro.medium.com/max/500/0*69mYzhumogiPLSh6.png",date:"2019-09-15",category:null,tags:["javascript","hoc-thuat"],desc:"Qua bức ảnh chế này, chúng ta biết được nhiều điều hay ho về so sánh trong javascript"},fields:{slug:"/2019-09-15-anh-che-javascript"}}},pathContext:{slug:"/2019-09-15-anh-che-javascript",prev:!1,next:{frontmatter:{title:"Làm quen với phương pháp Atomic để structure source code, design",desc:"Atom, molecule, organism, template, và page là những khái niệm chính của phương pháp này",type:"post",category:null,tags:["javascript","ux-ui","kinh-nghiem"],date:"2019-09-13",cover:"https://miro.medium.com/max/1838/1*uhcVPeGql8ejpHjYIbpdJQ.png"},fields:{slug:"/2019-09-13-giai-thich-phuong-phap-atomic"}}}}}});
//# sourceMappingURL=path---2019-09-15-anh-che-javascript-7499e09465f250390b20.js.map