const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
});

closeNavBtn.addEventListener('click', () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = 'none';
});

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