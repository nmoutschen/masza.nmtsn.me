(function(t){function e(e){for(var o,y,c=e[0],p=e[1],s=e[2],a=0,x=[];a<c.length;a++)y=c[a],Object.prototype.hasOwnProperty.call(r,y)&&r[y]&&x.push(r[y][0]),r[y]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(t[o]=p[o]);h&&h(e);while(x.length)x.shift()();return n.push.apply(n,s||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],o=!0,y=1;y<i.length;y++){var c=i[y];0!==r[c]&&(o=!1)}o&&(n.splice(e--,1),t=p(p.s=i[0]))}return t}var o={},y={index:0},r={index:0},n=[];function c(t){return p.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f9d3b4ae"}[t]+".js"}function p(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,p),i.l=!0,i.exports}p.e=function(t){var e=[],i={about:1};y[t]?e.push(y[t]):0!==y[t]&&i[t]&&e.push(y[t]=new Promise((function(e,i){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"dfa2597b"}[t]+".css",r=p.p+o,n=document.getElementsByTagName("link"),c=0;c<n.length;c++){var s=n[c],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===o||a===r))return e()}var x=document.getElementsByTagName("style");for(c=0;c<x.length;c++){s=x[c],a=s.getAttribute("data-href");if(a===o||a===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=o,delete y[t],h.parentNode.removeChild(h),i(n)},h.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){y[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,i){o=r[t]=[e,i]}));e.push(o[2]=n);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,p.nc&&a.setAttribute("nonce",p.nc),a.src=c(t);var x=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(h);var i=r[t];if(0!==i){if(i){var o=e&&("load"===e.type?"missing":e.type),y=e&&e.target&&e.target.src;x.message="Loading chunk "+t+" failed.\n("+o+": "+y+")",x.name="ChunkLoadError",x.type=o,x.request=y,i[1](x)}r[t]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},p.m=t,p.c=o,p.d=function(t,e,i){p.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},p.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(p.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)p.d(i,o,function(e){return t[e]}.bind(null,o));return i},p.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return p.d(e,"a",e),e},p.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p.p="/",p.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var x=0;x<s.length;x++)e(s[x]);var h=a;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"07cf":function(t){t.exports=JSON.parse('{"width":32,"height":32,"tileset":"default","start":{"x":7,"y":20},"tiles":[{"type":"tTitle","x":4,"y":16},{"type":"tKeys","x":5,"y":17},{"type":"brickL","x":0,"y":31},{"type":"brickL","x":0,"y":30},{"type":"brickL","x":0,"y":29},{"type":"brickL","x":0,"y":28},{"type":"brickL","x":0,"y":27},{"type":"brickE","x":0,"y":26},{"type":"brickE","x":0,"y":25},{"type":"brickE","x":0,"y":24},{"type":"brickE","x":0,"y":23},{"type":"brickE","x":0,"y":22},{"type":"brickE","x":0,"y":21},{"type":"brickE","x":0,"y":20},{"type":"brickE","x":0,"y":19},{"type":"brickE","x":0,"y":18},{"type":"brickE","x":0,"y":17},{"type":"brickE","x":0,"y":16},{"type":"brickE","x":0,"y":15},{"type":"brickE","x":0,"y":14},{"type":"brickE","x":0,"y":13},{"type":"brick","x":1,"y":31},{"type":"brick","x":1,"y":30},{"type":"brick","x":1,"y":29},{"type":"brick","x":1,"y":28},{"type":"brick","x":1,"y":27},{"type":"woodTop","x":1,"y":25},{"type":"woodTop","x":1,"y":23},{"type":"woodTopL","x":1,"y":21},{"type":"woodTop","x":1,"y":19},{"type":"woodTop","x":1,"y":17},{"type":"woodTop","x":1,"y":15},{"type":"woodTopL","x":1,"y":13},{"type":"brick","x":2,"y":31},{"type":"brick","x":2,"y":30},{"type":"brick","x":2,"y":29},{"type":"brick","x":2,"y":28},{"type":"brickR","x":2,"y":27},{"type":"woodTop","x":2,"y":21},{"type":"woodTop","x":2,"y":13},{"type":"brick","x":3,"y":31},{"type":"brick","x":3,"y":30},{"type":"brick","x":3,"y":29},{"type":"brickR","x":3,"y":28},{"type":"woodTop","x":3,"y":21},{"type":"woodTop","x":3,"y":13},{"type":"brick","x":4,"y":31},{"type":"brick","x":4,"y":30},{"type":"brick","x":4,"y":29},{"type":"woodL","x":4,"y":28},{"type":"wood","x":4,"y":21},{"type":"fCouch","x":4,"y":20},{"type":"wood","x":4,"y":13},{"type":"brick","x":5,"y":31},{"type":"brick","x":5,"y":30},{"type":"brick","x":5,"y":29},{"type":"wood","x":5,"y":28},{"type":"wood","x":5,"y":21},{"type":"wood","x":5,"y":13},{"type":"brick","x":6,"y":31},{"type":"brick","x":6,"y":30},{"type":"brick","x":6,"y":29},{"type":"wood","x":6,"y":28},{"type":"wood","x":6,"y":21},{"type":"wood","x":6,"y":13},{"type":"brick","x":7,"y":31},{"type":"brick","x":7,"y":30},{"type":"brick","x":7,"y":29},{"type":"wood","x":7,"y":28},{"type":"wood","x":7,"y":21},{"type":"fDogBed","x":7,"y":20},{"type":"wood","x":7,"y":13},{"type":"brick","x":8,"y":31},{"type":"brick","x":8,"y":30},{"type":"brick","x":8,"y":29},{"type":"wood","x":8,"y":28},{"type":"wood","x":8,"y":21},{"type":"fTvStand","x":8,"y":20},{"type":"fTv","x":8,"y":19},{"type":"wood","x":8,"y":13},{"type":"brick","x":9,"y":31},{"type":"brick","x":9,"y":30},{"type":"brick","x":9,"y":29},{"type":"wood","x":9,"y":28},{"type":"wood","x":9,"y":21},{"type":"wood","x":9,"y":13},{"type":"brick","x":10,"y":31},{"type":"brick","x":10,"y":30},{"type":"brick","x":10,"y":29},{"type":"wood","x":10,"y":28},{"type":"wood","x":10,"y":21},{"type":"wood","x":10,"y":13},{"type":"brick","x":11,"y":31},{"type":"brick","x":11,"y":30},{"type":"brick","x":11,"y":29},{"type":"wood","x":11,"y":28},{"type":"wood","x":11,"y":21},{"type":"wood","x":11,"y":13},{"type":"brick","x":12,"y":31},{"type":"brick","x":12,"y":30},{"type":"brick","x":12,"y":29},{"type":"wood","x":12,"y":28},{"type":"wood","x":12,"y":21},{"type":"wood","x":12,"y":13},{"type":"brick","x":13,"y":31},{"type":"brick","x":13,"y":30},{"type":"brick","x":13,"y":29},{"type":"wood","x":13,"y":28},{"type":"wood","x":13,"y":21},{"type":"fDesk","x":13,"y":20},{"type":"fComputer","x":13,"y":19},{"type":"wood","x":13,"y":13},{"type":"brick","x":14,"y":31},{"type":"brick","x":14,"y":30},{"type":"brick","x":14,"y":29},{"type":"wood","x":14,"y":28},{"type":"wood","x":14,"y":21},{"type":"wood","x":14,"y":13},{"type":"brickR","x":15,"y":31},{"type":"brickR","x":15,"y":30},{"type":"brickR","x":15,"y":29},{"type":"woodR","x":15,"y":28},{"type":"doorB","x":15,"y":27},{"type":"doorC","x":15,"y":26},{"type":"doorC","x":15,"y":25},{"type":"doorT","x":15,"y":24},{"type":"brickE","x":15,"y":23},{"type":"brickE","x":15,"y":22},{"type":"brickE","x":15,"y":21},{"type":"brickE","x":15,"y":20},{"type":"brickTE","x":15,"y":19},{"type":"paneB","x":15,"y":18},{"type":"paneC","x":15,"y":17},{"type":"paneT","x":15,"y":16},{"type":"brickE","x":15,"y":15},{"type":"brickE","x":15,"y":14},{"type":"brickE","x":15,"y":13},{"type":"dirtL","x":16,"y":31},{"type":"dirtL","x":16,"y":30},{"type":"dirtL","x":16,"y":29},{"type":"dirtTL","x":16,"y":28},{"type":"dirt","x":17,"y":31},{"type":"dirt","x":17,"y":30},{"type":"dirt","x":17,"y":29},{"type":"dirtT","x":17,"y":28},{"type":"dirt","x":18,"y":31},{"type":"dirt","x":18,"y":30},{"type":"dirt","x":18,"y":29},{"type":"dirtT","x":18,"y":28},{"type":"dirt","x":19,"y":31},{"type":"dirt","x":19,"y":30},{"type":"dirt","x":19,"y":29},{"type":"dirtT","x":19,"y":28},{"type":"dirt","x":20,"y":31},{"type":"dirt","x":20,"y":30},{"type":"dirt","x":20,"y":29},{"type":"dirtT","x":20,"y":28},{"type":"dirt","x":21,"y":31},{"type":"dirt","x":21,"y":30},{"type":"dirt","x":21,"y":29},{"type":"dirtT","x":21,"y":28},{"type":"dirt","x":22,"y":31},{"type":"dirt","x":22,"y":30},{"type":"dirt","x":22,"y":29},{"type":"dirtT","x":22,"y":28},{"type":"dirt","x":23,"y":31},{"type":"dirt","x":23,"y":30},{"type":"dirt","x":23,"y":29},{"type":"dirtT","x":23,"y":28},{"type":"dirt","x":24,"y":31},{"type":"dirt","x":24,"y":30},{"type":"dirt","x":24,"y":29},{"type":"dirtT","x":24,"y":28},{"type":"fBall","x":24,"y":27},{"type":"dirt","x":25,"y":31},{"type":"dirt","x":25,"y":30},{"type":"dirt","x":25,"y":29},{"type":"dirtT","x":25,"y":28},{"type":"dirt","x":26,"y":31},{"type":"dirt","x":26,"y":30},{"type":"dirt","x":26,"y":29},{"type":"dirtT","x":26,"y":28},{"type":"dirt","x":27,"y":31},{"type":"dirt","x":27,"y":30},{"type":"dirt","x":27,"y":29},{"type":"dirtT","x":27,"y":28},{"type":"dirt","x":28,"y":31},{"type":"dirt","x":28,"y":30},{"type":"dirt","x":28,"y":29},{"type":"dirtT","x":28,"y":28},{"type":"dirt","x":29,"y":31},{"type":"dirt","x":29,"y":30},{"type":"dirt","x":29,"y":29},{"type":"dirtT","x":29,"y":28},{"type":"dirt","x":30,"y":31},{"type":"dirt","x":30,"y":30},{"type":"dirt","x":30,"y":29},{"type":"dirtT","x":30,"y":28},{"type":"dirtR","x":31,"y":31},{"type":"dirtR","x":31,"y":30},{"type":"dirtR","x":31,"y":29},{"type":"dirtTR","x":31,"y":28},{"type":"brickE","x":0,"y":12},{"type":"brickE","x":0,"y":11},{"type":"brickE","x":0,"y":10},{"type":"brickE","x":0,"y":9},{"type":"brickE","x":0,"y":8},{"type":"brickE","x":0,"y":7},{"type":"brickE","x":0,"y":6},{"type":"brickE","x":0,"y":5},{"type":"brickE","x":0,"y":4},{"type":"brickE","x":0,"y":3},{"type":"brickE","x":0,"y":1},{"type":"brickTL","x":0,"y":0},{"type":"brickE","x":0,"y":2},{"type":"brickE","x":15,"y":12},{"type":"brickTE","x":15,"y":11},{"type":"paneB","x":15,"y":10},{"type":"brickE","x":15,"y":6},{"type":"brickE","x":15,"y":5},{"type":"wood","x":14,"y":5},{"type":"wood","x":13,"y":5},{"type":"wood","x":12,"y":5},{"type":"wood","x":11,"y":5},{"type":"wood","x":10,"y":5},{"type":"wood","x":9,"y":5},{"type":"wood","x":8,"y":5},{"type":"wood","x":7,"y":5},{"type":"wood","x":6,"y":5},{"type":"wood","x":5,"y":5},{"type":"wood","x":4,"y":5},{"type":"woodTopL","x":1,"y":5},{"type":"woodTop","x":2,"y":5},{"type":"woodTop","x":3,"y":5},{"type":"woodTop","x":1,"y":11},{"type":"woodTop","x":1,"y":9},{"type":"woodTop","x":1,"y":7},{"type":"brickE","x":15,"y":7},{"type":"paneT","x":15,"y":8},{"type":"paneC","x":15,"y":9},{"type":"brickE","x":15,"y":4},{"type":"brickE","x":15,"y":3},{"type":"brickE","x":15,"y":2},{"type":"brickE","x":15,"y":1},{"type":"brickTR","x":15,"y":0},{"type":"brickT","x":1,"y":0},{"type":"brickT","x":2,"y":0},{"type":"brickT","x":3,"y":0},{"type":"brickT","x":4,"y":0},{"type":"brickT","x":5,"y":0},{"type":"brickT","x":6,"y":0},{"type":"brickT","x":7,"y":0},{"type":"brickT","x":8,"y":0},{"type":"brickT","x":9,"y":0},{"type":"brickT","x":10,"y":0},{"type":"brickT","x":11,"y":0},{"type":"brickT","x":12,"y":0},{"type":"brickT","x":13,"y":0},{"type":"brickT","x":14,"y":0},{"type":"fBall","x":12,"y":4},{"type":"fDogBed","x":13,"y":4},{"type":"fCouch","x":9,"y":4}]}')},2221:function(t,e,i){"use strict";var o=i("7b46"),y=i.n(o);y.a},3432:function(t,e,i){t.exports=i.p+"img/tileset.676f9540.png"},"4ff6":function(t){t.exports=JSON.parse('{"width":32,"height":32,"sprite":{"x":160,"y":64,"img":"masza.png"},"defaultAction":"sitting","actions":{"sitting":{"x":0},"givingPaw":{"x":32},"walking":{"x":64},"jumping":{"x":96},"lyingDown":{"x":128}},"variants":{"altFrame":{"y":32}},"config":{"accel":2,"decel":1,"forcedDecel":2,"forcedMaxY":24,"forcedVertAccel":2,"jump":12,"jumpGrace":6,"maxY":12,"maxX":10,"vertAccel":1}}')},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],n={name:"App",components:{}},c=n,p=(i("5c0b"),i("2877")),s=Object(p["a"])(c,y,r,!1,null,null,null),a=s.exports,x=(i("d3b7"),i("8c4f")),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{devMode:t.devMode},style:t.gameStyle,attrs:{id:"game"}},[i("div",{style:t.gameViewStyle,attrs:{id:"gameView"}},[i("div",{style:t.masza.style}),t._l(t.tiles,(function(t){return i("div",{key:t.id,style:t.style})}))],2),t.devMode?i("p",{attrs:{id:"debug"}},[t._v(" pos("+t._s(this.$store.state.masza.pos.x)+", "+t._s(this.$store.state.masza.pos.y)+")"),i("br"),t._v(" force("+t._s(this.$store.state.masza.force.x)+", "+t._s(this.$store.state.masza.force.y)+")"),i("br"),t._v(" tiles: "+t._s(t.tiles.length)+" ")]):t._e()])},d=[],f=i("8f72");function u(t){t.$store.dispatch("nextGraphicsTick")}function b(t){t.$store.dispatch("nextPhysicsTick")}var l={name:"Game",computed:{masza:function(){return this.$store.state.masza},tiles:function(){return f["a"].tilesWithin(this.$store.state.camera.box)},devMode:function(){return!1},gameStyle:function(){var t="";return t+="width: "+this.$store.state.camera.width+"px;",t+="height: "+this.$store.state.camera.height+"px;",t},gameViewStyle:function(){return this.$store.state.camera.style}},data:function(){return{mainGraphicsLoop:null,mainPhysicsLoop:null}},methods:{keyDown:function(t){this.$store.dispatch("keyDown",t.keyCode)},keyUp:function(t){this.$store.dispatch("keyUp",t.keyCode)}},created:function(){var t=this;this.$store.dispatch("setup"),window.addEventListener("keydown",this.keyDown,!1),window.addEventListener("keyup",this.keyUp,!1),this.mainGraphicsLoop=setInterval((function(){u(t)}),120),this.mainPhysicsLoop=setInterval((function(){b(t)}),30)},destroyed:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),clearInterval(this.mainGraphicsLoop),clearInterval(this.mainPhysicsLoop)}},g=l,k=(i("2221"),Object(p["a"])(g,h,d,!1,null,null,null)),m=k.exports;o["a"].use(x["a"]);var w=[{path:"/",name:"Game",component:m},{path:"/editor",name:"Editor",component:function(){return i.e("about").then(i.bind(null,"49d7"))}}],v=new x["a"]({routes:w}),T=v,E=i("2f62");i("99af");function A(t,e){e.pos.x-t.pos.x<t.width/4&&t.pos.x>0?t.pos.x=Math.max(e.pos.x-t.width/4,0):e.pos.x>t.pos.x+t.width-t.width/4&&t.pos.x<f["a"].width-t.width&&(t.pos.x=Math.min(e.pos.x-t.width+t.width/4,f["a"].width-t.width)),e.pos.y-t.pos.y<t.height/4&&t.pos.y>0?t.pos.y=Math.max(e.pos.y-t.height/4,0):e.pos.y>t.pos.y+t.height-t.height/4&&t.pos.y<f["a"].height-t.height&&(t.pos.y=Math.min(e.pos.y-t.height+t.height/4,f["a"].height-t.height))}var L={state:{width:512,height:384,pos:{x:0,y:0},get box(){return{left:this.pos.x,right:this.pos.x+this.width,top:this.pos.y,bottom:this.pos.y+this.height}},get style(){return"\n        width: ".concat(this.width,"px;\n        height: ").concat(this.height,"px;\n        top: ").concat(-this.pos.y,"px;\n        left: ").concat(-this.pos.x,"px;\n      ")}},mutations:{nextPhysicsTick:function(t,e){var i=e.masza;A(t,i)}}},j=i("ae3f");o["a"].use(E["a"]);var M=new E["a"].Store({state:{},mutations:{},actions:{keyUp:function(t,e){var i=t.commit;i("keyUp",e)},keyDown:function(t,e){var i=t.commit;i("keyDown",e)},nextGraphicsTick:function(t){var e=t.commit,i=t.rootState;e("nextGraphicsTick",i)},nextPhysicsTick:function(t){var e=t.commit,i=t.rootState;e("nextPhysicsTick",i)}},modules:{camera:L,masza:j["default"]}});o["a"].config.productionTip=!1,new o["a"]({router:T,store:M,render:function(t){return t(a)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var o=i("9c0c"),y=i.n(o);y.a},6280:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAgCAYAAACFM/9sAAACNElEQVRoQ+2ZzU0EMQyFsyc6oBAKoQqE9kYt3FaIKihkC6EDTqBIWPIa/7zYTIZF2QtIMy8/n53EeXNo61cicLDUH+8vn9azm9tHU0eaqr40q4liFYQ3eRqbB7Gq731UA1DVozH4AdDq+Onh1J5fj43+WgCr+gjerAD+CkCC5TUmQXKAVT3vd2YAoyDyObsZKAetgUQAeiAR/cwARvDkCnD3QD7x/j//nd7O4QGU0WsZXA1AVo+sABeC1TF6Cmf1BDETAJ5BGf3oFhSWI8f7u4tyxss8ball9X0i2QAQxIx+dAWEAOWpimQfB4no+ztWu0gAqnoZ+JEV4AK0ShIU4oie3vUOlT7RqHzK6jWISAbvApAPLJqwnFgUvKiI1/SVDA5PUqR00d7JTAQpIbYAyPuNAiqfTwdYAdC1VrZEAaPl72UbEkC5jaiFNA0UqYO0vcPTo3doWXf2a6QHkMbhAaa+K0GAAPaX5AY6epWy9FEGWiCizKHsiQJk7YE8EbQEsLaysIzxrlHrWWvT90CvFLnGgCw/sBi15QduCbDq51X12SpAY4IegvwQs9guP5CRQU5l7zKx/EDxgWz0k8TyA0V6LT/wG0jWT7xaP9CqD1E/sKLXrqPyNmZ90tjFzvI8vVE3hE9eu+4hhq52SKAZvAvAv+gHZjN4l6ucd52LbKnIjKjoMxk8HeBWACJwFLTI1UHboWV/AZA3LhtCKnlEjwK09kJEH9n2/94PRExRa+Of7Qd+AdYE0z6KokNkAAAAAElFTkSuQmCC"},"7b46":function(t,e,i){},"8cf6":function(t,e,i){"use strict";i("99af"),i("4160"),i("b0c0"),i("b64b"),i("159b");var o=i("d4ec"),y=i("bee2"),r=i("8e04");r.img=i("3432");var n=32,c=function(){function t(e,i,y){Object(o["a"])(this,t),this.name=i,this.width=y.width*n||n,this.height=y.height*n||n,this.physics=y.physics||"block",this.background={width:e.width*n,height:e.height*n,x:y.x*n,y:y.y*n,img:e.img}}return Object(y["a"])(t,[{key:"style",get:function(){return'\n      background-image: url("'.concat(this.background.img,'");\n      background-size: ').concat(this.background.width,"px ").concat(this.background.height,"px;\n      background-position: ").concat(-this.background.x,"px ").concat(-this.background.y,"px;\n      width: ").concat(this.width,"px;\n      height: ").concat(this.height,"px;\n    ")}}]),t}();function p(t){var e={};return Object.keys(t.tiles).forEach((function(i){e[i]=new c(t,i,t.tiles[i])})),{tiles:e,size:n}}e["a"]=p(r)},"8e04":function(t){t.exports=JSON.parse('{"width":16,"height":16,"tiles":{"dirtTL":{"x":0,"y":0},"dirtT":{"x":1,"y":0},"dirtTR":{"x":2,"y":0},"dirtL":{"x":0,"y":1},"dirt":{"x":1,"y":1},"dirtR":{"x":2,"y":1},"dirtIL":{"x":3,"y":0},"dirtIR":{"x":3,"y":1},"brickTL":{"x":0,"y":2},"brickT":{"x":1,"y":2},"brickTR":{"x":2,"y":2},"brickTE":{"x":3,"y":2},"brickL":{"x":0,"y":3},"brick":{"x":1,"y":3},"brickR":{"x":2,"y":3},"brickE":{"x":3,"y":3},"concreteTL":{"x":4,"y":0},"concreteT":{"x":5,"y":0},"concreteTA":{"x":6,"y":0},"concreteTR":{"x":7,"y":0},"concreteL":{"x":4,"y":1},"concreteEL":{"x":5,"y":1},"concreteER":{"x":6,"y":1},"concreteR":{"x":7,"y":1},"concreteLA":{"x":4,"y":2},"concreteLE":{"x":5,"y":2},"concreteRE":{"x":6,"y":2},"concreteRA":{"x":7,"y":2},"concrete1":{"x":4,"y":3},"concrete2":{"x":5,"y":3},"concrete3":{"x":6,"y":3},"concrete4":{"x":7,"y":3},"woodL":{"x":8,"y":0},"wood":{"x":9,"y":0},"woodR":{"x":10,"y":0},"woodE":{"x":11,"y":0},"woodTopL":{"x":8,"y":1,"physics":"top"},"woodTop":{"x":9,"y":1,"physics":"top"},"woodTopR":{"x":10,"y":1,"physics":"top"},"woodTopE":{"x":11,"y":1,"physics":"top"},"door":{"x":8,"y":2,"physics":"none"},"doorT":{"x":9,"y":2,"physics":"none"},"doorB":{"x":10,"y":2,"physics":"none"},"doorC":{"x":11,"y":2,"physics":"none"},"pane":{"x":8,"y":3,"physics":"none"},"paneT":{"x":9,"y":3,"physics":"none"},"paneB":{"x":10,"y":3,"physics":"none"},"paneC":{"x":11,"y":3,"physics":"none"},"glassTL":{"x":12,"y":0},"glassT":{"x":13,"y":0},"glassTR":{"x":14,"y":0},"glassTE":{"x":15,"y":0},"glassL":{"x":12,"y":1},"glassC":{"x":13,"y":1},"glassR":{"x":14,"y":1},"glassHE":{"x":15,"y":1},"glassBL":{"x":12,"y":2},"glassB":{"x":13,"y":2},"glassBR":{"x":14,"y":2},"glassBE":{"x":15,"y":2},"glassLE":{"x":12,"y":3},"glassVE":{"x":13,"y":3},"glassRE":{"x":14,"y":3},"glass":{"x":15,"y":3},"fCouch":{"width":"2","x":0,"y":8},"fBall":{"x":2,"y":8},"fDogBed":{"x":3,"y":8,"physics":"none"},"fTv":{"width":"2","x":0,"y":9},"fComputer":{"width":"2","x":2,"y":9,"physics":"none"},"fTvStand":{"width":"2","x":0,"y":10},"fDesk":{"width":"2","x":2,"y":10,"physics":"top"},"tTitle":{"width":8,"x":0,"y":12,"physics":"none"},"tKeys":{"width":6,"x":8,"y":12,"physics":"none"}}}')},"8f72":function(t,e,i){"use strict";i.d(e,"b",(function(){return a}));i("99af"),i("4160"),i("a630"),i("d81d"),i("d3b7"),i("6062"),i("3ca3"),i("159b"),i("ddb0");var o=i("d4ec"),y=i("bee2"),r=i("07cf"),n=i("8cf6"),c={width:128,height:128};function p(t,e){for(var i={},o=0;o<Math.ceil(e.width*n["a"].size/c.width);o++){i[o]={};for(var y=0;y<Math.ceil(e.height*n["a"].size/c.height);y++)i[o][y]=new Array}return t.forEach((function(t){for(var e=t.box,o=e.left,y=e.right,r=e.top,n=e.bottom,p=new Set,s=Math.floor(o/c.width);s<Math.ceil(y/c.width);s++)for(var a=Math.floor(r/c.height);a<Math.ceil(n/c.height);a++)p.add({x:s,y:a});p.forEach((function(e){var o=e.x,y=e.y;void 0!==i[o]&&void 0!==i[o][y]&&i[o][y].push(t)}))})),i}var s=function(){function t(e,i){Object(o["a"])(this,t),this.id=e,this.type=n["a"].tiles[i.type],this.physics=i.physics||this.type.physics||"block",this.pos={x:i.x*n["a"].size+this.type.width/2,y:i.y*n["a"].size+this.type.height},this.box={left:this.pos.x-this.type.width/2,right:this.pos.x+this.type.width/2,top:this.pos.y-this.type.height,bottom:this.pos.y}}return Object(y["a"])(t,[{key:"style",get:function(){return"\n      position: absolute;\n      ".concat(this.type.style,"\n      top: ").concat(this.box.top,"px;\n      left: ").concat(this.box.left,"px;\n    ")}}]),t}();function a(t){var e=0,i=t.tiles.map((function(t){return new s(e++,t)}));return{start:{x:t.start.x*n["a"].size+n["a"].size/2||0,y:t.start.y*n["a"].size+n["a"].size||0},tileset:n["a"],height:t.height*n["a"].size||16,width:t.width*n["a"].size||16,tiles:i,chunks:p(i,t),tilesWithin:function(t){for(var e=this,i=t.left,o=t.top,y=t.right,r=t.bottom,n=new Set,p=Math.floor(i/c.width);p<Math.ceil(y/c.width);p++)for(var s=Math.floor(o/c.height);s<Math.ceil(r/c.height);s++)n.add({x:p,y:s});var a=[];return n.forEach((function(t){var i=t.x,o=t.y;void 0!==e.chunks[i]&&void 0!==e.chunks[i][o]&&(a=a.concat(e.chunks[i][o]))})),Array.from(new Set(a))}}}e["a"]=a(r)},"9c0c":function(t,e,i){},ae3f:function(t,e,i){"use strict";i.r(e);i("99af"),i("4de4"),i("d3b7"),i("ddb0");var o=i("4ff6"),y=i("8f72"),r={32:"jump",37:"left",39:"right",40:"down",69:"action"};function n(t,e){var i=e.filter((function(e){return t.collides(e)})).sort((function(e,i){return Math.min(Math.pow(t.box.left-i.box.left,2),Math.pow(t.box.right-i.box.right,2))+Math.min(Math.pow(t.box.top-i.box.top,2),Math.pow(t.box.bottom-i.box.bottom,2))-Math.min(Math.pow(t.box.left-e.box.left,2),Math.pow(t.box.right-e.box.right,2))-Math.min(Math.pow(t.box.top-e.box.top,2),Math.pow(t.box.bottom-e.box.bottom,2))}));while(i.length>0){var o=i.pop(0);if(t.collides(o)){var y={x:t.force.x>=0?o.box.left-t.box.right:o.box.right-t.box.left,y:t.force.y>=0?o.box.top-t.box.bottom:o.box.bottom-t.box.top},r={x:-t.force.x,y:-t.force.y},n={x:Math.ceil(r.x/y.x>=r.y/y.y?y.x:r.x*(y.y/r.y)),y:Math.ceil(r.x/y.x>=r.y/y.y?r.y*(y.x/r.x):y.y)};"block"==o.physics&&r.x/y.x>=r.y/y.y?(t.pos.x+=n.x,t.force.x=0):(t.pos.y+=n.y,t.force.y>0&&(t.jumping=!1),t.force.y=0)}}}function c(t,e){t.box.right>e.width?(t.pos.x=e.width-t.width/2,t.force.x=0):t.box.left<0&&(t.pos.x=t.width/2,t.force.x=0),t.box.bottom>e.height?(t.pos.y=e.height,t.force.y=0,t.jumping=!1):t.box.top<0&&(t.pos.y=t.height,t.force.y=0)}function p(t){t.pos.x+=t.force.x,t.pos.y+=t.force.y}function s(t){t.jumping?t.animation.type="jumping":t.keys.left||t.keys.right?t.animation.type="walking":t.keys.down?t.animation.type="lyingDown":t.keys.action?t.animation.type="givingPaw":t.animation.type="sitting",t.keys.left&&!t.keys.right?t.animation.flipped=!0:!t.keys.left&&t.keys.right&&(t.animation.flipped=!1)}function a(t){t.keys.left&&!t.keys.right?t.force.x=Math.max(t.force.x-t.config.accel,-t.config.maxX):!t.keys.left&&t.keys.right?t.force.x=Math.min(t.force.x+t.config.accel,t.config.maxX):t.jumping||(t.keys.down?t.force.x=t.force.x>0?Math.max(t.force.x-t.config.forcedDecel,0):Math.min(t.force.x+t.config.forcedDecel,0):t.force.x=t.force.x>0?Math.max(t.force.x-t.config.decel,0):Math.min(t.force.x+t.config.decel,0)),t.keys.jump&&!t.jumping?(t.force.y=-t.config.jump,t.jumping=!0):t.jumping&&t.keys.down?t.force.y=Math.min(t.force.y+t.config.forcedVertAccel,t.config.forcedMaxY):t.force.y=Math.min(t.force.y+t.config.vertAccel,t.config.maxY),!t.jumping&&t.force.y>=t.config.jumpGrace&&(t.jumping=!0)}function x(t){return{width:t.width,height:t.height,sprite:t.sprite,spriteImg:i("bded")("./".concat(t.sprite.img)),animation:{type:t.defaultAction,flipped:!1,altFrame:!1,actions:t.actions,variants:t.variants},pos:{x:0,y:0},force:{x:0,y:0},config:{accel:t.config.accel||1,decel:t.config.decel||1,forcedDecel:t.config.forcedDecel||2,forcedMaxY:t.config.forcedMaxY||24,forcedVertAccel:t.config.forcedVertAccel||2,jump:t.config.jump||12,jumpGrace:t.config.jumpGrace||6,maxX:t.config.maxX||8,maxY:t.config.maxY||12,vertAccel:t.config.vertAccel||1},keys:{left:!1,right:!1,down:!1,jump:!1,action:!1},collides:function(t){return("block"==t.physics||"top"==t.physics&&this.pos.y-this.force.y<=t.box.top&&!this.keys.down)&&this.box.left<t.box.right&&this.box.right>t.box.left&&this.box.top<t.box.bottom&&this.box.bottom>t.box.top},get box(){return{left:this.pos.x-this.width/2,right:this.pos.x+this.width/2,top:this.pos.y-this.height,bottom:this.pos.y}},get style(){var t='\n        position: absolute;\n        z-index: 1;\n        background-image: url("'.concat(this.spriteImg,'");\n        background-size: ').concat(this.sprite.x,"px ").concat(this.sprite.y,"px;\n        height: ").concat(this.height,"px;\n        width: ").concat(this.width,"px;\n        top: ").concat(this.pos.y-this.height,"px;\n        left: ").concat(this.pos.x-this.width/2,"px;\n      ");return this.animation.altFrame&&void 0!==this.animation.variants&&void 0!==this.animation.variants.altFrame&&(t+=h(this.animation.variants.altFrame)),void 0!==this.animation.actions&&void 0!==this.animation.actions[this.animation.type]&&(t+=h(this.animation.actions[this.animation.type])),this.animation.flipped&&(t+="-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);"),t}}}function h(t){var e="";return void 0!==t.x&&(e+="background-position-x: ".concat(-t.x,"px;")),void 0!==t.y&&(e+="background-position-y: ".concat(-t.y,"px;")),e}e["default"]={state:x(o),mutations:{keyDown:function(t,e){void 0!==r[e]&&(t.keys[r[e]]=!0)},keyUp:function(t,e){void 0!==r[e]&&(t.keys[r[e]]=!1)},nextPhysicsTick:function(t){p(t),c(t,y["a"]),n(t,y["a"].tilesWithin(t.box)),a(t)},nextGraphicsTick:function(t){t.animation.altFrame=!t.animation.altFrame,s(t)}},actions:{setup:function(t){var e=t.state;e.pos.x=y["a"].start.x||e.width/2,e.pos.y=y["a"].start.y||e.height}}}},bded:function(t,e,i){var o={"./":"ae3f","./index":"ae3f","./index.js":"ae3f","./masza":"4ff6","./masza.json":"4ff6","./masza.png":"6280"};function y(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}y.keys=function(){return Object.keys(o)},y.resolve=r,t.exports=y,y.id="bded"}});
//# sourceMappingURL=index.d0ff3bfe.js.map