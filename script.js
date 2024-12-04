//click linght dark mode
const btnDark = document.querySelector('.nut2 input');
const body = document.querySelector('body');
const listA = document.querySelectorAll('.side-bar ul a li');
btnDark.addEventListener('click', () => {
    body.classList.toggle('dark');
});
listA.forEach(list => {
    list.addEventListener('click', () => {
        listA.forEach(item => item.classList.remove('selected-list'));
        list.classList.toggle('selected-list');
        list.style.fontSize = '25px';
    })
})

// text animation effect
var thep = document.querySelector('#text-content-home');
var originContent = thep.innerHTML;
var index = 0;
var dk = true;
var time = 200;
setInterval(function() {
    if(dk) {
        index++;
        if(index > originContent.length) {
            dk = false;
        }
    } else{
        index--;
        if(index < 0) {
            dk = true;
        }
    }
    thep.innerHTML = originContent.substring(0, index);
}, time)

// animation
var animationElements = document.querySelectorAll('.show-on-scroll');
function isElInWindow(element) {
    var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;
    // check element on the moniter
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }
}
function checkAnimation() {
    animationElements.forEach(el => {
        isElInWindow(el);
    })
}
window.onscroll = checkAnimation;

// tab project overview
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
const line = $('.tabs .line');
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        $('.tab-pane.active').classList.remove('active');
        $('.tab-item.active').classList.remove('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active');
        pane.classList.add('active');
    }
})

// show project
const projects1 = [
    {
        title: 'Sales Website',
        img: './img/sales-website.png',
        description: 'The sales website interface is similar to shoppe',
        link: 'https://github.com/quyng24/web-gogo'
    },
    {
        title: 'Moving Planet',
        img: './img/hanh-tinh.png',
        description: 'Use css to create moving planet',
        link: 'https://github.com/quyng24/hanhtinh'
    },
    {
        title: 'Electronic Clock',
        img: './img/electric-clock.png',
        description: 'Update current time',
        link: 'https://github.com/quyng24/mhdh'
    },
    {
        title: 'Peguin',
        img: './img/peguin-css.png',
        description: 'Use CSS create a peguin waved',
        link: 'https://github.com/quyng24/peguin'
    }, 
    {
        title: 'Flag Viet Nam',
        img: './img/co-vn.png',
        description: 'Some flag samples Viet Nam beautiful',
        link: 'https://github.com/quyng24/co-vn'
    },
    {
        title: 'Pain App',
        img: './img/pain-app.png',
        description: 'Use cavas in JavaScript to create Pain App',
        link: 'https://github.com/quyng24/pain-app'
    }
]
const projects2 = [
    {
        title: 'Calculator App',
        img: './img/calculator-app.png',
        description: 'Use JavaScript to create Calculator App Basic',
        link: 'https://github.com/quyng24/calculator'
    },
    {
        title: 'Christmas Tree',
        img: './img/merry-christmas.png',
        description: 'Use JavaScript to create Christmas Tree',
        link: 'https://github.com/quyng24/merry-christmas'
    },
    {
        title: 'Weather App',
        img: './img/weather-app-mrquy.png',
        description: 'Use JavaScript to create Weather App',
        link: 'https://github.com/quyng24/weather-app-mrquy'
    },
    {
        title: 'Music App',
        img: './img/music-app-mrquy.png',
        description: 'Use JavaScript to create Music App',
        link: 'https://github.com/quyng24/music-app-mrquy'
    },
    {
        title: 'Game Tetris',
        img: './img/game-tetris.png',
        description: 'Use JavaScript to create Game Tetris',
        link: 'https://github.com/quyng24/game-tetris'
    },
    {
        title: 'Game Flappy Brith',
        img: './img/flappy-brith.png',
        description: 'Use Python3 to create Game Flappy Brith',
        link: 'https://github.com/quyng24/flappy-bird-game'
    },
];
const projectContainer1 = document.querySelector('.projects-1');
const projectContainer2 = document.querySelector('.projects-2');
projects1.forEach(project => {
    const ProjectCard = `
        <div class="project-card show-on-scroll zoom">
            <h2>${project.title}</h2>
            <img src="${project.img}">
            <p>${project.description}</p>
            <a class="btn" href="${project.link}">View Details</a>
        </div>
    `;
    projectContainer1.innerHTML += ProjectCard;
});
projects2.forEach(project => {
    const ProjectCard = `
        <div class="project-card show-on-scroll zoom">
            <h2>${project.title}</h2>
            <img src="${project.img}">
            <p>${project.description}</p>
            <a class="btn" href="${project.link}">View Details</a>
        </div>
    `;
    projectContainer2.innerHTML += ProjectCard;
});
// open sidebar mobile
const btnOpenSiderBar = $('.open-sider-bar');
const siderBarMobile = $('.side-bar');
btnOpenSiderBar.addEventListener('click', () => {
    siderBarMobile.classList.add('open');
    btnOpenSiderBar.style.display = 'none';
});
//close sidebar mobile
const closeSiderBar = $('.btn-close')
closeSiderBar.addEventListener('click', () => {
    btnOpenSiderBar.style.display = 'flex';
    siderBarMobile.classList.remove('open');
});
if (window.matchMedia("(max-width: 768px)").matches) {
    listA.forEach(list => {
        list.addEventListener('click', () => {
            btnOpenSiderBar.style.display = 'flex';
            siderBarMobile.classList.remove('open');
        })
    })
} else {
    console.log("You are not on a mobile device.");
}
