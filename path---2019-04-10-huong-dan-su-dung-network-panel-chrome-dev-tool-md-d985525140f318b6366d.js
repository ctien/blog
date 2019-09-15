webpackJsonp([86047102904665],{1473:function(e,o){e.exports={data:{markdownRemark:{html:'<p>Panel Network trên trình duyệt Chrome là một công cụ rất hữu ích để phân tích các sự kiện network, bài này căn bản dành cho người mới nhé.</p>\n<p>Để vừa đọc vừa vọc tut này, các bạn dùng trang này để vọc\n<a href="https://devtools.glitch.me/network/getstarted.html">https://devtools.glitch.me/network/getstarted.html</a></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/demo.png" alt="Demo Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Sau khi mở Panel Network trên DevTools, ấn Ctrl+R để refresh lại trang, lúc này các sự kiện của network sẽ được ghi lại và hiển thị trên tab\n<img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/log.png" alt="Panel Network trên DevTools"></p>\n<p>Bên dưới cùng, là thông tin về tổng số request đã gửi, tổng dung lượng đã down về</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/total-requests.svg" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/total-size.svg" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Cái chart phía trên sẽ cho thấy cái nhìn khái quát về các sự kiện của network theo biểu đồ thời gian</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/hide-overview.svg" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Trong table network log</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/requests-table.svg" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<ul>\n<li>Status: mã response của HTTP</li>\n<li>Type: resource type</li>\n<li>Initiator: cho biết đứa nào đã <strong>gây</strong> ra request</li>\n<li>Size: size của resource</li>\n<li>Time: tổng số thời gian dùng để download/upload resource</li>\n<li>Waterfall: chart mô tả thời điểm request, thời gian request của một resource</li>\n</ul>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/waterfall-total-duration.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Click vào <img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/large-resource-rows-button.png" alt="Sử dụng Panel Network của Chrome DevTools"> để hiển thị thêm thông tin trên từng resource, cột size sẽ cho biết là resource này đã được compress chưa.</p>\n<p>Giá trị ở trên là size chưa compress, ở dưới là đã compress, nếu cả 2 giá trị này bằng nhau thì compress không chạy</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/large-request-rows.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Network log sẽ liên tục record thông tin khi có network request mới, nếu đã có đủ thông tin muốn lấy, click <img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/record-on.png" alt="Stop record">  để dừng việc record này lại</p>\n<p>Các column hiển thị trên Network log có thể tùy biến dễ dàng bằng cách click chuột phải lên tên cột</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/add-column.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Để giả lập môi trường mạng của mobile, sử dụng  Network Throttling</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/throttling.png" alt="Sử dụng Network Throttling Panel Network của Chrome DevTools"></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/slow3g.png" alt="Sử dụng Network Throttling Panel Network của Chrome DevTools"></p>\n<p>Để kiểm tra lần load đầu tiên, trước hết chúng ta xóa cache của trình duyệt bằng cách click và giữ vào nút refresh <img src="https://developers.google.com/web/tools/chrome-devtools/images/shared/reload.png" alt="Refresh">, chọn "Empty Cache and Hard Reload", nó sẽ xóa hết cache trên trang hiện tại trước khi load\n<img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/hardreload.png" alt="Empty Cache and Hard Reload"></p>\n<p>Chúng ta có thể dùng tab Network để tìm một string trong header và message body.</p>\n<p>Thí dụ, chúng ta muốn kiểm tra các resource có sử dụng cơ chế cache phù hợp chưa, nếu resource không thay đổi thường xuyên, trình duyệt nên được thông báo để cache các resource này. <strong>Cơ chế</strong> cache này được thiết đặt trong header, click nút search <img src="https://developers.google.com/web/tools/chrome-devtools/images/shared/search.png" alt="Search"> để hiển thị ô search, nhập Cache-Control rồi <em>enter</em>,  chúng ta sẽ có toàn bộ thông tin <code class="language-text">Cache-control: max-age</code> của từng resource</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/search.png" alt="Sử dụng Search Panel Network của Chrome DevTools"></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/results.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Với ô filter, chúng ta cũng có vài tip trên ô filter <img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/filters.png" alt="Sử dụng Panel Network của Chrome DevTools"> này</p>\n<ul>\n<li>Có thể dung regex, ví dụ <code class="language-text">/.*\\.[cj]s+$/</code> sẽ bỏ qua resource ko có chữa chữ c hoặc j</li>\n</ul>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/regex.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<ul>\n<li>Thêm dấu <code class="language-text">-</code> phía trước để loại bỏ, như <code class="language-text">-main.css</code> sẽ bỏ qua các resource có chứa <code class="language-text">main.css</code></li>\n</ul>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/negative.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<ul>\n<li><code class="language-text">domain:*anluu.com</code> để lọc các resource load từ anluu.com</li>\n</ul>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network/imgs/filter-text-box.svg" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Trường hợp muốn block một resource nào đó để kiểm tra xem chuyện gì sẽ xảy ra khi chúng ta ko load nó.</p>\n<p>Thí dụ chúng ta sẽ bỏ qua file stylesheet khi load trang, ấn tổ hợp phím <code class="language-text">Ctrl+Shift+P</code> để mở menu, gõ Blocking -> chọn <strong>Show Request Blocking</strong> </p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/commandmenu.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/block.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Chọn <em>Add pattern</em> <img src="https://developers.google.com/web/tools/chrome-devtools/images/shared/add.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Nhập main.css -> click Add.</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/addblock.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p>Sau đó refresh lại trang</p>\n<p><img src="https://developers.google.com/web/tools/chrome-devtools/network-performance/imgs/tutorial/blockedstyles.png" alt="Sử dụng Panel Network của Chrome DevTools"></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=e1gAyQuIFQo">Xem video của tut Inspect Network Activity - Chrome DevTools 101\n</a></p>',timeToRead:3,excerpt:"Panel Network trên trình duyệt Chrome là một công cụ rất hữu ích để phân tích các sự kiện network, bài này căn bản dành cho người mới nhé…",frontmatter:{title:"Sử dụng Panel Network của Chrome DevTools",cover:"",date:"2019-04-10",category:null,tags:["chrome"],desc:"Panel Network trên trình duyệt Chrome là một công cụ rất hữu ích để phân tích các sự kiện network, bài này căn bản dành cho người mới nhé."},fields:{slug:"/2019-04-10-huong-dan-su-dung-network-panel-chrome-dev-tool-md"}}},pathContext:{slug:"/2019-04-10-huong-dan-su-dung-network-panel-chrome-dev-tool-md",prev:{frontmatter:{title:"Tìm hiểu về Time Zone",desc:"Cùng luận bàn những vấn đề liên quan đến time zone",type:"post",category:null,tags:["javascript"],date:"2019-04-12",cover:""},fields:{slug:"/2019-04-12-huong-dan-tim-hieu-time-zone"}},next:{frontmatter:{title:"Các phương thức trên array cần nhớ",desc:"Khi cần loop qua một array, tìm phần tử, sắp xếp, hoặc làm gì đó trên array, khả năng rất cao là trong array đã có một phương thức sẵn để bạn xài, không cần dùng tới vòng lặp for. Chúng ta sẽ cùng điểm qua những phương thức như vậy trong bài viết này.",type:"post",category:null,tags:["javascript"],date:"2019-04-08",cover:""},fields:{slug:"/2019-04-08-cac-phuong-thuc-tren-array-can-nho"}}}}}});
//# sourceMappingURL=path---2019-04-10-huong-dan-su-dung-network-panel-chrome-dev-tool-md-d985525140f318b6366d.js.map