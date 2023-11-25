import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const Social = () => {
  const { googleLogin } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      console.log(result);
      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
        role: "guest",
      };

      axiosSecure.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
        toast.success("sign up successfully!");
      });
    });
  };
  return (
    <div>
      <div className="p-5">
        <button
          onClick={handleGoogleSignIn}
          className="w-full hover:scale-105 shadow  max-h-14 flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg"
        >
          <img
            className=" max-h-12 rounded-xl"
            src="https://i.ibb.co/L584bZ6/download.png"
            alt=""
          />
          <h2 className="text-gray-700 font-bold text-2xl">Google</h2>
        </button>
      </div>
    </div>
  );
};

export default Social;