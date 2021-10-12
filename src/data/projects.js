import css1 from '../img/portImages/css1.png';
import bigval from '../img/portImages/1.png';
import air from '../img/portImages/air.png';
import docs from '../img/portImages/docs.png';
import os from '../img/portImages/os.png';
import sort from '../img/portImages/sort.png';
import prof from '../img/portImages/prof.png';
import port from '../img/portImages/port.png';



const portfolios = [
    {
        id: 1,
        category:["PHP"],
        image: css1,
        link1: 'https://github.com/sanyagoyal2000/RedWings-front-end',
        link2: 'https://sanyagoyal2000.github.io/RedWings-front-end/index.html',
        title: 'RedWings',
        text: 'A blood bank Management Application created using HTML,CSS,PHP and mySQL.'
    },
    {
        id: 2,
        category: 'Next.js',
        image: air,
        link1: 'https://github.com/sanyagoyal2000/airbnb-clone',
        link2: 'https://airbnb-sanyagoyal2000.vercel.app/',
        title: 'AirBnb Clone',
        text: 'An Airbnb clone using next.js and tailwind css'
    },
    {
        id: 3,
        category: 'React.js',
        image: prof,
        link1: 'https://github.com/sanyagoyal2000/shellhacks2021',
        link2: 'https://professionaled.vercel.app',
        title: 'professionaled',
        text: ' Created using React.js and Tailwind css and firebase.'
    },
    {
        id: 4,
        category: 'Next.js',
        image: docs,
        link1: 'https://github.com/sanyagoyal2000/google-docs-clone',
        link2: 'https://google-docs-sanyagoyal2000.vercel.app/',
        title: 'Google Docs clone',
        text: 'Created using next.js,Tailwind css and Firebase'
    },
    {
        id: 5,
        category: 'React.js',
        image: sort,
        link1: 'https://github.com/sanyagoyal2000/Sorting-Algorithms-Visualizer',
        link2: 'https://sorting-algorithms-visualizer-sanyagoyal2000.vercel.app/',
        title: 'Sorting Algorithm Visualizer',
        text: 'Created using React.js'
    },
    {
        id: 6,
        category: 'Next.js',
        image: port,
        link1: 'https://github.com/sanyagoyal2000/portfolio-website',
        link2: 'https://portfolio-website-olive.vercel.app/',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI,tailwind css,next.js and more...'
    },
    {
        id: 7,
        category: 'C',
        image: bigval,
        link1: 'https://github.com/sanyagoyal2000/BigVal',
        link2: 'https://github.com/sanyagoyal2000/BigVal',
        title: 'BigVal',
        text: 'A library in C for operating on 1000 digit long numbers.'
    },
    {
        id: 8,
        category:["Javascript"],
        image: os,
        link1: 'https://github.com/sanyagoyal2000/os-project',
        link2: ' https://sanyagoyal2000.github.io/os-project/',
        title: 'Scheduling Algorithm visualizer',
        text: 'Created using HTML,CSS and Javascript.'
    }
]

export default portfolios;
