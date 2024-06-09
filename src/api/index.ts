import { FormValues } from "../pages/auth/Login";
import { serviceAxios } from "./axios";

export type authorizationResponse = {
  userToken: string;
};

export const loginRequest = async (
  data: FormValues
): Promise<authorizationResponse> => {
  const response = await serviceAxios.post("/User/Login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const registerRequest = async (
  data: FormValues
): Promise<authorizationResponse> => {
  const response = await serviceAxios.post("/User/Register", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
