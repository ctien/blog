webpackJsonp([0xf61ca842577c],{1541:function(n,t){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#gmt-utc-v%C3%A0-offset">GMT, UTC và Offset</a></li>\n<li>\n<p><a href="#time-zone--offset">Time zone !== offset</a></p>\n<ul>\n<li><a href="#summer-time-dst">Summer time (DST)</a></li>\n<li><a href="#time-zone-vui-vui-n%C3%B3-l%E1%BA%A1i-%C4%91%E1%BB%95i">Time zone vui vui nó lại đổi</a></li>\n</ul>\n</li>\n<li><a href="#time-zone-trong-m%C3%B4i-tr%C6%B0%E1%BB%9Dng-server-client">Time zone trong môi trường Server-Client</a></li>\n<li><a href="#%C4%91%E1%BB%91i-t%C6%B0%E1%BB%A3ng-date-trong-javascript">Đối tượng Date trong javascript</a></li>\n</ul>\n<!-- /TOC -->\n<p>Như Việt Nam chúng ta thì giá trị time zone chỉ có một <em>GMT+7</em>, với những nước to bự như Mỹ, Canada, Nga thì có phải tới vài ba cái time zone trong cùng một nước ( ko hiểu sao Trung Quốc thì chỉ có 1 giá trị Time zone, nên nhiều khu vực ở Trung Quốc mặt trời mọc lúc 10 AM) </p>\n<h2 id="gmt-utc-và-offset"><a href="#gmt-utc-v%C3%A0-offset" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GMT, UTC và Offset</h2>\n<p><strong>GMT (Greenwich Mean Time)</strong> là thời gian tính theo cái đồng hồ Royal Observatory ở <em>Greenwich, UK</em></p>\n<p><strong>UTC</strong> là một hệ thống tính toán thời gian quốc tế hơn, giá trị chuẩn xác hơn và được sử dụng rộng rãi hơn trong lập trình.</p>\n<p><strong>Offset</strong> </p>\n<p>Giá trị <code class="language-text">+09:00</code> trong <code class="language-text">UTC+09:00</code> nghĩa là giờ địa phương đang trước mốc giờ chuẩn UTC 9 tiếng, khoảng khác biệt giữa giờ địa phương và giờ lấy làm mốc đó gọi là offset.</p>\n<p>Một vài nước thích đặt tên time zone của mình theo tên riêng luôn, như Hàn Quốc thì nó là <code class="language-text">KST = UTC+09:00</code>, giá trị time zone này cũng là giá trị của Nhật, Indo, và vài nước khác.</p>\n<p>Giá trị offset lại ko phải căn cứ theo giờ, mà có thể chứa cả phút nữa, như Bắc Hàn thì dùng <code class="language-text">+08:30</code>, Úc <code class="language-text">+08:45</code>, <code class="language-text">+09:30</code> một số vùng</p>\n<h2 id="time-zone--offset"><a href="#time-zone--offset" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Time zone !== offset</h2>\n<p>Đôi khi chúng ta hay dùng time zone và offset mang ý nghĩa tương tự nhau, như vậy thì chưa chuẩn xác. Lý do:</p>\n<h3 id="summer-time-dst"><a href="#summer-time-dst" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Summer time (DST)</h3>\n<p>Khái niệm này sẽ không gặp ở nhiều nước, đa phần các nước ở châu  u sẽ dùng đến thuật ngữ “Summer time” này, nó có tên <strong>khoa học</strong> khác là <strong>Daylight Saving Time (DST)</strong> nghĩa là trong mùa hè thời gian nó sẽ đi trước một tiếng so với giờ chuẩn</p>\n<p>Lấy một ví dụ, California USA dùng PST ( Pacific Standard Time) trong mùa đông và PDT (Pacific Daylight Time, <code class="language-text">UTC-07:00</code>) trong mùa hè. Những khu vực sử dụng 2 time zone như vậy gọi là <strong>Pacific Time (PT)</strong></p>\n<p>Câu hỏi tiếp theo là như vậy căn cứ vào đâu để tính mùa hè và mùa đông bắt đầu/kết thúc. Phủ phàng là giá trị ngày DST ở các nước khác nhau là khác nhau và vào các năm khác nhau cũng khác nhau nốt. Như ở Canada và Mỹ, DST tính từ 2:00AM ngày chủ nhật đầu tiên của tháng 4 cho tới 12:00AM ngày chủ nhật cuối cùng tháng 10 cho tới năm 2006, nhưng sang năm 2007, thì nó từ 2:00AM ngày chủ nhật thứ 2 của tháng 3 đến 2:00AM ngày chủ nhật đầu tiên tháng 11</p>\n<h3 id="time-zone-vui-vui-nó-lại-đổi"><a href="#time-zone-vui-vui-n%C3%B3-l%E1%BA%A1i-%C4%91%E1%BB%95i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Time zone vui vui nó lại đổi</h3>\n<p>Nếu bạn thấy như vậy đã đủ phức tạp, thì bạn chưa biết gì đâu, Time zone nó còn phụ thuộc vào cả tình hình kinh tế, chính trị của một nước. Cụ thể năm 2007, tổng thống George Bush ký thỏa thuận năng lượng hồi năm 2005, làm giá trị DST này thay đổi trong năm 2007.</p>\n<p>Vì quá rắc rối và phức tạp, Nga và Hy Lạp đã ko dùng luôn DST từ năm 2011</p>\n<p>Trước đây Samoa sử dụng <code class="language-text">UTC-10:00</code>, nhưng sau này nó chuyển sang <code class="language-text">UTC+14:00</code> để cắt giảm các thương vụ thất bại với Úc và New Zealand vì sự khác nhau về time zone. Vụ này lên báo toàn thế giới năm 2011, vì nó mất đi hẳn một ngày 30 tháng 12 để điều chỉnh time zone</p>\n<h2 id="time-zone-trong-môi-trường-server-client"><a href="#time-zone-trong-m%C3%B4i-tr%C6%B0%E1%BB%9Dng-server-client" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Time zone trong môi trường Server-Client</h2>\n<p>Bây giờ hình dung bạn làm một cái app để lên lịch công việc, bạn lấy giá trị thời điểm user. Chọn ở phía client truyền xuống server rồi lưu lại giá trị đó, sau đó giá trị này được hiển thị lên phía client</p>\n<p>Chuyện sẽ ra sao nếu client truy xuất từ những time zone khác nhau. Thí dụ lúc tạo lịch ở Việt Nam, nhưng sau đó nó đi công tác ở Mỹ rồi mở lên xem, giá trị lưu ở phía server phải là giá trị cố định và ko phụ thuộc time zone. Như vậy client chỉ cần làm việc là hiển thị giá trị đó đúng với time zone hiện tại.</p>\n<p>Ngoài ra, lúc user tạo một mốc thời gian, chúng ta cũng chuyển nó qua đơn vị Unix time theo chuẩn <strong>ISO-8601</strong> để chứa luôn thông tin offset <code class="language-text">2017–03–10T11:30:00+09:00</code>. Cái chúng ta làm đó thuật ngữ chuyên ngành hay dùng 2 từ để mô tả là <code class="language-text">parsing</code> và <code class="language-text">formatting</code></p>\n<h2 id="đối-tượng-date-trong-javascript"><a href="#%C4%91%E1%BB%91i-t%C6%B0%E1%BB%A3ng-date-trong-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đối tượng Date trong javascript</h2>\n<p>Trong native javascript, chúng ta có đối tượng <code class="language-text">Date</code> để làm việc với kiểu date, nhưng chắc không dev nào chịu xài đâu, vì nó có rất nhiều vấn đề, nên đa phần đều dùng thêm 1 thư viện bổ sung, đọc thêm bài <a href="https://luubinhan.github.io/blog/2019-03-17-vi-sao-ban-ko-nen-xai-moment-js">Vì sao quần hùng kéo nhau không xài moment.js nữa</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@toastui/handling-time-zone-in-javascript-547e67aa842d">Handling Time Zone in JavaScript\n</a></p>',timeToRead:5,excerpt:"GMT, UTC và Offset Time zone !== offset Summer time (DST) Time zone vui vui nó lại đổi Time zone trong môi trường Server-Client Đối tượng…",frontmatter:{title:"Tìm hiểu về Time Zone",cover:"",date:"2019-04-12",category:null,tags:["javascript"],desc:"Cùng luận bàn những vấn đề liên quan đến time zone"},fields:{slug:"/2019-04-12-huong-dan-tim-hieu-time-zone"}}},pathContext:{slug:"/2019-04-12-huong-dan-tim-hieu-time-zone",prev:{frontmatter:{title:"Sửa lỗi scroll với fixed header bằng CSS",desc:"Giải quyết issue với fixed header và scroll đến một element bằng hashtag",type:"post",category:null,tags:["css"],date:"2019-04-17",cover:""},fields:{slug:"/2019-04-17-huong-dan-sua-loi-scroll-voi-fixed-header"}},next:{frontmatter:{title:"Sử dụng Panel Network của Chrome DevTools",desc:"Panel Network trên trình duyệt Chrome là một công cụ rất hữu ích để phân tích các sự kiện network, bài này căn bản dành cho người mới nhé.",type:"post",category:null,tags:["chrome"],date:"2019-04-10",cover:""},fields:{slug:"/2019-04-10-huong-dan-su-dung-network-panel-chrome-dev-tool-md"}}}}}});
//# sourceMappingURL=path---2019-04-12-huong-dan-tim-hieu-time-zone-e08c4182c06b9ef90e1b.js.map