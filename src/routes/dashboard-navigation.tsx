import SvgColor from "../components/svg-color";
import { paths } from "./paths";

const icon = (name: string) => (
  <SvgColor src={`/icons/ic_${name}.svg`} width={20} height={20} />
);

export const ICONS = {
  dashboard: icon("dashboard"),
  development: icon("development"),
  explore: icon("discovery"),
  nutrition_plan: icon("nutrition-plan"),
  training_plan: icon("training-plan"),
  calorie_tracking: icon("kcal-empty"),
  water_tracking: icon("water-tracking"),
  profile: icon("profile"),
  logout: icon("logout"),
};

export const DashboardNavigation = [
  {
    subheader: "general",
    navs: [
      { title: "dashboard", path: paths.dashboard.root, icon: ICONS.dashboard },
      {
        title: "development",
        path: paths.dashboard.users.root,
        icon: ICONS.development,
      },
      {
        title: "explore",
        path: paths.dashboard.users.root,
        icon: ICONS.explore,
      },
    ],
  },
  {
    subheader: "plans",
    navs: [
      {
        title: "nutrition_plan",
        path: paths.dashboard.programs,
        icon: ICONS.nutrition_plan,
      },
      {
        title: "training_plan",
        path: paths.dashboard.workoutPlan,
        icon: ICONS.training_plan,
      },
      {
        title: "calorie_tracking",
        path: paths.dashboard.programs,
        icon: ICONS.calorie_tracking,
      },
      {
        title: "water_tracking",
        path: paths.dashboard.programs,
        icon: ICONS.water_tracking,
      },
    ],
  },
  {
    subheader: "Extra",
    navs: [
      { title: "profile", path: paths.dashboard.profile, icon: ICONS.profile },
      { title: "logout", path: `/${paths.auth.root}/${paths.auth.login}`, icon: ICONS.logout },
    ],
  },
];
