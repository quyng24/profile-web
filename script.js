//click linght dark mode
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btnDark = $('.nut2 input');
const body = $('body');
const listA = $$('.side-bar ul a li');
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
var thep = $('#text-content-home');
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
var animationElements = $$('.show-on-scroll');
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

const fadeOnScroll = (selector, speed = 300, translateY = 50) => {
    document.addEventListener("scroll", function () {
      let elements = document.querySelectorAll(selector);
  
      elements.forEach((element) => {
        let scrollPosition = window.scrollY;
        let opacityValue = Math.max(1 - scrollPosition / speed, 0);
        let translateValue = Math.min(scrollPosition / 2, translateY);
  
        element.style.opacity = opacityValue;
        element.style.transform = `translateY(${translateValue}px)`;
      });
    });
  }
fadeOnScroll(".content-home", 400, 50);
// tab project overview
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
        title: 'Softy Pinko',
        img: './img/web-react.png',
        description: 'Create website by ReactJS',
        link: 'https://github.com/quyng24/softy-pinko',
        link2: 'https://softy-pinko-5wk2.onrender.com/'
    },
    {
        title: 'Moving Planet',
        img: './img/hanh-tinh.png',
        description: 'Use css to create moving planet',
        link: 'https://github.com/quyng24/hanhtinh',
        link2: 'https://hanhtinh.vercel.app/'
    },
    {
        title: 'Electronic Clock',
        img: './img/electric-clock.png',
        description: 'Update current time',
        link: 'https://github.com/quyng24/mhdh',
        link2: 'https://mhdh-brown.vercel.app/'
    },
    {
        title: 'Flag Viet Nam',
        img: './img/co-vn.png',
        description: 'Some flag samples Viet Nam beautiful',
        link: 'https://github.com/quyng24/co-vn',
        linl2: 'https://co-vn.vercel.app/'
    },
    {
        title: 'Comunity Project',
        img: './img/community-project.png',
        description: 'Community Project: Reflect and warn about air pollution',
        link: 'https://github.com/quyng24/community-project',
        link2: 'https://community-project-iota.vercel.app/'
    },
    {
        title: 'Chart',
        img: './img/draw-chart.png',
        description: 'Create a chart using JavaScript and Chart.js',
        link: 'https://github.com/quyng24/chart',
        link2: 'https://chart-psi-one.vercel.app/'
    },
    {
        title: 'To Do List',
        img: './img/to-do-list.png',
        description: 'Create a to do list with basic functions of adding, editing, and deleting',
        link: 'https://github.com/quyng24/to-do-list',
        link2: 'https://to-do-list-iota-taupe.vercel.app/'
    },
    {
        title: 'Calculator App',
        img: './img/calculator-app.png',
        description: 'Use JavaScript to create Calculator App Basic',
        link: 'https://github.com/quyng24/calculator',
        link2: 'https://calculator-six-gilt-86.vercel.app/'
    },
    {
        title: 'Pain App',
        img: './img/pain-app.png',
        description: 'Use cavas in JavaScript to create Pain App',
        link: 'https://github.com/quyng24/pain-app',
        link2: 'https://paint-app-six.vercel.app/'
    }
]
const projects2 = [
    {
        title: 'Game TicTacToe',
        img: './img/game-tictactoe.png',
        description: 'Use JavaScript to create Game TicTacToe',
        link: 'https://github.com/quyng24/game-tictactoe',
        link2: 'https://game-tictactoe-one.vercel.app/'
    },
    {
        title: 'Spread Sheet',
        img: './img/excel-web.png',
        description: 'Use JavaScript to create Spread Sheet',
        link: 'https://github.com/quyng24/merry-christmas',
        link2: 'https://merry-christmas-six-beige.vercel.app/'
    },
    {
        title: 'Weather App',
        img: './img/weather-app-mrquy.png',
        description: 'Use JavaScript to create Weather App',
        link: 'https://github.com/quyng24/profile-web',
        link2: 'https://excel-web-quynguyens-projects-968d49fd.vercel.app/'
    },
    {
        title: 'Music App',
        img: './img/music-app-mrquy.png',
        description: 'Use JavaScript to create Music App',
        link: 'https://github.com/quyng24/music-app-mrquy',
        link2: 'https://music-app-mrquy.vercel.app/'
    },
    {
        title: 'Game Tetris',
        img: './img/game-tetris.png',
        description: 'Use JavaScript to create Game Tetris',
        link: 'https://github.com/quyng24/game-tetris',
        link2: 'https://game-tetris-tau.vercel.app/'
    },
    {
        title: 'Sales Website',
        img: './img/sales-website.png',
        description: 'The sales website handles logic using javascript for basic features',
        link: 'https://github.com/quyng24/web-gogo',
        link2: 'https://web-gogo.vercel.app/'
    },
    {
        title: 'Game Platformer',
        img: './img/game-platformer.png',
        description: 'Use canvas HTML and JavaScript to create Game Platformer',
        link: 'https://github.com/quyng24/game-platformer',
        link2: 'https://game-platformer-theta.vercel.app/'
    },
    {
        title: 'Heart Animation',
        img: './img/tym-js.png',
        description: 'Use canvas HTML and JavaScript to create Heart Animation',
        link: 'https://github.com/quyng24/tym1',
        link2: 'https://tym1.vercel.app/'
    },
    {
        title: 'Merry Christmas',
        img: './img/merry-christmas.png',
        description: 'Use HTML and CSS to create Christmas Tree',
        link: 'https://github.com/quyng24/merry-christmas',
        link2: 'https://merry-christmas-six-beige.vercel.app/'
    },
    {
        title: 'Shop Online',
        img: './img/shop-online.png',
        description: 'Create Shop Online Basic by React Dom + React Router',
        link: 'https://github.com/quyng24/shop-online',
        link2: 'https://shop-online-jle2.onrender.com/'
    }
];
const projectContainer1 = $('.projects-1');
const projectContainer2 = $('.projects-2');
projects1.forEach(project => {
    const ProjectCard = `
        <div class="project-card">
            <h2>${project.title}</h2>
            <img src="${project.img}">
            <p>${project.description}</p>
            <a class="btn" href="${project.link}">View Code</a>
            <a class="btn" href="${project.link2}">View Website</a>
        </div>
    `;
    projectContainer1.innerHTML += ProjectCard;
});
projects2.forEach(project => {
    const ProjectCard = `
        <div class="project-card">
            <h2>${project.title}</h2>
            <img src="${project.img}">
            <p>${project.description}</p>
            <a class="btn" href="${project.link}">View Code</a>
            <a class="btn" href="${project.link2}">View Website</a>
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
