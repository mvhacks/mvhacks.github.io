(self.webpackChunkmvhacks_site=self.webpackChunkmvhacks_site||[]).push([[108],{379:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var o=null;function a(){var e=document.querySelector("nav");if(document.referrer.includes(window.location.hostname)){var t=e;t.style.setProperty("transition","none","important"),t.classList.add("expanded"),t.querySelectorAll("a").forEach((function(e){var t=e.style;t.setProperty("color","rgba(0, 0, 0, 0)"),t.setProperty("border","none")})),window.setTimeout((function(e){t.style.setProperty("transition",""),t.classList.toggle("expanded"),t.querySelectorAll("a").forEach((function(e){var t=e.style;t.setProperty("color",""),t.setProperty("border","")}),500)}))}function n(t){var n;t=null!==(n=t)&&void 0!==n?n:e.classList.contains("expanded"),e.style.maxHeight=t?window.innerHeight-20+"px":"70px"}function a(e){var t=e.classList.contains("expanded");n(!0),o&&window.clearTimeout(o),o=window.setTimeout((function(){o=null,e.style.setProperty("overflow",t?"auto":"hidden")}),t?500:0),window.setTimeout((function(){e.childNodes[0].textContent=t?"✕":"|||"}),250),window.addEventListener("resize",(function(e){n(!0)}))}n(!0),document.getElementById("pancake").addEventListener("click",(function(e){e.target.parentElement.classList.toggle("expanded"),a(e.target.parentElement)})),document.addEventListener("focus",(function(){if("BUTTON"!==document.activeElement.nodeName&&"NAV"===document.activeElement.parentElement.nodeName)document.activeElement.parentElement.classList.add("expanded"),a(document.activeElement.parentElement);else{var t=e;t.classList.remove("expanded"),a(t)}}),!0),e.querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(t){var n=e;n.classList.remove("expanded"),a(n)}))}))}}}]);
//# sourceMappingURL=component---src-pages-navbar-js-a2b0717ea49e5c8e88b9.js.map