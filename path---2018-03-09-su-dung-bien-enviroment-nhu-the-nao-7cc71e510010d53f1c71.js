webpackJsonp([45],{"./node_modules/json-loader/index.js!./.cache/json/2018-03-09-su-dung-bien-enviroment-nhu-the-nao.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Khi nhắc đến thuật ngữ "Environment Variable" là nghĩ ngay tới việc thiết đặt biến này cho thư mục Java Home trong windows</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*NWeRct1eJ16rAmEaabKV7A.png"></p>\n<p>Thật ra không liên quan gì đâu nhá</p>\n<p>Trong Node, biến Environment là một biến global, thường được sử dụng để chỉ định <code>process</code> nào muốn chạy. Ví dụ, khi chạy một ứng dụng web, ta sẽ có các biến <strong>Environmen</strong> sau:</p>\n<ul>\n<li>Port</li>\n<li>Database connection string</li>\n</ul>\n<p>Nếu đã từng làm việc với .Net, chắc sẽ biết tới file <code>web.config</code>. Biến Environment làm việc i như các thiết đặt trong <code>web.config</code></p>\n<p>Ảnh vui nha</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*v9l07sac43rmP-FAXxmwkw.png"></p>\n<h1>Set giá trị bằng terminal</h1>\n<p>Thí dụ ta set giá trị của <code>PORT</code> </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PORT=6060 NODE_ENV=production webpack</code></pre>\n      </div>\n<p>Giờ lúc code, ta gọi cái biến này ra bằng cách</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>PORT\n</code></pre>\n      </div>\n<p>Không phải lúc nào set giá trị của biến <code>env</code> bằng terminal, ví dụ connection string thì không ai đưa vào bằng terminal</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PORT=65534 DB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:19373/?ssl=true&replicaSet=globaldb" SECRET_KEY=b6264fca-8adf-457f-a94f-5a4b0d1ca2b9</code></pre>\n      </div>\n<h1>Set giá trị bằng file <code>.env</code></h1>\n<p>Tạo ra một cái file <code>.env</code> trong cùng thư mục project, khai báo mớ biến environment ở đây</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PORT=65534\n\nDB_CONN="mongodb://react-cosmos-db:swQOhAsVjfHx3Q9VXh29T9U8xQNVGQ78lEQaL6yMNq3rOSA1WhUXHTOcmDf38Q8rg14NHtQLcUuMA==@react-cosmos-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"\n\nSECRET_KEY="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"</code></pre>\n      </div>\n<p>Để đọc được giá trị này, có rất nhiều cách, mà cách nào thì cũng phải cái thêm package!, dùng package dễ nhất là <code>dotenv</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install dotenv --save</code></pre>\n      </div>\n<p>Việc sử dụng hết sức đơn giản như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'dotenv\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'môngdb\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>\n\nMongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>DB_CONN<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> db<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"We are connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Lưu ý đừng check in file <code>.env</code> này lên github, nếu checkin lên Github sẽ báo ngay tới email là việc làm này hết sức nguy hại tới sự \'riêng tư\'!</p>\n</blockquote>\n<h1>Extension của VSCode</h1>\n<p>Nếu đang dùng VSCode, một số extension này sẽ hưu ích</p>\n<p>DotENV extension: mang màu sắc đến với cuộc sống</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*K5PBHyeMSrND58ycVyw3YA.png"></p>',frontmatter:{date:"March 09, 2018",path:"/2018-03-09-su-dung-bien-enviroment-nhu-the-nao",tags:["javascript"],title:"Sử dụng biến Node Environment",desc:"Biến environment là một phần cơ bản cần biết khi làm việc với Node"}}},pathContext:{prev:!1,next:{excerpt:"Nếu chưa biết tại sao lại sinh ra thằng Redux này, có thể xem ở tuts trước của mình. Chỉ sử dụng State của React Component sẽ build Giải thích ngắn gọn cho dễ theo dõi Giá trị   được lưu trong  state  của component  Khi user click '+', hàm   sẽ tăng...",html:'<p>Nếu chưa biết tại sao lại sinh ra thằng Redux này, có thể xem ở tuts trước của mình.</p>\n<h2>Chỉ sử dụng State của React</h2>\n<p>Component sẽ build</p>\n<p><img src="https://daveceddia.com/images/counter-plain.png"></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>\n\n  increment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  decrement <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Giải thích ngắn gọn cho dễ theo dõi</p>\n<ul>\n<li>Giá trị <code>count</code> được lưu trong <em>state</em> của component <code>Counter</code></li>\n<li>Khi user click \'+\', hàm <code>increment</code> sẽ tăng giá trị <code>count</code> lên</li>\n<li>Khi state bị thay đổi, React sẽ render lại <code>Counter</code> và những component bên trong của nó, giá trị mới sẽ hiện thị</li>\n</ul>\n<h2>Thêm Redux</h2>\n<p>Như đã đề cập trong tuts trước, Redux lưu <em>state</em> lại trong 1 cái <strong>store</strong>, tranh lẫn lộn, <strong>store</strong> là nơi lưu <strong>state</strong>, và <strong>state</strong> dữ liệu.</p>\n<p>Cài redux và react-redux package</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>npm install redux react-redux --save</code></pre>\n      </div>\n<p>Tại sao phải 2 cái package?, cái redux chỉ cho ta cái <strong>store</strong>, để lấy được cái <em>state</em> ra, sử dụng hàm <code>connect</code> trong <code>react-redux</code>, vì redux không phải chỉ làm việc chung được với React thôi không, nó có thể chơi với Vue, Angular không chừng.</p>\n<p>Bỏ state đi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  increment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// fill in later</span>\n  <span class="token punctuation">}</span>\n\n  decrement <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// fill in later</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>connect nó với store thôi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// ...</span>\n<span class="token comment" spellcheck="true">// Add this function:</span>\n<span class="token keyword">function</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// Then replace this:</span>\n<span class="token comment" spellcheck="true">// export default Counter;</span>\n\n<span class="token comment" spellcheck="true">// With this:</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Ok vậy là xong phần connect component với các state ở trong <em>store</em>, chúng ta cần khai báo Store!</p>\n<p>Bọc toàn bộ cái <code>App</code> bên trong component <code>Provider</code> của <em>react-redux</em> để tất cả component bên trong <code>App</code> có thể sử dụng hàm <code>connect</code> để gọi đến <em>store</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Counter</span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Chưa xong, chúng ta phải setup cái store để đưa vào cho Provider</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Counter</span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Vẫn chưa đủ, thật sự Redux không được thông minh như chúng ta tưởng tượng, lúc đầu mình đã nghĩ rằng khi create store như vậy nó sẽ cho mình những giá trị default bên trong store. Nhưng không chúng ta phải làm tay tất cả. Chúng ta phải cung cấp cho nó 1 hàm gọi là <code>reducer</code>, cái hàm <code>reducer</code> này phải <em>return</em> về một giá trị cho state, luôn phải return state nhé. Bên trong <code>reducer</code> ta sẽ xào nấu state theo yêu cầu, nó sẽ nhận state hiện tại và trả về state mới.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  count<span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span>state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Counter</span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Action</h2>\n<p>Action là gì, nó đóng vai trò như thế nào và nó đến từ đâu? Làm thế nào mà ta đổi giá trị <code>counter</code>?</p>\n<p><code>action</code> là 1 JS object nó sẽ cho biết bạn đang muốn <code>ordẻr</code> món nào, như tờ giấy ghi <code>order</code> trong nhà hàng ấy mà, nó sẽ chưa thông tin \'món\' bạn order, đầu bếp <code>reducer</code> sẽ dựa vào đó mà xào nấu ra \'món\' bạn order</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span>state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'DECREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Reducer sẽ căn cứ vào <code>action.type</code> để thục hiện thay đổi và trả về state mới, nên nhớ chúng ta phải LUÔN LUÔN trả về state trong <code>reducer</code>, nếu có hay không có thay đổi cũng phải trả về <em>state</em></p>\n<h2>Không bao giờ được phép thay đổi State trực tiếp</h2>\n<p>State là một immutable object, tuyệt đối <strong>KHÔNG</strong> thay đổi state như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">brokenReducer</span><span class="token punctuation">(</span>state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token comment" spellcheck="true">// NO! BAD: this is changing state!</span>\n      state<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n\n    <span class="token keyword">case</span> <span class="token string">\'DECREMENT\'</span><span class="token punctuation">:</span>\n      <span class="token comment" spellcheck="true">// NO! BAD: this is changing state too!</span>\n      state<span class="token punctuation">.</span>count<span class="token operator">--</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token comment" spellcheck="true">// this is fine.</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Làm như vậy cũng cấm tuyệt đối nhé: </p>\n<ul>\n<li><code>state.foo = 7</code></li>\n<li><code>state.items.push(newItem)</code></li>\n<li><code>delete state.something</code></li>\n</ul>\n<h2>Action từ đâu mà có</h2>\n<p>Action không tự sinh ra, nó được <code>dispatch</code> ra từ hàm <code>dispatch</code>. Hàm <code>dispatch</code> thì đặc biệt là nó không được import, mình có thể gọi <code>store.dispatch(someAction)</code>, nhưng cái store này thì nó năm ở trong 1 file thôi, Vậy hàm <code>dispatch</code> này làm sao có đây?</p>\n<p>Thật ra lúc chúng ta gọi <code>connect</code> thì hàm <code>connect</code> cũng đã <em>map</em> cái hàm <code>dispatch</code> vào trong props của component luôn.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  increment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'INCREMENT\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  decrement <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'DECREMENT\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',
id:"E:/anluu/luckyluu/posts/2018-03-06-redux-van-hanh-nhu-the-nao-kem-vi-du/index.md absPath of file >>> MarkdownRemark",timeToRead:5,frontmatter:{date:"2018-03-06T13:35:13.234Z",path:"/2018-03-06-redux-van-hanh-nhu-the-nao-kem-vi-du",tags:["react","javascript","redux"],title:"Redux vận hành như thế nào"}}}}}});
//# sourceMappingURL=path---2018-03-09-su-dung-bien-enviroment-nhu-the-nao-7cc71e510010d53f1c71.js.map