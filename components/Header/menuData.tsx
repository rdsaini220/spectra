import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  // {
  //   id: 2,
  //   title: "Features",
  //   newTab: false,
  //   path: "/#features",
  // },
  // {
  //   id: 2.3,
  //   title: "Usecases",
  //   newTab: false,
  //   path: "/#Usecases",
  // },
  // {
  //   id: 2.1,
  //   title: "Blogs",
  //   newTab: false,
  //   path: "/blog",
  // }, 
  {
    id: 3,
    title: "Post Sales",
    newTab: false,
    submenu: [
      {
        id: 35,
        title: "Maintenance",
        newTab: false,
        path: "/",
      },
      {
        id: 35.1,
        title: "Services",
        newTab: false,
        path: "/",
      },
      {
        id: 36,
        title: "Operations team",
        newTab: false,
        path: "/",
      },
      {
        id: 36.1,
        title: "Tracing Origin",
        newTab: false,
        path: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Features",
    newTab: false,
    submenu: [
      {
        id: 45,
        title: "Recipes",
        newTab: false,
        path: "/",
      },
      {
        id: 45.1,
        title: "BYOD",
        newTab: false,
        path: "/",
      },
      {
        id: 46,
        title: "Automated Itineraries",
        newTab: false,
        path: "/",
      },
      {
        id: 46.1,
        title: "Tracing Origin",
        newTab: false,
        path: "/",
      },
      {
        id: 47,
        title: "Templates",
        newTab: false,
        path: "/",
      },
      {
        id: 47.1,
        title: "Preventive Analytics",
        newTab: false,
        path: "/",
      },
    ],
  },
  {
    id: 5,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 55,
        title: "Service Engineers on Demand",
        newTab: false,
        path: "/",
      },
    ],
  },
  {
    id: 6,
    title: "Information",
    newTab: false,
    submenu: [
      {
        id: 65,
        title: "Blog",
        newTab: false,
        path: "/",
      },
      {
        id: 65.1,
        title: "Savings and value add",
        newTab: false,
        path: "/",
      },
      {
        id: 66,
        title: "Success Stories",
        newTab: false,
        path: "/",
      },
      {
        id: 66.1,
        title: "Help Center",
        newTab: false,
        path: "/",
      },
    ],
  },
  // {
  //   id: 7,
  //   title: "Login",
  //   newTab: false,
  //   path: "/auth/signin",
  // },
];

export default menuData;
