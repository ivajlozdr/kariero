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
        path: `${import.meta.env.BASE_URL}app/global-stats/qualities`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "За качества"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/traits`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "За характеристики"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/recommendations`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "Топ препоръки"
      },
      {
        path: `${import.meta.env.BASE_URL}app/global-stats/desired-qualities`,
        icon: <i className="side-menu__icon ti ti-chart-line"></i>,
        type: "link",
        active: false,
        selected: false,
        title: "Топ изисквания"
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
