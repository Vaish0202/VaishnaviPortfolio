Shery.mouseFollower();
Shery.makeMagnet(".magnet");

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Rotating role in the hero
(function(){
  var el=document.getElementById("role");
  if(!el||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  var roles=["AI Engineer","Agentic AI Developer","ML Engineer","Full-Stack Developer"],r=0,c=roles[0].length,del=true;
  setInterval(function(){
    if(del){c--;if(c<=0){del=false;r=(r+1)%roles.length}}
    else{c++;if(c>=roles[r].length)del=true}
    el.textContent=roles[r].slice(0,c);
  },90);
})();

// Dark mode toggle (remembers choice)
document.getElementById("theme").addEventListener("click",function(){
  var d=document.documentElement,n=d.dataset.theme==="dark"?"light":"dark";
  d.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}
});