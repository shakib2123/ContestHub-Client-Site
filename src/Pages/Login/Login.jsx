import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import RegisterAnime from "../../assets/Register-Anime.json";
import { FaGoogle } from "react-icons/fa6";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="overflow-hidden  flex flex-col-reverse md:flex-row max-w-7xl mx-auto  p-3 md:p-16">
      <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-3xl md:text-4xl text-center font-medium text-gray-700">
          Sign Up!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Type your email..."
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern:
                  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
              })}
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">
                Password must be 6 characters.
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-500">
                Password must be less then 16 characters.
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500">
                Password must be have a capital letter , a small letter and also
                have a special characters.
              </span>
            )}
          </div>

          <input
            className="bg-[#1d3557] btn btn-block text-white hover:bg-[#457b9d] mt-4"
            type="submit"
          />
        </form>
        <div className="divider divider-neutral">OR</div>
        <div className="flex gap-10 mt-4">
          <button
            // onClick={() => socialLogin(googleLogin)}
            className="w-full hover:scale-105 shadow-xl  max-h-16 flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg"
          >
            <img
              className="w-1/3 h-full rounded-xl"
              src="https://i.ibb.co/L584bZ6/download.png"
              alt=""
            />
            <h2 className="text-gray-700 font-bold text-2xl">Google</h2>
          </button>
          <button
            // onClick={() => socialLogin(githubLogin)}
            className="w-full hover:scale-105 shadow-xl h-16 flex items-center gap-2 border-2 border-gray-300 p-2 rounded-lg"
          >
            <img
              className="w-1/3 h-full rounded-xl"
              src="https://i.ibb.co/YtYFBPH/download.png"
              alt=""
            />
            <h2 className="text-gray-700 font-bold text-2xl">Github</h2>
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <Lottie animationData={RegisterAnime}></Lottie>
      </div>
    </div>
  );
};

export default Login;
