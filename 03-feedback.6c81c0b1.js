function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var i,r,o,f,u,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(w,t),l?y(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=o}function w(){var e=p();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-a);return s?m(n,o-(e-c)):n}(e))}function O(e){return u=void 0,g&&i?y(e):(i=r=void 0,f)}function S(){var e=p(),n=h(e);if(i=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(s)return u=setTimeout(w,t),y(a)}return void 0===u&&(u=setTimeout(w,t)),f}return t=b(t)||0,v(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=r=u=void 0},S.flush=function(){return void 0===u?f:O(p())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y={email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea"),submit:document.querySelector(".feedback-form button")};y.email.addEventListener("input",e(t)((function(e){j=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify({email:j,message:h}))}),500)),y.message.addEventListener("input",e(t)((function(e){h=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify({email:j,message:h}))}),500));let j="";let h="";
//# sourceMappingURL=03-feedback.6c81c0b1.js.map
