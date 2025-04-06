(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=(c,o,s)=>{const n=document.createElement("li");n.innerHTML=`<strong>${c}</strong> — ${o} sets x ${s} reps`;const e=document.createElement("button");e.textContent="Advice",e.style.backgroundColor="blue",e.style.color="white",e.style.marginLeft="10px",e.addEventListener("click",async()=>{var l,d,u;const i="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";if(!i.startsWith("sk-")){alert("AI unavailable — stay hydrated and keep pushing!");return}try{const g=((u=(d=(l=(await(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:`Give me a 1-sentence fitness tip doing the amount of ${o} sets of ${s} reps of ${c}.`}]})})).json()).choices)==null?void 0:l[0])==null?void 0:d.message)==null?void 0:u.content)||"No advice available.";alert(`💡 AI Advice: ${g}`)}catch(p){console.error("Error:",p),alert("Failed to fetch advice.")}});const t=document.createElement("button");t.textContent="PUSH",t.style.backgroundColor="yellow",t.style.marginLeft="10px",t.addEventListener("click",()=>{alert("What would David Goggins say? 💪"),window.open("https://www.youtube.com/watch?v=YBG7-zjFOdc","_blank")});const r=document.createElement("button");return r.textContent="X",r.style.backgroundColor="red",r.style.marginLeft="10px",r.addEventListener("click",()=>n.remove()),n.appendChild(e),n.appendChild(t),n.appendChild(r),n},a=document.getElementById("new-task-form"),m=document.getElementById("new-task-title"),f=document.getElementById("sets"),y=document.getElementById("reps"),v=document.getElementById("list");a==null||a.addEventListener("submit",c=>{c.preventDefault();const o=m.value.trim(),s=parseInt(f.value),n=parseInt(y.value);if(!o||isNaN(s)||isNaN(n))return;const e=h(o,s,n);v.appendChild(e),m.value="",f.value="",y.value=""});
