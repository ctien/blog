webpackJsonp([0x6715987af3ab],{1442:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#tr%C3%A1nh-l%E1%BA%B7p-l%E1%BA%A1i">Tránh lặp lại</a></p>\n<ul>\n<li><a href="#credit-card">Credit Card</a></li>\n<li><a href="#name">Name</a></li>\n<li><a href="#email">Email</a></li>\n<li><a href="#address">Address</a></li>\n<li><a href="#phone">Phone</a></li>\n<li><a href="#payment">Payment</a></li>\n</ul>\n</li>\n<li><a href="#how-far-i-go">How far I go?</a></li>\n<li><a href="#field-ng%C3%A0y-th%C3%A1ng">Field ngày tháng</a></li>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-input-type-ph%C3%B9-h%E1%BB%A3p">Sử dụng input type phù hợp</a></li>\n<li><a href="#g%E1%BB%A3i-%C3%BD-th%C3%B4ng-qua-tr%C6%B0%E1%BB%9Dng-datalist">Gợi ý thông qua trường <code class="language-text">datalist</code></a></li>\n<li><a href="#auto-focus-khi-c%E1%BA%A7n-thi%E1%BA%BFt">auto focus khi cần thiết</a></li>\n<li>\n<p><a href="#h%C3%A3y-tin-v%C3%A0o-chrome">Hãy tin vào Chrome</a></p>\n<ul>\n<li><a href="#kh%C3%B4ng-s%E1%BB%AD-d%E1%BB%A5ng-input-chu%E1%BA%A9n">Không sử dụng input chuẩn</a></li>\n<li><a href="#d%C3%B9ng-placeholder-gi%E1%BA%A3">Dùng placeholder giả</a></li>\n<li><a href="#t%E1%BB%B1-%C4%91%E1%BB%99ng-copy-shipping-address-v%C3%A0o-billing-address">Tự động copy shipping address vào billing address</a></li>\n</ul>\n</li>\n<li><a href="#validate-form-v%E1%BB%9Bi-html5">Validate form với HTML5</a></li>\n</ul>\n<!-- /TOC -->\n<p>Thiết kế form cần tránh việc bắt user làm tới làm lui, đòi hỏi nhiều thông tin hơn cần thiết, hay cảm giác bị lạc lối giữa một cái form quá dài quá nhiều step</p>\n<p>Nguyên tắc chung</p>\n<ul>\n<li>Bật autofill trên form đề trình duyệt của user có thể tự điền các field đã biết, hiển thị lại những giá trị mà user đã nhập</li>\n<li>Label rõ ràng để user biết mình đang nhập cái gì, ở đâu.</li>\n</ul>\n<h2 id="tránh-lặp-lại"><a href="#tr%C3%A1nh-l%E1%BA%B7p-l%E1%BA%A1i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tránh lặp lại</h2>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/forms-multipart-good.png" alt="Một số gợi ý khi thiết kế form"></p>\n<p>Ví dụ trên trang đăng ký nếu chúng ta đã cho user nhập first name và last name, có thể cho generate tự động ra một giá trị cho field nickname để đăng nhập. Hoặc trường hợp trên trang checkout, cho phép lưu lại địa chỉ giao hàng cho lần checkout sau.</p>\n<p>Để tiết kiệm thời gian tiền bạc cho user, khai thác tính năng <strong>autocomplete</strong> có sẵn của trình duyệt.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>address-line1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Ta muốn autocomplete giá trị gì thì báo với trình duyệt luôn, hoặc dùng giá trị <code class="language-text">name=&#39;giá trị name chuẩn&#39;</code>, hoặc <code class="language-text">autocomplete=&#39;giá trị autocomplete chuẩn&#39;</code></p>\n<p>Chuẩn này đã được <a href="https://html.spec.whatwg.org/multipage/forms.html#autofill">WHATWG HTML Standard.</a> đặt ra ko phải mình</p>\n<table>\n<thead>\n<tr>\n<th>Trường</th>\n<th>Giá trị name</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Name</td>\n<td>name fname mname lname</td>\n</tr>\n<tr>\n<td>Email</td>\n<td>email</td>\n</tr>\n<tr>\n<td>Address</td>\n<td>address city region province state zip zip2 postal country</td>\n</tr>\n<tr>\n<td>Phone</td>\n<td>phone mobile country-code area-code exchange suffix ext</td>\n</tr>\n<tr>\n<td>Credit Card</td>\n<td>ccname cardnumber cvc ccmonth ccyear exp-date card-type</td>\n</tr>\n<tr>\n<td>Usernames</td>\n<td>username</td>\n</tr>\n<tr>\n<td>Passwords</td>\n<td>password</td>\n</tr>\n</tbody>\n</table>\n<h2 id="tôi-đang-đứng-ở-bước-nào"><a href="#t%C3%B4i-%C4%91ang-%C4%91%E1%BB%A9ng-%E1%BB%9F-b%C6%B0%E1%BB%9Bc-n%C3%A0o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tôi đang đứng ở bước nào?</h2>\n<p>Với các form được chia làm nhiều step trước khi submit, một thanh trạng thái cho user biết mình đang đến bước nào là bắt buộc.</p>\n<p><img src="https://designmodo.com/wp-content/uploads/2016/10/Checkout-Form.jpg" alt="Một số gợi ý khi thiết kế form"></p>\n<h2 id="giá-trị-ngày-tháng"><a href="#gi%C3%A1-tr%E1%BB%8B-ng%C3%A0y-th%C3%A1ng" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giá trị ngày tháng</h2>\n<p>Trường ngày tháng để user chọn từ lịch, không tách ra thành các input độc lập dạng ngày-tháng-năm, user không cần phải mở một ứng dụng calendar khác đó trên điện thoại, trên máy tính để kiểm tra ngày trước khi chọn.</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/forms-calendar-good.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h2 id="sử-dụng-input-type-phù-hợp"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-input-type-ph%C3%B9-h%E1%BB%A3p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng input type phù hợp</h2>\n<p>HTML5 hỗ trợ khá nhiều kiểu input, khi cung cấp giá trị <code class="language-text">type</code> rõ ràng cho input, trình duyệt sẽ biết và hiển thị kiểu keyboard nào cho phù hợp trên điện thoại, cũng như có những validation tích hợp sẵn</p>\n<h3 id="code-classlanguage-texttype39url39code"><a href="#code-classlanguage-texttype39url39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;url&#39;</code></h3>\n<p>Chuỗi bắt đầu phải là \'<a href="http://&#x27;">http://\'</a>, \'ftp://\', \'mailto:\'</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/url-ios.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39tel39code"><a href="#code-classlanguage-texttype39tel39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;tel&#39;</code></h3>\n<p>Ko có ép một syntax hay validation nào cả, giúp hiện thì bàn phím điện thoại trên mobile</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/tel-android.png" alt="ko có ép một syntax hay validation nào cả, giúp hiện thì bàn phím điện thoại trên mobile"></p>\n<h3 id="code-classlanguage-texttype39email39code"><a href="#code-classlanguage-texttype39email39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;email&#39;</code></h3>\n<p>Trên mobile nó sẽ hiện sẵn phím @</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/email-android.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39search39code"><a href="#code-classlanguage-texttype39search39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;search&#39;</code></h3>\n<p>Bàn phím search chuẩn trên từng thiết bị</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/plain-ios.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39number39code"><a href="#code-classlanguage-texttype39number39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;number&#39;</code></h3>\n<p>iOS yêu cầu có thêm <code class="language-text">pattern=&#39;\\d*&#39;</code> để hiển thị bàn phím số</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/number-android.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39range39code"><a href="#code-classlanguage-texttype39range39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;range&#39;</code></h3>\n<p>Hiển thị kiếu slider control</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/range-ios.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39datetime-local39code"><a href="#code-classlanguage-texttype39datetime-local39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;datetime-local&#39;</code></h3>\n<p>Giá trị ngày tháng có timezone</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/datetime-local-ios.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39datetime39code"><a href="#code-classlanguage-texttype39datetime39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;datetime&#39;</code></h3>\n<p>Giá trị ngày tháng ko có timezone</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/date-android.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39time39code"><a href="#code-classlanguage-texttype39time39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;time&#39;</code></h3>\n<p>Chỉ có giá trị giờ</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/time-ios.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39week39code"><a href="#code-classlanguage-texttype39week39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;week&#39;</code></h3>\n<p>Chỉ có giá trị tuần</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/week-android.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39month39code"><a href="#code-classlanguage-texttype39month39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;month&#39;</code></h3>\n<p>Chỉ có giá trị tháng</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/month-ios.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h3 id="code-classlanguage-texttype39color39code"><a href="#code-classlanguage-texttype39color39code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">type=&#39;color&#39;</code></h3>\n<p>Bảng màu để chọn</p>\n<p><img src="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/imgs/color-android.png" alt="Một số gợi ý khi thiết kế form"></p>\n<h2 id="gợi-ý-thông-qua-trường-code-classlanguage-textdatalistcode"><a href="#g%E1%BB%A3i-%C3%BD-th%C3%B4ng-qua-tr%C6%B0%E1%BB%9Dng-code-classlanguage-textdatalistcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gợi ý thông qua trường <code class="language-text">datalist</code></h2>\n<p><code class="language-text">&lt;datalist /&gt;</code> là element cho phép chúng ta cung cấp các giá trị <strong>gợi ý</strong> với một <code class="language-text">&lt;input /&gt;</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frmFavChocolate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Favorite Type of Chocolate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> \n<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> \n<span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fav-choc<span class="token punctuation">"</span></span> \n<span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>frmFavChocolate<span class="token punctuation">"</span></span> \n<span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chocType<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chocType<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>milk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="note">User không bắt buộc phải chọn các giá trị trong datalist, chỉ là gợi ý thích thì chọn</div>\n<p><a href="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/input/forms/order.html">Xem một form đã hiện thực</a></p>\n<h2 id="auto-focus-khi-cần-thiết"><a href="#auto-focus-khi-c%E1%BA%A7n-thi%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>auto focus khi cần thiết</h2>\n<p>Trên thẻ input, nếu muốn input được focus ngay lập tức khi vừa vào trang, như login, focus vào ô username. Thuộc tính <code class="language-text">autofocus</code> này sẽ tự động bị ignore trên mobile để tránh xuất hiện bàn phím ko cần thiết.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">autofocus</span> <span class="token attr-name">...</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="hãy-tin-vào-chrome"><a href="#h%C3%A3y-tin-v%C3%A0o-chrome" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hãy tin vào Chrome</h2>\n<p>Rất nhiều trường hợp vì customize theo ý design mà tính năng autofill của Chrome không còn chạy đúng, nguyên nhân có thể là</p>\n<h3 id="không-sử-dụng-input-chuẩn"><a href="#kh%C3%B4ng-s%E1%BB%AD-d%E1%BB%A5ng-input-chu%E1%BA%A9n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Không sử dụng input chuẩn</h3>\n<p>Lỗi thường thấy khi phải customize cái dropdown theo design mà không thể dùng thẻ <code class="language-text">&lt;select /&gt;</code></p>\n<h3 id="dùng-placeholder-giả"><a href="#d%C3%B9ng-placeholder-gi%E1%BA%A3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dùng placeholder giả</h3>\n<p>Placeholder giả là gì? Thay vì dùng attribute placeholder, dùng <code class="language-text">value=&quot;First Name&quot;</code> rồi viết javascript để khi focus xóa giá trị này đi.</p>\n<h3 id="tự-động-copy-shipping-address-vào-billing-address"><a href="#t%E1%BB%B1-%C4%91%E1%BB%99ng-copy-shipping-address-v%C3%A0o-billing-address" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tự động copy shipping address vào billing address</h3>\n<p>Cơ bản thì Autofill của Chrome KO thể chạy được nữa nếu chúng ta cho copy dữ liệu từ shipping address qua billing address bằng javascript</p>\n<h2 id="validate-form-với-html5"><a href="#validate-form-v%E1%BB%9Bi-html5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Validate form với HTML5</h2>\n<p>Bài này đọc lại <a href="/2018-11-02-validate-form-voi-html-5">ở đây</a></p>\n<p><a href="https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/input/forms/order.html" target="_blank" rel="noopener noreferrer">Sample</a></p>\n<p><a href="https://developers.google.com/web/fundamentals/design-and-ux/input/forms/" target="_blank" rel="noopener noreferrer">Create Amazing Forms</a></p>\n<p><a href="https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill" target="_blank" rel="noopener noreferrer">Help users checkout faster with Autofill</a></p>',timeToRead:7,excerpt:"Tránh lặp lại Credit Card Name Email Address Phone Payment How far I go? Field ngày tháng Sử dụng input type phù hợp Gợi ý thông qua trường…",frontmatter:{title:"Chỉ dẫn thiết kế form từ Google",cover:"",date:"2018-11-14",category:null,tags:["ux-ui","mobile-web-specialist"],desc:"Bài này nằm trong loạt bài chuẩn kiến thức để đi thi web mobile specialist của google. Một vài điểm cần nhớ khi thiết kế và làm việc với form"},fields:{slug:"/2018-11-14-chi-dan-thiet-ke-form-cua-google"}}},pathContext:{slug:"/2018-11-14-chi-dan-thiet-ke-form-cua-google",prev:{frontmatter:{title:"Hổ trợ v-model trên một custom Vue component",desc:"Hướng dẫn cách viết một component để có thể dùng v-model",type:"post",category:null,tags:["vuejs"],date:"2018-11-15",cover:""},fields:{slug:"/2018-11-15-them-v-model-cho-vue-component-tu-viet"}},next:{frontmatter:{title:"Copy object trong javascript",desc:"Luận bàn các cách mà chúng ta copy một object trong javascript, shallow copy và deep copy",type:"post",category:null,tags:["javascript"],date:"2018-11-13",cover:""},fields:{slug:"/2018-11-13-copy-mot-object-trong-javascript"}}}}}});
//# sourceMappingURL=path---2018-11-14-chi-dan-thiet-ke-form-cua-google-47ea8f59eed538d1bc00.js.map