import axios from "axios";

// BASE_URL tanımı, gerçek URL'nizle değiştirin
export const BASE_URL = "http://165.22.93.225:5001/api/";
export const tempUrl = "https://fakestoreapi.com";

// Axios istemcisini özelleştir
export const serviceAxios = axios.create({ baseURL: BASE_URL });

serviceAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

serviceAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Hata yönetimi için yer tutucu
    // switch (error.code) {
    //   case 401:
    //     // Token yenileme veya kullanıcıyı çıkış işlemi yapabilirsiniz
    //     break;
    //   default:
    //     break;
    // }
    return Promise.reject(error);
  }
);