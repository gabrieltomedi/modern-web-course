(()=>{var e={981:(e,r,o)=>{const t=o(700);console.log(t.greeting())},700:e=>{e.exports={greeting:()=>"Hi, I am Module B"}}},r={};function o(t){var s=r[t];if(void 0!==s)return s.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,o),n.exports}(()=>{"use strict";o(981);const e=new class{greet(){return"Hello!"}};console.log(e.greet())})()})();