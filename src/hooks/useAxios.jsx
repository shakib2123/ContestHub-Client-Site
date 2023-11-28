import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  // const navigate = useNavigate();
  const { logOut } = useAuth() || {};

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error in fetch", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              <Navigate to="/login"></Navigate>;
            })
            .catch((err) => console.log(err));
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default useAxios;
