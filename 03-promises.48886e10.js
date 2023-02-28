const e=document.querySelector(".form");e.addEventListener("submit",(function(o){o.preventDefault();const n=new FormData(e);n.forEach(((e,o)=>{n[o]=e,t={...n}})),console.log("Value ",t),function(){const{amount:e,delay:o,step:n}=t;console.log(e)}();let a=localStorage.getItem("formData");t=JSON.parse(a)}));let t={};
//# sourceMappingURL=03-promises.48886e10.js.map
