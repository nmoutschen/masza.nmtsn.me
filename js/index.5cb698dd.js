(function(t){function e(e){for(var o,s,c=e[0],a=e[1],y=e[2],h=0,x=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&x.push(n[s][0]),n[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);p&&p(e);while(x.length)x.shift()();return r.push.apply(r,y||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,c=1;c<i.length;c++){var a=i[c];0!==n[a]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var o={},n={index:0},r=[];function s(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=o,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var y=0;y<c.length;y++)e(c[y]);var p=a;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"241a":function(t,e,i){t.exports=i.p+"img/items.139ff607.png"},"4ff6":function(t){t.exports=JSON.parse('{"width":32,"height":32,"sprite":{"x":160,"y":64,"img":"masza.png"},"defaultAction":"sitting","actions":{"sitting":{"x":0},"givingPaw":{"x":32},"walking":{"x":64},"jumping":{"x":96},"lyingDown":{"x":128}},"variants":{"altFrame":{"y":32}},"config":{"accel":2,"decel":1,"forcedDecel":2,"forcedMaxY":24,"forcedVertAccel":2,"jump":12,"jumpGrace":6,"maxY":12,"maxX":10,"vertAccel":1}}')},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Game")],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{devMode:t.devMode},style:t.gameStyle,attrs:{id:"game"}},[i("div",{style:t.gameViewStyle,attrs:{id:"gameView"}},[i("div",{style:t.masza.style}),t._l(t.items,(function(t){return i("div",{key:t.id,style:t.style})}))],2),t.devMode?i("p",{attrs:{id:"debug"}},[t._v(" pos("+t._s(this.$store.state.masza.pos.x)+", "+t._s(this.$store.state.masza.pos.y)+")"),i("br"),t._v(" force("+t._s(this.$store.state.masza.force.x)+", "+t._s(this.$store.state.masza.force.y)+")"),i("br"),t._v(" items: "+t._s(t.items.length)+" ")]):t._e()])},c=[];function a(t){t.$store.dispatch("nextGraphicsTick")}function y(t){t.$store.dispatch("nextPhysicsTick")}var p={name:"Game",computed:{masza:function(){return this.$store.state.masza},items:function(){return this.$store.state.game.itemsWithin(this.$store.state.camera.box)},devMode:function(){return!1},gameStyle:function(){var t="";return t+="width: "+this.$store.state.camera.width+"px;",t+="height: "+this.$store.state.camera.height+"px;",t},gameViewStyle:function(){return this.$store.state.camera.style}},data:function(){return{mainGraphicsLoop:null,mainPhysicsLoop:null}},methods:{keyDown:function(t){this.$store.dispatch("keyDown",t.keyCode)},keyUp:function(t){this.$store.dispatch("keyUp",t.keyCode)}},created:function(){var t=this;this.$store.dispatch("setup"),window.addEventListener("keydown",this.keyDown,!1),window.addEventListener("keyup",this.keyUp,!1),this.mainGraphicsLoop=setInterval((function(){a(t)}),120),this.mainPhysicsLoop=setInterval((function(){y(t)}),30)},destroyed:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),clearInterval(this.mainGraphicsLoop),clearInterval(this.mainPhysicsLoop)}},h=p,x=(i("bb9a"),i("2877")),f=Object(x["a"])(h,s,c,!1,null,null,null),d=f.exports,u={name:"App",components:{Game:d}},l=u,g=(i("5c0b"),Object(x["a"])(l,n,r,!1,null,null,null)),m=g.exports,b=i("2f62");i("99af");function w(t,e,i){i.pos.x-t.pos.x<t.width/4&&t.pos.x>0?t.pos.x=Math.max(i.pos.x-t.width/4,0):i.pos.x>t.pos.x+t.width-t.width/4&&t.pos.x<e.width-t.width&&(t.pos.x=Math.min(i.pos.x-t.width+t.width/4,e.width-t.width)),i.pos.y-t.pos.y<t.height/4&&t.pos.y>0?t.pos.y=Math.max(i.pos.y-t.height/4,0):i.pos.y>t.pos.y+t.height-t.height/4&&t.pos.y<e.height-t.height&&(t.pos.y=Math.min(i.pos.y-t.height+t.height/4,e.height-t.height))}var k={state:{width:512,height:512,pos:{x:0,y:0},get box(){return{left:this.pos.x,right:this.pos.x+this.width,top:this.pos.y,bottom:this.pos.y+this.height}},get style(){return"\n        width: ".concat(this.width,"px;\n        height: ").concat(this.height,"px;\n        top: ").concat(-this.pos.y,"px;\n        left: ").concat(-this.pos.x,"px;\n      ")}},mutations:{nextPhysicsTick:function(t,e){w(t,e.game,e.masza)}}},v=i("eff3"),T=i("ae3f");o["a"].use(b["a"]);var E=new b["a"].Store({state:{},mutations:{},actions:{keyUp:function(t,e){var i=t.commit;i("keyUp",e)},keyDown:function(t,e){var i=t.commit;i("keyDown",e)},nextGraphicsTick:function(t){var e=t.commit,i=t.rootState;e("nextGraphicsTick",i)},nextPhysicsTick:function(t){var e=t.commit,i=t.rootState;e("nextPhysicsTick",i)}},modules:{camera:k,game:v["default"],masza:T["default"]}});o["a"].config.productionTip=!1,new o["a"]({store:E,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var o=i("9c0c"),n=i.n(o);n.a},6086:function(t,e,i){var o={"./":"eff3","./index":"eff3","./index.js":"eff3","./items.png":"241a","./tileset.png":"dd09","./world":"91b5","./world.json":"91b5"};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id="6086"},6280:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAgCAYAAACFM/9sAAACWElEQVRoQ+1a267CMAxj///ROypaUU5IYieBDsR44QG5XR03F4/tdn1aDGweet/33ftt2zYXNzFdfOtUC8EmEdHh57NFJHbxY49uALp4NgZPBHobD9ENUYrvFPksHpG3KoAvIXAeOlpMK1EGoIuX+7IB6Aogm4JCBeqHtohkCIyIZPArA5i9AeE1lAc36gYsQBW8peBuAKp45gaEJHgbs1W4ip8kVgIgFVTBp1MQkSx1OwNbGLVmCT8OUg3AJLGCT98ARKBOyoz65JoM/iDLCwwMQBevOcjcgFBNQUWjVJjBi4f+tzYTAHVtS3iLREbBZxF47ynHJ6rCTNX31JOZojoKhpW0cgimFfBSAZpiUAqp4qs3YDmBHQIG1lMLIm6qHagtHCGtKchspOeDMn2QkzvuB3XwVNB033mMkS6BcoKwgiSJ6wRBpx13EtEJNDtKBXi6AEkikHJE64J6Wzj/WwLyUhl1GNTq/PLv1HXSBKE8hooIg/+WoKQsKZXTSuRbidgiq+vndfFsAGE+EAe+/ECDVcrOiqLxTjuq2gU4CZ8SgKzmTDNOEVi1g17lJ64MIMrfOgVdfqBqOLOONuqZHjMrW0BUQ1vCZ9yQqABdfuDxIqvaRjFuijVJeYXTzK2oXLN2krcOg/cG+WNNyg/UI5Z4Hoj3SGQUfJad5eZeZG+h99EdvCSSdcTPIvDj/MCqgkvTBDOKIXvp0/zA2b5kFbycQET+u4ifCkOuDtpfK/Xp/cE8YODnzY7e9RKtZhT9JURPAJ4SmAD8vB8YGZ7ZImIUBjj/Z/zAP16VmT56pNtZAAAAAElFTkSuQmCC"},"91b5":function(t){t.exports=JSON.parse('{"width":32,"height":16,"start":{"x":7,"y":7},"sprite":{"img":"tileset.png","x":16,"y":16},"itemTypes":{"dirtTL":{"x":0,"y":0},"dirtT":{"x":1,"y":0},"dirtTR":{"x":2,"y":0},"dirtL":{"x":0,"y":1},"dirtI":{"x":1,"y":1},"dirtR":{"x":2,"y":1},"dirtIL":{"x":3,"y":0},"dirtIR":{"x":3,"y":1},"brickTL":{"x":0,"y":2},"brickT":{"x":1,"y":2},"brickTR":{"x":2,"y":2},"brickTE":{"x":3,"y":2},"brickL":{"x":0,"y":3},"brick":{"x":1,"y":3},"brickR":{"x":2,"y":3},"brickE":{"x":3,"y":3},"concreteTL":{"x":4,"y":0},"concreteT":{"x":5,"y":0},"concreteTA":{"x":6,"y":0},"concreteTR":{"x":7,"y":0},"concreteL":{"x":4,"y":1},"concreteEL":{"x":5,"y":1},"concreteER":{"x":6,"y":1},"concreteR":{"x":7,"y":1},"concreteLA":{"x":4,"y":2},"concreteLE":{"x":5,"y":2},"concreteRE":{"x":6,"y":2},"concreteRA":{"x":7,"y":2},"concrete1":{"x":4,"y":3},"concrete2":{"x":5,"y":3},"concrete3":{"x":6,"y":3},"concrete4":{"x":7,"y":3},"woodL":{"x":8,"y":0},"wood":{"x":9,"y":0},"woodR":{"x":10,"y":0},"woodE":{"x":11,"y":0},"woodTopL":{"x":8,"y":1,"physics":"top"},"woodTop":{"x":9,"y":1,"physics":"top"},"woodTopR":{"x":10,"y":1,"physics":"top"},"woodTopE":{"x":11,"y":1,"physics":"top"},"pane":{"x":8,"y":3,"physics":"none"},"paneT":{"x":9,"y":3,"physics":"none"},"paneB":{"x":10,"y":3,"physics":"none"},"paneC":{"x":11,"y":3,"physics":"none"},"glassTL":{"x":12,"y":0},"glassT":{"x":13,"y":0},"glassTR":{"x":14,"y":0},"glassTE":{"x":15,"y":0},"glassL":{"x":12,"y":1},"glassC":{"x":13,"y":1},"glassR":{"x":14,"y":1},"glassHE":{"x":15,"y":1},"glassBL":{"x":12,"y":2},"glassB":{"x":13,"y":2},"glassBR":{"x":14,"y":2},"glassBE":{"x":15,"y":2},"glassLE":{"x":12,"y":3},"glassVE":{"x":13,"y":3},"glassRE":{"x":14,"y":3},"glass":{"x":15,"y":3},"fCouch":{"width":"2","x":0,"y":8},"fBall":{"x":2,"y":8},"fDogBed":{"x":3,"y":8,"physics":"none"},"fTv":{"width":"2","x":0,"y":9},"fComputer":{"width":"2","x":2,"y":9,"physics":"none"},"fTvStand":{"width":"2","x":0,"y":10},"fDesk":{"width":"2","x":2,"y":10,"physics":"top"},"tTitle":{"width":8,"x":0,"y":12,"physics":"none"},"tKeys":{"width":6,"x":8,"y":12,"physics":"none"}},"items":[{"type":"tTitle","x":4,"y":3},{"type":"tKeys","x":5,"y":4},{"type":"brickL","x":0,"y":15},{"type":"brickL","x":0,"y":14},{"type":"brickE","x":0,"y":13},{"type":"brickE","x":0,"y":12},{"type":"brickE","x":0,"y":11},{"type":"brickE","x":0,"y":10},{"type":"brickE","x":0,"y":9},{"type":"brickE","x":0,"y":8},{"type":"brickE","x":0,"y":7},{"type":"brickE","x":0,"y":6},{"type":"brickE","x":0,"y":5},{"type":"brickE","x":0,"y":4},{"type":"brickE","x":0,"y":3},{"type":"brickE","x":0,"y":2},{"type":"brickE","x":0,"y":1},{"type":"brickE","x":0,"y":0},{"type":"brick","x":1,"y":15},{"type":"brick","x":1,"y":14},{"type":"woodTop","x":1,"y":12},{"type":"woodTop","x":1,"y":10},{"type":"woodTopL","x":1,"y":8},{"type":"brick","x":2,"y":15},{"type":"brickR","x":2,"y":14},{"type":"woodTop","x":2,"y":8},{"type":"brickR","x":3,"y":15},{"type":"woodTop","x":3,"y":8},{"type":"woodL","x":4,"y":15},{"type":"wood","x":4,"y":8},{"type":"fCouch","x":4,"y":7},{"type":"wood","x":5,"y":15},{"type":"wood","x":5,"y":8},{"type":"wood","x":6,"y":15},{"type":"wood","x":6,"y":8},{"type":"wood","x":7,"y":15},{"type":"wood","x":7,"y":8},{"type":"fDogBed","x":7,"y":7},{"type":"wood","x":8,"y":15},{"type":"wood","x":8,"y":8},{"type":"fTvStand","x":8,"y":7},{"type":"fTv","x":8,"y":6},{"type":"wood","x":9,"y":15},{"type":"wood","x":9,"y":8},{"type":"wood","x":10,"y":15},{"type":"wood","x":10,"y":8},{"type":"wood","x":11,"y":15},{"type":"wood","x":11,"y":8},{"type":"wood","x":12,"y":15},{"type":"wood","x":12,"y":8},{"type":"wood","x":13,"y":15},{"type":"wood","x":13,"y":8},{"type":"fDesk","x":13,"y":7},{"type":"fComputer","x":13,"y":6},{"type":"wood","x":14,"y":15},{"type":"wood","x":14,"y":8},{"type":"brickE","x":15,"y":15},{"type":"brickE","x":15,"y":14},{"type":"brickTE","x":15,"y":13},{"type":"paneB","x":15,"y":12},{"type":"paneC","x":15,"y":11},{"type":"paneT","x":15,"y":10},{"type":"brickE","x":15,"y":9},{"type":"brickE","x":15,"y":8},{"type":"brickE","x":15,"y":7},{"type":"brickTE","x":15,"y":6},{"type":"paneB","x":15,"y":5},{"type":"paneC","x":15,"y":4},{"type":"paneT","x":15,"y":3},{"type":"brickE","x":15,"y":2},{"type":"brickE","x":15,"y":9},{"type":"brickE","x":15,"y":1},{"type":"brickE","x":15,"y":0},{"type":"dirtTL","x":16,"y":15},{"type":"dirtT","x":17,"y":15},{"type":"dirtT","x":18,"y":15},{"type":"dirtT","x":19,"y":15},{"type":"dirtT","x":20,"y":15},{"type":"dirtT","x":21,"y":15},{"type":"dirtT","x":22,"y":15},{"type":"dirtT","x":23,"y":15},{"type":"dirtT","x":24,"y":15},{"type":"dirtT","x":25,"y":15},{"type":"dirtT","x":26,"y":15},{"type":"dirtT","x":27,"y":15},{"type":"dirtT","x":28,"y":15},{"type":"dirtT","x":29,"y":15},{"type":"dirtT","x":30,"y":15},{"type":"dirtTR","x":31,"y":15}]}')},"9c0c":function(t,e,i){},ae3f:function(t,e,i){"use strict";i.r(e);i("99af"),i("4de4"),i("d3b7"),i("ddb0");var o=i("4ff6"),n={32:"jump",37:"left",39:"right",40:"down",69:"action"};function r(t,e){var i=e.filter((function(e){return t.collides(e)})).sort((function(e,i){return Math.min(Math.pow(t.box.left-i.box.left,2),Math.pow(t.box.right-i.box.right,2))+Math.min(Math.pow(t.box.top-i.box.top,2),Math.pow(t.box.bottom-i.box.bottom,2))-Math.min(Math.pow(t.box.left-e.box.left,2),Math.pow(t.box.right-e.box.right,2))-Math.min(Math.pow(t.box.top-e.box.top,2),Math.pow(t.box.bottom-e.box.bottom,2))}));while(i.length>0){var o=i.pop(0);if(t.collides(o)){var n={x:t.force.x>=0?o.box.left-t.box.right:o.box.right-t.box.left,y:t.force.y>=0?o.box.top-t.box.bottom:o.box.bottom-t.box.top},r={x:-t.force.x,y:-t.force.y},s={x:Math.ceil(r.x/n.x>=r.y/n.y?n.x:r.x*(n.y/r.y)),y:Math.ceil(r.x/n.x>=r.y/n.y?r.y*(n.x/r.x):n.y)};"block"==o.physics&&r.x/n.x>=r.y/n.y?(t.pos.x+=s.x,t.force.x=0):(t.pos.y+=s.y,t.force.y>0&&(t.jumping=!1),t.force.y=0)}}}function s(t,e){t.box.right>e.width?(t.pos.x=e.width-t.width/2,t.force.x=0):t.box.left<0&&(t.pos.x=t.width/2,t.force.x=0),t.box.bottom>e.height?(t.pos.y=e.height,t.force.y=0,t.jumping=!1):t.box.top<0&&(t.pos.y=t.height,t.force.y=0)}function c(t){t.pos.x+=t.force.x,t.pos.y+=t.force.y}function a(t){t.jumping?t.animation.type="jumping":t.keys.left||t.keys.right?t.animation.type="walking":t.keys.down?t.animation.type="lyingDown":t.keys.action?t.animation.type="givingPaw":t.animation.type="sitting",t.keys.left&&!t.keys.right?t.animation.flipped=!0:!t.keys.left&&t.keys.right&&(t.animation.flipped=!1)}function y(t){t.keys.left&&!t.keys.right?t.force.x=Math.max(t.force.x-t.config.accel,-t.config.maxX):!t.keys.left&&t.keys.right?t.force.x=Math.min(t.force.x+t.config.accel,t.config.maxX):t.jumping||(t.keys.down?t.force.x=t.force.x>0?Math.max(t.force.x-t.config.forcedDecel,0):Math.min(t.force.x+t.config.forcedDecel,0):t.force.x=t.force.x>0?Math.max(t.force.x-t.config.decel,0):Math.min(t.force.x+t.config.decel,0)),t.keys.jump&&!t.jumping?(t.force.y=-t.config.jump,t.jumping=!0):t.jumping&&t.keys.down?t.force.y=Math.min(t.force.y+t.config.forcedVertAccel,t.config.forcedMaxY):t.force.y=Math.min(t.force.y+t.config.vertAccel,t.config.maxY),!t.jumping&&t.force.y>=t.config.jumpGrace&&(t.jumping=!0)}function p(t){return{width:t.width,height:t.height,sprite:t.sprite,spriteImg:i("bded")("./".concat(t.sprite.img)),animation:{type:t.defaultAction,flipped:!1,altFrame:!1,actions:t.actions,variants:t.variants},pos:{x:0,y:0},force:{x:0,y:0},config:{accel:t.config.accel||1,decel:t.config.decel||1,forcedDecel:t.config.forcedDecel||2,forcedMaxY:t.config.forcedMaxY||24,forcedVertAccel:t.config.forcedVertAccel||2,jump:t.config.jump||12,jumpGrace:t.config.jumpGrace||6,maxX:t.config.maxX||8,maxY:t.config.maxY||12,vertAccel:t.config.vertAccel||1},keys:{left:!1,right:!1,down:!1,jump:!1,action:!1},collides:function(t){return("block"==t.physics||"top"==t.physics&&this.pos.y-this.force.y<=t.box.top&&!this.keys.down)&&this.box.left<t.box.right&&this.box.right>t.box.left&&this.box.top<t.box.bottom&&this.box.bottom>t.box.top},get box(){return{left:this.pos.x-this.width/2,right:this.pos.x+this.width/2,top:this.pos.y-this.height,bottom:this.pos.y}},get style(){var t='\n        position: absolute;\n        z-index: 1;\n        background-image: url("'.concat(this.spriteImg,'");\n        background-size: ').concat(this.sprite.x,"px ").concat(this.sprite.y,"px;\n        height: ").concat(this.height,"px;\n        width: ").concat(this.width,"px;\n        top: ").concat(this.pos.y-this.height,"px;\n        left: ").concat(this.pos.x-this.width/2,"px;\n      ");return this.animation.altFrame&&void 0!==this.animation.variants&&void 0!==this.animation.variants.altFrame&&(t+=h(this.animation.variants.altFrame)),void 0!==this.animation.actions&&void 0!==this.animation.actions[this.animation.type]&&(t+=h(this.animation.actions[this.animation.type])),this.animation.flipped&&(t+="-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);"),t}}}function h(t){var e="";return void 0!==t.x&&(e+="background-position-x: ".concat(-t.x,"px;")),void 0!==t.y&&(e+="background-position-y: ".concat(-t.y,"px;")),e}e["default"]={state:p(o),mutations:{keyDown:function(t,e){void 0!==n[e]&&(t.keys[n[e]]=!0)},keyUp:function(t,e){void 0!==n[e]&&(t.keys[n[e]]=!1)},nextPhysicsTick:function(t,e){c(t),s(t,e.game),r(t,e.game.itemsWithin(t.box)),y(t)},nextGraphicsTick:function(t){t.animation.altFrame=!t.animation.altFrame,a(t)}},actions:{setup:function(t){var e=t.state,i=t.rootState;e.pos.x=i.game.start.x||e.width/2,e.pos.y=i.game.start.y||e.height}}}},bb9a:function(t,e,i){"use strict";var o=i("cbc5"),n=i.n(o);n.a},bded:function(t,e,i){var o={"./":"ae3f","./index":"ae3f","./index.js":"ae3f","./masza":"4ff6","./masza.json":"4ff6","./masza.png":"6280"};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id="bded"},cbc5:function(t,e,i){},dd09:function(t,e,i){t.exports=i.p+"img/tileset.ab05f233.png"},eff3:function(t,e,i){"use strict";i.r(e);i("99af"),i("4160"),i("a630"),i("d81d"),i("d3b7"),i("6062"),i("3ca3"),i("159b"),i("ddb0");var o=i("d4ec"),n=i("bee2"),r=i("91b5"),s={width:128,height:128},c=32;function a(t,e){for(var i={},o=0;o<Math.ceil(e.width*c/s.width);o++){i[o]={};for(var n=0;n<Math.ceil(e.height*c/s.height);n++)i[o][n]=new Array}return t.forEach((function(t){for(var e=t.box,o=e.left,n=e.right,r=e.top,c=e.bottom,a=new Set,y=Math.floor(o/s.width);y<Math.ceil(n/s.width);y++)for(var p=Math.floor(r/s.height);p<Math.ceil(c/s.height);p++)a.add({x:y,y:p});a.forEach((function(e){var o=e.x,n=e.y;void 0!==i[o]&&void 0!==i[o][n]&&i[o][n].push(t)}))})),i}var y=0,p=function(){function t(e,i,n,r){Object(o["a"])(this,t),this.id=y++,this.spriteSize={x:e.x*c,y:e.y*c},this.spriteImg=i,this.height=r.height*c||32,this.width=r.width*c||32,this.sprite={x:r.x*c,y:r.y*c},this.physics=r.physics||"block",this.pos={x:n.x*c+this.width/2,y:n.y*c+this.height},this.type=n.type,this.box={left:this.pos.x-this.width/2,right:this.pos.x+this.width/2,top:this.pos.y-this.height,bottom:this.pos.y}}return Object(n["a"])(t,[{key:"style",get:function(){return'\n      position: absolute;\n      background-image: url("'.concat(this.spriteImg,'");\n      background-size: ').concat(this.spriteSize.x,"px ").concat(this.spriteSize.y,"px;\n      background-position: ").concat(-this.sprite.x,"px ").concat(-this.sprite.y,"px;\n      top: ").concat(this.pos.y-this.height,"px;\n      left: ").concat(this.pos.x-this.width/2,"px;\n      width: ").concat(this.width,"px;\n      height: ").concat(this.height,"px;\n    ")}}]),t}();function h(t){var e=i("6086")("./".concat(t.sprite.img)),o=t.items.map((function(i){return new p(t.sprite,e,i,t.itemTypes[i.type])}));return{start:{x:t.start.x*c+c/2||0,y:t.start.y*c+c||0},height:t.height*c||16,width:t.width*c||16,items:o,chunks:a(o,t),itemsWithin:function(t){for(var e=this,i=t.left,o=t.top,n=t.right,r=t.bottom,c=new Set,a=Math.floor(i/s.width);a<Math.ceil(n/s.width);a++)for(var y=Math.floor(o/s.height);y<Math.ceil(r/s.height);y++)c.add({x:a,y:y});var p=[];return c.forEach((function(t){var i=t.x,o=t.y;void 0!==e.chunks[i]&&void 0!==e.chunks[i][o]&&(p=p.concat(e.chunks[i][o]))})),Array.from(new Set(p))}}}e["default"]={state:h(r)}}});
//# sourceMappingURL=index.5cb698dd.js.map