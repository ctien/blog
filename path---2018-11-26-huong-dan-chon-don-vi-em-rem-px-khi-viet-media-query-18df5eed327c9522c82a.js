webpackJsonp([33535453645862],{1387:function(n,t){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#setup-%C4%91%E1%BB%83-th%E1%BB%AD-nghi%E1%BB%87m">Setup để thử nghiệm</a></li>\n<li><a href="#thay-%C4%91%E1%BB%95i-font-size-%E1%BB%9F-html">Thay đổi font size ở HTML</a></li>\n<li><a href="#user-g%E1%BB%8Di-zoom-in">User gọi Zoom In</a></li>\n<li><a href="#user-thay-%C4%91%E1%BB%95i-gi%C3%A1-tr%E1%BB%8B-font-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-c%E1%BB%A7a-tr%C3%ACnh-duy%E1%BB%87t">User thay đổi giá trị font mặc định của trình duyệt</a></li>\n<li><a href="#k%E1%BA%BFt-lu%E1%BA%ADn">Kết luận</a></li>\n</ul>\n<!-- /TOC -->\n<p>Các bạn đọc bài này mình mặc định bạn đã phân biệt được sự khác nhau giữa <code class="language-text">em</code> và <code class="language-text">rem</code></p>\n<h2 id="setup-để-thử-nghiệm"><a href="#setup-%C4%91%E1%BB%83-th%E1%BB%AD-nghi%E1%BB%87m" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup để thử nghiệm</h2>\n<p>Chúng ta sẽ dùng 3 div tô 3 màu khác nhau để thấy được kết quả dễ dàng</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.pixel</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">.em</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">.rem</span> <span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta viết query min-width trên 3 element này, thay đổi opacity để thấy được khi nào css này được áp dụng</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code class="language-scss"><span class="token selector">.pixel </span><span class="token punctuation">{</span>\n\t<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n\t<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n\t\t<span class="token property">opacity</span><span class="token punctuation">:</span> .5\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta sẽ đặt font-size cho html là 16px = 1em = 1rem. Như vậy 400px = 25em = 25rem</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code class="language-scss"><span class="token selector">.em </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>  \n  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 25em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.rem </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>  \n  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 25rem<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tất cả đều được trigger ở chính xác kích thước 400px</p>\n<p><img src="https://zellwk.com/images/2016/media-query-units/control.gif" alt="Dùng Px, Em hay Rem để viết media query"></p>\n<h2 id="thay-đổi-font-size-ở-html"><a href="#thay-%C4%91%E1%BB%95i-font-size-%E1%BB%9F-html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thay đổi font size ở HTML</h2>\n<p>Trường hợp phổ biến nhất chúng ta hay gặp là thay đổi font-size trên HTML</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">html</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Khi thay đổi font-size lên 200%, nghĩa là 1em = 1rem = 32px. Nếu sự thay đổi font-size này tác động lên <code class="language-text">em</code> và <code class="language-text">rem</code>, chúng ta sẽ thấy 2 element bên dưới trigger ở 800px</p>\n<p>Kết quả trên Chrome, Firefox và IE11, cả 3 thằng đều trigger ở 400px</p>\n<p><img src="https://zellwk.com/images/2016/media-query-units/chrome.gif" alt="Dùng Px, Em hay Rem để viết media query"></p>\n<p>Nếu chạy đúng, <code class="language-text">em</code> và <code class="language-text">rem</code> không nên bị ảnh hưởng bởi thay đổi font-size trên HTML, nó chỉ được phụ thuộc vào font-size mặc định của trình duyệt.</p>\n<p>Tuy nhiên, trên Safari lại cho kết quả không như mong đợi, nó trigger ở 800px</p>\n<p><img src="https://zellwk.com/images/2016/media-query-units/safari-200.gif" alt="Dùng Px, Em hay Rem để viết media query"></p>\n<p>Với kết quả này chúng ta có thể bỏ qua việc sử dụng <code class="language-text">rem</code> với media query vì nó ko đảm bảo chạy đúng trên mọi trình duyệt.</p>\n<p>Tuy nhiên, các thí nghiệm bên dưới chúng ta vẫn đưa <code class="language-text">rem</code> vào cho vui!</p>\n<h2 id="user-gọi-zoom-in"><a href="#user-g%E1%BB%8Di-zoom-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>User gọi Zoom In</h2>\n<p>Đây cũng là tình huống thường thấy, chữ quá nhỏ, user có xu hướng zoom to lên xem.</p>\n<blockquote>\n<p>Nguyên nhân chính có đơn vị <code class="language-text">em</code> là vì các trình duyệt cũ không thể update giá trị pixel khi user gọi zoom</p>\n</blockquote>\n<p>Trên Chrome, Firefox và IE, <code class="language-text">px</code>, <code class="language-text">em</code>, <code class="language-text">rem</code> xảy ra cùng lúc</p>\n<p><img src="https://zellwk.com/images/2016/media-query-units/chrome-zoom.gif" alt="Dùng Px, Em hay Rem để viết media query"></p>\n<p>Và đương nhiên Safari tiếp tục không giống ai </p>\n<p><img src="https://zellwk.com/images/2016/media-query-units/safari-zoom.gif" alt="Dùng Px, Em hay Rem để viết media query"></p>\n<p>Điều này có nghĩa là, đơn vị pixel không đúng trên mọi browser, bạn nên dừng sử dụng pixel trong câu media query, trừ khi bạn thuộc kiểu sống bất chấp sự tồn tại của safari</p>\n<h2 id="user-thay-đổi-giá-trị-font-mặc-định-của-trình-duyệt"><a href="#user-thay-%C4%91%E1%BB%95i-gi%C3%A1-tr%E1%BB%8B-font-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-c%E1%BB%A7a-tr%C3%ACnh-duy%E1%BB%87t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>User thay đổi giá trị font mặc định của trình duyệt</h2>\n<p>Rất nhiều developer tin rằng user chả đứa nào thay đổi font size mặc định của trình duyệt, tìm cái thiết đặt này trong trình duyệt đã đủ khó khăn làm user nản chí</p>\n<p>Tuy nhiên đó là niềm tin không có căn cứ, không có dữ liệu chứng minh được, user vẫn có thể google tìm cách thay đổi font size mặc định của trình duyệt, đặc biệt các thanh niên bị cận như mình.</p>\n<p>Nếu chưa biết cách thay đổi font-size mặc định của trình duyệt, mình chỉ cho</p>\n<p>Chrome: <strong>Settings > Show advanced settings > Web content</strong>\nFirefox: <strong>preferences > content > fonts and colors</strong>\nIE: <strong>page > text-size</strong></p>\n<p>Safari thì mình chưa biết thay đổi font-size của nó bằng cách nào.</p>\n<p><img src="https://zellwk.com/images/2016/media-query-units/chrome-very-large-font-size.gif" alt="Dùng Px, Em hay Rem để viết media query"></p>\n<p>Như có thể thấy, câu query dùng <code class="language-text">px</code> trigger sớm hơn <code class="language-text">em</code> và <code class="language-text">rem</code></p>\n<p>Cái này không phải là bug, vì px là đơn vị chính xác đến từng pixel!!! Nó chỉ cần biết kích thước độ rộng màn hình, không liên quan họ hàng gì tới font-size</p>\n<p>Ngược lại 2 đơn vị <code class="language-text">rem</code> và <code class="language-text">em</code> phụ thuộc hoàn toàn vào font-size của trình duyệt</p>\n<blockquote>\n<p>Chúng ta phải nói lời chia tay với pixel khi viết media query</p>\n</blockquote>\n<p>Ví dụ bạn setup để màn hình dưới 600px có một cột, ngược lại có 2 cột. Mọi thứ đẹp nếu font size là 16px, tuy nhiên nếu user đổi font size thành 20px và xem ở màn hình 650px. Đơn vị <code class="language-text">rem</code> và <code class="language-text">em</code> sẽ cho ra giao diện 1 cột, trong khi pixel vẫn <em>lì lợm</em> 2 cột bất chấp cái font chữ giờ đã to đùng.</p>\n<h2 id="kết-luận"><a href="#k%E1%BA%BFt-lu%E1%BA%ADn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết luận</h2>\n<p><strong>Đơn vị cho kết quả chấp nhận được ở mọi tình huống là <code class="language-text">em</code></strong></p>\n<p>Nếu từng thắc mắc khi đang dùng một thư viện nào đó, như bootstrap, tại sao nó lại dùng đơn vị <code class="language-text">em</code> trong câu media query, thì giờ bạn đã có câu trả lời rồi đó.</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://zellwk.com/blog/media-query-units/">PX, EM or REM Media Queries?</a></p>',timeToRead:5,excerpt:"Setup để thử nghiệm Thay đổi font size ở HTML User gọi Zoom In User thay đổi giá trị font mặc định của trình duyệt Kết luận Các bạn đọc bài…",frontmatter:{title:"Dùng Px, Em hay Rem để viết media query",cover:"",date:"2018-11-26",category:null,tags:["css"],desc:"Khi viết media query, bạn có bao giờ thắc mắc nên dùng đơn vị nào: px, em hay rem?"},fields:{slug:"/2018-11-26-huong-dan-chon-don-vi-em-rem-px-khi-viet-media-query"}}},pathContext:{slug:"/2018-11-26-huong-dan-chon-don-vi-em-rem-px-khi-viet-media-query",prev:{frontmatter:{title:"Tạo Array trong Javascript",desc:"Cùng xem qua các cách để tạo một array mới",type:"post",category:null,tags:["javascript"],date:"2018-12-02",cover:""},fields:{slug:"/2018-12-02-tao-array-trong-javascript"}},next:{frontmatter:{title:"Dựng component layout với Vue",desc:"Khi mình nói đến layout, là ám chỉ đến những phần giống nhau trên trang, như cái sườn chính của website là header, footer sẽ giống nhau trên tất cả trang, chỉ phần bên trong là khác nhau.",type:"post",category:null,tags:["vuejs"],date:"2018-11-21",cover:""},fields:{slug:"/2018-11-21-huong-dan-lam-layout-voi-vue-md"}}}}}});
//# sourceMappingURL=path---2018-11-26-huong-dan-chon-don-vi-em-rem-px-khi-viet-media-query-18df5eed327c9522c82a.js.map