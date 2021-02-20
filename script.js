const menuBar = document.getElementById('menu-bars');
const menuCrossBar = document.getElementById('menu-bars-cross');
const menuContent = document.getElementById('menu-content');
const header = document.getElementById('header');
const topPage = document.getElementById('top-page');
const toABout = document.getElementById('about-link');
const toProduct = document.getElementById('product-link');
const aboutPageContainer = document.getElementById('about-page-container');
const aboutImagesContainer = document.getElementById('about-imgs-container');
const aboutBottomPage = document.getElementById('about-bottom-page');
const chairImg = document.getElementById('chair-img');
const chairImgContainer = document.getElementById('chair-img-container');
const graph = document.getElementById('graph');
const graphImgContainer = document.getElementById('graph-img-container');
const graphTextsContainer = document.getElementById('graph-texts-container');
const production = document.getElementById('production');
const productContainer = document.getElementById('product-container');
const picture1Container = document.getElementById('picture-1-container');
const picture2Container = document.getElementById('picture-2-container');
const picture3Container = document.getElementById('picture-3-container');
const picture4Container = document.getElementById('picture-4-container');


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

window.addEventListener('scroll', () => {
    if(topPageHeight <= window.scrollY) {
    header.classList.add('fixed');
    } else {
    header.classList.remove('fixed');
    }
});

window.addEventListener('scroll', () => {
    if(topPageHeight <= window.scrollY + 200) {
    aboutPageContainer.classList.add('s-1');
    aboutPageContainer.classList.remove('invisible');
    }
});

const aboutBottomPageTop = aboutBottomPage.offsetTop;
window.addEventListener('scroll', () => {
    if(aboutBottomPageTop <= window.scrollY + 300) {
        aboutBottomPage.classList.add('s-1');
        aboutBottomPage.classList.remove('invisible');
    } else {
    }
});

const aboutImagesContainerTop = aboutImagesContainer.offsetTop;
window.addEventListener('scroll', () => {
    if(aboutImagesContainerTop <= window.scrollY + 300) {
        aboutImagesContainer.classList.add('s-1');
        aboutImagesContainer.classList.remove('invisible');
    }
});

const chairImgTop = chairImg.offsetTop;
window.addEventListener('scroll', () => {
    if(chairImgTop <= window.scrollY + 300) {
        chairImgContainer.classList.add('left-1');
        chairImgContainer.classList.remove('invisible');
    }
});

const graphImgContainerTop = graphImgContainer.offsetTop;
window.addEventListener('scroll', () => {
    if(graphImgContainerTop <= window.scrollY + 300) {
        graphImgContainer.classList.add('s-1');
        graphImgContainer.classList.remove('invisible');
    }
});

const graphTextsContainerTop = graphTextsContainer.offsetTop;
window.addEventListener('scroll', () => {
    if(graphTextsContainerTop <= window.scrollY + 300) {
        graphTextsContainer.classList.add('left-1');
        graphTextsContainer.classList.remove('invisible');
    }
});


const productionTop = production.offsetTop;
window.addEventListener('scroll', () => {
    if(productionTop <= window.scrollY + 300) {
        productContainer.classList.add('s-1');
        productContainer.classList.remove('invisible');
    }
});
// const picture1ContainerTop = picture1Container.offsetTop;
window.addEventListener('scroll', () => {
    if(productionTop <= window.scrollY + 200) {
        picture1Container.classList.add('top-1');
        picture1Container.classList.remove('invisible');
    }
});
// const picture2ContainerTop = picture2Container.offsetTop;
window.addEventListener('scroll', () => {
    if(productionTop <= window.scrollY + 200) {
        picture2Container.classList.add('top-2');
        picture2Container.classList.remove('invisible');
    }
});
const picture3ContainerTop = picture3Container.offsetTop;
window.addEventListener('scroll', () => {
    if(productionTop + picture3ContainerTop <= window.scrollY + 300) {
        picture3Container.classList.add('top-1');
        picture3Container.classList.remove('invisible');
    }
});
const picture4ContainerTop = picture4Container.offsetTop;
window.addEventListener('scroll', () => {
    if(productionTop + picture4ContainerTop <= window.scrollY + 300) {
        picture4Container.classList.add('top-2');
        picture4Container.classList.remove('invisible');
    }
});