import HomePage from '../../containers/home/HomePage'
import ContactPage from '../../containers/contact/ContactPage';

import TestPage from '../../containers/test/TestPage'

const ROUTES = {
    home: {
        en: {
            href: ''
        },
        fr: {
            href: ''
        },
        title: "Home",
        Component: HomePage
    },
    about: {
        en: {
            href: 'about',
        },
        fr: {
            href: 'equipe',
        },
        title: "About Us",
        Component: TestPage,
    },
    projects: {
        en: {
            href: 'projects',
        },
        fr: {
            href: 'projets',
        },
        title: "Projects",
        Component: TestPage,
    },
    contact: {
        en: {
            href: 'contact',
        },
        fr: {
            href: 'contact',
        },
        title: "Contact Us",
        Component: ContactPage,
    },
    blog: {
        en: {
            href: 'blog'
        }, 
        fr: {
            href: 'blog'
        }, 
        title: "Blog"
    }
};

export default ROUTES;