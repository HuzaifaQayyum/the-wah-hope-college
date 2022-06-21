document.querySelectorAll(".collapsable").forEach(e => 
   e.querySelector(".collapsable__toggler")
    .addEventListener("click", _ => e.querySelector(".collapsable__content").classList.toggle("active")));
    
AOS.init();