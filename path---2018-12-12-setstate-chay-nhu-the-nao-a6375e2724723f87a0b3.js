webpackJsonp([0x5e6d3bf12e4b],{1509:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Update lại DOM nghe có vẻ là công việc của React DOM, tuy nhiên chúng ta gọi <code class="language-text">this.setState()</code> bên trong một React Component,  nó sẽ không liên quan tới React DOM, React.Component sẽ xử lý.</p>\n<p>Vậy làm sao <code class="language-text">setState()</code> bên trong React.Component update được DOM? Bạn có thể nghĩ là bên trong React.Component chứa logic để update DOM. Nhưng tại sao chúng ta vẫn có thể gọi <code class="language-text">this.setState()</code> trên các môi trường khác, ví dụ như sử dụng trên React Native, nó cũng là extends của <code class="language-text">React.Component</code>. Và React Native thì làm việc được trên cả Android iOS, cái View đó thì ko dựng bằng DOM.</p>\n<p>Nếu bạn đã sử dụng qua React Test Renderer hoặc Shallow Renderer. Cả 2 cách test này đều cho phép render một component bình thường và gọi <code class="language-text">this.setState</code> bên trong nó. Và cả 2 thằng đó cũng ko liên quan gì tới DOM.</p>\n<p>Như vậy là <code class="language-text">React.Component</code> được giao nhiệm vụ update state thì nó chạy một đoạn code chỉ định theo từng platform.</p>\n<p>Rất nhiều người lầm tưởng có một React <em>engine</em> bên trong package <code class="language-text">react</code>. Điều này không đúng.</p>\n<p>Thực chất, kể từ phiên bản React 0.14, package <code class="language-text">react</code> đã được tách hẳn ra cung cấp các API để khai báo <em>component</em>. Hầu hết code được thực hiện ở các <strong>renderers</strong></p>\n<p><code class="language-text">react-dom</code>, <code class="language-text">react-dom/server</code>, <code class="language-text">react-native</code>, <code class="language-text">react-test-renderer</code>, <code class="language-text">react-art</code> là những <strong>renderers</strong> như vậy. Và bạn cũng có thể tự build một cái  luôn.</p>\n<p>Đó là lý do tại sao package <code class="language-text">react</code> rất là hữu dụng dù bạn đang sử dụng trên bất kỳ platform nào. Tất cả những gì nó export, như <code class="language-text">React.Component</code>, <code class="language-text">React.createElement</code>, <code class="language-text">React.Children</code> và thậm chí là <em>Hook</em>, độc lập hoàn toàn với platform. Và khi dùng chung với React DOM, React DOM server, React Native, các component của chúng ta vẫn import và sử dụng như nhau.</p>\n<p>Những thằng renderer sẽ có các API như <code class="language-text">ReactDOM.render()</code> cho phép mount cấu trúc React Component vào DOM node. Mỗi thằng renderer sẽ cung cấp các API tương tự như vậy trên platform của nó. Tất cả các component khi được khai báo không cần import bất cứ gì từ renderer, như vậy để nó portable.\nBạn có thể hiểu là tại sao khi cập nhập thì chúng ta cần cập nhập cả 2 package <code class="language-text">react</code> và <code class="language-text">react-dom</code> cùng lúc. Ví dụ khi React 16.3 ra API context, <code class="language-text">React.createContext()</code>, cái này <code class="language-text">react</code> chưa có implement, mà được implement trong renderer như  React DOM, và React DOM Server sẽ có 2 cách implement khác nhau, React DOM có thể track context một chiều, nhưng React DOM Server sẽ track theo kiểu khác.</p>\n<p>Vẫn chưa trả lời được câu hỏi ban đầu, làm sao <code class="language-text">setState()</code> bên trong <code class="language-text">React.Component</code> <strong>nói chuyện</strong> với đúng renderer nó cần.</p>\n<p>Câu trả lời là các renderer set một field đặc biệt trong lúc create class. Field này gọi là <code class="language-text">updater</code>, giá trị này bạn ko phải set, mà là công việc của React DOM, React DOM server, React Native set ngay sau khi tạo 1 instance của class.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Bên trong React DOM</span>\n<span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninst<span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span>\ninst<span class="token punctuation">.</span>updater <span class="token operator">=</span> ReactDOMUpdater<span class="token punctuation">;</span>\n\n<span class="token comment">// Bên trong React DOM Server</span>\n<span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninst<span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span>\ninst<span class="token punctuation">.</span>updater <span class="token operator">=</span> ReactDOMServerUpdater<span class="token punctuation">;</span>\n\n<span class="token comment">// Bên trong React Native</span>\n<span class="token keyword">const</span> inst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninst<span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span>\ninst<span class="token punctuation">.</span>updater <span class="token operator">=</span> ReactNativeUpdater<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Bên trong React, nó chỉ delegate lại công việc cho các renderer</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// ví dụ đã được cắt bớt các phần khác.</span>\n<span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">partialState<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Sử dụng field `updater`</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>updater<span class="token punctuation">.</span><span class="token function">enqueueSetState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> partialState<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Hy vọng bạn đã hiểu tại sao <code class="language-text">this.setState()</code> có thể update được DOM</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://overreacted.io/how-does-setstate-know-what-to-do/">How does setstate know what to do</a></p>',timeToRead:3,excerpt:"Update lại DOM nghe có vẻ là công việc của React DOM, tuy nhiên chúng ta gọi   bên trong một React Component,  nó sẽ không liên quan tới…",frontmatter:{title:"this.setState trong React chạy như thế nào",cover:"",date:"2018-12-12",category:null,tags:["react"],desc:"Giải đáp thắc mắc vì sao this.setState có thể update DOM, chạy được trên mobile, chạy được trên bất kỳ môi trường nào"},fields:{slug:"/2018-12-12-setstate-chay-nhu-the-nao"}}},pathContext:{slug:"/2018-12-12-setstate-chay-nhu-the-nao",prev:{frontmatter:{title:"Tìm hiểu Currying function trong Javascript",desc:"Bài viết này chúng ta sẽ tìm hiểu về cái cà-ri này, nó chạy ra sao, hữu dụng thế nào.",type:"post",category:null,tags:["javascript"],date:"2018-12-19",cover:""},fields:{slug:"/2018-12-19-tim-hieu-curring-function-trong-javascript"}},next:{frontmatter:{title:"Map và Object trong Javascript",desc:"Kẻ tám lạng người nữa cân",type:"post",category:null,tags:["javascript","mobile-web-specialist","hoc-thuat"],date:"2018-12-07",cover:""},fields:{slug:"/2018-12-07-giai-thich-su-dung-map-hay-object"}}}}}});
//# sourceMappingURL=path---2018-12-12-setstate-chay-nhu-the-nao-a6375e2724723f87a0b3.js.map