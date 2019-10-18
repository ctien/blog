webpackJsonp([7845424646386],{1446:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Chúng ta đã biết object trong javascript là một con trỏ đến địa chỉ trên memory, copy 1 object sẽ là 2 biến trỏ tới cùng một địa chỉ memory</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">:</span> <span class="token string">"luubinhan"</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// luubinhan</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> foo<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// luubinhan</span>\n\nfoo<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">"github"</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// github</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// github</span>\n\nbar<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">"google.com"</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// google.com</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// google.com</span></code></pre>\n      </div>\n<p>Có thể thấy là việc thay đổi 1 trong 2 biến <code class="language-text">foo</code>, <code class="language-text">bar</code> sẽ ảnh hưởng qua lại lẫn nhau, khi muốn thực hiện copy một object trong javascript phải hết sức cẩn thận</p>\n<h2 id="shallow-copy"><a href="#shallow-copy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shallow copy</h2>\n<p>Nếu các property bên trong của object là một <a href="/2017-09-25-10-khai-niem-javascript-can-biet/">giá trị primitive type</a>, có thể thực hiện copy nhanh (shallow)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token punctuation">:</span> <span class="token string">"foo"</span><span class="token punctuation">,</span> bar<span class="token punctuation">:</span> <span class="token string">"bar"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// cách 1</span>\n<span class="token keyword">var</span> copy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// cách 2</span>\n<span class="token keyword">var</span> copy2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu bên trong object là một tham chiếu khác, thì việc copy này sẽ cũng tương tự như <code class="language-text">var bar = foo</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token punctuation">{</span>c<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> copy <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>foo<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ncopy<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\ncopy<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: 0, b: {c: 2}}</span>\nconsole<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a:1, b: {c: 2}}</span></code></pre>\n      </div>\n<h2 id="deep-copy"><a href="#deep-copy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deep copy</h2>\n<p>Để tránh tình huống này xảy ra, chúng ta sẽ muốn thực hiện cái gọi là deep copy, trước tiên là serialize thành string rồi deserialize ngược lại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token punctuation">{</span>c<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> copy <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Lại tuy nhiên, nếu bên trong object là một giá trị không thể serialize như <code class="language-text">Date</code> object, ko thực hiện được.</p>\n<p>Có thể dùng <code class="language-text">cloneDeep</code> của <a href="https://lodash.com/docs/4.17.11#cloneDeep">thư viện lodash</a> là an toàn nhất để thực hiện Deep copy, còn nếu thích tự làm mọi thứ, thì đây là một hàm implement chức năng clone deep</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> copy<span class="token punctuation">;</span>\n\n  <span class="token comment">// kiểu primitive, null hoặc undefined</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> obj <span class="token operator">||</span> <span class="token string">"object"</span> <span class="token operator">!=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span>\n\n  <span class="token comment">// nếu là kiểu Date</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    copy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    copy<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> copy<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// kiểu Array</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    copy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        copy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> copy<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// kiểu Function</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">copy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">obj</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> copy<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// kiểu Object</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      copy <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> attr <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>attr<span class="token punctuation">)</span><span class="token punctuation">)</span> copy<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> copy<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Unable to copy obj as type isn\'t supported "</span> <span class="token operator">+</span> obj<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="https://smalldata.tech/blog/2018/11/01/copying-objects-in-javascript" target="_blank" rel="noopener noreferrer">COPYING OBJECTS IN JAVASCRIPT</a></p>',timeToRead:2,excerpt:"Chúng ta đã biết object trong javascript là một con trỏ đến địa chỉ trên memory, copy 1 object sẽ là 2 biến trỏ tới cùng một địa chỉ memory…",frontmatter:{title:"Copy object trong javascript",cover:"",date:"2018-11-13",category:null,tags:["javascript"],desc:"Luận bàn các cách mà chúng ta copy một object trong javascript, shallow copy và deep copy"},fields:{slug:"/2018-11-13-copy-mot-object-trong-javascript"}}},pathContext:{slug:"/2018-11-13-copy-mot-object-trong-javascript",prev:{frontmatter:{title:"Chỉ dẫn thiết kế form từ Google",desc:"Bài này nằm trong loạt bài chuẩn kiến thức để đi thi web mobile specialist của google. Một vài đều cần nhớ khi thiết kế và làm việc với form",type:"post",category:null,tags:["ux-ui","mobile-web-specialist"],date:"2018-11-14",cover:""},fields:{slug:"/2018-11-14-chi-dan-thiet-ke-form-cua-google"}},next:{frontmatter:{title:"Cách làm two-way data binding cho form field trong Vue và Vuex",desc:"Two-way data binding trong Vue và Vuex làm như thế nào cho đúng mà nhanh",type:"post",category:null,tags:["vuejs"],date:"2018-11-11",cover:""},fields:{slug:"/2018-11-11-huong-dan-two-way-data-binding-voi-vue-vuex"}}}}}});
//# sourceMappingURL=path---2018-11-13-copy-mot-object-trong-javascript-14c7bed09ba1824779ba.js.map