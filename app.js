const headerNav = document.querySelector('.header-nav')
const navItems = document.querySelectorAll('.header-nav a');
const dropDownMenu = document.querySelector('.drop-down');
const exitIcon =  document.querySelector('.exit');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const gallerySlider = document.querySelector('.slider')
const galleryImages = document.querySelectorAll('.slide-content');

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
       /*makes sure drop down doesnt appear on desktop when an option is choosen */
       if(window.innerWidth < 830){
           closeMenu();
       }
    })
}

let current = 0;

//Clear all images
function reset() {
    for (let i = 0; i < galleryImages.length; i++) {
      galleryImages[i].style.display = "none";
    }
  }
  
  // Init slider
  function startSlide() {
    reset();
    galleryImages[0].style.display = "block";
  }
  
  // Show prev
  function slideLeft() {
    reset();
    galleryImages[current - 1].style.display = "block";
    current--;
  }
  
  // Show next
  function slideRight() {
    reset();
    galleryImages[current + 1].style.display = "block";
    current++;
  }
  
  // Left arrow click
  leftArrow.addEventListener("click", function() {
    if (current === 0) {
      current = galleryImages.length;
    }
    slideLeft();
  });
  
  // Right arrow click
  rightArrow.addEventListener("click", function() {
    if (current === galleryImages.length - 1) {
      current = -1;
    }
    slideRight();
  });
  
  startSlide();

