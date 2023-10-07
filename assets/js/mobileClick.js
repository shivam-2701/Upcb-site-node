const dropdowns= document.querySelectorAll(" .dropdown");
dropdowns.forEach((el)=>{
    const dlist= el.querySelector(" .dropdown-menu");
    el.addEventListener("onclick",()=>{
        const display = window.getComputedStyle(dlist).display;
        if(display=="hidden" || display=="none"){
            dlist.styles.display="inline-block";
        }else{
            dlist.styles.display="none";
        }
    })
});