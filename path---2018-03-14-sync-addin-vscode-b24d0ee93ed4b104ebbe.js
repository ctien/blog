webpackJsonp([40],{"./node_modules/json-loader/index.js!./.cache/json/2018-03-14-sync-addin-vscode.json":function(n,t){n.exports={data:{markdownRemark:{html:'<ul>\n<li>Tài khoản Github, danh sách extension sẽ được lưu lên gist</li>\n<li>Cài thêm extentions tên là Settings Sync - tác giả Shan Khan.</li>\n</ul>\n<h1>Tạo access token trên Github</h1>\n<p>Đăng nhập vào tài khoản Github, vào trang Settings / Developer settings / Personal access tokens / Generate New Token</p>\n<p><img src="https://shanalikhan.github.io/img/github1.PNG"></p>\n<p>Nhập tên và cấp quyền tạo gist cho token này</p>\n<p><img src="https://shanalikhan.github.io/img/github2.PNG"></p>\n<p>Sau khi tạo xong, nhớ lưu lại token này ở đâu đó</p>\n<p><img src="https://shanalikhan.github.io/img/github3.PNG"></p>\n<h1>Upload những thiết đặt, extensions đã cài cho VSCode</h1>\n<p>Dùng phím tắt <code>Shift + Alt + U</code> hoặc search từ command Palette, search từ sync</p>\n<p>Nó sẽ yêu cầu nhập giá trị token vừa mới tạo</p>\n<p><img src="https://shanalikhan.github.io/img/upload1.png"></p>\n<p>Sau khi upload thành công, nó sẽ trả về gist id, <strong>nhớ copy</strong> và lưu lại giá trị gist Id này để sử dụng trên máy khác.</p>\n<h1>Download các thiết từ gist về</h1>\n<p>Dùng phím tắt <code>Shift + Alt + D</code>, hoặc gọi từ command palette</p>\n<p>Nó sẽ yêu cầu nhập lại token và gist id đã tạo, điền vào, xong!\n<img src="https://shanalikhan.github.io/img/upload1.png">\n<img src="https://shanalikhan.github.io/img/download2.png">\n<img src="https://shanalikhan.github.io/img/download3.png"></p>',frontmatter:{date:"March 14, 2018",path:"/2018-03-14-sync-addin-vscode",tags:["javascript"],title:"Sync extensions của VSCode",desc:"Khi sử dụng VSCode chắc ai cũng cài thêm một mớ extensions, lỡ ngày nào cài lại máy, hay sử dùng máy công ty, máy ở nhà muốn VSCode sync mấy cái extentions hay sử dụng"}}},pathContext:{prev:!1,next:{excerpt:'Khi nhắc đến thuật ngữ "Environment Variable" là nghĩ ngay tới việc thiết đặt biến này cho thư mục Java Home trong windows Thật ra không liên quan gì đâu nhá Trong Node, biến Environment là một biến global, thường được sử dụng để chỉ định   nào muốn...',html:'<p>Khi nhắc đến thuật ngữ "Environment Variable" là nghĩ ngay tới việc thiết đặt biến này cho thư mục Java Home trong windows</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*NWeRct1eJ16rAmEaabKV7A.png"></p>\n<p>Thật ra không liên quan gì đâu nhá</p>\n<p>Trong Node, biến Environment là một biến global, thường được sử dụng để chỉ định <code>process</code> nào muốn chạy. Ví dụ, khi chạy một ứng dụng web, ta sẽ có các biến <strong>Environmen</strong> sau:</p>\n<ul>\n<li>Port</li>\n<li>Database connection string</li>\n</ul>\n<p>Nếu đã từng làm việc với .Net, chắc sẽ biết tới file <code>web.config</code>. Biến Environment làm việc i như các thiết đặt trong <code>web.config</code></p>\n<p>Ảnh vui nha</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*v9l07sac43rmP-FAXxmwkw.png"></p>\n<h1>Set giá trị bằng terminal</h1>\n<p>Thí dụ ta set giá trị của <code>PORT</code> </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PORT=6060 NODE_ENV=production webpack</code></pre>\n      </div>\n<p>Giờ lúc code, ta gọi cái biến này ra bằng cách</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>PORT\n</code></pre>\n      </div>\n<p>Không phải lúc nào set giá trị của biến <code>env</code> bằng terminal, ví dụ connection string thì không ai đưa vào bằng terminal</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PORT=65534 DB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:19373/?ssl=true&replicaSet=globaldb" SECRET_KEY=b6264fca-8adf-457f-a94f-5a4b0d1ca2b9</code></pre>\n      </div>\n<h1>Set giá trị bằng file <code>.env</code></h1>\n<p>Tạo ra một cái file <code>.env</code> trong cùng thư mục project, khai báo mớ biến environment ở đây</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PORT=65534\n\nDB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"\n\nSECRET_KEY="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"</code></pre>\n      </div>\n<p>Để đọc được giá trị này, có rất nhiều cách, mà cách nào thì cũng phải cái thêm package!, dùng package dễ nhất là <code>dotenv</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install dotenv --save</code></pre>\n      </div>\n<p>Việc sử dụng hết sức đơn giản như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'dotenv\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'môngdb\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>\n\nMongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>DB_CONN<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> db<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"We are connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Lưu ý đừng check in file <code>.env</code> này lên github, nếu checkin lên Github sẽ báo ngay tới email là việc làm này hết sức nguy hại tới sự \'riêng tư\'!</p>\n</blockquote>\n<h1>Extension của VSCode</h1>\n<p>Nếu đang dùng VSCode, một số extension này sẽ hưu ích</p>\n<p>DotENV extension: mang màu sắc đến với cuộc sống</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*K5PBHyeMSrND58ycVyw3YA.png"></p>',id:"E:/anluu/luckyluu/posts/2018-03-09-su-dung-bien-enviroment-nhu-the-nao/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2018-03-09T13:35:13.234Z",path:"/2018-03-09-su-dung-bien-enviroment-nhu-the-nao",tags:["javascript"],title:"Sử dụng biến Node Environment"}}}}}});
//# sourceMappingURL=path---2018-03-14-sync-addin-vscode-b24d0ee93ed4b104ebbe.js.map