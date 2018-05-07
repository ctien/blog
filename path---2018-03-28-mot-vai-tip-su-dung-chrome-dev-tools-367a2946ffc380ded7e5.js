webpackJsonp([38],{"./node_modules/json-loader/index.js!./.cache/json/2018-03-28-mot-vai-tip-su-dung-chrome-dev-tools.json":function(n,o){n.exports={data:{markdownRemark:{html:'<h2>Kéo thả các Element</h2>\n<p>Bên trong tab Elements có thể kéo các element HTML và thả nó vào vị trí mới</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/drag-and-drop.gif" alt="Kéo thả các Element"></p>\n<h2>Reference đến element đang chọn trong console</h2>\n<p>Để reference đến 1 element đang được chọn, gõ <code>$0</code>, nếu đang load jquery thì có thể dùng <code>$($0)</code></p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/reference-elements.gif" alt="Reference đến element đang chọn trong console"></p>\n<h2>Gọi lại giá trị tính toán lần trước trong console</h2>\n<p><code>$_</code> để gọi lại giá trị tính toán lần trước</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>3 + 4\n// = 7\n$_ * 2\n// = 14</code></pre>\n      </div>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/use-last-result.gif" alt="Gọi lại giá trị tính toán lần trước trong console"></p>\n<h2>Xác định đoạn CSS được định nghĩa ở đâu</h2>\n<p><code>cmd-click</code> (<code>ctrl-click</code> trong windows) vào property CSS trong tab Elements để nhảy ngay tới chổ định nghĩa</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/find-where-css-defined.gif" alt="Xác định đoạn CSS được định nghĩa ở đâu"></p>\n<h2>screenshot một element</h2>\n<p>Chọn element + nhấn <code>cmd+shift+p</code> (<code>ctrl+shift+p</code> trong windows) để mở menu Command và chọn <strong>Capture node screenshot</strong></p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/screenshot-node.gif" alt="screenshot một element"></p>\n<h2>Tìm element sử dụng CSS selectors</h2>\n<p><code>ctrl+f</code> (<code>cmd+f</code> trong Mac) mở ô search, gõ đoạn css selector ở đây</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/find-elements-css-selectors.gif" alt="Tìm element sử dụng CSS selectors"></p>\n<h2>Shift-Enter trong console</h2>\n<p>Để gõ đoạn code trên nhiều dòng trong console, ấn phím <code>shift-enter</code></p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/multiple-lines-commands.gif" alt="Shift-Enter trong console"></p>\n<h2>Clear console</h2>\n<p>Để clear console thường ta sẽ nhấn nút Clear ở trên cùng, hoặc bằng gõ <code>ctrl+l</code> (<code>cmd+k</code>)</p>\n<h2><code>Go to</code> như trong sumblime text hay VSCode</h2>\n<p>Trong tab Source</p>\n<ul>\n<li><code>ctrl+o</code> (cmd+o) để hiển thị tất cả file đang load</li>\n<li><code>ctrl+shift+o</code> (cmd+shift+o) để hiển thị biểu tượng property, function hay là class trong file hiện tại</li>\n<li><code>ctrl+g</code> để nhảy đến dòng</li>\n</ul>\n<h2>Watch Expression</h2>\n<p>Thay vì phải viết đi viết lại biến hoặc expression trong lúc debug, thêm nó vào trong Watch Expression</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/watch-expressions.gif" alt="Watch Expression"></p>\n<h2>XHR/Fetch debugging</h2>\n<p>Chỉ định khi nào dừng nếu send đi một XHR/Fetch request trong XHR/Fetch breakpoint panel</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/xhr-fetch-breakpoints.png"></p>\n<h2>Debug khi DOM bị thay đổi</h2>\n<p>Right click vào element -> chọn <strong>enable Break on Subtree Modifications</strong>, khi có đoạn script nào thay đổi element, debugger sẽ stop ngay lập tức</p>\n<p><img src="https://flaviocopes.com/chrome-devtools-tips/break-subtree-modifications.png" alt="Debug khi DOM bị thay đổi"></p>',frontmatter:{date:"March 28, 2018",path:"/2018-03-28-mot-vai-tip-su-dung-chrome-dev-tools",tags:["javascript"],title:"Một vài tip sử dụng Chrome Dev Tools",desc:"Chrome DevTools càng ngày càng mạnh mấy bạn, bạn nào làm frontend cũng phải biết xài, một vài tip cóp nhặt có thể bạn chưa biết"}}},pathContext:{prev:!1,next:{excerpt:"Bài toán cần giải quyết1 Cái Popup Modal chúng ta có cái nút  , cái modal chắc chắn là ta phải set   để cố định nó với window, cái nội dung bên trong cái modal có thể scroll được Nút close này chúng ta sẽ set   cho nó lên góc phải đúng không Nhưng mà...",html:'<h2>Bài toán cần giải quyết1</h2>\n<p>Cái Popup Modal chúng ta có cái nút <code>close</code>, cái modal chắc chắn là ta phải set <code>position: fixed</code> để cố định nó với window, cái nội dung bên trong cái modal có thể scroll được</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1521121189/modal_unnmdd.png"></p>\n<p>Nút close này chúng ta sẽ set <code>position: absolute</code> cho nó lên góc phải đúng không</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1521121253/hidden-close-button_p4cj3m.png"></p>\n<p>Nhưng mà khi scroll thì ta sẽ bị mất nút <code>close</code>, ta không thể set <code>position: fixed</code> cho cái nút close được, vì fixe position nghĩa là ta bắt nó định vị trí theo window.</p>\n<p>Nếu cái modal mà ta có set <code>transform</code> bất kỳ giá trị nào, thì nút <code>close</code> sẽ trở về với body</p>\n<p><img src="https://cdn.css-tricks.com/wp-content/uploads/2018/03/fixed.gif"></p>\n<h2>Giải pháp</h2>\n<p><code>position: sticky</code> cho nút close là xong, đơn giản quá.</p>\n<p><img src="https://cdn.css-tricks.com/wp-content/uploads/2018/03/sticky-scroll.gif"></p>',id:"E:/anluu/luckyluu/posts/2018-03-27-css-sticky-de-fixed-element/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2018-03-27T13:35:13.234Z",path:"/2018-03-27-css-sticky-de-fixed-element",tags:["css"],title:"Trick Sử dụng Sticky trong CSS"}}}}}});
//# sourceMappingURL=path---2018-03-28-mot-vai-tip-su-dung-chrome-dev-tools-367a2946ffc380ded7e5.js.map