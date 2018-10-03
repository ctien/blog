webpackJsonp([60063155101469],{1343:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#g%E1%BB%8Di-m%E1%BB%99t-h%C3%A0m-a-h%C3%A0m-a-tr%E1%BA%A3-v%E1%BB%81-promise-th%C3%AC-h%C3%A0m-a-l%C3%A0-d%E1%BA%A1ng-h%C3%A0m-blocking">Gọi một hàm A hàm A trả về Promise, thì hàm A là dạng hàm blocking</a></li>\n<li><a href="#promise-l%C3%A0-m%E1%BB%99t-container-%C4%91%E1%BB%83-c%C6%B0u-mang-gi%C3%A1-tr%E1%BB%8B-tr%E1%BA%A3-v%E1%BB%81-t%E1%BB%AB-m%E1%BB%99t-asynchronously"><code class="language-text">Promise</code> là một container để cưu mang giá trị trả về từ một <code class="language-text">asynchronously</code></a></li>\n<li><a href="#promise-l%C3%A0-m%E1%BB%99t-%C4%91%E1%BB%91i-t%C6%B0%E1%BB%A3ng-t%E1%BA%A1o-ra-s%E1%BB%B1-ki%E1%BB%87n"><code class="language-text">Promise</code> là một đối tượng tạo ra sự kiện</a></li>\n</ul>\n<!-- /TOC -->\n<p>Xéeeeeeeeeet cái hàm sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>x <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// kết quả in ra</span>\n<span class="token comment">// Result: DONE</span></code></pre>\n      </div>\n<h2 id="gọi-một-hàm-a-hàm-a-trả-về-promise-thì-hàm-a-là-dạng-hàm-blocking"><a href="#g%E1%BB%8Di-m%E1%BB%99t-h%C3%A0m-a-h%C3%A0m-a-tr%E1%BA%A3-v%E1%BB%81-promise-th%C3%AC-h%C3%A0m-a-l%C3%A0-d%E1%BA%A1ng-h%C3%A0m-blocking" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gọi một hàm A hàm A trả về Promise, thì hàm A là dạng hàm blocking</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">asynFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// A</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// tương tự như</span>\n    <span class="token comment">// asyncFunc().then(x => console.log(\'Result: \' + x))</span>\n<span class="token punctuation">}</span>\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>hàm <code class="language-text">main</code> là một hàm <code class="language-text">async</code>. Dòng <em>A</em> sẽ đợi đến khi chạy xong hàm <code class="language-text">asyncFunc()</code>.</p>\n<p>Hàm gọi là <em>blocking</em> khi mà khi chạy hàm này mấy thằng khác không chạy đồng thời với nó, ngược lại <em>non-blocking</em> là hàm mà không can thiệp việc các hàm khác chạy cùng lúc với nó</p>\n<h2 id="code-classlanguage-textpromisecode-là-một-container-để-cưu-mang-giá-trị-trả-về-từ-một-code-classlanguage-textasynchronouslycode"><a href="#code-classlanguage-textpromisecode-l%C3%A0-m%E1%BB%99t-container-%C4%91%E1%BB%83-c%C6%B0u-mang-gi%C3%A1-tr%E1%BB%8B-tr%E1%BA%A3-v%E1%BB%81-t%E1%BB%AB-m%E1%BB%99t-code-classlanguage-textasynchronouslycode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">Promise</code> là một container để cưu mang giá trị trả về từ một <code class="language-text">asynchronously</code></h2>\n<p>Nếu hàm trả về <code class="language-text">Promise</code> thì cái <code class="language-text">Promise</code> này giống như một cái thùng chứa, hàm thực thi bên trong sẽ quăng kết quả trả về vào đó. Mô phỏng việc này bằng một <code class="language-text">Array</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> blank <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> blank<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> blank<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> blank <span class="token operator">=</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// đợi đến khi giá trị trả về được fill</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> blank<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//A</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result: \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Tất nhiên với một <code class="language-text">Promise</code> thực thụ không thể truy cập giá trị như dòng <em>A</em> (blank[0]), mà chúng ta sử dụng hàm <code class="language-text">then()</code> và một <em>callback</em></p>\n<h2 id="code-classlanguage-textpromisecode-là-một-đối-tượng-tạo-ra-sự-kiện"><a href="#code-classlanguage-textpromisecode-l%C3%A0-m%E1%BB%99t-%C4%91%E1%BB%91i-t%C6%B0%E1%BB%A3ng-t%E1%BA%A1o-ra-s%E1%BB%B1-ki%E1%BB%87n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">Promise</code> là một đối tượng tạo ra sự kiện</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token punctuation">{</span> success<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//A</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> handler <span class="token keyword">of</span> eventEmitter<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">handler</span><span class="token punctuation">(</span><span class="token string">\'DONE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> eventEmitter<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>success<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Result \'</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//B</span></code></pre>\n      </div>\n<p>Dòng <em>B</em> đăng ký lắng nghe sự kiện sau khi gọi hàm <code class="language-text">asyncFunc()</code>. Kết quả trả về của <code class="language-text">Promise</code> sẽ là một chuỗi event sau khi thực thi kèm với giá trị gì đấy ứng với từng event.</p>',timeToRead:3,excerpt:"Gọi một hàm A hàm A trả về Promise, thì hàm A là dạng hàm blocking  là một container để cưu mang giá trị trả về từ một   là một đối tượng…",frontmatter:{title:"Ba cách để hiểu Promise",cover:"",date:"2018-04-03",category:null,tags:["javascript","react"],desc:"3 cách để thẩm thấu được Promise trong javascript"},fields:{slug:"/2018-04-03-huong-dan-ba-cach-de-hieu-promise"}}},pathContext:{slug:"/2018-04-03-huong-dan-ba-cach-de-hieu-promise",prev:{frontmatter:{title:"Danh sách đồ chơi để bắt đầu với React Native",desc:"Để bắt đầu và đào sâu vọc vạch với React Native, bạn sẽ cần đụng tới những món đồ chơi sau",type:"post",category:null,tags:["javascript","react","react-native"],date:"2018-04-04",cover:""},fields:{slug:"/2018-04-04-huong-dan-danh-sach-doi-choi-voi-react-native"}},next:{frontmatter:{title:"Query String với React Router",desc:"Cách sử dụng query string với React Router siêu căn bản",type:"post",category:null,tags:["javascript","react"],date:"2018-03-29",cover:""},fields:{slug:"/2018-03-29-huong-dan-query-string-voi-react-router"}}}}}});
//# sourceMappingURL=path---2018-04-03-huong-dan-ba-cach-de-hieu-promise-77055cb3e9cc16cdce37.js.map