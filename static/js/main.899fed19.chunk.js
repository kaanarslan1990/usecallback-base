(this["webpackJsonptest-cra"]=this["webpackJsonptest-cra"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c.n(n),s=c(6),i=c.n(s),j=(c(13),c(7)),o=c(5),d=(c(14),[{name:"iPhone 12",price:14e3},{name:"Galaxy S20",price:6500},{name:"Huawei P40",price:1e4}]),u=a.a.memo((function(e){var t=e.products,c=e.addToCart;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Products"}),Object(r.jsx)("div",{className:"products",children:t.map((function(e){var t=e.name,n=e.price;return Object(r.jsx)(p,{name:t,price:n,addToCart:c},t)}))})]})})),b=function(e){var t=e.cart,c=e.emptyCart;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h1",{children:["Shopping Cart ",Object(r.jsx)("button",{onClick:c,children:"Remove Products"})]}),Object(r.jsx)("div",{className:"products",children:t.map((function(e,t){var c=e.name,n=e.price;return Object(r.jsx)(p,{name:c,price:n},t)}))})]})},p=a.a.memo((function(e){var t=e.name,c=e.price,n=e.addToCart;return Object(r.jsxs)("div",{className:"product",children:[Object(r.jsx)("h2",{children:t}),Object(r.jsxs)("h3",{children:[c.toLocaleString()," \u20ba"]}),n&&Object(r.jsx)("button",{onClick:function(){return n({name:t,price:c})},children:"Add Cart"})]})})),m=function(){var e=Object(n.useState)(d),t=Object(o.a)(e,1)[0],c=Object(n.useState)([]),a=Object(o.a)(c,2),s=a[0],i=a[1],p=Object(n.useCallback)((function(e){i((function(t){return[].concat(Object(j.a)(t),[e])}))}),[]);return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(u,{products:t,addToCart:p}),Object(r.jsx)(b,{cart:s,emptyCart:function(){i([])}})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.899fed19.chunk.js.map