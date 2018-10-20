webpackJsonp([0x8e8e8a3d10e5],{1325:function(n,s){n.exports={data:{markdownRemark:{html:'<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> \n  <span class="token attr-name">data-done</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token entity" title="&#x2705;">&amp;#x2705;</span><span class="token punctuation">"</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    chriscoyier@gmail.com\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.email::before</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* Chèn trước thẻ div giá trị của data-done + Email: */</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-done<span class="token punctuation">)</span> <span class="token string">" Email: "</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_562,f_auto,q_auto/v1537973143/psuedo_brk7jp.png" alt="Sử dụng CSS content như thế nào cho đúng"></p>\n<p>Không phải giá trị nào đưa vào content này cũng hợp lệ</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* Được */</span>\n<span class="token selector">::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* Không được */</span>\n<span class="token selector">::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Không thể tính toán gì đâu, nó chỉ là string thôi</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-price</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">data-sale-modifier</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0.9<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Coffee<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* Méo chạy */</span>\n<span class="token selector">div::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" $"</span> \n    <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">attr</span><span class="token punctuation">(</span>data-price<span class="token punctuation">)</span> * <span class="token function">attr</span><span class="token punctuation">(</span>data-sale-modifier<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/* Nope */</span>\n<span class="token selector">::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>2 + 2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Muốn nối chuỗi ư?</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* Không chạy đâu, không phải javascript hay php */</span>\n<span class="token selector">::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1"</span> . <span class="token string">"2"</span> . <span class="token string">"3"</span><span class="token punctuation">;</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1"</span> + <span class="token string">"2"</span> + <span class="token string">"3"</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* Dùng bình thường thế này thôi */</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1"</span> <span class="token string">"2"</span> <span class="token string">"3"</span><span class="token punctuation">;</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1 2 3"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đường dẫn hình thì được, mà không cho thay đổi kích thước hình ¯_(ツ)_/</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">p:before</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(image.jpg)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://css-tricks.com/valid-css-content/">Link bài viết gốc</a></p>',timeToRead:1,excerpt:"Không phải giá trị nào đưa vào content này cũng hợp lệ Không thể tính toán gì đâu, nó chỉ là string thôi Muốn nối chuỗi ư? Đường dẫn hình…",frontmatter:{title:"Sử dụng CSS content như thế nào cho đúng",cover:"",date:"2018-10-13",category:null,tags:["css"],desc:"Thuộc tính content trong CSS thường được sử dụng cùng với 2 ghost element là after và before, những giá trị nào có thể đưa vào cho thuộc tính content này"},fields:{slug:"/2018-10-13-css-content-hop-le"}}},pathContext:{slug:"/2018-10-13-css-content-hop-le",prev:{frontmatter:{title:"Góc nhìn của người tuyển dụng một lập trình viên React",desc:"Trong một tương lai không xa, khi mình được đặt vào vị trí phỏng vấn các bạn Front-End, mình sẽ hỏi gì đây?",type:"post",category:null,tags:["react"],date:"2018-10-14",cover:""},fields:{slug:"/2018-10-14-react-job-interview-goc-nhin-nguoi-tuyen-dung"}},next:{frontmatter:{title:"Sử dụng aria trên site eCommerce, vấn đề accessibility cần quan tâm",desc:"Accessible là một thuật ngữ ít bạn làm web quan tâm, không có nghĩa là nó không tồn tại, cùng tham khảo những aria nào cần bổ sung cho trang ecommerce",type:"post",category:null,tags:["ux-ui"],date:"2018-10-08",cover:""},fields:{slug:"/2018-10-08-huong-dan-aria-va-su-dung-voi-ecommerce-site"}}}}}});
//# sourceMappingURL=path---2018-10-13-css-content-hop-le-b67e17d56f868eccd685.js.map