import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil".toUpperCase(),
    path: "/",
    newTab: false,
  },
  {
    id: 1,
    title: "Qui Somme nous".toUpperCase(),
    path: "#about",
    newTab: false,
  },
  {
    id: 2,
    title: "NOS MARQUES".toUpperCase(),
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "CELLINE".toUpperCase(),
        path: "/celline",
        newTab: false,
      },
      {
        id: 22,
        title: "RYSH".toUpperCase(),
        path: "/rysh",
        newTab: false,
      },
      {
        id: 23,
        title: "AWP Pro".toUpperCase(),
        path: "/awp",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "NOS VALEURS".toUpperCase(),
    path: "#valeurs",
    newTab: false,
  },
  {
    id: 4,
    title: "CONTACT".toUpperCase(),
    path: "#contact",
    newTab: false,
  },
  {
    id: 4,
    title: "rejoignez nous".toUpperCase(),
    path: "/RejoignezNous",
    newTab: false,
  },
];

export default menuData;
