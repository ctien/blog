webpackJsonp([0xadcf72f5957],{1616:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#t%E1%BA%A1i-sao-d%C3%B9ng-eslint">Tại sao dùng ESLint</a></li>\n<li><a href="#c%C3%A0i-%C4%91%E1%BA%B7t-eslint">Cài đặt ESLint</a></li>\n<li><a href="#file-c%C3%A0i-%C4%91%E1%BA%B7t-c%E1%BB%A7a-eslint">File cài đặt của ESLint</a></li>\n<li><a href="#javascript-thu%E1%BA%A7n">Javascript thuần</a></li>\n<li><a href="#thi%E1%BA%BFt-%C4%91%E1%BA%B7t-typescript">Thiết đặt TypeScript</a></li>\n<li>\n<p><a href="#thi%E1%BA%BFt-%C4%91%E1%BA%B7t-cho-react">Thiết đặt cho React</a></p>\n<ul>\n<li><a href="#react-javascript">React Javascript</a></li>\n<li><a href="#react-typescript">React TypeScript</a></li>\n</ul>\n</li>\n<li><a href="#c%C3%A0i-%C4%91%E1%BA%B7t-cho-vscode">Cài đặt cho VSCode</a></li>\n</ul>\n<!-- /TOC -->\n<p>Nếu chưa rành, bạn cần đọc từ đầu tới cuối, nếu đã thành thạo, chỉ việc nhảy tới phần cuối rồi copy config về xài.</p>\n<p>Hướng dẫn này sử dụng bộ config của Airbnb, vì nó quá nổi tiếng và được sử dụng gần như là chuẩn. Tất nhiên, bạn có quyền thay đổi sao cho hợp <em>gu</em></p>\n<p>Nếu chưa bao giờ <em>nghe</em> đến hướng dẫn viết code sao cho chuẩn của Airbnb, tham khảo các bài viết sau</p>\n<ul>\n<li><a href="https://github.com/airbnb/javascript/blob/master/README.md">Airbnb JavaScript style guide</a></li>\n<li><a href="https://github.com/airbnb/javascript/tree/master/react">Airbnb React style guide</a></li>\n<li><a href="https://github.com/airbnb/javascript/tree/master/css-in-javascript">Airbnb CSS in JavaScript style guide</a></li>\n<li><a href="https://github.com/airbnb/css">Airbnb Sass style guide</a></li>\n</ul>\n<h2 id="tại-sao-dùng-eslint"><a href="#t%E1%BA%A1i-sao-d%C3%B9ng-eslint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tại sao dùng ESLint</h2>\n<p>Hiện tại không có bất cứ một đối thủ nào xứng tầm với ESLint, nó là dự án đã và đang được bảo trì bởi cộng động rất rộng lớn. Hầu hết các chương trình viết code đều hỗ trợ thông qua plugin, chúng ta sẽ không gặp khó khăn trong việc sử dụng nó với VSCode, Vim, Emac, WebStorm, Sublime, Atom,...</p>\n<p>Túm lại, ESLint là <strong>nền tảng</strong> xịn sò nhất để bạn dựa trên đó đưa ra thiết đặt chung.</p>\n<h2 id="cài-đặt-eslint"><a href="#c%C3%A0i-%C4%91%E1%BA%B7t-eslint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cài đặt ESLint</h2>\n<p>Giống như bất kỳ package nào khác, ESLint có thể được cài đặt ở 2 mức</p>\n<ul>\n<li><em>global</em>, cài luôn vào máy <code class="language-text">npm -g</code></li>\n<li>đi theo từng project</li>\n</ul>\n<p>Việc cài đặt ESLint ở mức <em>global</em> khá là hợp lý vì chúng ta muốn dùng nó ở mọi project. Tuy nhiên cũng hợp lý nếu cài riêng trên từng project, nếu bạn đang cần</p>\n<ul>\n<li>Các phiên bản ESLint khác nhau trên từng dự án</li>\n<li>Không ẩn việc phụ thuộc vào ESLint</li>\n<li>Đồng nghiệp và các công cụ tự động ( như mấy thằng CI) sẽ cài ESlint có thể cài đặt nó như những package khác. Không cần thêm bất kỳ cài đặt và tài liệu nào khác.</li>\n</ul>\n<p>Cài đặt ESLint trong thư mục project</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i eslint --save-dev</code></pre>\n      </div>\n<p>Chạy ESLint trong project</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">npx eslint</code></pre>\n      </div>\n<p>Để tạo một <em>shortcut</em> cho câu lệnh chạy eslint. Bên trong file <code class="language-text">package.json</code> thêm dòng sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint ."</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tham số <code class="language-text">.</code> cho phép chạy ESLint bên trong thư mục hiện tại, chúng ta chạy lệnh thông qua shortcut</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run lint</code></pre>\n      </div>\n<h2 id="file-cài-đặt-của-eslint"><a href="#file-c%C3%A0i-%C4%91%E1%BA%B7t-c%E1%BB%A7a-eslint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>File cài đặt của ESLint</h2>\n<p>Có thể đặt file cài đặt ESLint ở <a href="https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy">nhiều vị trí</a>. Nếu không có nhu cầu quá đặt biệt, 1 file duy nhất ở thư mục ngoài cùng ( <code class="language-text">root</code> ) là đủ.</p>\n<p>ESLint cho phép sử dụng nhiều kiểu file</p>\n<ul>\n<li>Javascript</li>\n<li>JSON</li>\n<li>YAML</li>\n</ul>\n<p>Kiểu YAML xài là <em>vui</em> nhất. Tạo file tên <code class="language-text">.eslintrc.yaml</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">touch</span> .eslintrc.yaml</code></pre>\n      </div>\n<blockquote>\n<p>Nếu muốn thêm <em>logic</em> bằng code, bạn cần dùng kiểu javascript</p>\n</blockquote>\n<p>Điều cần quan tâm trước hết là thông báo cho ESLint chúng ta đang viết ngôn ngữ gì, phiên bản nào, môi trường mà code sẽ chạy. Nếu không có các thông tin, ESLint sẽ không chạy được.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">parserOptions:\n  ecmaVersion: <span class="token number">6</span>\nenv:\n  node: <span class="token boolean">true</span></code></pre>\n      </div>\n<h2 id="javascript-thuần"><a href="#javascript-thu%E1%BA%A7n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Javascript thuần</h2>\n<p>Với project là javascript thuần, toàn bộ file là <code class="language-text">.js</code>, có thể tự định nghĩa từ đầu hết, nhưng như vậy khá mất thời gian, khó bảo trì, chưa chắc chuẩn vì nó phụ thuộc vào sự hiểu biết của bạn về javascript</p>\n<p>Rất nhiều các công ty lớn như <a href="https://github.com/google/eslint-config-google">Google</a>, <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">Airbnb</a>, <a href="https://github.com/facebook/fbjs/tree/master/packages/eslint-config-fbjs-opensource">Facebook</a> bỏ ra cả tỉ tỉ thời gian để bảo trì và cập nhập mấy cài đặt này</p>\n<p>Sử dụng cài được vạn người yêu thích, Airbnb</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">npx install-peerdeps --dev eslint-config-airbnb-base</code></pre>\n      </div>\n<p>Các bài viết trên mạng sẽ kêu bạn cài <code class="language-text">eslint-config-airbnb</code>, nó có bao gồm luôn phần cài đặt cho React, React Hooks, ... . Không cần thiết trong trường hợp project chỉ là javascript thông thường.</p>\n<p>Để ý chúng ta <strong>KHÔNG</strong> dùng <code class="language-text">npm</code> để cài đặt, mà dùng <code class="language-text">npx install-peerdeps</code>. Nó sẽ cài luôn mấy package nào mà <code class="language-text">eslint-config-airbnb-base</code> phụ thuộc. Trường hợp sử dụng ESLint chúng ta sẽ gặp hoài, vì hầu như nó đều phụ thuộc một vài package khác.</p>\n<p>Cài xong, khai báo sẽ kế thừa bộ cài đặt của Airbnb</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> airbnb<span class="token punctuation">-</span>base</code></pre>\n      </div>\n<p>Những thiết đặt của airbnb có thể nói là rất phổ biến và được tin dùng bởi nhiều dự án lớn nhỏ khác nhau. Chúng ta có thể yên tâm sử dụng nó mà không cần thay đổi gì nhiều.</p>\n<p>Tổng kết</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^6.1.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-config-airbnb-base"</span><span class="token operator">:</span> <span class="token string">"^14.0.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-import"</span><span class="token operator">:</span> <span class="token string">"^2.20.0"</span> (peer dependency)\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">parserOptions</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ecmaVersion</span><span class="token punctuation">:</span> <span class="token number">6</span>\n\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n<span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> eslint<span class="token punctuation">:</span>recommended\n  <span class="token punctuation">-</span> airbnb<span class="token punctuation">-</span>base</code></pre>\n      </div>\n<h2 id="thiết-đặt-typescript"><a href="#thi%E1%BA%BFt-%C4%91%E1%BA%B7t-typescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thiết đặt TypeScript</h2>\n<p>Vấn đề chính của TypeScript là ESLint không thể tự động mà <code class="language-text">parse</code> được, chúng ta phải thêm một parser <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser">@typescript-eslint/parser</a>.</p>\n<p>Cài đặt</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @typescript-eslint/parser --save-dev</code></pre>\n      </div>\n<blockquote>\n<p>Parse làm nhiệm vụ đọc cài file input và tạo ra một <em>phiên bản</em> mà ESLint hiểu được.</p>\n</blockquote>\n<p>KHai báo dùng parser này</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">parser</span><span class="token punctuation">:</span> <span class="token string">"@typescript-eslint/parser"</span></code></pre>\n      </div>\n<p>Đồng thời cập nhập luôn <code class="language-text">package.json</code> và báo với ESLint đừng kiểm tra file <code class="language-text">.js</code> mà kiểm tra file <code class="language-text">.ts</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .ts"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Tương tự như javascript, chúng ta cài đặt bộ thiết đặt sẵn của Airbnb</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">npx install-peerdeps --dev eslint-config-airbnb-typescript\n<span class="token function">npm</span> i eslint-plugin-import --save-dev</code></pre>\n      </div>\n<p><code class="language-text">eslint-plugin-import</code> phải được cài đặt riêng, thủ công, không rõ lý do tại sao luôn.</p>\n<p>Cập nhập lại file config ESLint</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> airbnb<span class="token punctuation">-</span>typescript/base\n  <span class="token punctuation">-</span> plugin<span class="token punctuation">:</span>@typescript<span class="token punctuation">-</span>eslint/recommended</code></pre>\n      </div>\n<p>Bạn có thể thắc mắc, tại sao chưa cài <code class="language-text">@typescript-eslint</code> mà có thể sử dụng, thật ra lúc cài <code class="language-text">eslint-config-airbnb-typescript</code> chúng ta đã cài luôn nó bằng <code class="language-text">npx install-peerdeps</code></p>\n<p>Có thể rule khác nữa có thể tham khảo <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin">trực tiếp từ tài liệu trên github</a></p>\n<p>Cuối cùng, bạn sẽ thấy có rất nhiều bài viết trên mạng, chỉ bạn thiết đặt</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">plugins</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token string">"@typescript-eslint"</span></code></pre>\n      </div>\n<p>Nếu không sử dụng các thiết ESLint được đề nghị, cái này không cần thiết. Lý do là Airbnb đã bật luôn các rule như vậy.</p>\n<p>Tổng kết</p>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"@typescript-eslint/eslint-plugin"</span><span class="token operator">:</span> <span class="token string">"^2.17.0"</span><span class="token punctuation">,</span> (peer dependency)\n  <span class="token property">"@typescript-eslint/parser"</span><span class="token operator">:</span> <span class="token string">"^2.17.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^6.8.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-config-airbnb-typescript"</span><span class="token operator">:</span> <span class="token string">"^6.3.1"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-import"</span><span class="token operator">:</span> <span class="token string">"^2.20.0"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>.eslintrc.yaml</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">parserOptions</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ecmaVersion</span><span class="token punctuation">:</span> <span class="token number">6</span>\n\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n<span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> airbnb<span class="token punctuation">-</span>typescript/base\n  <span class="token punctuation">-</span> plugin<span class="token punctuation">:</span>@typescript<span class="token punctuation">-</span>eslint/recommended</code></pre>\n      </div>\n<h2 id="thiết-đặt-cho-react"><a href="#thi%E1%BA%BFt-%C4%91%E1%BA%B7t-cho-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thiết đặt cho React</h2>\n<p>Thêm các thiết đặt ESLint cho React vô cùng đơn giản, mọi thứ đã có Airbnb lo.</p>\n<p>Một trong những sai lầm phổ biến là cho rằng viết như bên dưới sẽ bật hỗ trợ React</p>\n<p><strong>.eslintrc.yaml</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">parserOptions</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ecmaFeatures</span><span class="token punctuation">:</span>\n    <span class="token key atrule">jsx</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></code></pre>\n      </div>\n<p>React sử dụng JSX, nhưng theo cách mà ESLint không thể <strong>hiểu nổi</strong>. Để React và ESLint <em>nói chuyện</em> được với nhau, chúng ta phải sử dụng <code class="language-text">eslint-plugin-react</code></p>\n<h3 id="react-javascript"><a href="#react-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Javascript</h3>\n<p>Cài đặt package</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">npx install-peerdeps --dev eslint-config-airbnb</code></pre>\n      </div>\n<p><strong>.eslintrc.yaml</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> airbnb\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">browser</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></code></pre>\n      </div>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .js,.jsx"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Nếu có sử dụng React Hook, bạn nên thêm phần cài đặt sau (có bỏ qua việc kiểm tra accessibility)</p>\n<p><strong>.eslintrc.yaml</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> airbnb<span class="token punctuation">-</span>base\n  <span class="token punctuation">-</span> airbnb/rules/react\n  <span class="token punctuation">-</span> airbnb/hooks</code></pre>\n      </div>\n<p>Tổng kết</p>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^6.1.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-config-airbnb"</span><span class="token operator">:</span> <span class="token string">"^18.0.1"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-import"</span><span class="token operator">:</span> <span class="token string">"^2.20.0"</span><span class="token punctuation">,</span> (peer dependency)\n  <span class="token property">"eslint-plugin-jsx-a11y"</span><span class="token operator">:</span> <span class="token string">"^6.2.3"</span><span class="token punctuation">,</span> (peer dependency)\n  <span class="token property">"eslint-plugin-react"</span><span class="token operator">:</span> <span class="token string">"^7.18.0"</span><span class="token punctuation">,</span> (peer dependency)\n  <span class="token property">"eslint-plugin-react-hooks"</span><span class="token operator">:</span> <span class="token string">"^1.7.0"</span> (peer dependency)\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>.eslintrc.yaml</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">parserOptions</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ecmaVersion</span><span class="token punctuation">:</span> <span class="token number">6</span>\n\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">browser</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n<span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> airbnb\n  <span class="token punctuation">-</span> airbnb/hooks\n\n<span class="token key atrule">rules</span><span class="token punctuation">:</span>\n  <span class="token key atrule">react/react-in-jsx-scope</span><span class="token punctuation">:</span> off</code></pre>\n      </div>\n<p><a href="https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules">Rảnh ngồi xem toàn bộ thiết đặt</a></p>\n<h3 id="react-typescript"><a href="#react-typescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React TypeScript</h3>\n<p>Nếu dùng TypeScript, chúng ta không thể cài theo kiểu <code class="language-text">npx install-peerdeps</code>, mà phải cài độc lập</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint-config-airbnb-typescript <span class="token punctuation">\\</span>\n            eslint-plugin-import <span class="token punctuation">\\</span>\n            eslint-plugin-jsx-a11y <span class="token punctuation">\\</span>\n            eslint-plugin-react <span class="token punctuation">\\</span>\n            eslint-plugin-react-hooks <span class="token punctuation">\\</span>\n            @typescript-eslint/eslint-plugin <span class="token punctuation">\\</span>\n            --save-dev</code></pre>\n      </div>\n<p><strong>.eslintrc.yaml</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token key atrule">parserOptions</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ecmaVersion</span><span class="token punctuation">:</span> <span class="token number">6</span>\n\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n  <span class="token key atrule">browser</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n<span class="token key atrule">extends</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> airbnb<span class="token punctuation">-</span>typescript\n  <span class="token punctuation">-</span> airbnb/hooks\n  <span class="token punctuation">-</span> plugin<span class="token punctuation">:</span>@typescript<span class="token punctuation">-</span>eslint/recommended\n\n<span class="token key atrule">rules</span><span class="token punctuation">:</span>\n  <span class="token key atrule">react/react-in-jsx-scope</span><span class="token punctuation">:</span> off</code></pre>\n      </div>\n<p><strong>package.json</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^6.8.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"@typescript-eslint/eslint-plugin"</span><span class="token operator">:</span> <span class="token string">"^2.17.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-config-airbnb-typescript"</span><span class="token operator">:</span> <span class="token string">"^6.3.1"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-import"</span><span class="token operator">:</span> <span class="token string">"^2.20.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-jsx-a11y"</span><span class="token operator">:</span> <span class="token string">"^6.2.3"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-react"</span><span class="token operator">:</span> <span class="token string">"^7.18.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"eslint-plugin-react-hooks"</span><span class="token operator">:</span> <span class="token string">"^2.3.0"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .ts,.tsx"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="cài-đặt-cho-vscode"><a href="#c%C3%A0i-%C4%91%E1%BA%B7t-cho-vscode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cài đặt cho VSCode</h2>\n<p><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">VSCode đã có plugin</a> khá thần thánh để hỗ trợ ESLint. Các thiết đặt yêu thích của mình</p>\n<p>Tự động chạy lint khi save</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"eslint.run"</span><span class="token operator">:</span> <span class="token string">"onSave"</span></code></pre>\n      </div>\n<p>VSCode sẽ kiểm tra trên JS, JSX, TS, TSX</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">"javascript"</span><span class="token punctuation">,</span>\n  <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>\n  <span class="token string">"typescript"</span><span class="token punctuation">,</span>\n  <span class="token string">"typescriptreact"</span>\n<span class="token punctuation">]</span></code></pre>\n      </div>\n<p>Chọn kiểu nháy đơn</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"javascript.preferences.quoteStyle"</span><span class="token operator">:</span> <span class="token string">"single"</span><span class="token punctuation">,</span>\n<span class="token property">"typescript.preferences.quoteStyle"</span><span class="token operator">:</span> <span class="token string">"single"</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>Tự động cập nhập vị trí file</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token property">"javascript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>\n<span class="token property">"typescript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p><a href="https://blog.geographer.fr/eslint-guide">ESLint configuration and best practices</a></p>',timeToRead:9,excerpt:"Tại sao dùng ESLint Cài đặt ESLint File cài đặt của ESLint Javascript thuần Thiết đặt TypeScript Thiết đặt cho React React Javascript React…",frontmatter:{title:"Chỉ dẫn thiết đặt ESLint trong nhiều tình huống sử dụng Javascript, Typescript, React",cover:"",date:"2020-02-03",category:null,tags:["hoc-thuat","javascript","typescript","react"],desc:"Chúng ta bắt đầu với Javascript trước, sau đó sẽ là TypeScript, và React. Mục tiêu là làm đúng, tránh trường hợp cài package không cần thiết hoặc copy/paste các config tới khi nó chạy được thì thôi."
},fields:{slug:"/2020-02-03-huong-dan-cai-dat-eslint-react-javascript-typescript-vscode"}}},pathContext:{slug:"/2020-02-03-huong-dan-cai-dat-eslint-react-javascript-typescript-vscode",prev:!1,next:{frontmatter:{title:"Kiểu enum trong TypeScript: làm việc như thế nào, sử dụng ra sao",desc:"Chúng ta sẽ trả lời 2 câu hỏi sau: enum của TypeScript làm việc như thế nào, Nó được sử dụng để làm gì. Vở lòng cho người mới viết TypeScript",type:"post",category:null,tags:["hoc-thuat","typescript"],date:"2020-02-01",cover:""},fields:{slug:"/2020-02-01-huong-dan-kieu-enum-trong-typescript-can-ban"}}}}}});
//# sourceMappingURL=path---2020-02-03-huong-dan-cai-dat-eslint-react-javascript-typescript-vscode-403652b87663d103519c.js.map