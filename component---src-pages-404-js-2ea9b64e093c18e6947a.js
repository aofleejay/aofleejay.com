(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(t,e,n){"use strict";n.r(e);var a=n(8),r=(n(0),n(151)),i=n(159),o=n(4),c=n.n(o),s=n(160),u=n.n(s),d=n(149);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return Object(a.b)(d.StaticQuery,{query:p,render:function(t){var i=e||t.site.siteMetadata.description;return Object(a.b)(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:i})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var b=l,p="1025518380";e.default=function(){return Object(a.b)(r.a,null,Object(a.b)(b,{title:"404: Not found"}),Object(a.b)("h1",null,"NOT FOUND"),Object(a.b)("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(t,e,n){var a;t.exports=(a=n(152))&&a.default||a},149:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return y}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(8),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(147),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var d=n(148),l=n.n(d);n.d(e,"PageRenderer",function(){return l.a});var b=n(33);n.d(e,"parsePath",function(){return b.a});var p=i.a.createContext({}),f=function(t){return Object(a.b)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(153),r=n.n(a),i=n(154),o=n.n(i),c=new r.a(o.a),s=c.rhythm},151:function(t,e,n){"use strict";var a=n(8),r=(n(0),n(149)),i=n(150),o={name:"180pfyr",styles:"display:inline-block;margin-right:1rem;"},c=function(t){var e=t.to,n=t.children;return Object(a.b)("li",{css:o},Object(a.b)(r.Link,{to:e},n))},s={name:"1fobf8d",styles:"margin-bottom:1.5rem;"},u={name:"1vofbp7",styles:"list-style:none;float:right;"};e.a=function(t){var e=t.children;return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(i.a)(2),";padding-top:",Object(i.a)(1.5),";")},Object(a.b)("header",{css:s},Object(a.b)(r.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(i.a)(2),";display:inline-block;font-style:normal;")},"Home")),Object(a.b)("ul",{css:u},Object(a.b)(c,{to:"/about/"},"About"),Object(a.b)(c,{to:"/contact/"},"Contact"))),e)}},152:function(t,e,n){"use strict";n.r(e);n(51);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},159:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"My personal blog.",author:"Kunapot Pairat"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-2ea9b64e093c18e6947a.js.map