webpackJsonp([0xba6b84f23b0e],{1303:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="tại-sao-sử-dụng-flip-technique"><a href="#t%E1%BA%A1i-sao-s%E1%BB%AD-d%E1%BB%A5ng-flip-technique" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao sử dụng FLIP technique</h1>\n<p>Đã bao lần bạn cần làm animate cho các property <code class="language-text">height</code>, <code class="language-text">width</code>, <code class="language-text">top</code>, <code class="language-text">left</code>? Bạn có để ý là những animate như vậy thường sẽ hơi khực khực. Lý do? những property này trigger <strong>layout change</strong>, trình duyệt sẽ xem xét các element khác có cần thay đổi gì không, việc này sẽ tiêu tốn công sức của trình duyệt khá nhiều trong đa số các trường hợp. Trong bài viết <a href="https://aerotwist.com/blog/pixels-are-expensive/">Pixel are Expensive</a> tác giả Paul Lewis sẽ nói rõ hơn.</p>\n<p>Nói một cách khác, chúng ta muốn việc tính toán này hạn chế ở mức tối đa, nhanh nhất có thể. Mục tiêu là chúng ta chỉ animate trên <code class="language-text">transform</code> và <code class="language-text">opacity</code>. FLIP giải thích làm sao để chúng ta có thể đạt được layout change với chỉ property <code class="language-text">transform</code></p>\n<h1 id="flip-là-gì"><a href="#flip-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FLIP là gì</h1>\n<p>FLIP là viết tắt của <strong>First, Last, Invert, Play</strong></p>\n<ul>\n<li><strong>First</strong> trước khi mọi thứ bắt đầu, lưu lại giá trị position và kích thước của element muốn transition. Có thể sử dụng <code class="language-text">element.getBoundingClientRect()</code></li>\n<li><strong>Last</strong> thực thi đoạn code sẽ gây ra transition trong khoản thời gian gần như là tức thì, lưu lại giá trị position và kích thước của element lúc đó.</li>\n<li><strong>Invert</strong> do element đang ở vị trí cuối cùng, chúng ta muốn user nghĩ đó là ví trí đầu tiên, bằng cách sử dụng <code class="language-text">transform</code> để thay đổi lại position và kích thước. Tính toán xíu, nhưng không thành vấn đề.</li>\n<li><strong>Play</strong> với element đã bị <em>invert</em>, chúng ta lại move nó lại vào vị trí cuối một lần nữa bằng <code class="language-text">transform: none</code></li>\n</ul>\n<p>Implement bên dưới sử dụng Web Animation API</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> elm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.some-element\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> first <span class="token operator">=</span> elm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// chạy đoạn script thực hiện change layout</span>\n<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// last: lấy giá trị cuối</span>\n<span class="token keyword">const</span> last <span class="token operator">=</span> elm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// invert: xác định sự khác nhau giữa giá trị first và last để mà invert</span>\n<span class="token keyword">const</span> deltaX <span class="token operator">=</span> first<span class="token punctuation">.</span>left <span class="token operator">-</span> last<span class="token punctuation">.</span>left<span class="token punctuation">;</span>\n<span class="token keyword">const</span> deltaY <span class="token operator">=</span> first<span class="token punctuation">.</span>top <span class="token operator">-</span> last<span class="token punctuation">.</span>top<span class="token punctuation">;</span>\n<span class="token keyword">const</span> deltaW <span class="token operator">=</span> first<span class="token punctuation">.</span>width <span class="token operator">/</span> last<span class="token punctuation">.</span>width<span class="token punctuation">;</span>\n<span class="token keyword">const</span> deltaH <span class="token operator">=</span> first<span class="token punctuation">.</span>height <span class="token operator">/</span> last<span class="token punctuation">.</span>height<span class="token punctuation">;</span>\n\n<span class="token comment">// Play</span>\nelm<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>\n  transformOrigin<span class="token punctuation">:</span> <span class="token string">\'top left\'</span><span class="token punctuation">,</span>\n  transform<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n    translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>deltaX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>deltaY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)\n    scale(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>deltaW<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>deltaH<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)\n  `</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  transformOrigin<span class="token punctuation">:</span> <span class="token string">\'top left\'</span><span class="token punctuation">,</span>\n  transform<span class="token punctuation">:</span> <span class="token string">\'none\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  duration<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n  easing<span class="token punctuation">:</span> <span class="token string">\'ease-in-out\'</span><span class="token punctuation">,</span>\n  fill<span class="token punctuation">:</span> <span class="token string">\'both\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Lưu ý Web Animation API chưa support bởi tất cả trình duyệt, dùng <a href="https://github.com/web-animations/web-animations-js">polyfill</a></p>\n<p data-height="265" data-theme-id="0" data-slug-hash="EbwrQQ" data-default-tab="css,result" data-user="davidkpiano" data-pen-title="How the FLIP technique works" class="codepen">See the Pen <a href="https://codepen.io/davidkpiano/pen/EbwrQQ/">How the FLIP technique works</a> by David Khourshid (<a href="https://codepen.io/davidkpiano">@davidkpiano</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p>Có 2 điểm quan trọng cần lưu ý</p>\n<ul>\n<li>Khi element thay đổi kích thước, khi dùng <code class="language-text">scale</code> sẽ không ảnh hưởng performance, tuy nhiên nhớ đặt <code class="language-text">transformOrigin: &#39;top left&#39;</code></li>\n<li>Đang sử dụng Web Animation API, nhưng ý tưởng này có thể hiện thực bằng GSAP, Anime, Velocity, Just-Animate, Mo.j hoặc bất kỳ thư viện animation khác</li>\n</ul>\n<h1 id="shared-element-transition"><a href="#shared-element-transition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shared element transition</h1>\n<p>Một trường hợp trong transition là element giữa các view hoặc giữa các trạng thái của trang, không phải lúc nào element ở lúc cuối cũng giống như element lúc khởi tạo.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> firstElm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.first-element\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// First</span>\n<span class="token keyword">const</span> first <span class="token operator">=</span> firstElm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nfirstElm<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">\'visibility\'</span><span class="token punctuation">,</span> <span class="token string">\'hidden\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// chạy đoạn script thực hiện change layout</span>\n<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Last</span>\n<span class="token keyword">const</span> lastElm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.last-element\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> last <span class="token operator">=</span> lastElm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// giống như các bước ở trên</span>\n<span class="token comment">// ở đây chúng ta đang animate lastElm, không phải firstElm</span></code></pre>\n      </div>\n<h1 id="parent-child-transition"><a href="#parent-child-transition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parent-child transition</h1>\n<p>Với ví dụ trên, chúng ta đo element với <code class="language-text">window</code>, trong đa số các trường hợp thì ok, tuy nhiên xét thử tình huống</p>\n<ul>\n<li>Element thay đổi vị trí và cần transition</li>\n<li>Element chứa đóng element con, các element con này cũng cần transition vị trí mới theo vị trí của parent</li>\n</ul>\n<p>Để giải quyết, chúng ta cần đảm bảo việc tính toán theo giá trị relative với parent</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> parentElm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.parent\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> childElm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'.parent > .child\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// First: parent, child</span>\n<span class="token keyword">const</span> parentFirst <span class="token operator">=</span> parentElm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> childFirst <span class="token operator">=</span> childElm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Last: parent and child</span>\n<span class="token keyword">const</span> parentLast <span class="token operator">=</span> parentElm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> childLast <span class="token operator">=</span> childElm<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Invert: parent</span>\n<span class="token keyword">const</span> parentDeltaX <span class="token operator">=</span> parentFirst<span class="token punctuation">.</span>left <span class="token operator">-</span> parentLast<span class="token punctuation">.</span>left<span class="token punctuation">;</span>\n<span class="token keyword">const</span> parentDeltaY <span class="token operator">=</span> parentFirst<span class="token punctuation">.</span>top <span class="token operator">-</span> parentLast<span class="token punctuation">.</span>top<span class="token punctuation">;</span>\n\n<span class="token comment">// Invert: child relative to parent</span>\n<span class="token keyword">const</span> childDeltaX <span class="token operator">=</span> <span class="token punctuation">(</span>childFirst<span class="token punctuation">.</span>left <span class="token operator">-</span> parentFirst<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n  <span class="token operator">-</span> <span class="token punctuation">(</span>childLast<span class="token punctuation">.</span>left <span class="token operator">-</span> parentLast<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> childDeltaY <span class="token operator">=</span> <span class="token punctuation">(</span>childFirst<span class="token punctuation">.</span>top <span class="token operator">-</span> parentFirst<span class="token punctuation">.</span>top<span class="token punctuation">)</span>\n  <span class="token operator">-</span> <span class="token punctuation">(</span>childLast<span class="token punctuation">.</span>top <span class="token operator">-</span> parentLast<span class="token punctuation">.</span>top<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Play: dùng WAAPI</span>\nparentElm<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> transform<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>parentDeltaX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>parentDeltaY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> transform<span class="token punctuation">:</span> <span class="token string">\'none\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> duration<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> easing<span class="token punctuation">:</span> <span class="token string">\'ease-in-out\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nchildElm<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> transform<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>childDeltaX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>childDeltaY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> transform<span class="token punctuation">:</span> <span class="token string">\'none\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> duration<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> easing<span class="token punctuation">:</span> <span class="token string">\'ease-in-out\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Một vài điểm cần lưu ý</p>\n<ul>\n<li>Giá trị thời gian cho parent và child (duration, easing) không nhất thiết phải khớp, tự do sáng tạo đi!</li>\n<li>Thay đổi kích thước ở parent hoặc child (width, height) không sử dụng ở đây để tránh phức tạp quá ví dụ này</li>\n<li>Có thể kết hợp giữa shared element và parent child cho kết quả dữ dội hơn</li>\n</ul>\n<h1 id="sử-dụng-flippingjs"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-flippingjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng Flipping.js</h1>\n<p>Những kỹ thuật trình bày ở trên rất dễ hiểu, tuy nhiên sẽ hơi rối nếu chúng ta phải từ mò và theo dõi từng element. Tác giả bài viết này đã tạo ra một thư viện là <a href="https://github.com/davidkpiano/flipping">Flipping.js</a> để chúng ta xài cho sướng. Thêm vào <code class="language-text">data-flip-key=&quot;...&quot;</code> vào element làm animate, chúng ta dễ dàng theo dõi được những element có thể thay đổi</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gallery<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo-1<span class="token punctuation">"</span></span> <span class="token attr-name">data-flip-key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/photo-1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo-2<span class="token punctuation">"</span></span> <span class="token attr-name">data-flip-key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/photo-2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo-3<span class="token punctuation">"</span></span> <span class="token attr-name">data-flip-key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/photo-3<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>details<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo<span class="token punctuation">"</span></span> <span class="token attr-name">data-flip-key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>photo-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/photo-1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Lorem ipsum dolor sit amet...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><a href="https://css-tricks.com/animating-layouts-with-the-flip-technique/">Link bài gốc</a></p>',timeToRead:5,excerpt:"Tại sao sử dụng FLIP technique Đã bao lần bạn cần làm animate cho các property  ,  ,  ,  ? Bạn có để ý là những animate như vậy thường sẽ…",frontmatter:{title:"Tạo animation với flip technique",cover:"",date:"2018-07-25",category:null,tags:["css"],desc:"Trong bài này chúng ta sẽ tìm hiểu kỹ thuật FLIP có thể sử dụng để animate position và kích thước của bất kỳ DOM element nào"},fields:{slug:"/2018-07-25-tao-animate-voi-flip-technique"}}},pathContext:{slug:"/2018-07-25-tao-animate-voi-flip-technique",prev:{frontmatter:{title:"Tổng quát về canh lề với Flexbox display",desc:"Nếu giờ chưa nắm vững về flexbox và cách canh lề trong flexbox thì thật là thiếu xót trong thời đại 2018, chúng ta đã qua thời xài float, clearfix vốn được giới thiệu từ 2004",type:"post",category:null,tags:["css"]},fields:{slug:"/2018-07-04-tong-hop-canh-le-voi-flexbox-alignment"}},next:{frontmatter:{title:"Nâng cao tốc độ website với Chrome DevTools",desc:"Hướng dẫn sử dụng Chrome DevTools để phân tích và tối ưu hóa tốc độ website",type:"post",category:null,tags:["website"]},fields:{slug:"/2018-07-09-optimize-toc-do-website-voi-chrome-devtools"}}}}}});
//# sourceMappingURL=path---2018-07-25-tao-animate-voi-flip-technique-d00ea5acf33daf9871ce.js.map