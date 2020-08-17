import HomePage from '../../containers/home/HomePage'
import AboutPage from '../../containers/about/AboutPage';
import ContactPage from '../../containers/contact/ContactPage';

import TestPage from '../../containers/test/TestPage'
import ProjectsPage from '../../containers/projects/ProjectsPage';

const ROUTES = {
    home: {
        en: {
            href: '',
            pages: ['home.md']
        },
        fr: {
            href: '',
            pages: ['accueil.md']
        },
        title: "Home",
        Component: HomePage
    },
    about: {
        en: {
            href: 'about',
            pages: ['mission-history.md', 'sponsors.md']
        },
        fr: {
            href: 'equipe',
            pages: ['mission-histoire.md', 'commanditaires.md']
        },
        title: "About Us",
        Component: AboutPage,
    },
    projects: {
        en: {
            href: 'projects',
            pages: ['message-to-alumni-projects-page-1.md']
        },
        fr: {
            href: 'projets',
            pages: ['message-pour-anciens-page-projets.md']
        },
        title: "Projects",
        Component: ProjectsPage,
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
    }
};

export default ROUTES;