(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(53678)}])},19580:function(e,n,t){"use strict";t.r(n),t.d(n,{MetaplexProvider:function(){return c}});var r=t(85893),i=t(91452),s=t(21267),o=t(39356),a=t(44718),l=t(54306),u=t(67294),c=function(e){var n=e.children,t=(0,a.R)().connection,c=(0,l.O)(),d=(0,u.useMemo)((function(){return i.I.make(t).use((0,s.t)(c))}),[t,c]);return(0,r.jsx)(o.MetaplexContext.Provider,{value:{metaplex:d},children:n})}},19124:function(e,n,t){"use strict";t.r(n),t.d(n,{ShowNFTs:function(){return d}});var r=t(47568),i=t(70655),s=t(85893),o=t(214),a=t.n(o),l=t(39356),u=t(67294),c=t(54306),d=function(e){var n,t=e.onClusterChange,o=(0,l.useMetaplex)().metaplex,d=(0,c.O)(),f=(0,u.useState)(null),h=f[0],v=f[1],x=function(){var e=(0,r.Z)((function(){var e,n,t;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return[4,o.nfts().findAllByOwner({owner:o.identity().publicKey})];case 1:return(e=r.sent()).length?(n=Math.floor(Math.random()*e.length),[4,o.nfts().load({metadata:e[n]})]):(v(null),[2]);case 2:return t=r.sent(),v(t),[2]}}))}));return function(){return e.apply(this,arguments)}}();return d.connected?(0,s.jsxs)("div",{children:[(0,s.jsxs)("select",{onChange:t,className:a().dropdown,children:[(0,s.jsx)("option",{value:"devnet",children:"Devnet"}),(0,s.jsx)("option",{value:"mainnet",children:"Mainnet"}),(0,s.jsx)("option",{value:"testnet",children:"Testnet"})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsx)("h1",{className:a().title,children:"NFT Mint Address"}),(0,s.jsxs)("div",{className:a().nftForm,children:[(0,s.jsx)("input",{type:"text",value:h?h.mint.address.toBase58():"",readOnly:!0}),(0,s.jsx)("button",{onClick:x,children:"Pick Random NFT"})]}),h&&(0,s.jsxs)("div",{className:a().nftPreview,children:[(0,s.jsx)("h1",{children:h.name}),(0,s.jsx)("img",{src:(null===h||void 0===h||null===(n=h.json)||void 0===n?void 0:n.image)||"/fallbackImage.jpg",alt:"The downloaded illustration of the provided NFT address."})]})]})})]}):null}},53678:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(85893),i=t(214),s=t.n(i),o=t(67294),a=t(32671),l=t(31851),u=t(16247),c=t(45145),d=t(25093),f=t(71295),h=t(2030),v=t(1069),x=t(45604),p=t(58455),m=t(59917),_=t(19580),w=t(19124);t(70999);function j(){var e=(0,o.useState)(u.Q.Devnet),n=e[0],t=e[1],i=(0,o.useMemo)((function(){return(0,m.clusterApiUrl)(n)}),[n]),j=(0,o.useMemo)((function(){return[new c.O,new d.o,new f.S,new h.e({network:n}),new v.X]}),[n]);return(0,r.jsx)("div",{children:(0,r.jsx)(a.U,{endpoint:i,children:(0,r.jsx)(l.n,{wallets:j,autoConnect:!0,children:(0,r.jsx)(x.s,{children:(0,r.jsx)(_.MetaplexProvider,{children:(0,r.jsxs)("div",{className:s().App,children:[(0,r.jsx)(p.a,{}),(0,r.jsx)(w.ShowNFTs,{onClusterChange:function(e){switch(e.target.value){case"devnet":default:t(u.Q.Devnet);break;case"mainnet":t(u.Q.Mainnet);break;case"testnet":t(u.Q.Testnet)}}})]})})})})})})}},39356:function(e,n,t){"use strict";t.r(n),t.d(n,{MetaplexContext:function(){return s},useMetaplex:function(){return o}});var r=t(67294),i={metaplex:null},s=(0,r.createContext)(i);function o(){return(0,r.useContext)(s)}},214:function(e){e.exports={App:"Home_App__2g2bl",container:"Home_container__bCOhY",title:"Home_title__T09hD",nftForm:"Home_nftForm__h5RzC",nftPreview:"Home_nftPreview__1aCly",dropdown:"Home_dropdown__q4Jzb"}},7420:function(){},46601:function(){}},function(e){e.O(0,[766,870,81,279,774,888,179],(function(){return n=75557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);