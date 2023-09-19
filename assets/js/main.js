// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        if(obj == null)
            return; 
        let current = start;
        let range = end - start;
        let increment = end > start ? Math.ceil((end-start)/duration) : -1;
        let step = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current >= end) {
                obj.textContent = end;
                clearInterval(timer);
            } 
        }, step);
    }
    
    counter("count1", 0, 50, 4500);
    counter("count2", 0, 1260, 1500);
    counter("count3", 0, 40, 4500);
    counter("count4", 0, 7479, 1400);
    
    
});

// Our Partner
var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },


    },
});


//---------------------------
  $('table tr:nth-child(n+1):nth-child(-n+8)').addClass('active');

$('#songs-load').on('click', function(e) {
  e.preventDefault();  
  var $rows = $('.songs-table tr');
  var lastActiveIndex = $rows.filter('.active:last').index();
  $rows.filter(':lt(' + (lastActiveIndex + 10) + ')').addClass('active');
});

$('#album-load').on('click', function(e) {
  e.preventDefault();  
  var $rows = $('.album-table tr');
  var lastActiveIndex = $rows.filter('.active:last').index();
  $rows.filter(':lt(' + (lastActiveIndex + 10) + ')').addClass('active');
});



