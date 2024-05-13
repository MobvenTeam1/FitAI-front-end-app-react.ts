import SvgColor from "../components/svg-color";
import { paths } from "./paths";

const icon = (name: string) => <SvgColor src={`/icons/${name}.svg`} />;

export const ICONS = {
  home: icon("ic_mail"),
};

export const DashboardNavigation = [
  { title: "home", path: paths.dashboard.root, icon: ICONS.home },
  {
    title: "users",
    path: paths.dashboard.users.root,
    icon: ICONS.home,
  },
];
