import { LoginFormValues } from "../pages/auth/Login";
import { RegisterFormValues } from "../pages/auth/Register";
import { serviceAxios } from "./axios";

export type authorizationResponse = {
  userToken: string;
};

export const loginRequest = async (
  data: LoginFormValues
): Promise<authorizationResponse> => {
  const response = await serviceAxios.post("/User/Login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const registerRequest = async (
  data: RegisterFormValues
): Promise<authorizationResponse> => {
  const response = await serviceAxios.post("/User/Register", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
