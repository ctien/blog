webpackJsonp([0xa63255dfade4],{1548:function(n,h){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#nguy%c3%aan-t%e1%ba%afc-thi%e1%ba%bft-k%e1%ba%bf-c%e1%bb%a7a-govuk">Nguyên tắc thiết kế của GOV.UK</a></li>\n<li>\n<p><a href="#airbnb">Airbnb</a></p>\n<ul>\n<li><a href="#%c4%90%e1%bb%93ng-nh%e1%ba%a5t">Đồng nhất</a></li>\n<li><a href="#tri%e1%bb%87u-ng%c6%b0%e1%bb%9di-s%e1%bb%ad-d%e1%bb%a5ng">Triệu người sử dụng</a></li>\n<li><a href="#bi%e1%bb%83u-t%c6%b0%e1%bb%a3ng">Biểu tượng</a></li>\n<li><a href="#ng%c3%b4n-ng%e1%bb%af-t%e1%bb%b1-nhi%c3%aan-c%e1%bb%9fi-m%e1%bb%9f">Ngôn ngữ tự nhiên, cởi mở</a></li>\n<li><a href="#l%c3%a0-ng%c6%b0%e1%bb%9di-b%e1%ba%a1n-th%c3%a2n-thi%e1%ba%bft">Là người bạn thân thiết</a></li>\n<li><a href="#thi%e1%ba%bft-k%e1%ba%bf-%c4%91%e1%bb%83-c%c3%b3-%e1%ba%a5n-t%c6%b0%e1%bb%a3ng-%c4%91%e1%ba%a7u-ti%c3%aan-t%e1%bb%91t-%c4%91%e1%ba%b9p">Thiết kế để có ấn tượng đầu tiên tốt đẹp</a></li>\n<li><a href="#tin-t%c6%b0%e1%bb%9fng-c%e1%ba%a7n-th%e1%bb%9di-gian">Tin tưởng cần thời gian</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#facebook">Facebook</a></p>\n<ul>\n<li><a href="#tri%e1%bb%87u-ng%c6%b0%e1%bb%9di-s%e1%bb%ad-d%e1%bb%a5ng-1">Triệu người sử dụng</a></li>\n<li><a href="#cho-con-ng%c6%b0%e1%bb%9di">Cho con người</a></li>\n<li><a href="#s%e1%ba%a1ch-s%e1%ba%bd">Sạch sẽ</a></li>\n<li><a href="#%c4%90%e1%bb%93ng-nh%e1%ba%a5t-1">Đồng nhất</a></li>\n<li><a href="#h%e1%bb%afu-d%e1%bb%a5ng">Hữu dụng</a></li>\n<li><a href="#nhanh">Nhanh</a></li>\n<li><a href="#minh-b%e1%ba%a1ch">Minh bạch</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#apple-c%c3%a1i-n%c3%a0y-d%c3%a0nh-cho-c%c3%a1c-b%e1%ba%a1n-nh%c3%a0-iphone">Apple (Cái này dành cho các bạn nhà iPhone)</a></p>\n<ul>\n<li><a href="#th%e1%ba%a9m-m%e1%bb%b9">Thẩm mỹ</a></li>\n<li><a href="#th%e1%bb%91ng-nh%e1%ba%a5t">Thống nhất</a></li>\n<li><a href="#t%c6%b0%c6%a1ng-t%c3%a1c-tr%e1%bb%b1c-ti%e1%ba%bfp">Tương tác trực tiếp</a></li>\n<li><a href="#ph%e1%ba%a3n-h%e1%bb%93i">Phản hồi</a></li>\n<li><a href="#%e1%ba%a8n-d%e1%bb%a5">Ẩn dụ</a></li>\n<li><a href="#user-l%c3%a0-ng%c6%b0%e1%bb%9di-quy%e1%ba%bft-%c4%91%e1%bb%8bnh">User là người quyết định</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#google-material-design">Google Material Design</a></p>\n<ul>\n<li><a href="#n%e1%bb%95i-b%e1%ba%adt-h%c3%acnh-%e1%ba%a3nh-m%e1%bb%a5c-%c4%91%c3%adch-r%c3%b5-r%c3%a0ng">Nổi bật, hình ảnh, mục đích rõ ràng</a></li>\n<li><a href="#chuy%e1%bb%83n-%c4%91%e1%bb%99ng-cung-c%e1%ba%a5p-m%e1%bb%99t-%c3%bd-ngh%c4%a9a">Chuyển động cung cấp một ý nghĩa</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#microsoft">Microsoft</a></p>\n<ul>\n<li><a href="#gi%e1%bb%af-m%e1%bb%8di-th%e1%bb%a9-%c4%91%c6%a1n-gi%e1%ba%a3n">Giữ mọi thứ đơn giản</a></li>\n<li><a href="#mang-t%c3%adnh-c%c3%a1-nh%c3%a2n">Mang tính cá nhân</a></li>\n<li><a href="#ngh%c4%a9-to%c3%a0n-di%e1%bb%87n">Nghĩ toàn diện</a></li>\n<li><a href="#t%e1%ba%a1o-c%e1%ba%a3m-gi%c3%a1c-h%c3%a0o-h%e1%bb%a9ng">Tạo cảm giác hào hứng</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<p>Nếu lập trình chúng ta có các nguyên tắc chung khi viết code như <strong>KISS</strong>, <strong>DRY</strong>, thì trong thiết kế cũng có những <strong>nguyên tắc chính</strong> khi làm việc. Những nguyên tắc này sẽ là kim chỉ nam, nếu có tranh cãi giữa các member trong team, thì cứ đè nguyên tắc này ra mà giải quyết (nghe hơi có mùi cứng nhắc, mình thì thích tùy cơ ứng biến hơn)</p>\n<h2 id="nguyên-tắc-thiết-kế-của-govuk"><a href="#nguy%C3%AAn-t%E1%BA%AFc-thi%E1%BA%BFt-k%E1%BA%BF-c%E1%BB%A7a-govuk" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nguyên tắc thiết kế của GOV.UK</h2>\n<p>Đây là danh sách của trang <a href="https://www.gov.uk/guidance/government-design-principles">GOV.UK</a></p>\n<ul>\n<li>Bắt đầu với thứ user cần</li>\n<li>Làm ít hơn</li>\n<li>Thiết kế với dữ liệu</li>\n<li>Làm mọi thứ thật dễ dàng</li>\n<li>Lặp. Rồi lặp lại lần nữa</li>\n<li>Dành cho tất cả mọi người</li>\n<li>Hiểu ngữ cảnh hiện tại</li>\n<li>Làm dịch vụ digital, không phải làm website</li>\n<li>Nhất quán, nhưng không <em>hòa tan</em> (phải có chất riêng với thằng khác)</li>\n<li>Cởi mở, mọi thứ tốt hơn</li>\n<li>Bao trừu tượng luôn các bạn, trang Gov.uk này cũng có câu tổng quát rất hay</li>\n</ul>\n<blockquote>\n<p>Thiết kế tốt là thiết kế có thể sử dụng. Phục vụ cho nhiều đối tượng sử dụng, dễ đọc nhất nhất có thể. Nếu phải từ bỏ <em>đẹp tinh tế - thì cứ bỏ luôn</em>. Chúng ta tạo sản phẩm cho nhu cầu sử dụng, không phải cho người <em>hâm mộ</em>. Chúng ta thiết kế để cả nước sử dụng, không phải những người đã từng sử dụng web. Những người cần dịch vụ của chúng ta nhất là những người đang cảm thấy khó sử dụng dịch vụ nhất. Luôn nhớ về họ ngay từ đầu.</p>\n</blockquote>\n<p>Những nguyên tắc thiết kế trong sản phẩm sẽ giúp cá nhân người thiết kế, cả thành viên trong team, PM, product owner ra định hướng được những quyết định cần thiết trong những tình huống phải lựa chọn.</p>\n<p>Chắc ai cũng từng biết đến <a href="https://developer.apple.com/design/human-interface-guidelines/">Apple’s Human Interface Guidelines</a> và <a href="https://material.io/design/guidelines-overview/">Google’s material design guidelines</a>, nguyên tắc thiết kế của 2 hệ thống này nhầm <strong>thống nhất</strong> các sản phẩm khác nhau trong hệ thống, mang lại <strong>cảm nhận đồng nhất</strong> giữa các sản phẩm.</p>\n<p>Nếu sản phẩm của bạn có mặt trên nhiều nền tảng khác nhau, chúng ta nên cân nhắc có 1 design system và 1 vài nguyên tắc chung cho nó. Chúng ta phải có sự khác biệt với những sản phẩm khác nhưng đồng nhất trên các hệ thống khác nhau, giữa các màn hình.</p>\n<p>Một vài team đặt những nguyên tắc chung như thế này: <strong>rõ ràng, đơn giản, hữu dụng</strong>, không thể tạo được những sản phẩm tốt nếu chỉ có những nguyên tắc quá căn bản, chung chung như vậy. Cho nên, chúng ta cùng tham khảo những nguyên tắc của những ông lớn xem họ định nghĩa thế nào.</p>\n<h2 id="airbnb"><a href="#airbnb" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Airbnb</h2>\n<p><img src="https://miro.medium.com/max/700/1*R9nTDNPwWChKAZRIo77yeA.gif" alt="Nguyên tắc chung của thiết kế"></p>\n<h3 id="đồng-nhất"><a href="#%C4%91%E1%BB%93ng-nh%E1%BA%A5t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đồng nhất</h3>\n<p>Mỗi một thành phần là một phần của hệ thống lớn hơn, đóng góp tích cực cho khi hệ thống lớn lên. Không có những tính năng đứng riêng một mình và nằm ngoài các phần còn lại.</p>\n<h3 id="triệu-người-sử-dụng"><a href="#tri%E1%BB%87u-ng%C6%B0%E1%BB%9Di-s%E1%BB%AD-d%E1%BB%A5ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Triệu người sử dụng</h3>\n<p>Airbnb được sử dụng bởi cộng đồng thế giới. Sản phẩm phải thể hiện sự hiếu khách và dễ dàng truy cập.</p>\n<h3 id="biểu-tượng"><a href="#bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Biểu tượng</h3>\n<p>Trong cả thiết kế và tính năng đây là điều chúng ta muốn tập trung, sản phẩm phải mang tính biểu tượng, chuẩn mực cho dòng sản phẩm như vậy, phải được thể hiện rõ ràng nhất, mạnh mẽ nhất.</p>\n<h3 id="ngôn-ngữ-tự-nhiên-cởi-mở"><a href="#ng%C3%B4n-ng%E1%BB%AF-t%E1%BB%B1-nhi%C3%AAn-c%E1%BB%9Fi-m%E1%BB%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ngôn ngữ tự nhiên, cởi mở</h3>\n<p>Mang hơi thở cuộc sống vào trong các sản phẩm, cho phép chúng ta trao đổi tốt hơn với user để cả 2 có thể hiểu nhau.</p>\n<h3 id="là-người-bạn-thân-thiết"><a href="#l%C3%A0-ng%C6%B0%E1%BB%9Di-b%E1%BA%A1n-th%C3%A2n-thi%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Là người bạn thân thiết</h3>\n<p>Không có cảm giác của thiếu tin tưởng, sản phẩm cho phép mọi người có thể hiểu về nhau hơn, như một người bạn, chúng ta sẽ có mặt ở đó khi họ cần</p>\n<h3 id="thiết-kế-để-có-ấn-tượng-đầu-tiên-tốt-đẹp"><a href="#thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%E1%BB%83-c%C3%B3-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng-%C4%91%E1%BA%A7u-ti%C3%AAn-t%E1%BB%91t-%C4%91%E1%BA%B9p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thiết kế để có ấn tượng đầu tiên tốt đẹp</h3>\n<p>Mặc dù Airbnb yêu cầu một số thông tin của user, nhưng không cung cấp thông tin này cho bên thứ 3. Nên chúng ta hỏi khách thông tin của họ nhưng không bắt buộc.</p>\n<h3 id="tin-tưởng-cần-thời-gian"><a href="#tin-t%C6%B0%E1%BB%9Fng-c%E1%BA%A7n-th%E1%BB%9Di-gian" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tin tưởng cần thời gian</h3>\n<p>Giống như cuộc sống này, bạn sẽ nhận càng nhiều từ Airbnb nếu bạn càng tin tưởng chúng tôi. Tin tưởng cần xuất phát từ cả 2 bên. Nếu khách càng tin tưởng vào chủ nhà, thì chủ nhà cũng sẽ sẵn sàng chia sẻ với khách nhiều hơn</p>\n<h2 id="facebook"><a href="#facebook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Facebook</h2>\n<h3 id="triệu-người-sử-dụng-1"><a href="#tri%E1%BB%87u-ng%C6%B0%E1%BB%9Di-s%E1%BB%AD-d%E1%BB%A5ng-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Triệu người sử dụng</h3>\n<p>Mục tiêu của chúng ta là làm cho thế giới cởi mở hơn, đi đến từng cá nhân ở mọi ngóc ngách trên thế giới. Design phải mà ai cũng có thể xài, dù ở văn hoá nào, ngôn ngữ gì, thiết bị nào, ở tầng lớp nào trong xã hội. Sản phẩm phục vụ cho 90% người sử dụng, bỏ qua những tính năng mà chỉ có một vài thiểu số người yêu cầu</p>\n<h3 id="cho-con-người"><a href="#cho-con-ng%C6%B0%E1%BB%9Di" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cho con người</h3>\n<p>User quay lại Facebook vì có bạn bè và những người họ quen biết. Đó là thứ chúng ta cung cấp như đã hứa, những người mà bạn quan tâm ở một nơi duy nhất. Lý do mà tiếng nói và những gì chúng ta muốn trình bài được ẩn đi phía sau, tiếng nói của những người user quan tâm, khuôn mặt, cảm xúc, suy nghĩ của họ được ưu tiên hàng đầu.</p>\n<h3 id="sạch-sẽ"><a href="#s%E1%BA%A1ch-s%E1%BA%BD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sạch sẽ</h3>\n<p>Phần hiển thị phải thật sạch sẽ, tinh gọn. Sạch sẽ không phải là cách tiếp cận dễ dàng, tiết chế các khoảng trống, kích thước khác nhau, màu sắc, số lượng các định dạng điều phải giảm bớt đi.</p>\n<h3 id="đồng-nhất-1"><a href="#%C4%91%E1%BB%93ng-nh%E1%BA%A5t-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đồng nhất</h3>\n<p>Chúng ta không muốn lãng phí thời gian, tăng cường sử dụng pattern, những phần giống nhau khi được thể hiện một cách giống nhau sẽ mang tới sự gần gũi và dễ sử dụng. Mọi tương tác với user điều có một mục đích: tạo sự tin tưởng. Bỏ bớt, tái sử dụng, đừng thiết kế lại.</p>\n<h3 id="hữu-dụng"><a href="#h%E1%BB%AFu-d%E1%BB%A5ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hữu dụng</h3>\n<p>Sản phẩm của chúng ta là công cụ hữu dụng không phải công cụ giải trí, được sử dụng hằng ngày cung cấp giá trị hữu ích. Không có những khoảng trắng dư thừa, tương tác dưa thừa, mọi thứ thể hiện liền mạch, nhanh nhất.</p>\n<h3 id="nhanh"><a href="#nhanh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nhanh</h3>\n<p>Không chỉ tôn trọng thời giản của bản thân, chúng ta phải biết tôn trọng thời gian người khác. Chạy phải nhanh, hiệu quả, không tốn thời gian.</p>\n<h3 id="minh-bạch"><a href="#minh-b%E1%BA%A1ch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Minh bạch</h3>\n<p>User tin tưởng trao cho chúng nhận dạng, ảnh, suy nghĩ, hội thoại của họ. Chúng ta phải trung thực và rõ ràng về mọi thứ, tại sao và những gì đang diễn ra. (Sau vụ lùm xùm làm mất thông tin user mình hoan mang Hồ Quỳnh Hương với nguyên tắc này quá)</p>\n<h2 id="apple-cái-này-dành-cho-các-bạn-nhà-iphone"><a href="#apple-c%C3%A1i-n%C3%A0y-d%C3%A0nh-cho-c%C3%A1c-b%E1%BA%A1n-nh%C3%A0-iphone" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Apple (Cái này dành cho các bạn nhà iPhone)</h2>\n<h3 id="thẩm-mỹ"><a href="#th%E1%BA%A9m-m%E1%BB%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thẩm mỹ</h3>\n<p>Thẩm mỹ trên cả bộ mặt ứng dụng và tính năng, cách hoạt động.</p>\n<p>Ví dụ ứng dụng giúp người sử dụng thực hiện các tính năng quan trọng, không sử dụng hình ảnh ko liên quan, nội dung rõ ràng, dùng control mặc định, hoạt động có thể lường trước kết quả. Ngược lại các ứng dụng như game phục vụ giải trí có thể cung cấp các giao diện vui nhộn.</p>\n<h3 id="thống-nhất"><a href="#th%E1%BB%91ng-nh%E1%BA%A5t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thống nhất</h3>\n<p>Ứng dụng đi theo chuẩn mực chung, các element được cung cấp bởi hệ thống, icon ai cũng hiểu, kiểu chữ chuẩn mực, các tính năng của ứng dụng vận hành theo cách mà user mong đợi.</p>\n<h3 id="tương-tác-trực-tiếp"><a href="#t%C6%B0%C6%A1ng-t%C3%A1c-tr%E1%BB%B1c-ti%E1%BA%BFp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tương tác trực tiếp</h3>\n<p>Luôn nhớ thiết kế để user sử dụng trực tiếp thông qua màn hình, những gì thấy trên màn hình, user có thể xoay điện thoại, họ sẽ thấy được kết quả của việc đó ngay lập tức trên màn hình.</p>\n<h3 id="phản-hồi"><a href="#ph%E1%BA%A3n-h%E1%BB%93i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phản hồi</h3>\n<p>User thực hiện 1 action nào đó, phản hồi lại kết quả action đó, để họ biết. Các element có thể tương tác được highlight rõ ràng khi user tab, các animation hiển thị ý nghĩa rõ ràng.</p>\n<h3 id="ẩn-dụ"><a href="#%E1%BA%A9n-d%E1%BB%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ẩn dụ</h3>\n<p>Khi sử dụng các đối tượng mang tính ẩn dụ (như icon) cho tương tác, cần đảm bảo nó phải được nhiều người biết đến</p>\n<h3 id="user-là-người-quyết-định"><a href="#user-l%C3%A0-ng%C6%B0%E1%BB%9Di-quy%E1%BA%BFt-%C4%91%E1%BB%8Bnh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>User là người quyết định</h3>\n<p>Ứng dụng không phải là đứa quyết định, người sử dụng sẽ quyết định làm cái gì, ứng dụng cho biết hành động đó dẫn đến kết quả gì.</p>\n<h2 id="google-material-design"><a href="#google-material-design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Google Material Design</h2>\n<h3 id="nổi-bật-hình-ảnh-mục-đích-rõ-ràng"><a href="#n%E1%BB%95i-b%E1%BA%ADt-h%C3%ACnh-%E1%BA%A3nh-m%E1%BB%A5c-%C4%91%C3%ADch-r%C3%B5-r%C3%A0ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nổi bật, hình ảnh, mục đích rõ ràng</h3>\n<p>Cách thành phần chính trong thiết kế in ấn: typography, grid, space, scale, color, image không chỉ phục vụ cho mục đích nịn mắt, nó tạo ra trật tự, ý nghĩa, tập trung.</p>\n<h3 id="chuyển-động-cung-cấp-một-ý-nghĩa"><a href="#chuy%E1%BB%83n-%C4%91%E1%BB%99ng-cung-c%E1%BA%A5p-m%E1%BB%99t-%C3%BD-ngh%C4%A9a" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chuyển động cung cấp một ý nghĩa</h3>\n<p>Mọi chuyển động cần có ý nghĩa và phù hợp, phục vụ mục đích tập trung sự chú ý và duy trì các thao tác đang thực hiện</p>\n<h2 id="microsoft"><a href="#microsoft" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Microsoft</h2>\n<h3 id="giữ-mọi-thứ-đơn-giản"><a href="#gi%E1%BB%AF-m%E1%BB%8Di-th%E1%BB%A9-%C4%91%C6%A1n-gi%E1%BA%A3n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giữ mọi thứ đơn giản</h3>\n<p>Kim chỉ nam cho mọi thiết kế của Microsoft bây giờ. Nhằm mang đến cảm giác trung thực và không bị ảnh hưởng bởi thời gian.</p>\n<h3 id="mang-tính-cá-nhân"><a href="#mang-t%C3%ADnh-c%C3%A1-nh%C3%A2n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mang tính cá nhân</h3>\n<p>Tạo một cảm xúc kết nối với từng người sử dụng. Làm sao để user khi sử dụng có được cảm giác như sản phẩm được thiết kế cho mỗi mình mình.</p>\n<h3 id="nghĩ-toàn-diện"><a href="#ngh%C4%A9-to%C3%A0n-di%E1%BB%87n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nghĩ toàn diện</h3>\n<p>Chúng ta không đơn thuần tạo ra sản phẩm, chúng ta đang xây dựng thế giới nơi chúng ta sống, một thế giới tốt hơn.</p>\n<h3 id="tạo-cảm-giác-hào-hứng"><a href="#t%E1%BA%A1o-c%E1%BA%A3m-gi%C3%A1c-h%C3%A0o-h%E1%BB%A9ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tạo cảm giác hào hứng</h3>\n<p>Tạo ra những trải nghiệm cho user mà họ biết là người đằng sau thiết kế đó là một con người thực.</p>\n<p>Cảm nhận cái này dễ thấy nhất là lúc chúng ta cài window, giờ chúng ta cảm giác như đang có người nói chuyện với mình í, không phải các thông báo đơn thuần, như có một AI đằng sau</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://medium.muz.li/design-principles-behind-great-products-6ef13cd74ccf">Design Principles Behind Great Products</a></p>',timeToRead:14,excerpt:"Nguyên tắc thiết kế của GOV.UK Airbnb Đồng nhất Triệu người sử dụng Biểu tượng Ngôn ngữ tự nhiên, cởi mở Là người bạn thân thiết Thiết kế để…",frontmatter:{title:"Principle của các sản phẩm nổi tiếng",cover:"",date:"2019-08-07",category:null,tags:["ux-ui","hoc-thuat"],desc:"Phù hợp cho các bạn thiết kế nào ko muốn làm code dạo, design dạo nữa, bạn muốn cái gì đó cao hơn ở tầng khái niệm"},fields:{slug:"/2019-08-07-nguyen-tac-chung-cua-thiet-ke"}}},pathContext:{slug:"/2019-08-07-nguyen-tac-chung-cua-thiet-ke",prev:{frontmatter:{title:"Tại sao các bạn nên học Vue",desc:"Một vài suy nghĩ cá nhân của mình về mấy cái hay ho của Vue",type:"post",category:null,tags:["vuejs","kinh-nghiem"],date:"2019-08-16",cover:""},fields:{slug:"/2019-08-16-tai-sao-cac-ban-nen-hoc-vue"}},next:{frontmatter:{title:"Nguyên lý nền tảng của lập trình function",desc:"Khái niệm ngàn người biết, bạn cũng phải biết",type:"post",category:null,tags:["javascript","hoc-thuat"],date:"2019-07-26",cover:""},fields:{slug:"/2019-07-26-nguyen-ly-chung-cua-lap-trinh-huong-function"}}}}}});
//# sourceMappingURL=path---2019-08-07-nguyen-tac-chung-cua-thiet-ke-e30dc8bd5dac6965d7bd.js.map