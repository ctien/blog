webpackJsonp([3377989015927],{517:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Khai báo component <code class="language-text">ProfilePic</code>, <code class="language-text">ProfileLink</code>, <code class="language-text">Avatar</code> bằng cách bình thường</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> ProfilePic <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://photo.fb.com/\'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username\'<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> ProfileLink <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://www.fb.com/\'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> Avatar <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ProfilePic</span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ProfileLink</span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n   <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tylermcginnis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Từ React 0.14, trong trường hợp một compoment không có state, có thể viết lại bằng Stateless Function Component, cách gọi cho sang thôi, bản chất là một function nhận vào data và trả về một View</p>\n<p>ProfilePic</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">ProfilePic</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://photo.fb.com/\'</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>username\'<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>ProfileLink</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">var</span> <span class="token function-variable function">ProfileLink</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'https://www.fb.com/\'</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Avatar</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Avatar</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ProfilePic</span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ProfileLink</span> <span class="token attr-name">username</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tylermcginnis<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Khai khai báo component bằng function như vậy, phải đảm bảo nó là một pure function (same input = same return)</p>',timeToRead:1,excerpt:"Khai báo component  ,  ,   bằng cách bình thường Từ React 0.14, trong trường hợp một compoment không có state, có thể viết lại bằng…",frontmatter:{title:"Dựng UI với pure function và kết hợp nhiều function trong React",cover:"",date:"2018-02-27",category:"react",tags:["react","javascript"],desc:"Khi tạo một React Component, nó có thể là một function, nhận vào tham số, thay vì trả về giá trị, function này trả về UI"},fields:{slug:"/2018-02-27-dung-ui-voi-pure-function-va-ket-hop-nhieu-function"}}},pathContext:{slug:"/2018-02-27-dung-ui-voi-pure-function-va-ket-hop-nhieu-function"}}}});
//# sourceMappingURL=path---2018-02-27-dung-ui-voi-pure-function-va-ket-hop-nhieu-function-81a58abec80e6aa677ea.js.map