(function(t){function e(e){for(var o,a,r=e[0],c=e[1],h=e[2],f=0,y=[];f<r.length;f++)a=r[f],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&y.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(y.length)y.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],o=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var o={},n={index:0},s=[];function a(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=o,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(i,o,function(e){return t[e]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var p=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"241a":function(t,e,i){t.exports=i.p+"img/items.7f5d326d.png"},"4ff6":function(t){t.exports=JSON.parse('{"width":32,"height":32,"sprite":{"x":160,"y":64,"img":"masza.png"},"defaultAction":"sitting","actions":{"sitting":{"x":0},"givingPaw":{"x":32},"walking":{"x":64},"jumping":{"x":96},"lyingDown":{"x":128}},"variants":{"altFrame":{"y":32}},"config":{"accel":2,"decel":1,"forcedDecel":2,"forcedMaxY":24,"forcedVertAccel":2,"jump":12,"jumpGrace":6,"maxY":12,"maxX":10,"vertAccel":1}}')},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Game")],1)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.gameStyle,attrs:{id:"game"}},[i("div",{style:t.gameViewStyle,attrs:{id:"gameView"}},[i("div",{style:t.masza.style}),t._l(t.items,(function(t){return i("div",{key:t.id,style:t.style})}))],2),t.devMode?i("p",{attrs:{id:"debug"}},[t._v(" pos("+t._s(this.$store.state.masza.pos.x)+", "+t._s(this.$store.state.masza.pos.y)+")"),i("br"),t._v(" force("+t._s(this.$store.state.masza.force.x)+", "+t._s(this.$store.state.masza.force.y)+") ")]):t._e()])},r=[];function c(t){t.$store.dispatch("nextGraphicsTick")}function h(t){t.$store.dispatch("nextPhysicsTick")}var p={name:"Game",computed:{masza:function(){return this.$store.state.masza},items:function(){return this.$store.state.game.items},devMode:function(){return!1},gameStyle:function(){var t="";return t+="width: "+this.$store.state.camera.width+"px;",t+="height: "+this.$store.state.camera.height+"px;",t},gameViewStyle:function(){var t="";return t+="width: "+this.$store.state.camera.width+"px;",t+="height: "+this.$store.state.camera.height+"px;",t+="top: "+-this.$store.state.camera.pos.y+"px;",t+="left: "+-this.$store.state.camera.pos.x+"px;",t}},data:function(){return{mainGraphicsLoop:null,mainPhysicsLoop:null}},methods:{keyDown:function(t){this.$store.dispatch("keyDown",t.keyCode)},keyUp:function(t){this.$store.dispatch("keyUp",t.keyCode)}},created:function(){var t=this;this.$store.dispatch("setup"),window.addEventListener("keydown",this.keyDown,!1),window.addEventListener("keyup",this.keyUp,!1),this.mainGraphicsLoop=setInterval((function(){c(t)}),125),this.mainPhysicsLoop=setInterval((function(){h(t)}),25)},destroyed:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),clearInterval(this.mainGraphicsLoop),clearInterval(this.mainPhysicsLoop)}},f=p,y=(i("bb9a"),i("2877")),d=Object(y["a"])(f,a,r,!1,null,null,null),u=d.exports,x={name:"App",components:{Game:u}},m=x,l=(i("5c0b"),Object(y["a"])(m,n,s,!1,null,null,null)),g=l.exports,w=i("2f62");function b(t,e,i){i.pos.x-t.pos.x<t.width/4&&t.pos.x>0?t.pos.x=Math.max(i.pos.x-t.width/4,0):i.pos.x>t.pos.x+t.width-t.width/4&&t.pos.x<e.width-t.width&&(t.pos.x=Math.min(i.pos.x-t.width+t.width/4,e.width-t.width)),i.pos.y-t.pos.y<t.height/4&&t.pos.y>0?t.pos.y=Math.max(i.pos.y-t.height/4,0):i.pos.y>t.pos.y+t.height-t.height/4&&t.pos.y<e.height-t.height&&(t.pos.y=Math.min(i.pos.y-t.height+t.height/4,e.height-t.height))}var k={state:{width:512,height:512,pos:{x:0,y:0}},mutations:{nextPhysicsTick:function(t,e){b(t,e.game,e.masza)}}},v=i("eff3"),j=i("ae3f");o["a"].use(w["a"]);var z=new w["a"].Store({state:{},mutations:{},actions:{keyUp:function(t,e){var i=t.commit;i("keyUp",e)},keyDown:function(t,e){var i=t.commit;i("keyDown",e)},nextGraphicsTick:function(t){var e=t.commit,i=t.rootState;e("nextGraphicsTick",i)},nextPhysicsTick:function(t){var e=t.commit,i=t.rootState;e("nextPhysicsTick",i)}},modules:{camera:k,game:v["default"],masza:j["default"]}});o["a"].config.productionTip=!1,new o["a"]({store:z,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var o=i("9c0c"),n=i.n(o);n.a},6086:function(t,e,i){var o={"./":"eff3","./index":"eff3","./index.js":"eff3","./items.png":"241a","./world":"91b5","./world.json":"91b5"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id="6086"},6280:function(t,e,i){t.exports=i.p+"img/masza.68bdd6df.png"},"91b5":function(t){t.exports=JSON.parse('{"width":1024,"height":512,"start":{"x":32,"y":480},"sprite":{"img":"items.png","x":256,"y":256},"itemTypes":{"ball":{"width":32,"height":32,"sprite":{"x":64,"y":0}},"couch":{"width":64,"height":32,"sprite":{"x":0,"y":0}},"dogBed":{"width":32,"height":32,"sprite":{"x":96,"y":0},"physics":"none"},"tv":{"width":64,"height":64,"sprite":{"x":0,"y":32}},"desk":{"width":64,"height":32,"sprite":{"x":64,"y":64},"physics":"top"},"deskTop":{"width":64,"height":32,"sprite":{"x":64,"y":32},"physics":"none"},"human1":{"width":32,"height":64,"sprite":{"x":128,"y":0},"physics":"none"},"human2":{"width":32,"height":64,"sprite":{"x":128,"y":64},"physics":"none"},"keys":{"width":192,"height":32,"sprite":{"x":0,"y":128},"physics":"none"},"title":{"width":256,"height":32,"sprite":{"x":0,"y":224},"physics":"none"}},"items":[{"type":"title","x":256,"y":240},{"type":"keys","x":256,"y":272},{"type":"couch","x":32,"y":512},{"type":"dogBed","x":112,"y":512},{"type":"tv","x":160,"y":512},{"type":"desk","x":288,"y":512},{"type":"desk","x":288,"y":480},{"type":"desk","x":288,"y":416},{"type":"desk","x":288,"y":352},{"type":"desk","x":288,"y":288},{"type":"deskTop","x":288,"y":480},{"type":"human1","x":592,"y":512},{"type":"human2","x":624,"y":512}]}')},"9c0c":function(t,e,i){},ae3f:function(t,e,i){"use strict";i.r(e);i("99af"),i("4160"),i("d3b7"),i("159b"),i("ddb0");var o=i("4ff6");function n(t,e){e.forEach((function(e){if(("block"==e.physics||"top"==e.physics&&t.pos.y-t.force.y<=e.box.top)&&t.box.collides(e.box)){var i={x:t.force.x>=0?e.box.left-t.box.right:e.box.right-t.box.left,y:t.force.y>=0?e.box.top-t.box.bottom:e.box.bottom-t.box.top},o={x:-t.force.x,y:-t.force.y},n={x:Math.ceil(o.x/i.x>=o.y/i.y?i.x:o.x*(i.y/o.y)),y:Math.ceil(o.x/i.x>=o.y/i.y?o.y*(i.x/o.x):i.y)};"block"==e.physics&&o.x/i.x>=o.y/i.y?(t.pos.x+=n.x,t.force.x=0):(t.pos.y+=n.y,t.force.y>0&&(t.jumping=!1),t.force.y=0)}}))}function s(t,e){t.box.right>e.width?(t.pos.x=e.width-t.width/2,t.force.x=0):t.box.left<0&&(t.pos.x=t.width/2,t.force.x=0),t.box.bottom>e.height?(t.pos.y=e.height,t.force.y=0,t.jumping=!1):t.box.top<0&&(t.pos.y=t.height,t.force.y=0)}function a(t){t.pos.x+=t.force.x,t.pos.y+=t.force.y}function r(t){t.jumping?t.animation.type="jumping":t.keys.left||t.keys.right?t.animation.type="walking":t.keys.down?t.animation.type="lyingDown":t.keys.action?t.animation.type="givingPaw":t.animation.type="sitting",t.keys.left&&!t.keys.right?t.animation.flipped=!0:!t.keys.left&&t.keys.right&&(t.animation.flipped=!1)}function c(t){t.keys.left&&!t.keys.right?t.force.x=Math.max(t.force.x-t.config.accel,-t.config.maxX):!t.keys.left&&t.keys.right?t.force.x=Math.min(t.force.x+t.config.accel,t.config.maxX):t.jumping||(t.keys.down?t.force.x=t.force.x>0?Math.max(t.force.x-t.config.forcedDecel,0):Math.min(t.force.x+t.config.forcedDecel,0):t.force.x=t.force.x>0?Math.max(t.force.x-t.config.decel,0):Math.min(t.force.x+t.config.decel,0)),t.keys.jump&&!t.jumping?(t.force.y=-t.config.jump,t.jumping=!0):t.jumping&&t.keys.down?t.force.y=Math.min(t.force.y+t.config.forcedVertAccel,t.config.forcedMaxY):t.force.y=Math.min(t.force.y+t.config.vertAccel,t.config.maxY),!t.jumping&&t.force.y>=t.config.jumpGrace&&(t.jumping=!0)}function h(t){return{width:t.width,height:t.height,sprite:t.sprite,spriteImg:i("bded")("./".concat(t.sprite.img)),animation:{type:t.defaultAction,flipped:!1,altFrame:!1},pos:{x:0,y:0},force:{x:0,y:0},config:{accel:t.config.accel||1,decel:t.config.decel||1,forcedDecel:t.config.forcedDecel||2,forcedMaxY:t.config.forcedMaxY||24,forcedVertAccel:t.config.forcedVertAccel||2,jump:t.config.jump||12,jumpGrace:t.config.jumpGrace||6,maxX:t.config.maxX||8,maxY:t.config.maxY||12,vertAccel:t.config.vertAccel||1},keys:{left:!1,right:!1,down:!1,jump:!1,action:!1},actions:t.actions,variants:t.variants,get box(){return{left:this.pos.x-this.width/2,right:this.pos.x+this.width/2,top:this.pos.y-this.height,bottom:this.pos.y,collides:function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top}}},get style(){var e='\n        position: absolute;\n        z-index: 1;\n        background-image: url("'.concat(this.spriteImg,'");\n        background-size: ').concat(this.sprite.x,"px ").concat(this.sprite.y,"px;\n        height: ").concat(this.height,"px;\n        width: ").concat(this.width,"px;\n        top: ").concat(this.pos.y-this.height,"px;\n        left: ").concat(this.pos.x-this.width/2,"px;\n      ");return this.animation.altFrame&&void 0!==this.variants&&void 0!==this.variants.altFrame&&(e+=p(this.variants.altFrame)),void 0!==t.actions&&void 0!==t.actions[this.animation.type]&&(e+=p(this.actions[this.animation.type])),this.animation.flipped&&(e+="-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);"),e}}}function p(t){var e="";return void 0!==t.x&&(e+="background-position-x: ".concat(-t.x,"px;")),void 0!==t.y&&(e+="background-position-y: ".concat(-t.y,"px;")),e}e["default"]={state:h(o),getters:{maszabox:function(t){return{left:t.pos.x-t.width/2,right:t.pos.x+t.width/2,top:t.pos.y-t.height,bottom:t.pos.y}},maszaStyle:function(t){var e='\n        position: absolute;\n        z-index: 1;\n        background-image: url("'.concat(t.spriteImg,'");\n        background-size: ').concat(t.sprite.x,"px ").concat(t.sprite.y,"px;\n        height: ").concat(t.height,"px;\n        width: ").concat(t.width,"px;\n        top: ").concat(t.pos.y-t.height,"px;\n        left: ").concat(t.pos.x-t.width/2,"px;\n      ");return t.animation.altFrame&&void 0!==t.variants&&void 0!==t.variants.altFrame&&(e+=p(t.variants.altFrame)),void 0!==o.actions&&void 0!==o.actions[t.animation.type]&&(e+=p(t.actions[t.animation.type])),t.animation.flipped&&(e+="-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);"),e}},mutations:{keyDown:function(t,e){switch(e){case 32:t.keys.jump=!0;break;case 37:t.keys.left=!0;break;case 39:t.keys.right=!0;break;case 40:t.keys.down=!0;break;case 69:t.keys.action=!0;break}},keyUp:function(t,e){switch(e){case 32:t.keys.jump=!1;break;case 37:t.keys.left=!1;break;case 39:t.keys.right=!1;break;case 40:t.keys.down=!1;break;case 69:t.keys.action=!1;break}},nextPhysicsTick:function(t,e){a(t),s(t,e.game),n(t,e.game.items),c(t)},nextGraphicsTick:function(t){t.animation.altFrame=!t.animation.altFrame,r(t)}},actions:{setup:function(t){var e=t.state,i=t.rootState;e.pos.x=i.game.start.x||e.width/2,e.pos.y=i.game.start.y||e.height},collides:function(t,e){var i=t.getters,o=i.box;return o.left<e.right&&o.right>e.left&&o.top<e.bottom&&o.bottom>e.top}}}},bb9a:function(t,e,i){"use strict";var o=i("cbc5"),n=i.n(o);n.a},bded:function(t,e,i){var o={"./":"ae3f","./index":"ae3f","./index.js":"ae3f","./masza":"4ff6","./masza.json":"4ff6","./masza.png":"6280"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id="bded"},cbc5:function(t,e,i){},eff3:function(t,e,i){"use strict";i.r(e);i("99af"),i("d81d");var o=i("d4ec"),n=i("bee2"),s=i("91b5"),a=0,r=function(){function t(e,i,n,s){Object(o["a"])(this,t),this.id=a++,this.spriteSize=e,this.spriteImg=i,this.physics=void 0===s.physics?"block":s.physics,this.pos={x:n.x,y:n.y},this.type=n.type,this.height=s.height,this.sprite=s.sprite,this.width=s.width,this.box={left:this.pos.x-this.width/2,right:this.pos.x+this.width/2,top:this.pos.y-this.height,bottom:this.pos.y}}return Object(n["a"])(t,[{key:"style",get:function(){return'\n      position: absolute;\n      background-image: url("'.concat(this.spriteImg,'");\n      background-size: ').concat(this.spriteSize.x,"px ").concat(this.spriteSize.y,"px;\n      background-position: ").concat(-this.sprite.x,"px ").concat(-this.sprite.y,"px;\n      top: ").concat(this.pos.y-this.height,"px;\n      left: ").concat(this.pos.x-this.width/2,"px;\n      width: ").concat(this.width,"px;\n      height: ").concat(this.height,"px;\n    ")}}]),t}();function c(t){var e=i("6086")("./".concat(t.sprite.img)),o={start:t.start||{x:0,y:0},height:t.height||512,width:t.width||512,items:t.items.map((function(i){return new r(t.sprite,e,i,t.itemTypes[i.type])}))};return o}e["default"]={state:c(s)}}});
//# sourceMappingURL=index.de7958c0.js.map