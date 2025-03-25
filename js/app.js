const beneficiostitle=document.querySelectorAll(".card-horizontal .head-recomendaciones-info");
beneficiostitle.forEach(beneficio=>{
    beneficio.addEventListener("click",()=>{
        beneficio.parentNode.classList.toggle("active");
        console.log(beneficio);
        const content=beneficio.nextElementSibling;
        if(beneficio.parentNode.classList.contains("active")){
            content.style.height=(content.scrollHeight+30)+"px";
        }else{
            content.style.height="0px";
        }
    });
});
