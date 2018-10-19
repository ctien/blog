webpackJsonp([0xf9ab61dc6207],{1242:function(n,h){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#accessibility-kh%C3%B4ng-ch%E1%BB%89-l%C3%A0-tr%C3%A1ch-nhi%E1%BB%87m-c%E1%BB%A7a-developer">Accessibility không chỉ là trách nhiệm của Developer</a></li>\n<li>\n<p><a href="#accessibility-cho-d%C3%A2n-ngo%E1%BA%A1i-%C4%91%E1%BA%A1o">Accessibility cho dân ngoại đạo</a></p>\n<ul>\n<li><a href="#%C4%91%E1%BB%ABng-qu%C3%A1-ch%C3%BA-tr%E1%BB%8Dng-%C4%91%E1%BA%BFn-animation-hi%E1%BB%87u-%E1%BB%A9ng-chim-c%C3%B2-bay-l%C6%B0%E1%BB%A3n">Đừng quá chú trọng đến Animation (Hiệu ứng chim cò bay lượn)</a></li>\n<li><a href="#%C4%91%E1%BB%99-t%C6%B0%C6%A1ng-ph%E1%BA%A3n-c%E1%BA%A7n-thi%E1%BA%BFt-%C4%91%E1%BB%83-%C4%91%E1%BB%8Dc">Độ tương phản cần thiết để đọc</a></li>\n<li><a href="#th%E1%BA%ADn-tr%E1%BB%8Dng-khi-%C4%91%E1%BA%B7t-ch%E1%BB%AF-%C4%91%C3%A8-l%C3%AAn-h%C3%ACnh">Thận trọng khi đặt chữ đè lên hình</a></li>\n<li><a href="#ki%E1%BB%83m-tra-k%C3%ADch-th%C6%B0%E1%BB%9Bc-font-ch%E1%BB%AF-%C4%91%E1%BB%99-%C4%91%E1%BA%ADm-c%E1%BB%A7a-ch%E1%BB%AF">Kiểm tra kích thước font chữ, độ đậm của chữ</a></li>\n<li><a href="#link-m%E1%BB%9F-trang-m%E1%BB%9Bi-c%E1%BA%A3nh-b%C3%A1o-ng%C6%B0%E1%BB%9Di-d%C3%B9ng">Link mở trang mới, cảnh báo người dùng</a></li>\n<li><a href="#ph%C3%A2n-bi%E1%BB%87t-gi%E1%BB%AFa-c%C3%A1c-icon-social-media">Phân biệt giữa các icon social media</a></li>\n<li><a href="#%C4%91%E1%BB%ABng-tin-t%C6%B0%E1%BB%9Fng-tuy%E1%BB%87t-%C4%91%E1%BB%91i-v%C3%A0o-icon-v%C3%A0-m%C3%A0u-s%E1%BA%AFc-%C4%91%E1%BB%83-truy%E1%BB%81n-t%E1%BA%A3i-n%E1%BB%99i-dung">Đừng tin tưởng tuyệt đối vào icon và màu sắc để truyền tải nội dung</a></li>\n<li><a href="#s%E1%BA%BD-ra-sau-n%E1%BA%BFu-kh%C3%B4ng-c%C3%B3-t%C6%B0%C6%A1ng-t%C3%A1c">Sẽ ra sau nếu không có tương tác</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h2 id="accessibility-không-chỉ-là-trách-nhiệm-của-developer"><a href="#accessibility-kh%C3%B4ng-ch%E1%BB%89-l%C3%A0-tr%C3%A1ch-nhi%E1%BB%87m-c%E1%BB%A7a-developer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility không chỉ là trách nhiệm của Developer</h2>\n<p>Tình huống như thế này, bạn nhận một website thiết kế one page được approve từ khách hàng, sếp yêu cầu bạn code xong trang này trong 1 tuần, trong đó bao gồm 2 ngày làm việc với bên QA để mọi thứ perfect trước khi tới tay khách hàng. Khi nhìn vào thiết kế này, bạn nhìn ra vấn đề là trên các thiết bị nào nhỏ nhỏ xíu, mấy cái chữ nằm đè trên background này có thể gây khó đọc.</p>\n<p>Developer sẽ có một vài lựa chọn sau:</p>\n<ol>\n<li>Im lặng mặc dù nó biết như thế nó sẽ ảnh hưởng đến accessibility</li>\n<li>Kệ, làm luôn mặc dù hơi khác thiết kế chút, cứ làm xong rồi giải thích sau.</li>\n<li>Gửi một bản gợi ý những thay đổi nên làm tới anh designer hoặc khách hàng trước khi làm.</li>\n</ol>\n<p>Cái tình huống này gặp như cơm bữa, every project luôn, bạn có thể đánh giá mình thoải mái, nhưng mình sẽ chọn lựa chọn 1. Im lặng.</p>\n<p>Nếu chọn cách làm thứ 2, vâng bạn sẽ dính phải hàng tá chỉ trích từ khách hàng, từ sếp, sau không làm đúng hợp đồng, đúng yêu cầu ban đầu, và lựa chọn thứ 3 cũng tương tự. Nếu bạn là người làm việc có \'tâm\' và thứ làm cách 3 đi và xem bạn nhận được gì. Khách hàng chưa hẳn đồng ý với điều bạn nói, sếp không hài lòng vì bạn dành thời gian để đưa ra những ý kiến ko đem đến tiền, thử nghĩ nếu bạn làm cách 1, sau đó khách hàng thấy sai, kếu sửa, vậy là sếp lại có cớ đòi thêm tiền.</p>\n<p>Vâng còn một lựa chọn thứ 4 nữa, là lựa chọn mình đang làm, đi phổ cập kiến thức accessibility cho những anh designer.</p>\n<h2 id="accessibility-cho-dân-ngoại-đạo"><a href="#accessibility-cho-d%C3%A2n-ngo%E1%BA%A1i-%C4%91%E1%BA%A1o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility cho dân ngoại đạo</h2>\n<p>Bạn đem share kiến thức về accessibility cho bất kể là ai: UI Designer, content provider, project managers, khách hàng,... để mọi người biết và quan tâm đến nó, biết sự tồn tại và cần thiết của nó, để mọi người bỏ ngay cái suy nghĩ "đẹp là được"</p>\n<h3 id="Đừng-quá-chú-trọng-đến-animation-hiệu-ứng-chim-cò-bay-lượn"><a href="#%C4%90%E1%BB%ABng-qu%C3%A1-ch%C3%BA-tr%E1%BB%8Dng-%C4%91%E1%BA%BFn-animation-hi%E1%BB%87u-%E1%BB%A9ng-chim-c%C3%B2-bay-l%C6%B0%E1%BB%A3n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đừng quá chú trọng đến Animation (Hiệu ứng chim cò bay lượn)</h3>\n<p>Với khả năng của css, js, những thư viện hiện có sẵn đầy rẫy được share miễn phí, trang web bây giờ có thể nhìn như một cái slide powerpoint với những animation chim bay, cò bay, tuyết rơi, đèn pha lấp lánh. Ở góc độ người sử dụng, lần đầu tiên bạn vào trang web chắc hẳn họ sẽ thốt lên "WOW, cool ghê", nhưng tưởng tượng bạn làm một website với mục tiêu người sử dụng truy cập hàng tuần, hàng ngày thì những animation chỉ có vứt đi.</p>\n<h3 id="Độ-tương-phản-cần-thiết-để-đọc"><a href="#%C4%90%E1%BB%99-t%C6%B0%C6%A1ng-ph%E1%BA%A3n-c%E1%BA%A7n-thi%E1%BA%BFt-%C4%91%E1%BB%83-%C4%91%E1%BB%8Dc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Độ tương phản cần thiết để đọc</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961153/low-contrast-text_twvimd.jpg" alt="Góc nhìn về Accessible UI"></p>\n<p>Màu chữ và màu nền không đủ độ tương phản làm rất khó đọc.</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1508961159/low-contrast-text-sunshine_ugzxpt.jpg" alt="Góc nhìn về Accessible UI"></p>\n<p>Tương tự, bạn sẽ lướt qua và không để ý đến sự tồn tại của dòng caption bên dưới "Sunshine sue"</p>\n<p>Giải pháp? Test màu nền và màu chữ bằng công cụ sau <a href="https://webaim.org/resources/contrastchecker/">https://webaim.org/resources/contrastchecker/</a></p>\n<h3 id="thận-trọng-khi-đặt-chữ-đè-lên-hình"><a href="#th%E1%BA%ADn-tr%E1%BB%8Dng-khi-%C4%91%E1%BA%B7t-ch%E1%BB%AF-%C4%91%C3%A8-l%C3%AAn-h%C3%ACnh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thận trọng khi đặt chữ đè lên hình</h3>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1511044772/burberry-fix_mqdy7i.jpg"></p>\n<p>Đố đọc được mấy chữ màu trắng</p>\n<h3 id="kiểm-tra-kích-thước-font-chữ-độ-đậm-của-chữ"><a href="#ki%E1%BB%83m-tra-k%C3%ADch-th%C6%B0%E1%BB%9Bc-font-ch%E1%BB%AF-%C4%91%E1%BB%99-%C4%91%E1%BA%ADm-c%E1%BB%A7a-ch%E1%BB%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kiểm tra kích thước font chữ, độ đậm của chữ</h3>\n<p>Xu hướng bây giờ mấy bạn thường cứ thích dùng font chữ mỏng lét, font weight 200 thậm chí 100, nếu lướt ngang thì nhìn UI rất là elegant những mà muốn đọc thì phải nhìn thật kỹ</p>\n<p><img src="https://notlaura.com/wp-content/uploads/2017/10/typography-improvements-1200x408.jpg" alt="Góc nhìn về Accessible UI"></p>\n<h3 id="link-mở-trang-mới-cảnh-báo-người-dùng"><a href="#link-m%E1%BB%9F-trang-m%E1%BB%9Bi-c%E1%BA%A3nh-b%C3%A1o-ng%C6%B0%E1%BB%9Di-d%C3%B9ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Link mở trang mới, cảnh báo người dùng</h3>\n<p>Khi gắn link mở ra một tab mới, gắn một icon để thông báo cho người ta biết "Link này mở tab mới đó nha"</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://your_url_here.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h3 id="phân-biệt-giữa-các-icon-social-media"><a href="#ph%C3%A2n-bi%E1%BB%87t-gi%E1%BB%AFa-c%C3%A1c-icon-social-media" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phân biệt giữa các icon social media</h3>\n<p>Nếu nhìn thấy một button với icon Facebook trên đó, bạn nghĩ nó là gì? dẫn đến trang profile!. Nếu icon đó là một thao tác như share thì cần phân định rõ với lại một icon dẫn đến profile</p>\n<h3 id="Đừng-tin-tưởng-tuyệt-đối-vào-icon-và-màu-sắc-để-truyền-tải-nội-dung"><a href="#%C4%90%E1%BB%ABng-tin-t%C6%B0%E1%BB%9Fng-tuy%E1%BB%87t-%C4%91%E1%BB%91i-v%C3%A0o-icon-v%C3%A0-m%C3%A0u-s%E1%BA%AFc-%C4%91%E1%BB%83-truy%E1%BB%81n-t%E1%BA%A3i-n%E1%BB%99i-dung" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đừng tin tưởng tuyệt đối vào icon và màu sắc để truyền tải nội dung</h3>\n<p>Đại đa số người sử dụng web nhiều đều biết icon hamburger để mở ra menu chính của trang, nhưng đừng gom đũa cả nắm như thế mà bỏ hết chữ nghĩa, dồn hết vào menu hamburger - cho gọn.</p>\n<p>Các bạn trên vnexpress nghĩ sẽ rất là cool nếu trên menu mỗi chuyên mục sẽ có màu sắc khác nhau, nhưng thực tế phũ phàng rằng, sự phân định màu sắc theo quan điểm cá nhân này của bạn thiết kế không đem đến lợi ích vì cho người đọc, ai nói mục màu xanh dương thì đại diện cho các bài viết thuộc chuyên mục gia đình, xanh lá là cho thể thao.</p>\n<h3 id="sẽ-ra-sau-nếu-không-có-tương-tác"><a href="#s%E1%BA%BD-ra-sau-n%E1%BA%BFu-kh%C3%B4ng-c%C3%B3-t%C6%B0%C6%A1ng-t%C3%A1c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sẽ ra sau nếu không có tương tác</h3>\n<p>Lỗi dễ thấy trên các trang bán hàng nếu đặt giá hoặc nút mua sản phẩm ẩn đi, chỉ xuất hiện khi có chuột hover lên, và nếu không có hover lên thì sao? người dùng chẳng thấy gì cả, trên điện thoại người ta cũng không rảnh đâu mà đưa tay lên để xem giá từng sản phẩm.</p>',timeToRead:8,excerpt:"Accessibility không chỉ là trách nhiệm của Developer Accessibility cho dân ngoại đạo Đừng quá chú trọng đến Animation (Hiệu ứng chim cò bay…",frontmatter:{title:"Góc nhìn về Accessible UI",cover:"",date:"2017-11-29",category:"ux-ui",tags:["ux-ui"],desc:"Thuật ngữ Accessibility đang hot trong thời gian gần đây, đã đến lúc thiết kế với tư duy sản phẩm cho mọi người."},fields:{slug:"/2017-11-29-goc-nhin-ve-accessible-ui-web"}}},pathContext:{slug:"/2017-11-29-goc-nhin-ve-accessible-ui-web",prev:{frontmatter:{title:"Một số nguồn để luyện công phu",desc:"Tổng hợp một số nguồn để đọc và nghiên cứu javascript từ căn bản đến chuyên sâu",type:"post",category:"javascript",tags:["javascript"],date:"2018-01-01",cover:""},fields:{slug:"/2018-01-01-huong-dan-mot-so-resource-de-hoc-javascript"}},next:{frontmatter:{title:"Higher-Order function trong javascript",desc:"Một trong những đặc thù của Javascript khiến nó rất phù hợp với function programming là cho phép viết function higher-order, kiểu function cho phép nhận một function khác như một argument hoặc trả về một function",type:"post",category:"javascript",tags:["javascript"],date:"2017-11-09",cover:""},fields:{slug:"/2017-11-09-higher-order-function-trong-javascript"}}}}}});
//# sourceMappingURL=path---2017-11-29-goc-nhin-ve-accessible-ui-web-85686b32d063f0ccdfce.js.map