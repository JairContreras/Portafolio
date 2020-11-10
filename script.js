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




const descripcion = function (id) {
    let descripcion;
    switch (id) {
        case '1':
            descripcion = 'Bankist es una página web con un diseño minimalista y dinámica. Contiene animaciones y demás elementos interactivos desarrollados en JavaScript';
            break;
        case '2':
            descripcion = 'Durante Octubre 2020 empece un proyecto freelance para una empresa local de la ciudad de Córdoba llamada Café Córdoba.';
            break;
        case '3':
            descripcion = 'Confusion es un sitio web desarrollado a través del curso Front-End Web UI Frameworks and Tools: Bootstrap 4 de la Universidad de Ciencia y Tecnología de Hong Kong a través de Coursera.';
            break;
        case '4':
            descripcion = 'Guess my number! es una aplicación web sencilla pero divertida. Consiste en adivinar un número aleatorio entre el 1 y el 20. La partida consta de puntajes globales y por partida.';
            break;
        case '5':
            descripcion = 'Pig Game es el ya conocido juego de dados pero ahora en una aplicación web. Consiste de dos jugadores que van alternando sus partidas de acuerdo a las reglas establecidas por el juego';
            break;
        case '6':
            descripcion = 'Amelica es una plataforma fullstack desarrollada en conjunto con todo el curso de Análisis y Diseño de Sistemas II del semestre 2019-2 de la Universidad de Antioquia para uso por parte de profesores investigadores de la Facultad de Humanidades de la misma.';
            break;
        case '7':
            descripcion = 'Bank App es una aplicación que simula movimientos de una cuenta bancaria tales como depositos, transferencias y prestamos. Se utiliza JavaScript Vainilla';
            break;
        case '8':
            descripcion = 'Déjà Vu es una aplicación móvil que ayuda a aprender vocabulario en inglés y francés. Además incluye una sección de ejercicos de práctica ';
            break;
        case '9':
            descripcion = 'Food Box fue el primer sitio web desarrollado en mi formación academica. No se utiliza ningun framework o librería. ';
            break;
    }
    return descripcion;
};

const tecnologias = function (id) {
    let tec = []
    switch (id) {
        case '1': tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            break;
        case '2': tec = ['HTML', 'CSS', 'Bootstrap'];
            break;
        case '3': tec = ['JSX', 'React', 'Redux', 'CSS'];
            break;
        case '4': tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            break;
        case '5': tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            break;
        case '6': tec = [ 'Angular','Scrum','JSON','Flask','JavaScript'];
            break;
        case '7': tec = ['HTML', 'CSS', 'JavaScript Vainilla'];
            break;
        case '8': tec = ['Swift', 'Firebase Authentication'];
            break;
        case '9': tec = ['HTML', 'CSS', 'JavaScript'];
            break;
    }
    return tec;
}

const link = function (id) {
    let link;
    switch (id) {
        case '1': link = 'Bankist';
            break;
        case '2': link = 'cafe';
            break;
        case '3': link = 'my-app';
            break;
        case '4': link = 'Guess-my-number-';
            break;
        case '5': link = 'PigGame';
            break;
        case '6': link = 'Amelica';
            break;
        case '7': link = 'Bank';
            break;
        case '8': link = 'DejaVu';
            break;
        case '9': link = 'FoodBox';
            break;
    }
    return link;
};
//Customize Modal
const openModal = function (title, id) {
    modal.classList.remove('hiddens');
    overlay.classList.remove('hiddens');
    modal.querySelector('.title-project').textContent = `${title}`;
    modal.querySelector('.img-project').setAttribute('src', `img/pro-${id}.jpg`);
    modal.querySelector('.description-project').textContent = descripcion(id);
    modal.querySelector('.link-project').setAttribute('href', `https://jaircontreras.github.io/${link(id)}/`);
    modal.querySelector('.tecnologias').innerHTML = '';
    const tecn = tecnologias(id);
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


