!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire4c75;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire4c75=n);var r=n("1WSnx"),o=document.querySelector(".feedback-form"),l=o.querySelector('input[name="email"]'),i=o.querySelector('textarea[name="message"]'),u=(0,r.throttle)((function(){var e={email:l.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);l.addEventListener("input",u),i.addEventListener("input",u),o.addEventListener("submit",(function(e){e.preventDefault();var t={email:l.value,message:i.value};console.log(t),localStorage.removeItem("feedback-form-state"),o.reset()})),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);l.value=t.email,i.value=t.message}}))}();
//# sourceMappingURL=03-feedback.39d42b0f.js.map