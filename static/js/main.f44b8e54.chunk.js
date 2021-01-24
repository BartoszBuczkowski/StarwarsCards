(this["webpackJsonpstarwars-heros"]=this["webpackJsonpstarwars-heros"]||[]).push([[0],{67:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),i=a(9),o=a.n(i),s=(a(67),a(26)),l=a(36),d=a(123),j=a(125),u=a(116),h=a(37),p=a(115),m=a(56),b=Object(m.a)({palette:{type:"dark"}}),x=Object(p.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),O=function(){var e=x();return Object(n.jsx)("footer",{className:e.footer,children:Object(n.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 Bartosz Buczkowski ",(new Date).getFullYear()]})})},v=function(e){var t=e.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.a,{}),Object(n.jsx)("main",{children:t}),Object(n.jsx)(O,{})]})},f=a(117),g=a(126),C=a(118),y=a(119),k=a(120),w=a(121),N=a(127),B=a(122),M=a(35),S=a.n(M),T=function(e){var t=e.cards,a=e.winner,r=x(),c=t.map((function(e){return[{title:"Name",value:null===e||void 0===e?void 0:e.name},{title:"Mass",value:null===e||void 0===e?void 0:e.mass},{title:"Birth",value:null===e||void 0===e?void 0:e.birth_year},{title:"Skin",value:null===e||void 0===e?void 0:e.skin_color}]}));return Object(n.jsx)(f.a,{container:!0,spacing:4,children:t.map((function(e,t){return Object(n.jsx)(f.a,{item:!0,xs:12,sm:6,md:6,style:{transform:"".concat(a===t?"scale(1.05)":"scale(1)")},children:Object(n.jsx)(g.a,{className:r.card,children:Object(n.jsxs)(C.a,{className:r.cardContent,children:[Object(n.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),a===t&&Object(n.jsx)(h.a,{gutterBottom:!0,variant:"subtitle2",component:"p",children:"Has a greater mass"}),Object(n.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:Object(n.jsx)(y.a,{className:r.root,children:c[t].map((function(e){var t=e.title,a=e.value;return Object(n.jsxs)(k.a,{children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(N.a,{children:Object(n.jsx)(S.a,{})})}),Object(n.jsx)(B.a,{primary:t,secondary:a})]},t)}))})})]})})},t)}))})},G=function(e){var t=e.cards,a=e.winner,r=x(),c=t.map((function(e){return[{title:"Name",value:null===e||void 0===e?void 0:e.name},{title:"Model",value:null===e||void 0===e?void 0:e.model},{title:"Class",value:null===e||void 0===e?void 0:e.starship_class},{title:"Crew",value:null===e||void 0===e?void 0:e.crew}]}));return Object(n.jsx)(f.a,{container:!0,spacing:4,children:t.map((function(e,t){return Object(n.jsx)(f.a,{item:!0,xs:12,sm:6,md:6,style:{transform:"".concat(a===t?"scale(1.05)":"scale(1)")},children:Object(n.jsx)(g.a,{className:r.card,children:Object(n.jsx)(C.a,{className:r.cardContent,children:Object(n.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:Object(n.jsx)(y.a,{className:r.root,children:c[t].map((function(e){var t=e.title,a=e.value;return Object(n.jsxs)(k.a,{children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(N.a,{children:Object(n.jsx)(S.a,{})})}),Object(n.jsx)(B.a,{primary:t,secondary:a})]},t)}))})})})})},t)}))})},W=a(124),_=function(e){var t=e.competition,a=e.setCompetition,r=e.clearCards,c=x(),i=function(e){r(),a(e)};return Object(n.jsx)("div",{className:c.heroContent,children:Object(n.jsxs)(d.a,{maxWidth:"sm",children:[Object(n.jsx)(h.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Starwars"}),Object(n.jsx)(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Change competition. Compare heros or starships from your favorite movie universe."}),Object(n.jsx)("div",{className:c.heroButtons,children:Object(n.jsxs)(f.a,{container:!0,spacing:2,justify:"center",children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(W.a,{variant:"people"===t?"contained":"outlined",color:"primary",onClick:function(){return i("people")},children:"Heros"})}),Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(W.a,{variant:"starships"===t?"contained":"outlined",color:"primary",onClick:function(){return i("starships")},children:"Starships"})})]})})]})})},z=a(55),D=a.n(z);var E=a(40),F=(a(94),function(e){var t=e.cards,a=void 0===t?[]:t,r=e.setCards,c=e.competition;function i(e){var t=Object(s.a)(a);D.a.get("https://swapi.dev/api/".concat(c,"/").concat(function(e){var t="people"===e?83:13;return Math.floor(Math.random()*(t+1))+1}(c))).then((function(a){t[e]=a.data,r(t)})).catch((function(e){Object(E.b)("".concat(e.message,". Try again."))}))}var o=x();return Object(n.jsxs)("div",{className:o.heroButtons,children:[Object(n.jsx)(E.a,{autoClose:3500,hideProgressBar:!0,position:"top-right"}),Object(n.jsxs)(f.a,{container:!0,spacing:2,justify:"center",children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(W.a,{onClick:function(){return i(0)},children:"left"})}),Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(W.a,{onClick:function(){return i(1)},children:"right"})})]})]})}),H=function(){var e=Object(r.useState)("people"),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),u=o[0],h=o[1],p=Object(r.useState)(null),m=Object(l.a)(p,2),O=m[0],f=m[1],g=x();return Object(r.useEffect)((function(){void 0===u[0]||void 0===u[1]||function(){if("people"===a){var e=null===u||void 0===u?void 0:u.map((function(e){var t=e.mass;return Number(t)})),t=e.indexOf(Math.max.apply(Math,Object(s.a)(e)));return f(t)}if("starships"===a){var n=null===u||void 0===u?void 0:u.map((function(e){var t=e.passengers;return Number(t)})),r=n.indexOf(Math.max.apply(Math,Object(s.a)(n)));return f(r)}f(null)}()}),[u]),Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(j.a,{theme:b,children:Object(n.jsxs)(v,{children:[Object(n.jsx)(_,{competition:a,setCompetition:c,clearCards:function(){return h([])}}),Object(n.jsx)(F,{cards:u,setCards:h,competition:a}),u&&Object(n.jsxs)(d.a,{className:g.cardGrid,maxWidth:"md",children:["people"===a&&Object(n.jsx)(T,{cards:u,winner:O}),"starships"===a&&Object(n.jsx)(G,{cards:u,winner:O})]})]})})})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.f44b8e54.chunk.js.map