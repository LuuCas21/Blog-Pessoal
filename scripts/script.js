'use script';

const content = document.querySelector('#dropdown_content');
const bTn_menu = document.querySelector('#button_menu');
const bTn_top = document.querySelector('#button--2');
const navbar = document.querySelector('#navbar');
const sticky_navbar = navbar.offsetTop;
const mainPage = document.querySelector('#logo_anchor');
const list = document.querySelector('.listMenu');

/*bTn_menu.addEventListener('keydown', function(e) {
    console.log(e.key);
    if(e.key === 'Escape') {
        if(!content.classList.contains('disappear_')) {
            content.classList.add('disappear_')
        }
    }
});
*/

const dropdown_1 = function() {

    /*if(content.classList.contains('disappear_')) {
        //content.classList.remove('disappear_');
        //list.style.display = 'block';
        content.classList.remove('disappear_');
    } else {
        //content.classList.add('disappear_');
        //list.style.display = 'none';
        content.classList.add('appear_');
    }*/

    content.classList.toggle('appear_');
    /*
    if(content.classList.contains('appear_')) {
        document.getElementById('lista').classList.remove('listMenu')
    } else {
        document.getElementById('lista').classList.add('listMenu')
    }
    */
}

const takeMeToTop = function() {
    /*document.documentElement.scrollTop = 0;
    document.scrollTop = 0;*/
    window.scrollTo({top:0, behavior:'smooth'});
}

/*window.onscroll = function () {sticky()};

const sticky = function() {
    if(window.pageYOffset >= sticky_navbar) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}*/

// Hide Navbar On Scroll

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if(prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-90px';
    }

    prevScrollPos = currentScrollPos;
};
const anchor_mainPage = function() {
    window.location = '/index.html';
}

// Artigos

const article_1 = document.getElementById('javascript_article');

const anchor_article_1 = function() {
    window.location = '/artigos/Javascript - Variáveis.html';
}

const anchor_article_2 = function() {
    window.location = '/artigos/HTML - Criar Arquivo.html';
}

const anchor_article_3 = function() {
    window.location = '/artigos/Bootstrap -- Classes Básicas.html';
}

const anchor_article_4 = function() {
    window.location = '/artigos/Limpeza no Linux.html';
}

const anchor_article_5 = function() {
    window.location = '/artigos/stickyNavbar.html';
};

function linkedin_anchor() {
    window.open('https://www.linkedin.com/in/lucassouza200/');
}

function github_anchor() {
    window.open('https://github.com/LuuCas21');
}

function instagram_anchor() {
    window.open('https://www.instagram.com/luucas21__/');
}




/*let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};

let callback = (entries, observer) => {
    entries.forEach(entry => {
        //Check if the element is in the viewport or not && if we are working on the correct HTML element
        if(entry.isIntersecting && entry.target.className === 'image_') {
            // Start to load the image
            let imageUrl = entry.target.getAttribute('data-img');
            // Check if we have the value or not
            if(imageUrl) {
                entry.target.src = imageUrl;
                observer.unobserve(entry.target);
            }
        }
    })
};

let observer = new IntersectionObserver(callback, options); //It requires two arguments
observer.observe(document.querySelector('#image_1'));
observer.observe(document.querySelector('#image_2'));
observer.observe(document.querySelector('#image_3'));
observer.observe(document.querySelector('#image_4'));
*/

const pagination = document.querySelector('.pagination');
const pagBtns = document.querySelectorAll('.pag_btn');
const galleryContents = document.querySelectorAll('.gallery_content');

pagination.addEventListener('click', function(e) {
    e.preventDefault();
    const clicked = e.target.closest('.pag_btn');
    //const data = clicked.getAttribute('dataset.page');
    if(!clicked) return;
    console.log(clicked);

    pagBtns.forEach(buttons => {
            buttons.classList.remove('pagSelected');
            clicked.classList.add('pagSelected');
    })

    galleryContents.forEach(contents => {
        contents.classList.add('offline');
        document.querySelector(`.gallery_content_${clicked.dataset.page}`).classList.remove('offline');
        contents.scrollIntoView({top: 0, behavior: 'smooth'});
    })
})

const modeBtn = document.querySelectorAll('.darkMode');
const modeLogo = document.querySelectorAll('.modeLogo');

navbar.addEventListener('click', function(e) {
    const clicked = e.target.closest('.fa');
    console.log(clicked);
    if(clicked) {
        // Dark Mode Header
        navbar.classList.toggle('dark_mode_navbar');
        modeBtn.forEach(d => {
            d.classList.toggle('off');
        })
        // Dark Mode Logo
        modeLogo.forEach(l => {
            l.classList.toggle('off');
        })
        // Dark Mode Titles
        document.querySelectorAll('.title').forEach(t => {
            t.classList.toggle('lightTitleMode');
        })

        // Dark Mode Body Content
        document.querySelector('.containerDark').classList.toggle('darkBodyMode');
        document.querySelector('body').classList.toggle('darkBodyMode');
        document.querySelector('.footer').classList.toggle('darkBodyMode');
        document.querySelector('.footer_content').classList.toggle('darkBodyMode');
        // Social Medias Light Text
        //document.querySelector('.fa-github').style.color = 'red !important';
        // Dark Mode on Hover
        if(document.querySelector('.containerDark').classList.contains('darkBodyMode')) {
        const css = '#gallery_article:hover{box-shadow: 7px 3px 9px 5px #303030}';
        const style = document.createElement('style');

        if(style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.querySelector('#gallery_article').appendChild(style);
    } else {
        const css = '#gallery_article:hover{box-shadow: 7px 3px 9px 5px #E4E4E4}';
        const style = document.createElement('style');

        if(style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.querySelector('#gallery_article').appendChild(style);
    }

    document.querySelectorAll('.lightText').forEach(t => {
        t.classList.toggle('lightTitleMode');
    })
    
    }
});

// Icons Fade Out Effect

const icon = document.querySelector('.icons');

icon.addEventListener('mouseover', function(e) {

    if(e.target.classList.contains('icon')) {
        const clicked = e.target;
        const icons = clicked.closest('.icons').querySelectorAll('.icon');
        icons.forEach(i => {
            if(i !== clicked) {
                i.style.opacity = 0.5;
            }
        })
    }
})

icon.addEventListener('mouseout', function(e) {
    if(e.target.classList.contains('icon')) {
        const clicked = e.target;
        const icons = clicked.closest('.icons').querySelectorAll('.icon');
        icons.forEach(i => {
            if(i !== clicked) {
                i.style.opacity = 1;
            }
        })
    }
})