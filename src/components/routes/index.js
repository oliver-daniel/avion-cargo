import Homepage from '../../containers/home';
import LandingPage from '../../pages/';
import TestPage from '../../containers/test'

const ROUTES = {
    home: {
        en: {
            href: ''
        },
        fr: {
            href: ''
        },
        title: "Home",
        Component: TestPage
    },
    about: {
        en: {
            href: 'about',
        },
        fr: {
            href: 'equipe',
        },
        title: "About Us",
        Component: Homepage,
    },
    projects: {
        en: {
            href: 'projects',
        },
        fr: {
            href: 'projets',
        },
        title: "Projects",
        Component: Homepage,
    },
    contact: {
        en: {
            href: 'contact',
        },
        fr: {
            href: 'contact',
        },
        title: "Contact",
        Component: Homepage,
    },
};

export default ROUTES;