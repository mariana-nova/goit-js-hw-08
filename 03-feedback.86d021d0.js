var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire4c75=o);var n=o("kEUo3");const r=document.querySelector(".feedback-form"),l=r.querySelector('input[name="email"]'),s=r.querySelector('textarea[name="message"]'),i=(0,n.throttle)((()=>{const e={email:l.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);l.addEventListener("input",i),s.addEventListener("input",i),r.addEventListener("submit",(e=>{e.preventDefault();const t={email:l.value,message:s.value};console.log(t),localStorage.removeItem("feedback-form-state"),r.reset()})),document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);l.value=t.email,s.value=t.message}}));
//# sourceMappingURL=03-feedback.86d021d0.js.map
