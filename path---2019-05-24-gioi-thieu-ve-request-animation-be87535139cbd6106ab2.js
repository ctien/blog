webpackJsonp([0xf7f7ccdd974d],{1509:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Khi muốn thực hiện một vòng lặp thời gian trong javascript, chúng ta nghĩ ngay đến <code class="language-text">setInterval()</code>. Tuy nhiên khi mục đích của chúng ta là làm animation, để thực hiện animation mượt mà, chúng ta cần vòng lặp 60 frame/1 giây, như thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// chay animation ở đây</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Tuy nhiên chúng ta có một cách tốt hơn cách trên, dùng <code class="language-text">window.requestAnimationFrame()</code></p>\n<p>Tại sao nó tốt hơn</p>\n<ul>\n<li>Trình duyệt có thể optimize nó để animation thiệt mượt mà</li>\n<li>Những animation nào đang chạy sẽ dừng lại khi tab đó ko còn active\n<code class="language-text">window.requestAnimationFrame()</code> sẽ yêu cầu trình duyệt thực hiện một animation và chạy một function trước khi <strong>repaint</strong></li>\n</ul>\n<p>Ví dụ đơn giản nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">repeatOften</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// thực hiện animation nào đó</span>\n  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>repeatOften<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>repeatOften<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Gọi phương thức này khi chúng ta đã sẵn sàng thực hiện animation. Hàm thực thi animation sẽ được gọi trước khi trình duyệt repaint. Khi đang nằm ở tab không active của trình duyệt, nó sẽ bị pause lại (hoặc trong thẻ <code class="language-text">iframe</code>) để tiết kiệm pin</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> start <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>‘SomeElementYouWantToAnimate’<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>start<span class="token punctuation">)</span> start <span class="token operator">=</span> timestamp<span class="token punctuation">;</span>\n  <span class="token keyword">var</span> progress <span class="token operator">=</span> timestamp <span class="token operator">-</span> start<span class="token punctuation">;</span>\n  element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">\'translateX(\'</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>progress <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'px)\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>progress <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nwindow<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">window.requestAnimationFrame()</code> trả về một <strong>ID</strong>, chúng ta có thể cancel nó như với <code class="language-text">setTimeout</code> và <code class="language-text">setInterval</code> bằng <code class="language-text">window.cancelAnimationFrame(truyền vào id)</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> animateID <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>repeatOften<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>animateID<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Tài liệu và ví dụ tham khảo</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/using-requestanimationframe/">Using requestAnimationFrame</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame">window​.request​Animation​Frame()\n</a></p>',timeToRead:2,excerpt:"Khi muốn thực hiện một vòng lặp thời gian trong javascript, chúng ta nghĩ ngay đến  . Tuy nhiên khi mục đích của chúng ta là làm animation…",frontmatter:{title:"Giới thiệu về window.requestAnimationFrame",cover:"",date:"2019-05-24",category:null,tags:["javascript"],desc:""},fields:{slug:"/2019-05-24-gioi-thieu-ve-request-animation"}}},pathContext:{slug:"/2019-05-24-gioi-thieu-ve-request-animation",prev:{frontmatter:{title:"Một vài ứng dụng hay ho của reduce",desc:"Hãy học sử dụng reduce, vượt qua những ví vụ căn bản bằng cộng, trừ, nhân, chia",type:"post",category:null,tags:["javascript"],date:"2019-05-26",cover:""},fields:{slug:"/2019-05-26-ung-dung-cao-cap-cua-reduce"}},next:{frontmatter:{title:"Làm layout masonry bằng flexbox",desc:"Những ngày làm masonry layout với các thư viện jquery đã ko còn nữa",type:"post",category:null,tags:["css"],date:"2019-05-15",cover:""},fields:{slug:"/2019-05-15-huong-dan-layout-masonry-bang-flexbox"}}}}}});
//# sourceMappingURL=path---2019-05-24-gioi-thieu-ve-request-animation-be87535139cbd6106ab2.js.map