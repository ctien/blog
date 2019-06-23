webpackJsonp([6],{"./src/components/Footer/Footer.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("./node_modules/react/react.js"),u=o(i),c=n("./node_modules/prop-types/index.js"),d=o(c),p=n("./node_modules/gatsby-link/index.js"),f=o(p);n("./src/components/Footer/Footer.scss");var m=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.email,n=e.phone,o=e.companyName,a=e.showSiteMap,r=e.showContactInfo,l=new Date;return u.default.createElement("div",{id:"footer"},u.default.createElement("footer",{className:"footer"},u.default.createElement("section",{className:"footer-inner"},u.default.createElement("div",{className:"container"},r&&u.default.createElement("div",{className:"copyright"},"Contact : ",u.default.createElement("a",{href:"tel:"+n},n)," - Email: ",u.default.createElement("a",{href:"mailto:"+t},t)),u.default.createElement("div",{className:"credit"},"© Copyright ",l.getFullYear()," ",o,a&&u.default.createElement("span",{className:"sitemap-link"}," | ",u.default.createElement(f.default,{to:"/sitemap"},"Sitemap")))))))}}]),t}(i.Component);m.propTypes={email:d.default.string,phone:d.default.string,companyName:d.default.string,showSiteMap:d.default.bool,showContactInfo:d.default.bool},m.defaultProps={email:"",phone:"",companyName:"",showSiteMap:!0,showContactInfo:!1},t.default=m,e.exports=t.default},"./src/components/Footer/Footer.scss":function(e,t){},"./src/components/Footer/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("./src/components/Footer/Footer.js"),r=o(a);t.default=r.default,e.exports=t.default},"./src/config.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SITE_CONFIG={companyName:"luckyluu",tagLine:"Front-End Developer live in Ho Chi Minh City, a photography geek, and a music lover",email:"luubinhan1990@gmail.com",phone:"0943 870 301",twitter:"https://twitter.com/luubinhan",linkedin:"https://www.linkedin.com/in/l%C6%B0u-b%C3%ACnh-an-03556553/"}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/xampp/htdocs/luckyluu/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/xampp/htdocs/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/xampp/htdocs/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/xampp/htdocs/luckyluu/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["C:/xampp/htdocs/luckyluu/node_modules/babel-preset-env/lib/index.js","C:/xampp/htdocs/luckyluu/node_modules/babel-preset-stage-0/lib/index.js","C:/xampp/htdocs/luckyluu/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("./node_modules/react/react.js"),u=o(i),c=n("./node_modules/gatsby-link/index.js"),d=o(c),p=n("./node_modules/react-helmet/lib/Helmet.js"),f=o(p);n("./src/styles/main.scss");var m=n("./src/components/Header/index.js"),b=(o(m),n("./src/components/Footer/index.js")),y=o(b),h=n("./src/components/Navigation/index.js"),g=o(h),_=n("./src/config.js"),j=n("./src/data/data.js"),v=n("./src/pages/images/logo.png"),E=o(v),w=n("./src/pages/images/bg1.jpg"),x=(o(w),n("./src/pages/images/bg4.jpg")),C=o(x),N=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sideBg:""},n}return l(t,e),s(t,[{key:"getRandomArbitrary",value:function(e,t){return Math.random()*(t-e)+e}},{key:"componentDidMount",value:function(){var e=this.getRandomArbitrary(0,1),t=[],n=t[e];this.setState({sideBg:n})}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=(e.location,e.children);e.sideBg;return u.default.createElement("div",{className:"layout-blog"},u.default.createElement(f.default,{title:"About luckyluu | FrontEnd Developer live in Ho Chi Minh City",meta:[{name:"description",content:"luckyluu FrontEnd Developer live in Ho Chi Minh City"},{name:"keywords",content:"frontend,developer,wordpress,react,hochiminh,web-developer"}]}),u.default.createElement("div",{className:"sidebar"},u.default.createElement("div",{className:"inner"},u.default.createElement(d.default,{to:"/",className:"go-home"},u.default.createElement("img",{src:E.default,alt:_.SITE_CONFIG.companyName})),u.default.createElement(g.default,{items:j.PRIMARY_NAVIGATION,cssClass:"primary-menu"})),u.default.createElement(y.default,{email:_.SITE_CONFIG.email,phone:_.SITE_CONFIG.phone,companyName:_.SITE_CONFIG.companyName,showSiteMap:!1})),u.default.createElement("div",{className:"master"},u.default.createElement("div",{className:"inner"},t())),u.default.createElement("div",{className:"aside",style:{backgroundImage:"url("+C.default+")"}},u.default.createElement("div",{className:"inner"})))}}]),t}(u.default.Component);N.propTypes={location:u.default.PropTypes.object,route:u.default.PropTypes.object},t.default=N,e.exports=t.default},"./src/pages/images/bg1.jpg":function(e,t,n){e.exports=n.p+"static/bg1.e2f287dd.jpg"},"./src/pages/images/bg4.jpg":function(e,t,n){e.exports=n.p+"static/bg4.37a1ef2b.jpg"},"./src/styles/main.scss":function(e,t){}});
//# sourceMappingURL=layout-component---index-d908e28ce6008f12a26d.js.map