webpackJsonp([41772859741741],{1341:function(t,c){t.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#b%C3%A0i-to%C3%A1n-c%E1%BA%A7n-gi%E1%BA%A3i-quy%E1%BA%BFt">Bài toán cần giải quyết</a></li>\n<li><a href="#gi%E1%BA%A3i-ph%C3%A1p">Giải pháp</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="bài-toán-cần-giải-quyết"><a href="#b%C3%A0i-to%C3%A1n-c%E1%BA%A7n-gi%E1%BA%A3i-quy%E1%BA%BFt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bài toán cần giải quyết</h2>\n<p>Cái Popup Modal chúng ta có cái nút <code class="language-text">close</code>, cái modal chắc chắn là ta phải set <code class="language-text">position: fixed</code> để cố định nó với window, cái nội dung bên trong cái modal có thể scroll được</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1521121189/modal_unnmdd.png"></p>\n<p>Nút close này chúng ta sẽ set <code class="language-text">position: absolute</code> cho nó lên góc phải đúng không</p>\n<p><img src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1521121253/hidden-close-button_p4cj3m.png"></p>\n<p>Nhưng mà khi scroll thì ta sẽ bị mất nút <code class="language-text">close</code>, ta không thể set <code class="language-text">position: fixed</code> cho cái nút close được, vì fixe position nghĩa là ta bắt nó định vị trí theo window.</p>\n<p>Nếu cái modal mà ta có set <code class="language-text">transform</code> bất kỳ giá trị nào, thì nút <code class="language-text">close</code> sẽ trở về với body</p>\n<p><img src="https://cdn.css-tricks.com/wp-content/uploads/2018/03/fixed.gif"></p>\n<h2 id="giải-pháp"><a href="#gi%E1%BA%A3i-ph%C3%A1p" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Giải pháp</h2>\n<p><code class="language-text">position: sticky</code> cho nút close là xong, đơn giản quá.</p>\n<p><img src="https://cdn.css-tricks.com/wp-content/uploads/2018/03/sticky-scroll.gif"></p>',timeToRead:1,excerpt:"Bài toán cần giải quyết Giải pháp Bài toán cần giải quyết Cái Popup Modal chúng ta có cái nút  , cái modal chắc chắn là ta phải set   để cố…",frontmatter:{title:"Trick Sử dụng Sticky trong CSS",cover:"",date:"2018-03-27",category:null,tags:["css"],desc:"Một cái trick hay để giải quyết vấn đề thường mắt phải"},fields:{slug:"/2018-03-27-huong-dan-css-sticky-de-fixed-element"}}},pathContext:{slug:"/2018-03-27-huong-dan-css-sticky-de-fixed-element",prev:{frontmatter:{title:"Một vài tip sử dụng Chrome Dev Tools",desc:"Chrome DevTools càng ngày càng mạnh mấy bạn, bạn nào làm frontend cũng phải biết xài, một vài tip cóp nhặt có thể bạn chưa biết",type:"post",category:null,tags:["javascript"],date:"2018-03-28",cover:""},fields:{slug:"/2018-03-28-huong-dan-mot-vai-tip-su-dung-chrome-dev-tools"}},next:{frontmatter:{title:"React Pattern căn bản",desc:"Một số Pattern hay sử dụng trong React",type:"post",category:null,tags:["javascript","react"],date:"2018-03-19",cover:""},fields:{slug:"/2018-03-19-huong-dan-react-patterns-can-ban"}}}}}});
//# sourceMappingURL=path---2018-03-27-huong-dan-css-sticky-de-fixed-element-5ffffe00a9f64016cac1.js.map