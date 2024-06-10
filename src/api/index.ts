import { LoginFormValues } from "../pages/auth/Login";
import { RegisterFormValues } from "../pages/auth/Register";
import { serviceAxios } from "./axios";

export interface AuthorizationResponse {
  userToken: string;
}

async function makeAuthRequest(
  endpoint: string,
  data: LoginFormValues | RegisterFormValues
): Promise<AuthorizationResponse> {
  const response = await serviceAxios.post(endpoint, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export const loginRequest = (
  data: LoginFormValues
): Promise<AuthorizationResponse> => makeAuthRequest("/User/Login", data);

export const registerRequest = (
  data: RegisterFormValues
): Promise<AuthorizationResponse> => makeAuthRequest("/User/Register", data);
