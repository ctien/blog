webpackJsonp([0xe64d260aa0e6],{1443:function(e,t){e.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#b%C6%B0%E1%BB%9Bc-1-c%C3%A0i-%C4%91%E1%BA%B7t-devtools">Bước 1: Cài đặt DevTools</a></li>\n<li><a href="#b%C6%B0%E1%BB%9Bc-2-gi%E1%BA%A3-l%E1%BA%ADp-mobile">Bước 2: Giả lập mobile</a></li>\n<li>\n<p><a href="#b%C6%B0%E1%BB%9Bc-3-%C4%91%C3%A1nh-gi%C3%A1-k%E1%BA%BFt-qu%E1%BA%A3">Bước 3: Đánh giá kết quả</a></p>\n<ul>\n<li><a href="#t%C3%ACm-c%C3%A1c-%C4%91o%E1%BA%A1n-script-block-render">Tìm các đoạn script block render</a></li>\n<li><a href="#t%C3%ACm-c%C3%A1c-request-l%E1%BB%9Bn">Tìm các request lớn</a></li>\n</ul>\n</li>\n<li><a href="#x%C3%A1c-nh%E1%BA%ADn-l%E1%BA%A1i-c%C3%A1c-thay-%C4%91%E1%BB%95i-%C4%91%C3%A3-fix">Xác nhận lại các thay đổi đã fix</a></li>\n<li><a href="#%C4%91%E1%BB%8Dc-th%C3%AAm">Đọc thêm</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="bước-1-cài-đặt-devtools"><a href="#b%C6%B0%E1%BB%9Bc-1-c%C3%A0i-%C4%91%E1%BA%B7t-devtools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bước 1: Cài đặt DevTools</h1>\n<p>Giả sử bạn nhận được phàn nàn từ user là trang nào đó trên site load quá chậm. Bạn cần check theo các bước</p>\n<ol>\n<li>\n<p>Mở <a targe="_blank" href="https://googlechrome.github.io/devtools-samples/network/gs/v1.html">trang này</a> trong cửa sổ private mới</p>\n</li>\n<li>\n<p>Ấn tổ hợp phím <code class="language-text">Ctrl + Shift + I</code> để mở DevTools</p>\n</li>\n<li>\n<p>Click tab <strong>Network</strong></p>\n</li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/get-started-network-panel.png" alt="Figure 1. The Chrome DevTools Network panel, opened next to the slow page that you&#x27;re going to diagnose."></p>\n<ol start="4">\n<li>Click nút <strong>Capture Screenshots</strong> <img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/capture-screenshots.png" alt="Capture Screenshots">, nó chuyển sang xanh, để capture screenshot trong suốt quá trình trang được load</li>\n</ol>\n<h1 id="bước-2-giả-lập-mobile"><a href="#b%C6%B0%E1%BB%9Bc-2-gi%E1%BA%A3-l%E1%BA%ADp-mobile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bước 2: Giả lập mobile</h1>\n<p>Sử dụng web trên máy tính thì ít có vấn đề, vì tốc độ mạng ngày nay được cải thiện nhiều, nếu máy tính mà vẫn chậm thì bạn xem lại nhé, giả lập xem trải nghiệm trên mobile thế nào</p>\n<ol>\n<li>\n<p>Check vào ô <strong>Disable Cache</strong> để quá trình kiểm tra chính xác hơn</p>\n</li>\n<li>\n<p>Từ dropdown menu đang có giá trị <strong>No throttling</strong> chọn xuống <strong>Regular 2G</strong>. DevTools sẽ giả lập tốc độ mạng xuống 2G</p>\n</li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/get-started-setup.svg" alt="Figure 2. The Chrome DevTools Network panel, set up to emulate a mobile user&#x27;s experience. Screenshots, cache disabling, and throttling are outlined in blue, from left to right, respectively."></p>\n<h1 id="bước-3-đánh-giá-kết-quả"><a href="#b%C6%B0%E1%BB%9Bc-3-%C4%91%C3%A1nh-gi%C3%A1-k%E1%BA%BFt-qu%E1%BA%A3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bước 3: Đánh giá kết quả</h1>\n<p>Tìm xem đâu là nguyên nhân làm chậm page load bằng cách reload lại trang và xem xét kết quả.</p>\n<h2 id="tìm-các-đoạn-script-block-render"><a href="#t%C3%ACm-c%C3%A1c-%C4%91o%E1%BA%A1n-script-block-render" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tìm các đoạn script block render</h2>\n<p>Khi trình duyệt gặp tag <code class="language-text">&lt;script&gt;</code>, nó sau pause việc render, thực thi đoạn script ngay lập tức. </p>\n<ol>\n<li>Tìm các đoạn script không thật sự cần chạy ngay lập tức, đánh dấu async hoặc defer\nẤn tổ hợp <code class="language-text">Ctrl + R</code> để load lại trang.</li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/get-started-post-load.png" alt="Figure 3. The Chrome DevTools Network panel, after reloading the page."></p>\n<ol start="2">\n<li>\n<p>Để ý giá trị của <code class="language-text">DOMContentLoaded</code> trong tab <strong>Summary</strong>, phía dưới tab Network. Bạn sẽ thấy 4 giây.</p>\n</li>\n<li>\n<p>Click file <code class="language-text">main.js</code> để xem, nó mở ra một tab mới show chi tiết hơn</p>\n</li>\n<li>\n<p>Click vào tab <strong>Preview</strong> để xem source code. Đoạn script này đợi 4000ms, đánh dấu nó là async và chuyển xuống dưới <code class="language-text">&lt;body&gt;</code></p>\n</li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/get-started-preview.png" alt="Figure 4. Viewing the source code for main.js in the Preview pane."></p>\n<p>Đọc thêm <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript#parser_blocking_versus_asynchronous_javascript">Parser-blocking vs. async Javascript</a> để tìm hiểu thêm về script block render</p>\n<h2 id="tìm-các-request-lớn"><a href="#t%C3%ACm-c%C3%A1c-request-l%E1%BB%9Bn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tìm các request lớn</h2>\n<p>Trong source ví dụ, bạn thấy cái logo sẽ load rất chậm, mặc dù nó không hề block render</p>\n<ol>\n<li>Mở lại tab Network</li>\n<li>Double click lên hình screenshot</li>\n<li>Click mũi tên để di chuyển qua lại giữa các screenshot. Bên dưới screenshot là thời gian nó được chụp</li>\n<li>Hover lên Waterfall cho request logo-1024.png. Phần lớn thời gian tiêu tốn cho việc download hình này.</li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/get-started-waterfall.png" alt="Figure 5. The waterfall for logo-1024px.png."></p>\n<h1 id="xác-nhận-lại-các-thay-đổi-đã-fix"><a href="#x%C3%A1c-nh%E1%BA%ADn-l%E1%BA%A1i-c%C3%A1c-thay-%C4%91%E1%BB%95i-%C4%91%C3%A3-fix" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xác nhận lại các thay đổi đã fix</h1>\n<p>Chúng ta đã thực hiện 2 thay đổi</p>\n<ul>\n<li>Chuyển <code class="language-text">&lt;script&gt;</code> xuống dưới body, đánh dấu thành async</li>\n<li>Đổi logo sang SVG</li>\n</ul>\n<p>Giờ chúng ta chạy test lại một lần nữa để xem nó cải thiện được phần nào chưa</p>\n<ol>\n<li>Mở <a href="https://googlechrome.github.io/devtools-samples/network/gs/v2.html">trang đã sữa</a> trên tab private mới</li>\n<li>Setup DevTools tương tự như lúc trước</li>\n<li>Reload lại trang</li>\n</ol>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/get-started-post-fix.png" alt="Figure 6. A recording of the page&#x27;s load, after applying the fixes. The page used to take about 10 seconds to appear visually complete. Now it only takes about 1 second."></p>\n<h1 id="đọc-thêm"><a href="#%C4%91%E1%BB%8Dc-th%C3%AAm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đọc thêm</h1>\n<ul>\n<li><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/">Critical rendering path</a></li>\n<li><a href="https://developers.google.com/web/tools/chrome-devtools/network-performance/issues">Network issue guide</a></li>\n<li><a href="https://developers.google.com/web/tools/chrome-devtools/network-performance/reference">Network Panel Reference</a></li>\n</ul>\n<p><a href="https://developers.google.com/web/tools/chrome-devtools/network-performance/">https://developers.google.com/web/tools/chrome-devtools/network-performance/</a></p>',timeToRead:4,excerpt:"Bước 1: Cài đặt DevTools Bước 2: Giả lập mobile Bước 3: Đánh giá kết quả Tìm các đoạn script block render Tìm các request lớn Xác nhận lại…",frontmatter:{title:"Hướng dẫn kiểm tra performace với Chrome DevTools",cover:"",date:"2018-10-20",category:null,tags:["chrome","performance"],desc:"Học cách sử dụng tab Network Chrome DevTools để biết tại sao một trang load chậm, hướng dẫn từng bước một."},fields:{slug:"/2018-10-20-huong-dan-thuc-hien-kiem-tra-performance-voi-chrome-devtools"}}},pathContext:{slug:"/2018-10-20-huong-dan-thuc-hien-kiem-tra-performance-voi-chrome-devtools",prev:{frontmatter:{title:"Sử dụng localStorage trên website như thế nào",desc:"Kiến thức căn bản sử dụng localStorage để lưu thông tin cần thiết xuống trình duyệt",type:"post",category:null,tags:["javascript"],date:"2018-10-21",cover:""},fields:{slug:"/2018-10-21-huong-dan-su-dung-local-storage"}},next:{frontmatter:{title:"Giới thiệu typeof trong Javascript cho người mới bắt đầu",desc:"Hiểu cách hoạt động của typeof, một số vấn đề liên quan đến check type",type:"post",category:null,tags:["javascript"],date:"2018-10-19",cover:"https://cdn-images-1.medium.com/max/2000/1*j6B7Q6KRIhgNZQuSkVkP_w.jpeg"},fields:{slug:"/2018-10-19-gioi-thieu-typeof-trong-javascript-cho-nguoi-moi-bat-dau"}}}}}});
//# sourceMappingURL=path---2018-10-20-huong-dan-thuc-hien-kiem-tra-performance-voi-chrome-devtools-805c450f677cf3e8bb1a.js.map