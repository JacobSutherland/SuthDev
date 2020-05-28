const headerNav = document.querySelector('.header-nav')
const navItems = document.querySelectorAll('.header-nav a');
const dropDownMenu = document.querySelector('.drop-down');
const exitIcon =  document.querySelector('.exit');

function openMenu(){
    headerNav.classList.toggle('open');
    exitIcon.classList.toggle('exit-open')
    dropDownMenu.style.display = 'none';
}

function closeMenu(){
    headerNav.classList.toggle('open');
    exitIcon.classList.toggle('exit-open');
    dropDownMenu.style.display = 'block';
}


/*Open Drop Down Menu */
dropDownMenu.addEventListener('click', () => {
    openMenu();
})

/*close Drop Down Menu */
exitIcon.addEventListener('click', () => {
    closeMenu();
})

/*close Drop Down Menu When an option is choosen*/
for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        closeMenu();
    })
}
