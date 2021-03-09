$(function(){
    
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
    
    if(value in categoryLinksArr && !target.classList.contains("content__item-link--active")) {
        deleteActiveClass();
        target.classList.add("content__item-link--active");
        frame.src = categoryLinksArr[value];
    }
});

function deleteActiveClass() {
    frameLinks.forEach(element => {
        element.classList.remove("content__item-link--active");
    });
};

