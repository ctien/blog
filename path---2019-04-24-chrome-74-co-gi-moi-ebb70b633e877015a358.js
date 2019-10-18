webpackJsonp([0x9c31b93217ab],{1485:function(e,n){e.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#highlight-t%E1%BA%A5t-c%E1%BA%A3-element-%C4%91ang-%C3%A1p-d%E1%BB%A5ng-css">Highlight tất cả element đang áp dụng CSS</a></li>\n<li><a href="#lighthouse">Lighthouse</a></li>\n<li><a href="#xem-n%E1%BB%99i-dung-c%E1%BB%A7a-websocket-binary">Xem nội dung của WebSocket binary</a></li>\n<li><a href="#ch%E1%BB%A5p-%E1%BA%A3nh-m%C3%A0n-h%C3%ACnh">Chụp ảnh màn hình</a></li>\n<li><a href="#b%E1%BB%95-sung-filter-service-worker-trong-tab-network">Bổ sung filter Service worker trong tab Network</a></li>\n<li><a href="#performance-recording">Performance recording</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="highlight-tất-cả-element-đang-áp-dụng-css"><a href="#highlight-t%E1%BA%A5t-c%E1%BA%A3-element-%C4%91ang-%C3%A1p-d%E1%BB%A5ng-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Highlight tất cả element đang áp dụng CSS</h2>\n<p>Khi hover lên một property CSS, giao diện sẽ được highlight những element nào đang chịu ảnh hưởng</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/highlight.png" alt="Highlight tất cả element đang áp dụng CSS"></p>\n<h2 id="lighthouse"><a href="#lighthouse" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lighthouse</h2>\n<p>Thêm mục đánh giá <a href="https://developers.google.com/web/tools/lighthouse/audits/tap-targets">Tap targets are not sized appropriately</a>, đại khái là nó sẽ kiểm tra các element để user click, như là button, a, role=button, có được set kích thước phù hợp trên mobile hay chưa, các element có bị đặt gần nhau quá không, vì gần nhau quá user có thể vô tình click nhầm</p>\n<p><img src="https://developers.google.com/web/tools/lighthouse/audits/images/tap-targets.png" alt="Tap targets are not sized appropriately"></p>\n<p>Mục đánh giá cho PWA bây giờ được quánh giá theo cơ chế Badge, tức là anh đáp ứng đủ 9 tiêu chí nhận huân chương hạng B, 10 tiêu chí huân chương hạng A.</p>\n<h2 id="xem-nội-dung-của-websocket-binary"><a href="#xem-n%E1%BB%99i-dung-c%E1%BB%A7a-websocket-binary" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xem nội dung của WebSocket binary</h2>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/binary1.png" alt="WebSocket binary message viewer"></p>\n<p>Mở tab <strong>Network</strong>, chọn filter <strong>WS</strong> để lọc các connection dạng WebSocket</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/binary2.png" alt="WebSocket binary message viewer"></p>\n<p>Chọn vào tên WebSocket muốn xem</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/binary3.png" alt="WebSocket binary message viewer"></p>\n<p>Mở tab <strong>Messages</strong></p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/binary6.png" alt="WebSocket binary message viewer"></p>\n<p>Chọn vào binary message muốn xem, bạn có thể Copy vào clipboard <img src="https://developers.google.com/web/tools/chrome-devtools/images/shared/copy-to-clipboard.png">, thay đổi kiểu định dạng sang Base64 hoặc UTF-8</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/binary5.png" alt="WebSocket binary message viewer"></p>\n<h2 id="chụp-ảnh-màn-hình"><a href="#ch%E1%BB%A5p-%E1%BA%A3nh-m%C3%A0n-h%C3%ACnh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chụp ảnh màn hình</h2>\n<p>Tính năng này có lâu rồi, nhưng trước đây để access được hơi khó khăn vì bị ẩn đi, từ giờ nó sẽ được đưa vào Command Menu</p>\n<p><code class="language-text">Control+Shift+P</code> để mở Command Menu, gõ <code class="language-text">area</code>, chọn tiếp <strong>Capture area screenshots</strong></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/images/shared/command-menu.png" alt="Chụp ảnh màn hình"></p>\n<p>Kéo thả vào vùng muốn chụp</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/screenshot1.png" alt="Kéo thả vào vùng muốn chụp"></p>\n<h2 id="bổ-sung-filter-service-worker-trong-tab-network"><a href="#b%E1%BB%95-sung-filter-service-worker-trong-tab-network" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bổ sung filter Service worker trong tab Network</h2>\n<p>Gõ <code class="language-text">is:service-worker-initiated</code> hoặc <code class="language-text">is:service-worker-intercepted</code> trong tab Network để lọc tất cả request được khởi tạo hoặc khả năng bị modified bở service worker</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/swfilters1.png" alt="Bổ sung filter Service worker trong tab Network"></p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/swfilters1.png" alt="Bổ sung filter Service worker trong tab Network"></p>\n<h2 id="performance-recording"><a href="#performance-recording" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Performance recording</h2>\n<p>Cửa sổ Performance sẽ có thêm phần Long Task, những task nào tốn quá nhiều thời gian sẽ được gắn thêm marker màu đỏ</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/longtasks1.png" alt="Performance recording"></p>\n<p>Phần Timings cũng bổ sung mục <strong>First Pain</strong></p>\n<p><img src="https://developers.google.com/web/updates/images/2019/03/fp.png" alt="Phần Timings cũng bổ sung mục First Pain"></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=I14fXc7sXdU&list=WL&index=2&t=0s">What\'s New In DevTools (Chrome 74)\n</a></p>',timeToRead:3,excerpt:"Highlight tất cả element đang áp dụng CSS Lighthouse Xem nội dung của WebSocket binary Chụp ảnh màn hình Bổ sung filter Service worker trong…",frontmatter:{title:"Có gì mới trong DevTools của Chrome 74",cover:"",date:"2019-04-24",category:null,tags:["chrome"],desc:"Master chrome devtool là cần thiết cho một frontend developer, mình sẽ bắt đầu series cập nhập những tính năng mới nhất của Chrome, theo như lộ trình định sẵn thì cứ 6 tuần nó sẽ có bản cập nhập mới cho Chrome"},fields:{slug:"/2019-04-24-chrome-74-co-gi-moi"}}},pathContext:{slug:"/2019-04-24-chrome-74-co-gi-moi",prev:{frontmatter:{title:"Preload, prefetch và các thuộc tính khác trên link",desc:"Cùng tìm hiểu các attribute sử dụng trên thẻ link để cải thiện hiệu năng",type:"post",category:null,tags:["css"],date:"2019-04-25",cover:""},fields:{slug:"/2019-04-25-cac-thuoc-tinh-dung-tren-the-link-can-biet"}},next:{frontmatter:{title:"Vấn đề khi dùng forEach với async/await",desc:"Trường hợp khi chúng ta sử dụng async/await bên trong vòng lặp array không cho kết quả đúng như mong muốn và cách giải quyết.",type:"post",category:null,tags:["javascript"],date:"2019-04-18",cover:""},fields:{slug:"/2019-04-18-huong-dan-async-await-loi-tren-vong-lap-array"}}}}}});
//# sourceMappingURL=path---2019-04-24-chrome-74-co-gi-moi-ebb70b633e877015a358.js.map