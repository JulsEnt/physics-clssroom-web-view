window.addEventListener('DOMContentLoaded',async(event)=>{
    const header = document.querySelector('header'),
        baricon = document.querySelector('.baricon'),
        navmenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav-menu ul');
    const navlinks = document.querySelector('.nav-menu ul li a');

    baricon.addEventListener('click', event =>{
        if(!navmenu.classList.contains('shownav'))
        {
            navmenu.style.height = `${navmenu.scrollHeight}px`
        } else
        {
            navmenu.style.height = '0px';
        }
        navmenu.classList.toggle("shownav")
    })

})