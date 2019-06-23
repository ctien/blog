webpackJsonp([0xf5c3b7cc0e36],{1322:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Đây là những chỉ dẫn của <a href="https://www.appnexus.com/">AppNexus</a> để tối ưu redux với lượng dữ liệu khủng. Mức độ bài viết khá chuyên sâu, bạn cần nắm thật vững redux, hoặc xem lại redux để hiểu rõ và nhớ lâu nội dung bài này.</p>\n<h1 id="lưu-dữ-liệu-với-chỉ-mục-truy-cập-bằng-selector"><a href="#l%C6%B0u-d%E1%BB%AF-li%E1%BB%87u-v%E1%BB%9Bi-ch%E1%BB%89-m%E1%BB%A5c-truy-c%E1%BA%ADp-b%E1%BA%B1ng-selector" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lưu dữ liệu với chỉ mục. Truy cập bằng selector</h1>\n<p>Cách cấu trúc dữ liệu sẽ ảnh hưởng nhiều đến performance và việc tổ chức ứng dụng. Lưu dữ liệu trả về từ API theo chỉ mục (index) mang lại nhiều lợi ích. Nói nôm na, lưu theo chỉ mục tức là theo dạng object, theo cặp key-value. Tác giả Redux ( Dan Abramov ) có trình bài vấn đề này <a href="https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage">ở đây</a></p>\n<p>Tưởng tượng chúng ta có một mảng object, được <code class="language-text">fetch</code> từ REST API. Giả dụ chúng ta quyết định lưu toàn bộ xuống <em>store</em> như nó trả về. Khi chúng ta muốn lấy một object cụ thể nào đó? Phải loop qua toàn bộ, rồi muốn lưu danh sách các user đang được chọn và chưa được chọn?</p>\n<p>Để tránh tình trạng này, lưu nó dạng chỉ mục, viết lại reducer trước khi lưu xuống store, cục dữ liệu mong muốn, (bạn nào sử dụng FireStore, NoSQL database sẽ hiểu liền tại sao)</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"usersById"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token number">123</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">"Jane Doe"</span><span class="token punctuation">,</span>\n      email<span class="token punctuation">:</span> <span class="token string">"jdoe@example.com"</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">"555-555-5555"</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Dữ liệu được cấu trúc như thế này thì giải quyết vấn đề bằng cách nào? Ví dụ, chúng ta muốn truy cập đến một user object cụ thể</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> user <span class="token operator">=</span> state<span class="token punctuation">.</span>usersById<span class="token punctuation">[</span>userId<span class="token punctuation">]</span></code></pre>\n      </div>\n<p><strong>Không cần loop, sử dụng key để lấy trực tiếp đến object mong muốn</strong></p>\n<p>Câu hỏi tiếp theo, ủa vậy sao render được danh sách user nếu dữ liệu tổ chức như vậy. Để làm chuyện đó, chúng ta viết một hàm (hàm như vậy gọi là selector) đơn giản bằng <code class="language-text">Object.keys()</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">getUsers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>userById<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>usersById<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>id <span class="token operator">=></span> usersById<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Thêm một hàm nữa cho việc lấy ra danh sách user với tham số truyền vào là mảng user id</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">getSelectedUsers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> selectedUserIds<span class="token punctuation">,</span> usersById <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> selectedUserIds<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=></span> usersById<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Đừng lo chuyện phải viết quá nhiều hàm, viết như vậy càng dễ cho sau này maintain. Trường hợp cái model user có bị thay đổi đi nữa, chúng ta không cần phải update cả trăm cái view đang sử dụng dữ liệu này, đơn giản là update những hàm selector này lại, re-format dữ liệu một tí là xong.</p>\n<h1 id="view-và-edit-nên-có-2-state-khác-nhau"><a href="#view-v%C3%A0-edit-n%C3%AAn-c%C3%B3-2-state-kh%C3%A1c-nhau" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>View và edit nên có 2 state khác nhau</h1>\n<p>Những dữ liệu từ REST API trả về được xem là <strong>state chuẩn</strong>, giống hệt với database. State của ứng dụng chúng ta sẽ lưu thêm một số meta data khác cho từng user, bình thường chúng ta sẽ xử lý hết những dữ liệu trong cùng một reducer, vì nó tiện.</p>\n<p>Nên tách việc xử lý state chuẩn trên reducer khác, <strong>nếu tập trong tất cả xử lý trong một reducer sẽ khó maintain hơn là tách ra thành nhiều reducer riêng biệt</strong>. (dùng <code class="language-text">combineReducers</code> đấy mà)</p>\n<p>Tại sao? Ví dụ chúng ta có 1 danh sách user, lưu dạng chỉ mục như ở trên</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n <span class="token string">"usersById"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token number">123</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">"Jane Doe"</span><span class="token punctuation">,</span>\n      email<span class="token punctuation">:</span> <span class="token string">"jdoe@example.com"</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">"555-555-5555"</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Chúng ta có màn hình để user chỉnh sửa, user click nút <strong>Edit</strong>, chúng ta phải update lại state để render màn hình edit, chúng ta thêm một field mới vào object như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n <span class="token string">"usersById"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token number">123</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      id<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">"Jane Doe"</span><span class="token punctuation">,</span>\n      email<span class="token punctuation">:</span> <span class="token string">"jdoe@example.com"</span><span class="token punctuation">,</span>\n      phone<span class="token punctuation">:</span> <span class="token string">"555-555-5555"</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n      isEditing<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Submit lên trên API sau khi sửa. API trả về một object mới. Nhưng làm sau chúng ta merge lại vào store? Nếu replace toàn bộ object thì chúng ta mất cái field <code class="language-text">isEditing</code>, tất nhiên là nếu muốn thì vẫn check và chỉ update những field mình muốn, nhưng như vậy rất tốn <em>sức người sức máy</em>. Tốt nhất chúng ta lưu dữ liệu từ API vào một nơi khác trong store bằng một reducer khác, không đụng gì vào nó, action cũng sẽ đơn giản hơn và dễ xử hơn</p>\n<p>Thêm nữa, nếu user có nữa chừng ấn <em>cancel</em> chúng ta dễ dàng reverse lại nếu đưa edit state vào chổ khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token string">"usersByIds"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token number">123</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">"Jane Doe"</span><span class="token punctuation">,</span>\n    email<span class="token punctuation">:</span> <span class="token string">"jdoe@example.com"</span><span class="token punctuation">,</span>\n    phone<span class="token punctuation">:</span> <span class="token string">"555-555-5555"</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token string">"editingUsersById"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token number">123</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">"Jane Smith"</span><span class="token punctuation">,</span>\n    email<span class="token punctuation">:</span> <span class="token string">"jsmith@example.com"</span><span class="token punctuation">,</span>\n    phone<span class="token punctuation">:</span> <span class="token string">"555-555-5555"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Như vậy chúng ta vẫn có state chuẩn, để reverse, edit state nếu user click edit nữa. Nói chung, tách ra, đừng gọp chung</p>\n<h1 id="xài-chung-state-một-cách-khôn-ngoan"><a href="#x%C3%A0i-chung-state-m%E1%BB%99t-c%C3%A1ch-kh%C3%B4n-ngoan" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Xài chung state một cách khôn ngoan</h1>\n<p>Một khi ứng dụng phình ra, nhiều tính năng hơn, nên có cái reducer cho từng page, ví dụ trang hiển thị list user, lưu lại trong <code class="language-text">users</code> reducer, một trang khác bao gồm tất cả post của user hiện tại. Tổ chức redux store như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"usersPage"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"usersById"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"postsPage"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"postsById"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Mỗi trang đảm trách state của chính nó, các file reducer có thể để cùng với các file page luôn.</p>\n<p>Sẽ đến lúc chúng ta cần chia sẽ một vài state giữa 2 view. Cân nhắc các câu hỏi sau</p>\n<ul>\n<li>Có bao nhiêu view hoặc reducer sẽ phụ thuộc vào dữ liệu này?</li>\n<li>Mỗi trang có cần một bản sao dữ liệu không?</li>\n<li>Dữ liệu thay đổi có thường xuyên không?</li>\n</ul>\n<p>Ví dụ, thông tin user đang đăng nhập sẽ được hiển thị trên tất cả các trang. Tất cả trang đều dùng, thì nó sẽ không hợp lý với cách làm mỗi page một reducer. Thông tin user sẽ không đổi trên tất cả các trang (trừ khi nó vô sửa profile), vậy nên mỗi trang không cần phải có một bản sao thông tin này.</p>\n<p>Tất cả các trang nên dùng chung một thông tin user đang login, cho nó một reducer riêng.</p>\n<p>Trường hợp nào chuyện xài chung như vậy là ko hợp lý? Thí dụ trong các bài viết của user, nó có thêm danh sách các bình luận. Một trang hiển thị tất cả bình luận. Trang trang list post có tùy chọn hiển thị bình luận cho post đang chọn. Chúng ta có 2 trang đều phụ thuộc vào dữ liệu của bình luận. Trang list post sẽ bị thay đổi khá thường xuyên: user update, edit, delete, add post, bình luận tè le ở đó. Ở trang bình luận chỉ cho tương tác với API GET, PUT bình luận, có thể phân trang. Trang post thì ngược lại, nó chỉ lấy danh sách bình luận của chính nó. Rõ ràng, việc dùng chung bình luận giữa các view là không hợp lý. Mỗi trang nên lưu riêng một bản sao của bình luận.</p>\n<h1 id="tái-sử-dụng-các-hàm-xử-lý-reducer"><a href="#t%C3%A1i-s%E1%BB%AD-d%E1%BB%A5ng-c%C3%A1c-h%C3%A0m-x%E1%BB%AD-l%C3%BD-reducer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tái sử dụng các hàm xử lý reducer</h1>\n<p>Sau một thời gian viết reducer, sẽ có lúc mình thấy mấy cái function này xử lý na ná nhau, như vậy thì nên tái sử dụng nó đừng viết mới. Ví dụ nếu logic của việc load dữ liệu bài viết và bình luận là như nhau, khác cái endpoint thôi và object schema, phân trang cũng giống.</p>\n<p>Để dùng chung reducer, cách thứ nhất, truyền vào scope bên trong payload của action. Để dể hình dung, lấy vị dụ một trang chứa nhiều section khác nhau, tất cả đều load bất tuần tự từ các API endpoint khác nhau, để theo dõi tình trang load này bằng state trong store</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> initialLoadingState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  usersLoading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  domainsLoading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  subDomainsLoading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  settingsLoading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Chúng ta có thể viết 4 reducer cho 4 cái action, thay vì như vậy nếu truyền thêm scope, một action <code class="language-text">SET_LOADING</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// reducer</span>\n<span class="token keyword">const</span> <span class="token function-variable function">loadingReducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> initialLoadingState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload <span class="token punctuation">}</span> <span class="token operator">=</span> action<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token constant">SET_LOADING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token comment">// tùy theo scope mà gán cho key tương ứng</span>\n      <span class="token punctuation">[</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>payload<span class="token punctuation">.</span>scope<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Loading`</span></span><span class="token punctuation">]</span><span class="token punctuation">:</span> payload<span class="token punctuation">.</span>loading<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Action</span>\n<span class="token keyword">const</span> <span class="token function-variable function">setLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span>scope<span class="token punctuation">,</span> loading<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token constant">SET_LOADING</span><span class="token punctuation">,</span>\n    payload<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      scope<span class="token punctuation">,</span>\n      loading<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// ví dụ gọi dispatch</span>\nstore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token string">\'users\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Làm như vậy chúng ta khử được quá nhiều lần lập lại logic của reducer.</p>\n<p>Còn về vấn đề phân trang, API có thể trả về gần giống như sau</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"users"</span><span class="token punctuation">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>\n  <span class="token string">"count"</span><span class="token punctuation">:</span> <span class="token number">2500</span><span class="token punctuation">,</span> <span class="token comment">// tổng số dòng</span>\n  <span class="token string">"pageSize"</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// số phần tử mỗi trang</span>\n  <span class="token string">"startElement"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// giá trị index đầu tiên của phần từ đầu tiên</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Để gọi dữ liệu trang tiếp theo, chúng ta có thể dùng tham số query <code class="language-text">startElement=100</code>. Đây là cách chúng ta hiện thực reducer cho vấn đề phân trang</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> initialPaginationState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  startElement<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  pageSize<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  count<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">paginationReducerFor</span> <span class="token operator">=</span> <span class="token punctuation">(</span>prefix<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">paginationReducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> initialPaginationState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload <span class="token punctuation">}</span> <span class="token operator">=</span> action<span class="token punctuation">;</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">case</span> prefix <span class="token operator">+</span> types<span class="token punctuation">.</span><span class="token constant">SET_PAGINATION</span><span class="token punctuation">:</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span>\n          startElement<span class="token punctuation">,</span>\n          pageSize<span class="token punctuation">,</span>\n          count<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span> <span class="token operator">=</span> payload<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          startElement<span class="token punctuation">,</span>\n          pageSize<span class="token punctuation">,</span>\n          count<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">default</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> paginationReducer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Ví dụ</span>\n<span class="token keyword">const</span> postsReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  postsData<span class="token punctuation">:</span> postsDataReducer<span class="token punctuation">,</span>\n  paginationData<span class="token punctuation">:</span> <span class="token function">paginationReducerFor</span><span class="token punctuation">(</span><span class="token string">\'POSTS_\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> commentsReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  commentsData<span class="token punctuation">:</span> commentsDataReducer<span class="token punctuation">,</span>\n  paginationData<span class="token punctuation">:</span> <span class="token function">paginationReducerFor</span><span class="token punctuation">(</span><span class="token string">\'COMMENTS_\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Action creator</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">setPaginationFor</span> <span class="token operator">=</span> <span class="token punctuation">(</span>prefix<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> \n  <span class="token keyword">const</span> <span class="token function-variable function">setPagination</span> <span class="token operator">=</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>\n      startElement<span class="token punctuation">,</span>\n      pageSize<span class="token punctuation">,</span>\n      count<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span> <span class="token operator">=</span> response<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> prefix <span class="token operator">+</span> types<span class="token punctuation">.</span><span class="token constant">SET_PAGINATION</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        startElement<span class="token punctuation">,</span>\n        pageSize<span class="token punctuation">,</span>\n        count<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> setPagination<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// ví dụ sử dụng</span>\n<span class="token keyword">const</span> setPostsPagination <span class="token operator">=</span> <span class="token function">setPaginationFor</span><span class="token punctuation">(</span><span class="token string">\'POSTS_\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> setCommentsPagination <span class="token operator">=</span> <span class="token function">setPaginationFor</span><span class="token punctuation">(</span><span class="token string">\'COMMENTS_\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nếu chúng ta dispatch ra 1 action là <code class="language-text">POSTS_SET_PAGINATION</code> nó sẽ chỉ đụng đến <code class="language-text">postsReducer</code>. Một kiểu viết hơi tricky nếu bạn nào chưa nắm được <a href="https://developer.mozilla.org/vi/docs/Web/JavaScript/Closures">Closure function</a> - mình có dịch trên MDN rồi, các bạn lên đó đọc lại.</p>\n<h1 id="tích-hợp-với-react"><a href="#t%C3%ADch-h%E1%BB%A3p-v%E1%BB%9Bi-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tích hợp với React</h1>\n<p>Ví dụ sử dụng selector và action creator</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> ConnectedComponent <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      users<span class="token punctuation">:</span> selectors<span class="token punctuation">.</span><span class="token function">getCurrentUsers</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      editingUser<span class="token punctuation">:</span> selectors<span class="token punctuation">.</span><span class="token function">getEditingUser</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n      setPagination<span class="token punctuation">:</span> actionCreatorFactories<span class="token punctuation">.</span><span class="token function">setPaginationFor</span><span class="token punctuation">(</span><span class="token string">\'USERS_\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">bindActionCreators</span><span class="token punctuation">(</span>actions<span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">(</span>UsersComponent<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Các component nó không cần quan tâm cái scope nào đang dùng với action và truy cập tới state bằng cách nào. Component giờ không cần quan tâm việc dữ liệu cụ thể bên trong state làm việc thế nào.</p>\n<p>Xem thêm</p>\n<ul>\n<li><a href="https://github.com/reactjs/reselect">Reselect</a> thư viện tạo selector</li>\n<li><a href="https://github.com/paularmstrong/normalizr">Normalizr</a> thư viện chuẩn hóa dữ liệu JSON</li>\n</ul>\n<p><a href="https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb">Toàn bộ vài viết</a></p>',
timeToRead:9,excerpt:"Đây là những chỉ dẫn của  AppNexus  để tối ưu redux với lượng dữ liệu khủng. Mức độ bài viết khá chuyên sâu, bạn cần nắm thật vững redux,…",frontmatter:{title:"Làm việc với Redux trong ứng dụng lớn",cover:"",date:"2018-10-04",category:null,tags:["javascript","react"],desc:"Cùng thảo luận xung quanh vấn đề ứng dụng thiên về dữ liệu lớn, rất lớn"},fields:{slug:"/2018-10-04-huong-dan-redux-voi-ung-dung-lon"}}},pathContext:{slug:"/2018-10-04-huong-dan-redux-voi-ung-dung-lon",prev:{frontmatter:{title:"Giới thiệu focus",desc:"Chúng ta nói về focus và làm cách nào chúng ta sử dụng nó trong ứng dụng web",type:"post",category:null,tags:["javascript","ux-ui"],date:"2018-10-05",cover:""},fields:{slug:"/2018-10-05-gioi-thieu-focus"}},next:{frontmatter:{title:"Xử lý tập dữ liệu lớn trong React",desc:"Tình huống: bạn có một table với rất nhiều dữ liệu đổ vào, nếu bạn thấy component đó render chậm trên màn hình, đó là lúc cần tái cấu trúc",type:"post",category:null,tags:["javascript","react"],date:"2018-10-03",cover:""},fields:{slug:"/2018-10-03-huong-dan-reactjs-table-du-lieu-lon"}}}}}});
//# sourceMappingURL=path---2018-10-04-huong-dan-redux-voi-ung-dung-lon-a0f4fc0f7263fe5ae2c3.js.map