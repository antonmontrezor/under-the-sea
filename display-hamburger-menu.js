// namespace object
const page = {};

// making a hamburger menu
page.openHamburgerMenu = function() {
    const hamburgerMenu = document.getElementById('nav-menu-toggle');
    hamburgerMenu.addEventListener('focus', function() {
        hamburgerMenu.classList.toggle('hamburger-menu');
        hamburgerMenu.classList.toggle('nav-toggle');

        const menuList = document.querySelector('.main-nav ul');
        menuList.classList.add('menu-list', 'hamburger-list');

        const menuItems = document.querySelectorAll('.main-nav li');
        for (let item of menuItems) {
            item.classList.add('menu-item', 'hamburger-item');
        }

        const menuLink = document.querySelectorAll('.main-nav li a');
        for (let link of menuLink) {
            link.classList.add('menu-link', 'hamburger-link');
        }
    });
};

// document ready 
const documentReady = function(init) {
    if (document.readyState === 'loading') {
        // doc is not ready, wait until it is fully loaded and run page's scripts
         document.addEventListener('DOMContentLoaded', init);
    } else {
        // 'DOMContentLoaded' has already fired, run page's scripts
        init();
    }     
};

// initialize page's scripts
documentReady(function () {
    page.openHamburgerMenu();
});