webpackJsonp([0xe56470781381],{1362:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#ifelse">If/Else</a></li>\n<li><a href="#ko-render-v%E1%BB%9Bi-null">Ko render với <code class="language-text">null</code></a></li>\n<li><a href="#%C4%91%E1%BA%B7t-bi%E1%BA%BFn-cho-element">Đặt biến cho element</a></li>\n<li><a href="#c%C3%A2u-%C4%91i%E1%BB%81u-ki%E1%BB%87n-r%C3%BAt-g%E1%BB%8Dn">Câu điều kiện rút gọn</a></li>\n<li><a href="#short-circuit-operator-">Short-circuit operator (&#x26;&#x26;)</a></li>\n<li><a href="#immediately-invoked-function-expressions-iife">Immediately-invoked function expressions (IIFE)</a></li>\n<li><a href="#subcomponents">Subcomponents</a></li>\n<li><a href="#higher-order-component-hoc">Higher-Order Component (HOC)</a></li>\n</ul>\n<!-- /TOC -->\n<h1 id="ifelse"><a href="#ifelse" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>If/Else</h1>\n<p>Dễ nhất và căn bản nhất</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="ko-render-với-code-classlanguage-textnullcode"><a href="#ko-render-v%E1%BB%9Bi-code-classlanguage-textnullcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ko render với <code class="language-text">null</code></h1>\n<p>Nếu không muốn render một component, trong hàm return trả về giá trị <code class="language-text">null</code>, lưu ý khi return null nhưng hàm render vẫn được gọi.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token keyword">null</span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="đặt-biến-cho-element"><a href="#%C4%91%E1%BA%B7t-bi%E1%BA%BFn-cho-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đặt biến cho element</h1>\n<p>Giờ nếu không muốn thêm câu <code class="language-text">else</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> input<span class="token punctuation">;</span>\n    \n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">!==</span> <span class="token string">\'view\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      input <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n      \n    <span class="token keyword">return</span> input<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="câu-điều-kiện-rút-gọn"><a href="#c%C3%A2u-%C4%91i%E1%BB%81u-ki%E1%BB%87n-r%C3%BAt-g%E1%BB%8Dn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Câu điều kiện rút gọn</h1>\n<p>Thay gì <code class="language-text">if/else</code>, có thể dùng câu điều kiện rút gọn để render luôn</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">điều kiện ? nếu true : nếu false</code></pre>\n      </div>\n<p>Sử dụng với ví dụ trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span> <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Gọn gàng sạch sẽ hơn, tuy nhiên cũng đừng lạm dụng quá, có anh bạn làm chung với mình, lạm dụng cách này quá lố, đến nổi mỗi lần đọc code của anh ấy là cơn ác mộng, mặc dù không sai, nhưng thằng nào code sau mở lên đọc tội nó lắm.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span> condition1\n      <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component1</span></span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">:</span> <span class="token punctuation">(</span> condition2\n        <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component2</span></span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">:</span> <span class="token punctuation">(</span> condition3\n          <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component3</span></span> <span class="token punctuation">/></span></span>\n          <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token attr-name">4</span> <span class="token punctuation">/></span></span>\n        <span class="token punctuation">)</span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h1 id="short-circuit-operator-"><a href="#short-circuit-operator-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Short-circuit operator (&#x26;&#x26;)</h1>\n<p>Trong trường hợp trên, rõ ràng việc trả về <code class="language-text">null</code> cũng hơi dư thừa, có thể sử dụng ngắn-hơn-cả-ngắn với cú pháp <code class="language-text">&amp;&amp;</code>. Cũng như câu điều kiện rút gọn, tuy nhiên nó sẽ chỉ render nếu <code class="language-text">true</code>, con <code class="language-text">false</code> nó sẽ không làm gì cả</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span> <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="immediately-invoked-function-expressions-iife"><a href="#immediately-invoked-function-expressions-iife" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Immediately-invoked function expressions (IIFE)</h1>\n<p>IIFE như tên gọi nó đã nói lên tất cả, hàm sẽ thực thi ngay khi nó được định nghĩa.</p>\n<p>Bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n<span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Để biến nó thành IIFE, convert nó qua thành một expression</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token comment">/* tham số*/</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span> <span class="token comment">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// viêt như vầy cũng được nha</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token comment">/* tham số*/</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> <span class="token comment">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// hoặc bỏ luôn tên</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token comment">/* tham số*/</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> <span class="token comment">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// hoặc dùng luôn arrow function cho máu</span>\n<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token comment">/* tham số*/</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span> <span class="token comment">/* tham số*/</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Giờ thì dùng IIFE với component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>\n              <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                <span class="token keyword">const</span> handler <span class="token operator">=</span> view \n                    <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleEdit \n                    <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleSave<span class="token punctuation">;</span>\n                <span class="token keyword">const</span> label <span class="token operator">=</span> view <span class="token operator">?</span> <span class="token string">\'Edit\'</span> <span class="token punctuation">:</span> <span class="token string">\'Save\'</span><span class="token punctuation">;</span>\n              \n                <span class="token keyword">return</span> <span class="token punctuation">(</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token punctuation">{</span>label<span class="token punctuation">}</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>  \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 id="subcomponents"><a href="#subcomponents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Subcomponents</h1>\n<p>Nếu thấy dùng IFEE có vẻ hơi khó chịu, chúng ta đang làm React, tất cả hãy đưa về component, tách phần logic của component và phần render cái view ra luôn là đều được khuyến cáo, declarative vs. imperative programing</p>\n<p>Vậy nên chuyển các điều kiện này sang một sub component để render dựa trên <code class="language-text">props</code> luôn là ý hay.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token function">render</span><span class="token punctuation">(</span>\n    <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">\'view\'</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span><span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>\n              view\n                <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EditComponent</span></span> <span class="token attr-name">handleEdit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleEdit<span class="token punctuation">}</span></span>  <span class="token punctuation">/></span></span>\n                <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SaveComponent</span></span> \n                   <span class="token attr-name">handleChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>\n                   <span class="token attr-name">handleSave</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSave<span class="token punctuation">}</span></span>\n                   <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputText<span class="token punctuation">}</span></span>\n                 <span class="token punctuation">/></span></span>\n                <span class="token punctuation">)</span>\n            <span class="token punctuation">}</span> \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Hoặc trong React-Router-4 mỗi route là một <code class="language-text">If component</code> với cách thức vận hành như sao</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">If</span></span>\n    <span class="token attr-name">condition</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> view <span class="token punctuation">}</span></span>\n    <span class="token attr-name">then</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> editComponent <span class="token punctuation">}</span></span>\n    <span class="token attr-name">else</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> editComponent <span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token comment">// Component Route trong React-Router</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>/<span class="token punctuation">\'</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Đọc thêm về <a href="/2018-01-12-react-router-dom-gioi-thieu-react-router-4">React-Router-4</a></p>\n<h1 id="higher-order-component-hoc"><a href="#higher-order-component-hoc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Higher-Order Component (HOC)</h1>\n<p>Sử dụng HOC để truyền xuống một <code class="language-text">prop</code> dựa trên kiểm tra logic</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">EnhancedComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>AnotherComponent <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>AnotherComponent <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đọc thêm về <a href="/2018-03-02-gioi-thieu-higher-order-component-trong-react">HOCs tại đây</a></p>',timeToRead:4,excerpt:"If/Else Ko render với  Đặt biến cho element Câu điều kiện rút gọn Short-circuit operator (&&) Immediately-invoked function expressions (IIFE…",frontmatter:{title:"8 câu điều kiện khi render trong React",cover:"",date:"2018-03-05",category:"react",tags:["react","javascript"],desc:"Tutorial này sẽ cover những câu điều kiện dùng để render component phổ biến nhất"},fields:{slug:"/2018-03-05-8-huong-dan-cach-render-component-trong-react"}}},pathContext:{slug:"/2018-03-05-8-huong-dan-cach-render-component-trong-react",prev:{frontmatter:{title:"Redux vận hành như thế nào",desc:"Actions, reducers, action creators, middleware, pure functions, immutability,... những ngoại ngữ làm rối bất kỳ ai nếu chưa biết redux",type:"post",category:"react",tags:["react","javascript","redux"],date:"2018-03-06",cover:""},fields:{slug:"/2018-03-06-huong-dan-redux-van-hanh-nhu-the-nao-kem-vi-du"}},next:{frontmatter:{title:"Giới thiệu Higher-Order Components trong React",desc:"Higher-Order Component(HOCs) là kỹ thuật khá vui trong react để refactor các component tương tự nhau về mặt logic.",type:"post",category:"javascript",tags:["react","javascript"],date:"2018-03-02",cover:""},fields:{slug:"/2018-03-02-huong-dan-gioi-thieu-higher-order-component-trong-react"}}}}}});
//# sourceMappingURL=path---2018-03-05-8-huong-dan-cach-render-component-trong-react-70d7e4692f39aeae38bf.js.map