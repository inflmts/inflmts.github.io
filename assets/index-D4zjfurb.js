(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector("header"),l=document.querySelector("main"),d=document.querySelector("#menu"),f=document.querySelector("#menu-button"),u="fixed z-10 w-full h-16 border-b transition-all",m=u+" border-transparent",p=u+" bg-zinc-900 border-zinc-700";new IntersectionObserver(n=>{for(const r of n)r.isIntersecting?c.className=m:c.className=p}).observe(document.querySelector("#top-test"));let o=!1;f.addEventListener("click",()=>{o?(l.classList.remove("invisible"),d.classList.add("hidden"),o=!1):(l.classList.add("invisible"),d.classList.remove("hidden"),o=!0)});
