webpackJsonp([66474107084834],{1409:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Nói đến focus là nói đến element nào (như input, button, link, checkbox, select) đang nhận input từ bàn phím, hoặc clipboard nếu user gọi paste</p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/keyboard-focus.png" alt="Giới thiệu focus trên web"></p>\n<p>Element đang có trạng thái focus sẽ được xác định bằng vòng focus ring, tùy theo mỗi trình duyệt mà cách hiển thị khác nhau.</p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/sign-up.png" alt="Giới thiệu focus trên web"></p>\n<p>Mình từng gặp tình huống là lướt web bằng smart tv không có bàn phím và chuột, thao tác hoàn toàn bằng remote, hoặc một số người sử dụng máy tính chủ yếu bằng bàn phím, không thể dùng chuột vì lý do nào đó, không có cái focus ring là mình không biết được mình đang trỏ tới element nào hết</p>\n<blockquote>\n<p>Luôn đảm bảo ứng dụng có thể thao tác bình thường dù không cần chuột, chỉ cần bàn phím</p>\n</blockquote>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/system-prefs2.png" alt="Giới thiệu focus trên web"></p>\n<p>Một số element của HTML như <code class="language-text">input</code>, <code class="language-text">button</code>, <code class="language-text">select</code>, <code class="language-text">a</code>, <code class="language-text">textarea</code> được gọi là <em>focusable</em>, nghĩa là mặc định nó đã có <code class="language-text">tabindex=0</code> và bạn tab là tới mà không cần viết thêm code gì cả </p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/implicitly-focused.png" alt="Giới thiệu focus trên web"></p>\n<p>Những element khác như <code class="language-text">&lt;p/&gt;</code>, <code class="language-text">&lt;div/&gt;</code> không focus khi chúng ta ấn tab, không cần phải focus vào những element mà mình không cần tương tác gì với nó</p>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/focus/imgs/not-all-elements.png" alt="Giới thiệu focus trên web"></p>\n<p>Thử mở trang <a href="http://udacity.github.io/ud891/lesson2-focus/01-basic-form/">airline site mockup page</a> và tab thử qua các element, trên trang này đang tắt hết các sự kiện mouse input.</p>\n<p>Một tình huống cũng hay xảy ra, là ko biết focus đang nằm đâu, đang tab ngon lành, bổng dưng mất tiêu focus ring, không thấy xuất hiện nữa, tab thêm vài cái nữa thì nó lại xuất hiện.</p>\n<p>Nguyên nhân là có element focusable đang bị ẩn đi, không nằm trên màn hình, mặc dù nó có tồn tại, để xác định được element nào đang focus, có thể dùng javascript <code class="language-text">document.activeElement</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>activeElement<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Đã thấy công dụng của vòng focus, nếu bạn design không thích vòng focus mặc định của trình duyệt, dễ dàng bỏ đi bằng thuộc tính <code class="language-text">outline</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">:hover, :focus</span> <span class="token punctuation">{</span>\n    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> // hoặc 0\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://developers.google.com/web/fundamentals/accessibility/imgs/focus-ring.png"></p>\n<p>Bạn hãy cho nó một cách hiển thị khác, để user biết được đang focus vào element nào</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">:hover, :focus</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Bài viết liên quan</p>\n<ul>\n<li><a href="2019-03-25-rang-buoc-du-lieu-voi-html-5/">Ràng buộc dữ liệu input với HTML5</a></li>\n<li><a href="http://vuilaptrinh.com/2018-10-08-huong-dan-aria-va-su-dung-voi-ecommerce-site/">Sử dụng aria trên site eCommerce, vấn đề accessibility cần quan tâm</a></li>\n<li><a href="http://vuilaptrinh.com/2018-10-02-huong-dan-su-dung-tabindex-de-di-chuyen/">Sử dụng tabindex</a></li>\n</ul>\n<p><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/fundamentals/accessibility/focus/">📜 Introduction to Focus</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/web/fundamentals/accessibility/accessible-styles">📜 Styling focus</a></p>',timeToRead:2,excerpt:"Nói đến focus là nói đến element nào (như input, button, link, checkbox, select) đang nhận input từ bàn phím, hoặc clipboard nếu user gọi…",frontmatter:{title:"Giới thiệu focus trên web",cover:"",date:"2018-10-05",category:null,tags:["mobile-web-specialist","ux-ui"],desc:"Chúng ta nói về focus và làm cách nào chúng ta sử dụng nó trong ứng dụng web, bạn nào quan tâm accessibility thì phải biết cái này, đặt biệt mấy chế designer hay kêu bỏ focus ring"},fields:{slug:"/2018-10-05-gioi-thieu-focus"}}},pathContext:{slug:"/2018-10-05-gioi-thieu-focus",prev:{frontmatter:{title:"Nâng cao tốc độ Component",desc:"Bài viết của team làm Facebook Ads chia sẽ, cùng điểm qua các vấn đề căn bản để tối ưu component",type:"post",category:null,tags:["react","performance"],date:"2018-10-06",cover:""},fields:{slug:"/2018-10-06-huong-dan-thiet-ket-component-de-nang-cao-toc-do"}},next:{frontmatter:{title:"Làm việc với Redux trong ứng dụng lớn",desc:"Cùng thảo luận xung quanh vấn đề ứng dụng thiên về dữ liệu lớn, rất lớn",type:"post",category:null,tags:["javascript","react","performance"],date:"2018-10-04",cover:""},fields:{slug:"/2018-10-04-huong-dan-redux-voi-ung-dung-lon"}}}}}});
//# sourceMappingURL=path---2018-10-05-gioi-thieu-focus-82f87e826af3ed00041d.js.map