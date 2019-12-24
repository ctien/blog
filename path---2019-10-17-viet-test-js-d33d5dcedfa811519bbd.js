webpackJsonp([31706589085151],{1566:function(n,s){n.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li><a href="#spy-m%E1%BB%99t-function">Spy một function</a></li>\n<li><a href="#test-c%C3%A1c-%C4%91o%E1%BA%A1n-code-b%E1%BA%A5t-%C4%91%E1%BB%93ng-b%E1%BB%99">Test các đoạn code bất đồng bộ</a></li>\n</ul>\n<!-- /TOC -->\n<p>Tại sao chúng ta phải viết test, trong khi code của chúng chạy đang ngon? Câu trả lời rất đơn giản, nó khiến chúng ta suy nghĩ cách chúng ta đang code, code như theo kiểu này hay kiểu kia thì hợp lý hơn, code sẽ <em>sạch</em> hơn, dễ bảo trì hơn</p>\n<p>Với một pure function siêu đơn giản</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>Lỡ đâu</em>, giá trị truyền vào của x và y là <code class="language-text">string</code>, chứ không phải <code class="language-text">number</code>, <em>lỡ đâu</em> chỉ có 1 tham số được truyền vào, <em>lỡ đâu</em> có 1 function khác phụ thuộc vào kết quả trả về của hàm này.</p>\n<p>Nếu bạn đặt được những câu hỏi <em>lỡ đâu</em> như thế thì code của bạn đã trở nên tốt hơn. Và để đặt được các câu hỏi <em>lỡ đâu</em> như thế, chỉ khi bạn bắt đầu nghĩ đến chuyện test function của mình.</p>\n<p>Một số kiểu test, bạn tưởng tượng vào thanh tra một nhà máy</p>\n<ul>\n<li><strong>Unit test</strong>: kiểm tra từng nhân viên có làm đúng nhiệm vụ, trách nhiệm được giao trong giờ làm việc không, có giao nhầm hợp đồng tình ái cho khách hàng đang cần hợp đồng dự án?</li>\n<li><strong>Integration test</strong>: kiểm tra một tổ sản xuất làm việc với nhau có hợp ru hợp rạ không, ông này có đi nói xấu ông kia, làm ảnh hưởng chất lượng của cả team</li>\n<li><strong>Acceptance test</strong>: các tổ sản xuất khi phối hợp vận hành có vấn đề gì không, trong môi trường thực tế, team marketing có đàn áp bóc lột đội sản xuất làm việc OT sấp mặt lờ, khiến team sản xuất chơi lại team marketing bằng cách làm việc đối phó không.</li>\n</ul>\n<p>Ở mức dev chúng ta chỉ cần quan tâm đến unit test là được, để chúng ta đảm bảo được rằng, một function (một nhân viên) thực hiện đúng nhiệm vụ chúng ta giao cho nó.</p>\n<p>Có nhiều thư viện để test, điểm chung các thư viện điều cho chúng ta những function, truyền vào <em>cái gì cũng được</em>, nó sẽ <strong>so sánh</strong> với một đối tượng khác</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should..."</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">"something truthy"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toExist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should..."</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token function">expect</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should..."</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token function">expect</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toThrow</span><span class="token punctuation">(</span><span class="token punctuation">[</span>error<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Những cái chúng ta <strong>expect</strong> từ output của một hàm, một object, một giá trị như vậy gọi là <strong>test case</strong></p>\n<p>Một khái niệm khác nữa trong test là <strong>test suite</strong>, giới phần mềm khoái đặt thêm lắm ngôn ngữ thật, có thể hiểu nó là một thư mục để gom các <strong>test case</strong> mà chúng ta thấy nó nếu không họ hàng gần thì cũng bà con xa.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// đây là một test suite</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"Wallet"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> wallet<span class="token punctuation">;</span>\n\t<span class="token keyword">var</span> five<span class="token punctuation">,</span> ten<span class="token punctuation">,</span> twenty<span class="token punctuation">,</span> hundred<span class="token punctuation">;</span>\n\t<span class="token comment">// trước khi chạy 1 test case, nó gọi hàm này trước</span>\n\t<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t   wallet <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\t   five <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> ten <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> twenty <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> hundred <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token comment">// test case 1</span>\n\t<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should be able to add bills"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\twallet<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>five<span class="token punctuation">,</span> ten<span class="token punctuation">,</span> twenty<span class="token punctuation">)</span>\n\t\t<span class="token function">expect</span><span class="token punctuation">(</span>wallet<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token comment">// test case 2</span>\n\t<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should be able to remove one bill"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t    wallet<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>five<span class="token punctuation">,</span> ten<span class="token punctuation">,</span> twenty<span class="token punctuation">)</span>\n\t    wallet<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>wallet<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n\t    <span class="token function">expect</span><span class="token punctuation">(</span>wallet<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token comment">// test case 3</span>\n\t<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should be able to calculate total"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t    wallet<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>five<span class="token punctuation">,</span> ten<span class="token punctuation">,</span> twenty<span class="token punctuation">,</span> hundred<span class="token punctuation">,</span> twenty<span class="token punctuation">,</span> five<span class="token punctuation">)</span>\n\t    total <span class="token operator">=</span> wallet<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">)</span>\n\t    <span class="token function">expect</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">160</span><span class="token punctuation">)</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="spy-một-function"><a href="#spy-m%E1%BB%99t-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Spy một function</h2>\n<p>Chúng ta có thể đặt chế độ theo dõi một anh nhân viên nào đó, để xem một ngày anh đi toilet bao nhiêu lần, đi xung quanh tán gái công ty bao nhiêu đứa</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// function để test</span>\n<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c\n<span class="token punctuation">}</span>\n<span class="token comment">// test suite</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"Add"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> addSpy<span class="token punctuation">,</span> result\n    <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t    <span class="token comment">// cử gián điệp theo dõi nhất cử lưỡng động của nhân viên tên **add**</span>\n\t    addSpy <span class="token operator">=</span> <span class="token function">spyOn</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">"add"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>and<span class="token punctuation">.</span><span class="token function">callThrough</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t    result <span class="token operator">=</span> <span class="token function">addSpy</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token comment">// tình hình nhân viên "add" đã có manh động</span>\n\t<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"the function has been called"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t   <span class="token function">expect</span><span class="token punctuation">(</span>addSpy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token comment">// kiểm tra kết quả</span>\n\t<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"can evaluate function execution"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token comment">// anh này có đi qua giới hạn không, hành động 2 lần là túm lại</span>\n\t<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"will only be executed once"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t    <span class="token function">expect</span><span class="token punctuation">(</span>addSpy<span class="token punctuation">.</span>calls<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="test-các-đoạn-code-bất-đồng-bộ"><a href="#test-c%C3%A1c-%C4%91o%E1%BA%A1n-code-b%E1%BA%A5t-%C4%91%E1%BB%93ng-b%E1%BB%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test các đoạn code bất đồng bộ</h2>\n<p>Muốn test các đoạn code chạy bất đồng bộ, những nhân viên thường xuyên phải làm việc ngoài đường như đội sale, kế toán, đôi khi họ ra ngoài một thời gian không xác định, khi nào họ mới về lại công ty? Các thư viện test sẽ dùng đến một thiết bị <em>chip</em> định vị <code class="language-text">done()</code>, nó sẽ báo cho chúng ta anh ấy đã về tới công ty sao khoản thời gian cafe ngoài đường.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Nhân viên này có việc cần đường đi khách</span>\n<span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.github.com/users/"</span> <span class="token operator">+</span> username<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"getUserInfo"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"return the correct name"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token string">"luckyluu"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n\t      <span class="token function">expect</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">"anluu"</span><span class="token punctuation">)</span>\n\t      <span class="token comment">// đặt chip ở đây</span>\n\t      <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span><span class="token punctuation">)</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Hy vọng các bạn học được nhiều điều hay ho từ bài viết này.</p>\n<p>Happy testing!</p>',timeToRead:4,excerpt:"Spy một function Test các đoạn code bất đồng bộ Tại sao chúng ta phải viết test, trong khi code của chúng chạy đang ngon? Câu trả lời rất…",frontmatter:{title:"Tổng quát về viết unit test cho FE",cover:"",date:"2019-10-17",category:null,tags:["javascript"],desc:"Cái nhìn tổng quát để bạn có thể bắt đầu làm quen với test, những khái niệm, vấn đề gặp thường xuyên khi viết test"},fields:{slug:"/2019-10-17-viet-test-js"}}},pathContext:{slug:"/2019-10-17-viet-test-js",prev:{frontmatter:{title:"7 Câu hỏi phỏng vấn lắc léo với Javascript",desc:"Thử kiến thức javascript của bạn đã đủ cho cuộc phỏng vấn cam go sắp tới chưa",type:"post",category:null,tags:["javascript"],date:"2019-10-18",cover:"https://dmitripavlutin.com/static/c4adb4f5373b24b71c1a3c87c806e39c/26b3e/people-at-interview.webp"},fields:{slug:"/2019-10-18-7-cau-hoi-phong-van-lac-leo-voi-js"}},next:{frontmatter:{title:"Đặt tên sao cho đẹp trong javascript",desc:"Cách nguyên tắc chung khi đặt tên trong javascript",type:"post",category:null,tags:["javascript"],date:"2019-10-14",cover:""},fields:{slug:"/2019-10-14-huong-dan-dat-ten-bien-trong-javascript"}}}}}});
//# sourceMappingURL=path---2019-10-17-viet-test-js-d33d5dcedfa811519bbd.js.map