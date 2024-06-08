import axios from "axios";
import { FormValues } from "../pages/auth/Login";

export type loginRequestResponse = {
  token: string;
};

export const loginRequest = async (
  data: FormValues
): Promise<loginRequestResponse> => {
  const response = await axios.post(
    "https://fakestoreapi.com/auth/login",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
