webpackJsonp([0x9d0a280720dc],{1415:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Để thực hành bài này, bạn có thể sử dụng <a href="https://github.com/nolanlawson/measure-style-and-layout">source code có sẵn</a> này</p>\n<p>Trên tab Performance của DevTools chúng ta có</p>\n<p><img src="https://github.com/nolanlawson/measure-style-and-layout" alt="Đo thời gian render bằng Chrome"></p>\n<p>Đây là giá trị CPU đã tiêu tốn để render component, theo đơn vị là mili giây. Nó sẽ được thực hiện 4 bước</p>\n<ul>\n<li>Thực thi javascript</li>\n<li>Apply các format bằng CSS</li>\n<li>Tính layout, trình duyệt tiếp tục tính toán để "đặt" các element trên màn hình ở chỗ nào</li>\n<li>Render được thực hiện trên một <a href="https://blogs.windows.com/msedgedev/2017/08/17/making-web-smoother-independent-rendering/">thread riêng</a></li>\n</ul>\n<p>Đa phần mọi người sẽ bỏ qua các bước 2, 3, 4 khi đo, chỉ tính toán thời gian thực thi javascript</p>\n<p><img src="https://nolanwlawson.files.wordpress.com/2018/09/screenshot-2018-09-22-11-45-56-3-copy.png?w=570&#x26;h=254" alt="Đo thời gian render bằng Chrome"></p>\n<p>Bước render rất khó có thể đo được chính xác, nó được thực hiện trên threat riêng và dùng GPU</p>\n<p>Phần style và layout thì có thể đo chính xác hơn vì nó block lại main thread</p>\n<h1 id="đo-gì"><a href="#%C4%91o-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đo gì?</h1>\n<p>Chúng ta sẽ <a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark">đánh dấu</a> từ khi javascript bắt đầu chạy, đến hết phần render</p>\n<p>Sử dụng <code class="language-text">requestAnimationFrame</code> là chính, nó được gọi trước quá trình style và layout, nhưng thực tế trước Edge v18 và một số bản Safari thì không đúng, nên cũng có thể có chút sai xót</p>\n<p><img src="https://nolanwlawson.files.wordpress.com/2018/09/screenshot-2018-09-22-11-45-56-3.png?w=570&#x26;h=254" alt="Đo thời gian render bằng Chrome"></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">\'end\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Phần code trong <code class="language-text">setTimeOut</code> được gọi ngay sau bước paint</p>\n<p><img src="https://nolanwlawson.files.wordpress.com/2018/09/screenshot-2018-09-22-12-15-07.png?w=570&#x26;h=343" alt="Đo thời gian render bằng Chrome"></p>\n<p><img src="https://i.imgur.com/Pwa9tV8.png" alt="Đo thời gian render bằng Chrome"></p>\n<h1 id="một-số-vấn-đề"><a href="#m%E1%BB%99t-s%E1%BB%91-v%E1%BA%A5n-%C4%91%E1%BB%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Một số vấn đề</h1>\n<ul>\n<li><code class="language-text">setTimeOut</code> đôi khi có sai lệch tầm 4ms trên một số trình duyệt</li>\n<li>Nếu có một <code class="language-text">setTimeOut</code> callback khác trong code, có thể không còn đúng</li>\n<li>Sau này khi các trình duyệt đã hỗ trợ cách tốt hơn thì setTimeOut kiểu này là dư thừa</li>\n</ul>\n<p><a target="_blank" rel="noopener noreferrer" href="https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/">Accurately measuring layout on the web</a></p>',timeToRead:2,excerpt:"Để thực hành bài này, bạn có thể sử dụng  source code có sẵn  này Trên tab Performance của DevTools chúng ta có Đây là giá trị CPU đã tiêu…",frontmatter:{title:"Đo thời gian render bằng Chrome",cover:"",date:"2018-10-23",category:null,tags:["chrome","performance"],desc:"Bàn luận kỹ thuật để đo chính xác thời gian render"},fields:{slug:"/2018-10-23-huong-dan-do-toc-do-website-bang-chrome"}}},pathContext:{slug:"/2018-10-23-huong-dan-do-toc-do-website-bang-chrome",prev:{frontmatter:{title:"Javascript prototype chuyên sâu",desc:"Bài này chỉ phù hợp với các bạn đã có kiến thức trung bình khá javascript trở lên, mình không chỉ đơn giản giải thích cách xài mà còn sâu hơn, bạn sẽ nắm rất rất rõ prototype trong javascript thực chất là gì",type:"post",category:null,tags:["javascript"],date:"2018-10-24",cover:""},fields:{slug:"/2018-10-24-giai-thich-prototype-trong-javascript"}},next:{frontmatter:{title:"Sử dụng border-radius để vẽ custom shape",desc:"Trick hay trong CSS sử dụng border-radius để vẽ hình",type:"post",category:null,tags:["css"],date:"2018-10-22",cover:"https://9elements.com/io/images/border-radius-7.png"},fields:{slug:"/2018-10-22-huong-dan-dung-border-radius-ve-custom-shape"}}}}}});
//# sourceMappingURL=path---2018-10-23-huong-dan-do-toc-do-website-bang-chrome-b108b88acbf22da6366b.js.map