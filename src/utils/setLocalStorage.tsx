export const setTokenLocalStorage = (accessToken: string) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    //   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // This function below will handle when token is expired
  } else {
    localStorage.removeItem("accessToken");
    //   delete axios.defaults.headers.common.Authorization;
  }
};
