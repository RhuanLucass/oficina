// Animação menu
const header = document.querySelector('header');
const title = document.querySelector('header .logo h1');
const li = document.querySelectorAll('header nav ul li');
const menu = document.querySelectorAll('header .desktop ul li a[href^="#"]');


window.addEventListener('scroll', navScroll);

function navScroll(e){
    if(window.scrollY > 0){
        header.classList.add('headerh');
        title.classList.add('h1-less');
        li.forEach(element => element.classList.add('li-less'));
    }else{
        header.classList.remove('headerh');
        title.classList.remove('h1-less');
        li.forEach(element => element.classList.remove('li-less'));
    }
}



// Animação main
const main = document.querySelector('main');
const h1 = document.querySelector('main .text h1');
main.classList.add('animation');
h1.classList.add('animation');


// Animação Conteúdos
const services = document.querySelectorAll('[data-animation]');

window.addEventListener('scroll', downAnimation);

function downAnimation(e){
    e.preventDefault();
    // window.scrollY - pega a distância que está do topo
    // window.innerHeight - pega a altura da janela  
    const windowTop = window.scrollY + (window.innerHeight * 0.85);
    const scrollTop = window.scrollY + (window.innerHeight * 0.5);
    
    // console.log(windowTop)
    services.forEach(element => {
        // element.offsetTop - pega a distancia do elemento até o topo
        if(windowTop > element.offsetTop){
            element.classList.add('animation');
            sectionMenu(scrollTop);
        }
        else
            element.classList.remove('animation');
    });
}


// Select menu
function sectionMenu(scrollTop){
    menu.forEach(link => {
        const href = link.getAttribute('href');
        const element = document.querySelector(href);
        const posSection = element.offsetTop;
        const height = element.clientHeight;
        
        if(posSection <= scrollTop && (posSection + height) > scrollTop){
            menu.forEach(el => el.classList.remove('select'));
            link.classList.add('select');
        }
    });
}



// Animação de scroll suave
menu.forEach(value => value.addEventListener('click', scrollId));

function scrollId(e){
    e.preventDefault();
    const element = e.target;
    const to = getScrollTop(element) - 45;

    scrollToPosition(to);
}

function getScrollTop(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to){
    // Funciona em alguns browsers
    // window.scroll({
    //     top: to,
    //     behavior: "smooth"
    // }); 

    smoothScrollTo(0, to, 2000);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};




// Slider

function addSlider(){
    const slides = document.querySelectorAll('[data-js="carousel__item"]');
    const nextButton = document.querySelector('[data-js="carousel__button--next"]');
    const prevButton = document.querySelector('[data-js="carousel__button--prev"]');
    const carousel = document.querySelector('.carousel');

    var countImg = 10;
    let currentSlideIndex = 0;
    const lastSlideIndex = slides.length - 1;
    var myTimer;
    var current = 0;

    function manipulateSlidesClasses(currentSlideIndex){
        slides.forEach(slide => slide.classList.remove('carousel__item--visible'));
        slides[currentSlideIndex].classList.add('carousel__item--visible');

        clearInterval(myTimer);
        nextAuto();
    }

    nextButton.addEventListener('click', next);

    function next(){
        (currentSlideIndex === lastSlideIndex) ? currentSlideIndex = 0 : currentSlideIndex++;
        // manipulateSlidesClasses(currentSlideIndex);
        slide(currentSlideIndex);
        
    }

    prevButton.addEventListener('click', prev);

    function prev(){
        (currentSlideIndex === 0) ? currentSlideIndex = lastSlideIndex : currentSlideIndex--;
        // manipulateSlidesClasses(currentSlideIndex);
        slide(currentSlideIndex);

        
    }

    function nextAuto(){
        myTimer = setInterval(() => {
            next();
        }, 3000);
    }
    nextAuto();

    // Balls slider
    const balls = document.querySelector('.reformeds .balls');
    const lengthImg = document.querySelectorAll('.reformeds .carousel__item').length;



    const image = document.getElementById(current);

    for(let i = 0; i < lengthImg; i++){
        const div = document.createElement('div');
        div.id = i;
        div.classList.add('ball');

        balls.appendChild(div);
    }

    document.getElementById('0').classList.add('checked');

    const pos = document.querySelectorAll('.reformeds .balls .ball');

    pos.forEach(element => element.addEventListener('click', clickBalls));

    function clickBalls(){
        // atual = this.id;
        // slide();
        const id = parseInt(this.id);
        current = id;
        // const ball = document.getElementById(id);
        // document.querySelector('.checked').classList.remove('checked');
        // ball.classList.add('checked')
        
        // manipulateSlidesClasses(current);
        slide(current);
    }

    function slide(current){
        if(current >= lengthImg)
            current = 0;
        else if(current < 0)
            current = lengthImg - 1;

        document.querySelector('.checked').classList.remove('checked');
        manipulateSlidesClasses(current);
        document.getElementById(current).classList.add('checked');
    }
    slide(current);
}





// Contatos

const description = document.querySelector('.contact .title-contact');
const contacts = document.querySelectorAll('.contacts a[data-name]');

contacts.forEach(contact => contact.addEventListener('mouseover', showDescription));
contacts.forEach(contact => contact.addEventListener('mouseout', hideDescription));

function showDescription(){
    const dataName = this.getAttribute('data-name');
    const dataColor = this.getAttribute('data-color');
    

        description.childNodes[1].innerHTML = dataName;
        description.style.backgroundColor = dataColor;
        description.style.opacity = '1';
}

function hideDescription(){
    description.style.opacity = '0';
}




// Adicionando imagens de Reformados dinamicamente

function addImages(objJson){
    const carouselDynamic = document.getElementById('carousel');
    let append = '';
    let count = 0;
    objJson.forEach(element => {
        if(count < 15){
            append += `
            <div data-js="carousel__item" class="carousel__item carousel__item--visible">
                <img src="`+element.substr(1)+`" />
            </div>
            `;
        }
        count++;
    });
    
    carouselDynamic.insertAdjacentHTML("afterbegin", append); //Inserindo antes do conteúdo da div
    
    addSlider();
}



// Botão mobile
const icon = document.querySelector('.icon-bars');
const bar = document.querySelector('.bar');
const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');
const mobile = document.querySelector('.mobile');
const overlay = document.querySelector('.overlay');

icon.addEventListener('click', transformIcon);

function transformIcon(e){
    e.preventDefault;

    if(!bar.classList.contains('rotate')){
        bar.classList.add('rotate');
        barTop.classList.add('rotate-top');
        barBottom.classList.add('rotate-bottom');
        mobile.classList.toggle('mobile-toggle');
        overlay.style.display = 'block';
    }
    else{
        bar.classList.remove('rotate');
        barTop.classList.remove('rotate-top');
        barBottom.classList.remove('rotate-bottom');
        mobile.classList.toggle('mobile-toggle');
        overlay.style.display = 'none';
    }
}

const links = document.querySelectorAll('.mobile li a');

links.forEach(link => link.addEventListener('click', hideMenu));

function hideMenu(){
    bar.classList.remove('rotate');
    barTop.classList.remove('rotate-top');
    barBottom.classList.remove('rotate-bottom');
    mobile.classList.toggle('mobile-toggle');
    overlay.style.display = 'none';
}

overlay.addEventListener('click', hideMenu);
