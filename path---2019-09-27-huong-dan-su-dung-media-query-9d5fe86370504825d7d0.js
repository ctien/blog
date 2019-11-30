webpackJsonp([0xc8aff3d425a0],{1552:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#media-type">Media type</a></li>\n<li><a href="#to%c3%a1n-t%e1%bb%ad-logic">Toán tử logic</a></li>\n<li><a href="#n%c3%a2ng-c%e1%ba%a5p-t%e1%bb%ab-level-4-%c4%91%e1%ba%a1i-kh%c3%a1i-l%c3%a0-s%e1%bb%ad-d%e1%bb%a5ng-tr%c3%aan-tr%c3%acnh-duy%e1%bb%87t-c%c5%a9-kh%c3%b4ng-%c4%91%e1%ba%a3m-b%e1%ba%a3o-%c4%91%c3%b3">Nâng cấp từ level 4 (đại khái là sử dụng trên trình duyệt cũ không đảm bảo đó)</a></li>\n<li><a href="#pattern-hay-s%e1%bb%ad-d%e1%bb%a5ng">Pattern hay sử dụng</a></li>\n</ul>\n<!-- /TOC -->\n<p>Query media là kiến thức bắt buộc phải nắm nếu muốn làm tốt responsive, nó sẽ được sử dụng trong các trường hợp sau </p>\n<ul>\n<li>\n<p>Đặt điều kiện để apply css qua <code class="language-text">@media</code> hoặc <code class="language-text">@import</code></p>\n</li>\n<li>\n<p>Chỉ định cụ thể trên một số HTML element và các file resource cho <code class="language-text">&lt;link/&gt;</code> và <code class="language-text">&lt;source /&gt;</code></p>\n</li>\n<li>\n<p>Kiểm tra sự thay đổi kích thước của window trong hàm <code class="language-text">Window.matchMedia</code> và <code class="language-text">MediaQueryList.addListener</code> </p>\n</li>\n</ul>\n<p>Bài này chỉ dùng CSS <code class="language-text">@media</code> để làm ví dụ, sử dụng trên các cách khác cũng tương tự  </p>\n<h2 id="media-type"><a href="#media-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Media type</h2>\n<p>Chỉ định kiểu device sẽ có hiệu lực, nếu không truyền vào thì mặc định là <code class="language-text">all</code>  </p>\n<ul>\n<li>\n<p><code class="language-text">all</code> tất cả các loại device</p>\n</li>\n<li>\n<p><code class="language-text">print</code> đang xem trên màn hình ở chế độ preview, hoặc lúc in</p>\n</li>\n<li>\n<p><code class="language-text">screen</code> chỉ áp dụng trên màn hình</p>\n</li>\n<li>\n<p><code class="language-text">speech</code> các thiết bị đọc văn bản  </p>\n</li>\n</ul>\n<p>Các thằng khác đã bỏ rồi, nên các bạn không cần nhớ chi cho nhiều, thấy một số bài viết trên mạng còn liệt kê chi không biết.  </p>\n<p>Cũng không sử dụng nhiều đến cách này, đa phần khi thiết kế thì người ta làm trên từng kích thước độ rộng màn hình, chứ không nghĩ cụ thể cho từng loại thiết bị như để in, xem trên màn hình  </p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@media</span> speech</span><span class="token punctuation">{</span> ... <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="toán-tử-logic"><a href="#to%C3%A1n-t%E1%BB%AD-logic" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Toán tử logic</h2>\n<p>Có một số toán tử có thể sử dụng trong câu media là <code class="language-text">not</code>, <code class="language-text">and</code>, <code class="language-text">only</code>, <code class="language-text">,</code> - cái này thì giống như toán tử <code class="language-text">or</code> vậy đó</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-height</span><span class="token punctuation">:</span> 680px<span class="token punctuation">)</span><span class="token punctuation">,</span> screen and <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span> \n<span class="token atrule"><span class="token rule">@media</span> screen and <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 30em<span class="token punctuation">)</span> and <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="nâng-cấp-từ-level-4-đại-khái-là-sử-dụng-trên-trình-duyệt-cũ-không-đảm-bảo-đó"><a href="#n%C3%A2ng-c%E1%BA%A5p-t%E1%BB%AB-level-4-%C4%91%E1%BA%A1i-kh%C3%A1i-l%C3%A0-s%E1%BB%AD-d%E1%BB%A5ng-tr%C3%AAn-tr%C3%ACnh-duy%E1%BB%87t-c%C5%A9-kh%C3%B4ng-%C4%91%E1%BA%A3m-b%E1%BA%A3o-%C4%91%C3%B3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nâng cấp từ level 4 (đại khái là sử dụng trên trình duyệt cũ không đảm bảo đó)</h2>\n<p>Trước đây để áp dụng điều kiện <strong>nằm trong khoản màn hình</strong> nào đó, chúng ta dùng kiểu <code class="language-text">max-width:</code> hay <code class="language-text">min-width</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 30em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 30em<span class="token punctuation">)</span> and <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 50em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Giờ có thể viết theo kiểu</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>width &lt;= 30em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>30em &lt;= width &lt;= 50em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="pattern-hay-sử-dụng"><a href="#pattern-hay-s%E1%BB%AD-d%E1%BB%A5ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pattern hay sử dụng</h2>\n<p>Tài liệu thì rườm rà, rắc rối vậy thôi, chứ khi sử dụng, mình chỉ dùng bộ media định nghĩa trong bootstrap là đủ xài</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css">// màn hình điện thoại\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n// màn hình ipad đứng\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n// màn hình bự hơn ipad\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n// màn hình laptop trở lên\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span></code></pre>\n      </div>',timeToRead:3,excerpt:"Media type Toán tử logic Nâng cấp từ level 4 (đại khái là sử dụng trên trình duyệt cũ không đảm bảo đó) Pattern hay sử dụng Query media là…",frontmatter:{title:"Căn bản cách sử dụng media query",cover:"",date:"2019-09-27",category:null,tags:["hoc-thuat","css"],desc:"Những kiến thức căn bản bắt buộc nhất để bạn làm responsive"},fields:{slug:"/2019-09-27-huong-dan-su-dung-media-query"}}},pathContext:{slug:"/2019-09-27-huong-dan-su-dung-media-query",prev:{frontmatter:{title:"Authentication bằng Token - Bài 1: Cơ chế authentication bằng token",desc:"Phần mềm ngày nay được phát triển theo hướng sử dụng token để làm authentication, để có thể tách chức năng này ra như một phần độc lập, cho phép phần mềm có thể scale ở mức cao nhất",type:"post",category:null,tags:["hoc-thuat"],date:"2019-10-01",cover:""},fields:{slug:"/2019-10-01-giai-thich-authentication-bang-token"}},next:{frontmatter:{title:"9 VSCode extension hay ho",desc:"Tổng hợp những VScode sẽ giúp anh em lập trình chúng ta làm việc hiệu quả hơn",type:"post",category:null,tags:["javascript","hoc-thuat"],date:"2019-09-25",cover:""},fields:{slug:"/2019-09-25-vscode-extension-hay-ho-thuong-su-dung"}}}}}});
//# sourceMappingURL=path---2019-09-27-huong-dan-su-dung-media-query-9d5fe86370504825d7d0.js.map