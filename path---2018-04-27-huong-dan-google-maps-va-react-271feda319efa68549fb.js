webpackJsonp([0xf5b3bdde1125],{1265:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Nhúng Google Maps vào web site bình thường thì quá sức đơn giản, để sử dụng với React Js thì hơi vụng công một chút.</p>\n<p>Để sử dụng Google Maps API, ta chỉ cần load đoạn js từ googleapis, chèn thêm một cái <code class="language-text">div</code> với id là <em>map</em> chằng hạn.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Basic Google Map on a web page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Đoạn script của google sẽ được load <strong>sau khi</strong> có static DOM, cái <code class="language-text">&lt;div id=&#39;map&#39; /&gt;</code> lúc đó đã tồn tại và có thể được sử dụng thoải mái bởi google maps api.</p>\n<p>Nhưng mà trong React JS thì DOM được render và re-render từ <strong>virtual DOM</strong>, một file html của app React JS thường là chỉ có thế này</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Simple React app<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/app.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Tức là nếu làm như cách bình thường ở trên thì cái <code class="language-text">&lt;div id=&#39;map&#39; /&gt;</code> chưa hề tồn tại trên xã hội.</p>\n<h2 id="load-bất-đồng-bộ-asynchronous-loading"><a href="#load-b%E1%BA%A5t-%C4%91%E1%BB%93ng-b%E1%BB%99-asynchronous-loading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Load bất đồng bộ (Asynchronous Loading)</h2>\n<p>Cả hai đoạn script React và Google maps đều phải tốn thời gian để load, chúng ta phải đảm bảo Google Map chỉ được tạo ra <strong>sau khi</strong> React app đã khởi tạo và render DOM xong. Thoạt nhìn thì dùng asyn google map sẽ là một giải pháp.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;callback=initMap<span class="token punctuation">"</span></span>\n        <span class="token attr-name">async</span> <span class="token attr-name">defer</span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Chúng ta thêm <code class="language-text">asyn</code> và <code class="language-text">defer</code> để load đoạn googleapis này sau cùng, đồng thời thêm hàm <em>callback</em> sau khi load xong. Nếu <code class="language-text">initMap</code> là một <em>global function</em> thì ta có thể gọi nó bên trong React Component</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">google<span class="token punctuation">.</span>maps<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'map\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Buồn thay! Không chạy đâu các bạn ạ. Ngay cả khi Google Maps chỉ được load sau khi React được load, không có nghĩa là toàn bộ cây DOM đã được <em>mount</em> và <em>render</em> khi thực thi hàm <em>callback</em>.</p>\n<p>Ok, chúng ta cần giải pháp tốt hơn. Về cơ bản </p>\n<blockquote>\n<p>chúng ta muốn load đoạn script của google ngay khi <em>component</em> có sử dụng đến google api được <strong>mounted</strong></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx">componentDidMount <span class="token punctuation">{</span>\n    <span class="token comment">// trỏ global function window.initMap này vào hàm initMap của component để thằng google có thể  gọi trong hàm callback</span>\n    window<span class="token punctuation">.</span>initMap <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initMap<span class="token punctuation">;</span>\n\n    <span class="token comment">// chèn ngay đoạn js của googleapis cho anh xài ngay.</span>\n    <span class="token function">loadJS</span><span class="token punctuation">(</span><span class="token string">\'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;callback=initMap\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function-variable function">initMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">google<span class="token punctuation">.</span>maps<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">getDOMNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* các options khác*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nrender <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token string">\'500px\'</span>, <span class="token property">width</span><span class="token punctuation">:</span> <span class="token string">\'500px\'</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token operator">&lt;</span>⁄div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>⁄div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// hàm này để chèn thêm &lt;script /> sau khi gọi</span>\n<span class="token keyword">function</span> <span class="token function">loadJS</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> ref <span class="token operator">=</span> window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"script"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> script <span class="token operator">=</span> window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"script"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    script<span class="token punctuation">.</span>src <span class="token operator">=</span> src<span class="token punctuation">;</span>\n    script<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    ref<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>script<span class="token punctuation">,</span> ref<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Để ý là ta thêm <code class="language-text">ref=&#39;map&#39;</code> để trỏ tới đúng cái <code class="language-text">div</code> sử dụng để đưa vào cho Google Map constructor bằng hàm <code class="language-text">this.refs.map.getDOMNode()</code> ngay khi DOM đã render.</p>\n<p>Vậy là xong. Google Map đã có thể hoạt động trơn tru với React Component, đúng hơn là với Virtual DOM.</p>\n<p>Tác giả: klaasnotfound\nLink bài gốc: <a href="http://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/">http://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/</a></p>',timeToRead:3,excerpt:"Nhúng Google Maps vào web site bình thường thì quá sức đơn giản, để sử dụng với React Js thì hơi vụng công một chút. Để sử dụng Google Maps…",frontmatter:{title:"Google Maps và React",cover:"",date:"2018-04-27",category:null,tags:["javascript","react"],desc:"Hướng Sử dụng google maps api trong React"},fields:{slug:"/2018-04-27-huong-dan-google-maps-va-react"}}},pathContext:{slug:"/2018-04-27-huong-dan-google-maps-va-react",prev:{frontmatter:{title:"Redux vs Mobx chọn cái nào đây",desc:"Khi nhắc tới thư viện để quản lý state cho một app js, thì chúng sẽ hay rất phân vân giữa 2 lựa chọn Redux hay Mobx",type:"post",category:null,tags:["javascript","react"],date:"2018-04-28",cover:""},fields:{slug:"/2018-04-28-huong-dan-redux-vs-mobx-chon-cai-nao-day"}},next:{frontmatter:{title:"Một số cách làm Animation trong React",desc:"Tổng hợp một số phương pháp làm animation với React",type:"post",category:null,tags:["javascript","react"],date:"2018-04-24",cover:""},fields:{slug:"/2018-04-24-huong-dan-huong-dan-lam-animation-voi-react"}}}}}});
//# sourceMappingURL=path---2018-04-27-huong-dan-google-maps-va-react-271feda319efa68549fb.js.map