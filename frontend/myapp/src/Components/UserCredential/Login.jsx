import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenRec = Cookies.get("token");
    if (tokenRec !== undefined) {
      navigate("/");
    }
  });

  const {
    register,
    handleSubmit,

    formState: {
      errors,
      // isSubmitted
    },
  } = useForm();

  const doLoginFUn = async (myData) => {
    console.log("myData", myData);
    try {
      const loginVar = await axios.post("http://localhost:6900/user/login", {
        email: myData.useremail,
        password: myData.userpassword,
      });

      console.log("Login==>", loginVar);
      Cookies.set("token", loginVar.data.urToken, { expires: 2 });
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);

      toast.error(err.response.data.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center items-center gap-[3rem] p-4 bg-[#F0F0F0]">
      {/* ---------toastify */}
      <ToastContainer />
      <div className="basis-[40%] ">
        <img
          src="https://img.freepik.com/premium-vector/mobile-login-flat-design-vector-illustration_1288538-7537.jpg?w=740"
          alt="register-simage"
          className="width-[100%] h-[100%] rounded-full"
        />
      </div>
      <div className="basis-[30%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100 rounded-b-2xl pt-2">
        <div className="w-[100%] flex justify-center mb-3">
          <img
            src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
            alt="avatar"
            className="w-[7rem] h-[7rem] rounded-full invert-[5%]"
          />
        </div>
        <form
          className="flex flex-col gap-4 border-2 p-7 rounded-2xl"
          onSubmit={handleSubmit(doLoginFUn)}
        >
          <input
            type="email"
            placeholder="your_email@email.com"
            className="border-2 outline-none w-[100%] h-[2.8rem] pl-3 rounded-3xl"
            {...register("useremail", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Your email should contain [a-z, 0-9, @, .com, .in, etc.]",
              },
            })}
          />

          {errors.useremail && (
            <div className="text-center">
              <p className="text-red-400">{errors.useremail.message}</p>
            </div>
          )}
          {/* -----------password */}
          {/* ---------------password is starting */}
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 outline-none w-[100%] h-[2.8rem] pl-3 rounded-3xl"
            {...register("userpassword", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.",
              },
            })}
          />

          {errors.userpassword && (
            <div className="text-center">
              <p className="text-red-400">{errors.userpassword.message}</p>
            </div>
          )}

          <button
            type="submit"
            className="bg-[#046BAE] p-4 text-white"
            // disabled={isSubmitted}
          >
            Login
          </button>
        </form>
        {/* ------------------- user check */}
        <div className="mt-2 mb-3">
          <p className=" flex justify-center">
            <span>new one ?</span>
            <span
              className="cursor-pointer font-bold"
              onClick={() => {
                navigate("/user/register");
              }}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
