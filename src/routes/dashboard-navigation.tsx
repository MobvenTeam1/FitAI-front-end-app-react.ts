import SvgColor from "../components/svg-color";
import { paths } from "./paths";

const icon = (name: string) => <SvgColor src={`/icons/${name}.svg`} width={20} height={20} />;

export const ICONS = {
  home: icon("ic_mail"),
};

export const DashboardNavigation = [
  {
    subheader: "Genel",
    navs: [
      { title: "home", path: paths.dashboard.root, icon: ICONS.home },
      {
        title: "users",
        path: paths.dashboard.users.root,
        icon: ICONS.home,
      },
    ],
  },
  {
    subheader: "Planlar",
    navs: [
      {
        title: "programs",
        path: paths.dashboard.programs,
        icon: ICONS.home,
      },
    ],
  },
];
