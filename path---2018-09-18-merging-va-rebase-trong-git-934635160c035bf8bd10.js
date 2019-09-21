webpackJsonp([51685089813104],{1399:function(n,t){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#%C3%BD-t%C6%B0%E1%BB%9Fng-ch%C3%ADnh">Ý tưởng chính</a></p>\n<ul>\n<li><a href="#merge">Merge</a></li>\n<li><a href="#rebase">Rebase</a></li>\n</ul>\n</li>\n<li><a href="#nguy%C3%AAn-t%E1%BA%AFc-v%C3%A0ng-c%E1%BB%A7a-rebase">Nguyên tắc vàng của Rebase</a></li>\n<li><a href="#quy-tr%C3%ACnh-l%C3%A0m-vi%E1%BB%87c">Quy trình làm việc</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="ý-tưởng-chính"><a href="#%C3%BD-t%C6%B0%E1%BB%9Fng-ch%C3%ADnh" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ý tưởng chính</h1>\n<p>Điều đầu tiên cần hiểu về <code class="language-text">git rebase</code> là nó giải quyết cùng một vấn đề như <code class="language-text">git merge</code>. Cả 2 lệnh này được dùng để đưa các thay đổi từ một branch sang 1 branch khác, chỉ khác nhau ở cách làm.</p>\n<p>Hãy hình dung chuyện sẽ xảy ra khi chúng ta bắt đầu làm việc trên một tính năng mới, trên feature branch, sau đó team khác commit code mới lên master branch.</p>\n<p><img src="https://wac-cdn.atlassian.com/dam/jcr:01b0b04e-64f3-4659-af21-c4d86bc7cb0b/01.svg"></p>\n<p>Cái commit mới trong <strong>master</strong> liên quan đến feature chúng ta đang làm. Để lấy commit mới này từ <strong>master</strong> và đưa về feature branch đang làm, chúng ta có 2 lựa chọn: <strong>merge</strong> hoặc <strong>rebase</strong></p>\n<h2 id="merge"><a href="#merge" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Merge</h2>\n<div class="gatsby-highlight">\n      <pre class="language-git"><code class="language-git">git checkout feature\ngit merge master\n\n// hoặc viết bằng một dòng luôn\ngit merge master feature</code></pre>\n      </div>\n<p>Kết quả là nó sẽ tạo ra một <strong>merge commit</strong> mới trên feature branch, Chúng ta có một cấu trúc như sau</p>\n<p><img src="https://wac-cdn.atlassian.com/dam/jcr:e229fef6-2c2f-4a4f-b270-e1e1baa94055/02.svg"></p>\n<p>Nói một cách khác, <strong>feature branch</strong> sẽ có <strong>thêm</strong> một state cần commit. Nếu <strong>master</strong> bị thay đổi thường xuyên, liên tục, cái history của feature branch  có thể sẽ rất lộn xộn, mặc dù có thể xử lý bằng <code class="language-text">git log</code>, tuy nhiên các bạn developer khác sẽ rất khó mà hiểu được history của project</p>\n<h2 id="rebase"><a href="#rebase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rebase</h2>\n<p>Một lựa chọn khác với merge, là dùng <code class="language-text">rebase</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-git"><code class="language-git">git checkout feature\ngit rebase master</code></pre>\n      </div>\n<p>Nó sẽ đưa toàn bộ <strong>feature</strong> branch lên trên cùng của <strong>master</strong>.</p>\n<p><img src="https://wac-cdn.atlassian.com/dam/jcr:5b153a22-38be-40d0-aec8-5f2fffc771e5/03.svg"></p>\n<p>Lợi ích của dùng <code class="language-text">rebase</code> là chúng ta có history của project sạch sẽ hơn. Sẽ không có những merge commit dư thừa như trong lệnh <code class="language-text">merge</code>.</p>\n<h1 id="nguyên-tắc-vàng-của-rebase"><a href="#nguy%C3%AAn-t%E1%BA%AFc-v%C3%A0ng-c%E1%BB%A7a-rebase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nguyên tắc vàng của Rebase</h1>\n<p>Một khi đã hiểu được cách làm của <strong>rebase</strong>, điều quan trọng nhất đã học được là <strong>đừng bao giờ xài nó</strong>.</p>\n<p>Ví dụ, đoán xem chuyện gì xảy ra nếu chúng ta <strong>rebase</strong> master vào feature branch</p>\n<p><img src="https://wac-cdn.atlassian.com/dam/jcr:1d22f018-b2c7-4096-9db1-c54940cf4f4e/05.svg"></p>\n<p>Lệnh <code class="language-text">rebase</code> sẽ đưa toàn bộ commit của master xuống feature. Vấn đề là cái này chỉ nằm trên local repository của chúng ta. Tất cả những dev khác sẽ tiếp tục làm việc trên master gốc. Git lúc này sẽ hiểu history master của chúng ta không phụ thuộc vào những người khác.</p>\n<p>Cách duy nhất để sync lại 2 master branch là merge chúng lại. Bạn đã thấy sự rắc rối chưa? Khi cả 2 branch master sẽ có cùng các commit changes. Nói cách khác, đố ai biết được chúng ta chọn được cái này trong 2 cái để merge.</p>\n<p>Trước khi chạy lệnh <code class="language-text">git rebase</code>, luôn hỏi chính mình "Có đứa nào đang làm việc trên branch này?" Nếu câu trả lời là có, rút tay khỏi bàn phím và nghĩ đến giải pháp an toàn hơn như <code class="language-text">git revert</code></p>\n<h1 id="quy-trình-làm-việc"><a href="#quy-tr%C3%ACnh-l%C3%A0m-vi%E1%BB%87c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quy trình làm việc</h1>\n<p>Chúng ta cùng bàn quan những lợi ích của <code class="language-text">rebase</code> trong quá trình phát triển feature</p>\n<p>Bước đầu tiên để làm việc với <code class="language-text">git rebase</code> là phải đảm bảo mỗi feature có một branch tương ứng. Như vậy chúng ta có một cấu trúc an toàn để có thể rebase</p>\n<p><img src="https://wac-cdn.atlassian.com/dam/jcr:6af9de07-088b-4f8b-97a7-b66569a9e4ac/06.svg"></p>\n<p>Khi gọi <code class="language-text">git rebase</code> chúng ta có 2 lựa chọn: <strong>thằng cha của feature branch</strong> (có thể là developmennt hoặc master tùy thuộc vào cái flow đang dùng) hoặc một thời điểm commit trước đó của feature. Lựa chọn thứ 2 là ta dùng Rebase kèm với options, ví dụ rebase lại trước đó 3 commit</p>\n<div class="gatsby-highlight">\n      <pre class="language-git"><code class="language-git">git checkout feature\ngit rebase -i HEAD~3</code></pre>\n      </div>\n<p>Bằng cách chỉ định <code class="language-text">HEAD~3</code>, chúng ta không tạo thêm state mới của branch, chúng ta chỉ viết lại cho 3 commit trước đó.</p>\n<p><img src="https://wac-cdn.atlassian.com/dam/jcr:079532c4-2594-40ed-a5c4-0e3621b9edff/07.svg"></p>\n<p>Nếu muốn viết lại toạn bộ cái feature sử dụng cách này, dùng lệnh <code class="language-text">git merge-base</code> để tìm đến gốc của feature branch</p>\n<div class="gatsby-highlight">\n      <pre class="language-git"><code class="language-git">git merge-base feature master</code></pre>\n      </div>\n<p><a href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing">Link bài gốc</a></p>',timeToRead:4,excerpt:"Ý tưởng chính Merge Rebase Nguyên tắc vàng của Rebase Quy trình làm việc Ý tưởng chính Điều đầu tiên cần hiểu về   là nó giải quyết cùng một…",frontmatter:{title:"Merge vs Rebase trong Git",cover:"https://wac-cdn.atlassian.com/dam/jcr:15447956-9d33-4817-9dc6-fd6c86f24240/hero.svg",date:"2018-09-18",category:null,tags:["javascript"],desc:"Trong bài viết này, chúng ta sẽ so sánh giữa lệnh git rebase với git merge, những trường hợp ta có thể áp dụng rebase trong quá trình làm việc với git"},fields:{slug:"/2018-09-18-merging-va-rebase-trong-git"}}},pathContext:{slug:"/2018-09-18-merging-va-rebase-trong-git",prev:{frontmatter:{title:"Giới thiệu React Profiler",desc:"Từ version React 16.5 bổ sung thêm một plugin DevTool profiler. Plugin này được dùng để thu thập các thông tin về thời gian render một component, xác định nguyên nhân làm trì trệ performance.",type:"post",category:null,tags:["react","performance"],date:"2018-09-19",cover:""},fields:{slug:"/2018-09-19-huong-dan-react-profiler-dev-tool"}},next:{frontmatter:{title:"So sánh localStorage, sessionStorage, cookie",desc:"Sự khác nhau giữa 3 cách lưu thông tin xuống trình duyệt",type:"post",category:null,tags:["javascript","security"],date:"2018-09-17",cover:""},fields:{slug:"/2018-09-17-huong-dan-luu-token-o-dau"}}}}}});
//# sourceMappingURL=path---2018-09-18-merging-va-rebase-trong-git-934635160c035bf8bd10.js.map