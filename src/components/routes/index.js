import HomePage from '../../containers/home'
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
        title: "Contact",
        Component: TestPage,
    },
};

export default ROUTES;