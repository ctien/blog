webpackJsonp([18656990299038],{1386:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Khai báo component <code class="language-text">ProfilePic</code>, <code class="language-text">ProfileLink</code>, <code class="language-text">Avatar</code> bằng cách bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> ProfilePic <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">render</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://photo.fb.com/\'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username\'<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> ProfileLink <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">render</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://www.fb.com/\'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> Avatar <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">render</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProfilePic</span></span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProfileLink</span></span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n   <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tylermcginnis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Từ React 0.14, trong trường hợp một component không có state, có thể viết lại bằng Stateless Function Component, cách gọi cho sang thôi, bản chất là một function nhận vào data và trả về một View</p>\n<ProfilePic/>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">ProfilePic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://photo.fb.com/\'</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>username\'<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<ProfileLink/>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">var</span> <span class="token function-variable function">ProfileLink</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://www.fb.com/\'</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<Avatar/>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Avatar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProfilePic</span></span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProfileLink</span></span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>anluu<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Khai khai báo component bằng function như vậy, phải đảm bảo nó là một pure function (same input = same return)</p>',timeToRead:1,excerpt:"Khai báo component  ,  ,   bằng cách bình thường Từ React 0.14, trong trường hợp một component không có state, có thể viết lại bằng…",frontmatter:{title:"Dựng UI với pure function và kết hợp nhiều function trong React",cover:"",date:"2018-02-27",category:"react",tags:["react","javascript"],desc:"Khi tạo một React Component, nó có thể là một function, nhận vào tham số, thay vì trả về giá trị, function này trả về UI"},fields:{slug:"/2018-02-27-huong-dan-dung-ui-voi-pure-function-va-ket-hop-nhieu-function"}}},pathContext:{slug:"/2018-02-27-huong-dan-dung-ui-voi-pure-function-va-ket-hop-nhieu-function",prev:{frontmatter:{title:"Giới thiệu Higher-Order Components trong React",desc:"Higher-Order Component(HOCs) là kỹ thuật khá vui trong react để refactor các component tương tự nhau về mặt logic.",type:"post",category:"javascript",tags:["react","javascript"],date:"2018-03-02",cover:""},fields:{slug:"/2018-03-02-huong-dan-gioi-thieu-higher-order-component-trong-react"}},next:{frontmatter:{title:"Redux là gì và tại sao phải dùng?",desc:"Nếu đã đụng tới React thì sớm muộn gì bạn cũng sẽ nghe đến Redux",type:"post",category:"react",tags:["react","javascript","redux"],date:"2018-02-14",cover:""},fields:{slug:"/2018-02-14-huong-dan-redux-la-gi-tai-sao-phai-dung"}}}}}});
//# sourceMappingURL=path---2018-02-27-huong-dan-dung-ui-voi-pure-function-va-ket-hop-nhieu-function-e4f1403de9a123eab88f.js.map