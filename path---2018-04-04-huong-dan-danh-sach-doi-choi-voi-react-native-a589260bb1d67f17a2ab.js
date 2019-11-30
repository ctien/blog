webpackJsonp([0x63ada96966f4],{1392:function(t,e){t.exports={data:{markdownRemark:{html:'<!-- TOC -->\n<ul>\n<li>\n<p><a href="#%C4%91%E1%BB%93-ch%C6%A1i-development">đồ chơi Development</a></p>\n<ul>\n<li><a href="#sdk">SDK</a></li>\n<li><a href="#check-code-chu%E1%BA%A9n">Check code chuẩn</a></li>\n<li><a href="#debugging">Debugging</a></li>\n</ul>\n</li>\n<li><a href="#boilerplate-v%C3%A0-ui-frameworks">Boilerplate và UI Frameworks</a></li>\n<li><a href="#th%C6%B0-vi%E1%BB%87n-v%C3%A0-components">Thư viện và components</a></li>\n<li>\n<p><a href="#web-services">Web Services</a></p>\n<ul>\n<li><a href="#database">Database</a></li>\n<li><a href="#analytics">Analytics</a></li>\n<li><a href="#push-notifications">Push Notifications</a></li>\n<li><a href="#code-update">Code update</a></li>\n</ul>\n</li>\n</ul>\n<!-- /TOC -->\n<h2 id="đồ-chơi-development"><a href="#%C4%91%E1%BB%93-ch%C6%A1i-development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>đồ chơi Development</h2>\n<h3 id="sdk"><a href="#sdk" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SDK</h3>\n<p>Chưa ai qua mặt được <a href="https://expo.io/">Expo</a>. Expo cho phép dựng app mà ko cần Android Studio hay Xcode.</p>\n<p>Workflow để làm việc với Expo</p>\n<ol>\n<li>Tạo project mới sử dụng <a href="https://github.com/react-community/create-react-native-app">create-react-native-app</a></li>\n<li>Code, code và code...</li>\n<li>Chạy thử bằng Expo app có thể tìm thấy trong app store, google play</li>\n</ol>\n<p>Không cần kết nối điện thoại với máy tính, chỉ cần điện thoại kết nối cùng mạng với localhost đang chạy, điện thoại có cài Expo app, scan đoạn QR code trên command line là được.</p>\n<p>Điều hạn chế của Expo là nó ko cho phép cài thêm một số package khác nữa ngoài những package đã được cài sẵn của Expo như Camera, Facebook, Map. Trường hợp cần những package này, sử dụng <code class="language-text">react-native init</code>, lúc đó bạn phải handle mọi thứ, phức tạp hơn dùng Expo.</p>\n<h3 id="check-code-chuẩn"><a href="#check-code-chu%E1%BA%A9n" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Check code chuẩn</h3>\n<p>Nếu bị nghiện code cho chuẩn như lê duẩn, ESLint là người bạn đồng hành, mình hay sử dụng bộ style guide cấu hình sẵn của <a href="https://github.com/airbnb/javascript">Airbnb\'s Javascript Style Guide</a>.</p>\n<p>Nếu sử dụng ESLint thì mình nghĩ bạn nên dùng thêm một số plugin của VSCode hay Atom, một số plugin của Sublime text mình cài về thì chạy không như ý lắm.</p>\n<h3 id="debugging"><a href="#debugging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Debugging</h3>\n<p>Ứng dụng chạy trên desktop <a href="https://infinite.red/reactotron">Reactotron</a> cho phép debug React và React Native với những tính năng như: inspecting, mofifying, subscribing, tracking HTTP, đo performance ứng dụng, track error...</p>\n<h2 id="boilerplate-và-ui-frameworks"><a href="#boilerplate-v%C3%A0-ui-frameworks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Boilerplate và UI Frameworks</h2>\n<p><a href="https://github.com/bartonhammond/snowflake">Snowflake</a> bao gồm cả Frontend đến Back-End code của ứng dụng, một lựa chọn tốt để bắt đầu dự án mới nhanh nhất.</p>\n<p>React Native có sẵn một số components UI cơ bản, nếu muốn custome style thì chúng ta phải viết thêm CSS, còn không, nếu muốn nhiều hơn những component đã được viết sẵn, màu mè hoa lá hẹ hết rồi thì có thể dùng <a href="https://nativebase.io/">NativeBase</a> tương đối kế thừa khái niệm của Bootstrap, hoặc React Native Kittens có một số components cũng hay ho.</p>\n<h2 id="thư-viện-và-components"><a href="#th%C6%B0-vi%E1%BB%87n-v%C3%A0-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thư viện và components</h2>\n<p>Làm navigation thì nghĩ ngày đến <a href="https://reactnavigation.org/">React navigatio</a> của chính facebook luôn.</p>\n<p>Quản lý state thì dùng <a href="http://mobx.js.org/">Mobx</a> hoặc <a href="http://redux.js.org/">Redux</a>, redux thì thường cho những dữ liệu nhiều và lớn, năm 2018 chúng ta sẽ vẫn sử dụng Redux nhé, đừng tưởng là nó đã cũ và có cái khác thay thế.</p>\n<p><a href="https://github.com/oblador/react-native-animatable">Animatable</a> rất có ích khi muốn làm animation cho layout hay mấy cái micro animation trên component.</p>\n<p>Một số UI Components khác có thể tham khảo</p>\n<ul>\n<a href="https://github.com/christopherdro/react-native-calendar" rel="external" target="_blank" rel="noopener noreferrer"><strong>react-native-calendar</strong></a></li>\n<li>\n<a href="https://github.com/xgfe/react-native-datepicker" target="_self"><strong>react-native-</strong></a><a href="https://github.com/xgfe/react-native-datepicker" target="_self"><strong>datepicker</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-progress" rel="external" target="_blank"><strong>react-native-progress</strong></a></li>\n<li>\n<a href="https://github.com/maxs15/react-native-spinkit" rel="external" target="_blank"><strong>react-native-spinkit</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-vector-icons" rel="external" target="_blank"><strong>Vector Icons</strong></a></li>\n<li>\n<a href="https://github.com/leecade/react-native-swiper" rel="external" target="_blank"><strong>react-native-swiper</strong></a></li>\n<li>\n<a href="https://github.com/skv-headless/react-native-scrollable-tab-view" rel="external" target="_blank"><strong>react-native-scrollable-tab-view</strong></a></li>\n<li>\n<a href="https://github.com/oblador/react-native-lightbox" rel="external" target="_blank"><strong>react-native-lightbox</strong></a></li>\n<li>\n<a href="https://github.com/airbnb/react-native-maps" rel="external" target="_blank"><strong>react-native-maps</strong></a></li>\n<li>\n<a href="https://github.com/sghiassy/react-native-sglistview" rel="external" target="_blank"><strong>SGListView</strong></a></li>\n<li>\n<a href="https://github.com/jaredpalmer/formik" rel="external" target="_blank"><strong>Formik</strong></a></li>\n<li>\n<a href="https://github.com/AlexanderZaytsev/react-native-i18n" rel="external" target="_blank"><strong>react-native-i18n</strong></a></li>\n<li>\n<a href="https://github.com/zo0r/react-native-push-notification" rel="external" target="_blank"><strong>react-native-push-notification</strong></a></li>\n<li>\n<strong><a href="https://community.algolia.com/react-instantsearch/" rel="external" target="_blank">InstantSearch</a></strong></li>\n<li>\n<a href="https://github.com/itinance/react-native-fs" rel="external" target="_blank"><strong>react-native-fs</strong></a></li>\n<li>\n<strong><a href="https://github.com/lwansbrough/react-native-camera" rel="external" target="_blank">react-native-camera</a></strong></li>\n<li>\n<strong><a href="https://github.com/react-native-community/react-native-video" rel="external" target="_blank">react-native-video</a></strong></li>\n<li>\n<strong><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">react-native-</a><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">sqlite</a><a href="https://github.com/andpor/react-native-sqlite-storage" rel="external" target="_blank">-storage</a></strong></li>\n<li>\n<a href="https://github.com/thewei/react-native-store" rel="external" target="_blank"><strong>react-native-store</strong></a></li>\n<li>\n<strong><a href="https://github.com/oney/react-native-webrtc" rel="external" target="_blank">react-native-</a><a href="https://github.com/oney/react-native-webrtc" rel="external" target="_blank">webrtc</a></strong></li>\n</ul>\n<h2 id="web-services"><a href="#web-services" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Web Services</h2>\n<h3 id="database"><a href="#database" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Database</h3>\n<p><a href="https://realm.io/">Realm</a> real-time database chuyên cho mobile app, bào gồm các tính năng như two-way data sync, offline-first, data push.</p>\n<p>Nếu Realm có quá nhiều tính năng ko dùng đến, thì có thể sử dụng <a href="https://facebook.github.io/react-native/docs/asyncstorage.html">AsyncStorage</a> đi kèm React Native</p>\n<h3 id="analytics"><a href="#analytics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Analytics</h3>\n<p><a href="https://get.fabric.io/">Fabric</a> bộ công cụ tất cả trong một hoặc nếu thích Google Analytics thì có nhiều <a href="https://github.com/idehub/react-native-google-analytics-bridge">thư viện khác</a> hỗ trợ</p>\n<h3 id="push-notifications"><a href="#push-notifications" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Push Notifications</h3>\n<p>Cái này thì ko có nhiều service lắm, nói cách khác <a href="https://firebase.google.com/docs/cloud-messaging/">Firebase Cloud Messaging</a> (trước đây là Google Cloud Messaging) gần như thống trị, để sử dụng FCM chúng ta sẽ cần tới <a href="https://github.com/evollu/react-native-fcm">react-native-fcm package</a></p>\n<h3 id="code-update"><a href="#code-update" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code update</h3>\n<p><a href="https://microsoft.github.io/code-push/">CodePush</a> cho phép deploy code mới nhất trực tiếp đến device của user, nó giống như kho trung tâm, nơi chúng ta quăng hết HTML, CSS, Javascript, assets lên đó hết. Thông qua CodePush chúng ta không cần upload những thay đổi lên app store và đợi user chọn update ứng dụng. Sử dụng với đống <a href="https://github.com/Microsoft/react-native-code-push">thư viện này</a> </p>',timeToRead:6,excerpt:"đồ chơi Development SDK Check code chuẩn Debugging Boilerplate và UI Frameworks Thư viện và components Web Services Database Analytics Push…",frontmatter:{title:"Danh sách đồ chơi để bắt đầu với React Native",cover:"",date:"2018-04-04",category:null,tags:["javascript","react","react-native"],desc:"Để bắt đầu và đào sâu vọc vạch với React Native, bạn sẽ cần đụng tới những món đồ chơi sau"},fields:{slug:"/2018-04-04-huong-dan-danh-sach-doi-choi-voi-react-native"}}},pathContext:{slug:"/2018-04-04-huong-dan-danh-sach-doi-choi-voi-react-native",prev:{frontmatter:{title:"Chém gió: Tại sao tui vẫn thích Firefox",desc:"Không biết bạn sinh ra từ thuở nào, nhưng tui là thế hệ 8x, thời điểm mà Firefox nổi lên - rồi chìm xuống",type:"post",category:null,tags:["ux-ui"],date:"2018-04-05",cover:""},fields:{slug:"/2018-04-05-huong-dan-tai-sao-tui-van-thich-firefox"}},next:{frontmatter:{title:"Query String với React Router",desc:"Cách sử dụng query string với React Router siêu căn bản",type:"post",category:null,tags:["javascript","react"],date:"2018-03-29",cover:""},fields:{slug:"/2018-03-29-huong-dan-query-string-voi-react-router"}}}}}});
//# sourceMappingURL=path---2018-04-04-huong-dan-danh-sach-doi-choi-voi-react-native-a589260bb1d67f17a2ab.js.map