1$(function () {
    $(".menu a, .header__logo, .header-banner__link, .scroll-top__link, .footer__link").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top }, 1200);
    });

    $('.menu__btn, .menu__link').on('click', () => {
        $('.menu__list').toggleClass('menu__list--active');
    })

    const innerHeight = $(window).innerHeight();
    let sections = $('section');
    $(window).on('scroll', function () {
        let scrollTop = $(this).scrollTop();
        if ( scrollTop > innerHeight) {
            $('.scroll-top').css('display', 'block');
            $('.header-top').addClass('header-top--active');
        } else {
            $('.scroll-top').css('display', 'none');
            $('.header-top').removeClass('header-top--active');
        }


        /* Menu-active link on scrolling */
        sections.each((index, value) => {
            let top = $(value).offset().top-100;
            let bottom = top + $(value).height();
            let scroll = $(window).scrollTop();
            let id= $(value).attr('id');
            if(scroll > top && scroll < bottom) {
                $('.menu__link.menu__link--active').removeClass('menu__link--active');
                $('a[href="#' + id +'"]').addClass('menu__link--active');
            } else if (scroll < sections[0].offsetTop-100) {
                $('.menu__link.menu__link--active').removeClass('menu__link--active');
                $('a[href="#body"]').addClass('menu__link--active');
            }   
        })
    });

});

let linkList = document.querySelector('.content__list');
let frame = document.querySelector('.content__frame');
let frameLinks = document.querySelectorAll('.content__item-link');
const categoryLinksArr = {
    caseopen: 'https://www.youtube.com/embed/6UkaMrnTAT4',
    review: 'https://www.youtube.com/embed/hMA42l2AId8',
    boost: 'https://www.youtube.com/embed/nlj3TllIOYE',
    othergames: 'https://www.youtube.com/embed/Yw96_y6Jxqg',
    tricks: 'https://www.youtube.com/embed/vl9YFAbtgUE',
    tournaments: 'https://www.youtube.com/embed/WeB4aOpjBL8',
    prize: 'https://www.youtube.com/embed/WdRs4ikw22Q'
}

linkList.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    let value = target.getAttribute('value');

    if (value in categoryLinksArr && !target.classList.contains("content__item-link--active")) {
        deleteActiveClass(frameLinks, "content__item-link--active");
        target.classList.add('content__item-link--active');
        frame.src = categoryLinksArr[value];
    }
});

let menuList = document.querySelector('.menu__list');
let menuLinks = document.querySelectorAll('.menu__link');

menuList.addEventListener('click', (e) => {
    let target = e.target;
    deleteActiveClass(menuLinks, 'menu__link--active');
    target.classList.add('menu__link--active')
});

function deleteActiveClass(element, classToDelete) {
    element.forEach(element => {
        element.classList.remove(classToDelete);
    });
};

