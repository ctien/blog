webpackJsonp([0xa79db152b646],{1263:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Thử xét một đoạn code <code class="language-text">fetch</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/user/1\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">user</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">/* run after API return */</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Đoạn code nằm bên trong <code class="language-text">.then</code> sẽ chạy <strong>sau khi</strong> nhận dữ liệu trả về từ server trước khi chạy tiếp. <code class="language-text">Promise</code> một kiểu <strong>abstraction</strong> cho phép các đoạn code chạy bất tuần tự</p>\n<p>Nếu không tin bạn thử check kiểu của Promise sẽ thấy</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'object\'</span> <span class="token comment">// true</span></code></pre>\n      </div>\n<p>Để mình nhắc lại lần nữa để bạn không bị cái tên hoa mĩ <em>Promise</em> lừa tình, <strong>Promise chỉ đơn thuần là một object</strong>. Để có thể đợi trả về từ server, trước khi thực hiện chạy đoạn code trong <code class="language-text">.then()</code>, function của bạn <strong>BUỘC PHẢI</strong> trả về một <em>Promise</em>. Function <code class="language-text">fetch</code> được viết như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">cost <span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> apiResponse</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// lỗi rồi</span>\n                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment">// success</span>\n            <span class="token function">resolve</span><span class="token punctuation">(</span>apiResponse<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Giờ tới phần quan trọng, viết lại khai báo Promise (gọi là <code class="language-text">SimplePromise</code> để tránh trùng tên) để xem cách làm của Promise</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SimplePromise</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">executionFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">handleError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>onResolve <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onResolve</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>onReject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onReject</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n\n        <span class="token function">executionFunction</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onResolve<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onReject<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onResolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onResolve<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">catch</span><span class="token punctuation">(</span>handleError<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>handleError <span class="token operator">=</span> handleError<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">onResolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> storedValue <span class="token operator">=</span> value<span class="token punctuation">;</span>\n\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token parameter">nextFunction</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                storedValue <span class="token operator">=</span> <span class="token function">nextFunction</span><span class="token punctuation">(</span>storedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>promiseChain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onReject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">onReject</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Khi khởi tạo một Promise <code class="language-text">new Promise((resolve, reject) =&gt;{...} )</code> chúng ta truyền vào một callback function, function này sẽ nhận 2 tham số truyền vào là 2 function internal của Promise <code class="language-text">onResolve</code> và <code class="language-text">onReject</code></p>\n<p>Bên trong constructor đồng thời khởi tạo mảng <code class="language-text">promiseChain</code> và hàm <code class="language-text">handleError</code>, khi thêm một hoặc một mớ <code class="language-text">.then()</code>, các hàm này sẽ được tuần tự đưa vào mảng <code class="language-text">promiseChain</code>, hàm <code class="language-text">.catch()</code> thì được map với hàm <code class="language-text">handleError</code> trong Promise.</p>\n<p>Lưu ý, cái này là ví dụ, Promise thực tế thì 2 hàm <code class="language-text">then</code> và <code class="language-text">catch</code> sẽ trả về <code class="language-text">new Promise</code>, cái này làm cho đơn giản trả về <code class="language-text">this</code> thôi.</p>\n<p>Khi một hàm bất tuần tự (async) được gọi <code class="language-text">resolve(apiResponse)</code>, object promise bắt đầu chạy <code class="language-text">onResolve(apiResponse)</code> nó sẽ loop qua <em>tuần tự</em> mảng <em>promiseChain</em>, thực thi các xử lý trong hàm từ đầu tiên trong mảng, đến hàm thứ 2, 3, 4..., mỗi lần như vậy nó sẽ nhận giá trị <code class="language-text">storedValue</code> đồng thời cập nhập lại <code class="language-text">storedValue</code> này.</p>\n<p>Bạn nên đọc thêm <a href="2018-05-07-huong-dan-async-await-giai-thich-vi-du">bài viết Async/Await</a></p>',timeToRead:2,excerpt:"Thử xét một đoạn code  Đoạn code nằm bên trong   sẽ chạy  sau khi  nhận dữ liệu trả về từ server trước khi chạy tiếp.   một kiểu…",frontmatter:{title:"Nắm vững Promise trong javascript",cover:"",date:"2017-10-12",category:"javascript",tags:["javascript"],desc:"Cùng tìm hiểu Promise của javascript, tự tạo một Promise"},fields:{slug:"/2017-10-12-javascript-promise"}}},pathContext:{slug:"/2017-10-12-javascript-promise",prev:{frontmatter:{title:"Import và Export trong Javascript bằng Webpack",desc:"Bàn về các kiểu import và export module trong javascript với Webpack",type:"post",category:"javascript",tags:["javascript","webpack"],date:"2017-10-18",cover:""},fields:{slug:"/2017-10-18-import-va-export-trong-javascript"}},next:{frontmatter:{title:"React Bind Pattern: 5 cách chỉ định tham chiếu this",desc:"Để thay đổi ngữ cảnh của chữ this trong javascript, sử dụng ở đâu và như thế nào cho hợp lý nhất",type:"post",category:"react",tags:["react","javascript"],date:"2017-10-11",cover:""},fields:{slug:"/2017-10-11-react-bind-pattern-5-cach-tham-chieu-this"}}}}}});
//# sourceMappingURL=path---2017-10-12-javascript-promise-6ab50c6378a6a4fa7829.js.map