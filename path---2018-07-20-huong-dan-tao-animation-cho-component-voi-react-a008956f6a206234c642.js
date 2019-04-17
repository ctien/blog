webpackJsonp([82860857099213],{1309:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#ph%C3%A2n-t%C3%ADch">Phân tích</a></li>\n<li><a href="#d%E1%BB%B1ng-component-th%C3%B4-ch%C6%B0a-c%C3%B3-animate">Dựng component thô chưa có animate</a></li>\n<li><a href="#animate-v%E1%BB%9Bi-flip-technique">Animate với Flip technique</a></li>\n<li><a href="#ch%C4%83m-ch%C3%BAc">Chăm chúc</a></li>\n<li><a href="#background-animation">Background animation</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="phân-tích"><a href="#ph%C3%A2n-t%C3%ADch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phân tích</h1>\n<p data-height="265" data-theme-id="0" data-slug-hash="PaYXEZ" data-default-tab="js,result" data-user="aholachek" data-embed-version="2" data-pen-title="React Stripe Menu" class="codepen">See the Pen <a href="https://codepen.io/aholachek/pen/PaYXEZ/">React Stripe Menu</a> by Alex (<a href="https://codepen.io/aholachek">@aholachek</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p>Trước tiên phân tích cái animation này ra thành nhiều phần để dể hình dung. Có thể xem dạng slow motion trên Codepen để xem nhé.</p>\n<ul>\n<li>container dropdown màu trắng sẽ thay đổi kích thước và vị trí</li>\n<li>background màu xám ở phía dưới của dropdown transition độ cao</li>\n<li>Khi di chuyển chuột khỏi dropdown, fade out nội dung trước đó đi và chuyển vị trí nó sang element mới, sau đó đưa nội dung mới lên.</li>\n</ul>\n<p>Một vài lưu ý khi làm animation với React, cứ để browser quản lý layout. Thay vì sử dụng các dropdown khác nhau, chúng ta dùng 1 dropdown và thay đổi vị trí của nó, dùng <a href="https://css-tricks.com/animating-layouts-with-the-flip-technique/">Flip technique</a> để giả lập như có 3 dropdown khác nhau.</p>\n<h1 id="dựng-component-thô-chưa-có-animate"><a href="#d%E1%BB%B1ng-component-th%C3%B4-ch%C6%B0a-c%C3%B3-animate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dựng component thô chưa có animate</h1>\n<p data-height="265" data-theme-id="0" data-slug-hash="OELrzN" data-default-tab="js,result" data-user="aholachek" data-embed-version="2" data-pen-title="React Stripe Menu Before Animation" class="codepen">See the Pen <a href="https://codepen.io/aholachek/pen/OELrzN/">React Stripe Menu Before Animation</a> by Alex (<a href="https://codepen.io/aholachek">@aholachek</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p>Để bắt đầu ta dựng một component <code class="language-text">navbar</code> sử dụng <code class="language-text">styled-component</code></p>\n<p>Ở đây thì chưa thêm phần gray background ở dưới dropdown, cái này nó sẽ nằm <code class="language-text">absolute</code></p>\n<h1 id="animate-với-flip-technique"><a href="#animate-v%E1%BB%9Bi-flip-technique" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Animate với Flip technique</h1>\n<p>Chúng ta sẽ sử dụng <a href="https://github.com/aholachek/react-flip-toolkit">react-flip-toolkit</a> để thay đổi kích thước và vị trí dropdown.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flipper</span></span> <span class="token attr-name">flipKey</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>currentIndex<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Navbar</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>navbar<span class="token punctuation">.</span>Config<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// render navbar items</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Navbar</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flipper</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Ở <code class="language-text">DropdownContainer</code> component, đưa các element sẽ animate vào bên trong <code class="language-text">Flipped</code> component, nhớ giá trị <code class="language-text">flipId</code> phải khác nhau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownRoot</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flipped</span></span> <span class="token attr-name">flipId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>dropdown-caret<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Caret</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flipped</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flipped</span></span> <span class="token attr-name">flipId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>dropdown<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownBackground</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownBackground</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flipped</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownRoot</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Làm 2 cái animate trên <code class="language-text">&lt;Caret/&gt;</code> và <code class="language-text">&lt;DropdownBackground/&gt;</code> riêng biệt, để thuộc tính <code class="language-text">overflow: hidden</code> set trên <code class="language-text">&lt;DropdownBackground /&gt;</code> không ảnh hưởng tới <code class="language-text">&lt;Caret/&gt;</code></p>\n<p>Giờ có 1 vấn đề nhỏ là nội dung bên trong dropdown lúc xuất hiện bị stretch một cách kỳ cục, lý do là thuộc tính <code class="language-text">transforms: scale</code> nó áp luôn trên children. Xử lý cái này bằng cách đưa nội dung này vào trong <code class="language-text">&lt;Flipped/&gt;</code> kèm giá trị cho props <code class="language-text">inverseFlipId</code>, lúc này children sẽ không bị effect từ thằng cha nữa, đồng thời xác định luôn là ko muốn áp thằng <code class="language-text">scale</code></p>\n<p data-height="265" data-theme-id="0" data-slug-hash="MXgZxG" data-default-tab="js,result" data-user="aholachek" data-embed-version="2" data-pen-title="React Stripe Menu -- Error #1: no scale adjustment" class="codepen">See the Pen <a href="https://codepen.io/aholachek/pen/MXgZxG/">React Stripe Menu -- Error #1: no scale adjustment</a> by Alex (<a href="https://codepen.io/aholachek">@aholachek</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownRoot</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flipped</span></span> <span class="token attr-name">flipId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dropdown-caret<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Caret</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flipped</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flipped</span></span> <span class="token attr-name">flipId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownBackground</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flipped</span></span> <span class="token attr-name">inverseFlipId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dropdown<span class="token punctuation">"</span></span> <span class="token attr-name">scale</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flipped</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownBackground</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flipped</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownRoot</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h1 id="chăm-chúc"><a href="#ch%C4%83m-ch%C3%BAc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chăm chúc</h1>\n<p>Cũng gần được rồi, chúng ta cần để ý thêm vào những chi tiết nhỏ nhất để animate nhìn cool hơn</p>\n<p>Styled-components hỗ trợ rất tốt việc <a href="https://www.styled-components.com/docs/basics#animations">thay đổi keyframe animation</a>. Chúng ta sẽ sử dụng tính năng này để làm animation lúc enter và cross-fade nội dung dropdown khi thay đổi ví trí chuột.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">getFadeContainerKeyFrame</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> animatingOut<span class="token punctuation">,</span> direction <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>direction<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> keyframes<span class="token template-string"><span class="token string">`\n    from {\n      transform: translateX(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\n        animatingOut <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> direction <span class="token operator">===</span> <span class="token string">\'left\'</span> <span class="token operator">?</span> <span class="token number">20</span> <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">20</span>\n      <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px);\n    }\n    to {\n      transform: translateX(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\n        <span class="token operator">!</span>animatingOut <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> direction <span class="token operator">===</span> <span class="token string">\'left\'</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">20</span> <span class="token punctuation">:</span> <span class="token number">20</span>\n      <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px);\n      opacity: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animatingOut <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    }\n  `</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> FadeContainer <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token string">`\n  animation-name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>getFadeContainerKeyFrame<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  animation-duration: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>duration <span class="token operator">*</span> <span class="token number">0.5</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms;\n  animation-fill-mode: forwards;\n  position: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>animatingOut <span class="token operator">?</span> <span class="token string">"absolute"</span> <span class="token punctuation">:</span> <span class="token string">"relative"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  opacity: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>direction <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>animatingOut <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n  animation-timing-function: linear;\n  top: 0;\n  left: 0;\n`</span></span></code></pre>\n      </div>\n<p data-height="265" data-theme-id="0" data-slug-hash="NzPpwG" data-default-tab="js,result" data-user="aholachek" data-embed-version="2" data-pen-title="React Stripe Menu -- Simple FLIP" class="codepen">See the Pen <a href="https://codepen.io/aholachek/pen/NzPpwG/">React Stripe Menu -- Simple FLIP</a> by Alex (<a href="https://codepen.io/aholachek">@aholachek</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p>Khi user đưa chuột lên menu mới, chúng ta ko chỉ đưa vào dropdown hiện tại mà con dropdown trước đó như children cho <code class="language-text">DropdownContainer</code>, cùng với những thông tin về hướng di chuột của user. Sau đó <code class="language-text">DropdonwContainer</code> sẽ wrap hết tất cả children của nó trong một component mới, <code class="language-text">FadeContents</code>, thằng này sẽ sử dụng keyframe animation code ở trên để thêm animation tương ứng</p>\n<h1 id="background-animation"><a href="#background-animation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Background animation</h1>\n<p>Cuối cùng chúng ta thêm gray background</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">updateAltBackground</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>\n  altBackground<span class="token punctuation">,</span>\n  prevDropdown<span class="token punctuation">,</span>\n  currentDropdown\n<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> prevHeight <span class="token operator">=</span> <span class="token function">getFirstDropdownSectionHeight</span><span class="token punctuation">(</span>prevDropdown<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> currentHeight <span class="token operator">=</span> <span class="token function">getFirstDropdownSectionHeight</span><span class="token punctuation">(</span>currentDropdown<span class="token punctuation">)</span>\n  \n  <span class="token comment">// we\'ll use this function when we want a change </span>\n  <span class="token comment">// to happen immediately, without CSS transitions</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">immediateSetTranslateY</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> translateY</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token string">`translateY(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>translateY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)`</span></span>\n    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">"transform 0s"</span>\n    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transitionDuration <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// transition the grey ("alt") background from its previous height</span>\n    <span class="token comment">// to its current height</span>\n    <span class="token function">immediateSetTranslateY</span><span class="token punctuation">(</span>altBackground<span class="token punctuation">,</span> prevHeight<span class="token punctuation">)</span>\n    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      altBackground<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token string">`translateY(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)`</span></span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// immediately set the background to the appropriate height</span>\n    <span class="token comment">// since we don\'t have a stored value</span>\n    <span class="token function">immediateSetTranslateY</span><span class="token punctuation">(</span>altBackground<span class="token punctuation">,</span> currentHeight<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p data-height="265" data-theme-id="0" data-slug-hash="qKRWBe" data-default-tab="js,result" data-user="aholachek" data-embed-version="2" data-pen-title="React Stripe Menu -- Animated Background" class="codepen">See the Pen <a href="https://codepen.io/aholachek/pen/qKRWBe/">React Stripe Menu -- Animated Background</a> by Alex (<a href="https://codepen.io/aholachek">@aholachek</a>) on <a href="https://codepen.io">CodePen</a>.</p>\n<script async src="https://static.codepen.io/assets/embed/ei.js"></script>\n<p>Source: <a href="https://github.com/aholachek/react-stripe-menu">https://github.com/aholachek/react-stripe-menu</a></p>\n<p><a href="https://css-tricks.com/building-a-complex-ui-animation-in-react-simply/">Link bài gốc của tác giả</a></p>',timeToRead:5,excerpt:"Phân tích Dựng component thô chưa có animate Animate với Flip technique Chăm chúc Background animation Phân tích Trước tiên phân tích cái…",frontmatter:{title:"Tạo một animation cho component trong React",cover:"",date:"2018-07-20",category:null,tags:["react","javascript","css"],desc:"Sử dụng React, styled-components, react-flip-toolkit để tạo animation giống như mên trên trang chủ của Stripe"},fields:{slug:"/2018-07-20-huong-dan-tao-animation-cho-component-voi-react"}}},pathContext:{slug:"/2018-07-20-huong-dan-tao-animation-cho-component-voi-react",prev:{frontmatter:{title:"Tạo animation với flip technique",desc:"Trong bài này chúng ta sẽ tìm hiểu kỹ thuật FLIP có thể sử dụng để animate position và kích thước của bất kỳ DOM element nào",type:"post",category:null,tags:["css"],date:"2018-07-25",cover:""},fields:{slug:"/2018-07-25-huong-dan-tao-animate-voi-flip-technique"}},next:{frontmatter:{title:"Giới thiệu RxJS và Redux Observer",desc:"Một middleware mạnh hơn redux-thunk, ít phức tạp hơn redux-saga. Chúng ta sẽ điểm qua những khái niệm chính để bắt đầu với middleware này",type:"post",category:null,tags:["react","javascript"],date:"2018-07-18",cover:""},fields:{slug:"/2018-07-18-huong-dan-gioi-thieu-ve-redux-observer"}}}}}});
//# sourceMappingURL=path---2018-07-20-huong-dan-tao-animation-cho-component-voi-react-a008956f6a206234c642.js.map