(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{183:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return i});var n=a(7),r=(a(0),a(187)),o=a(192),c=a(196),i="505368667";e.default=function(t){return Object(n.b)(r.a,null,Object(n.b)(o.a,null),t.data.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(n.b)(c.a,{key:e.id,post:e})}))}},184:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(7),r=a(0),o=a.n(r),c=a(13),i=a.n(c),s=a(63),b=a.n(s);a.d(e,"a",function(){return b.a});a(185);var u=o.a.createContext({});function l(t){var e=t.staticQueryData,a=t.data,r=t.query,c=t.render,i=a?a.data:e[r]&&e[r].data;return Object(n.b)(o.a.Fragment,null,i&&c(i),!i&&Object(n.b)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,r=t.render,o=t.children;return Object(n.b)(u.Consumer,null,function(t){return Object(n.b)(l,{data:e,query:a,render:r||o,staticQueryData:t})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},185:function(t,e,a){var n;t.exports=(n=a(189))&&n.default||n},186:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a(195),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue","Helvetica","Arial","sans-serif"],o=new(a.n(n).a)({headerFontFamily:r,bodyFontFamily:r}),c=o.rhythm},187:function(t,e,a){"use strict";var n=a(7),r=a(188),o=a(0),c=a.n(o),i=a(184),s=a(194),b=a(186),u=a(190),l=a.n(u),d=a(191),p=a.n(d);e.a=function(t){var e=t.children;return Object(n.b)(i.b,{query:"32839212",render:function(t){var a=t.site.siteMetadata.social,r=a.medium,o=a.github;return Object(n.b)(s.ThemeToggler,null,function(t){var a=t.theme,s=t.toggleTheme;return Object(n.b)(c.a.Fragment,null,Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(b.a)(1),";text-align:right;")},Object(n.b)(i.a,{css:Object(n.a)("text-decoration:none;margin-left:",Object(b.a)(.5),";"),to:"/"},"Home"),Object(n.b)("a",{css:Object(n.a)("text-decoration:none;margin-left:",Object(b.a)(.5),";padding:",Object(b.a)(.25)," ",Object(b.a)(.5),";color:var(--bg);background-color:var(--textNormal);border-radius:5px;"),href:r,target:"_blank",rel:"noopener noreferrer"},"Medium"),Object(n.b)("a",{css:Object(n.a)("text-decoration:none;margin-left:",Object(b.a)(.5),";"),href:o,target:"_blank",rel:"noopener noreferrer"},"GitHub"),Object(n.b)("img",{src:"dark"===a?p.a:l.a,css:Object(n.a)("display:inline-block;cursor:pointer;width:25px;vertical-align:bottom;margin-bottom:0;margin-left:",Object(b.a)(.5),";"),onClick:function(){return s("dark"===a?"light":"dark")}})),Object(n.b)("div",{css:Object(n.a)("margin:0 auto;max-width:700px;padding:",Object(b.a)(2)," ",Object(b.a)(1),";")},e))})},data:r})}},188:function(t){t.exports={data:{site:{siteMetadata:{social:{github:"https://github.com/aofleejay",medium:"https://medium.com/@aofleejay/latest"}}}}}},189:function(t,e,a){"use strict";a.r(e);a(19);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=a(88),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=s},190:function(t,e,a){t.exports=a.p+"static/moon-e69b44d409556483a5b36e82531126ec.svg"},191:function(t,e,a){t.exports=a.p+"static/cloudy-1259b6d43da52a09b23caf706893e3f8.svg"},192:function(t,e,a){"use strict";var n=a(7),r=a(193),o=(a(0),a(197)),c=a.n(o),i=a(184),s=function(t){return Object(n.b)(i.b,{query:b,render:function(e){var a=t.title||e.site.siteMetadata.description,r=t.description||e.site.siteMetadata.description,o=t.author||e.site.siteMetadata.author,i=t.keywords||e.site.siteMetadata.keywords,s=t.slug||"/";return Object(n.b)(c.a,{title:a+" - "+e.site.siteMetadata.title},Object(n.b)("meta",{name:"description",content:r}),Object(n.b)("meta",{name:"author",content:o}),Object(n.b)("meta",{name:"keywords",content:i.join()}),Object(n.b)("meta",{property:"og:url",content:""+e.site.siteMetadata.siteUrl+s}),Object(n.b)("meta",{property:"og:title",content:a}),Object(n.b)("meta",{property:"og:description",content:r}),t.article&&Object(n.b)("meta",{property:"og:type",content:"article"}),t.image&&Object(n.b)("meta",{property:"og:image",content:""+e.site.siteMetadata.siteUrl+t.image}),Object(n.b)("meta",{property:"og:locale",content:"th_TH"}),Object(n.b)("meta",{property:"fb:app_id",content:e.site.siteMetadata.facebookAppID}))},data:r})};s.defaultProps={title:null,description:null,author:null,keywords:null,image:null,article:!1,slug:null};var b="1964596324";e.a=s},193:function(t){t.exports={data:{site:{siteMetadata:{title:"aofleejay",description:"เล่าหนังสือ | เล่าเกม",author:"Kunapot Pairat",keywords:["เล่าหนังสือ","เล่าเกม"],siteUrl:"https://aofleejay.com",facebookAppID:"489184495212718"}}}}},196:function(t,e,a){"use strict";a(18);var n=a(7),r=(a(0),a(184)),o=a(186),c={name:"nn640c",styles:"text-decoration:none;color:inherit;"},i={name:"qp4dny",styles:"color:#bbb;"},s={name:"nn640c",styles:"text-decoration:none;color:inherit;"},b={name:"nn640c",styles:"text-decoration:none;color:inherit;"};e.a=function(t){var e=t.post;return Object(n.b)("div",{css:Object(n.a)("margin-bottom:",Object(o.a)(2),";")},Object(n.b)(r.a,{css:c,to:e.fields.slug},Object(n.b)("h1",{css:Object(n.a)("margin-bottom:",Object(o.a)(.5),";")},e.frontmatter.title)),Object(n.b)("p",{css:i},e.frontmatter.date,Object(n.b)("span",{css:Object(n.a)("padding:0 ",Object(o.a)(.5),";")},"|"),e.frontmatter.tags.map(function(t){return Object(n.b)(r.a,{key:t,to:"/tags/"+t,css:s},Object(n.b)("span",null,t))})),Object(n.b)(r.a,{css:b,to:e.fields.slug},e.frontmatter.cover&&Object(n.b)("img",{src:e.frontmatter.cover.publicURL,alt:e.frontmatter.cover.name}),Object(n.b)("p",null,e.excerpt)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a2ab0b65aa4a4cf7b898.js.map