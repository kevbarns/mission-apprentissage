import { Landing, NotFound, Services } from "./pages";

export default [
  {
    component: Landing,
    icon: "icon-esd-dragger-large",
    path: "/",
    title: "Acceuil",
  },
  {
    component: Services,
    icon: "icon-esd-catalog",
    path: "/catalogue-services",
    title: "Catalogue des Services",
  },
  {
    title: "Documentation",
    icon: "icon-esd-documentation",
  },
  {
    title: "Actualité",
    icon: "icon-esd-news",
  },
  {
    title: "Challenge",
    icon: "icon-esd-challenge",
  },
  {
    title: "Qui sommes-nous ?",
    icon: "icon-esd-who-are-we",
  },
  {
    title: "FAQ",
    icon: "icon-esd-help",
  },
  {
    title: "Performance",
    icon: "icon-esd-stats",
  },
  {
    title: "Contact",
    icon: "icon-esd-contact",
  },
  {
    component: NotFound,
    path: "/404",
    title: "404"
  },
];
