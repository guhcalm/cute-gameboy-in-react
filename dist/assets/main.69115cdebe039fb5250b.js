(()=>{"use strict";var n,a={118:(n,a,t)=>{var e,r,i,o,c,s=t(745),d=t(168);!function(n){n[n.ACTIVATE=0]="ACTIVATE",n[n.INACTIVATE=1]="INACTIVATE"}(e||(e={})),function(n){n[n.LEFT=0]="LEFT",n[n.RIGHT=1]="RIGHT",n[n.UP=2]="UP",n[n.DOWN=3]="DOWN"}(r||(r={})),function(n){n[n.SELECT=0]="SELECT",n[n.START=1]="START"}(i||(i={})),function(n){n[n.E=0]="E",n[n.Q=1]="Q"}(o||(o={})),function(n){n[n.DEFAULT=0]="DEFAULT"}(c||(c={}));const p={name:c.DEFAULT,palette:{surface:{main:"#bcaaa4",on:"#ffffff"},background:{main:"#bcaaa4",on:"rgb(38,38,38)"},error:{main:"#b00020",on:"#ffffff"},primary:{light:"#EFEBE9",main:"#A1887F",dark:"#6D4C41",on:"rgb(38,38,38)"},secondary:{light:"rgb(110,110,110)",main:"rgb(38,38,38)",dark:"black",on:"#A1887F"},terciary:{light:"#FFB74D",main:"#FB8C00",dark:"#E65100",on:"#ffffff"},quaternary:{light:"#FF5A49",main:"#b71c1c",dark:"#4A0000",on:"#ffffff"},quinary:{light:"#9ab1ed",main:"#143079",dark:"#0a183c",on:"#ffffff"}}};var l=e.INACTIVATE;const x={status:l,settings:{theme:p},keys:{startupSwitcher:l,directionalPad:{left:l,right:l,up:l,down:l},operationalPad:{select:l,start:l},actionPad:{q:l,e:l}}};var u=e,h=u.ACTIVATE,f=u.INACTIVATE,v=r,y=v.LEFT,b=v.RIGHT,g=v.UP,k=v.DOWN,m=i,P=m.SELECT,w=m.START,j=o,T=j.Q,A=j.E;const O=(0,d.oM)({name:"gameboy",initialState:x,reducers:{activateStatus:function(n){n.status=h},inactivateStatus:function(n){n.status=f},clickStartupSwitcher:function(n){n.keys.startupSwitcher=h},unclickStartupSwitcher:function(n){n.keys.startupSwitcher=h},clickDirectionalPad:function(n,a){var t=a.payload;t===y&&(n.keys.directionalPad.left=h),t===b&&(n.keys.directionalPad.right=h),t===g&&(n.keys.directionalPad.up=h),t===k&&(n.keys.directionalPad.down=h)},unclickDirectionalPad:function(n,a){var t=a.payload;t===y&&(n.keys.directionalPad.left=h),t===b&&(n.keys.directionalPad.right=h),t===g&&(n.keys.directionalPad.up=h),t===k&&(n.keys.directionalPad.down=h)},clickOperationalPad:function(n,a){var t=a.payload;t===P&&(n.keys.operationalPad.select=h),t===w&&(n.keys.operationalPad.start=h)},unclickOperationalPad:function(n,a){var t=a.payload;t===P&&(n.keys.operationalPad.select=f),t===w&&(n.keys.operationalPad.start=f)},clickActionPad:function(n,a){var t=a.payload;t===T&&(n.keys.actionPad.q=h),t===A&&(n.keys.actionPad.e=h)},unclickActionPad:function(n,a){var t=a.payload;t===T&&(n.keys.actionPad.q=f),t===A&&(n.keys.actionPad.e=f)}}});var E=t(857),S=t(294),N=t(998),I=e.INACTIVATE;const D={startupSwitcher:I,directionalPad:{left:I,right:I,up:I,down:I},operationalPad:{select:I,start:I},actionPad:{q:I,e:I}};var q=e,z=q.ACTIVATE,C=q.INACTIVATE,U=r,V=U.LEFT,L=U.RIGHT,Z=U.UP,M=U.DOWN,F=i,R=F.SELECT,Q=F.START,G=o,H=G.Q,W=G.E;const _=(0,d.oM)({name:"keyboard",initialState:D,reducers:{clickStartupSwitcher:function(n){n.startupSwitcher=e.ACTIVATE},unclickStartupSwitcher:function(n){n.startupSwitcher=e.INACTIVATE},clickDirectionalPad:function(n,a){var t=a.payload;t===V&&(n.directionalPad.left=z),t===L&&(n.directionalPad.right=z),t===Z&&(n.directionalPad.up=z),t===M&&(n.directionalPad.down=z)},unclickDirectionalPad:function(n,a){var t=a.payload;t===V&&(n.directionalPad.left=C),t===L&&(n.directionalPad.right=C),t===Z&&(n.directionalPad.up=C),t===M&&(n.directionalPad.down=C)},clickOperationalPad:function(n,a){var t=a.payload;t===R&&(n.operationalPad.select=z),t===Q&&(n.operationalPad.start=z)},unclickOperationalPad:function(n,a){var t=a.payload;t===R&&(n.operationalPad.select=C),t===Q&&(n.operationalPad.start=C)},clickActionPad:function(n,a){var t=a.payload;t===H&&(n.actionPad.q=z),t===W&&(n.actionPad.e=z)},unclickActionPad:function(n,a){var t=a.payload;t===H&&(n.actionPad.q=C),t===W&&(n.actionPad.e=C)}}});var B=r,Y=B.LEFT,X=B.RIGHT,J=B.UP,K=B.DOWN,$=i,nn=$.SELECT,an=$.START,tn=o,en=tn.Q,rn=tn.E,on=_.actions;const cn=function(){var n=(0,N.I0)(),a=function(a){return function(n,a){65!==n&&37!=n||a(on.clickDirectionalPad(Y)),68!==n&&39!=n||a(on.clickDirectionalPad(X)),87!==n&&38!=n||a(on.clickDirectionalPad(J)),83!==n&&40!=n||a(on.clickDirectionalPad(K)),32===n&&a(on.clickOperationalPad(an)),13===n&&a(on.clickOperationalPad(nn)),81===n&&a(on.clickActionPad(en)),69===n&&a(on.clickActionPad(rn)),84!==n&&27!==n||a(on.clickStartupSwitcher())}(a.keyCode,n)},t=function(a){return function(n,a){65!==n&&37!=n||a(on.unclickDirectionalPad(Y)),68!==n&&39!=n||a(on.unclickDirectionalPad(X)),87!==n&&38!=n||a(on.unclickDirectionalPad(J)),83!==n&&40!=n||a(on.unclickDirectionalPad(K)),32===n&&a(on.unclickOperationalPad(an)),13===n&&a(on.unclickOperationalPad(nn)),81===n&&a(on.unclickActionPad(en)),69===n&&a(on.unclickActionPad(rn)),84!==n&&27!==n||a(on.unclickStartupSwitcher())}(a.keyCode,n)};(0,S.useEffect)((function(){return window.addEventListener("keydown",a),window.addEventListener("keyup",t),function(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",t)}}),[])};const sn=function(){cn()};var dn=function(n){return n.domains.hardware.status},pn=function(n){return n.domains.hardware.keypad},ln=function(n){return n.domains.system.status},xn=function(n){return n.gameboy.status},un=function(n){return n.gameboy.keys},hn=e.INACTIVATE;const fn={status:hn,keypad:{startupSwitcher:hn,directionalPad:{left:hn,right:hn,up:hn,down:hn},operationalPad:{select:hn,start:hn},actionPad:{q:hn,e:hn}}};var vn=e,yn=vn.ACTIVATE,bn=vn.INACTIVATE,gn=r,kn=gn.LEFT,mn=gn.RIGHT,Pn=gn.UP,wn=gn.DOWN,jn=i,Tn=jn.SELECT,An=jn.START,On=o,En=On.Q,Sn=On.E;const Nn=(0,d.oM)({name:"hardware",initialState:fn,reducers:{activateStatus:function(n){n.status=e.ACTIVATE},inactivateStatus:function(n){n.status=e.INACTIVATE},clickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.ACTIVATE},unclickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.INACTIVATE},clickDirectionalPad:function(n,a){var t=a.payload;t===kn&&(n.keypad.directionalPad.left=yn),t===mn&&(n.keypad.directionalPad.right=yn),t===Pn&&(n.keypad.directionalPad.up=yn),t===wn&&(n.keypad.directionalPad.down=yn)},unclickDirectionalPad:function(n,a){var t=a.payload;t===kn&&(n.keypad.directionalPad.left=bn),t===mn&&(n.keypad.directionalPad.right=bn),t===Pn&&(n.keypad.directionalPad.up=bn),t===wn&&(n.keypad.directionalPad.down=bn)},clickOperationalPad:function(n,a){var t=a.payload;t===Tn&&(n.keypad.operationalPad.select=yn),t===An&&(n.keypad.operationalPad.start=yn)},unclickOperationalPad:function(n,a){var t=a.payload;t===Tn&&(n.keypad.operationalPad.select=bn),t===An&&(n.keypad.operationalPad.start=bn)},clickActionPad:function(n,a){var t=a.payload;t===En&&(n.keypad.actionPad.q=yn),t===Sn&&(n.keypad.actionPad.e=yn)},unclickActionPad:function(n,a){var t=a.payload;t===En&&(n.keypad.actionPad.q=bn),t===Sn&&(n.keypad.actionPad.e=bn)}}}),In=function(){var n=(0,N.v9)(dn),a=(0,N.v9)(pn),t=e.ACTIVATE;return{className:n===t?"activate":"inactivate",inverseClass:n!==t?"activate":"inactivate",dispatch:(0,N.I0)(),actions:Nn.actions,enumn:{directionalPad:r,actionPad:o,operationalPad:i},keypad:{directionalPad:{left:a.directionalPad.left===t?"activate":"inactivate",right:a.directionalPad.right===t?"activate":"inactivate",up:a.directionalPad.up===t?"activate":"inactivate",down:a.directionalPad.down===t?"activate":"inactivate"},actionPad:{q:a.actionPad.q===t?"activate":"inactivate",e:a.actionPad.e===t?"activate":"inactivate"},operationalPad:{select:a.operationalPad.select===t?"activate":"inactivate",start:a.operationalPad.start===t?"activate":"inactivate"}}}};var Dn,qn=t(804);const zn=qn.ZP.div(Dn||(Cn=["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: var(--secondary);\n  border-radius: 10px;\n  border-bottom-right-radius: 50px;\n  box-shadow: -1px -1px 2px var(--primary-on-dark),\n    1px 1px 1px var(--primary-on-light);\n\n  will-change: height;\n  transition: 0.5s height;\n  &.inactivate {\n    height: 42%;\n  }\n\n  &.activate {\n    height: 42%;\n    @media screen and (min-width: 700px) {\n      height: 60%;\n    }\n  }\n"],Un||(Un=Cn.slice(0)),Dn=Object.freeze(Object.defineProperties(Cn,{raw:{value:Object.freeze(Un)}}))));var Cn,Un,Vn,Ln,Zn,Mn,Fn,Rn;function Qn(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}const Gn=qn.ZP.div(Vn||(Vn=Qn(['\n  --diameter: 90px;\n  height: var(--diameter);\n  width: var(--diameter);\n  position: absolute;\n  left: 20px;\n  border-radius: 50%;\n  --higher: 40%;\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));\n    &::after {\n      width: 30%;\n      height: 30%;\n      content: "";\n      display: block;\n      background-color: var(--secondary-on-dark);\n    }\n  }\n\n  will-change: top;\n  transition: 0.5s top;\n  &.inactivate {\n    top: calc(46% + 30px);\n  }\n  &.activate {\n    top: calc(46% + 30px);\n    @media screen and (min-width: 700px) {\n      top: calc(60% + 40px);\n    }\n  }\n\n  button {\n    cursor: pointer;\n  }\n'])));var Hn=qn.ZP.button(Ln||(Ln=Qn(["\n  position: absolute;\n  height: var(--higher);\n  width: calc((100% - var(--higher) + 2px) / 2);\n  left: 0;\n  top: 50%;\n  transform: translatey(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(100% 0, 100% 100%, 0 50%);\n  }\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n    inset 0.7px -0.7px 0 0 var(--secondary),\n    inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset 1.4px -1.4px 0 0 var(--secondary-on-dark),\n    inset 2px 2px 2px 0 var(--secondary-on-light),\n    inset 2px -2px 2px 0 var(--secondary-on-light),\n    inset 0px -8px 4px -4px var(--secondary-on-dark),\n    inset 0px 8px 4px -4px var(--secondary-on-light),\n    1px 1px 3px 0 rgba(0, 0, 0, 1);\n  &:hover,\n  &:focus,\n  &:active,\n  &.activate {\n    box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n      inset 0.7px -0.7px 0 0 var(--secondary),\n      inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset 1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset 2px 2px 2px 0 var(--secondary-on-light),\n      inset 2px -2px 2px 0 var(--secondary-on-light);\n  }\n"]))),Wn=qn.ZP.button(Zn||(Zn=Qn(["\n  position: absolute;\n  height: var(--higher);\n  width: calc((100% - var(--higher) + 2px) / 2);\n  right: 0;\n  top: 50%;\n  transform: translatey(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(0 0%, 100% 50%, 0% 100%);\n  }\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: inset -0.7px 0.7px 0 0 var(--secondary),\n    inset -0.7px -0.7px 0 0 var(--secondary),\n    inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n    inset -2px 2px 2px 0 var(--secondary-on-light),\n    inset -2px -2px 2px 0 var(--secondary-on-light),\n    inset 0px -8px 4px -4px var(--secondary-on-dark),\n    inset 0px 8px 4px -4px var(--secondary-on-light),\n    0px 1px 3px 0 rgba(0, 0, 0, 1);\n  &:hover,\n  &:focus,\n  &:active,\n  &.activate {\n    box-shadow: inset -0.7px 0.7px 0 0 var(--secondary),\n      inset -0.7px -0.7px 0 0 var(--secondary),\n      inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset -2px 2px 2px 0 var(--secondary-on-light),\n      inset -2px -2px 2px 0 var(--secondary-on-light);\n  }\n"]))),_n=qn.ZP.button(Mn||(Mn=Qn(["\n  position: absolute;\n  height: calc((100% - var(--higher) + 2px) / 2);\n  width: var(--higher);\n  left: 50%;\n  top: 0;\n  transform: translatex(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(0 100%, 50% 0%, 100% 100%);\n  }\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n    inset -0.7px 0.7px 0 0 var(--secondary),\n    inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset 2px 2px 2px 0 var(--secondary-on-light),\n    inset -2px 2px 2px 0 var(--secondary-on-light),\n    1px 1px 3px 0 rgba(0, 0, 0, 1);\n  &:hover,\n  &:focus,\n  &:active,\n  &.activate {\n    box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n      inset -0.7px 0.7px 0 0 var(--secondary),\n      inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset 2px 2px 2px 0 var(--secondary-on-light),\n      inset -2px 2px 2px 0 var(--secondary-on-light);\n  }\n"]))),Bn=qn.ZP.button(Fn||(Fn=Qn(["\n  position: absolute;\n  height: calc((100% - var(--higher) + 2px) / 2);\n  width: var(--higher);\n  left: 50%;\n  bottom: 0;\n  transform: translatex(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(0 0%, 50% 100%, 100% 0%);\n  }\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: inset 0.7px -0.7px 0 0 var(--secondary),\n    inset -0.7px -0.7px 0 0 var(--secondary),\n    inset 1px -1px 0 0 var(--secondary-on-dark),\n    inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n    inset 2px -2px 2px 0 var(--secondary-on-light),\n    inset -2px -2px 2px 0 var(--secondary-on-light),\n    inset 0px -32px 20px -20px var(--secondary-on-dark),\n    1px 1px 3px 0 rgba(0, 0, 0, 1);\n  &:hover,\n  &:focus,\n  &:active,\n  &.activate {\n    box-shadow: inset 0.7px -0.7px 0 0 var(--secondary),\n      inset -0.7px -0.7px 0 0 var(--secondary),\n      inset 1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset 2px -2px 2px 0 var(--secondary-on-light),\n      inset -2px -2px 2px 0 var(--secondary-on-light);\n  }\n"]))),Yn=qn.ZP.button(Rn||(Rn=Qn(["\n  position: absolute;\n  height: var(--higher);\n  width: var(--higher);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--secondary);\n  &::after {\n    width: 50% !important;\n    height: 50% !important;\n    border-radius: 50%;\n    transform: rotate(-30deg);\n    background: linear-gradient(\n      var(--secondary-on-dark),\n      var(--secondary-on-light)\n    );\n  }\n"]))),Xn=t(893);const Jn=function(){var n=function(){var n=In(),a=n.className,t=n.dispatch,e=n.actions,r=n.enumn,i=n.keypad,o=r.directionalPad,c=o.LEFT,s=o.RIGHT,d=o.UP,p=o.DOWN;return{className:a,directionalPad:i.directionalPad,clickDown:{left:function(){return t(e.clickDirectionalPad(c))},right:function(){return t(e.clickDirectionalPad(s))},up:function(){return t(e.clickDirectionalPad(d))},down:function(){return t(e.clickDirectionalPad(p))}},clickUp:{left:function(){return t(e.unclickDirectionalPad(c))},right:function(){return t(e.unclickDirectionalPad(s))},up:function(){return t(e.unclickDirectionalPad(d))},down:function(){return t(e.unclickDirectionalPad(p))}}}}(),a=n.className,t=n.clickDown,e=n.clickUp,r=n.directionalPad;return(0,Xn.jsxs)(Gn,{className:a,children:[(0,Xn.jsx)(Hn,{onMouseDown:t.left,onMouseUp:e.left,className:r.left}),(0,Xn.jsx)(_n,{onMouseDown:t.up,onMouseUp:e.up,className:r.up}),(0,Xn.jsx)(Wn,{onMouseDown:t.right,onMouseUp:e.right,className:r.right}),(0,Xn.jsx)(Bn,{onMouseDown:t.down,onMouseUp:e.down,className:r.down}),(0,Xn.jsx)(Yn,{})]})};var Kn,$n;function na(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}const aa=qn.ZP.div(Kn||(Kn=na(["\n  --diameter: 110px;\n  height: var(--diameter);\n  width: var(--diameter);\n  position: absolute;\n  right: 20px;\n  transform: rotate(-30deg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  will-change: top;\n  transition: top 0.5s;\n  &.inactivate {\n    top: calc(46% + 18px);\n  }\n  &.activate {\n    top: calc(46% + 18px);\n    @media screen and (min-width: 700px) {\n      top: calc(60% + 28px);\n    }\n  }\n  button {\n    cursor: pointer;\n  }\n"])));var ta=qn.ZP.button($n||($n=na(["\n  user-select: none;\n  --diameter: 50px;\n  height: var(--diameter);\n  width: var(--diameter);\n  background-color: var(--quaternary);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 0.7px var(--quaternary),\n    inset 0 0 0 1.4px var(--quaternary-on-dark),\n    inset 0 0 2px 2px var(--quaternary-on-light),\n    inset 0 -15px 8px -8px var(--quaternary-on-dark),\n    inset 0 15px 8px -8px var(--quaternary-on-light),\n    1px 1px 4px rgba(0, 0, 0, 1);\n\n  &:hover,\n  &:focus,\n  &:active,\n  &.activate {\n    text-shadow: none;\n    box-shadow: inset 0 0 0 0.7px var(--quaternary),\n      inset 0 0 0 1.4px var(--quaternary-on-dark),\n      inset 0 0 2px 2px var(--quaternary-on-light);\n  }\n\n  span {\n    display: block;\n    transform: rotate(30deg);\n    color: var(--quaternary-on-dark);\n    font-weight: 900;\n    font-size: 17px;\n    text-shadow: 0 0 2px var(--quaternary-on-light),\n      0 1px 2px var(--quaternary-on-light);\n  }\n"])));const ea=function(){var n=function(){var n=In(),a=n.className,t=n.dispatch,e=n.actions,r=n.enumn,i=n.keypad,o=r.actionPad,c=o.Q,s=o.E;return{className:a,actionPad:i.actionPad,clickDown:{Q:function(){return t(e.clickActionPad(c))},E:function(){return t(e.clickActionPad(s))}},clickUp:{Q:function(){return t(e.unclickActionPad(c))},E:function(){return t(e.unclickActionPad(s))}}}}(),a=n.className,t=n.clickDown,e=n.clickUp,r=n.actionPad;return(0,Xn.jsxs)(aa,{className:a,children:[(0,Xn.jsx)(ta,{onMouseDown:t.Q,onMouseUp:e.Q,className:r.q,children:(0,Xn.jsx)("span",{children:"Q"})}),(0,Xn.jsx)(ta,{onMouseDown:t.E,onMouseUp:e.E,className:r.e,children:(0,Xn.jsx)("span",{children:"E"})})]})};var ra,ia;function oa(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}const ca=qn.ZP.div(ra||(ra=oa(["\n  position: absolute;\n  left: 50%;\n  bottom: 18%;\n  transform: translate(-50%, 50%);\n  display: flex;\n  gap: 5px;\n"])));var sa=qn.ZP.div(ia||(ia=oa(['\n  position: relative;\n  height: 12px;\n  width: 45px;\n  transform: rotate(-30deg);\n  user-select: none;\n\n  &::after {\n    content: "";\n    display: block;\n    background-color: var(--secondary-on-dark);\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n    box-shadow: inset 0 0 0 0.7px var(--secondary),\n      inset 0 0 0 1.4px var(--secondary-on-dark),\n      inset 0 0 2px 2px var(--secondary-on-light),\n      inset 0px -5px 5px -5px var(--secondary-on-dark),\n      inset 0px 5px 5px -5px var(--secondary-on-light),\n      1px 1px 3px rgba(0, 0, 0, 1);\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus,\n  &:active,\n  &.activate {\n    &::after {\n      box-shadow: inset 0 0 0 0.7px var(--secondary),\n        inset 0 0 0 1.4px var(--secondary-on-dark),\n        inset 0 0 2px 2px var(--secondary-on-light);\n    }\n  }\n\n  span {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%, calc(100% + 8px));\n    font-size: 8px;\n    font-weight: 900;\n    color: var(--quinary);\n  }\n'])));const da=function(){var n=function(){var n=In(),a=n.className,t=n.dispatch,e=n.actions,r=n.enumn,i=n.keypad,o=r.operationalPad,c=o.SELECT,s=o.START;return{className:a,operationalPad:i.operationalPad,clickDown:{select:function(){return t(e.clickOperationalPad(c))},start:function(){return t(e.clickOperationalPad(s))}},clickUp:{select:function(){return t(e.unclickOperationalPad(c))},start:function(){return t(e.unclickOperationalPad(s))}}}}(),a=(n.className,n.clickDown),t=n.clickUp,e=n.operationalPad;return(0,Xn.jsxs)(ca,{children:[(0,Xn.jsx)(sa,{onMouseDown:a.select,onMouseUp:t.select,className:e.select,children:(0,Xn.jsx)("span",{children:"SELECT"})}),(0,Xn.jsx)(sa,{onMouseDown:a.start,onMouseUp:t.start,className:e.start,children:(0,Xn.jsx)("span",{children:"START"})})]})};var pa;const la=qn.ZP.div(pa||(pa=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(['\n  position: absolute;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 75px;\n  height: 80px;\n  right: 20px;\n  bottom: 10px;\n  div {\n    transform: rotate(-30deg);\n    min-width: 100%;\n    margin-top: 15px;\n    height: 55%;\n    display: flex;\n    justify-content: space-between;\n    span {\n      height: 100%;\n      width: 5px;\n      border-radius: 2.5px;\n      background-color: var(--background);\n      position: relative;\n      box-shadow: inset 1px 1px 1px var(--primary-on-dark),\n        inset -1px -1px 1px var(--primary-on-light);\n      &::before {\n        content: "";\n        display: block;\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        height: 35%;\n        opacity: 0.5;\n        background-color: var(--primary-on-dark);\n        filter: blur(1px);\n      }\n    }\n    &::before {\n      content: "";\n      display: block;\n      background-color: var(--primary-on-dark);\n      position: absolute;\n      left: 50%;\n      top: 70%;\n      transform: translateX(-50%);\n      width: 300px;\n      height: 100px;\n      filter: blur(10px);\n    }\n  }\n']))),xa=function(){return(0,Xn.jsx)(la,{children:(0,Xn.jsxs)("div",{children:[(0,Xn.jsx)("span",{}),(0,Xn.jsx)("span",{}),(0,Xn.jsx)("span",{}),(0,Xn.jsx)("span",{}),(0,Xn.jsx)("span",{}),(0,Xn.jsx)("span",{})]})})};var ua,ha,fa,va;function ya(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}const ba=qn.ZP.div(ua||(ua=ya(['\n  height: 25px;\n  margin-bottom: 5px;\n  gap: 5px;\n  width: 100%;\n  border-top-right-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::before,\n  &::after {\n    will-change: border-radius;\n    transition: 0.2s border-radius;\n    content: "";\n    display: block;\n    background-color: var(--primary);\n    width: 25px;\n    height: 100%;\n  }\n  &::before {\n    box-shadow: inset 5px 5px 5px -5px var(--primary-on-light),\n      inset 20px 20px 20px -20px var(--primary-on-light),\n      8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);\n  }\n  &::after {\n    box-shadow: inset -8px 0px 8px -8px var(--primary-on-dark),\n      inset -20px 0px 20px -20px var(--primary-on-dark),\n      inset 0 5px 5px -5px var(--primary-on-light),\n      inset 0 20px 20px -20px var(--primary-on-light),\n      8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);\n    z-index: 1;\n  }\n\n  &.inactivate {\n    &::after {\n      border-top-right-radius: 10px;\n    }\n    &::before {\n      border-top-left-radius: 10px;\n    }\n  }\n  &.activate {\n    &::after {\n      border-top-right-radius: 0px;\n    }\n    &::before {\n      border-top-left-radius: 0px;\n    }\n  }\n'])));var ga=qn.ZP.span(ha||(ha=ya(["\n  flex-grow: 1;\n  display: block;\n  background-color: var(--primary);\n  position: relative;\n  height: 100%;\n  box-shadow: inset 0 5px 5px -5px var(--primary-on-light),\n    inset 0 20px 20px -20px var(--primary-on-light),\n    8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);\n"]))),ka=qn.ZP.div(fa||(fa=ya(["\n  position: absolute;\n  color: var(--primary);\n  text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);\n  height: 15px;\n  width: 65px;\n  font-weight: 900;\n  padding: 0 12px;\n  bottom: 3px;\n  left: 10px;\n  border-radius: 9px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: var(--background);\n  box-shadow: inset 0.5px 0.5px 2px var(--primary-on-dark),\n    inset -0.5px -0.5px 2px var(--primary-on-light),\n    inset 1px 1px 8px rgba(0, 0, 0, 0.4), inset 5px 5px 20px rgba(0, 0, 0, 0.4);\n  user-select: none;\n  cursor: pointer;\n"]))),ma=qn.ZP.div(va||(va=ya(["\n  flex-grow: 1;\n  background-color: transparent;\n  font-size: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  transition: 0.8s;\n  &.inactivate {\n    color: var(--primary);\n    text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);\n  }\n  &.activate {\n    color: var(--primary);\n    text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);\n    color: #fff6a9;\n    text-shadow: 0 0 5px #ffa500, 0 0 10px #ff0000, 0 0 20px #ff8d00,\n      0 0 30px #ff0000;\n  }\n"])));const Pa=function(){var n=In(),a=n.className,t=n.inverseClass,e=n.dispatch,r=n.actions;return(0,Xn.jsx)(ba,{className:a,children:(0,Xn.jsx)(ga,{children:(0,Xn.jsxs)(ka,{onMouseDown:function(){return e(r.clickStartupSwitcher())},onMouseUp:function(){return e(r.unclickStartupSwitcher())},children:[(0,Xn.jsx)(ma,{className:t,children:"OFF"}),"•",(0,Xn.jsx)(ma,{className:a,children:"ON"})]})})})};var wa;const ja=qn.ZP.div(wa||(wa=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(['\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  padding: 20px 23px;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  background-color: var(--primary);\n  box-shadow: inset -5px -5px 5px -5px var(--primary-on-dark),\n    inset -20px -20px 20px -20px var(--primary-on-dark),\n    8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4),\n    inset 8px 0px 8px -8px var(--primary-on-light),\n    inset 20px 0px 20px -20px var(--primary-on-light);\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--primary-on-light);\n    width: 65%;\n    height: 75%;\n    border-radius: 50% / 15px;\n    filter: blur(10px);\n    opacity: 0.1;\n  }\n\n  will-change: border-radius, width, height;\n  transition: 0.2s border-radius;\n  &.inactivate {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 70px;\n  }\n  &.activate {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n']))),Ta=function(n){var a=n.children,t=In().className;return(0,Xn.jsx)(ja,{className:t,children:a})};var Aa;const Oa=qn.ZP.div(Aa||(Aa=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(["\n  z-index: 1;\n  position: absolute;\n  font-size: 8px;\n  height: 15px;\n  width: 50px;\n  color: var(--primary);\n  background-color: var(--background);\n  font-weight: 900;\n  bottom: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 7.5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);\n  box-shadow: inset 0.5px 0.5px 2px var(--primary-on-dark),\n    inset -0.5px -0.5px 2px var(--primary-on-light),\n    inset 1px 1px 8px rgba(0, 0, 0, 0.4), inset 5px 5px 20px rgba(0, 0, 0, 0.4);\n"]))),Ea=function(){return(0,Xn.jsx)(Oa,{children:"PHONES"})};var Sa;const Na=qn.ZP.div(Sa||(Sa=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(['\n  user-select: none;\n  position: absolute;\n  top: 12.5px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(100% - 20px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--on-secondary);\n  &::before,\n  &::after {\n    content: "";\n    display: block;\n    flex-grow: 1;\n    height: 8px;\n    border-top: 2px solid var(--quaternary);\n    border-bottom: 2px solid var(--quinary);\n    margin: 5px;\n  }\n  span {\n    font-size: 8px;\n  }\n']))),Ia=function(){return(0,Xn.jsx)(Na,{children:(0,Xn.jsx)("span",{children:"DOT MATRIX WITH STERIO SOUND"})})};var Da;const qa=qn.ZP.div(Da||(Da=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(['\n  user-select: none;\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &::after {\n    will-change: box-shadow;\n    transition: box-shadow 0.4s;\n    position: relative;\n    content: "";\n    display: block;\n    border-radius: 50%;\n    background-color: var(--quaternary);\n    position: relative;\n    z-index: 100;\n  }\n  span {\n    display: block;\n    position: absolute;\n    color: var(--on-secondary);\n    font-size: 8px;\n    bottom: 0;\n    transform: translateY(calc(100% + 5px));\n  }\n\n  &.inactivate {\n    &::after {\n      width: 7px;\n      height: 7px;\n      box-shadow: none;\n    }\n  }\n  &.activate {\n    &::after {\n      width: 5px;\n      height: 5px;\n      background-color: #fff6a9;\n      box-shadow: 0 0 15px 4px #ffa500, 0 0 20px 5px #ffa500,\n        0 0 40px 10px #ffa500, 0 0 60px 15px #ff0000, 0 0 10px 3px #ff8d00,\n        0 0 98px 30px #ff0000;\n    }\n  }\n']))),za=function(){var n=In().className;return(0,Xn.jsx)(qa,{className:n,children:(0,Xn.jsx)("span",{children:"Battery"})})};var Ca;const Ua=qn.ZP.div(Ca||(Ca=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(["\n  user-select: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translateY(calc(100% + 3px));\n  color: var(--quinary);\n  span:nth-child(1) {\n    font-size: 10px;\n    font-weight: 1000;\n  }\n  span:nth-child(2) {\n    font-size: 15px;\n    font-style: italic;\n    font-weight: 500;\n  }\n  span:nth-child(3) {\n    font-size: 5px;\n    font-weight: 1000;\n  }\n"]))),Va=function(){return(0,Xn.jsxs)(Ua,{children:[(0,Xn.jsx)("span",{children:"Nitendo"})," ",(0,Xn.jsx)("span",{children:"GAME BOY"})," ",(0,Xn.jsx)("span",{children:"TM"})]})},La=function(n){var a=n.children,t=In().className;return(0,Xn.jsxs)(zn,{className:t,children:[(0,Xn.jsx)(Ia,{}),(0,Xn.jsx)(za,{}),(0,Xn.jsx)(_a,{children:a}),(0,Xn.jsx)(Va,{})]})};var Za;const Ma=qn.ZP.div(Za||(Za=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  will-change: width, height;\n  transition: 0.2s width, 0.2s height;\n  &.inactivate {\n    height: 490px;\n    width: ","px;\n  }\n  &.activate {\n    height: 100vh;\n    width: 100vw;\n  }\n"])),284.2),Fa=function(n){var a=n.children,t=In().className;return(0,Xn.jsxs)(Ma,{className:t,children:[(0,Xn.jsx)(Pa,{}),(0,Xn.jsx)(Ta,{children:a}),(0,Xn.jsx)(Ea,{})]})};var Ra,Qa;function Ga(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}var Ha=(0,qn.F4)(Ra||(Ra=Ga(["\n  0% { background-position: 0 0 }\n  25% { background-position: 0 100% }\n  50% { background-position: 100% 100% }\n  75% { background-position: 0% 100% }\n  100% { background-position: 0% 0% }\n"])));const Wa=qn.ZP.div(Qa||(Qa=Ga(["\n  position: relative;\n  height: calc(100% - 50px);\n  width: calc(100% - 100px);\n  background-color: var(--terciary);\n  box-shadow: inset 0 0 10px 3px var(--terciary-on-dark);\n  background: linear-gradient(\n    -60deg,\n    var(--terciary-on-light),\n    var(--terciary)\n  );\n  animation: "," 12s linear alternate infinite;\n  background-size: 300%;\n"])),Ha),_a=function(n){var a=n.children;return(0,Xn.jsx)(Wa,{children:a})};const Ba=function(n){var a=n.children;return(0,Xn.jsxs)(Fa,{children:[(0,Xn.jsx)(La,{children:a}),(0,Xn.jsx)(Jn,{}),(0,Xn.jsx)(ea,{}),(0,Xn.jsx)(da,{}),(0,Xn.jsx)(xa,{})]})},Ya=function(){return(0,Xn.jsx)("div",{})};var Xa,Ja,Ka,$a;function nt(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}const at=qn.ZP.div(Xa||(Xa=nt(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n"])));var tt=(0,qn.F4)(Ja||(Ja=nt(["\n  0% {height: 100%; border-radius: 9px;}\n  95% {height: 100%; border-radius: 9px;}\n  100% { height: 2%; border-radius: 0px; }\n"]))),et=qn.ZP.div(Ka||(Ka=nt(['\n  width: 120px;\n  height: 37px;\n  position: absolute;\n  left: 50%;\n  top: 75%;\n  transform: translate(-50%, -50%) scale(0.7);\n  --color: white;\n  filter: drop-shadow(0 0 2px var(--color));\n  &::before,\n  &::after,\n  div {\n    background-color: var(--color);\n  }\n  &::before,\n  &::after {\n    content: "";\n    display: block;\n    height: 100%;\n    width: 18px;\n    border-radius: 9px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    animation: '," 2.5s infinite alternate;\n  }\n  &::before {\n    left: 0;\n  }\n  &::after {\n    right: 0;\n  }\n"])),tt),rt=qn.ZP.div($a||($a=nt(["\n  display: block;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"])));const it=function(){var n,a=(0,S.useRef)(null);return console.log(null===(n=a.current)||void 0===n?void 0:n.getBoundingClientRect()),(0,Xn.jsx)(at,{children:(0,Xn.jsx)(et,{ref:a,children:(0,Xn.jsx)(rt,{})})})};const ot=function(){return(0,N.v9)(ln)===e.ACTIVATE?(0,Xn.jsx)(Ya,{}):(0,Xn.jsx)(it,{})};var ct=e.INACTIVATE;const st={status:ct,keypad:{startupSwitcher:ct,directionalPad:{left:ct,right:ct,up:ct,down:ct},operationalPad:{select:ct,start:ct},actionPad:{q:ct,e:ct}}};var dt=e,pt=dt.ACTIVATE,lt=dt.INACTIVATE,xt=r,ut=xt.LEFT,ht=xt.RIGHT,ft=xt.UP,vt=xt.DOWN,yt=i,bt=yt.SELECT,gt=yt.START,kt=o,mt=kt.Q,Pt=kt.E;const wt=(0,d.oM)({name:"system",initialState:st,reducers:{activateStatus:function(n){n.status=e.ACTIVATE},inactivateStatus:function(n){n.status=e.INACTIVATE},clickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.ACTIVATE},unclickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.INACTIVATE},clickDirectionalPad:function(n,a){var t=a.payload;t===ut&&(n.keypad.directionalPad.left=pt),t===ht&&(n.keypad.directionalPad.right=pt),t===ft&&(n.keypad.directionalPad.up=pt),t===vt&&(n.keypad.directionalPad.down=pt)},unclickDirectionalPad:function(n,a){var t=a.payload;t===ut&&(n.keypad.directionalPad.left=lt),t===ht&&(n.keypad.directionalPad.right=lt),t===ft&&(n.keypad.directionalPad.up=lt),t===vt&&(n.keypad.directionalPad.down=lt)},clickOperationalPad:function(n,a){var t=a.payload;t===bt&&(n.keypad.operationalPad.select=pt),t===gt&&(n.keypad.operationalPad.start=pt)},unclickOperationalPad:function(n,a){var t=a.payload;t===bt&&(n.keypad.operationalPad.select=lt),t===gt&&(n.keypad.operationalPad.start=lt)},clickActionPad:function(n,a){var t=a.payload;t===mt&&(n.keypad.actionPad.q=pt),t===Pt&&(n.keypad.actionPad.e=pt)},unclickActionPad:function(n,a){var t=a.payload;t===mt&&(n.keypad.actionPad.q=lt),t===Pt&&(n.keypad.actionPad.e=lt)}}}),jt=(0,E.UY)({keyboard:_.reducer,hardware:Nn.reducer,system:wt.reducer}),Tt=function(n){var a=n.children;return(0,Xn.jsx)(N.zt,{store:At,children:a})},At=(0,d.xC)({reducer:{gameboy:O.reducer,domains:jt}});var Ot;const Et=(0,qn.vJ)(Ot||(Ot=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(["\n  *,\n  *::before,\n  *::after {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  }\n\n  body,\n  #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n  }\n"])));var St;const Nt=qn.ZP.main(St||(St=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}(["\n  ","\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background);\n"])),(function(n){var a=n.theme;return"\n  // surface\n  --surface: ".concat(a.palette.surface.main,";\n  --on-surface: ").concat(a.palette.surface.on,";\n  // background\n  --background: ").concat(a.palette.background.main,";\n  --on-background: ").concat(a.palette.background.on,";\n  // error\n  --error: ").concat(a.palette.error.main,";\n  --on-error: ").concat(a.palette.error.on,";\n  // primary\n  --primary: ").concat(a.palette.primary.main,";\n  --primary-on-light: ").concat(a.palette.primary.light,";\n  --primary-on-dark: ").concat(a.palette.primary.dark,";\n  --on-primary: ").concat(a.palette.primary.on,";\n  // secondary\n  --secondary: ").concat(a.palette.secondary.main,";\n  --secondary-on-light: ").concat(a.palette.secondary.light,";\n  --secondary-on-dark: ").concat(a.palette.secondary.dark,";\n  --on-secondary: ").concat(a.palette.secondary.on,";\n  // terciary\n  --terciary: ").concat(a.palette.terciary.main,";\n  --terciary-on-light: ").concat(a.palette.terciary.light,";\n  --terciary-on-dark: ").concat(a.palette.terciary.dark,";\n  --on-terciary: ").concat(a.palette.terciary.on,";\n  // quaternary\n  --quaternary: ").concat(a.palette.quaternary.main,";\n  --quaternary-on-light: ").concat(a.palette.quaternary.light,";\n  --quaternary-on-dark: ").concat(a.palette.quaternary.dark,";\n  --on-quaternary: ").concat(a.palette.quaternary.on,";\n  // quinary\n  --quinary: ").concat(a.palette.quinary.main,";\n  --quinary-on-light: ").concat(a.palette.quinary.light,";\n  --quinary-on-dark: ").concat(a.palette.quinary.dark,";\n  --on-quinary: ").concat(a.palette.quinary.on,";\n")})),It=function(n){var a=n.children;return(0,Xn.jsx)(Nt,{theme:p,children:a})},Dt=function(){return{dispatch:(0,N.I0)(),status:(0,N.v9)(xn),keypad:(0,N.v9)(un),enums:{status:e,directionalPad:r,actionPad:o,operationalPad:i},actions:{gameboy:O.actions,keyboard:_.actions,hardware:Nn.actions,system:wt.actions}}};const qt=function(){var n;return sn(),(n=Dt()).dispatch,n.status,n.keypad,n.actions,n.enums,(0,N.I0)(),_.actions,Nn.actions,wt.actions,O.actions,(0,Xn.jsx)(It,{children:(0,Xn.jsx)(Ba,{children:(0,Xn.jsx)(ot,{})})})};(0,s.s)(document.querySelector("#root")).render((0,Xn.jsxs)(Tt,{children:[(0,Xn.jsx)(Et,{}),(0,Xn.jsx)(qt,{})]}))}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return a[n](i,i.exports,e),i.exports}e.m=a,n=[],e.O=(a,t,r,i)=>{if(!t){var o=1/0;for(p=0;p<n.length;p++){for(var[t,r,i]=n[p],c=!0,s=0;s<t.length;s++)(!1&i||o>=i)&&Object.keys(e.O).every((n=>e.O[n](t[s])))?t.splice(s--,1):(c=!1,i<o&&(o=i));if(c){n.splice(p--,1);var d=r();void 0!==d&&(a=d)}}return a}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[t,r,i]},e.n=n=>{var a=n&&n.__esModule?()=>n.default:()=>n;return e.d(a,{a}),a},e.d=(n,a)=>{for(var t in a)e.o(a,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:a[t]})},e.o=(n,a)=>Object.prototype.hasOwnProperty.call(n,a),(()=>{var n={179:0};e.O.j=a=>0===n[a];var a=(a,t)=>{var r,i,[o,c,s]=t,d=0;if(o.some((a=>0!==n[a]))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(s)var p=s(e)}for(a&&a(t);d<o.length;d++)i=o[d],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(p)},t=self.webpackChunk_guhcalm_cute_gameboy=self.webpackChunk_guhcalm_cute_gameboy||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var r=e.O(void 0,[977],(()=>e(118)));r=e.O(r)})();