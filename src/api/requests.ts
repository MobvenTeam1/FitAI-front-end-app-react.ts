import { withClicked } from "../hooks/useData";

export const requests = {
  login: {
    url: "/auth/login",
    control: withClicked,
  },
  getCart: {
    url: "/carts",
    control: false,
  },
};
