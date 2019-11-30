webpackJsonp([0x5b720decab3d],{1578:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Đề bài: viết một hàm, nhận 2 tham số đầu vào, tham số thứ nhất là một mảng số, tham số thứ 2 là một số bất kỳ. Yêu cầu trả về một mảng gồm 2 phần tử trong mảng ban đầu và 2 phần tử này cộng lại bằng tham số thứ 2.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * @param {number[]} nums\n * @param {number} total\n * @return {number[]}\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// Solution here</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Ví dụ sử dụng hàm này bằng các input như bên dưới</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">input: nums = [1, 2, 3], total = 4\noutput: [1, 3]\n\ninput: nums = [3, 9, 12, 20], total = 21\noutput: [9, 12]</code></pre>\n      </div>\n<p>Chúng ta coi như mảng <code class="language-text">nums</code> truyền vào luôn là mảng số, ko cần kiểm trả kiểu giá trị của phần tử trong mảng, <code class="language-text">total</code> luôn là một con số mà 2 phần tử trong có thể cộng lại bằng. Tất là không có trường hợp ko tìm thấy cặp phần tử nào thỏa yêu cầu</p>\n<h2 id="phương-pháp-vét-cạn-không-bỏ-sót-em-nào"><a href="#ph%C6%B0%C6%A1ng-ph%C3%A1p-v%C3%A9t-c%E1%BA%A1n-kh%C3%B4ng-b%E1%BB%8F-s%C3%B3t-em-n%C3%A0o" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phương pháp: Vét cạn, không bỏ sót em nào</h2>\n<p>Lấy phần tử đầu tiên của <code class="language-text">nums</code>, duyệt qua toàn bộ các phần tử còn lại, xem có thằng nào cộng lại bằng <code class="language-text">total</code> không. Cứ làm điều tương tự với từng phần tử một trong mảng. </p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">/**\n * @param {number[]} nums\n * @param {number} total\n * @return {number[]}\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [9, 12]</span></code></pre>\n      </div>\n<p>Có 2 chỗ đáng quan tâm nếu chọn cách này</p>\n<ol>\n<li>Tại sao vòng lặp <strong>phải</strong> kết thúc ở <code class="language-text">i &lt; nums.length - 1</code> ?</li>\n<li>Tại sao vòng lặp bên trong nữa bắt đầu ở vị trí <code class="language-text">j = i +1</code> ?</li>\n</ol>\n<p>Cũng như cái tên của nó <strong>Vét cạn</strong>, chúng ta không bỏ sót trường hợp nào cả, ngay cả những trường hợp <strong>có thể bỏ qua</strong>. Độ khó của 2 vòng lặp lồng nhau như vậy là n mũ n<sub>2</sub>, nói cách khác, thời gian chạy của vòng lặp này tỉ lệ với bình phương số lượng các phần tử</p>\n<p>Giả dụ bạn có 100000 phần tử, thì số lần chạy của vòng lặp là 4999950000</p>\n<p>Nếu thích thì mấy bạn copy đoạn code này chạy thử</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> bigArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbigArr<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>\nbigArr<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> iterations <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> startTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      iterations<span class="token operator">++</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Iterations: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>iterations<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Time: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">twoSum</span><span class="token punctuation">(</span>bigArr<span class="token punctuation">,</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>5 triệu lần chạy này sẽ tốn khoảng 20 giây trên máy mình</p>\n<h2 id="phương-pháp-bảng-băm-sử-dụng-object-của-javascript"><a href="#ph%C6%B0%C6%A1ng-ph%C3%A1p-b%E1%BA%A3ng-b%C4%83m-s%E1%BB%AD-d%E1%BB%A5ng-object-c%E1%BB%A7a-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phương pháp bảng băm: sử dụng Object của javascript</h2>\n<p>Chúng ta có thể làm tốt hơn cách trên. Thay vì đặt vòng lặp lồng nhau, chạy qua các phần tử của <code class="language-text">nums</code> một lượt, đánh dấu các phần tử đã kiểm tra, bỏ vào làm key cho một object, kiểm tra phần tử trong <code class="language-text">nums</code> có tồn tại trong object hay chưa</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// object chứa những giá trị đã duyệt qua</span>\n  <span class="token keyword">const</span> previousValues <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// giá trị cần tìm</span>\n    <span class="token keyword">const</span> complement <span class="token operator">=</span> total <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// giá trị cần tìm có nằm ở lần duyệt trước đó</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousValues<span class="token punctuation">[</span>complement<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span>complement<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// lưu lại giá trị này vào object đã duyệt</span>\n    previousValues<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [9, 12]</span></code></pre>\n      </div>\n<p>Chúng ta chỉ còn một vòng lặp, vòng lặp thứ 2 bị thay thế bởi <code class="language-text">previousValues[complement]</code></p>\n<p>Đo lại tốc độ với cách làm này</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token number">100000</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> bigArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nbigArr<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>\nbigArr<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> iterations <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> startTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> previousValues <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    iterations<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> complement <span class="token operator">=</span> total <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousValues<span class="token punctuation">[</span>complement<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Iterations: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>iterations<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Time: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span>complement<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    previousValues<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">twoSum</span><span class="token punctuation">(</span>bigArr<span class="token punctuation">,</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Iterations: 100000 Time: 4ms</span></code></pre>\n      </div>\n<p>Không có chi là miễn phí, chúng ta tiết kiệm được thời gian chạy, nhưng phải bỏ ra một vùng nhớ để lưu object <code class="language-text">previousValues</code>, nếu lưu khoảng 1 triệu phần tử, dung lượng này cũng không nhỏ, khoản đâu đó 10MB RAM</p>\n<p><a href="https://nick.scialli.me/exploring-the-two-sum-interview-question-in-javascript/">https://nick.scialli.me/exploring-the-two-sum-interview-question-in-javascript/</a></p>',timeToRead:4,excerpt:"Đề bài: viết một hàm, nhận 2 tham số đầu vào, tham số thứ nhất là một mảng số, tham số thứ 2 là một số bất kỳ. Yêu cầu trả về một mảng gồm…",frontmatter:{title:"Giải bài toán cộng 2 số bằng javascript",cover:"",date:"2019-11-29",category:null,tags:["hoc-thuat","javascript"],desc:"Một đề bài cũng không mới, thông qua đó chúng ta sẽ biết thêm tí về cách sử dụng object sao cho hiệu quả"},fields:{slug:"/2019-11-29-giai-bai-toan-cong-so-trong-javascript"}}},pathContext:{slug:"/2019-11-29-giai-bai-toan-cong-so-trong-javascript",prev:!1,next:{frontmatter:{title:"Cách viết React render props",desc:"Một trong những pattern để chúng ta có thể sử dụng lại logic",type:"post",category:null,tags:["hoc-thuat","react"],date:"2019-11-27",cover:""},fields:{slug:"/2019-11-27-huong-dan-pattern-react-render-prop"}}}}}});
//# sourceMappingURL=path---2019-11-29-giai-bai-toan-cong-so-trong-javascript-4507704fabc6c92daf6a.js.map