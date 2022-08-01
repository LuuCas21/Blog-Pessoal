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

//const leaveBtn = document.querySelectorAll('.leavePage');

/*leaveBtn.forEach(l => {
    l.addEventListener('click', function() {
        window.location = '../index.html';
    })
})
*/