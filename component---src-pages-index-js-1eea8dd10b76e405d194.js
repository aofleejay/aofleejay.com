(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return s});var n=a(0),r=a.n(n),i=a(145),o=a(147),c=a(148),u=a(150),s="413260344";e.default=function(t){var e=t.data;return r.a.createElement(c.a,null,r.a.createElement(u.a,null),r.a.createElement("h4",null,e.allMarkdownRemark.totalCount," Posts"),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return r.a.createElement("div",{key:e.id},r.a.createElement(i.Link,{to:e.fields.slug,style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h3",{style:{marginBottom:Object(o.a)(.25)}},e.frontmatter.title," ",r.a.createElement("span",{style:{color:"#bbb"}},"— ",e.frontmatter.date)),r.a.createElement("p",null,e.excerpt)))}))}},145:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),u=a.n(c);a.d(e,"Link",function(){return u.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var s=a(146),l=a.n(s);a.d(e,"PageRenderer",function(){return l.a});var d=a(32);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},147:function(t,e,a){"use strict";a.d(e,"a",function(){return u});var n=a(152),r=a.n(n),i=a(153),o=a.n(i),c=new r.a(o.a),u=c.rhythm},148:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(145),o=a(147);e.a=function(t){var e=t.children;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:700,padding:Object(o.a)(2),paddingTop:Object(o.a)(1.5)}},r.a.createElement("header",{style:{marginBottom:"1.5rem"}},r.a.createElement(i.Link,{to:"/"},"Home"),r.a.createElement(i.Link,{to:"/about/",style:{float:"right"}},"About")),e)}},149:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),u=a(2),s=function(t){var e=t.location,a=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},150:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(154),s=a.n(u),l=a(145);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+t.site.siteMetadata.title,defaultTitle:t.site.siteMetadata.title+" - "+t.site.siteMetadata.description,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={description:void 0,lang:"th",meta:[],keywords:[],title:void 0},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string},e.a=d;var p="1025518380"},151:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"My personal blog.",author:"Kunapot Pairat"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1eea8dd10b76e405d194.js.map