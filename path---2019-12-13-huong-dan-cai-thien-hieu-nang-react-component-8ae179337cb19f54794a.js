webpackJsonp([0x605370128392],{1586:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Hầu hết các trường hợp, hiệu năng của các ứng dụng React không phải là vấn đề quá nghiêm trọng. Bản thân thư viện React đã hỗ trợ tận răng các phương để cải thiện lúc render component. Tuy nhiên cũng có vài trường hợp các component của chúng ta render nhiều hơn mức cần thiết và làm ảnh hưởng đến hiệu năng chung.</p>\n<p>Lấy ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">ListPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data<span class="token punctuation">,</span> title <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token attr-name">listItems</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Trong ví dụ rất rất đơn giản trên, nếu <code class="language-text">data</code> thay đổi, toàn bộ <code class="language-text">&lt;Listpage/&gt;</code> sẽ render, bao gồm cả <code class="language-text">&lt;Header /&gt;</code> vốn không có thay đổi gì nếu giá trị <code class="language-text">data</code> khác đi</p>\n<p>Thời bây giờ chúng ta chuộng kiểu viết functional component hơn, 3 cách để tối ưu cho một functional component là sử dụng: <code class="language-text">React.memo</code>, <code class="language-text">useMemo</code>, <code class="language-text">useCallback</code></p>\n<h2 id="reactmemo"><a href="#reactmemo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React.Memo</h2>\n<p>Là một Higher order component dùng để <strong>ghi nhớ</strong> kết quả của function component, tất nhiên nếu truyền cùng một prop thì kết quả trả về sẽ là không đổi, nên có thể lấy kết quả <strong>đã nhớ</strong> trước đó</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>Header<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Cách viết trên là bắt buộc, vì nếu bạn viết như bên dưới, component của bạn sẽ không xuất hiện trong devtool</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> Header <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Header<span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="usememo"><a href="#usememo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>useMemo</h2>\n<p>Tên có vẻ giống, nhưng không giống nhau, nếu <code class="language-text">React.memo</code> là một HOC để ghi nhớ một function component, <code class="language-text">useMemo</code> là hàm giống như helper cho phép chỉ định: lưu lại kết quả của hàm nào và những giá trị nào sẽ làm thay đổi kết quả đó.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> widgetList <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n    widgets<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">w</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token operator">...</span>w<span class="token punctuation">,</span>\n      totalPrice<span class="token punctuation">:</span> <span class="token function">someComplexFunction</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      estimatedDeliveryDate<span class="token punctuation">:</span> <span class="token function">someOtherComplexFunction</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>warehouseAddress<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>widgets<span class="token punctuation">]</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Ở đoạn code trên, chúng ta muốn <strong>ghi nhớ</strong> giá trị của <code class="language-text">totalPrice</code> và <code class="language-text">estimatedDeliveryDate</code> bởi vì việc tính toán các giá trị này vô cùng <em>tốn sức</em>. Chúng ta chỉ định <code class="language-text">widgets</code> nếu không thay đổi thì đừng đi tính lại làm gì, mà lấy kết quả lần trước ra.</p>\n<h2 id="usecallback"><a href="#usecallback" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>useCallback</h2>\n<p>Được sử dụng để chặn việc render không cần thiết giữa <code class="language-text">parent</code> và <code class="language-text">children</code> component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Parent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>showExtraDetails<span class="token punctuation">,</span> setShowExtraDetails<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>\n        <span class="token operator">&lt;</span>Child onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">showData</span><span class="token punctuation">(</span>showExtraDetails<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Component <code class="language-text">Child</code> sẽ luôn re-render khi <code class="language-text">Parent</code> render, thậm chí <code class="language-text">Child</code> là một <code class="language-text">PureComponent</code> hoặc được bọc trong <code class="language-text">React.memo</code></p>\n<p><code class="language-text">useCallback</code> được dùng như bên dưới</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Parent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>showExtraDetails<span class="token punctuation">,</span> setShowExtraDetails<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>\n      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">showData</span><span class="token punctuation">(</span>showExtraDetails<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">[</span>showExtraDetails<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n        <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://headway.io/blog/react-optimize-components-memo-usememo-usecallback/">https://headway.io/blog/react-optimize-components-memo-usememo-usecallback/</a></p>',timeToRead:2,excerpt:"Hầu hết các trường hợp, hiệu năng của các ứng dụng React không phải là vấn đề quá nghiêm trọng. Bản thân thư viện React đã hỗ trợ tận răng…",frontmatter:{title:"Tối ưu component React bằng React.memo, useMemo và useCallback",cover:"",date:"2019-12-13",category:null,tags:["react","thu-thuat"],desc:"Sử dụng những hàm có sẵn của React để viết component ngon hơn"},fields:{slug:"/2019-12-13-huong-dan-cai-thien-hieu-nang-react-component"}}},pathContext:{slug:"/2019-12-13-huong-dan-cai-thien-hieu-nang-react-component",prev:!1,next:{frontmatter:{title:"Giải bài toán cộng 2 số bằng javascript",desc:"Một đề bài cũng không mới, thông qua đó chúng ta sẽ biết thêm tí về cách sử dụng object sao cho hiệu quả",type:"post",category:null,tags:["hoc-thuat","javascript"],date:"2019-11-29",cover:""},fields:{slug:"/2019-11-29-giai-bai-toan-cong-so-trong-javascript"}}}}}});
//# sourceMappingURL=path---2019-12-13-huong-dan-cai-thien-hieu-nang-react-component-8ae179337cb19f54794a.js.map