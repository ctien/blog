webpackJsonp([0xa27b475bf260],{1344:function(n,a){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#chuy%E1%BB%87n-g%C3%AC-x%E1%BA%A3y-ra-khi-g%E1%BB%8Di-setstate-">Chuyện gì xảy ra khi gọi <code class="language-text">setState</code> ?</a></li>\n<li><a href="#s%E1%BB%B1-kh%C3%A1c-nhau-gi%E1%BB%AFa-element-v%C3%A0-component-trong-react">Sự khác nhau giữa Element và Component trong React?</a></li>\n<li><a href="#khi-n%C3%A0o-th%C3%AC-s%E1%BB%AD-d%E1%BB%A5ng-class-component-v%C3%A0-functional-component">Khi nào thì sử dụng Class Component và Functional Component</a></li>\n<li><a href="#ref-trong-react-d%C3%B9ng-%C4%91%E1%BB%83-l%C3%A0m-g%C3%AC"><code class="language-text">Ref</code> trong React dùng để làm gì</a></li>\n<li><a href="#key-trong-react-l%C3%A0-g%C3%AC">Key trong React là gì</a></li>\n<li><a href="#s%E1%BB%B1-kh%C3%A1c-nhau-gi%E1%BB%AFa-controlled-component-v%C3%A0-uncontrolled-component">Sự khác nhau giữa controlled component và uncontrolled component</a></li>\n<li><a href="#%C4%91%E1%BB%83-g%E1%BB%8Di-ajax-s%E1%BB%AD-d%E1%BB%A5ng-s%E1%BB%B1-ki%E1%BB%87n-n%C3%A0o-c%E1%BB%A7a-lifecycle">Để gọi AJAX, sử dụng sự kiện nào của lifecycle?</a></li>\n<li><a href="#shouldcomponentupdate-d%C3%B9ng-%C4%91%E1%BB%83-l%C3%A0m-g%C3%AC"><code class="language-text">shouldComponentUpdate</code> dùng để làm gì</a></li>\n<li><a href="#build-product-b%E1%BA%B1ng-c%C3%A1ch-n%C3%A0o">Build Product bằng cách nào?</a></li>\n<li><a href="#t%E1%BA%A1i-sao-n%C3%AAn-s%E1%BB%AD-d%E1%BB%A5ng-reactchildrenmap-thay-v%C3%AC-propschildrenmap">Tại sao nên sử dụng <code class="language-text">React.Children.map()</code> thay vì <code class="language-text">props.children.map()</code></a></li>\n<li><a href="#events-%C4%91%C6%B0%E1%BB%A3c-x%E1%BB%AD-l%C3%BD-trong-react-nh%C6%B0-th%E1%BA%BF-n%C3%A0o">Events được xử lý trong React như thế nào?</a></li>\n<li><a href="#s%E1%BB%B1-kh%C3%A1c-nhau-gi%E1%BB%AFa-createelement-v%C3%A0-cloneelement">Sự khác nhau giữa <code class="language-text">createElement</code> và <code class="language-text">cloneElement</code></a></li>\n<li><a href="#argument-th%E1%BB%A9-2-c%E1%BB%A7a-setstate-d%C3%B9ng-%C4%91%E1%BB%83-l%C3%A0m-g%C3%AC">Argument thứ 2 của <code class="language-text">setState</code> dùng để làm gì</a></li>\n<li><a href="#%C4%91o%E1%BA%A1n-code-sau-sai-%E1%BB%9F-%C4%91%C3%A2u">Đoạn code sau sai ở đâu</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="chuyện-gì-xảy-ra-khi-gọi-code-classlanguage-textsetstatecode-"><a href="#chuy%E1%BB%87n-g%C3%AC-x%E1%BA%A3y-ra-khi-g%E1%BB%8Di-code-classlanguage-textsetstatecode-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chuyện gì xảy ra khi gọi <code class="language-text">setState</code> ?</h2>\n<p>Đầu tiên, object được truyền trong <code>setState</code> sẽ được merge với state hiện tại của component, dựa trên sự thay đổi của object này, UI được update với state mới.</p>\n<p>Để làm được chuyện này, React sẽ dựng một cây React Element mới, so sánh sự khác nhau của cây element mới và cây element trước đó, React biết được chính xác chỉ cần update phần UI nào đã bị thay đổi.</p>\n<h2 id="sự-khác-nhau-giữa-element-và-component-trong-react"><a href="#s%E1%BB%B1-kh%C3%A1c-nhau-gi%E1%BB%AFa-element-v%C3%A0-component-trong-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sự khác nhau giữa Element và Component trong React?</h2>\n<p>React Element ám chỉ những gì thấy trên màn hình.</p>\n<p>React component là một function hoặc class có hoặc không có input và sẽ trả về một React element.</p>\n<h2 id="khi-nào-thì-sử-dụng-class-component-và-functional-component"><a href="#khi-n%C3%A0o-th%C3%AC-s%E1%BB%AD-d%E1%BB%A5ng-class-component-v%C3%A0-functional-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khi nào thì sử dụng Class Component và Functional Component</h2>\n<p>Nếu component có state và các phương thức của lifecycle, sử dụng <strong>Class Component</strong>, ngược lại dùng <strong>functional component</strong></p>\n<h2 id="code-classlanguage-textrefcode-trong-react-dùng-để-làm-gì"><a href="#code-classlanguage-textrefcode-trong-react-d%C3%B9ng-%C4%91%E1%BB%83-l%C3%A0m-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">Ref</code> trong React dùng để làm gì</h2>\n<p>Ref để truy cập trực tiếp đến DOM sau khi render</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> input<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="key-trong-react-là-gì"><a href="#key-trong-react-l%C3%A0-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Key trong React là gì</h2>\n<p>Key giúp React theo dõi sự thay đổi của một item trong list. Tại sao thêm key? để <strong>tối ưu performance</strong>, giúp React tìm nhanh tới element đó khi cần.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>todoItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">task<span class="token punctuation">,</span> uid</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>uid<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>task<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="sự-khác-nhau-giữa-controlled-component-và-uncontrolled-component"><a href="#s%E1%BB%B1-kh%C3%A1c-nhau-gi%E1%BB%AFa-controlled-component-v%C3%A0-uncontrolled-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sự khác nhau giữa controlled component và uncontrolled component</h2>\n<p><strong>Controlled Component</strong>: <code class="language-text">prop</code> hoặc <code class="language-text">state</code> của component được gán cho giá trị DOM</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>updateUsername<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p><strong>Uncontrolled Component</strong>: giá trị của DOM thì do DOM quản</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>text<span class="token punctuation">\'</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>input <span class="token operator">=</span> input<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="để-gọi-ajax-sử-dụng-sự-kiện-nào-của-lifecycle"><a href="#%C4%91%E1%BB%83-g%E1%BB%8Di-ajax-s%E1%BB%AD-d%E1%BB%A5ng-s%E1%BB%B1-ki%E1%BB%87n-n%C3%A0o-c%E1%BB%A7a-lifecycle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Để gọi AJAX, sử dụng sự kiện nào của lifecycle?</h2>\n<p><code class="language-text">componentDidMount</code></p>\n<h1 id="code-classlanguage-textshouldcomponentupdatecode-dùng-để-làm-gì"><a href="#code-classlanguage-textshouldcomponentupdatecode-d%C3%B9ng-%C4%91%E1%BB%83-l%C3%A0m-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">shouldComponentUpdate</code> dùng để làm gì</h1>\n<p><code class="language-text">shouldComponentUpdate</code> cho phép can thiệp quá trình update UI của component và các component con của nó. Nếu return <code class="language-text">true</code> thì update, ngược lại <code class="language-text">false</code></p>\n<h2 id="tại-sao-nên-sử-dụng-code-classlanguage-textreactchildrenmapcode-thay-vì-code-classlanguage-textpropschildrenmapcode"><a href="#t%E1%BA%A1i-sao-n%C3%AAn-s%E1%BB%AD-d%E1%BB%A5ng-code-classlanguage-textreactchildrenmapcode-thay-v%C3%AC-code-classlanguage-textpropschildrenmapcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao nên sử dụng <code class="language-text">React.Children.map()</code> thay vì <code class="language-text">props.children.map()</code></h2>\n<p><code class="language-text">props.children</code> chưa chắc lúc nào cũng là <code class="language-text">array</code>. Ví dụ</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Parent</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Parent</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Nếu sử dụng <code class="language-text">props.children.map</code> trong Parent sẽ bị lỗi vì <code class="language-text">props.children</code> là một object không phải array.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Parent</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Welcome<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>props<span class="token punctuation">.</span>children will now be an array<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Parent</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p><code class="language-text">React.Children.map</code> cho phép <code class="language-text">props.children</code> là <code class="language-text">array</code> hoặc <code class="language-text">object</code> đều được.</p>\n<h2 id="events-được-xử-lý-trong-react-như-thế-nào"><a href="#events-%C4%91%C6%B0%E1%BB%A3c-x%E1%BB%AD-l%C3%BD-trong-react-nh%C6%B0-th%E1%BA%BF-n%C3%A0o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events được xử lý trong React như thế nào?</h2>\n<p>Các hàm xử lý event trong React sẽ được truyền vào một instance của <code class="language-text">SyntheticEvent</code>, <code class="language-text">SyntheticEvent</code> cũng giống như những native event bình thường của Browser trừ việc nó có thể làm việc trên tất cả các trình duyệt.</p>\n<p>React không attach event vô các child node, mà sẽ lắng nghe tất cả các event sử dụng 1 event listener duy nhất, Với mục đích là để tăng performance và React không cần phải update lại event listener khi update DOM.</p>\n<h2 id="sự-khác-nhau-giữa-code-classlanguage-textcreateelementcode-và-code-classlanguage-textcloneelementcode"><a href="#s%E1%BB%B1-kh%C3%A1c-nhau-gi%E1%BB%AFa-code-classlanguage-textcreateelementcode-v%C3%A0-code-classlanguage-textcloneelementcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sự khác nhau giữa <code class="language-text">createElement</code> và <code class="language-text">cloneElement</code></h2>\n<p><code class="language-text">createElement</code> là để tạo element, <code class="language-text">cloneElement</code> copy element và đưa vào các props mới.</p>\n<h2 id="argument-thứ-2-của-code-classlanguage-textsetstatecode-dùng-để-làm-gì"><a href="#argument-th%E1%BB%A9-2-c%E1%BB%A7a-code-classlanguage-textsetstatecode-d%C3%B9ng-%C4%91%E1%BB%83-l%C3%A0m-g%C3%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Argument thứ 2 của <code class="language-text">setState</code> dùng để làm gì</h2>\n<p>callback function, function sẽ chạy sau khi <code class="language-text">component</code> được <code class="language-text">render</code> lại với state mới.</p>\n<p><code class="language-text">setState</code> là một phương thức bất đồng bộ (asynchronous)</p>\n<h2 id="đoạn-code-sau-sai-ở-đâu"><a href="#%C4%91o%E1%BA%A1n-code-sau-sai-%E1%BB%9F-%C4%91%C3%A2u" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Đoạn code sau sai ở đâu</h2>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevState<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> <span class="token punctuation">{</span> streak<span class="token punctuation">:</span> prevState<span class="token punctuation">.</span>streak <span class="token operator">+</span> props<span class="token punctuation">.</span>count <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Không sai gì cả, ít người biết rằng khi <code class="language-text">setState</code> có thể truyền vào <code class="language-text">previous state</code>.</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://tylermcginnis.com/react-interview-questions/">📜 React Interview Questions</a></p>',timeToRead:7,excerpt:"Chuyện gì xảy ra khi gọi   ? Sự khác nhau giữa Element và Component trong React? Khi nào thì sử dụng Class Component và Functional Component…",frontmatter:{title:"Interview React Developer thì hỏi gì?",cover:"",date:"2017-07-17",category:"javascript",tags:["javascript","react"],desc:"Một vài câu hỏi để kiểm tra mức độ am hiểu react của một lập trình viên frontend"},fields:{slug:"/2017-07-17-interview-react-developer-thi-hoi-gi"}}},pathContext:{slug:"/2017-07-17-interview-react-developer-thi-hoi-gi",prev:{frontmatter:{title:"Giới thiệu React Router",desc:"React không phải một framework, nó chỉ là một thư viện javascript, bởi vì vậy nó không thể giải quyết tất cả các yêu cầu một ứng dụng. Việc mà React làm rất tốt là tạo component và cách thức quản lý state của component, nhưng để tạo một Single Page App (sẽ viết tắt là SPA) phức tạp, nó cần những thư viện khác nữa, đầu tiên cần nhắc đến là React Router",type:"post",category:"react",tags:["javascript","react"],date:"2017-07-31",cover:""},fields:{slug:"/2017-07-31-react-router"}},next:{frontmatter:{title:"Thời đại của Pixel Perfect Design đã hết từ lâu",desc:"Khi bắt dầu dàn trang cho web, hãy sử dụng những hệ thống grid phổ biến hiện nay như Bootstrap Grid. Nếu bạn là designer mà chưa biết đến CSS framework này thì thiệt thiếu xót trầm trọng...",type:"post",category:"javascript",tags:["css","ux-ui"],date:"2017-03-07",cover:""},fields:{slug:"/2017-03-07-thoi-dai-cua-pixel-perfect-da-het-phan-2"}}}}}});
//# sourceMappingURL=path---2017-07-17-interview-react-developer-thi-hoi-gi-8fbbd0dfab43b3994005.js.map