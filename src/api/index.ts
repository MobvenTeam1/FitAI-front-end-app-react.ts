import { FormValues } from "../pages/auth/Login";
import { serviceAxios } from "./axios";

export type loginRequestResponse = {
  userToken: string;
};

export const loginRequest = async (
  data: FormValues
): Promise<loginRequestResponse> => {
  const response = await serviceAxios.post("/User/Login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
