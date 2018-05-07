webpackJsonp([75],{"./node_modules/json-loader/index.js!./.cache/json/2016-11-19-phan-5-es-6-can-ban-template-literals.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Khai báo một kiểu <code>template literal</code>, đặt giữa dấu <code><code></code></code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> text  <span class="token operator">=</span> <span class="token template-string"><span class="token string">`First template literal`</span></span>\n</code></pre>\n      </div>\n<p>Với template literals, mình có thể chèn giữa chuỗi đó một đoạn <em>code javascript</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> name  <span class="token operator">=</span> <span class="token template-string"><span class="token string">`AnLuu`</span></span>\n<span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token operator">&lt;</span>code<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!&lt;/code>`</span></span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: Hello, AnLuu</span>\n</code></pre>\n      </div>\n<p>Các biến số sử dụng trong phải template literal phải được khai báo trước template literal. Thêm một ví dụ khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token template-string"><span class="token string">`The time and date is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocalString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n<span class="token template-string"><span class="token string">`The result of 2+3 equals </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n</code></pre>\n      </div>\n<p>Mình có thể lồng code trong code</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token template-string"><span class="token string">`This a template literal ${ `</span></span><span class="token keyword">with</span> another <span class="token operator">%</span><span class="token punctuation">{</span> <span class="token string">\'one\'</span> <span class="token punctuation">}</span> embeded inside it<span class="token template-string"><span class="token string">`}`</span></span>\n</code></pre>\n      </div>\n<p>Multiline Srring</p>\n<p>Để có nhiều dòng trong javascript string, trước ES6 có mấy cách làm như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n    <span class="token string">\'The first line\\n\\\n    A second line\\n\\\n    Then a third line\'</span>\n\n<span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n    <span class="token string">\'The first line\\n\'</span> <span class="token operator">+</span>\n    \'A second line\\n <span class="token operator">+</span>\n    <span class="token string">\'Then a third line\'</span>\n\n<span class="token keyword">var</span> multilineString <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">\'The first line\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'A second line\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Then a third line\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">.</span>join<span class="token punctuation">[</span><span class="token string">\'\\n\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Với ES6, đơn giản là mình gõ Enter như bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> multilineString <span class="token operator">=</span>\n<span class="token template-string"><span class="token string">`The first line\nThe second line\nThen a third line`</span></span>\n</code></pre>\n      </div>\n<p>Cực kỳ hữu ích khi cần phải chèn một đoạn HTML như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Module ES6\'</span><span class="token punctuation">,</span>\n    excerpt<span class="token punctuation">:</span> <span class="token string">\'Here goes some properly sanitized HTML\'</span><span class="token punctuation">,</span>\n    tags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'es6\'</span><span class="token punctuation">,</span><span class="token string">\'template-literals\'</span><span class="token punctuation">,</span><span class="token string">\'es6-in-depth\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token string">`&lt;article>\n    &lt;header>\n        &lt;h1></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> book<span class="token punctuation">.</span>title <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1>\n    &lt;/header>\n    &lt;section> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> book<span class="token punctuation">.</span>excerpt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/section>\n    &lt;footer>\n&lt;ul>\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\nbook<span class="token punctuation">.</span>tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> tag <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>code<span class="token operator">></span>\n    <span class="token operator">&lt;</span>li<span class="token operator">></span> $<span class="token punctuation">{</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li>\n&lt;/code>)\n.join(\'\\n\')\n}&lt;/ul>\n&lt;/footer>\n&lt;/article>`</span></span>\n</code></pre>\n      </div>\n<p>Tagged templates</p>\n<p>Bình thường sau ký tự <code>\\</code> là một ký tự đặc biệt nào đó, ví dụ \\n để thêm dòng mới, nếu không muốn có giá kết quả này mà chỉ muốn xuất ra đúng ký tự \\n, dùng hàm String.raw</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> text <span class="token operator">=</span> String<span class="token punctuation">.</span>raw<span class="token template-string"><span class="token string">`The "\\n" new line won\'t result in a new line. It\'ll be escapted`</span></span>\n</code></pre>\n      </div>\n<p>Với một template literal như Hello, ${ name }. I am ${ emotion } to meet you! ,  tương tự như khi viết bằng tagged template</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">tag</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'Hello,\'</span><span class="token punctuation">,</span><span class="token string">\'. I am\'</span><span class="token punctuation">,</span> <span class="token string">\'to meet you!\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\'Maurice\'</span><span class="token punctuation">,</span><span class="token string">\'thrilled\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>',frontmatter:{date:"November 19, 2016",path:"/2016-11-19-phan-5-es6-can-ban-template-literals",tags:["javascript"],title:"Hồi 5: ES6 căn bản - Template literals",desc:"Hồi 5 trong series ES6 căn bản, nói về Template literals, một nâng cấp lớn cho string"}}},pathContext:{prev:{excerpt:" dùng để khai báo một biến như  , khác nhau ở phạm vi hoạt động (scoping), ví dụ với khai báo  Đoạn khai báo   nằm trong điều kiện   nhưng vẫn hoạt động, vì khai báo biến bằng từ khóa   phạm vi ngầm hiểu là trong cả một  , nó giống như viết như sau...",html:'<p><code>let</code> dùng để khai báo một biến như <code>var</code>, khác nhau ở phạm vi hoạt động (scoping), ví dụ với khai báo <code>var</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">isItTwo</span><span class="token punctuation">(</span> value <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> two <span class="token operator">=</span> <span class="token boolean">true</span>\n <span class="token punctuation">}</span>\n <span class="token keyword">return</span> two\n<span class="token punctuation">}</span>\n<span class="token function">isItTwo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: true</span>\n<span class="token function">isItTwo</span><span class="token punctuation">(</span><span class="token string">\'two\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: undefined</span>\n</code></pre>\n      </div>\n<p>Đoạn khai báo <code>var two = true</code> nằm trong điều kiện <code>if</code> nhưng vẫn hoạt động, vì khai báo biến bằng từ khóa <code>var</code> phạm vi ngầm hiểu là trong cả một <code>function</code>, nó giống như viết như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">isItTwo</span><span class="token punctuation">(</span> value <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">var</span> two\n <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  two <span class="token operator">=</span> <span class="token boolean">true</span>\n <span class="token punctuation">}</span>\n <span class="token keyword">return</span> two\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Khai báo biến bằng từ khóa <code>var</code> dễ rối so với các ngôn ngữ khác như <code>php</code>, khi biến được khai báo thì nó có phạm vi hoạt động <em>"block-scoped"</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n <span class="token comment" spellcheck="true">// 0,1</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// result: i is not defined</span>\n</code></pre>\n      </div>\n<p>Khai báo biến bằng từ khóa <code>let</code> hay <code>const</code> có phạm vi <em>block-scoped</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">16</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>\n  <span class="token comment" spellcheck="true">// 16</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// 3.1415</span>\n</code></pre>\n      </div>\n<p>Khi khai báo bằng từ khóa <code>const</code> phải có giá trị khởi tạo, không được phép để rỗng như <code>let</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415</span>\n<span class="token keyword">const</span> e<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// SyntaxError</span>\n</code></pre>\n      </div>\n<p>Nếu dùng <code>const</code> để khai báo biến thì giá trị nó sẽ không được gán mới hoặc khởi tạo lại, nhưng có thể push thêm giá trị vào</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> people <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'An\'</span><span class="token punctuation">,</span><span class="token string">\'Luu\'</span><span class="token punctuation">]</span>\npeople <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// Result: [\'An\',\'Luu\']</span>\npeople<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'Binh\'</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// Result[\'An\',\'Luu\',\'Binh\']</span>\n</code></pre>\n      </div>',id:"E:/anluu/luckyluu/posts/2016-11-20-phan-6-es6-can-ban-khai-bao-let-const/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2016-11-20T13:35:13.234Z",path:"/2016-11-20-phan-6-es6-can-ban-khai-bao-let-const",tags:["javascript"],title:"Hồi 6: ES6 căn bản - Khai báo biến với let và const"}},next:{excerpt:'Mục lục Spread Operator Rest parameter Khi có số lượng tham số truyền vào cho một function không cố định, trước đây ta dùng  , sau đó sử dụng   để chuyển nó thành một mảng Kết quả tương tự với cách làm mới đơn giản hơn, thêm dấu "..." phía trước tham...',html:'<p>Mục lục</p>\n<!-- MarkdownTOC -->\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>- Rest parameter</code></pre>\n      </div>\n<ul>\n<li>Spread Operator</li>\n</ul>\n<!-- /MarkdownTOC -->\n<h2>Rest parameter</h2>\n<p>Khi có số lượng tham số truyền vào cho một function không cố định, trước đây ta dùng <code>arguments object</code>, sau đó sử dụng <code>Array.prototype.slice.call</code> để chuyển nó thành một mảng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">var</span> list <span class="token operator">=</span> Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// -> [\'a\',\'b\',\'c\']</span>\n</code></pre>\n      </div>\n<p>Kết quả tương tự với cách làm mới đơn giản hơn, thêm dấu "..." phía trước tham số</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// -> [\'a\',\'b\',\'c\']</span>\n</code></pre>\n      </div>\n<p>Nếu muốn truyền vào 1 tham số bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> <span class="token function">print</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span><span class="token operator">...</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>\n console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// -> \'a\'</span>\n<span class="token comment" spellcheck="true">// -> [\'b\',\'c\']</span>\n</code></pre>\n      </div>\n<p>Nếu sử dụng <code>Arrow function</code> thì buộc phải thêm dấu ngoặc kép <code>()</code>, dù chỉ có một tham số</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> sumAll <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token operator">...</span>numbers <span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span>next<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> total <span class="token operator">+</span> next<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">sumAll</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// = 8</span>\n</code></pre>\n      </div>\n<p>Nếu lúc trước ta phải viết</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">sumAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> numbers <span class="token operator">=</span> Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> a <span class="token operator">+</span> b\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">// =8</span>\n</code></pre>\n      </div>\n<h1>Spread Operator</h1>\n<p>Xem ví dụ bên dưới, Spread operator giúp trả về một mảng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">cast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token function">cast</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// [\'a\',\'b\',\'c\']</span>\n</code></pre>\n      </div>\n<p>Trong trường hợp phải combine nhiều mảng</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> all <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>all<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// [1,2,3,4,5,6,7]</span>\n</code></pre>\n      </div>\n<p>Một ví dụ khác để thấy lợi ích của <em>spread operator</em> khi kết hợp với new một <code>object</code> như <code>Date</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// Thu Dec 31 2015</span>\n</code></pre>\n      </div>\n<p>Khi muốn lấy 1 hoặc 2 phần tử của mảng, cách vẫn thường làm là shift mấy phần tử này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'d\'</span> <span class="token punctuation">]</span>\n<span class="token keyword">var</span> first <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> second <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// a</span>\n</code></pre>\n      </div>\n<p>Cách viết mới</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'d\'</span><span class="token punctuation">,</span><span class="token string">\'e\'</span> <span class="token punctuation">]</span>\n<span class="token comment" spellcheck="true">// [\'c\',\'d\',\'e\']</span>\n</code></pre>\n      </div>',id:"E:/anluu/luckyluu/posts/2016-11-18-phan-4-es6-can-ban-rest-parameters-va-spread-operator/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-11-18T13:35:13.234Z",path:"/2016-11-18-phan-4-es6-can-ban-rest-parameters-va-spread-operator",tags:["javascript"],title:"Hồi 4: ES6 căn bản - Rest Parameters và Spread Operator"}}}}}});
//# sourceMappingURL=path---2016-11-19-phan-5-es-6-can-ban-template-literals-f146c1480e37ad70d1d0.js.map