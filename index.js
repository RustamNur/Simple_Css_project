const changeBg = () => {
    let navbar = document.getElementById("navbar")
    let scrollValue = window.scrollY;
console.log(scrollValue);
    if (scrollValue < 150) {
        navbar.classList.remove('main-header__colored')
    } else {
        navbar.classList.add('main-header__colored')
    }
}

window.addEventListener("scroll", changeBg)


