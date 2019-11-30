webpackJsonp([0x8ea99874c11b],{1553:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Trong bài 1 này sẽ giải thích các thuật ngữ và hướng giải quyết vấn đề xác thực user bằng token</p>\n<p>Tham khảo bài <a href="/2019-08-30-lam-quen-voi-kien-truc-serverless">Làm quen với kiến trúc Serverless</a> để biết tại sao lại có nhu cầu tách phần authentication ra thành một service riêng.</p>\n<p>Ví dụ thực tế để hiểu rõ hơn cách authentication bằng token, để các bạn dễ nhớ cơ chế authentication token vận hành, chúng ta dùng một quy trình có thật trong cuộc sống</p>\n<ul>\n<li><strong>ứng dụng</strong> = <strong>khách sạn</strong></li>\n<li><strong>authentication service</strong> = <strong>tiếp tân khách sạn</strong></li>\n<li><strong>resource của ứng dụng</strong> = <strong>phòng khách sạn</strong></li>\n<li><strong>access token</strong> = <strong>thẻ từ khách sạn</strong></li>\n<li><strong>thông tin xác thực</strong> = <strong>chứng minh nhân dân/ hoặc passport</strong></li>\n</ul>\n<p>Chúng ta sẽ nhớ cơ chế token authentication này đến hết phần đời còn lại!</p>\n<p>Khi chúng ta bước vào một khách sạn, chúng ta được phép đi đến những khu vực <em>miễn phí</em>, như sảnh chờ, nhà vệ sinh chung</p>\n<blockquote>\n<p>Mở một ứng dụng, chúng ta có thể truy cập các trang public như homepage</p>\n</blockquote>\n<p>Tuy nhiên để có thể vào phòng, hồ bơi, chúng ta cần thẻ từ của khách sạn</p>\n<blockquote>\n<p>Để truy cập vào trang account, lấy các thông tin private, chúng ta cần token</p>\n</blockquote>\n<p>Chúng ta bước tới chỗ quầy lễ tân, đưa CMND, bộ phận tiếp tân sẽ xác thực thông tin này trước khi đưa cho chúng ta một thẻ từ</p>\n<blockquote>\n<p>User đi tới trang đăng ký/đăng nhập để xác thực thông tin. Authentication service kiểm tra thông tin và trả về một token</p>\n</blockquote>\n<p>Với thẻ từ được cấp, chúng ta được phép vào phòng, hồ bơi và một số dịch vụ được quy định trong thẻ từ</p>\n<blockquote>\n<p>Khi có token, chúng ta gửi token này lên API nếu cần lấy một thông tin private</p>\n</blockquote>\n<p>Bên khách sạn sẽ hiểu là, bất kể chỗ nào bạn quét cái thẻ từ đó, thì bạn là người đang nắm giữ thẻ, nghĩa là nó sẽ không cần biết bạn có đưa thẻ đó cho ai mượn không</p>\n<blockquote>\n<p>Với token nhận được, API sẽ biết được ai là người giữ token này. Dù đứa nào đó chôm được cái token này, nó cũng sẽ cho rằng đó là bạn</p>\n</blockquote>\n<p>Khi lỡ làm mất khách thẻ từ, chúng ta bao với quầy lễ tân, họ thực hiện khóa thẻ từ bị mất, đóng cửa phòng</p>\n<blockquote>\n<p>Cơ chế deactive một token sau khi đã cấp phát, tự động "đá" user nào dùng token đã deactive ra khỏi các trang private</p>\n</blockquote>\n<p>Chúng ta không thể xài cái thẻ này hoài được, phụ thuộc vào khách sạn, họ có cho thời gian hết hạn cái thẻ đó không</p>\n<blockquote>\n<p>Authentication service sẽ có quyền thiết lập thời gian hết hạn của một token</p>\n</blockquote>\n<p>Nếu bạn <strong>chôm</strong> luôn cái thẻ từ về nhà, lần sau vào khách sạn bạn không sử dụng được nó nữa</p>\n<blockquote>\n<p>Dù cho bạn vẫn giữ token (cũ), nhưng khi đã hết hạn, bạn cũng không lấy được dữ liệu từ API</p>\n</blockquote>\n<p>Khách sạn có thể cung cấp nhiều loại thẻ từ khác nhau, bạn chỉ có thẻ vào phòng mình, nhưng bên vệ sinh họ sẽ có thẻ để mở tất cả các phòng</p>\n<blockquote>\n<p>Admin có những token riêng, được phép truy xuất đến mọi thông tin trên ứng dụng</p>\n</blockquote>\n<p>Để thẻ từ không giả mạo được, nó sẽ đi kèm một chữ ký điện tử (của từng khách sạn) trong đó, nếu không xác thực được chữ ký này, bạn sẽ không thể sử dụng</p>\n<blockquote>\n<p>Token có chữ ký điện tử để đảm bảo không bị làm giả</p>\n</blockquote>\n<p>Hy vọng qua bài viết này, các bạn có thể thuộc làu và giải thích được cơ chế token cho những người ngoại đạo biết nó là gì, vận hành ra làm sao.</p>\n<p>Đọc tiếp</p>\n<ul>\n<li><a href="/2019-10-01-giai-thich-authentication-bang-token">Authentication bằng Token - Bài 1: cơ chế authentication bằng token</a></li>\n<li><a href="/2019-10-02-giai-thich-jwt-la-gi">Authentication bằng Token - Bài 2: Giới thiệu JWT</a></li>\n<li>[Authentication bằng Token - Bài 3: Hướng dẫn authentication với React]</li>\n<li><a href="/2018-11-18-mot-so-van-de-can-quan-tam-de-bao-mat-web">Bảo mật web - Một số kiểu tấn công</a></li>\n</ul>\n<p><a target="_blank" rel="noopener noreferrer" href="https://www.jvandemo.com/simple-metaphor-to-understand-and-remember-how-token-based-authentication-works/">📜 Simple metaphor to easily understand and remember how token-based authentication works</a></p>',timeToRead:3,excerpt:"Trong bài 1 này sẽ giải thích các thuật ngữ và hướng giải quyết vấn đề xác thực user bằng token Tham khảo bài  Làm quen với kiến trúc…",frontmatter:{title:"Authentication bằng Token - Bài 1: Cơ chế authentication bằng token",cover:"",date:"2019-10-01",category:null,tags:["hoc-thuat"],desc:"Phần mềm ngày nay được phát triển theo hướng sử dụng token để làm authentication, để có thể tách chức năng này ra như một phần độc lập, cho phép phần mềm có thể scale ở mức cao nhất"},fields:{slug:"/2019-10-01-giai-thich-authentication-bang-token"}}},pathContext:{slug:"/2019-10-01-giai-thich-authentication-bang-token",prev:{frontmatter:{title:"Authentication bằng Token - Bài 2: Giới thiệu JWT",desc:"Phần mềm ngày nay được phát triển theo hướng sử dụng token để làm authentication, để có thể tách chức năng này ra như một phần độc lập, cho phép phần mềm có thể scale ở mức cao nhất",type:"post",category:null,tags:["hoc-thuat"],date:"2019-10-02",cover:""},fields:{slug:"/2019-10-02-giai-thich-jwt-la-gi"}},next:{frontmatter:{title:"Căn bản cách sử dụng media query",desc:"Những kiến thức căn bản bắt buộc nhất để bạn làm responsive",type:"post",category:null,tags:["hoc-thuat","css"],date:"2019-09-27",cover:""},fields:{slug:"/2019-09-27-huong-dan-su-dung-media-query"}}}}}});
//# sourceMappingURL=path---2019-10-01-giai-thich-authentication-bang-token-1d61bcff75f4de2fb9f6.js.map