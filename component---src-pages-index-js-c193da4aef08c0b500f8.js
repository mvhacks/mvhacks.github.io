(self.webpackChunkmvhacks_site=self.webpackChunkmvhacks_site||[]).push([[678],{892:function(e,t,n){function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var r=n(294),i=n(697),l=16,o=[];function c(e){var t=e.alertCount,n=e.alertFillColor,a=e.alertTextColor,r=e.callback,i=e.renderOverlay,o=e.url,c=document.createElement("img");c.crossOrigin="Anonymous",c.onload=function(){var e=document.createElement("canvas");e.width=l,e.height=l;var o=e.getContext("2d");o.clearRect(0,0,c.width,c.height),o.drawImage(c,0,0,e.width,e.height),t&&function(e,t){var n=t.fillColor,a=t.text,r=t.textColor;e.font="bold 10px arial";var i=e.measureText(a).width+3,o=l-i,c=Math.min(i/2,5.5);e.beginPath(),e.moveTo(o+c,5),e.arcTo(o+i,5,o+i,16,c),e.arcTo(o+i,16,o,16,c),e.arcTo(o,16,o,5,c),e.arcTo(o,5,o+i,5,c),e.closePath(),e.fillStyle=n,e.fill(),e.fillStyle=r,e.textBaseline="bottom",e.textAlign="right",e.fillText(a,14.5,l)}(o,{fillColor:n,textColor:a,text:t}),i&&i(e,o),r(o.canvas.toDataURL())},c.src=o}var s=function(e){var t,n;function r(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={animationIndex:0,animationLoop:null,animationRunning:!1},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,a(t,n),r.getActiveInstance=function(){return r.mountedInstances[r.mountedInstances.length-1]},r.draw=function(){if("undefined"!=typeof document){var e,t=r.getActiveInstance();if(0===o.length){var n=document.getElementsByTagName("head")[0],a=document.createElement("link");a.type="image/x-icon",a.rel="icon";var i=document.createElement("link");i.rel="apple-touch-icon",o.push(a,i);for(var l=n.getElementsByTagName("link"),s=l.length;--s>=0;)/\bicon\b/i.test(l[s].getAttribute("rel"))&&!t.props.keepIconLink(l[s])&&n.removeChild(l[s]);o.forEach((function(e){return n.appendChild(e)}))}e=t.props.url instanceof Array?t.props.url[t.state.animationIndex]:t.props.url,t.props.alertCount||t.props.renderOverlay?c({alertCount:t.props.alertCount,alertFillColor:t.props.alertFillColor,alertTextColor:t.props.alertTextColor,callback:function(e){o.forEach((function(t){return t.href=e}))},renderOverlay:t.props.renderOverlay,url:e}):o.forEach((function(t){return t.href=e}))}},r.update=function(){if("undefined"!=typeof document){var e=r.getActiveInstance(),t=e.props.url instanceof Array&&e.props.animated,n=null;if(clearInterval(e.state.animationLoop),t){var a=function(){var t=(e.state.animationIndex+1)%e.props.url.length;r.draw(),e.setState({animationIndex:t})};n=setInterval(a,e.props.animationDelay),a()}else r.draw();e.setState({animationLoop:n})}};var i=r.prototype;return i.componentDidMount=function(){r.mountedInstances.push(this),r.update()},i.componentWillUnmount=function(){var e=r.getActiveInstance();clearInterval(e.state.animationLoop)},i.componentDidUpdate=function(e){e.url===this.props.url&&e.animated===this.props.animated&&e.alertCount===this.props.alertCount&&e.alertFillColor===this.props.alertFillColor&&e.alertTextColor===this.props.alertTextColor&&e.renderOverlay===this.props.renderOverlay&&e.keepIconLink===this.props.keepIconLink||r.update()},i.render=function(){return null},r}(r.Component);s.displayName="Favicon",s.mountedInstances=[],s.defaultProps={alertCount:null,alertFillColor:"red",alertTextColor:"white",animated:!0,animationDelay:500,keepIconLink:function(){return!1},renderOverlay:null,url:null},s.propTypes={alertCount:i.oneOfType([i.number,i.string]),alertFillColor:i.string,alertTextColor:i.string,animated:i.bool,animationDelay:i.number,keepIconLink:i.func,renderOverlay:i.func,url:i.oneOfType([i.arrayOf(i.string),i.string]).isRequired},e.exports=s},46:function(e,t,n){"use strict";n.d(t,{w_:function(){return s},Pd:function(){return i}});var a=n(294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(r),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function c(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return a.createElement(m,l({attr:l({},e.attr)},t),c(e.child))}}function m(e){var t=function(t){var n,r=e.attr,i=e.size,c=e.title,s=o(e,["attr","size","title"]),m=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(294),r=n(201),i=n(46);function l(e){return a.createElement("div",{className:"organizerOption"},a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer noopener",style:{display:"inline-flex",justifyContent:"center",alignItems:"center"}},"email"===e.type?a.createElement(r.SRX,null):"website"===e.type?a.createElement(r.ssk,null):"instagram"===e.type?a.createElement(r.Zf_,null):"linkedin"===e.type?a.createElement(r.BUd,null):a.createElement(r.SRX,null)))}var o=function(e){return a.createElement("div",{className:"organizerCard"},e.imgSrc?a.createElement("img",{src:e.imgSrc,style:{aspectRatio:"1/1",width:"100%",objectFit:"cover"},alt:"profile"}):a.createElement("svg",{style:{fill:"black",background:"var(--gray)"},xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 200 200"},a.createElement("circle",{cx:"100",cy:"75",r:"50"}),a.createElement("path",{d:"M25,200c0-66,0-66,75-66s75,0,75,66"})),a.createElement("div",{className:"organizerNameBox"},a.createElement("h2",{className:"black bold"},e.name),a.createElement("h3",{className:"gray"},e.title)),a.createElement("div",{className:"organizerOptionsBox"},a.createElement(i.Pd.Provider,{value:{color:"white",fontSize:"1em"}},e.email&&a.createElement(l,{type:"email",link:"mailto:"+e.email}),e.website&&a.createElement(l,{type:"website",link:e.website}),e.insta&&a.createElement(l,{type:"instagram",link:"https://instagram.com/"+e.insta}),e.linkedIn&&a.createElement(l,{type:"linkedin",link:e.linkedIn}))))},c=JSON.parse('[{"name":"Sonav Agarwal","title":"Lead Director","email":"sonav@mvhacks.io","imgSrc":"https://drive.google.com/uc?id=1y0ZixypSpbFvqL8-77-n66YVm7JJITfo","website":"https://sonavagarwal.com","insta":"virtuosonav","linkedInUrl":""},{"name":"Olivia Lai","title":"Tech Director","email":"olivia@mvhacks.io","imgSrc":"https://drive.google.com/uc?id=1NHflgFKVhuOmzaCaIxc-6QckRzDeePzD","website":"http://oliviaslai.com","insta":"","linkedInUrl":""},{"name":"Ashwin Talwalkar","title":"Event Director","email":"ashwint@mvhacks.io","imgSrc":"","website":"https://ashwin-t.github.io/Old-Website/","insta":"_Ashwin.t","linkedInUrl":""},{"name":"Vinay Siva","title":"Outreach Director","email":"vinay@mvhacks.io","imgSrc":"https://drive.google.com/uc?id=1EW58z43mjyA6mRjc7is3p1fjwHbKR2In","website":"","insta":"","linkedInUrl":""},{"name":"Milind Upadhyay","title":"Tech Team","email":"milind@mvhacks.io","imgSrc":"https://drive.google.com/uc?id=1AxP6xYw_pcpJndcR7uC-lxAIbwNt11CY","website":"https://tree.ghar.family","insta":"","linkedInUrl":""},{"name":"Zephyr Jones","title":"Tech Team","email":"zephyr@mvhacks.io","imgSrc":"","website":"http://zephyrj.com","insta":"","linkedInUrl":""},{"name":"Amanda Zhang","title":"Event Team","email":"amanda@mvhacks.io","imgSrc":"https://drive.google.com/uc?id=1ZoKY5J7lof9NCmVjhWFiYPhYsT1pXqfn","website":"","insta":"","linkedInUrl":""},{"name":"Saarang Bondalapati","title":"Event Team","email":"","imgSrc":"https://drive.google.com/uc?id=1YF4XBDeUI1K1l6dNMSYCDLnmCYdi27Vj","website":"","insta":"saarang.bond","linkedInUrl":""},{"name":"Astra Tulac","title":"Event Team","email":"astratulac@gmaill.com","imgSrc":"https://drive.google.com/uc?id=1UpQhT9CJHvK76A1zxjMvb6ZwbAhSYZzT","website":"","insta":"astratulac","linkedInUrl":""},{"name":"Mihir Srivastava","title":"Outreach Team","email":"mihir@mvhacks.io","imgSrc":"https://drive.google.com/uc?id=1tUkF52LfW4vl5u6vIlSllyWR-sfJRNpM","website":"","insta":"","linkedInUrl":""},{"name":"Jayant Patil","title":"Outreach Team","email":"jay@mvhacks.io","imgSrc":"https://drive.google.com/uc?id=18l5tRSAkLydq5Yta8OIVgxmvr5qubJHd","website":"https://jayp570.github.io/","insta":"","linkedInUrl":""},{"name":"Armaan Hedayati","title":"Outreach Team","email":"","imgSrc":"","website":"","insta":"","linkedInUrl":""}]');function s(){return a.createElement("div",{className:"organizerGrid"},c.map((function(e,t){return a.createElement(o,{key:t,name:e.name,title:e.title,email:e.email,imgSrc:e.imgSrc,website:e.website,insta:e.insta,linkedInUrl:e.linkedInUrl})})))}var m=function(e){var t=(0,a.useRef)(),n=(0,a.useRef)();return a.useEffect((function(){var e=new MutationObserver((function(e){"0px"!==t.current.style.maxHeight&&(t.current.style.maxHeight=parseFloat(t.current.style.maxHeight)+3*e[0].target.scrollHeight+"px",e[0].target.addEventListener("transitionend",(function(){e[0].target.style.maxHeight=t.current.scrollHeight})))}));return n.current.classList.contains("hidden")||(t.current.style.maxHeight=t.current.scrollHeight+"px"),e.observe(t.current,{attributes:!0,attributeFilter:["class","className"],subtree:!0,childList:!0}),window.addEventListener("resize",(function(){n.current.classList.contains("hidden")||(t.current.style.maxHeight=t.current.scrollHeight+"px")})),document.querySelectorAll("img").forEach((function(e){e.addEventListener("load",(function(){n.current.classList.contains("hidden")||(t.current.style.maxHeight=t.current.scrollHeight+"px")}))})),function(){e.disconnect()}}),[]),a.createElement("div",{ref:n,className:"section",id:e.title.replace(" ","-")},a.createElement("button",{className:"sectionTitleBar",onClick:function(e){e.currentTarget.parentNode.classList.toggle("hidden")?t.current.style.maxHeight="0px":t.current.style.maxHeight=t.current.scrollHeight+"px"}},a.createElement("h1",{className:"white bold"},e.title),a.createElement("h2",{className:"collapse white bold"},"▼")),a.createElement("div",{ref:t,className:"children"},e.children))},u=JSON.parse('[{"filepath":"https://i.imgur.com/hzkHCt9.jpg","name":"Setting up"},{"filepath":"https://i.imgur.com/PEKs8zJ.jpg","name":"A team collaborating"},{"filepath":"https://i.imgur.com/9HFLMdE.jpg","name":"A team working on a project together"},{"filepath":"https://i.imgur.com/1tseqwt.jpg","name":"Cup stacking competition"},{"filepath":"https://i.imgur.com/cdRdJuG.jpg","name":"Some baked goods on a table"},{"filepath":"https://i.imgur.com/qitJsnB.jpg","name":"Another team collaborating"},{"filepath":"https://i.imgur.com/0jyQ6Kk.jpg","name":"A round of the brawlstars tournament"},{"filepath":"https://i.imgur.com/LWlvKHA.jpg","name":"The entire event room with teams spread across the tables"}]');var p=function(e){return a.createElement("div",{className:"section"},a.createElement("div",{className:"photoGrid"},u.map((function(e,t){return a.createElement("img",{key:t,name:e.name,alt:e.name,src:e.filepath,className:"photo"})}))))};var d=function(e){return a.createElement("div",{className:"section sponsors"},a.createElement("h1",{style:{marginTop:"1em",marginBottom:"0.2em",fontSize:"2.25em"}},"Coming soon!"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",{style:{marginBottom:"1em",fontSize:"1.5em"}},"Interested in sponsoring MVHacks? Contact ",a.createElement("a",{href:"mailto:sonav@mvhacks.io"}," sonav@mvhacks.io")," and take a look at our"," ",a.createElement("a",{href:"https://drive.google.com/file/d/1nYNdPKcjtIqK3pEunebXxK-GIHjW02pO/view?usp=sharing",rel:"noreferrer",target:"_blank"},"prospectus"),"!"))},h=n(892),f=n.n(h),g=n(552),v=["A hackathon is a competitive educational event in which students come together to develop an idea for a project\n      into a real product. MVHacks will provide hackers with educational resources,\n      including seminars and mentors, and an environment that will enable their success.","It is completely free! All food, swag, and prizes are provided at no charge.<br/><br/>","No - this is a fantastic learning opportunity! Hackers can expect to be able to attend\n      educational workshops run by industry professionals in addition to experienced adult mentors\n      to help them learn and succeed.","All high school students are eligible to attend MVHacks as hackers.\n      Interested in attending but not a high school student? Consider signing up to be a mentor.","For the event, all you need is your school ID, laptop, charger, and a desire to hack!<br/>","Teams of up to 4 are allowed. You may work as an individual, but we recommend collaborating. There will be a team mixer at\n       start of the hackathon.",'Be nice, respectful, and have fun! Hackers are expected to behave appropriately and safely at all times, and abide by the\n       <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a>.','Contact us through our Facebook, Twitter, or email:\n       <a href="mailto:contact@mv-hacks.com">contact@mv-hacks.com</a>.<br/>'],y=["What is a hackathon?","How much does it cost?","Do I need programming experience?","Who can attend?","What do I need?","Do I need a team?","What are the rules?","I have other questions!"].map((function(e,t){return{question:e,answer:v[t]}})),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).parentFaq=a.createRef(),n.answerRef=a.createRef(),n.question=t.question,n.answer=t.answer,"undefined"!=typeof window&&window.addEventListener("resize",(function(){n.parentFaq.current.classList.contains("visible")&&(n.answerRef.current.style.maxHeight=n.answerRef.current.scrollHeight+"px")})),n}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this;return a.createElement("div",{ref:this.parentFaq,className:"faq"},a.createElement("button",{className:"faq-question",onClick:function(){e.parentFaq.current.classList.toggle("visible")?e.answerRef.current.style.maxHeight=e.answerRef.current.scrollHeight+"px":e.answerRef.current.style.maxHeight="0px"}},this.question),a.createElement("div",{className:"faq-answer",dangerouslySetInnerHTML:{__html:"<p><br/>"+this.answer+"<br/>&nbsp;</p>"},ref:this.answerRef}))},t}(a.Component);var b=function(e){return a.createElement("div",{className:"faqs"},y.map((function(e,t){return a.createElement(E,{key:t,question:e.question,answer:e.answer})})))},w=n.p+"static/MVHacksLogoMV-4f573a8e0dd6c25bd8db702498ecdc00.png",k=JSON.parse('[{"title":"Check In & Breakfast","time":"7:15 am"},{"title":"Opening Ceremony","time":"8:00 am"},{"title":"Begin Hacking","time":"8:30 am"},{"title":"Team Mixer","time":"8:30 am"},{"title":"Beginner Web Development","desc":"RPG with JS, HTML, and CSS","time":"9:30 am"},{"title":"About IBM Internship","desc":"UCSD CS student speaker","time":"11:00 am"},{"title":"Ford Workshop on Blockchain","time":"11:30 am"},{"title":"Cup Stacking Championship","time":"2:00 pm"},{"title":"Make School Workshop","desc":"Landing Your First Tech Internship","time":"3:00 pm"},{"title":"Brawl Stars Tournament","time":"4:00 pm"},{"title":"Lunch","time":"12:30 pm"},{"title":"Dinner","time":"6:00 pm"},{"title":"Finalize Projects","time":"7:00 pm"},{"title":"End Hacking & Project Submission","time":"8:30 pm"}]');var x=function(e){var t={};t[e.left?"left":"right"]="0%";var n={top:e.top};n[e.left?"left":"right"]="max(calc(30vw - 200px), 100%)";var r={top:"-5px",width:"max(calc(30vw - 200px + 100%), 100%)",height:"10px"};return r[e.left?"right":"left"]="0",a.createElement("div",{className:"timeline-item-container",style:n},a.createElement("div",{className:"timeline-item back",style:t},a.createElement("h2",null,e.title),e.desc&&a.createElement("h3",null,e.desc),a.createElement("p",{className:"gray"},e.displayTime)),a.createElement("div",{className:"timeline-connector",style:r}))};var N=function(e){var t=(0,a.useRef)(),n=[];k.forEach((function(e){var t=Object.assign({},e);t.displayTime=e.time,t.time=Date.parse("1/1/1970 "+e.time),n.push(t)})),n.sort((function(e,t){return e.time-t.time}));var r=function(){for(var e=Number(n[2].time-n[0].time),t=3;t<n.length;t++){var a=Number(n[t].time-n[t-2].time);e>a&&(e=a)}return e}(),i=62.5,l=n[0].time,o=function(t){var n;return i+=125*Math.pow((t-l)/r,null!==(n=e.distort)&&void 0!==n?n:1),l=t,i};return n.forEach((function(e,t){var n=e;n.top=o(e.time)+"px",n.left=!!(t%2),e.props=n})),i+=187.5,a.createElement("div",{className:"timeline"},a.createElement("div",{ref:t,className:"timeline-center",style:{height:i}},n.map((function(e,t){return a.createElement(x,Object.assign({key:t},e.props))}))))},S=n.p+"static/SquareMVHacksLogo-306ba19bac31b2bd4aae83ad4a58cc15.png",C=n.p+"static/instalogo-1751f456a1018a5562610bd3908c49bc.png";var T=function(){return a.useEffect((function(){"undefined"!=typeof document&&function(){var e=null,t=document.querySelector("nav");if(document.referrer.includes(window.location.hostname)){var n=t;n.style.setProperty("transition","none","important"),n.classList.add("expanded"),n.querySelectorAll("a").forEach((function(e){var t=e.style;t.setProperty("color","rgba(0, 0, 0, 0)"),t.setProperty("border","none")})),window.setTimeout((function(e){n.style.setProperty("transition",""),n.classList.toggle("expanded"),n.querySelectorAll("a").forEach((function(e){var t=e.style;t.setProperty("color",""),t.setProperty("border","")}),500)}))}function a(e){var n;e=null!==(n=e)&&void 0!==n?n:t.classList.contains("expanded"),t.style.maxHeight=e?window.innerHeight-20+"px":"70px"}function r(t){var n=t.classList.contains("expanded");a(!0),e&&window.clearTimeout(e),e=window.setTimeout((function(){e=null,t.style.setProperty("overflow",n?"auto":"hidden")}),n?500:0),window.setTimeout((function(){t.childNodes[0].textContent=n?"✕":"|||"}),250),window.addEventListener("resize",(function(e){a(!0)}))}a(!0),document.getElementById("pancake").addEventListener("click",(function(e){e.target.parentElement.classList.toggle("expanded"),r(e.target.parentElement)})),document.addEventListener("focus",(function(){if("BUTTON"!==document.activeElement.nodeName&&"NAV"===document.activeElement.parentElement.nodeName)document.activeElement.parentElement.classList.add("expanded"),r(document.activeElement.parentElement);else{var e=t;e.classList.remove("expanded"),r(e)}}),!0),t.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(e){var n=t;n.classList.remove("expanded"),r(n)}))}))}()}),[]),a.createElement(a.Fragment,null,a.createElement("svg",{xmlns:"//www.w3.org/2000/svg",version:"1.1",className:"svg-filters",style:{display:"none"}},a.createElement("defs",null,a.createElement("filter",{id:"marker-shape"},a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.001 0.06",numOctaves:"1",result:"turbulence"}),a.createElement("feDisplacementMap",{xChannelSelector:"R",yChannelSelector:"G",scale:"30",in:"SourceGraphic",in2:"warp"})))),a.createElement("main",null,a.createElement(f(),{url:S}),a.createElement("title",null,"MVHacks 4.5"),a.createElement("nav",null,a.createElement("button",{id:"pancake"},"|||"),a.createElement("a",{href:"#MVHacks"},"Photo Gallery"),a.createElement("a",{href:"#Schedule"},"Schedule"),a.createElement("a",{href:"#Sponsors"},"Sponsors"),a.createElement("a",{href:"#FAQs"},"FAQs"),a.createElement("a",{href:"#The-Team"},"The Team")),a.createElement("div",{className:"topSection section",style:{minHeight:"80vh"}},a.createElement("div",{className:"l-header"},a.createElement("img",{src:w,style:{width:"clamp(20px, 80vw, 500px)",height:"auto",display:""},alt:"MVHacks Logo"}),a.createElement("h1",{style:{fontSize:"clamp(4em, 10vw, 6em)",display:"block"},className:"bold black"},"MVHacks 4.5")),a.createElement("div",{className:"r-header"},a.createElement("h1",{style:{fontSize:"clamp(2em, 3vw, 10em)",margin:"10px",marginBottom:"clamp(8px, 10vh, 80px)",lineHeight:"1.5em"},className:"darkGray"},"The hackathon for ",a.createElement("span",{className:"highlight black"},"everyone."),a.createElement("br",null)," (especially beginners)",a.createElement("br",null),a.createElement("br",null),a.createElement("span",{style:{fontSize:".7em",fontWeight:"700"}},"Join us October 23 from 8am to 8pm")),a.createElement("form",{className:"applyButtonForm",method:"get",action:"https://forms.gle/mkq56cms6G2MEW1DA",target:"_blank"},a.createElement("button",{className:"applyButton",type:"submit"},"Apply Now")))),a.createElement(m,{title:"MVHacks"},a.createElement(p,null)),a.createElement(m,{title:"Schedule"},a.createElement("h3",{style:{marginTop:"1em",paddingLeft:"2em"}},"*The schedule is subject to change"),a.createElement(N,{distort:.5})),a.createElement(m,{title:"Sponsors"},a.createElement(d,null)),a.createElement(m,{title:"FAQs"},a.createElement(b,null)),a.createElement(m,{title:"The Team"},a.createElement(s,null))),a.createElement("footer",{className:"center"},a.createElement("div",{className:"center-col"},a.createElement("form",{className:"applyButtonForm center-col",method:"get",action:"https://forms.gle/mkq56cms6G2MEW1DA",target:"_blank"},a.createElement("button",{className:"applyButton inverse",type:"submit"},"Apply Now"),a.createElement("p",{className:"white",style:{paddingTop:"10px"}},"You will get in *"),a.createElement("br",null),a.createElement("a",{target:"_blank",href:"https://www.instagram.com/mvhacks/"},a.createElement("img",{style:{width:"30px"},src:C})))),a.createElement("p",{className:"tiny",style:{justifySelf:"flex-end"}},"* Based on space available.")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c193da4aef08c0b500f8.js.map