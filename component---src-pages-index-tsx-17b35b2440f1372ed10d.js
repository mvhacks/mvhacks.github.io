/*! For license information please see component---src-pages-index-tsx-17b35b2440f1372ed10d.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},660:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return h},default:function(){return h},defaultFallbackInView:function(){return u},observe:function(){return m},useInView:function(){return v}});var r=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}var o=new Map,l=new WeakMap,s=0,c=void 0;function u(e){c=e}function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(l.has(n)||(s+=1,l.set(n,s.toString())),l.get(n)):"0":e[t]);var n})).toString()}function m(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=c),void 0===window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var a=function(e){var t=d(e),n=o.get(t);if(!n){var r,i=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,a=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=i.get(t.target))||n.forEach((function(e){e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:i},o.set(t,n)}return n}(n),l=a.id,s=a.observer,u=a.elements,m=u.get(e)||[];return u.has(e)||u.set(e,m),m.push(t),s.observe(e),function(){m.splice(m.indexOf(t),1),0===m.length&&(u.delete(e),s.unobserve(e)),0===u.size&&(s.disconnect(),o.delete(l))}}var p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!=typeof e.children}var h=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),f(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,a(t,n);var l=o.prototype;return l.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},l.componentWillUnmount=function(){this.unobserve(),this.node=null},l.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,a=e.delay,o=e.fallbackInView;this._unobserveCb=m(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:a},o)}},l.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},l.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var a=this.props,o=a.children,l=a.as,s=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(a,p);return r.createElement(l||"div",i({ref:this.handleNode},s),o)},o}(r.Component);function v(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,a=t.trackVisibility,o=t.rootMargin,l=t.root,s=t.triggerOnce,c=t.skip,u=t.initialInView,d=t.fallbackInView,p=r.useRef(),f=r.useState({inView:!!u}),h=f[0],v=f[1],y=r.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),c||e&&(p.current=m(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:l,rootMargin:o,threshold:n,trackVisibility:a,delay:i},d))}),[Array.isArray(n)?n.toString():n,l,o,s,c,a,d,i]);(0,r.useEffect)((function(){p.current||!h.entry||s||c||v({inView:!!u})}));var g=[y,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},5238:function(e,t,n){"use strict";t.Z=void 0;var r=o(n(7294)),i=o(n(5697)),a=o(n(5900));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.animate,n=void 0===t||t,i=e.className,o=void 0===i?"":i,l=e.layout,s=void 0===l?"2-columns":l,c=e.lineColor,u=void 0===c?"#FFF":c,d=e.children;return"object"==typeof window&&document.documentElement.style.setProperty("--line-color",u),r.default.createElement("div",{className:(0,a.default)(o,"vertical-timeline",{"vertical-timeline--animate":n,"vertical-timeline--two-columns":"2-columns"===s,"vertical-timeline--one-column-left":"1-column"===s||"1-column-left"===s,"vertical-timeline--one-column-right":"1-column-right"===s})},d)};l.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,animate:i.default.bool,layout:i.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:i.default.string};var s=l;t.Z=s},7038:function(e,t,n){"use strict";t.Z=void 0;var r=l(n(7294)),i=l(n(5697)),a=l(n(5900)),o=n(660);function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.children,n=void 0===t?"":t,i=e.className,l=void 0===i?"":i,s=e.contentArrowStyle,c=void 0===s?null:s,u=e.contentStyle,d=void 0===u?null:u,m=e.date,p=void 0===m?"":m,f=e.dateClassName,h=void 0===f?"":f,v=e.icon,y=void 0===v?null:v,g=e.iconClassName,b=void 0===g?"":g,k=e.iconOnClick,E=void 0===k?null:k,w=e.onTimelineElementClick,C=void 0===w?null:w,x=e.iconStyle,O=void 0===x?null:x,N=e.id,V=void 0===N?"":N,S=e.position,P=void 0===S?"":S,_=e.style,T=void 0===_?null:_,R=e.textClassName,j=void 0===R?"":R,I=e.intersectionObserverProps,M=void 0===I?{rootMargin:"0px 0px -40px 0px",triggerOnce:!0}:I,A=e.visible,W=void 0!==A&&A;return r.default.createElement(o.InView,M,(function(e){var t=e.inView,i=e.ref;return r.default.createElement("div",{ref:i,id:V,className:(0,a.default)(l,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===P,"vertical-timeline-element--right":"right"===P,"vertical-timeline-element--no-children":""===n}),style:T},r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:O,onClick:E,className:(0,a.default)(b,"vertical-timeline-element-icon",{"bounce-in":t||W,"is-hidden":!(t||W)})},y),r.default.createElement("div",{style:d,onClick:C,className:(0,a.default)(j,"vertical-timeline-element-content",{"bounce-in":t||W,"is-hidden":!(t||W)})},r.default.createElement("div",{style:c,className:"vertical-timeline-element-content-arrow"}),n,r.default.createElement("span",{className:(0,a.default)(h,"vertical-timeline-element-date")},p))))}))};s.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visible:i.default.bool,intersectionObserverProps:i.default.shape({root:i.default.object,rootMargin:i.default.string,threshold:i.default.number,triggerOnce:i.default.bool})};var c=s;t.Z=c},7772:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(5238).Z,VerticalTimelineElement:n(7038).Z}},1528:function(e,t,n){"use strict";var r=n(7294),i=n(5205);t.Z=function(){return r.createElement("div",{style:{background:i.af.dark.palette.accent.main,display:"flex",textAlign:"center",justifyContent:"center",width:"100%",height:"auto",flexDirection:"column",alignItems:"center"}},r.createElement("div",null,r.createElement("h1",{className:"sponsorsText",style:{color:i.af.dark.palette.primary.main}},"Sponsors")),r.createElement("div",{className:"banner"},r.createElement("img",{src:"/images/sponsors/balsamic_logo.png"}),r.createElement("img",{src:"/images/sponsors/echoAR.png"})))}},8614:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return O},default:function(){return N}});var r=n(7294),i=n(2302),a=n(4001),o=n(4956),l=n(1942),s=n(5205),c=function(e,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},c(e,t)};var u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)};function d(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,l=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},l,p({pathRadius:a,dashRatio:i,counterClockwise:n})),d:m({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function m(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function p(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,a=e.counterClockwise,o=e.styles,l=e.strokeWidth,s=e.text,c=this.getPathRadius(),u=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(d,{className:i.trail,counterClockwise:a,dashRatio:t,pathRadius:c,strokeWidth:l,style:o.trail}),(0,r.createElement)(d,{className:i.path,counterClockwise:a,dashRatio:u*t,pathRadius:c,strokeWidth:l,style:o.path}),s?(0,r.createElement)("text",{className:i.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function h(e){e.children;var t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n}(e,["children"]);return(0,r.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren"},(0,r.createElement)("div",{style:{position:"relative",width:"100%",height:"100%"}},(0,r.createElement)(f,u({},t)),e.children?(0,r.createElement)("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}function v(e){return Object.keys(e).forEach((function(t){null==e[t]&&delete e[t]})),e}var y=function(e){var t=e.currentTime,n=(e.timeOfEvent.getTime()-t.getTime())/6e4,r=Math.floor(n/1440),i=Math.floor((n-60*r*24)/60);return[r,i,Math.ceil(n-60*r*24-60*i)]},g=function(e){var t=e.year,n=e.month,i=e.day,a=e.hour,o=new Date(t,n,i,a,0,0),l=new Date,c=(0,r.useState)(y({currentTime:l,timeOfEvent:o})),u=c[0],d=c[1];function m(e,t){return 100-Math.round(e/t*100)}(0,r.useEffect)((function(){var e=setInterval((function(){var e=new Date;d((function(){return y({currentTime:e,timeOfEvent:o})}))}),1e3);return function(){return clearInterval(e)}}),[]);var p,f,g,b,k,E,w,C,x,O,N,V,S=m(u[1],24),P=m(u[0],30.5),_=m(u[2],60),T=(p={rotation:.5,strokeLinecap:"butt",textSize:"16px",pathColor:s.af.dark.palette.primary.main,textColor:s.af.dark.palette.secondary.main,trailColor:s.af.dark.palette.accent.main},f=p.rotation,g=p.strokeLinecap,b=p.textColor,k=p.textSize,E=p.pathColor,w=p.pathTransition,C=p.pathTransitionDuration,x=p.trailColor,O=p.backgroundColor,{root:{},path:v({stroke:E,strokeLinecap:g,transform:N=null==f?void 0:"rotate("+f+"turn)",transformOrigin:V=null==f?void 0:"center center",transition:w,transitionDuration:null==C?void 0:C+"s"}),trail:v({stroke:x,strokeLinecap:g,transform:N,transformOrigin:V}),text:v({fill:b,fontSize:k}),background:v({fill:O})});return r.createElement(r.Fragment,null,r.createElement("div",{style:{paddingTop:"10vh",background:s.af.dark.palette.primary.main,color:s.af.dark.palette.secondary.main,margin:0}},r.createElement("div",{className:"progressBars"},r.createElement(h,{value:P,className:"progressCircle",styles:T},r.createElement("div",{className:"circleBigText"},u[0]),r.createElement("div",null,"Days")),r.createElement(h,{value:S,className:"progressCircle",styles:T},r.createElement("div",{className:"circleBigText"},u[1]),r.createElement("div",null,"Hours")),r.createElement(h,{value:_,className:"progressCircle",styles:T},r.createElement("div",{className:"circleBigText"},u[2]),r.createElement("div",null,"Minutes")))))},b=n(7772),k=function(e){var t=e.eventInfo;return r.createElement(r.Fragment,null,r.createElement(b.VerticalTimeline,{lineColor:s.af.dark.palette.accent.main},t.map((function(e,t){return r.createElement(b.VerticalTimelineElement,{key:t,className:"vertical-timeline-element--work",contentStyle:{background:s.af.dark.palette.primary.main,color:s.af.dark.palette.secondary.secondary,boxShadow:"none",outline:"2px solid"},contentArrowStyle:{borderRight:"8px solid",color:s.af.dark.palette.secondary.secondary},date:e.time,iconStyle:{background:s.af.dark.palette.primary.main,color:s.af.dark.palette.accent.main,boxShadow:"none",border:"4px solid"},dateClassName:"test",textClassName:"t2"},r.createElement("h1",{className:"vertical-timeline-element-title",style:{color:s.af.dark.palette.secondary.main,fontSize:"24px"}},e.name),e.descriptionLinked?r.createElement("h2",{className:"vertical-timeline-element-subtitle",style:{color:s.af.dark.palette.secondary.main,fontSize:"18px"}},r.createElement("u",null,r.createElement("a",{href:e.descriptionLink,target:"_blank"},e.description))):r.createElement("h2",{className:"vertical-timeline-element-subtitle",style:{color:s.af.dark.palette.secondary.main,fontSize:"18px"}},e.description))}))))},E=function(){return r.createElement("div",{style:{background:s.af.dark.palette.accent.main,display:"flex",textAlign:"center",justifyContent:"center",width:"100%"}},r.createElement("h1",{className:"prizeMoney",style:{color:s.af.dark.palette.primary.main}},"$1000 in prizes"))},w=JSON.parse('[{"name":"Check-in","description":"","time":"8:00 am"},{"name":"Opening Ceremony","description":"","time":"8:15 am"},{"name":"Icebreakers","description":"Team Formation + Start Hacking","time":"8:30 am"},{"name":"Hack!","description":"Start hacking!","time":"9:00 am"},{"name":"Workshop 1: Building with VueJS","description":"Hosted by Sander Vonk","time":"10:00 am"},{"name":"Workshop 2: Intro to iOS","description":"Hosted by Atulya Weise","time":"12:30 pm"},{"name":"Capture the Flag","description":"Click here to check your answers!","time":"1:00 pm","descriptionLinked":true,"descriptionLink":"https://mvhacks-ctfs.vercel.app/"},{"name":"skribbl.io","description":"~Game time~","time":"4:00 pm"},{"name":"Turn in submissions!","description":"Voting and judging starts","time":"8:00 pm"},{"name":"Closing cerenomy","description":"Announcing winners!","time":"9:00 pm"}]'),C=n(1528),x=function(){return r.createElement("div",{style:{background:s.af.dark.palette.accent.main,display:"flex",textAlign:"center",justifyContent:"center",width:"100%",marginTop:"15vh"}},r.createElement("h1",{className:"dateBanner",style:{color:s.af.dark.palette.primary.main}},"Join us virtually on June 17th!"))},O=function(){return r.createElement(a.Z,{title:"Home",children:void 0})},N=function(){return r.createElement(l.xjn,{theme:s.ZP},r.createElement(i.Z,null,r.createElement(a.Z,{title:"Home",children:void 0}),r.createElement("div",{className:"center"},r.createElement("div",{id:"backgroundText",style:{color:s.af.dark.palette.accent.secondary}},r.createElement("span",null,"2023"),r.createElement("div",{id:"foregroundText",style:{color:s.af.dark.palette.secondary.main}},"MVHacks 6.0")),r.createElement("div",{id:"subtitle",style:{color:s.af.dark.palette.secondary.main}},"The hackathon for everyone. Especially beginners."),r.createElement(o.zx,{variant:"outline"},r.createElement("a",{href:"https://forms.gle/gFxg3xjugR1dNhAv7",target:"_blank"},"Sign up now!")),r.createElement(x,null),r.createElement(g,{year:2023,month:5,day:17,hour:8}),r.createElement(E,null),r.createElement(k,{eventInfo:w}),r.createElement(C.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-17b35b2440f1372ed10d.js.map