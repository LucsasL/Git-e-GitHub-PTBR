function menu() {
    const navbutton = document.querySelector('div#nav-button')
    const navItems = document.querySelector('.nav-items')
    const navContainer = document.querySelector('nav#header-nav')
    
    if (navItems.style.display == 'block') {
        navItems.style.display = 'none'

    } else {
        navItems.style.display = 'block'
    }
}