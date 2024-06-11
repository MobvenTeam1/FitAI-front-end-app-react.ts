import { LoginFormValues } from "../pages/auth/Login";
import { RegisterFormValues } from "../pages/auth/Register";
import { CreateWorkoutPlanValuesSend } from "../sections/personal-inforations/forms/CreateTrainingProgram";
import { FirstLoginFormSendValues } from "../sections/personal-inforations/forms/FirstLoginForm";
import { serviceAxios } from "./axios";

export interface AuthorizationResponse {
  userToken: string;
}

const makeAuthRequest = async (
  endpoint: string,
  data: LoginFormValues | RegisterFormValues
): Promise<AuthorizationResponse> => {
  const response = await serviceAxios.post(endpoint, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const loginRequest = (
  data: LoginFormValues
): Promise<AuthorizationResponse> => makeAuthRequest("/User/Login", data);

export const registerRequest = (
  data: RegisterFormValues
): Promise<AuthorizationResponse> => makeAuthRequest("/User/Register", data);

export const registrationRequest = async (data: FirstLoginFormSendValues) => {
  const response = await serviceAxios.post("/User/savefirstlogindetails", data);
  return response.data;
};

export const createAiWorkoutRequest = async (
  data: CreateWorkoutPlanValuesSend
) => {
  const response = await serviceAxios.post("/User/workoutdetails", data);
  return response.data;
};
