import { Landing, NotFound, Services } from "./pages";

export default [
  {
    path: "/",
    Component: Landing,
    breadcrumb: "Accueil",
    exact: true,
  },
  {
    path: "/catalogue-services",
    Component: Services,
    breadcrumb: "Catalogue de Services",
  },
  {
    path: "/404",
    Component: NotFound,
  },
];
