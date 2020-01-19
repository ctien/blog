webpackJsonp([0x8a91f9b5e849],{1557:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Responsive với CSS chúng ta tùy biến code bằng @media, vậy với JS, ta thêm các điều kiện theo tốc độ mạng bằng cách nào?</p>\n<p>Chúng ta sẽ sử dụng API của trình duyệt <code class="language-text">navigator.connection.effectiveType</code> để tối ưu theo tốc độ kết nối mạng của user</p>\n<p>Các thông tin về mạng của user có thể lấy qua <a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection">navigator.connection</a>, trong đó có giá trị <a href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType">effectiveType</a> là một trong các giá trị \'slow-2g\', \'2g\', \'3g\', \'4g\'</p>\n<p>Chrome 62 trở về trước, chúng ta chỉ có giá trị <code class="language-text">navigator.connection.type</code>, giá trị này không phải tốc độ mạng. Mặc dù <code class="language-text">type</code> là wifi, nhưng lại là một wifi cùi mía, tốc độ ngang ngửa 2g, Chrome sau này có <em>phát minh</em> thêm giá trị <code class="language-text">effectiveType</code>, tính theo tốc độ đi-về của cục dữ liệu cho chính xác.</p>\n<p><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--T54UF-7H--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/wqeuhx12frs3k126bmrv.png" alt="Đáp ứng theo tốc độ mạng"></p>\n<p>Còn trường hợp, trong nhà có thanh niên nào đó mở link down film Nhật, tốc độ mạng đang "như tia chớp", thì chuyển sang "cùi mía", biết được sự thay đổi này cần add thêm cái listener cho đối tượng <code class="language-text">navigator.connection</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">onConnectionChange</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>\n        rtt<span class="token punctuation">,</span>\n        downlink<span class="token punctuation">,</span>\n        effectiveType<span class="token punctuation">,</span>\n        saveData\n    <span class="token punctuation">}</span> <span class="token operator">=</span> navigator<span class="token punctuation">.</span>connection\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Effective network connection type: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>effectiveType<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Downlink Speed/bandwidth estimate: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>downlink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Mb/s</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Round-trip time estimate: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rtt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Data-saver mode on/requested: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>saveData<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nnavigator<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">,</span> onConnectionChange<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Dùng Chrome DevTools để giả lập các tốc độ mạng khác nhau để test, chứ đừng down film để test tốc độ</p>\n<p><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gdIz0VyD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t9zadl65erjhll14zbcp.png" alt="Đáp ứng theo tốc độ mạng"></p>\n<p>Mấy trình duyệt xịn xịn như Chrome, Opera, Firefox là dùng được <code class="language-text">navigator.connection</code> chứ không riêng gì Chrome</p>\n<p>Dùng một regex để gom mấy kết quả <em>gờ gờ</em> là mạng chậm hết, 3g Việt Nam thì cũng như 2g thôi</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex">/\\slow-2g|2g|3g/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>effectiveType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>connection <span class="token operator">=</span> <span class="token string">"slow"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>connection <span class="token operator">=</span> <span class="token string">"fast"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Mình sử dụng Vue.js, không phải HTML thuần nên đừng thắc mắc sao có cái <code class="language-text">v-if</code> nhé</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>connection === \'fast\'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token comment">&lt;!-- 1.3MB video --></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>theatre<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span> <span class="token attr-name">muted</span> <span class="token attr-name">playsinline</span> <span class="token attr-name">control</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/static/img/doodle-theatre.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>video/webm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/static/img/doodle-theatre.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- 28KB image --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>connection === \'slow\'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>theatre<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/static/img/doodle-theatre-poster.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_tvmKtK---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8jukzhdu62nbghw0cfx3.png" alt="Đáp ứng theo tốc độ mạng"></p>\n<p>Nếu bạn viết React, có <a href="https://mxb.dev/blog/connection-aware-components/">bài này cũng hay</a>, nói về việc làm component đáp ứng theo tốc độ kết nối</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://dev.to/addyosmani/adaptive-serving-using-javascript-and-the-network-information-api-331p">📜 Adaptive Serving using JavaScript and the Network Information API</a></p>',timeToRead:2,excerpt:"Responsive với CSS chúng ta tùy biến code bằng @media, vậy với JS, ta thêm các điều kiện theo tốc độ mạng bằng cách nào? Chúng ta sẽ sử dụng…",frontmatter:{title:"Tùy biến code theo tốc độ mạng",cover:"",date:"2019-08-23",category:null,tags:["javascript","thu-thuat"],desc:"Responsive với CSS chúng ta tùy biến code bằng @media, vậy với JS, ta thêm các điều kiện theo tốc độ mạng bằng cách nào?"},fields:{slug:"/2019-08-23-tuy-bien-code-theo-toc-do-mang"}}},pathContext:{slug:"/2019-08-23-tuy-bien-code-theo-toc-do-mang",prev:{frontmatter:{title:"Làm quen với kiến trúc Serverless",desc:"Mình không phải chuyên gia trong lĩnh vực này, nghiên cứu để biết thêm, thấy cũng hay, chia sẽ cho mọi người cùng đọc",type:"post",category:null,tags:["javascript","hoc-thuat"],date:"2019-08-30",cover:""},fields:{slug:"/2019-08-30-lam-quen-voi-kien-truc-serverless"}},next:{frontmatter:{title:"Tại sao các bạn nên học Vue",desc:"Một vài suy nghĩ cá nhân của mình về mấy cái hay ho của Vue",type:"post",category:null,tags:["vuejs","kinh-nghiem"],date:"2019-08-16",cover:""},fields:{slug:"/2019-08-16-tai-sao-cac-ban-nen-hoc-vue"}}}}}});
//# sourceMappingURL=path---2019-08-23-tuy-bien-code-theo-toc-do-mang-ed9ec4e9ac34ab53914d.js.map