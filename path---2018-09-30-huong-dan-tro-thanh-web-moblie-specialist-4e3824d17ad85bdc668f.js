webpackJsonp([0xc40ec85e9670],{1346:function(i,n){i.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#website-layout-and-styling">Website layout and styling</a></li>\n<li><a href="#network">Network</a></li>\n<li><a href="#accessibility">Accessibility</a></li>\n<li><a href="#progressive-web-apps">Progressive Web Apps</a></li>\n<li><a href="#performance-optimization-v%C3%A0-caching">Performance Optimization và Caching</a></li>\n<li><a href="#testing-v%C3%A0-debugging">Testing và Debugging</a></li>\n<li><a href="#kh%C3%A1i-ni%E1%BB%87m-es2015-v%C3%A0-c%C3%BA-ph%C3%A1p">Khái niệm ES2015 và cú pháp</a></li>\n<li><a href="#mobile-web-forms">Mobile Web Forms</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="website-layout-and-styling"><a href="#website-layout-and-styling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Website layout and styling</h1>\n<p>Cần nắm</p>\n<ul>\n<li>Chỉ sử dụng javascript để truy cập và thao tác trên DOM mà không dùng thư viện jQuery</li>\n<li>Khai báo document type, viewport tag phù hợp</li>\n<li>Responsive grid-base sử dụng CSS</li>\n<li>Media queries để tạo break point trên các kích thước màn hình</li>\n<li>Multimedia tag để hiển thị video và audio</li>\n<li>Responsive image theo từng resolution và hướng màn hình (ngang hay đứng) trên bất kỳ thiết bị mobile nào</li>\n<li>Cách bắt Sự kiện Touch và mouse</li>\n</ul>\n<p>Nguồn tham khảo</p>\n<ul>\n<li><a href="https://www.udacity.com/course/responsive-web-design-fundamentals--ud893">Responsive Web Design</a> - video course của udacity, rất chi tiết và tỉ mỉ.</li>\n<li><a href="/blog/2018-07-04-huong-dan-tong-hop-canh-le-voi-flexbox-alignment">Tổng quát về canh lề với Flexbox display</a></li>\n<li><a href="https://developer.mozilla.org/vi/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">Video and audio content</a>, bài này mình dịch nếu sai chổ nào các bạn sữa giúp</li>\n<li><a href="https://www.udacity.com/course/responsive-images--ud882">Responsive Image course</a></li>\n<li><a href="/blog/2018-07-30-huong-dan-tam-quan-trong-cua-thuoc-tinh-sizes-trong-the-img">Tầm quan trọng của thuộc tính sizes trong thẻ img</a></li>\n<li>Supporting both TouchEvent and MouseEvent</li>\n<li><a href="https://developer.mozilla.org/vi/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent">Touch events</a></li>\n</ul>\n<h1 id="network"><a href="#network" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Network</h1>\n<ul>\n<li>Request data sử dụng <code class="language-text">fetch()</code></li>\n<li>Kiểm trả response status, sau đó <code class="language-text">parse</code> dữ liệu này về thành data có thể sử dụng</li>\n<li>Render dữ liệu lên trang</li>\n<li>Cấu hình POST request với tham số <code class="language-text">method</code> và <code class="language-text">body</code></li>\n<li>Sử dụng đúng cách cấu hình CORS ( cross-origin resource sharing protocol ) với fetch request, tùy thuộc vào header trả về từ server</li>\n<li>Xử lý error bằng promise trong fetch request</li>\n<li>Phân tích lỗi network sử dụng các công cụ debug</li>\n</ul>\n<p>Nguồn tham khảo ( mình sẽ viết từ từ )</p>\n<ul>\n<li><a href="/blog/2018-10-01-huong-dan-gioi-thieu-fetch-javascript">Giới thiệu fetch() của javascript</a></li>\n<li><a href="/blog/2017-10-12-javascript-promise">Nắm vững Promise trong javascript</a></li>\n<li>HTTP access control (CORS)</li>\n</ul>\n<h1 id="accessibility"><a href="#accessibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility</h1>\n<ul>\n<li>Cách đặt tab order để di chuyển bằng tab</li>\n<li>Sử dụng skip navigation link để bypass</li>\n<li>Tránh sử dụng nội dung ẩn làm cản trở việc di chuyển bằng tab</li>\n<li>Sử dụng thẻ head phù hợp để dựng cấu trúc trang</li>\n<li>Sử dụng các thẻ <code class="language-text">alt</code>, <code class="language-text">label</code>, <code class="language-text">aria-label</code> và <code class="language-text">aria-labelledby</code></li>\n<li>Áp dụng độ tương phản thích hợp tuân theo quy ước chung</li>\n<li>Gởi thông báo khẩn cấp sử dụng <code class="language-text">aria-live</code></li>\n<li>Sử dụng semantic markup để giữ nội dung chính và các element khác riêng biệt</li>\n</ul>\n<p>Nguồn tham khảo</p>\n<ul>\n<li>Web Fundamentals – Accessibility</li>\n<li>Web Accessibility</li>\n<li>Mobile Accessibility</li>\n<li><a href="/blog/2018-10-02-huong-dan-su-dung-tabindex-de-di-chuyen/">Sử dụng tabindex</a></li>\n<li><a href="/blog/2018-10-05-gioi-thieu-focus">Focus</a></li>\n<li>Skip Navigation Links</li>\n<li><a href="/blog/2018-10-08-huong-dan-aria-va-su-dung-voi-ecommerce-site">ARIA</a></li>\n</ul>\n<h1 id="progressive-web-apps"><a href="#progressive-web-apps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Progressive Web Apps</h1>\n<ul>\n<li>Tạo web app có thể sử dụng offline, cache các element bằng cách đưa request về service worker</li>\n<li>Lưu những giá trị hiện thị mặc định như màu sắc, icon (nút thêm vào màn hình chính trên điện thoại) và splash screen trong web application manifest ( hoặc dùng meta tag )</li>\n<li>Tách các tính năng quan trọng và UI để có thể load độc lập nội dung</li>\n</ul>\n<p>Nguồn tham khảo ( mình sẽ viết từ từ )</p>\n<ul>\n<li>Progressive Web Apps Training</li>\n<li>Web Fundamentals - The App Shell Model</li>\n<li><a href="/blog/2018-10-16-huong-dan-progressive-web-app-cho-nguoi-moi-bat-dau">Dựng Progressive Web App đầu tiên của bạn</a></li>\n<li>Using Service Workers</li>\n</ul>\n<h1 id="performance-optimization-và-caching"><a href="#performance-optimization-v%C3%A0-caching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Performance Optimization và Caching</h1>\n<ul>\n<li>Tránh khóa thread chính (web app chạy trên một single threat thôi) bằng web worker phù hợp</li>\n<li>\n<p>Tối ưu render bằng cách sử dụng hợp lý</p>\n<ul>\n<li>Compressed và minified javascript, HTML, CSS</li>\n<li>Inline CSS cho một số trang nhất định, load bất đồng bộ một số stylesheet khác nếu cần</li>\n<li>Inline javascript trong lúc khởi chạy render  những chổ cần thiết (hoặc đánh dấu deferred, async)</li>\n<li>Đặt thứ tự load phù hợp, các phần nào bắt buộc thì cho load trước, những resource khác cho nằm sau cùng</li>\n<li>Hạn chế tạo DOM nhiều tầng lớp</li>\n<li>Sử dụng trình duyệt để phân tích lỗi trên mobile</li>\n</ul>\n</li>\n<li>Load lại file khi nó available</li>\n<li>\n<p>Lưu lại dữ liệu xuống client</p>\n<ul>\n<li><a href="/blog/2018-09-17-huong-dan-luu-token-o-dau">Quản lý session</a></li>\n<li>Cache asset nào tốn thời gian để load</li>\n<li>Sử dụng IndexedDB để lưu dữ liệu động trong lúc chạy offline</li>\n</ul>\n</li>\n</ul>\n<p>Nguồn tham khảo ( mình sẽ viết từ từ )</p>\n<ul>\n<li>Using Web Workers</li>\n<li>Offline Web Applications by Google</li>\n<li>Web Fundamentals - Performance</li>\n<li>The Offline Cookbook</li>\n<li>Cache - MDN</li>\n<li>Storage</li>\n<li>Local Storage And How To Use It On Websites</li>\n<li>IndexedDB API</li>\n<li>Get Started with Analyzing Network Performance in Chrome DevTools</li>\n</ul>\n<h1 id="testing-và-debugging"><a href="#testing-v%C3%A0-debugging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing và Debugging</h1>\n<ul>\n<li>Viết unit test để kiểm tra function</li>\n<li>Đặt breakpoint bên trong các function phức tạp để xác định chính xác luồn chạy có đúng không</li>\n<li>Sử dụng <code class="language-text">console</code> để log thông tin</li>\n<li>Re-produce và fix bug dựa trên report của user</li>\n</ul>\n<p>Nguồn tham khảo ( mình sẽ viết từ từ )</p>\n<ul>\n<li>Get Started with Debugging JavaScript in Chrome DevTools</li>\n<li><a href="/blog/2018-06-24-huong-dan-lam-viec-voi-console-trong-javascript">Làm việc với console trong javascript</a></li>\n<li>Debugging Service Workers</li>\n</ul>\n<h1 id="khái-niệm-es2015-và-cú-pháp"><a href="#kh%C3%A1i-ni%E1%BB%87m-es2015-v%C3%A0-c%C3%BA-ph%C3%A1p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khái niệm ES2015 và cú pháp</h1>\n<ul>\n<li>Cú pháp Promise để tạo hàm bất tuần tự và xử lý lỗi</li>\n<li>Biến có thể sử dụng với block scope, function scope, và cách làm cho nó không thay đổi theo <strong>context</strong> sử dụng <code class="language-text">let</code>, <code class="language-text">var</code>, <code class="language-text">const</code></li>\n<li>String literal</li>\n<li>Arrow function</li>\n<li>Default parameter cho function</li>\n<li><code class="language-text">for...of</code> để loop và object và chạy một custom function</li>\n<li>Map</li>\n<li>Set</li>\n</ul>\n<p>Nguồn tham khảo</p>\n<ul>\n<li><a href="/blog/2017-10-12-javascript-promise">JavaScript Promises</a></li>\n<li><a href="/blog/2016-11-19-phan-5-es6-can-ban-template-literals">Template literals</a></li>\n<li><a href="/blog/2016-11-16-chuong-2-es-6-can-ban-arrow-function">Arrow Function</a></li>\n<li><a href="/blog/2016-11-18-phan-4-es6-can-ban-rest-parameters-va-spread-operator">Rest Parameters và Spread Operator</a></li>\n<li><a href="https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Statements/for...of">For...of</a></li>\n<li><a href="/blog/2018-12-07-giai-thich-su-dung-map-hay-object">Map và Object trong Javascript</a></li>\n<li><a href="https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Set">Set</a></li>\n</ul>\n<h1 id="mobile-web-forms"><a href="#mobile-web-forms" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mobile Web Forms</h1>\n<ul>\n<li>Sử dụng thẻ <code class="language-text">label</code> cho input</li>\n<li>Input với giá trị <code class="language-text">type</code>, <code class="language-text">name</code>, <code class="language-text">autocomplete</code> phù hợp</li>\n<li>Sử dụng input có kích thước phù hợp cho việc touch</li>\n<li>Suggestion cho user bằng <code class="language-text">datalist</code></li>\n<li>Validate các input ở FrontEnd ( ví dụ pattern, maxlength, required)</li>\n<li>Kiểm tra validate ngay lặp tức bằng <strong>pseudo-classes</strong> trên input</li>\n<li>Thực hiện validate khi submit</li>\n</ul>\n<p>Nguồn tham khảo</p>\n<ul>\n<li><a href="/blog/2018-11-14-chi-dan-thiet-ke-form-cua-google">Chỉ dẫn thiết kế form từ Google</a></li>\n<li>Constraint Validation</li>\n<li><a href="/blog/2018-11-02-validate-form-voi-html-5">Validate form với HTML5</a></li>\n</ul>\n<p><a href="https://developers.google.com/training/certification/mobile-web-specialist/">Tham khảo cách lấy chứng chỉ Web Mobile Specialist</a></p>',timeToRead:7,excerpt:"Website layout and styling Network Accessibility Progressive Web Apps Performance Optimization và Caching Testing và Debugging Khái niệm ES…",frontmatter:{title:"Bộ kiến thức của google để được gọi là chuẩn Web Mobile Developer",cover:"",date:"2018-09-30",category:null,tags:["mobile-web-specialist"],desc:"Mình bắt đầu một series mới, đây là bài đầu tiên tổng hợp tất cả những chủ đề sẽ điểm qua trong series này, nắm hết các kiến thức này, các bạn có thể tự tin lấy chứng chỉ Web Mobile Specialist của Google"},fields:{slug:"/2018-09-30-huong-dan-tro-thanh-web-moblie-specialist"}}},pathContext:{slug:"/2018-09-30-huong-dan-tro-thanh-web-moblie-specialist",prev:{frontmatter:{title:"Giới thiệu fetch() của javascript",desc:"Tạm biệt XMLHttpRequest và cách viết dài dòng, giờ đây ta đã có fetch API",type:"post",category:null,tags:["javascript","mobile-web-specialist"],date:"2018-10-01",cover:""},fields:{slug:"/2018-10-01-huong-dan-gioi-thieu-fetch-javascript"}},next:{frontmatter:{title:"Điểm qua các kiểu navigator của thư viện react-navigation",desc:"Chúng ta cùng liệt kê qua các dạng navigator, khi nào, dùng ở đâu là hợp lý",type:"post",category:null,tags:["javascript","react-native"],date:"2018-09-27",cover:""},fields:{slug:"/2018-09-27-huong-dan-react-native-cac-kieu-react-navigation"}}}}}});
//# sourceMappingURL=path---2018-09-30-huong-dan-tro-thanh-web-moblie-specialist-4e3824d17ad85bdc668f.js.map