webpackJsonp([0xb9fdd043068b],{1538:function(n,e){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#k%e1%ba%bft-h%e1%bb%a3p-audit-v%e1%bb%9bi-c%c3%a1c-t%c3%adnh-n%c4%83ng-kh%c3%a1c">Kết hợp Audit với các tính năng khác</a></li>\n<li><a href="#c%c3%b4ng-c%e1%bb%a5-debug-payment-handler">Công cụ debug Payment Handler</a></li>\n<li><a href="#lighthouse-52">Lighthouse 5.2</a></li>\n<li><a href="#%c4%90%e1%bb%a9a-n%c3%a0o-chi%e1%ba%bfm-contentful-paint-l%e1%bb%9bn-nh%e1%ba%a5t">Đứa nào chiếm Contentful Paint lớn nhất</a></li>\n<li><a href="#g%e1%bb%adi-issue-c%e1%bb%a7a-devtools-cho-team-google">Gửi issue của DevTools cho team Google</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="kết-hợp-audit-với-các-tính-năng-khác"><a href="#k%E1%BA%BFt-h%E1%BB%A3p-audit-v%E1%BB%9Bi-c%C3%A1c-t%C3%ADnh-n%C4%83ng-kh%C3%A1c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết hợp Audit với các tính năng khác</h2>\n<p>Bên trong cửa sổ Audit, chúng ta có thể dùng kết hợp với các tính năng khác của DevTools như <strong>Request blocking</strong> (để chặn request đến một resource nào đó) và <strong>Local Overrides</strong> (cho phép dùng một file dưới local để thay cho file đang chạy thực tế)</p>\n<p>Ví dụ, <strong>Audits</strong> cho kết quả 70 điểm hiệu năng, nó đề nghị chúng ta bỏ qua một sổ resource block lại quá trình render</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/score1.png" alt="eliminating render-blocking resources">\nHình 1 - Nhận được 70 điểm hiệu năng</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/renderblockingresources.png">\nHình 2 - Có 3 đoạn script đang ảnh hưởng đến render</p>\n<p>Giờ trong cửa sổ Audit này, chúng ta mở cửa sổ <strong>request blocking</strong></p>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/blocking.png" alt="Using the Request Blocking tab to block the problematic scripts.">\nHình 3 - Sử dụng <strong>Request blocking</strong> để chặn, ko load các đoạn script là nguyên nhân của block render</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/score2.png" alt="The Performance score improved to 97 after enabling request blocking.">\nHình 4 - Sau khi đã bỏ qua các đoạn script này, chúng ta nhận được kết quả điểm Audit là 97</p>\n<p>Bạn có thể <a href="%5Bhttps://devtools.glitch.me/wndt78/multiclient.html%5D(https://devtools.glitch.me/wndt78/multiclient.html)">tự làm lại để nhớ cho lâu</a></p>\n<h2 id="công-cụ-debug-payment-handler"><a href="#c%C3%B4ng-c%E1%BB%A5-debug-payment-handler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Công cụ debug Payment Handler</h2>\n<p>Payment Handler là một một API mới của web để xử lý các thao tác liên quan đến <em>tiền trao, cháo múc</em>. Bạn có thể đọc thêm về <a href="https://developers.google.com/web/updates/2018/06/payment-handler-api">Payment Handler API ở đây</a></p>\n<p>Trong phần <strong>Background services</strong> của cửa sổ <strong>Application</strong> sẽ có thêm công cụ để debug API này</p>\n<ol>\n<li>Mở DevTools, vào tab <strong>Application</strong></li>\n<li>Chọn <strong>Payment Handler</strong> trong cột bên trái</li>\n<li>Click <strong>Record</strong>. DevTools sẽ lưu lại các sự kiện của Payment Handler trong 3 ngày, ngay cả khi đã đóng DevTools</li>\n</ol>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/payment1.png" alt="Recording Payment Handler events."></p>\n<ol start="4">\n<li>Bật <strong>Show events from other domains</strong> nếu các sự kiện Payment xảy ra trên các tên miền khác (thường là vậy, chúng ta dùng dịch vụ của bên thứ 3 như Visa)</li>\n<li>Khi có sự kiện Payment, từng dòng thông tin sẽ được lưu lại</li>\n</ol>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/payment2.png" alt="Viewing a Payment Handler event."></p>\n<h2 id="lighthouse-52"><a href="#lighthouse-52" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lighthouse 5.2</h2>\n<p>Audit sử dụng phiên bản <a href="https://github.com/GoogleChrome/lighthouse/releases/tag/v5.2.0">Lighthouse 5.2</a> (thật ra được đưa vào từ Chrome 77, nhưng mấy bạn ở Google quên note lại cho bà con, giờ mới note lại)</p>\n<p>Bổ sung <em>chẩn đoán</em> <strong>Third-Party Usage</strong> cho chúng ta dánh sách các file đang được request từ bên ngoài và đoạn code đó nó ảnh hưởng thế nào lên main thread khi trang được load</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/thirdpartycode.png" alt="A screenshot of the &#x27;Third-Party Usage&#x27; audit in the Lighthouse report UI."></p>\n<h2 id="đứa-nào-chiếm-contentful-paint-lớn-nhất"><a href="#%C4%91%E1%BB%A9a-n%C3%A0o-chi%E1%BA%BFm-contentful-paint-l%E1%BB%9Bn-nh%E1%BA%A5t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đứa nào chiếm Contentful Paint lớn nhất</h2>\n<p>Khi đánh giá hiệu năng của trang trong tab <strong>Performance</strong>, chổ <strong>Timings</strong> sẽ có một ô đánh dấu là LCP (Largest Contentful Paint), nó là thời gian render của element kích thước lớn nhất trên viewport</p>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/lcp.png" alt="The LCP marker in the Timings section."></p>\n<p>Để biết nó là DOM nào</p>\n<ol>\n<li>Click vào cái marker <strong>LCP</strong></li>\n<li>Chổ <strong>Related Node</strong> trong phần <strong>Summary</strong> bên dưới, click vào element đang có</li>\n</ol>\n<p><img src="https://developers.google.com/web/updates/images/2019/09/relatednode.png" alt="The Related Node section of the Summary tab."></p>\n<h2 id="gửi-issue-của-devtools-cho-team-google"><a href="#g%E1%BB%ADi-issue-c%E1%BB%A7a-devtools-cho-team-google" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gửi issue của DevTools cho team Google</h2>\n<p>Nếu bạn phát hiện bất kỳ con bug nào của DevTools, hoặc yêu cầu một tính năng nào đó cần thiết cho DevTools, gửi ngay cho team này ở Google.</p>\n<p><strong>Main Menu > Help > Report a DevTools issue</strong>\n<img src="https://developers.google.com/web/updates/images/2019/09/reportissue.png" alt="Main Menu > Help > Report a DevTools issue."></p>\n<p><strong>Video</strong></p>\n<p><a href="https://www.youtube.com/watch?v=VNkctDLYP6o">https://www.youtube.com/watch?v=VNkctDLYP6o</a></p>',timeToRead:4,excerpt:"Kết hợp Audit với các tính năng khác Công cụ debug Payment Handler Lighthouse 5.2 Đứa nào chiếm Contentful Paint lớn nhất Gửi issue của…",frontmatter:{title:"Có gì mới trong DevTools của Chrome 78",cover:"https://i.imgur.com/bj1kcFp.png",date:"2019-10-27",category:null,tags:["chrome"],desc:"Master chrome devtool là cần thiết cho một frontend developer, mình sẽ bắt đầu series cập nhập những tính năng mới nhất của Chrome, theo như lộ trình định sẵn thì cứ 6 tuần nó sẽ có bản cập nhập mới cho Chrome"},fields:{slug:"/2019-10-27-chrome-78-co-gi-moi"}}},pathContext:{slug:"/2019-10-27-chrome-78-co-gi-moi",prev:!1,next:{frontmatter:{title:"Bạn không cần jQuery",desc:"Không cần jQuery, bạn thể thể dùng javascript thuần để thực hiện những thao tác trước đây bạn nghĩ phải có jQuery cơ",type:"post",category:null,tags:["javascript"],date:"2019-10-25",cover:""},fields:{slug:"/2019-10-25-gioi-thieu-javascript-khong-dung-jquery"}}}}}});
//# sourceMappingURL=path---2019-10-27-chrome-78-co-gi-moi-324d03f96007ac774f85.js.map