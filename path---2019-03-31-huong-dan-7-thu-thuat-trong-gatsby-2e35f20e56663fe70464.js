webpackJsonp([0xd53e6aa1fbf2],{1426:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#l%E1%BA%A5y-ng%C3%A0y-build-g%E1%BA%A7n-nh%E1%BA%A5t">Lấy Ngày build gần nhất</a></li>\n<li><a href="#ng%C3%A0y-ch%E1%BB%89nh-s%E1%BB%ADa-g%E1%BA%A7n-nh%E1%BA%A5t">Ngày chỉnh sửa gần nhất</a></li>\n<li><a href="#c%C3%B9ng-source-kh%C3%A1c-queries">Cùng source, khác Queries</a></li>\n<li><a href="#previousnext">Previous/Next</a></li>\n<li><a href="#b%C3%A0i-vi%E1%BA%BFt-ng%E1%BA%ABu-nhi%C3%AAn">Bài viết ngẫu nhiên</a></li>\n<li><a href="#m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-m%E1%BB%9F-tr%C3%ACnh-duy%E1%BB%87t">Mặc định mở trình duyệt</a></li>\n<li><a href="#s%E1%BB%AD-d%E1%BB%A5ng-dotenv">Sử dụng dotenv</a></li>\n</ul>\n<!-- /TOC -->\n<h2 id="lấy-ngày-build-gần-nhất"><a href="#l%E1%BA%A5y-ng%C3%A0y-build-g%E1%BA%A7n-nh%E1%BA%A5t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lấy Ngày build gần nhất</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useStaticQuery<span class="token punctuation">,</span> graphql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'gatsby\'</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">IndexPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">useStaticQuery</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>p<span class="token operator">></span>This site was last built on<span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>site<span class="token punctuation">.</span>buildTime<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> IndexPage\n\n<span class="token keyword">const</span> query <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`\n  query Info {\n    site {\n      buildTime(formatString: "DD/MM/YYYY")\n    }\n  }\n`</span></span></code></pre>\n      </div>\n<h2 id="ngày-chỉnh-sửa-gần-nhất"><a href="#ng%C3%A0y-ch%E1%BB%89nh-s%E1%BB%ADa-g%E1%BA%A7n-nh%E1%BA%A5t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ngày chỉnh sửa gần nhất</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">query YourQuery <span class="token punctuation">{</span>\n  allMdx <span class="token punctuation">{</span>\n    edges <span class="token punctuation">{</span>\n      node <span class="token punctuation">{</span>\n        parent <span class="token punctuation">{</span>\n          <span class="token operator">...</span> on File <span class="token punctuation">{</span>\n            <span class="token function">modifiedTime</span><span class="token punctuation">(</span>formatString<span class="token punctuation">:</span> <span class="token string">"MM/DD/YYYY"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="cùng-source-khác-queries"><a href="#c%C3%B9ng-source-kh%C3%A1c-queries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cùng source, khác Queries</h2>\n<p>Khi chúng ta định nghĩa 2 ( hoặc nhiều hơn) giá trị trong <code class="language-text">gatsby-source-filesystem</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// file gatsby-config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-filesystem`</span></span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        name<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`assets`</span></span><span class="token punctuation">,</span>\n        path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/src/assets`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-source-filesystem`</span></span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        name<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`logos`</span></span><span class="token punctuation">,</span>\n        path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/src/logos`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token template-string"><span class="token string">`gatsby-transformer-sharp`</span></span><span class="token punctuation">,</span>\n    <span class="token template-string"><span class="token string">`gatsby-plugin-sharp`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta có thể filter trong câu GraphQL chỉ lấy 1 trong 2 source đó</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// file src/pages/index.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useStaticQuery<span class="token punctuation">,</span> graphql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'gatsby\'</span>\n<span class="token keyword">import</span> Img <span class="token keyword">from</span> <span class="token string">\'gatsby-image\'</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">IndexPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">useStaticQuery</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>p<span class="token operator">></span>First <span class="token function">image</span> <span class="token punctuation">(</span>logo<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Img\n        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'200px\'</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        fluid<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>logo<span class="token punctuation">.</span>childImageSharp<span class="token punctuation">.</span>fluid<span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>p<span class="token operator">></span>Assets <span class="token function">images</span> <span class="token punctuation">(</span>two<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> flexWrap<span class="token punctuation">:</span> <span class="token string">\'wrap\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span>assets<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>img <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>Img\n            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'200px\'</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n            fluid<span class="token operator">=</span><span class="token punctuation">{</span>img<span class="token punctuation">.</span>node<span class="token punctuation">.</span>childImageSharp<span class="token punctuation">.</span>fluid<span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> IndexPage\n\n<span class="token keyword">const</span> query <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`\n  query Images {\n    logo: file(sourceInstanceName: { eq: "logos" }) {\n      childImageSharp {\n        fluid(maxWidth: 200, quality: 100) {\n          ...GatsbyImageSharpFluid\n        }\n      }\n    }\n    assets: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {\n      edges {\n        node {\n          childImageSharp {\n            fluid(maxWidth: 200, quality: 100) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    }\n  }\n`</span></span></code></pre>\n      </div>\n<h2 id="previousnext"><a href="#previousnext" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Previous/Next</h2>\n<p>Để show bài viết trước và sau bài viết hiện tại</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// file gatsby-node.js</span>\n<span class="token keyword">const</span> <span class="token function-variable function">wrapper</span> <span class="token operator">=</span> promise <span class="token operator">=></span>\n  promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> result<span class="token punctuation">.</span>errors\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nexports<span class="token punctuation">.</span>createPages <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> actions <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> actions\n  <span class="token keyword">const</span> bookTemplate <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./src/templates/book.js\'</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>\n    <span class="token function">graphql</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`\n      {\n        allBooksYaml(sort: { fields: [title], order: ASC }) {\n          edges {\n            node {\n              slug\n              title\n            }\n          }\n        }\n      }\n    `</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> books <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allBooksYaml<span class="token punctuation">.</span>edges\n\n  books<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>edge<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// đặt biến prev/next cho tất cả node</span>\n    <span class="token comment">// để có truy cập slug &amp; title ở bất kỳ đâu</span>\n\n    <span class="token keyword">const</span> prev <span class="token operator">=</span> index <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token punctuation">:</span> books<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>node\n    <span class="token keyword">const</span> next <span class="token operator">=</span> index <span class="token operator">===</span> books<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token punctuation">:</span> books<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>node\n\n    <span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>\n      component<span class="token punctuation">:</span> bookTemplate<span class="token punctuation">,</span>\n      context<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        slug<span class="token punctuation">:</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>\n        prev<span class="token punctuation">,</span>\n        next<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// file src/templates/books</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'gatsby\'</span>\n\n<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">\'../components/layout\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">BookTemplate</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> booksYaml <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>data\n    <span class="token comment">// prev &amp; next được truyền từ gatsby-node.js</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> prev<span class="token punctuation">,</span> next <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>pageContext\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>Layout location<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>booksYaml<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>\n        <span class="token operator">&lt;</span>div<span class="token operator">></span>\n          <span class="token punctuation">{</span>prev <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>\n              <span class="token operator">&lt;</span>span<span class="token operator">></span>Previous<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n              <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span>prev<span class="token punctuation">.</span>slug<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>prev<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token punctuation">{</span>next <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div<span class="token operator">></span>\n              <span class="token operator">&lt;</span>span<span class="token operator">></span>Next<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n              <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span>next<span class="token punctuation">.</span>slug<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>next<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> BookTemplate\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> pageQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`\n  query BookBySlug($slug: String!) {\n    booksYaml(slug: { eq: $slug }) {\n      title\n      content\n    }\n  }\n`</span></span></code></pre>\n      </div>\n<h2 id="bài-viết-ngẫu-nhiên"><a href="#b%C3%A0i-vi%E1%BA%BFt-ng%E1%BA%ABu-nhi%C3%AAn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bài viết ngẫu nhiên</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// gatsby-node.js</span>\n\n<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'lodash\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">prevNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// lấy danh sách bài post (không bao gồm bài post hiện tại)</span>\n  <span class="token keyword">const</span> filterUnique <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n    list<span class="token punctuation">,</span>\n    input <span class="token operator">=></span> input<span class="token punctuation">.</span>node<span class="token punctuation">.</span>slug <span class="token operator">!==</span> item<span class="token punctuation">.</span>node<span class="token punctuation">.</span>slug\n  <span class="token punctuation">)</span>\n  <span class="token keyword">const</span> sample <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">sampleSize</span><span class="token punctuation">(</span>filterUnique<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    left<span class="token punctuation">:</span> sample<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n    right<span class="token punctuation">:</span> sample<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">wrapper</span> <span class="token operator">=</span> promise <span class="token operator">=></span>\n  promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> result<span class="token punctuation">.</span>errors\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nexports<span class="token punctuation">.</span>createPages <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> actions <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> actions\n  <span class="token keyword">const</span> bookTemplate <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./src/templates/book.js\'</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>\n    <span class="token function">graphql</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`\n      {\n        allBooksYaml {\n          edges {\n            node {\n              slug\n              title\n            }\n          }\n        }\n      }\n    `</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> books <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allBooksYaml<span class="token punctuation">.</span>edges\n\n  books<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>edge <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">prevNext</span><span class="token punctuation">(</span>books<span class="token punctuation">,</span> edge<span class="token punctuation">)</span>\n\n    <span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>\n      component<span class="token punctuation">:</span> bookTemplate<span class="token punctuation">,</span>\n      context<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        slug<span class="token punctuation">:</span> edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>\n        left<span class="token punctuation">,</span>\n        right<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="mặc-định-mở-trình-duyệt"><a href="#m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-m%E1%BB%9F-tr%C3%ACnh-duy%E1%BB%87t" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mặc định mở trình duyệt</h2>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"gatsby develop -o"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="sử-dụng-dotenv"><a href="#s%E1%BB%AD-d%E1%BB%A5ng-dotenv" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sử dụng dotenv</h2>\n<p>Mặc định thì chúng ta có thể sử dụng biến môi trường khi cài Gatsby, do đó chỉ việc import <code class="language-text">dotenv</code> trong file <code class="language-text">gatsby-config.js</code> là có thể sử dụng.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// gatsby-config.js</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'dotenv\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`.env.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a target="_blank" rel="noopener noreferrer" href="https://www.lekoarts.de/en/blog/tips-and-tricks-for-gatsby">Tips &#x26; Tricks for Gatsby\n</a></p>',
timeToRead:5,excerpt:"Lấy Ngày build gần nhất Ngày chỉnh sửa gần nhất Cùng source, khác Queries Previous/Next Bài viết ngẫu nhiên Mặc định mở trình duyệt Sử dụng…",frontmatter:{title:"7 thủ thuật trong gatsby",cover:"",date:"2019-03-31",category:null,tags:["gatsby"],desc:"Tập hợp những thủ thuật khi làm việc với gatsby"},fields:{slug:"/2019-03-31-huong-dan-7-thu-thuat-trong-gatsby"}}},pathContext:{slug:"/2019-03-31-huong-dan-7-thu-thuat-trong-gatsby",prev:{frontmatter:{title:"Các phương thức trên array cần nhớ",desc:"Khi cần loop qua một array, tìm phần tử, sắp xếp, hoặc làm gì đó trên array, khả năng rất cao là trong array đã có một phương thức sẵn để bạn xài, không cần dùng tới vòng lặp for. Chúng ta sẽ cùng điểm qua những phương thức như vậy trong bài viết này.",type:"post",category:null,tags:["javascript"],date:"2019-04-08",cover:""},fields:{slug:"/2019-04-08-cac-phuong-thuc-tren-array-can-nho"}},next:{frontmatter:{title:"Ràng buộc dữ liệu input với HTML5",desc:"Vì form quá phức tạp, chúng ta cần thêm một bài viết nữa về validation với html",type:"post",category:null,tags:["mobile-web-specialist"],date:"2019-03-25",cover:""},fields:{slug:"/2019-03-25-rang-buoc-du-lieu-voi-html-5"}}}}}});
//# sourceMappingURL=path---2019-03-31-huong-dan-7-thu-thuat-trong-gatsby-2e35f20e56663fe70464.js.map