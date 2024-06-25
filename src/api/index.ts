import { User } from "../auth/type";
import { LoginFormValues } from "../pages/auth/Login";
import { RegisterFormValues } from "../pages/auth/Register";
import { CreateWorkoutPlanValuesSend } from "../sections/personal-inforations/forms/CreateTrainingProgram";
import { FirstLoginFormSendValues } from "../sections/personal-inforations/forms/FirstLoginForm";
import { serviceAxios } from "./axios";

export interface AuthorizationResponse {
  userToken: {
    token: string;
    isFirstLogin: boolean;
  };
}

export const loginRequest = async (data: LoginFormValues) => {
  const response = await serviceAxios.post("/User/Login", data);
  return response.data;
};

export const registerRequest = async (data: RegisterFormValues) => {
  const response = await serviceAxios.post("/User/Register", data);
  return response.data;
};

export const registrationRequest = async (data: FirstLoginFormSendValues) => {
  const response = await serviceAxios.post("/User/savefirstlogindetails", data);
  return response.data;
};

export const createAiWorkoutRequest = async (
  data: CreateWorkoutPlanValuesSend
) => {
  const response = await serviceAxios.post("/WorkoutPlan/workoutdetails", data);
  return response.data;
};

export const getAiWorkoutsRequest = async () => {
  const response = await serviceAxios.get("/WorkoutPlan/generateworkoutplan");
  return response.data;
};

export const getUserDetailsRequest  = async () : Promise<User>  => {
  const response = await serviceAxios.get("/User/GetUserDetails");
  return response.data;
}

