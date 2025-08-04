import { heightMaxPx } from "./heightMaxChangeNav.const"

const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > heightMaxPx){
        navbar.classList.replace('bg-white/15', 'bg-greenCustom1')
    }
    else {
        navbar.classList.replace('bg-greenCustom1', 'bg-white/15')
    }

})

