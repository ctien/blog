webpackJsonp([0x86031c7bd47d],{1367:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#t%E1%BB%95-ch%E1%BB%A9c-th%C6%B0-m%E1%BB%A5c">Tổ chức thư mục</a></li>\n<li><a href="#containers-v%C3%A0-components">Containers và Components</a></li>\n<li><a href="#t%C3%A1c-v%C3%A0-nh%C3%B3m-code-l%E1%BA%A1i-v%E1%BB%9Bi-nhau">Tác và nhóm code lại với nhau</a></li>\n<li><a href="#ui-components">UI Components</a></li>\n<li><a href="#%C4%91%E1%BA%B7t-t%C3%AAn-components">Đặt tên components</a></li>\n<li><a href="#screens">Screens</a></li>\n<li><a href="#k%E1%BA%BFt-lu%E1%BA%ADn">Kết luận</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="tổ-chức-thư-mục"><a href="#t%E1%BB%95-ch%E1%BB%A9c-th%C6%B0-m%E1%BB%A5c" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tổ chức thư mục</h2>\n<p>Nếu init project bằng <strong>create-react-app</strong>, chúng ta sẽ có sẵn những thư mục và file cơ bản nhất: <em>.gitinore</em>, <em>package.json</em>, <em>README.md</em>, <em>yarn.lock</em>, thư mục <strong>public</strong> và <strong>src</strong></p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*eXN1LlNnuZmosJ7n7EsJ-Q.png"></p>\n<p>Chúng ta sẽ chỉ tập trung vào thư mục <strong>src</strong> và khoog quan tâm tới những file và thư mục ở khác.</p>\n<h2 id="containers-và-components"><a href="#containers-v%C3%A0-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Containers và Components</h2>\n<p>Bên trong thư mục <strong>src</strong> chúng ta sẽ tạo thêm 2 thư mục là <strong>components</strong> và <strong>containers</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n├─ components // chứa components làm nhiệm vụ render \n└─ containers // các component xử lý logic</code></pre>\n      </div>\n<p>Nếu là theo cách này có một vài chổ không hợp lý</p>\n<ul>\n<li>Rất là khó để phân biệt và tách biệt 100% giữa container và presentational component, chắc chắn trong team sẽ có người là lên "em thấy cái này là container chứ sao lại là presentational được", kiểu như vậy.</li>\n<li>Cho phép 2 component có cùng tên với nhau, trong toàn bộ project mỗi component chỉ nên là duy nhất, tránh confuse trách nhiệm của mỗi bên.</li>\n<li>Tốn công, việc tách container ở một thư mục, presentationial ở thư mục khác, rất là phiền nếu muốn bay qua bay lại giữa 2 thư mục.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n└─ User\n  ├─ components\n  └─ containers</code></pre>\n      </div>\n<p>Cách này thì sao? Có thể giải quyết được vấn đề bay qua bay lại ở trên, nhưng nếu có 100 cái components chung ta tiếp tục ngụp lặn trong cả trăm thư mục components containers ở khắp mọi nơi.</p>\n<p>Theo tác giả chúng ta nên dẹp luôn khái niệm container và presentational luôn, tất cả chúng ta cần là 2 thư mục <strong>components</strong> và <strong>screens</strong></p>\n<h2 id="tác-và-nhóm-code-lại-với-nhau"><a href="#t%C3%A1c-v%C3%A0-nh%C3%B3m-code-l%E1%BA%A1i-v%E1%BB%9Bi-nhau" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tác và nhóm code lại với nhau</h2>\n<p>Bên trong thư mục <em>components</em> chúng ta group files theo module/tính năng.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n└─ components\n  └─ User\n    ├─ Form.jsx\n    └─ List.jsx</code></pre>\n      </div>\n<p>Khi component là kết hợp của nhiều component lại ta gom các file components vào 1 thư mục. Thí dụ nếu có thêm file <code class="language-text">Form.css</code> ta sẽ làm như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n└─ components\n  └─ User\n    ├─ Form\n    │ ├─ Form.jsx\n    │ └─ Form.css\n    └─ List.jsx</code></pre>\n      </div>\n<h2 id="ui-components"><a href="#ui-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>UI Components</h2>\n<p>Bên trong thư mục <strong>components</strong> ta có thể có thêm thư mục <strong>UI</strong>, trong đây sẽ chứa các component dạng generic. Thế nào là component generic? là những component dạng giống như những React UI Components của Sematic UI, Office Fabric UI, Reactrap.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n└─ components\n  └─ UI</code></pre>\n      </div>\n<h2 id="đặt-tên-components"><a href="#%C4%91%E1%BA%B7t-t%C3%AAn-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đặt tên components</h2>\n<p>Chúng ta đã bàn về cách sắp xếp thư mục và chia các component ra dạng module. Giờ còn câu hỏi là đặt tên nó sao?</p>\n<p>Như đã nói ở trên tên của mỗi component nên là duy nhất và gợi hình, đọc xong có thể hình dung được component đó dùng để làm gì. Việc này cũng rất có lợi trong lúc debug bằng React Dev Tools.</p>\n<p>Pattern để đặt tên component <strong>đường dẫn-tên file</strong>. Thí dụ component ở file <code class="language-text">components/User/List.jsx</code> thì đặt là <code class="language-text">UserList</code></p>\n<p>Nếu <code class="language-text">components/User/Form/Form.jsx</code> thì không cần đặt là <code class="language-text">UserFormForm</code>, chỉ cần gọi nó là <code class="language-text">UserForm</code> trong trường hợp tên file cùng tên với thư mục chứa nó.</p>\n<p>Lợi ích của việc đặt tên như vậy là giúp chúng ta navigate đến file đó rất nhanh, đa phần các editor \'xịn\' đều có thể dùng fuzzy search</p>\n<p><img src="https://cdn-images-1.medium.com/max/1600/1*vZO9Ci9a_lrfi2yTP9OiMA.png"></p>\n<p>Tránh lặp lại tên, ngày xưa khi mới bắt đầu chúng ta thường đặt tên file rất là đầy đủ chuẩn không cần chỉnh, tuy nhiên việc này làm cho lúc <code class="language-text">import</code> rất dài dòng, đường dẫn dài cả cây số. Trong trường hợp ở trên do <code class="language-text">Form</code> đang nằm trong <code class="language-text">User</code> thì ta biết ngay là <code class="language-text">FormUser</code> rồi, không nên đặt tên file là <code class="language-text">FormUser</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> ScreenUserForm <span class="token keyword">from</span> <span class="token string">\'./screens/User/UserForm\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// đấu với</span>\n\n<span class="token keyword">import</span> ScreenUserForm <span class="token keyword">from</span> <span class="token string">\'./screens/User/Form\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu ví dụ trên chưa đủ thuyết phục, hãy xem tiếp thêm một ví dụ khách</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> MediaPlanViewChannel <span class="token keyword">from</span> <span class="token string">\'/MediaPlan/MediaPlanView/MediaPlanViewChannel.jsx\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> MediaPlanViewChannel <span class="token keyword">from</span> <span class="token string">\'./MediaPlan/View/Channel\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="screens"><a href="#screens" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Screens</h2>\n<p>Nãy có nói thư mục <strong>screen</strong> mà chưa giải thích, screens sẽ nơi chứa là những components được map vào cho <code class="language-text">route</code>, như screen để tạo user mới, reset password, đăng nhập. Screen không nên chứa logic gì cả, 1 functional component, chúng ta sẽ đưa screen vào một thư mục hẳn hoi để dễ mapping đúng với structure của <code class="language-text">route</code> chứ chúng ta không theo module</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n├─ components \n└─ screens\n  └─ User\n    ├─ Form.jsx\n    └─ List.jsx</code></pre>\n      </div>\n<p>Chúng ta có file <code class="language-text">Route.jsx</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Redirect<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> ScreensUserForm <span class="token keyword">from</span> <span class="token string">\'./User/Form\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ScreensUserList <span class="token keyword">from</span> <span class="token string">\'./User/List\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ScreensRoot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Router</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/user/list<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ScreensUserList<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/user/create<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ScreensUserForm<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/user/:id<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ScreensUserForm<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Router</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> ScreensRoot<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Bằng cách này chỉ cần nhìn url ta có thể trace được đang dùng component ở thư mục nào</p>\n<p>Về tên gọi của component trong thư mục screen này,\nnếu <code class="language-text">scr/screens/User/List.jsx</code> thì đặt tên là <code class="language-text">ScreensUserList</code>;</p>\n<p>Nếu bạn để ý thì sẽ thấy 2 route <code class="language-text">create</code> và <code class="language-text">edit</code> đang cùng được render cùng 1 component <code class="language-text">ScreensUserForm</code>, cái này implement cũng dể thôi</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> UserForm <span class="token keyword">from</span> <span class="token string">\'../../components/User/Form/Form\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ScreensUserForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> match<span class="token punctuation">:</span> <span class="token punctuation">{</span> params <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token operator">!</span>params<span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token string">\'Create\'</span> <span class="token punctuation">:</span> <span class="token string">\'Update\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span> User\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserForm</span></span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> ScreensUserForm<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Thư mục cuối cùng có như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">src\n├─ components \n│  ├─ User\n│  │ ├─ Form\n│  │ │ ├─ Form.jsx\n│  │ │ └─ Form.css\n│  │ └─ List.jsx\n│  └─ UI \n│\n└─ screens\n  ├─ User\n  │ ├─ Form.jsx\n  │ └─ List.jsx\n  └─ Root.jsx</code></pre>\n      </div>\n<h2 id="kết-luận"><a href="#k%E1%BA%BFt-lu%E1%BA%ADn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Kết luận</h2>\n<p>Trong bài này tác giả sẽ chỉ đề tập trung vào project sử dụng React, chưa đề cặp tới Redux, bài sau có.</p>\n<p>Nếu thích thì có thể cảm ơn và follow tác giả để có thêm nhiều bài viết hay ho khác.</p>\n<p><a href="https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76">Link bài gốc của Vinicius Dacal</a></p>',timeToRead:6,excerpt:"Tổ chức thư mục Containers và Components Tác và nhóm code lại với nhau UI Components Đặt tên components Screens Kết luận Tổ chức thư mục Nếu…",frontmatter:{title:"Tiếp tục luận bàn về cách tổ chức thư mục, đặt tên component trong React",cover:"",date:"2018-06-18",category:"react",tags:["react","javascript"],desc:"Hổm đã viết về vấn đề này rồi, giờ lại viết tiếp, vì bản thân React cũng không ra bất cứ rule nào về việc này, bạn tự do tổ chức sao mà mình thấy hợp lý, bài trước là của tác giả đó thấy vậy là hay, bài này thì tác giả thích tổ chức thế này"},fields:{slug:"/2018-06-18-huong-dan-luan-ban-ve-cach-to-chuc-thu-muc-dat-ten"}}},pathContext:{slug:"/2018-06-18-huong-dan-luan-ban-ve-cach-to-chuc-thu-muc-dat-ten",prev:{frontmatter:{title:"Một số ứng dụng của middleware",desc:"Tiếp theo bài trước về middleware, ứng dụng với các trường hợp thực tế",type:"post",category:"react",tags:["react","redux","javascript","middleware"],date:"2018-06-21",cover:""},fields:{slug:"/2018-06-21-huong-dan-mot-so-ung-dung-cua-middleware"}},next:{frontmatter:{title:"Sử dụng Middleware với Redux dành cho người mới bắt đầu",desc:"Nếu đã nắm rõ redux, bước tiếp theo phải tìm hiểu là middleware",type:"post",category:"react",tags:["react","redux","javascript","middleware"],date:"2018-06-18",cover:""},fields:{slug:"/2018-06-18-huong-dan-tim-hieu-middleware-va-redux"}}}}}});
//# sourceMappingURL=path---2018-06-18-huong-dan-luan-ban-ve-cach-to-chuc-thu-muc-dat-ten-18299efc4111bf7fe3e4.js.map