"use strict";(self["webpackChunkiodogs_vue"]=self["webpackChunkiodogs_vue"]||[]).push([[497],{9497:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var o=r(6252),n={class:"container"};function u(t,e,r,u,a,c){var s=(0,o.up)("CategoryDetails"),l=(0,o.up)("CatalogCard");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(s,{category:t.getCategoryBySlug(t.$route.params.slug)},null,8,["category"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.getProductsByCategory(t.$route.params.slug),(function(t){return(0,o.wg)(),(0,o.j4)(l,{key:t.slug,product:t},null,8,["product"])})),128))])}r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);var a=r(4942),c=r(8671),s=r(3577),l={class:"text-center"};function i(t,e,r,n,u,a){return(0,o.wg)(),(0,o.iD)("h1",l,(0,s.zw)(t.category.title),1)}var g=(0,o.aZ)({name:"CategoryDetails",props:{category:{type:[Object],default:function(){return{}}}}}),p=r(3744);const d=(0,p.Z)(g,[["render",i]]);var f=d,y=r(989);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=(0,o.aZ)({name:"IsleOfDogsCatalog",components:{CatalogCard:c.Z,CategoryDetails:f},computed:v({},(0,y.Se)(["getProductsByCategory","getCategoryBySlug"]))});const w=(0,p.Z)(O,[["render",u]]);var b=w},8671:function(t,e,r){r.d(e,{Z:function(){return d}});var o=r(6252),n=r(3577),u={class:"row"},a={class:"col-md-3"},c=["src","alt"],s={class:"col-md-9"};function l(t,e,r,l,i,g){var p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",a,[(0,o.Wm)(p,{to:{name:"Продукт",params:{slug:t.product.slug}}},{default:(0,o.w5)((function(){return[(0,o._)("img",{class:"img-fluid",style:{margin:"auto"},src:t.getCoverURL(),alt:t.getRusTitle()},null,8,c)]})),_:1},8,["to"])]),(0,o._)("div",s,[(0,o.Wm)(p,{to:{name:"Продукт",params:{slug:t.product.slug}}},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,n.zw)(t.product.rus_title),1)]})),_:1},8,["to"]),(0,o._)("p",null,(0,n.zw)(t.product.card_text),1)])])}var i=(0,o.aZ)({name:"CatalogCard",props:{product:{type:[Object],default:function(){return{}}}},methods:{getProductURL:function(){return"/item/"+this.product.slug},getCoverURL:function(){var t=this.product.images;return void 0!=t&&t.length>0?t[0].s3_small_file_path:"/no-image.png"},getRusTitle:function(){return this.product.rus_title}}}),g=r(3744);const p=(0,g.Z)(i,[["render",l]]);var d=p}}]);