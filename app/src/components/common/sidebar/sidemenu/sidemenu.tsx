export const MENUITEMS = [
  {
    menutitle: "MAIN"
  },
  {
    icon: <i className="side-menu__icon bx bx-home"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    title: "Dashboards",
    badge: "",
    badgetxt: "12",
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2",
    children: [
      {
        path: `${import.meta.env.BASE_URL}dashboards/crm`,
        type: "link",
        active: false,
        selected: false,
        title: "CRM"
      }
    ]
  },
  {
    path: `${import.meta.env.BASE_URL}quiz`,
    type: "link",
    active: false,
    selected: false,
    title: "QUIZ"
  },

  {
    menutitle: "WEB APPS"
  },

  {
    title: "Nested Menu",
    icon: <i className="bx bx-layer side-menu__icon"></i>,
    type: "sub",
    selected: false,
    active: false,
    children: [
      {
        path: "#",
        title: "Nested-1",
        type: "empty",
        active: false,
        selected: false
      },
      {
        title: "Nested-2",
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: "#",
            title: "Nested-2.1",
            type: "empty",
            active: false,
            selected: false
          },
          {
            path: "#",
            title: "Nested-2.2",
            type: "empty",
            active: false,
            selected: false
          }
        ]
      }
    ]
  }
];
