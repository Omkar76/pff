(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();let s=[];function l(e){if(e.preventDefault(),!c())return;const t=new FormData(e.target);let n={name:t.get("name"),email:t.get("email"),password:t.get("password"),dob:t.get("dob"),acceptTerms:!!t.get("acceptTerms")};s.push(n),localStorage.setItem("users",JSON.stringify(s)),document.querySelector("table").appendChild(d(n))}function d(e){const t=document.createElement("tr");return t.innerHTML=`
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.password}</td>
    <td>${e.dob}</td>
    <td>${e.acceptTerms}</td>
    `,t}function u(e){const t=new Date,n=t.getFullYear()-e.getFullYear();return t.getMonth()<e.getMonth()||t.getMonth()===e.getMonth()&&t.getDate()<e.getDate()?n-1:n}function c(){const e=document.querySelector("#dob"),t=new Date(e.value),n=u(t);return n>=18&&n<=55?(e.setCustomValidity(""),e.reportValidity(),!0):(e.setCustomValidity("Age must be 18 to 55"),e.reportValidity(),!1)}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("form").addEventListener("submit",l),document.querySelector("#dob").addEventListener("input",e=>{e.target.setCustomValidity("")}),s=JSON.parse(localStorage.getItem("users"))||[];for(let e of s)document.querySelector("table").appendChild(d(e))});