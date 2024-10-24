import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Register = () => {
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

  const doSubmitFun = async (myData) => {
    try {
      const registerVar = await axios.post(
        "http://localhost:6900/user/register",
        {
          name: myData.username,
          email: myData.useremail,
          password: myData.userpassword,
          gender: myData.usersex,
          number: parseInt(myData.usernumber),
        }
      );

      console.log("registerVar", registerVar);
      toast.success(registerVar.data.message, {
        position: "bottom-center",
      });
      navigate("/user/login");
    } catch (err) {
      console.log(err.response.data.message);
      if (err.response.status === 400) {
        toast.warn(err.response.data.message, {
          position: "bottom-center",
        });
      } else {
        toast.error(err.response.data.message, {
          position: "bottom-center",
        });
      }
    }
  };

  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center items-center gap-[3rem] p-4 bg-[#F0F0F0]">
      {/* ------------- toaster  */}
      <ToastContainer />
      <div className="basis-[40%] ">
        <img
          src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-133556.jpg?t=st=1729527466~exp=1729531066~hmac=646187544fe505f600b0b634ace145efd336dca89711bab0de2c44bca9503b67&w=900"
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
          onSubmit={handleSubmit(doSubmitFun)}
        >
          <input
            type="text"
            placeholder="Your name"
            className="border-2 outline-none w-[100%] h-[2.8rem] pl-3 rounded-3xl"
            {...register("username", {
              required: true,
              minLength: {
                value: 3,
                message: "Min length must be more than 3",
              },
            })}
          />
          {errors.username && (
            <div className="text-center">
              <p className="text-red-400">{errors.username.message}</p>
            </div>
          )}

          {/* ------------------email part starts */}

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
          {/* ------------------------ phone number */}

          <input
            type="text"
            placeholder="Enter your phone number"
            className="border-2 outline-none w-[100%] h-[2.8rem] pl-3 rounded-3xl"
            {...register("usernumber", {
              required: true,
              pattern: {
                value: /^[6-9]\d{9}$/,
                message:
                  "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.",
              },
            })}
          />

          {errors.usernumber && (
            <div className="text-center">
              <p className="text-red-400">{errors.usernumber.message}</p>
            </div>
          )}

          {/* -------------------gender part */}
          <div className="flex gap-3 pl-3">
            <label htmlFor="maleHtml" className="cursor-pointer">
              MALE:
              <input
                type="radio"
                id="maleHtml"
                name="usersex"
                value="male"
                checked
                {...register("usersex")}
              />
            </label>
            <label htmlFor="femaleHtml" className="cursor-pointer">
              FEMALE:
              <input
                type="radio"
                name="usersex"
                id="femaleHtml"
                value="female"
                {...register("usersex")}
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#046BAE] p-4 text-white"
            // disabled={isSubmitted}
          >
            REGISTER
          </button>
        </form>
        {/* ------------------- user check */}

        <div className="mt-2 mb-3">
          <p className="flex justify-center">
            <span>Already have an account?</span>

            <span
              className="cursor-pointer font-bold"
              onClick={() => {
                navigate("/user/login");
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
