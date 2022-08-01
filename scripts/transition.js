'use script';

window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const gallery_articles = document.querySelectorAll('.gallery_article'); 

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500)

    for (let i = 0; i < gallery_articles.length; i++) {
        const gallery = gallery_articles[i];

        gallery.addEventListener('click', function(e) {
            e.preventDefault();

            let target = e.target;
            let rightTarget = target.closest('.gallery_article').dataset.article;
            console.log(rightTarget);
            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = rightTarget;
            }, 500)
        })
    }

    const backBtn = document.querySelectorAll('.leavePage');

    for (let i = 0; i < backBtn.length; i++) {
        const btn = backBtn[i];

        btn.addEventListener('click', function(e) {
            e.preventDefault();

            const target = e.target.dataset.main;
            console.log(target);

            transition_el.classList.add('is-active');
    
            setTimeout(() => {
                window.location.href = target;
            }, 500)

        });
    }

}