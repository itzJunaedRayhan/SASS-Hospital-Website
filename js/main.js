const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

//  Open Navbar on click:
openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
});


//  closeNav Function:
function closeNav () {
    navItems.style.display = 'none';
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = 'none';
}


//  Close Navbar on click:
closeNavBtn.addEventListener('click', closeNav);


//  close nav menu when menu item is clicked:
if (window.innerWidth <= 1024) {
    document.querySelectorAll('#nav_items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}


//  change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


//  Testimonial Section - Swiper Implementation:
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //  Responsive Breakpoints:
    breakpoints: {
        //  when width is >= 600px
        600: {
            slidesPerView: 2
        },

        //  when width is >= 1024px
        1024: {
            slidesPerView: 3
        }
    }
});