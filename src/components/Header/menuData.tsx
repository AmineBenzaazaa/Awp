import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "GROUPE".toUpperCase(),
    path: "/",
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
        path: "/awp-pro",
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
];

export default menuData;
