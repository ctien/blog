webpackJsonp([61],{"./node_modules/json-loader/index.js!./.cache/json/2016-04-12-front-end-developer-2016-nen-hoc-gi.json":function(n,t){n.exports={data:{markdownRemark:{html:'<p><em>Hey mình có dự án mới về web, không code web lâu quá rồi, không biết bây giờ viết web thì nên làm bằng gì?</em></p>\n<p>Mình chỉ là frontend developer, nhưng bạn đã tìm đúng người rồi đó, mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học gì để tạo web apps</p>\n<!--more-->\n<p><em>Ngon, giờ mình cần một trang hiển thị những hoạt động gần đây của user, mình chỉ cần dữ liệu từ REST sau đó hiện thị lên table, trên đó mình có thể cho phép user lọc lại theo điều kiện họ muốn, chắc là xài jQuery để hiện thị dữ liệu hả?</em></p>\n<p>Trời, thời nào rồi ông, giờ còn ai viết jQuery nữa. Học React đi, năm 2016 rồi còn làm cái đó bằng jQuery.</p>\n<p><em>React, có nghe qua, mà nó là cái gì</em></p>\n<p>Thư viện siêu ngon của mấy thằng làm trong Facebook phát triển, người ta xài cái này để handle mấy cái view cho dễ.</p>\n<p><em>Mình dùng React để hiển thị dữ liệu từ server?</em></p>\n<p>Đúng rồi, trước tiên cần thêm React và React DOM vô</p>\n<p><em>Sau phải tới 2 thư viện?</em></p>\n<p>Cái đầu là thư viện chính, còn cái DOM là để thao tác với cái DOM, mà bây giờ cái DOM được mô tả trong cái JSX</p>\n<p><em>JSX là cái quái gì ?</em></p>\n<p>JSX là syntax mở rộng của javascript, giống hệt như XML, tốt hơn HTML bình thường</p>\n<p><em>HTML bình thường thì có vấn đề gì</em></p>\n<p>Giờ chả ai đi viêt HTML thuần nữa ông ơi</p>\n<p><em>Vậy 2 thư viện đó là đủ ?</em></p>\n<p>Còn, cần thêm Babel</p>\n<p><em>Thêm một thư viện nữa ?</em></p>\n<p>Babel cho phép xác định phiên bản javascript muốn dúng, nếu không có Babel vẫn dùng React được, nhưng sẽ là ES5, tụi con nít bây giờ code trên ES2016+ không</p>\n<p><em>ES5? ES2016+? mất phương hướng rồi, đó giờ chưa nghe tới</em></p>\n<p>ES5 viết tắt cho ECMAScript 5, là phiên bản thứ 5 từ khi javascript được chuẩn hóa năm 1999, mới nhất là 7.</p>\n<p><em>Không hiểu đang nói gì hết, bắt đầu rối quá. Tui chỉ cần tải một mớ dữ liệu từ server, include jquery từ CDN, gọi một cái AJAX, sau không làm vậy cho đơn giản?</em></p>\n<p>2016 rồi chú, ai xài jQuery nữa, kết thúc thời đại của cái kiểu code hầm bà lằng một đống bùi nhùi.</p>\n<p><em>Vậy giải pháp là load 3 thư viện rồi hiển thị dữ liệu lên HTML</em></p>\n<p>Cần thêm cái Module manager</p>\n<p><em>Module manager nó là cái gì</em></p>\n<p>Cái này tùy thuộc vào môi trường, trên web thì thường là phải hổ trợ AMD hoặc CommonJS modules</p>\n<p><em>rồi vậy AMD và Common JS là cái chi chi ?</em></p>\n<p>Định nghĩa nè. Có nhiều cách để mấy cái thư viện javascript và classe tương tác với nhau, biết kiểu export và requires hông? mình có thể viết nhiều file javascript rồi sử dụng Browserify để gom nó lại thành một cục</p>\n<p><em>Browserify ?</em></p>\n<p>Công cụ cho phép gom các CommonJS đã được định nghĩa, những file dependencies, thằng này được tạo ra để có thể gọi các thư viện được publish trên npm</p>\n<p><em>npm?</em></p>\n<p>Nó là cái kho javascript công cộng, được những anh lập trình thông minh đẹp trai tin dùng để đứa đứa con javascript của mình lên đây.</p>\n<p><em>Giống kiểu CDN hả?</em></p>\n<p>Không hẳn, nó như cái trung tâm dữ liệu nơi tác giả đưa source lên, nếu cần xài thì mình tải xuống chứ không gọi trực tiếp như CDN.</p>\n<p><em>À, giống Bower</em></p>\n<p>Đúng rồi, 2016, chắc ít ai xài Bower lắm cha.</p>\n<p><em>Tự thấy lạc hậu quá, vậy là cần tải mấy cái thư viện từ npm rồi sau nữa</em></p>\n<p>Trong trường hợp của chú, để sử dụng React, down cái React module về rồi import vô trong code.</p>\n<p><em>Giống Angular!</em></p>\n<p>Angular là chuyện của 2015. Mà cũng đúng, Angular sẽ sánh vai cùng với VueJS và RxJS trong tương lai còn dài</p>\n<p><em>Phải làm nhiều quá ta</em></p>\n<p>Đó là lý do cần có task manager như Grunt hoặc Gulp hoặc Broccoli để tự động chạy Browserify, biết sử dụng Mimosa hông?</p>\n<p><em>Nghe lạ tai rồi, đang nói khỉ gió gì vậy</em></p>\n<p>Task managers. Thật ra cũng không còn ngon như thời mới ra nữa, sau đó người ta chuyển qua dùng Makefiles, và bây giờ là Webpack</p>\n<p><em>Ủa tưởng Makefiles chỉ được phổ biến với cộng đồng C hoặc C++ chứ</em></p>\n<p>Đúng, nhưng người ta vẫn hay bảo, chúng ta thích làm cho mọi thứ phức tạp hết lên rồi sau đó lại quay về với những điều căn bản nhất.</p>\n<p><em>Còn Webpack là gì</em></p>\n<p>Một trình quản lý module khác cho trình duyệt, một phiên bản tốt hơn Browserify</p>\n<p><em>Tốt hơn chổ nào</em></p>\n<p>Nó cho phép sử dụng những module manager khác nhau không chỉ riêng CommonJS, đề phòng không hổ trợ ES6</p>\n<p><em>Quá confuse với mới CommoJS/ES6 luôn</em></p>\n<p>Ai cũng vậy, javascript đó giờ nó vậy</p>\n<p><em>Còn gì nữa không</em></p>\n<p>Học Typescript, nó cũng là javascript nhưng tốt hơn, và nếu đang dùng ES6 thì viết Typescript cho nó đã, giảm lỗi run-time, xài thêm cái flow để kiểm tra nữa.</p>\n<p><em>.... Flow là gì á</em></p>\n<p>Của mấy cậu nhà Facebook chế, kiểm tra lỗi khi rõ. Họ code bằng OCaml, code theo kiểu function đã lắm</p>\n<p><em>OCaml, code hướng Function ?</em></p>\n<p>Con cưng của 2016 man, chỉ cần biết code theo kiểu functional thì tốt hơn OOP, đó là những gì mà lập trình viên 2016 họ làm.</p>\n<p><em>Hồi đó học OOP ở truong trường, tưởng cái đó good lắm chứ</em></p>\n<p>Như Java trước khi bị mua lại bởi Oracle. Ý là OOP đã từng tốt và vẫn được sử dụng tới giờ, nhưng bây giờ người ta nhận ra rằng chỉnh sửa một cái state cũng giống như đá đích đứa con nít, mọi người sử dụng đối tượng immutable và code theo functional. Mà bây giờ có thư viện Ramda rồi, viết javascript theo hướng function có gì khó.</p>\n<p><em>Nữa hả Ramda là cái chi chi</em></p>\n<p>Thư viện của David Chamber viết. Nếu muốn học kiểu viết functional thì nên biết đến tên của Erik Meijer</p>\n<p><em>Dừng ở đây được rồi, cái gì cũng tốt, nhưng mà quá phức tạp và chả cần thiết, lấy dữ liệu hiển thị lên mà nhằn vậy hả, có thằng khùng nào học hết cái nùi đó chỉ để hiển thị cái table lên không, rồi quay lại với React đi, giờ làm sao</em></p>\n<p>Thật ra React không có giữ việc fetch dữ liệu, nó chỉ hiện thị thôi</p>\n<p><em>Đậu xanh. vậy chở sao get dữ liệu</em></p>\n<p>Dùng Fetch để fetch dữ liệu từ server</p>\n<p><em>Đặt tên hay quá</em></p>\n<p>Fetch là native implement cho một XMLHttpRequests tới server</p>\n<p><em>AJAX chứ gì</em></p>\n<p>AJAX chỉ là XMLHttpRequest. Fetch cho phép thực thi AJAX trên promises để tránh thảm họa với callback</p>\n<p><em>Thảm họa callback</em></p>\n<p>Đúng rồi, mỗi lần thực thi một asynchronous request tới server, mình phải đợi server response, nghĩa là mình phải thêm một function trong một function, nó được gọi là callback pyramid from hell.</p>\n<p><em>Vậy giải quyết là</em></p>\n<p>Bằng cách đưa cái callback qua promise, có thể viết code dễ hiểu hơn, dễ test hơn, thực thi một lúc nhiều request cùng lúc</p>\n<p><em>Fetch làm chuyện đó ?</em></p>\n<p>Đúng trong trường hợp user sử dụng trình duyệt hổ trợ, bằng không phải sử dụng thêm Fetch polyfill hoặc Request, Bluebird, Axios</p>\n<p><em>Trời đất ơi vậy cần bao nhiêu thư viện, bao nhiêu thư viện cho cái việc đơn giản này</em></p>\n<p>Cần javascript. Có tới hàng ngàn cái thư viện được viết bằng javascript làm được một việc. Mình chọn cái tốt nhất, thư viện thì nhiều nhưng xài có chọn lọc.</p>\n<p><em>Vậy Bluebird, Request, Axios làm chuyện gì</em></p>\n<p>Thư viện này cho phép thực thi XMLHttpRequest rồi trả về promises</p>\n<p><em>jQuery AJAX cũng làm được vậy</em></p>\n<p>KHÔNG AI dùng "J" trong năm 2016 đâu, chỉ sử dụng Fetch, polyfill,....</p>\n<p><em>Thôi chắc dừng ở đây đi</em></p>\n<p>Thật đó nếu giờ là tui phải sử dụng templating engine, tui sẽ chỉ sử dụng Typescript + SystemJS + Babel.</p>\n<p><em>Hiển thị dữ liệu thôi, cần phải phức tạp hóa vậy không trời, hay cho tui biết cần xài cái templating engine nào đi rồi tui tự học tiếp</em></p>\n<p>Vậy ông quen với cái nào</p>\n<p><em>Quên rồi, lâu quá không còn đụng tới</em></p>\n<p>jTemplate, jQote, PURE?</p>\n<p><em>Hổng quen, cho cái khác đi</em></p>\n<p>Transparency? JSRender? MarkupJS? KnockoutJS, PlatesJS? jQuery-tmpl? Handlebars? cũng còn vài người xài cái này.</p>\n<p><em>Có cái nào dễ biết hơn chút không</em></p>\n<p>Nhứt đầu rồi, underscore? công nghệ từ 2014 ông có biết không?</p>\n<p><em>Chưa bao giờ đụng tới</em></p>\n<p>Jade? DustJS? DotJS? EJS ? Coffeescript ?</p>\n<p><em>Thôi tui xin quay lại với code backen, quá nhiều thay đổi cần phải học tui không thể handle hết, cộng động javascript mấy ông đúng là điên hết rồi nếu nghĩ là có ai đó có thể biết hết chừng đó thứ</em></p>\n<p>Hiểu rồi, ông nên vô học Python đi</p>\n<p><em>Tại sao?</em></p>\n<p>Chưa từng nghe tới Python 3 luôn sao?</p>\n<p>Dịch từ: <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.gg2qmpxxd">https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.gg2qmpxxd</a></p>\n<p>Tác giả: Jose Aguinaga\nWeb Engineer. UX &#x26; Interactions Designer. Full-Stack Javascript Developer</p>',frontmatter:{date:"April 12, 2016",path:"/2016-04-12-front-end-developer-2016-nen-hoc-gi",tags:["javascript","css"],title:"FrontEnd Developer 2016 thì nên học cái gì?",desc:"Hey mình có dự án mới về web, không code web lâu quá rồi, không biết bây giờ viết web thì nên làm bằng gì? Mình chỉ là frontend developer, nhưng bạn đã tìm đúng người rồi đó, mình làm web cũng đã lâu, mình có thể chỉ bạn biết cần học gì để tạo web apps"}}},pathContext:{prev:{excerpt:'Google Accelerated Mobile Pages - Nó là gì? Ưu điểm của Google AMP Cài đặt Google AMP for Wordpress Trong giới làm web ai cũng biết một điều "Speed is King". Dân tình thích mưa một gói hàng trên mạng và phải được giao ngay lập tức, ít nhất là trong...',html:'<!-- MarkdownTOC -->\n<ul>\n<li>Google Accelerated Mobile Pages - Nó là gì?</li>\n<li>Ưu điểm của Google AMP</li>\n<li>Cài đặt Google AMP for Wordpress</li>\n</ul>\n<!-- /MarkdownTOC -->\n<p>Trong giới làm web ai cũng biết một điều "Speed is King". Dân tình thích mưa một gói hàng trên mạng và phải được giao ngay lập tức, ít nhất là trong 24g, chậm trễ vài ngày là thấy hông vui, thích post tấm hình lên facebook có triệu triệu lượt người like ngay lập tức.</p>\n<p>Kết quả <a href="https://blogs.akamai.com/2015/06/performance-matters-more-than-ever.html" target="_blank">thống kê</a> cảm nhận người dùng</p>\n<ul>\n<li>Với những trang bán hàng, 30% người dùng mong muốn trang web phải load xong trong 1 giây.</li>\n<li>Phân nữa khách hàng sẽ không quay lại mua sắm trực tuyến nếu thủ tục checkout rườm ra lâu lắc</li>\n<li>90% người mua hàng sử dụng điện thoại để tham khảo thông tin trước khi mua sắm</li>\n<li>74% người dùng sẽ đóng ngay trang web nếu nó load quá 5 giây</li>\n</ul>\n<p>Túm lại phải optimize tối đa cho trang web load sau thật nhanh. Một cách mới nếu muốn tối ưu cho người dùng điện thoại là dùng Google Accelerated Mobile Pages</p>\n<h2>Google Accelerated Mobile Pages - Nó là gì?</h2>\n<p>Gọi tắt là Google AMP là một dịch vụ của google cho phép lưu một phiên bản của trang trên google host, ưu điểm là khi truy cập vào trang này trên mobile thì nó gần như được load ngay lập tức thông qua trang tìm kiếm.</p>\n<p>Lúc search trên điện thoại bản sẽ thấy kết quá trả về một số trang có ký hiệu tia sét phía trước</p>\n<p><img src="https://luckyluu.files.wordpress.com/2016/11/amp-example1.png" alt="Lúc search trên điện thoại bản sẽ thấy kết quá trả về một số trang có ký hiệu tia sét phai trước"></p>\n<p>Tất nhiêu để làm được chuyện này thì phiên bản lưu trên google đã cắt bớt một số thành phần không cần thiết trên trang</p>\n<h2>Ưu điểm của Google AMP</h2>\n<p>Một vài ưu điểm chính dễ thấy</p>\n<ul>\n<li>Có cơ hội được hiển thị trên top bài viết trên trang kết quả tìm kiếm (thanh cuộn ngang)</li>\n<li>Trãi nghiệm người dùng tốt hơn</li>\n<li>Được google rank cao hơn, google đánh giá dựa trên tốc độ trang web load trên điện thoại</li>\n<li>Setup đơn gian giản chưa tới 20 giây</li>\n<li>Hiển thị ads trên phiên bản AMP khác với bình thường</li>\n</ul>\n<h2>Cài đặt Google AMP for Wordpress</h2>\n<p><a href="https://wordpress.org/plugins/amp/">Plugin dành cho wordpress có thể tìm tại đây</a></p>\n<p>Nói chung cài xong, active lên là chạy không cần setup gì hết. Sao khi chạy thành công trên mỗi bài viết thêm vào phía sao đường dẫn "/amp" để kiểm tra nó có hoạt dộng chưa</p>\n<p><em>Ghi chú</em></p>\n<ul>\n<li>Plugin này chỉ chạy trên Post không chạy cho page</li>\n<li>Không hổ trợ ads và thiết đặt một số thuộc tính riêng của trang AMP</li>\n<li>Không thay đổi cách hiện thị của trang AMP</li>\n</ul>\n<p>Một số plugin khác có thể sử dụng</p>\n<p><a href="https://wordpress.org/plugins/custom-amp-accelerated-mobile-pages/">Custom AMP</a></p>\n<p><a href="https://wordpress.org/plugins/accelerated-mobile-pages/">AMP for WP</a></p>\n<p>Dịch và chỉnh sửa từ <a href="http://wplift.com/google-amp">http://wplift.com/google-amp</a></p>',id:"E:/anluu/luckyluu/posts/2016-11-07-wordpress-va-google-accelerated-mobile-pages-amp-tat-ca-nhung-gi-ban-can-biet/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-11-07T13:35:13.234Z",path:"/2016-11-07-wordpress-va-google-accelerated-mobile-pages-amp-tat-ca-nhung-gi-ban-can-biet",tags:["wordpress","SEO"],title:"Wordpress và Google Accelerated Mobile Pages (AMP): Tất cả những gì bạn cần biết"}},next:!1}}}});
//# sourceMappingURL=path---2016-04-12-front-end-developer-2016-nen-hoc-gi-ca2ee0c83608ae69d257.js.map