function menu() {
    const navbutton = document.querySelector('div#nav-button')
    const navItems = document.querySelector('.nav-items')
    const navContainer = document.querySelector('nav#header-nav')
    
    if (navItems.style.display == 'block') {
        navItems.style.display = 'none'
        navContainer.style.height = '600px'
        
    } else {
        navbutton.style.display = 'block'
        navItems.style.display = 'block'
        navItems.style.width = '100%'
    }
}