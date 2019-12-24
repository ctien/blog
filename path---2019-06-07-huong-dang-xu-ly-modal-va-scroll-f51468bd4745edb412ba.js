webpackJsonp([0xfbd536e9e59e],{1540:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#C%C3%A1ch-%C4%91%C6%A1n-gi%E1%BA%A3n-nh%E1%BA%A5t">Cách đơn giản nhất</a></li>\n<li><a href="#Tr%C3%AAn-mobile">Trên mobile</a></li>\n<li><a href="#Gi%E1%BA%A3i-ph%C3%A1p-cu%E1%BB%91i-c%C3%B9ng">Giải pháp cuối cùng</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="cách-đơn-giản-nhất"><a href="#c%C3%A1ch-%C4%91%C6%A1n-gi%E1%BA%A3n-nh%E1%BA%A5t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cách đơn giản nhất</h2>\n<p>Đặt độ cao của body = 100% của viewport, sau đó cho overflow thành hidden, thêm mục padding right = 15 để fix trường hợp trang đã có thanh cuộn rồi</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">body.model-open</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>\n    <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n    <span class="token property">padding-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="trên-mobile"><a href="#tr%C3%AAn-mobile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Trên mobile</h2>\n<p>Cách trên chạy tốt trên desktop và android, buồn thay iOS vẫn cuộn được, thêm <code class="language-text">position fixed</code> để sửa bug này</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tuy nhiên, cách này vẫn bị vấn để bự khác, nếu cuộn xuống dưới, mở modal lên, đóng lại thì trang cuộn lên đầu</p>\n<h2 id="giải-pháp-cuối-cùng"><a href="#gi%E1%BA%A3i-ph%C3%A1p-cu%E1%BB%91i-c%C3%B9ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải pháp cuối cùng</h2>\n<p>Đi đâu rồi cũng về javascript thôi. Lưu lại vị trí scroll, set lại vị trí này khi đóng modal</p>\n<p>Khi bung modal</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">showDialog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'dialog\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'show\'</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> scrollY <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">\'--scroll-y\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>\n  body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">\'fixed\'</span><span class="token punctuation">;</span>\n  body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scrollY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Khi đóng modal</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">closeDialog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> scrollY <span class="token operator">=</span> body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top<span class="token punctuation">;</span>\n  body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>scrollY <span class="token operator">||</span> <span class="token string">\'0\'</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'dialog\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">\'show\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'scroll\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">\'--scroll-y\'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>window<span class="token punctuation">.</span>scrollY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Avoid body scrollable in safari when modal dialog shown" src="//codepen.io/geoffgraham/embed/LogERe/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/geoffgraham/pen/LogERe/\'>Avoid body scrollable in safari when modal dialog shown</a> by Geoff Graham\n  (<a href=\'https://codepen.io/geoffgraham\'>@geoffgraham</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/">Prevent Page Scrolling When a Modal is Open</a></p>',timeToRead:2,excerpt:"Cách đơn giản nhất Trên mobile Giải pháp cuối cùng Cách đơn giản nhất Đặt độ cao của body = 100% của viewport, sau đó cho overflow thành…",frontmatter:{title:"Không cho cuộn trang khi mở Modal",cover:"",date:"2019-06-07",category:null,tags:["css","javascript","thu-thuat"],desc:"Xử lý cuộn trang khi mở modal"},fields:{slug:"/2019-06-07-huong-dang-xu-ly-modal-va-scroll"}}},pathContext:{slug:"/2019-06-07-huong-dang-xu-ly-modal-va-scroll",prev:{frontmatter:{title:"3 bước tối ưu hiệu năng React App bằng các API mới của React",desc:"Bài viết hướng dẫn tối ưu hiệu năng bằng memo, useMemo, useCallback",type:"post",category:null,tags:["react","thu-thuat"],date:"2019-06-17",cover:""},fields:{slug:"/2019-06-17-huong-dan-toi-uu-hieu-nang-react-app"}},next:{frontmatter:{title:"Hướng dẫn tạo một package, publish nó lên npm",desc:"Nếu bạn có một package nào đó muốn chia sẽ cùng mọi người trên npm, thì đây là cách bạn publish package make-by-me như vậy lên npm",type:"post",category:null,tags:["javascript","step-by-step"],date:"2019-06-06",cover:""},fields:{slug:"/2019-06-06-huong-dan-publish-package-len-npm"}}}}}});
//# sourceMappingURL=path---2019-06-07-huong-dang-xu-ly-modal-va-scroll-f51468bd4745edb412ba.js.map