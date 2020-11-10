'use strict';

const modal = document.querySelector('.modals');
const overlay = document.querySelector('.overlays');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const projectContainer = document.querySelector('.projects-container');
const sections = document.querySelectorAll('section');
const about_me = document.querySelector('#about-me');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const footer = document.querySelector('#footer');


const element = function (id) {
    let element = {
        name: '',
        tec: [],
        desp: ''
    };
    switch (id) {
        case '1':
            element.name = 'Bankist';
            element.tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            element.desp = 'Bankist es una página web con un diseño minimalista y dinámica. Contiene animaciones y demás elementos interactivos desarrollados en JavaScript';
            break;
        case '2':
            element.name = 'cafe'
            element.tec = ['HTML', 'CSS', 'Bootstrap'];
            element.desp = 'Durante Octubre 2020 empece un proyecto freelance para una empresa local de la ciudad de Córdoba llamada Café Córdoba.';
            break;
        case '3':
            element.name = 'my-app'
            element.tec = ['JSX', 'React', 'Redux', 'CSS'];
            element.desp = 'Confusion es un sitio web desarrollado a través del curso Front-End Web UI Frameworks and Tools: Bootstrap 4 de la Universidad de Ciencia y Tecnología de Hong Kong a través de Coursera.';
            break;
        case '4':
            element.name = 'Guess-my-number-'
            element.tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            element.desp = 'Guess my number! es una aplicación web sencilla pero divertida. Consiste en adivinar un número aleatorio entre el 1 y el 20. La partida consta de puntajes globales y por partida.';
            break;
        case '5':
            element.name = 'PigGame'
            element.tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            element.desp = 'Pig Game es el ya conocido juego de dados pero ahora en una aplicación web. Consiste de dos jugadores que van alternando sus partidas de acuerdo a las reglas establecidas por el juego';
            break;
        case '6':
            element.name = 'Amelica'
            element.tec = ['Angular', 'Scrum', 'JSON', 'Patrones de Diseño', 'JavaScript'];
            element.desp = 'Amelica es una plataforma fullstack desarrollada en conjunto con todo el curso de Análisis y Diseño de Sistemas II del semestre 2019-2 de la Universidad de Antioquia para uso por parte de profesores investigadores de la Facultad de Humanidades de la misma.';
            break;
        case '7':
            element.name = 'Bank'
            element.tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            element.desp = 'Bank App es una aplicación que simula movimientos de una cuenta bancaria tales como depositos, transferencias y prestamos. Se utiliza JavaScript Vainilla';
            break;
        case '8':
            element.name = 'DejaVu'
            element.tec = ['Swift', 'Firebase Authentication'];
            element.desp = 'Déjà Vu es una aplicación móvil que ayuda a aprender vocabulario en inglés y francés. Además incluye una sección de ejercicos de práctica ';
            break;
        case '9':
            element.name = 'FoodBox'
            element.tec = ['HTML', 'CSS', 'JavaScript'];
            element.desp = 'Food Box fue el primer sitio web desarrollado en mi formación academica. No se utiliza ningun framework o librería. ';
            break;
    }

    return element;
}

//Customize Modal
const openModal = function (title, id) {
    modal.classList.remove('hiddens');
    overlay.classList.remove('hiddens');
    let elemento = element(id);
    modal.querySelector('.title-project').textContent = `${title}`;
    modal.querySelector('.img-project').setAttribute('src', `img/pro-${id}.jpg`);
    modal.querySelector('.description-project').textContent = elemento.desp;
    modal.querySelector('.link-project').setAttribute('href', `https://jaircontreras.github.io/${elemento.name}/`);
    modal.querySelector('.tecnologias').innerHTML = '';
    const tecn = elemento.tec;
    tecn.forEach(item => {
        let element = document.createElement('li');
        element.innerHTML = item;
        document.querySelector('.tecnologias').insertAdjacentElement('beforeend', element);
    });
}


const closeModal = function (e) {
    e.preventDefault();

    modal.classList.add('hiddens');
    overlay.classList.add('hiddens');

}
//Open Modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
projectContainer.addEventListener('click', function (e) {
    if (!e.target.classList.contains('open-modal')) return;
    openModal(e.target.textContent, e.target.dataset.id);
})
//Close Modal
btnCloseModal.addEventListener('click', closeModal);


///Revealing sections
const allSections = document.querySelectorAll('section');
const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})
allSections.forEach(
    (section) => {
        sectionObserver.observe(section)
        section.classList.add('section--hidden');
    }
);





//Nav-links
document.querySelector('.navbar-nav').addEventListener('click',
    function (e) {
        // console.log(e.target) //where the event happened
        //Marching strategy
        if (e.target.classList.contains('nav_link')) {
            e.preventDefault();
            const id = e.target.getAttribute('href');
            const top = id.getBoundingClientRect();
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
    });


