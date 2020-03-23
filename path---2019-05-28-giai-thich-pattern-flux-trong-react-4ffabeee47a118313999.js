webpackJsonp([0xb9fc8611e1f0],{1558:function(n,t){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81">Vấn đề</a></li>\n<li><a href="#gi%E1%BA%A3i-ph%C3%A1p-c%E1%BB%A7a-facebook-lu%E1%BB%93ng-d%E1%BB%AF-li%E1%BB%87u-m%E1%BB%99t-chi%E1%BB%81u">Giải pháp của Facebook: luồng dữ liệu một chiều</a></li>\n<li>\n<p><a href="#gi%E1%BB%9Bi-thi%E1%BB%87u-c%C3%A1c-vai-ch%C3%ADnh">Giới thiệu các vai chính</a></p>\n<ul>\n<li><a href="#b%E1%BB%8Dn-action-creator">Bọn action creator</a></li>\n<li><a href="#b%E1%BB%8Dn-dispatcher">Bọn dispatcher</a></li>\n<li><a href="#b%E1%BB%8Dn-%C4%91%E1%BA%A7u-c%E1%BA%A7u-store">Bọn đầu cầu Store</a></li>\n<li><a href="#b%E1%BB%8Dn-view">Bọn View</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h2 id="vấn-đề"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề</h2>\n<p>Trước tiên chúng ta cần biết Flux giải quyết vấn đề gì. Flux là một pattern để xử lý luồng dữ liệu trong ứng dụng. Flux và React được sinh ra và lớn lên dưới ngôi nhà Facebook. 2 đứa chúng nó <strong>thường</strong> đi cùng nhau, chứ không phải <strong>dính</strong> vào nhau như hình với bóng</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*EfeNEshl8-uwZSuUw275Ag.png" alt="Giải thích Flux pattern"></p>\n<p>Một trong những ví dụ phổ biến khi nói đến Flux là vòng lặp của tính năng notification. Khi đăng nhập vào Facebook, bạn thấy một thông báo mới trên icon cái chuông huyền diệu, một khi click vào cái chuông này, toàn bộ thông báo sẽ ko còn nằm trong <strong>new message</strong> nữa. Một vài phút sau, khi nhận được thông báo mới, cái chuông lại <strong>rung lên</strong>, báo bạn biết có thông báo mới, và cứ thế, vòng lặp cứ tiếp tục.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*4xc1FzIHWiyAvb1iAQKSqQ.png" alt="Giải thích Flux pattern"></p>\n<p>Với kiểu thiết kế Model-View</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*OcTeAqv8AU_z-O2HuucmeA.png" alt="Giải thích Flux pattern"></p>\n<p>Các model sẽ <em>nắm giữ</em> dữ liệu và truyền dữ liệu này xuống các cục view -> nơi sẽ render, hiển thị dữ liệu này.</p>\n<p>User tương tác thông qua view, view đôi lúc sẽ cập nhập lại dữ liệu của model, và đôi khi model này cần thay đổi dữ liệu trên model khác. Hơn nữa, nhiều khi một thay đổi của user kéo theo một chuỗi các thay đổi khác, có khi nó là một async. Tưởng tượng như đánh trái banh bàn, bạn ko thể biết được trái banh nó sẽ đập vào đâu hết.</p>\n<p><img src="https://cdn-images-1.medium.com/max/400/1*7myoHOaUyFEmPC-dj61CKw.png" alt="Giải thích Flux pattern"></p>\n<p>Khi ấy bạn sẽ không biết được dữ liệu bị <strong>rơi rớt</strong> ở đâu.</p>\n<h2 id="giải-pháp-của-facebook-luồng-dữ-liệu-một-chiều"><a href="#gi%E1%BA%A3i-ph%C3%A1p-c%E1%BB%A7a-facebook-lu%E1%BB%93ng-d%E1%BB%AF-li%E1%BB%87u-m%E1%BB%99t-chi%E1%BB%81u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải pháp của Facebook: luồng dữ liệu một chiều</h2>\n<p>Đội ngũ Facebook giải quyết bằng một kiến trúc khác, <strong>luồng dữ liệu sẽ đi một chiều duy nhất</strong>, một khi cần thêm dữ liệu mới, luồng lại đi từ điểm xuất phát. Và họ gọi kiến trúc đó là <strong>Flux</strong></p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*lZM0yU9ExEMd7DggVxXkxA.png" alt="Giải thích Flux pattern"></p>\n<p>Nhìn vào cái hình trên, bạn sẽ không thể cảm được của kiến trúc này ngay và luôn, không đọc tài liệu về Flux, có thể bạn sẽ chẳng hứng thú vì với nó.</p>\n<p>Cùng đi chi tiết từng khái niệm một. Hình dung tổ chức <strong>hội bàn đào</strong> trong John Wick, với những nhóm nhân vật khác nhau, nắm giữ những vai trò khác nhau.</p>\n<h2 id="giới-thiệu-các-vai-chính"><a href="#gi%E1%BB%9Bi-thi%E1%BB%87u-c%C3%A1c-vai-ch%C3%ADnh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giới thiệu các vai chính</h2>\n<h3 id="bọn-action-creator"><a href="#b%E1%BB%8Dn-action-creator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bọn action creator</h3>\n<p><img src="https://i.imgur.com/e2UBmM4.png" alt="Giải thích Flux pattern"></p>\n<p>Nhiệm vụ của bọn này là tạo ra action, tất cả những thay đổi, tương tác phải tới gặp bọn này. Nó giống như bọn ngồi điều hành điện thoại trong phim John Wick, những đứa khác tới đây, phát đi 1 thông điệp, action creator sẽ "định dạng" lại thông điệp đó bằng một mật mã mà tất các những đứa khác nằm trong hệ thống hiểu được.</p>\n<p><img src="https://i.imgur.com/lsLrRSV.png" alt="Giải thích Flux pattern"></p>\n<p>Thông điệp được gửi đi bao gồm: kiểu thông điệp (type) và nội dung chính của thông điệp (payload). Trong đó kiểu thông điệp là một hằng số đã được định nghĩa trước đó.</p>\n<p><strong>Tác dụng phụ</strong> của một hệ thống mà toàn bộ kiểu thông điệp đã được định nghĩa sẵn, <strong>lính mới</strong> vào chỉ cần mở file này ra là biết được ứng dụng đang làm, sẽ có những tình huống nào sẽ làm thay đổi trạng thái dữ liệu.</p>\n<h3 id="bọn-dispatcher"><a href="#b%E1%BB%8Dn-dispatcher" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bọn dispatcher</h3>\n<p><img src="https://i.imgur.com/nnQAAj6.png" alt="Giải thích Flux pattern"></p>\n<p>Trong John Wick, nói chung các bạn nên xem John Wick trước khi đọc bài này đó, bạn trực điện thoại nhận tin nhắn, format tin nhắn xong, bạn sẽ <strong>hét</strong> lên cho các bạn đứng trực chổ tổng đài điện thoại. Bạn <strong>trực điện thoại</strong> này biết danh sách các <strong>đầu cầu</strong> (store) cần gửi thông báo đến.</p>\n<p>Quá trình này được thực hiện một cách <strong>tuần tự</strong>, không chen lấn, không xen ngang, nếu mỗi đầu cầu cần ràng buộc về thứ tự nhận thông tin, chúng ta có để anh dispatcher này quản lý.</p>\n<p>Anh Dispatcher trong Flux sẽ khác với dispatcher trong các kiến trúc khác. Thông tin luôn được gửi đến hết các đầu cầu bất kể nó là thông tin gì. Nghĩa là mỗi đầu cầu không chỉ đăng ký một kênh thông tin nhất định, nó lắng nghe toàn bộ thông tin được gửi đi, chuyện nó quan tâm và xử lý trên từng thông tin nào là nó tự quyết định, giống như chú Bowery King nhận được yêu cầu truy sát John Wick, nhưng anh nhận tin rồi ko làm gì cả.</p>\n<h3 id="bọn-đầu-cầu-store"><a href="#b%E1%BB%8Dn-%C4%91%E1%BA%A7u-c%E1%BA%A7u-store" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bọn đầu cầu Store</h3>\n<p>Gọi là đầu cầu thì cũng chưa đầy đủ, ngoài là nơi tiếp nhận và thực thông tin, nó còn là nơi chứa toàn bộ dữ liệu của ứng dụng, nguồn tiền của 1 tổ chức, mọi luật lệ, logic của dữ liệu sẽ nằm ở đây.</p>\n<p><img src="https://media.comicbook.com/2019/05/john-wick-bowery-king-1171365-1280x0.jpeg" alt="Giải thích Flux pattern"></p>\n<p>Anh Store này như chú <a href="https://www.imdb.com/title/tt6146586/characters/nm0000401?ref_=tt_cl_t4">Bowery King</a>, khi muốn anh ấy làm gì đó, chuyển tiền, nhận tiền, đóng tiền thì bạn buộc phải làm đúng quy trình từ trên xuống dưới action creator -> dispatcher</p>\n<h3 id="bọn-view"><a href="#b%E1%BB%8Dn-view" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bọn View</h3>\n<p><img src="https://m.media-amazon.com/images/M/MV5BNTQ2MWYyYTMtOTg3NC00MjA1LWFmMTUtOWRjMWViMWIxZTBmXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SY1000_CR0,0,1499,1000_AL_.jpg" alt="Giải thích Flux pattern"></p>\n<p>Nhận dữ liệu, thay đổi thông tin hiển thị, tiếp nhận dữ liệu từ user, đưa ngược lên lại tổ chức là công dụng toàn bộ của bọn này.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*MY5xNk_JeKvGsGdywYD4EA.png" alt="Giải thích Flux pattern"></p>\n<p>Tổng hợp lại chúng ta có sơ đồ vận hành của tổ chức này như sau</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*GHrusKRFhQ0Y6rrwjqI6QQ.png" alt="Giải thích Flux pattern"></p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*66hoDpUhczSXrgH2cUUasw.png" alt="Giải thích Flux pattern"></p>\n<p>Trong hình minh họa trên, còn một đứa nữa đứng giữa View và Store, được gọi là controller view, một dạng của <strong>người đưa tin</strong>, nó sẽ nhận thông báo từ đầu cầu store khi có dữ liệu thay đổi, rồi mới đưa xuống view</p>\n<p>Khi user gửi đi một thông báo đến View</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*SusQ7Aip2fSWg6raQtPSnA.png" alt="Giải thích Flux pattern"></p>\n<p>Thông tin được gửi lại action creator</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*dkm9qsWuD9DtXzH-u-DjJQ.png" alt="Giải thích Flux pattern"></p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*RLrImTDeArSMoA4kZsajLQ.png" alt="Giải thích Flux pattern"></p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*fWBaUg9-_1-V5M2YQBWhWg.png" alt="Giải thích Flux pattern"></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207">A cartoon guide to Flux\n</a></p>',timeToRead:5,excerpt:"Vấn đề Giải pháp của Facebook: luồng dữ liệu một chiều Giới thiệu các vai chính Bọn action creator Bọn dispatcher Bọn đầu cầu Store Bọn View…",frontmatter:{title:"Giải thích Flux Pattern theo phong cách John Wick",cover:"https://i.imgur.com/fbC5Rb5.jpg",date:"2019-05-28",category:null,tags:["react","hoc-thuat"],desc:"Điểm lại các khái niệm trong Flux action, dispatch, store, điều kiện tiên quyết đề đọc bài này là nên xem lại John Wick"},fields:{slug:"/2019-05-28-giai-thich-pattern-flux-trong-react"}}},pathContext:{slug:"/2019-05-28-giai-thich-pattern-flux-trong-react",prev:{frontmatter:{title:"JSON.stringify vở lòng cho người mới",desc:"Một trong hàm kinh điển bắt buộc phải biết của mội frontend developer",type:"post",category:null,tags:["javascript","hoc-thuat"],date:"2019-06-01",cover:""},fields:{slug:"/2019-06-01-huong-dan-vo-long-su-dung-json-stringify"}},next:{frontmatter:{title:"Một vài ứng dụng hay ho của reduce",desc:"Hãy học sử dụng reduce, vượt qua những ví vụ căn bản bằng cộng, trừ, nhân, chia",type:"post",category:null,tags:["javascript","thu-thuat"],date:"2019-05-26",cover:""},fields:{slug:"/2019-05-26-ung-dung-cao-cap-cua-reduce"}}}}}});
//# sourceMappingURL=path---2019-05-28-giai-thich-pattern-flux-trong-react-4ffabeee47a118313999.js.map