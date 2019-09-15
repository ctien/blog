webpackJsonp([0xbc0a135eb23c],{1463:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Sử dụng rule <code class="language-text">no-restricted-imports</code></p>\n<p>Ví dụ chúng ta nghiêm cấm import <em>moment.js</em>, một thư viện khiến cục bundle của chúng ta phình to. Nếu được các bạn nên cân nhắc sử dụng <a href="https://date-fns.org/">date-fns</a> hoặc <a href="https://moment.github.io/luxon/">Luxon</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"no-restricted-imports"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">"paths"</span><span class="token operator">:</span>  <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"moment"</span><span class="token punctuation">,</span>\n        <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Sử dụng date-fns hoặc Luxon đi cưng à"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Khi <em>bọn nó</em> cố ý import sẽ nhận được cảnh báo</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Ví dụ khác, chặn ko cho import <strong>lodash</strong>, khuyến cáo dùng <a href="https://www.npmjs.com/package/lodash-es">lodash-es</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"no-restricted-imports"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"lodash"</span><span class="token punctuation">,</span>\n      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Use lodash-es instead!"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Có thể dùng message mặc định, truyền vào một mảng các thư viện bị cấm</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"no-restricted-imports"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"underscore"</span><span class="token punctuation">,</span> <span class="token string">"bluebird"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Trong trường hợp phức tạp hơn,  chúng ta có thể chặn tất cả những module nào khớp với pattern <code class="language-text">legacy/*</code>, kiểu như <code class="language-text">import helpers from &#39;legacy/helpers&#39;</code> là cấm</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"no-restricted-imports"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token property">"patterns"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"legacy/*"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/disallow-imports/">Disallow large imports from JavaScript projects</a></p>',timeToRead:1,excerpt:"Sử dụng rule  Ví dụ chúng ta nghiêm cấm import  moment.js , một thư viện khiến cục bundle của chúng ta phình to. Nếu được các bạn nên cân…",frontmatter:{title:"Không cho phép import với ESlint",cover:"",date:"2019-02-26",category:null,tags:["javascript"],desc:"Với ESlint chúng ta có thể cấm import những thư viện lớn, tránh để bà con trong team import tá lả."},fields:{slug:"/2019-02-26-chan-import-bang-eslint"}}},pathContext:{slug:"/2019-02-26-chan-import-bang-eslint",prev:{frontmatter:{title:"for vs forEach vs for/in vs for/of trong javascript",desc:"Trong javascript có rất nhiều cách để loop qua một array, chúng ta cùng bàn qua 4 cách chính hay sử dụng nhất",type:"post",category:null,tags:["javascript"],date:"2019-03-07",cover:""},fields:{slug:"/2019-03-07-huong-dan-lua-chon-phuong-thuc-lap-trong-array"}},next:{frontmatter:{title:"5 điều cần nhớ khi làm việc với service worker",desc:"Năm điều nhỏ nhỏ, nhưng rất hay ho cần thiết, cần biết",type:"post",category:null,tags:["javascript"],date:"2019-02-20",cover:""},fields:{slug:"/2019-02-20-huong-dan-5-dieu-can-nho-khi-dung-service-worker"}}}}}});
//# sourceMappingURL=path---2019-02-26-chan-import-bang-eslint-f57d4cc9110745161d29.js.map