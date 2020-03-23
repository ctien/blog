webpackJsonp([0x6fe8aae6e1ce],{1551:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Tình huống khi bạn biết chắc nó sẽ có lỗi, nhưng là một lỗi có thể chấp nhận và bỏ qua, bạn sẽ viết nó thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">\'bar\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> customConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  customConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'custom.config\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// không có custom config thì cũng ok mà.</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>defaultConfig<span class="token punctuation">,</span> <span class="token operator">...</span>customConfig <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu có <code class="language-text">custom.config</code> file, chúng ta load nó, nếu ko thì cũng chẳng sao, chúng ta dùng giá trị mặc định.</p>\n<p>Vậy đâu là vấn đề khi chúng ta sử dụng <code class="language-text">catch</code> mà ko làm gì cả. Vấn đề là chúng ta catch <strong>toàn bộ</strong> error mặc dù chúng ta không hề biết là có một error nào khác có thể xuất hiện trong <code class="language-text">try</code> hay ko</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// custom.config.js</span>\n<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">\'bar\'</span><span class="token punctuation">;</span>\nfoo <span class="token operator">=</span> <span class="token string">\'baz\'</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Assignment to constant variable.</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu file <code class="language-text">custom.config</code> của chúng ta mắc lỗi <code class="language-text">TypeError: Assignment to constant variable</code> như trên, đoạn code load config sẽ vẫn chạy với default config như đã biết, vì nó bỏ qua luôn khi có lỗi trong file <code class="language-text">custom.config.js</code>. </p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">const defaultConfig = { foo: \'bar\' };\n<span class="token unchanged"> let customConfig = {};\n try {\n   customConfig = require(path.resolve(process.cwd(), \'custom.config\'));\n } catch (error) {\n  // không có custom config thì cũng ok mà.\n</span><span class="token inserted-sign inserted">+  if (error.code !== \'MODULE_NOT_FOUND\') throw error;\n</span><span class="token unchanged"> }\n const config = { ...defaultConfig, ...customConfig };</span></code></pre>\n      </div>\n<p>Kiểm tra <code class="language-text">error.code</code> để đảm bảo chỉ bỏ qua các lỗi mà chúng ta thật sự không quan tâm, tình huống này là <code class="language-text">MODULE_NOT_FOUND</code>, và <code class="language-text">throw</code> một error cho các trường hợp khác.</p>\n<p>Có thể phân error ra làm 2 loại: <strong>operational error</strong> và <strong>programmer error</strong>. Operational error là các lỗi từ bên ngoài chương trình chúng ta viết, code chúng ta vẫn chạy, nhưng lỗi chúng ta ko kiểm soát được như gọi API bị fail. Programmer error là kiểu lỗi do chúng ta gây ra bên trong source, đọc <a href="https://www.joyent.com/node-js/production/design/errors">bài này để hiểu chi tiết hơn</a></p>\n<p>Với kiểu operational error, chúng ta có những cách tiếp cận sau</p>\n<ul>\n<li>catch lại error và thực hiện lại thao tác đó lần nữa</li>\n<li>catch error mà ko làm gì cả, hoặc hiển thị một thông báo đến user</li>\n<li>Ko catch luôn, hoặc throw một custom error</li>\n</ul>\n<p>Với lỗi với network request, chúng ta có thể dựa vào <code class="language-text">error.code</code> trả về để lựa chọn thao tác tiếp theo muốn thực hiện.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// notifications.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchNew <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./notification-service\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> notifications <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/Network Error/</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Sentry<span class="token punctuation">.</span><span class="token function">withScope</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      scope<span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span>Sentry<span class="token punctuation">.</span>Severity<span class="token punctuation">.</span>Info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t    Sentry<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> error<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Ở ví dụ trên, chúng ta ko thông báo gì cả cho user mà log lại lỗi đó trong <a href="https://sentry.io/welcome/">Sentry</a> (Sẵn tiện giới thiệu luôn, Sentry là một tool để lưu lại các lỗi nếu có xảy ra trên app, khá hữu ích nhé)</p>\n<p>Nếu chúng ta có file <code class="language-text">article-service.js</code> chứa function thực hiện request API, rải rác ở nhiều nơi khác trong source, sử dụng function này của <code class="language-text">article-service.js</code>, chúng ta sẽ ko đặt catch error ở trong <code class="language-text">article-service.js</code> mà đặt ở nơi đang sử dụng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// article-service.js</span>\n<span class="token keyword">import</span> api <span class="token keyword">from</span> <span class="token string">\'./api\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> api<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">{</span> filter<span class="token punctuation">:</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'article\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// article-listing.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./article-service\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> articles <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">renderArticles</span><span class="token punctuation">(</span>articles<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Sentry<span class="token punctuation">.</span><span class="token function">withScope</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">scope</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    scope<span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span>Sentry<span class="token punctuation">.</span>Severity<span class="token punctuation">.</span>Warning<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t  Sentry<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// hiển thị thông báo</span>\n  <span class="token comment">// để user biết có lỗi chứ</span>\n  <span class="token function">renderError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tóm lại, một điều quan trọng nhất cần nhớ sau bài này là <strong>đừng bao giờ dùng try...catch mà bỏ trống phần catch</strong></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://markus.oberlehner.net/blog/try-catch-the-right-way/">try...catch: The Right Way</a></p>',timeToRead:3,excerpt:"Tình huống khi bạn biết chắc nó sẽ có lỗi, nhưng là một lỗi có thể chấp nhận và bỏ qua, bạn sẽ viết nó thế này Nếu có   file, chúng ta load…",frontmatter:{title:"Sử dụng try...catch đúng cách",cover:"",date:"2019-05-01",category:null,tags:["javascript"],desc:"Nhìn lại một cách cặn kẽ hơn cách chúng ta xử lý trường hợp lỗi trong javascript"},fields:{slug:"/2019-05-01-huong-dan-su-dung-try-catch-dung-cach"}}},pathContext:{slug:"/2019-05-01-huong-dan-su-dung-try-catch-dung-cach",prev:{frontmatter:{title:"Kiểm tra element có nằm trong viewport không bằng javascript",desc:"Học cách viết một helper function để kiểm tra element nằm trong viewport",type:"post",category:null,tags:["javascript"],date:"2019-05-07",cover:""},fields:{slug:"/2019-05-07-huong-dan-xac-dinh-element-nam-trong-viewport"}},next:{frontmatter:{title:"Preload, prefetch và các thuộc tính khác trên link",desc:"Cùng tìm hiểu các attribute sử dụng trên thẻ link để cải thiện hiệu năng",type:"post",category:null,tags:["css"],date:"2019-04-25",cover:""},fields:{slug:"/2019-04-25-cac-thuoc-tinh-dung-tren-the-link-can-biet"}}}}}});
//# sourceMappingURL=path---2019-05-01-huong-dan-su-dung-try-catch-dung-cach-9e14dcf619d19afdaa4a.js.map