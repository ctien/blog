webpackJsonp([0xf45f711bf56],{1462:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#render-theo-%C4%91i%E1%BB%81u-ki%E1%BB%87n">Render theo điều kiện</a></li>\n<li><a href="#truy%E1%BB%81n-prop-xu%E1%BB%91ng-c%C3%A1c-component-children">Truyền prop xuống các component children</a></li>\n<li><a href="#provider">Provider</a></li>\n<li><a href="#higher-order-component">Higher Order Component</a></li>\n<li><a href="#server-side-rendering-%C4%91%E1%BB%83-t%E1%BB%91i-%C6%B0u-seo">Server-side rendering để tối ưu SEO</a></li>\n<li><a href="#inline-style-v%C3%A0-css-import">Inline style và CSS Import</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="render-theo-điều-kiện"><a href="#render-theo-%C4%91i%E1%BB%81u-ki%E1%BB%87n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Render theo điều kiện</h2>\n<p>Nếu đang viết câu render theo điều kiện như bên dưới.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> condition <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> innerContent <span class="token operator">=</span> condition <span class="token operator">?</span> <span class="token punctuation">(</span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Show me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Always visible<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token punctuation">{</span> innerContent <span class="token punctuation">}</span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Cách viết ở trên có sẽ dễ rơi vào tình trạng mất kiểm soát khi có nhiều hơn 1 câu điều kiện rút gọn ở trước hàm <code class="language-text">render</code>. Bạn phải mò mẫm lại các hàm bên trong để biết element nào sẽ được render.</p>\n<p>Xem xét cách viết sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> condition <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Always visible<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tcondition <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Show me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu giá trị của <code class="language-text">condition</code> là <code class="language-text">false</code>, đoạn sau <code class="language-text">&amp;&amp;</code>  sẽ ko được đếm xỉa.</p>\n<h2 id="truyền-prop-xuống-các-component-children"><a href="#truy%E1%BB%81n-prop-xu%E1%BB%91ng-c%C3%A1c-component-children" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Truyền prop xuống các component children</h2>\n<p>Khi chúng ta cần truyền các prop xuống các component bên dưới, dùng kiểu <strong>destructuring object</strong>, không cần quan tâm đến tên chính xác truyền qua từng prop</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Details</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> language <span class="token punctuation">}</span></span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span> name <span class="token punctuation">}</span> works <span class="token keyword">with</span> <span class="token punctuation">{</span> language <span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Details</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span>\n\t\t<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>I\'m here to stay<span class="token punctuation">"</span></span>\n\t\t<span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Javascript<span class="token punctuation">"</span></span>\n\t\t<span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Alex<span class="token punctuation">"</span></span>\n\t<span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="provider"><a href="#provider" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Provider</h2>\n<p>Nếu chúng ta muốn gửi data thông qua prop cho các component con, thí dụ như 15 component con bên dưới? Không dùng Redux, chúng ta có thể dùng React Context, pattern sử dụng như bên dưới.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">MousePositionProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\t<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>onMouseMove <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onMouseMove</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">getChildContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\tposX<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>posX<span class="token punctuation">,</span>\n\t\t\tposY<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>posY\n\t\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\twindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onMouseMove<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">onMouseMove</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> posX<span class="token punctuation">:</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span> posY<span class="token punctuation">:</span> e<span class="token punctuation">.</span>clientY <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nMousePositionProvider<span class="token punctuation">.</span>childContextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tposX<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>\n\tposY<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MousePositionConsumer</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Your position <span class="token function">is</span> <span class="token punctuation">(</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>posX<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>posY<span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nMousePositionConsumer<span class="token punctuation">.</span>contextTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tposX<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>\n\tposY<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>number\n<span class="token punctuation">}</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MousePositionProvider</span></span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MousePositionConsumer</span></span><span class="token punctuation">/></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MousePositionConsumer</span></span><span class="token punctuation">/></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MousePositionProvider</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="higher-order-component"><a href="#higher-order-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Higher Order Component</h2>\n<p>React đã bỏ <code class="language-text">React.createElement</code> và <em>mixins</em>, HOCs là lựa chọn còn lại duy nhất khi bạn muốn sử dụng cùng 1 component với nhiều version khác nhau.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">withProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span> <span class="token parameter">WrappedComponent</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> <span class="token function-variable function">ModifiedComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ownProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WrappedComponent</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">ownProps</span><span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">newProps</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">return</span> ModifiedComponent<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Details</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> title<span class="token punctuation">,</span> language <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>title<span class="token punctuation">}</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> works <span class="token keyword">with</span> <span class="token punctuation">{</span>language<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> newProps <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">"An"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ModifiedDetails <span class="token operator">=</span> <span class="token function">withProps</span><span class="token punctuation">(</span>newProps<span class="token punctuation">)</span><span class="token punctuation">(</span>Details<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>ModifiedDetails\n\t\ttitle<span class="token operator">=</span><span class="token string">"I\'m here to stay"</span>\n\t\tlanguage<span class="token operator">=</span>"Javascript”\n\t<span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Nếu bạn quá thích HOC, có thể tham khảo để dùng thêm thư viện này <a href="https://github.com/acdlite/recompose">https://github.com/acdlite/recompose</a></p>\n<h2 id="server-side-rendering-để-tối-ưu-seo"><a href="#server-side-rendering-%C4%91%E1%BB%83-t%E1%BB%91i-%C6%B0u-seo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server-side rendering để tối ưu SEO</h2>\n<p>Với các ứng dụng Single Page App, có 2 issue thường được đề cập.</p>\n<ol>\n<li>Load lần đầu, javascript không được cache. Và nếu file javascript ban đầu quá lớn thì sẽ ảnh hưởng tới tốc độ load (lazy load sẽ giải quyết vấn đề này)</li>\n<li>Vì javascript sẽ đảm nhiệm render ở client, các con crawler của search engine sẽ không thể đọc được nội dung trang.</li>\n</ol>\n<p>Chúng ta giải quyết các issue này bằng Server Side Rendering. Tuy nhiên chi phí phát triển sẽ tăng lên bởi chúng ta buộc phải mua server chạy Node/Express.</p>\n<p>Trong trường hợp bạn chỉ quan tâm tới Server Rendering vì SEO, thì google giờ đây đã cập nhập con crawler của nó để đọc được nội dung file javascript, Google đã phát triển nó từ năm 2016 và giờ đây thuật toán đã chạy hết sức trơn tru.</p>\n<p>Trường hợp bạn quan tâm tới một số lợi ích khác của SSR như cache file, thì xài Next.js luôn chứ đừng ngồi mò config thủ công mất thời gian công sức.</p>\n<h2 id="inline-style-và-css-import"><a href="#inline-style-v%C3%A0-css-import" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inline style và CSS Import</h2>\n<p>React khuyến khích chúng ta nhìn ứng dụng trên góc độ các component, stylesheet được khuyến khích "dính" chặt với từng component.</p>\n<p>Có rất nhiều cách được giới thiệu để viết CSS chung trong file JS. Kiểu inline style cũng được dùng rộng rãi trong React Native.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tmargin<span class="token punctuation">:</span> <span class="token string">\'40px\'</span><span class="token punctuation">,</span>\n\tborder<span class="token punctuation">:</span> <span class="token string">\'5px solid pink\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> pStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tfontSize<span class="token punctuation">:</span> <span class="token string">\'15px\'</span><span class="token punctuation">,</span>\n\ttextAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">TextBox</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Yeah<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Chúng ta không còn phải import CSS, tuy nhiên bạn có bao giờ nghĩ đến chuyện maintain và đọc lại những đoạn code CSS như thế ?. Bạn cũng không có <em>media queries</em> nữa, <em>pseudo class</em> và <em>pseudo element</em> cũng không còn.</p>\n<p>Nếu cảm thấy mệt với kiểu inline style, bạn xem thử cách sau, CSS-in-JS, hay còn gọi <em>styled-component</em>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> Text <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token string">`\n  color: white,\n  background: black\n`</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span>This is <span class="token constant">CSS</span><span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span><span class="token constant">JS</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Lúc render thì nó sẽ thành như vầy</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.hash234dd2</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hash234dd3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is CSS-in-JS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Khác với kiểu render inline, nó vẫn render thẻ style và CSS</p>\n<p>Các Pattern để viết trong React có thể nói phát triển không ngừng, bạn thấy cái nào tiện và hay thì dùng, không thì tự tạo ra một kiểu riêng của mình cũng là ý hay.</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://medium.freecodecamp.org/evolving-patterns-in-react-116140e5fe8f">Evolving Patterns in React</a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://blog.logrocket.com/5-common-practices-that-you-can-stop-doing-in-react-9e866df5d269">5 common practices that you can stop doing in React</a></p>',
timeToRead:5,excerpt:"Render theo điều kiện Truyền prop xuống các component children Provider Higher Order Component Server-side rendering để tối ưu SEO Inline…",frontmatter:{title:"6 pattern hay sử dụng trong React",cover:"",date:"2018-12-30",category:null,tags:["react"],desc:"Điểm qua 6 React Pattern hay gặp trong React"},fields:{slug:"/2018-12-30-mot-so-pattern-hay-su-dung-trong-react"}}},pathContext:{slug:"/2018-12-30-mot-so-pattern-hay-su-dung-trong-react",prev:{frontmatter:{title:"Tổng kết một năm của thế giới FrontEnd",desc:"Thế giới lập trình Frontend nhiều biến chuyển, nhanh chóng mặt, chúng ta cùng điểm lại những tin tức, sự kiện, xu hướng nổi bật nhất trong năm 2018 vừa qua",type:"post",category:null,tags:["javascript"],date:"2019-01-09",cover:"https://cdn-images-1.medium.com/max/800/1*lJAYDVQ5iJLzEhmJ-KsqoA.png"},fields:{slug:"/2019-01-09-tong-ket-mot-nam-2018-trong-the-gioi-front-end"}},next:{frontmatter:{title:"Viết component gọn gàng hơn với Computed Setter",desc:"Một gợi ý để sử dụng computed setter với các dữ liệu bên ngoài component như Vuex",type:"post",category:null,tags:["vuejs"],date:"2018-12-20",cover:""},fields:{slug:"/2018-12-20-su-dung-computed-setter-voi-vuex"}}}}}});
//# sourceMappingURL=path---2018-12-30-mot-so-pattern-hay-su-dung-trong-react-d12fde7f2bd98b1c7ad6.js.map