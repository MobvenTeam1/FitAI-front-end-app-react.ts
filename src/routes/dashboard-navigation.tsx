import SvgColor from "../components/svg-color";
import { paths } from "./paths";

const icon = (name: string) => (
  <SvgColor src={`/src/assets/img/icons/${name}.svg`} />
);

export const ICONS = {
  home: icon("ic_mail"),
};

export const DashboardNavigation = [
  { title: "Home", path: paths.dashboard.root, icon: ICONS.home },
  {
    title: "Users",
    path: paths.dashboard.users.root,
    icon: ICONS.home,
  },
];
