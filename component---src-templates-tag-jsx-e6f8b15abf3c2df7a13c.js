webpackJsonp([0xa6cd3c51205b],{63:function(e,t){function n(e,t){return e+r(o()*(t-e+1))}var r=Math.floor,o=Math.random;e.exports=n},62:function(e,t,n){var r=n(67),o=r(Object.keys,Object);e.exports=o},61:function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},64:function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},67:function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},77:function(e,t){function n(e){return e}e.exports=n},69:function(e,t){var n=Array.isArray;e.exports=n},70:function(e,t,n){function r(e){return null!=e&&a(e.length)&&!o(e)}var o=n(72),a=n(73);e.exports=r},40:function(e,t,n){function r(e){if(null==e)return!0;if(c(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||l(e)||u(e)))return!e.length;var t=a(e);if(t==p||t==d)return!e.size;if(f(e))return!o(e).length;for(var n in e)if(y.call(e,n))return!1;return!0}var o=n(62),a=n(64),u=n(68),i=n(69),c=n(70),s=n(71),f=n(66),l=n(75),p="[object Map]",d="[object Set]",m=Object.prototype,y=m.hasOwnProperty;e.exports=r},72:function(e,t,n){function r(e){if(!a(e))return!1;var t=o(e);return t==i||t==c||t==u||t==s}var o=n(61),a=n(74),u="[object AsyncFunction]",i="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";e.exports=r},73:function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},74:function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},76:function(e,t,n){function r(e,t,n){if(n&&"boolean"!=typeof n&&a(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=u(e),void 0===t?(t=e,e=0):t=u(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var f=s();return c(e+f*(t-e+i("1e-"+((f+"").length-1))),t)}return o(e,t)}var o=n(63),a=n(65),u=n(77),i=parseFloat,c=Math.min,s=Math.random;e.exports=r},75:function(e,t){function n(){return!1}e.exports=n},65:function(e,t){function n(){return!1}e.exports=n},71:function(e,t){function n(){return!1}e.exports=n},68:function(e,t){function n(){return!1}e.exports=n},66:function(e,t){function n(){return!1}e.exports=n},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),c=r(i),s=n(6),f=r(s),l=n(10),p=r(l),d=n(52),m=r(d);n(78);var y=function(e){function t(n){return o(this,t),a(this,e.call(this,n))}return u(t,e),t.prototype.render=function(){var e=this.props,t=(e.id,e.title),n=e.desc,r=e.href,o=e.img,a=e.date,u=e.tags;return c.default.createElement("div",{className:"mystyle-item-post"},c.default.createElement("article",{className:"item-post clearfix ",itemType:"http://schema.org/NewsArticle"},o&&c.default.createElement("figure",{className:"the-post-thumbnail","aria-label":"media",role:"group",itemProp:"associatedMedia",itemID:o,itemType:"http://schema.org/ImageObject"},c.default.createElement(p.default,{to:r},c.default.createElement("img",{src:o,alt:t,itemProp:"thumbnailUrl"}))),c.default.createElement("section",{className:"the-post-content"},c.default.createElement("header",{className:"heading-post",itemProp:"headline"},c.default.createElement(p.default,{to:r},t)),""!==n&&c.default.createElement("footer",{className:"post-excert",itemProp:"description"},n),c.default.createElement(m.default,{datetime:a,tags:u}))))},t}(i.Component);y.propTypes={title:f.default.string.isRequired,desc:f.default.string,href:f.default.string.isRequired,img:f.default.string,date:f.default.string,tags:f.default.array},y.defaultProps={desc:"",date:"",img:""},t.default=y,e.exports=t.default},78:function(e,t){},50:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(49),a=r(o);t.default=a.default,e.exports=t.default},107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),c=r(i),s=n(10),f=(r(s),n(50)),l=r(f),p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,desc:t.node.frontmatter.desc,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return c.default.createElement("div",null,e.map(function(e){return c.default.createElement(l.default,{key:e.slug,title:e.title,desc:e.desc,date:e.date,href:e.path,tags:e.tags})}))},t}(c.default.Component);t.default=p,e.exports=t.default},51:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(40),c=r(i),s=n(2),f=r(s),l=n(6),p=r(l),d=n(10),m=r(d);n(79);var y=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.datetime,n=e.tags;return f.default.createElement("div",{className:"post-meta"},""!==t&&f.default.createElement("div",{className:"post-date"},f.default.createElement("time",{className:"dateline",dateTime:t,itemProp:"dateModified",content:t},t)),!(0,c.default)(n)&&f.default.createElement("div",{className:"post-category"},n.map(function(e){return f.default.createElement(m.default,{activeClassName:"active",key:e,to:"/tags/"+e},e)})))},t}(s.Component);y.propTypes={datetime:p.default.string,tags:p.default.array},y.defaultProps={datetime:""},t.default=y,e.exports=t.default},79:function(e,t){},52:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(51),a=r(o);t.default=a.default,e.exports=t.default},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(76),c=r(i),s=n(2),f=r(s),l=n(23),p=r(l),d=n(107),m=r(d),y=n(15),h=r(y),b=n(48),g=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={sideBg:b.bgSidebar[(0,c.default)(b.bgSidebar.length-1)]},r}return u(t,e),t.prototype.render=function(){var e=this.props.pathContext.tag,t=this.props.data.allMarkdownRemark.edges;return f.default.createElement("div",{className:"master"},f.default.createElement(p.default,{title:'Posts tagged as "'+e+'" | '+h.default.siteTitle}),f.default.createElement("div",{className:"inner"},f.default.createElement(m.default,{postEdges:t})),f.default.createElement("div",{className:"aside",style:{backgroundImage:"url("+this.state.sideBg+")"}},f.default.createElement("div",{className:"company-info tag"},f.default.createElement("div",{className:"company-name"},"TAGS"))))},t}(f.default.Component);t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-e6f8b15abf3c2df7a13c.js.map