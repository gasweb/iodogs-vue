"use strict";(self["webpackChunkiodogs_vue"]=self["webpackChunkiodogs_vue"]||[]).push([[880],{1817:function(t,e,r){var n=r(2109),o=r(9781),i=r(7854),u=r(1702),c=r(2597),l=r(614),a=r(7976),s=r(1340),d=r(3070).f,p=r(9920),g=i.Symbol,f=g&&g.prototype;if(o&&l(g)&&(!("description"in f)||void 0!==g().description)){var v={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),e=a(f,this)?new g(t):void 0===t?g():g(t);return""===t&&(v[e]=!0),e};p(m,g),m.prototype=f,f.constructor=m;var b="Symbol(test)"==String(g("test")),y=u(f.toString),w=u(f.valueOf),O=/^Symbol\((.*)\)[^)]+$/,h=u("".replace),_=u("".slice);d(f,"description",{configurable:!0,get:function(){var t=w(this),e=y(t);if(c(v,t))return"";var r=b?_(e,7,-1):h(e,O,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}},5298:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var n=r(6252),o={class:"container"};function i(t,e,r,i,u,c){var l=(0,n.up)("LineDetail"),a=(0,n.up)("CatalogCard");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(l,{line:t.getLineBySlug(t.$route.params.slug)},null,8,["line"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.getProductsByLine(t.$route.params.slug),(function(t){return(0,n.wg)(),(0,n.j4)(a,{key:t.slug,product:t},null,8,["product"])})),128))])}r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);var u=r(4942),c=r(9921),l=(r(1817),r(3577)),a={class:"jumbotron"};function s(t,e,r,o,i,u){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("h1",null,(0,l.zw)(t.line.title),1),(0,n._)("div",a,[(0,n._)("p",null,(0,l.zw)(t.line.description),1)])],64)}var d=(0,n.aZ)({name:"LineDetail",props:{line:{type:[Object],default:function(){return{}}}}}),p=r(3744);const g=(0,p.Z)(d,[["render",s]]);var f=g,v=r(989);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){(0,u.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=(0,n.aZ)({name:"LineCatalog",components:{CatalogCard:c.Z,LineDetail:f},computed:b({},(0,v.Se)(["getProductsByLine","getLineBySlug"]))});const w=(0,p.Z)(y,[["render",i]]);var O=w},9921:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(6252),o=r(3577),i={class:"row"},u={class:"col-md-3"},c=["src","alt"],l={class:"col-md-9"},a=["href"];function s(t,e,r,s,d,p){var g=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",u,[(0,n.Wm)(g,{to:t.getProductURL()},{default:(0,n.w5)((function(){return[(0,n._)("img",{class:"img-fluid",style:{margin:"auto"},src:t.getCoverURL(),alt:t.getRusTitle()},null,8,c)]})),_:1},8,["to"])]),(0,n._)("div",l,[(0,n._)("a",{class:"bold",href:t.getProductURL()},(0,o.zw)(t.product.rus_title),9,a),(0,n._)("p",null,(0,o.zw)(t.product.card_text),1)])])}var d=(0,n.aZ)({name:"CatalogCard",props:{product:{type:[Object],default:function(){return{}}}},methods:{getProductURL:function(){return"/item/"+this.product.slug},getCoverURL:function(){var t=this.product.images;return void 0!=t&&t.length>0?t[0].s3_small_file_path:"/no-image.png"},getRusTitle:function(){return this.product.rus_title}}}),p=r(3744);const g=(0,p.Z)(d,[["render",s]]);var f=g}}]);