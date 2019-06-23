webpackJsonp([0xf9c5984ebe53],{1358:function(t,n){t.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#thu-th%E1%BA%ADp">Thu thập</a></li>\n<li><a href="#%C4%91%E1%BB%8Dc-hi%E1%BB%83u-k%E1%BA%BFt-qu%E1%BA%A3">Đọc hiểu kết quả</a></li>\n<li><a href="#l%E1%BB%8Dc-commit">Lọc commit</a></li>\n<li><a href="#flame-chart">Flame chart</a></li>\n<li><a href="#ranked-chart">Ranked chart</a></li>\n<li><a href="#component-chart">Component Chart</a></li>\n<li><a href="#t%C6%B0%C6%A1ng-t%C3%A1c">Tương tác</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="thu-thập"><a href="#thu-th%E1%BA%ADp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thu thập</h2>\n<p>Trên bộ DevTools sẽ có thêm tab <strong>Profiler</strong></p>\n<p><img src="https://reactjs.org/static/devtools-profiler-tab-4da6b55fc3c98de04c261cd902c14dc3-acf85.png"></p>\n<p>React-dom 16.5+ hổ trợ thu thập dữ liệu khi chạy DEV, để dùng trong production sử dụng <code class="language-text">react-dom/profiling</code>, Đọc thêm cách sử dụng ở đây <a href="https://fb.me/react-profiling">https://fb.me/react-profiling</a></p>\n<p>Trên màn hình vừa mở, click nút record để bắt đầu thu thập dữ liệu</p>\n<p><img src="https://reactjs.org/static/start-profiling-bae8d10e17f06eeb8c512c91c0153cff-acf85.png" alt="record để bắt đầu thu thập dữ liệu"></p>\n<p>Lúc này, khi một component react chạy <code class="language-text">render</code>, thông tin sẽ được thu thập. Sử dụng app như bình thường, khi không muốn thu thập dữ liệu nữa, click nút <strong>stop</strong></p>\n<p><img src="https://reactjs.org/static/start-profiling-bae8d10e17f06eeb8c512c91c0153cff-acf85.png" alt="stop record"></p>\n<h2 id="Đọc-hiểu-kết-quả"><a href="#%C4%90%E1%BB%8Dc-hi%E1%BB%83u-k%E1%BA%BFt-qu%E1%BA%A3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đọc hiểu kết quả</h2>\n<p>Chúng ta quan tâm đến quá trình <strong>commit</strong> React component - là khi component được <strong>insert</strong>, <strong>update</strong>, hoặc <strong>remove</strong> khỏi DOM.</p>\n<p>Ở trên cùng, bên phải, để ý cái bar chart</p>\n<p><img src="https://reactjs.org/static/commit-selector-bd72dec045515d59be51c944e902d263-8ef72.png"></p>\n<p>Mỗi một cột trong cái chart này đại diện cho một commit, commit đang chọn sẽ được tô đen. Độ cao của cột này tương ứng cho thời gian cần để render.</p>\n<h2 id="lọc-commit"><a href="#l%E1%BB%8Dc-commit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lọc commit</h2>\n<p>Thời gian thu thập dữ liệu càng lâu, ứng dụng render càng nhiều lần, sớm muộn số lượng dữ liệu quá lớn như vậy chúng ta cần phải lọc để xem nhanh kết quả cần tìm. Ví dụ ẩn đi toàn bộ commit có thời gian bé hơn giá trị ms nào đó</p>\n<p><img src="https://reactjs.org/filtering-commits-683b9d860ef722e1505e5e629df7ef7e.gif"></p>\n<h2 id="flame-chart"><a href="#flame-chart" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flame chart</h2>\n<p><strong>Flame chart</strong> đại diện cho trạng thái của ứng trong một thời điểm commit cụ thể. Mỗi cột đại diện cho một component, kích thước và màu sắc thể hiện thời gian render component và các component con bên trong. Màu xanh thì tốn ít thời gian, màu vàng là nhiều thời gian và màu xám là không render</p>\n<p><img src="https://reactjs.org/static/flame-chart-3046f500b9bfc052bde8b7b3b3cfc243-acf85.png" alt="Flame chart"></p>\n<p>Ví dụ trên, commit trên tiêu tốn hết 18.4ms để render. Router tốn nhiều nhất thời gian để render: 18.4ms. Phần lớn là do phải render tất cả các component con, <code class="language-text">Nav</code> (8.4ms), <code class="language-text">Route</code> (7.9ms)</p>\n<p>Click vào từng cột để hiển thị chi tiết các component con</p>\n<p><img src="https://reactjs.org/zoom-in-and-out-39ba82394205242af7c37ccb3a631f4d.gif" alt="Click vào từng cột để hiển thị chi tiết các component con"></p>\n<p>Bên cột phải chúng ta có các thông tin như props, state, tổng số lần render.</p>\n<p><img src="https://reactjs.org/props-and-state-1f4d023f1a0f281386625f28df87c78f.gif"></p>\n<p>Trong một số trường hợp, chọn vào component, chuyển qua lại giữa commit, sẽ có thông tin bổ sung tại sao component được render lại</p>\n<p><img src="https://reactjs.org/see-which-props-changed-cc2a8b37bbce52c49a11c2f8e55dccbc.gif"></p>\n<h2 id="ranked-chart"><a href="#ranked-chart" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ranked chart</h2>\n<p><strong>Ranked chart</strong> đại diện cho 1 commit. Mỗi cột trong chart là một component, các cột này được sếp theo thứ tự component nào tốn nhiều thời gian render nhất sẽ lên trên.</p>\n<p><img src="https://reactjs.org/static/ranked-chart-0c81347535e28c9cdef0e94fab887b89-acf85.png"></p>\n<h2 id="component-chart"><a href="#component-chart" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component Chart</h2>\n<p>Để xem đã bao nhiêu lần 1 component được render. Mỗi cột là mỗi lần component được render.</p>\n<p><img src="https://reactjs.org/static/component-chart-d71275b42c6109e222fbb0932a0c8c09-acf85.png"></p>\n<p>Double-click vào component này hoặc chọn component và chọn nút blue bar phải góc phải trên. Để xem thêm các thông tin khác</p>\n<p><img src="https://reactjs.org/see-all-commits-for-a-fiber-99cb4321ded8eb0c21ae5fc673878563.gif"></p>\n<h2 id="tương-tác"><a href="#t%C6%B0%C6%A1ng-t%C3%A1c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tương tác</h2>\n<p>Hiện tại đây đang trong quá trình thử nghiệm cho tính năng này, tracking nguyên nhân gây ra update.</p>\n<p><img src="https://reactjs.org/static/interactions-a91a39ac076b71aa7a202aaf46f8bd5a-acf85.png"></p>\n<p>Mỗi dòng là một tương tác đã được track. Nút màu xanh bên cạnh là commit liên quan tới tương tác này.</p>\n<p>Kiểm tra một tương tác trong commit cụ thể từ <strong>flame chart</strong> và <strong>ranked chart</strong></p>\n<p><img src="https://reactjs.org/static/interactions-for-commit-9847e78f930cb7cf2b0f9682853a5dbc-acf85.png"></p>\n<p><a href="https://github.com/facebook/react-devtools/tree/master/test/example">Source code ví dụ</a></p>\n<p><a href="https://react-devtools-profiler-demo.now.sh/">Demo</a></p>\n<p><a href="https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html">Link bài gốc</a></p>',timeToRead:3,excerpt:"Thu thập Đọc hiểu kết quả Lọc commit Flame chart Ranked chart Component Chart Tương tác Thu thập Trên bộ DevTools sẽ có thêm tab  Profiler…",frontmatter:{title:"Giới thiệu React Profiler",cover:"",date:"2018-09-19",category:null,tags:["javascript","react"],desc:"Từ version React 16.5 bổ sung thêm một plugin DevTool profiler. Plugin này được dùng để thu thập các thông tin về thời gian render một component, xác định nguyên nhân làm trì trệ performance."},fields:{slug:"/2018-09-19-huong-dan-react-profiler-dev-tool"}}},pathContext:{slug:"/2018-09-19-huong-dan-react-profiler-dev-tool",prev:!1,next:{frontmatter:{title:"Merge vs Rebase trong Git",desc:"Trong bài viết này, chúng ta sẽ so sánh giữa lệnh git rebase với git merge, những trường hợp ta có thể áp dụng rebase trong quá trình làm việc với git",type:"post",category:null,tags:["javascript"],date:"2018-09-18",cover:"https://wac-cdn.atlassian.com/dam/jcr:15447956-9d33-4817-9dc6-fd6c86f24240/hero.svg"},fields:{slug:"/2018-09-18-merging-va-rebase-trong-git"}}}}}});
//# sourceMappingURL=path---2018-09-19-huong-dan-react-profiler-dev-tool-74f2496b4c28804fc34d.js.map