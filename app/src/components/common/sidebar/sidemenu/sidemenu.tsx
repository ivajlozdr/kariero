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
    icon: <i className="side-menu__icon bx bx-envelope"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    title: "Кариерни Насоки",
    class:
      "badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2"
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
