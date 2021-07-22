import personFill from '@iconify/icons-bi/person-fill';
import codeFill from '@iconify/icons-bi/code';
import education from '@iconify/icons-cil/education';
import contact from '@iconify/icons-ic/contact-mail';
import linkChain from '@iconify/icons-akar-icons/link-chain';
import { HomeContent } from './layout/home.content';
import { ProjectsContent } from './layout/projects.content';
import { EducationContnent } from './layout/education.content';
import { ContactContnent } from './layout/contact.content';
import { LinkContnent } from './layout/link.content';


export const routes = [
    {
        "name": "Portfolio",
        "path": "/",
        "icon": personFill,
        "component":  HomeContent
    },
    {
        "name": "Projects",
        "path": "/projects",
        "icon": codeFill,
        "component":  ProjectsContent
    },
    {
        "name": "Education",
        "path": "/education",
        "icon": education,
        "component":  EducationContnent
    },
    {
        "name": "Contact",
        "path": "/contact",
        "icon": contact,
        "component":  ContactContnent
    },
    {
        "name": "Social",
        "path": "/social",
        "icon": linkChain,
        "component":  LinkContnent
    }
];