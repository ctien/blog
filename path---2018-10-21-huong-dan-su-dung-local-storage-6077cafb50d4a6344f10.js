webpackJsonp([0x93efed6694bf],{1419:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="vì-sao-chúng-ta-cần-localstorage"><a href="#v%C3%AC-sao-ch%C3%BAng-ta-c%E1%BA%A7n-localstorage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vì sao chúng ta cần localStorage</h1>\n<p>Nói đến HTTP, nó là dạng kết nối <em>stateless</em>, nghĩa là khi đóng một ứng dụng web, lần truy cập sau mọi thứ bị reset lại như ban đầu.</p>\n<p><strong>localStorag</strong>e đơn giản là nó giúp dev chúng ta lưu lại một vài thông tin ở phía trình duyệt của user, để lần sau truy cập ta có thể truy xuất các thông tin này.</p>\n<h1 id="cookie-không-đủ-xài"><a href="#cookie-kh%C3%B4ng-%C4%91%E1%BB%A7-x%C3%A0i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cookie không đủ xài</h1>\n<p>Cookie là một dạng file text lưu trên máy tính của user, link đến từng domain. Một vài giới hạn của cookie</p>\n<p>Tất cả request đến domain, đều sẽ nhét cái cookie này vào trên <code class="language-text">header</code></p>\n<p>Tối đa có 4KB dung lượng</p>\n<h1 id="sử-dụng-localstorage-trên-trình-duyệt-hỗ-trợ-html5"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-localstorage-tr%C3%AAn-tr%C3%ACnh-duy%E1%BB%87t-h%E1%BB%97-tr%E1%BB%A3-html5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng localStorage trên trình duyệt hỗ trợ HTML5</h1>\n<p>Cú pháp để set, get, delete giá trị của <code class="language-text">localStorage</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// set</span>\nlocalStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>‘tentui’<span class="token punctuation">,</span>’luubinhan’<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// get</span>\nVar tentui <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>‘tentui’<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// -> luubinhan</span>\n\n<span class="token comment">// delete</span>\nlocalStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>‘tentui’<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="làm-việc-trên-object"><a href="#l%C3%A0m-vi%E1%BB%87c-tr%C3%AAn-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Làm việc trên object</h1>\n<p>Vì khi lưu chúng ta chỉ có thể đưa <code class="language-text">string</code> vào trong <code class="language-text">localStorage</code>, để đưa một object</p>\n<p><img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/1c7f4cfb-16dc-40c8-9b56-644a1792a3c2/console-e1285930679229.png" alt="Làm việc trên object"></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">Var user <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tName<span class="token punctuation">:</span> ‘an’<span class="token punctuation">,</span>\n\tAge<span class="token punctuation">:</span> ‘<span class="token number">18</span><span class="token operator">+</span>’<span class="token punctuation">,</span>\n\tGender<span class="token punctuation">:</span> ‘superman’\n<span class="token punctuation">}</span>\nlocalStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>‘user’<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nConsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>‘user’<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="thông-tin-lưu-xuống-code-classlanguage-textlocalstoragecode"><a href="#th%C3%B4ng-tin-l%C6%B0u-xu%E1%BB%91ng-code-classlanguage-textlocalstoragecode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thông tin lưu xuống <code class="language-text">localStorage</code></h1>\n<ul>\n<li>\n<p>Để cache những dữ liệu lớn, tốn thời gian để load.</p>\n</li>\n<li>\n<p>Lưu lại trạng thái của giao diện user đã custom, có thể lưu cả một đoạn HTML xuống <code class="language-text">localStorage</code></p>\n</li>\n</ul>\n<p>Đọc thêm <a href="/2018-09-17-huong-dan-luu-token-o-dau">Lưu token ở đâu?</a> để so sánh với <code class="language-text">sessionStorage</code> và <code class="language-text">cookie</code></p>\n<p><a href="https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/">Local Storage And How To Use It On Websites</a></p>',timeToRead:2,excerpt:"Vì sao chúng ta cần localStorage Nói đến HTTP, nó là dạng kết nối  stateless , nghĩa là khi đóng một ứng dụng web, lần truy cập sau mọi thứ…",frontmatter:{title:"Sử dụng localStorage trên website như thế nào",cover:"",date:"2018-10-21",category:null,tags:["javascript"],desc:"Kiến thức căn bản sử dụng localStorage để lưu thông tin cần thiết xuống trình duyệt"},fields:{slug:"/2018-10-21-huong-dan-su-dung-local-storage"}}},pathContext:{slug:"/2018-10-21-huong-dan-su-dung-local-storage",prev:{frontmatter:{title:"Hướng dẫn inspect animation với Chrome DevTools",desc:"Học cách sử dụng công cụ inspection animation trong Chrome DevTools rất hữu ích khi làm animate.",type:"post",category:null,tags:["chrome","animation"],date:"2018-10-21",cover:""},fields:{slug:"/2018-10-21-huong-dan-dung-chrome-devtool-de-inspect-animation"}},next:{frontmatter:{title:"Hướng dẫn kiểm tra performace với Chrome DevTools",desc:"Học cách sử dụng tab Network Chrome DevTools để biết tại sao một trang load chậm, hướng dẫn từng bước một.",type:"post",category:null,tags:["chrome","performance"],date:"2018-10-20",cover:""},fields:{slug:"/2018-10-20-huong-dan-thuc-hien-kiem-tra-performance-voi-chrome-devtools"}}}}}});
//# sourceMappingURL=path---2018-10-21-huong-dan-su-dung-local-storage-6077cafb50d4a6344f10.js.map