document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;
    
    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;

        if(scrollPosition < heroHeight){
            hideHeader();
        }else{
            showHeader();
        }
    });

    for(let i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button){

            const targetTabButton = button.target.dataset.tabButton;
            hideAllTabs();
            removeActiveButton();
            
            const targetTabId = document.querySelector(`[data-tab-id = ${targetTabButton}]`);

            targetTabId.classList.add('shows__list--is-active');

            button.target.classList.add('shows__tabs__button--is-active');
        })
    };

    for (let i=0; i < questions.length; i++){
        questions[i].addEventListener('click', showHiddeAnswer)
    }
});

function hideHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
};

function showHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
};

function hideAllTabs(){
    const tabsContent = document.querySelectorAll('[data-tab-id]');

    for (let i=0; i < tabsContent.length; i++){
        tabsContent[i].classList.remove('shows__list--is-active')
    }
};

function removeActiveButton(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i=0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
};

function showHiddeAnswer(element){
    const openClass = 'faq__questions__item--is-open';
    const faqQuestionItem = element.target.parentNode;

    faqQuestionItem.classList.toggle(openClass);
}