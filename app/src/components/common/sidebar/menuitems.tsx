export const MENUITEMS = [
  {
    menutitle: "ГЛАВНИ СТРАНИЦИ"
  },
  {
    path: `${import.meta.env.BASE_URL}app/home`,
    icon: <i className="side-menu__icon bx bx-home"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    title: "Начало",
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2"
  },
  {
    path: `${import.meta.env.BASE_URL}app/quiz`,
    icon: <i className="side-menu__icon bx bx-briefcase-alt-2"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    title: "Кариерни Насоки",
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2"
  },
  {
    icon: <i className="side-menu__icon ti ti-chart-line"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    title: "Общи Статистики",
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2",
    children: [
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/1`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "1"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/2`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "2"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/3`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "3"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/4`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "4"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/5`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "5"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/6`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "6"
      }
    ]
  },
  {
    menutitle: "КОНТАКТ"
  },
  {
    path: `${import.meta.env.BASE_URL}app/contact`,
    icon: <i className="side-menu__icon bx bx-envelope"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    title: "За Контакт",
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2"
  }
];
