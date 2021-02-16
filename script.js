const menuBar = document.getElementById('menu-bars');
const menuCrossBar = document.getElementById('menu-bars-cross');
const menuContent = document.getElementById('menu-content');
// const displayPage = document.getElementById('display-page');
const header = document.getElementById('header');
const topPage = document.getElementById('top-page');
// const otherPages = document.getElementById('other-pages');
const titleContainer = document.getElementById('title-container');
const toABout = document.getElementById('about-link');
const toProduct = document.getElementById('product-link');
const imgContaier = document.getElementById('img-container');

menuBar.addEventListener('click', function() {
    menuContent.classList.add('showing');
    menuContent.hidden = false;
});
menuCrossBar.addEventListener('click', () => {
    menuContent.classList.remove('showing');
});
toABout.addEventListener('click', function() {
    menuContent.classList.remove('showing');
    menuContent.hidden = true;
});
toProduct.addEventListener('click', function() {
    menuContent.classList.remove('showing');
    menuContent.hidden = true;
});

const topPageHeight = topPage.offsetHeight;
console.log(topPageHeight);
window.addEventListener('scroll', () => {
    if(topPageHeight <= window.scrollY) {
    header.classList.add('fixed');
    } else {
    header.classList.remove('fixed');
    }
});

window.addEventListener('scroll', () => {
    if(0 <= window.scrollY) {
        titleContainer.classList.add('s-1');
        imgContaier.classList.add('s-1');
    }
});