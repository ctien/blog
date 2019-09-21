webpackJsonp([5674340019e4],{1406:function(n,a){n.exports={data:{markdownRemark:{html:'<p><code class="language-text">tabindex</code> có thể sử dụng trong bất kỳ thẻ html nào</p>\n<p><strong><code class="language-text">tabindex=&quot;0&quot;</code></strong>: element sẽ có thứ tự tab theo mặc định (theo vị trí DOM), nó có thể được focus bằng cách ấn phím <strong>Tab</strong>, hoặc gọi phương thức <code class="language-text">focus()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Press Tab to Focus Me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Các element có thể focus như thẻ <code class="language-text">a</code>, <code class="language-text">button</code>, <code class="language-text">select</code>, <code class="language-text">input</code>, <code class="language-text">textarea</code> thì đã có sẵn <code class="language-text">tabindex=0</code>, trừ khi chúng ta dùng một thẻ <code class="language-text">div</code> như <code class="language-text">button</code> thì phải đặt <code class="language-text">tabindex=0</code>, để user có thể tab tới đó mà.</p>\n<p><strong><code class="language-text">tabindex=&quot;-1&quot;</code></strong>: sẽ bỏ qua element này khi nhấn tab, vẫn có thể focus bằng cách gọi <code class="language-text">focus()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Chớ bao giờ tab được anh đâu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo.focus();<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Focus vào thằng ở trên<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><strong><code class="language-text">tabindex=&quot;5&quot;</code></strong>: nếu là giá trị lớn hơn 0, nó sẽ được ưu tiên cao hơn. Nếu có nhiều tabindex lớn hơn 0, nó sẽ đi theo thứ tự <strong>bắt đầu từ giá trị nhỏ nhất (nhưng vẫn lớn hơn 0 nhé) đến giá trị cao hơn.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>Anh trước<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>Chú sau<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Chị có bầu, phải được ưu tiên em ơi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Sử dụng đúng nhất cho các trường hợp cần được ưu tiên cao hơn như header, navigation. Khuyến khích tổ chức DOM theo logic như thứ tự tab mong muốn. Nếu bạn muốn dùng <code class="language-text">tabindex</code></p>\n<h1 id="quản-lý-focus-trên-trang"><a href="#qu%E1%BA%A3n-l%C3%BD-focus-tr%C3%AAn-trang" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quản lý focus trên trang</h1>\n<blockquote>\n<p>Tip: kiểm tra element đang được focus: <code class="language-text">document.activeElement</code></p>\n</blockquote>\n<p>Đây là trường hợp mà <code class="language-text">tabindex</code> không chỉ hữu ích mà còn cần thiết. Bạn có  trang single page chứa các section khác nhau, nó không hiển thị đồng thời nhiều section trên cùng viewport được. Click vào thanh navigation để di chuyển giữa các section. Lúc đó, chúng ta sẽ có được section đang hiển thị trên viewport, đặt giá trị <code class="language-text">tabindex=&quot;-1&quot;</code> để tách nó khỏi thứ tự tab mặc định và gọi <code class="language-text">focus()</code>.</p>\n<h1 id="quản-lý-tab-trên-component"><a href="#qu%E1%BA%A3n-l%C3%BD-tab-tr%C3%AAn-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quản lý tab trên component</h1>\n<p>Lấy ví dụ thẻ <code class="language-text">&lt;select /&gt;</code>, khi được focus, user có thể dùng các phím mũi tên để chọn các option. Nếu đang build một <code class="language-text">&lt;select /&gt;</code> custom bằng <code class="language-text">&lt;ul /&gt;</code> chẳng hạn, user phải có kiểu hoạt động tương tự như vậy</p>\n<p>Để tham khảo thêm chi tiết keyboard nào cho element nào, đọc bài <a href="https://www.w3.org/TR/wai-aria-practices/">Accessible Rich Internet Applications (ARIA) Authoring Practices</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-group</span><span class="token punctuation">></span></span>\n  // Giả dụ user nhấn phím mũi tên đi xuống, chúng ta gọi focus vào đứa tiếp theo\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-button</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Water<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-button</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Coffee<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-button</span><span class="token punctuation">></span></span> // call .focus() on this element\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-button</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tea<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-button</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Cola<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-button</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ginger Ale<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-group</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h1 id="vấn-đề-với-modal-và-keyboard"><a href="#v%E1%BA%A5n-%C4%91%E1%BB%81-v%E1%BB%9Bi-modal-v%C3%A0-keyboard" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vấn đề với Modal và keyboard</h1>\n<p>Có tình huống focus sẽ lặp mãi mãi, như cái autocomplete nó sẽ bắt sự kiện focus và tab, không cho user ra khỏi element đó nếu dùng phím. Nó được đề cập cụ thể <a href="http://webaim.org/standards/wcag/checklist#sc2.1.2">trong đây</a>. </p>\n<p>Tình huống khác cũng hay gặp là cái modal, khi modal hiển thị, chúng ta không cho user truy cập đến các phần khác bên dưới, nhưng nếu dùng phím vẫn có thể di chuyển qua các phần tử bên dưới.</p>\n<p>Bằng cách cho keyboard tạm thời <em>khóa</em> trên modal để user không di chuyển ra khỏi modal này nếu dùng phím tab, nhớ trả lại bình thường sau khi modal đóng lại.</p>\n<ul>\n<li>\n<p>Chi tiết về cách làm <a href="https://github.com/udacity/ud891/tree/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution">tham khảo source code</a> và <a href="http://udacity.github.io/ud891/lesson2-focus/07-modals-and-keyboard-traps/solution/index.html">demo ở đây</a></p>\n</li>\n<li>\n<p><a href="https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex">Dịch từ Google Web Fundamentals</a></p>\n</li>\n<li>\n<p><a href="https://www.udacity.com/course/web-accessibility--ud891">Course hay của Udacity về Web Accessibility</a></p>\n</li>\n</ul>',timeToRead:4,excerpt:" có thể sử dụng trong bất kỳ thẻ html nào : element sẽ có thứ tự tab theo mặc định (theo vị trí DOM), nó có thể được focus bằng cách ấn phím…",frontmatter:{title:"Sử dụng tabindex",cover:"",date:"2018-10-02",category:null,tags:["ux-ui","mobile-web-specialist"],desc:"Mặc định thứ tự tab theo vị trí của DOM rất hữu dụng, tuy nhiên có trường hợp chúng ta sẽ muốn thay đổi thứ tự tab này. Cùng nghiên cứu tabindex để set thứ tự tab"},fields:{slug:"/2018-10-02-huong-dan-su-dung-tabindex-de-di-chuyen"}}},pathContext:{slug:"/2018-10-02-huong-dan-su-dung-tabindex-de-di-chuyen",prev:{frontmatter:{title:"Xử lý tập dữ liệu lớn trong React",desc:"Tình huống: bạn có một table với rất nhiều dữ liệu đổ vào, nếu bạn thấy component đó render chậm trên màn hình, đó là lúc cần tái cấu trúc",type:"post",category:null,tags:["react","performance"],date:"2018-10-03",cover:""},fields:{slug:"/2018-10-03-huong-dan-reactjs-table-du-lieu-lon"}},next:{frontmatter:{title:"Giới thiệu fetch() của javascript",desc:"Tạm biệt XMLHttpRequest và cách viết dài dòng, giờ đây ta đã có fetch API",type:"post",category:null,tags:["javascript","mobile-web-specialist"],date:"2018-10-01",cover:""},fields:{slug:"/2018-10-01-huong-dan-gioi-thieu-fetch-javascript"}}}}}});
//# sourceMappingURL=path---2018-10-02-huong-dan-su-dung-tabindex-de-di-chuyen-b0b0085c5a203a7a4e9d.js.map