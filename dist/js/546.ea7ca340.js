(self["webpackChunkiodogs_vue"]=self["webpackChunkiodogs_vue"]||[]).push([[546],{8309:function(e,t,r){var n=r(9781),c=r(6530).EXISTS,o=r(1702),i=r(3070).f,s=Function.prototype,u=o(s.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,a=o(l.exec),d="name";n&&!c&&i(s,d,{configurable:!0,get:function(){try{return a(l,u(this))[1]}catch(e){return""}}})},1907:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(6252),c=r(3577),o=["href"],i=["src"],s=(0,n._)("br",null,null,-1),u=["href"];function l(e,t,r,l,a,d){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("a",{href:e.getBreedURL(),class:""},[(0,n._)("img",{src:e.getCoverURL(),alt:"",style:{width:"200px"},class:"img-fluid rounded"},null,8,i)],8,o),s,(0,n._)("a",{href:e.getBreedURL(),class:""},(0,c.zw)(e.breed.rus_title),9,u)],64)}var a=(0,n.aZ)({name:"BreedDetails",props:{breed:{type:[Object],default:function(){return{}}}},methods:{getCoverURL:function(){return null!=this.breed.cover?this.breed.cover:"/no-breed.png"},getBreedURL:function(){return"/breed/"+this.breed.slug}}}),d=r(3744);const p=(0,d.Z)(a,[["render",l]]);var f=p},6546:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var n=r(6252),c={class:"container product_detail"};function o(e,t,r,o,i,s){var u=(0,n.up)("ProductDetails"),l=(0,n.up)("ProductReviews");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(u,{product:e.getProductBySlug(e.$route.params.slug)},null,8,["product"]),(0,n.Wm)(l,{reviews:e.getReviewsByProduct(e.$route.params.slug)},null,8,["reviews"])])}r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);var i=r(4942),s=r(989),u=r(3577),l={class:"container product_detail"},a=(0,n._)("div",{style:{"text-align":"right"},class:"product_detail__info--flags"},[(0,n._)("span",{class:"badge bg-success"},"Доставка по России"),(0,n._)("span",{class:"badge bg-info text-dark"},[(0,n.Uk)("В наличии "),(0,n._)("span",{class:"glyphicon glyphicon-thumbs-up"})])],-1),d={class:"text-center"},p={class:"row"},f={class:"col-md-6 col-md-offset-1 product_detail__info"},g={id:"info",class:"product_detail__info--tab-pane"},v={class:"bs-callout bs-callout-info"},b=(0,n._)("h4",null,"Применение",-1),_={id:"application"},w={class:"col-md-4 col-md-offset-0 product_detail__photo_block"},h=["src"],y=(0,n._)("div",{class:"text-center"},[(0,n._)("a",{href:"/buy",class:"btn btn-sm btn-success product__buy_button"},[(0,n._)("span",{class:"glyphicon glyphicon-shopping-cart"}),(0,n.Uk)(" Купить с доставкой ")])],-1);function m(e,t,r,c,o,i){return(0,n.wg)(),(0,n.iD)("div",l,[a,(0,n._)("h1",d,(0,u.zw)(e.getRusTitle()),1),(0,n._)("div",p,[(0,n._)("div",f,[(0,n._)("div",g,(0,u.zw)(e.getDescription()),1),(0,n._)("div",v,[b,(0,n._)("div",_,(0,u.zw)(e.getApplication()),1)])]),(0,n._)("div",w,[(0,n._)("img",{src:e.getCoverURL(),alt:"",class:"img-thumbnail"},null,8,h)])]),y])}var O=(0,n.aZ)({name:"ProductDetails",props:{product:{type:[Object],default:function(){return{}}}},methods:{getCoverURL:function(){var e=this.product.images;return void 0!=e&&e.length>0?e[0].s3_small_file_path:"/no-image.png"},getRusTitle:function(){return this.product.rus_title},getDescription:function(){return this.product.card_text},getApplication:function(){return this.product.application}}}),P=r(3744);const j=(0,P.Z)(O,[["render",m]]);var D=j,R=r(4324);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=(0,n.aZ)({name:"ProductPage",components:{ProductReviews:R.Z,ProductDetails:D},computed:B({},(0,s.Se)(["getProductBySlug","getReviewsByProduct"]))});const k=(0,P.Z)(S,[["render",o]]);var U=k},4324:function(e,t,r){"use strict";r.d(t,{Z:function(){return D}});var n=r(6252),c={key:0,class:"container"},o=(0,n._)("h3",null,"Отзывы",-1);function i(e,t,r,i,s,u){var l=(0,n.up)("ReviewDetails");return e.hasReviews()?((0,n.wg)(),(0,n.iD)("div",c,[o,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.reviews,(function(e){return(0,n.wg)(),(0,n.j4)(l,{key:e.id,review:e},null,8,["review"])})),128))])):(0,n.kq)("",!0)}r(8309);var s=r(3577),u={class:"row"},l={class:"col-md-8 col-md-offset-1"},a={class:"bold"},d={class:"col-md-2 center"},p=(0,n._)("hr",null,null,-1);function f(e,t,r,c,o,i){var f=(0,n.up)("BreedDetails");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",u,[(0,n._)("div",l,[(0,n._)("p",a,(0,s.zw)(e.review.name)+" ("+(0,s.zw)(e.review.city)+")",1),(0,n._)("p",null,(0,s.zw)(e.review.text),1)]),(0,n._)("div",d,[(0,n.Wm)(f,{breed:e.getBreedBySlug(e.review.breed_slug)},null,8,["breed"])])]),p],64)}r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);var g=r(4942),v=r(989),b=r(1907);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,n.aZ)({name:"ReviewDetails",components:{BreedDetails:b.Z},props:{review:{type:[Object],default:function(){return{}}}},computed:w({},(0,v.Se)(["getBreedBySlug"]))}),y=r(3744);const m=(0,y.Z)(h,[["render",f]]);var O=m,P=(0,n.aZ)({name:"ProductReviews",components:{ReviewDetails:O},props:{reviews:{type:[Array],default:function(){return[]}}},methods:{hasReviews:function(){return this.reviews.length>0}}});const j=(0,y.Z)(P,[["render",i]]);var D=j}}]);