webpackJsonp([4],{"./src/components/Bio/Bio.jsx":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.img,a=void 0===t?"":t,n=e.href,l=void 0===n?"":n,s=e.name,o=void 0===s?"":s,u=e.desc,i=void 0===u?"":u;return r.default.createElement("div",{className:"bio"},r.default.createElement(c.default,{to:l,className:"bio-wrapper"},r.default.createElement("div",{className:"bio-img"},r.default.createElement("img",{src:a,alt:o})),r.default.createElement("div",{className:"bio-content"},r.default.createElement("div",{className:"bio-name"},o),r.default.createElement("div",{className:"bio-desc"},i))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var s=a("./node_modules/react/react.js"),r=n(s),o=a("./node_modules/gatsby-link/index.js"),c=n(o);a("./src/components/Bio/Bio.scss"),e.exports=t.default},"./src/components/Bio/Bio.scss":function(e,t){},"./src/components/Bio/index.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("./src/components/Bio/Bio.jsx"),s=n(l);t.default=s.default,e.exports=t.default},"./src/components/Link.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.children,a=e.className,n=e.to;return r.default.createElement(c.default,{className:["link"].concat(a||[]).join(" "),to:n},t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var s=a("./node_modules/react/react.js"),r=n(s),o=a("./node_modules/gatsby-link/index.js"),c=n(o);e.exports=t.default},"./src/components/PostTags/PostTags.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.list,a=void 0===t?[]:t;return r.default.createElement("ul",{className:"tag-list"},a.map(function(e){return r.default.createElement("li",{key:e},r.default.createElement(c.default,{to:"/tags/"+e},e))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var s=a("./node_modules/react/react.js"),r=n(s),o=a("./node_modules/gatsby-link/index.js"),c=n(o);a("./src/components/PostTags/PostTags.scss"),e.exports=t.default},"./src/components/PostTags/PostTags.scss":function(e,t){},"./src/components/PostTags/index.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("./src/components/PostTags/PostTags.js"),s=n(l);t.default=s.default,e.exports=t.default},"./src/components/SocialShare/SocialShare.jsx":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.href,a=void 0===t?"":t,n=e.title,l=void 0===n?"":n,s=e.excerpt,o=void 0===s?"":s,c=e.img,u=void 0===c?"":c;return r.default.createElement("div",{className:"share-social-component"},r.default.createElement("div",{className:"ssc-label"},"Share"),r.default.createElement("div",{className:"ssc-buttons"},r.default.createElement("div",{className:"social-link-container"},r.default.createElement("a",{target:"_blank",href:"http://www.facebook.com/sharer.php?u="+a+"&ptitle="+l,className:"s-link s-facebook"},r.default.createElement("i",{className:"ion-social-facebook"}),r.default.createElement("span",{className:"s-name"},"Facebook")),r.default.createElement("a",{target:"_blank",href:"http://twitter.com/share?text="+encodeURI(l)+"&url="+a,className:"s-link s-twitter"},r.default.createElement("i",{className:"ion-social-twitter"})," ",r.default.createElement("span",{className:"s-name"},"Twitter")),r.default.createElement("a",{target:"_blank",href:"mailto:?subject="+l+"&amp;body="+a,className:"s-link s-email"},r.default.createElement("i",{className:"ion-android-mail"}),r.default.createElement("span",{className:"s-name"},"Email")))),r.default.createElement("meta",{itemProp:"name",content:l}),r.default.createElement("meta",{itemProp:"description",content:o}),r.default.createElement("meta",{itemProp:"image",content:u}),r.default.createElement("meta",{name:"twitter:title",content:l}),r.default.createElement("meta",{name:"twitter:description",content:o}),r.default.createElement("meta",{name:"twitter:image:src",content:u}),r.default.createElement("meta",{property:"og:title",content:l}),r.default.createElement("meta",{property:"og:type",content:"article"}),r.default.createElement("meta",{property:"og:url",content:a}),r.default.createElement("meta",{property:"og:image",content:u}),r.default.createElement("meta",{property:"og:description",content:o}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var s=a("./node_modules/react/react.js"),r=n(s),o=a("./node_modules/gatsby-link/index.js");n(o);a("./src/components/SocialShare/SocialShare.scss"),e.exports=t.default},"./src/components/SocialShare/SocialShare.scss":function(e,t){},"./src/components/SocialShare/index.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("./src/components/SocialShare/SocialShare.jsx"),s=n(l);t.default=s.default,e.exports=t.default},"./src/pages/images/profile.jpg":function(e,t,a){e.exports=a.p+"static/profile.77e132d4.jpg"},'./node_modules/babel-loader/lib/index.js?{"presets":["E:/anluu/luckyluu/node_modules/babel-preset-es2015/lib/index.js","E:/anluu/luckyluu/node_modules/babel-preset-react/lib/index.js","E:/anluu/luckyluu/node_modules/babel-preset-stage-2/lib/index.js","E:/anluu/luckyluu/node_modules/babel-preset-env/lib/index.js","E:/anluu/luckyluu/node_modules/babel-preset-stage-0/lib/index.js","E:/anluu/luckyluu/node_modules/babel-preset-react/lib/index.js"],"plugins":["E:/anluu/luckyluu/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","E:/anluu/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","E:/anluu/luckyluu/node_modules/babel-plugin-add-module-exports/lib/index.js","E:/anluu/luckyluu/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/templates/blog-post.js':function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a("./node_modules/react/react.js"),u=n(c),i=a("./node_modules/react-helmet/lib/Helmet.js"),d=n(i),m=a("./src/components/Link.js"),f=n(m),p=a("./src/components/PostTags/index.js"),b=n(p),E=a("./src/components/SocialShare/index.js"),g=n(E),h=a("./src/components/Bio/index.js"),v=n(h),_=a("./src/data/index.js"),y=a("./src/pages/images/profile.jpg"),j=n(y),x=a("./src/components/Header/index.js"),N=(n(x),a("./src/components/Navigation/index.js")),k=(n(N),a("./src/pages/images/logo.png")),S=(n(k),function(e){function t(e){l(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={sideBg:""},a}return r(t,e),o(t,[{key:"componentDidMount",value:function(){var e=document,t=e.createElement("script");t.src="https://luckyluu-blog.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}},{key:"getRandomArbitrary",value:function(e){return Math.floor(Math.random()*e+1)}},{key:"componentWillMount",value:function(e,t){var a=this.getRandomArbitrary(_.BG_SIDEBAR.length-1),n=_.BG_SIDEBAR[a];this.setState({sideBg:n})}},{key:"render",value:function(){var e=this.props.data.markdownRemark,t=this.props.pathContext,a=t.next,n=t.prev;return u.default.createElement("div",{className:"master"},u.default.createElement("div",{className:"inner"},u.default.createElement("div",{className:"single-post"},u.default.createElement(d.default,{title:"Blog - "+e.frontmatter.title,meta:[{name:"description",content:"Blog - "+e.frontmatter.desc},{name:"keywords",content:"frontend,developer,javascript,wordpress,react,hochiminh,web-developer"}]},u.default.createElement("script",{src:"https://luubinhan.github.io/blog/facebookcomment.js",defer:"true"})),u.default.createElement("div",{id:"fb-root"}),u.default.createElement("div",{className:"single-post-container"},u.default.createElement("article",null,u.default.createElement("header",null,u.default.createElement("h1",{className:"single-post-title"},e.frontmatter.title)),u.default.createElement("div",{className:"post-excert"},e.frontmatter.desc),u.default.createElement("aside",null,u.default.createElement("div",{className:"social-media-bar"},u.default.createElement(g.default,{href:e.frontmatter.path,title:e.frontmatter.title,excerpt:e.frontmatter.desc}))),u.default.createElement("div",{className:"blog-post"},u.default.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:e.html}}))),u.default.createElement(b.default,{list:e.frontmatter.tags||[]}),u.default.createElement(v.default,{name:_.SITE_CONFIG.companyName,desc:_.SITE_CONFIG.tagLine,href:"about",img:j.default}),u.default.createElement("div",{className:"fb-comments","data-href":""+_.SITE_CONFIG.siteUrl+e.frontmatter.path,"data-width":"720","data-numposts":"10"})),u.default.createElement("div",{className:"section section-below-post"},u.default.createElement("div",{className:"inner"},u.default.createElement("div",{id:"disqus_thread"}),u.default.createElement("div",{className:"read-next"},a&&u.default.createElement(f.default,{className:"read-next-story",to:a.frontmatter.path},u.default.createElement("section",{className:"post"},u.default.createElement("span",{className:"read-this-next"},"Đọc Tiếp"),u.default.createElement("h2",null,a.frontmatter.title))),n&&u.default.createElement(f.default,{className:"read-next-story prev",to:n.frontmatter.path},u.default.createElement("section",{className:"post"},u.default.createElement("span",{className:"you-might-enjoy"},"Đọc Tiếp"),u.default.createElement("h2",null,n.frontmatter.title)))))))),u.default.createElement("div",{className:"aside",style:{backgroundImage:"url("+this.state.sideBg+")"}},u.default.createElement("div",{className:"beatiful-post-name","data-text-shadow":e.frontmatter.title},e.frontmatter.title)))}}]),t}(u.default.Component));t.default=S;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-templates-blog-post-js-d9e47e2f643dc9ed852f.js.map