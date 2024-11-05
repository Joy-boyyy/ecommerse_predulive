// // -----this contains information related to user user information when user will fill before ordering.

// import React from "react";
// import MainHeader from "../Header/MainHeader";
// import Footer from "../Footer/Footer";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import usePayment from "../customHook/usePayment";

// const UserDetails = () => {
//   const navigate = useNavigate();
//   const { cartArr, totalPrice } = useSelector((state) => state.myCartSlice);

//   const { letsBuy, orderReceipt, payError } = usePayment(totalPrice);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const userDetailForm = async (userData) => {
//     try {
//       letsBuy();

//       if (orderReceipt) {
//         const orderResponse = await axios.post(
//           "http://localhost:6900/user/order",
//           {
//             allCards: cartArr,
//             details: {
//               name: userData.fullUserName,
//               pincode: userData.UserPincode,
//               locality: userData.UserLocality,
//               phNumberOne: userData.UserNumber,
//               phNumberTwo: userData.UserAlterNumber,
//               address: userData.UserAddress,
//               district: userData.USerCity,
//               state: userData.USerState,
//               landmark: userData.userLandMark,
//             },
//           },
//           { withCredentials: true }
//         );

//         console.log("orderResponse ===>", orderResponse);
//         navigate("/orders");
//       } else {
//         console.log("payment error :=>", payError);
//       }
//     } catch (err) {
//       console.log(err.response.data.message);
//     }
//   };

//   return (
//     <div className="w-[100%]">
//       <MainHeader />
//       <div className="w-[100%] flex">
//         <div className="w-[100%] p-4 basis-[80%]">
//           <div className="bg-[#2874F0] text-white rounded-lg pl-6">
//             <h1 className="text-[2rem] font-semibold ">DELIVERY ADDRESS</h1>
//           </div>

//           <form
//             className="flex flex-col gap-4 pl-9"
//             onSubmit={handleSubmit(userDetailForm)}
//           >
//             <ul className="steps steps-vertical">
//               <li className="step step-primary">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("fullUserName", {
//                     required: true,
//                     minLength: {
//                       value: 3,
//                       message: "name must be atleast 3 Characters long",
//                     },
//                   })}
//                 />
//               </li>
//               {errors.fullUserName && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.fullUserName.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <input
//                   type="number"
//                   placeholder="Your Pincode"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("UserPincode", {
//                     required: true,
//                     minLength: { value: 6, message: "must be 6 Digit" },
//                   })}
//                 />
//               </li>

//               {errors.UserPincode && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.UserPincode.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <input
//                   type="text"
//                   placeholder="Locality"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("UserLocality", {
//                     required: true,
//                     minLength: {
//                       value: 3,
//                       message:
//                         "Required Field and Number of Character must be more than 3 character long",
//                     },
//                   })}
//                 />
//               </li>

//               {errors.UserLocality && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.UserLocality.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <input
//                   type="number"
//                   placeholder="Your Contact Number"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("UserNumber", {
//                     required: true,
//                     pattern: {
//                       value: /^[6-9]\d{9}$/,
//                       message:
//                         "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.",
//                     },
//                   })}
//                 />
//               </li>

//               {errors.UserNumber && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.UserNumber.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <input
//                   type="number"
//                   placeholder="Alternate Contact Number (Optional)"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("UserAlterNumber", {
//                     pattern: {
//                       value: /^[6-9]\d{9}$/,
//                       message:
//                         "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.",
//                     },
//                   })}
//                 />
//               </li>

//               {errors.UserAlterNumber && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.UserAlterNumber.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <textarea
//                   placeholder="Your Address !!!"
//                   rows="4"
//                   cols="50"
//                   className="w-[80%] border-2 outline-none pl-3 pt-3 rounded-2xl"
//                   {...register("UserAddress", {
//                     required: true,
//                     minLength: {
//                       value: 3,
//                       message: "Address must be more than 3 character long",
//                     },
//                   })}
//                 ></textarea>
//               </li>
//               {errors.UserAddress && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.UserAddress.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <input
//                   type="text"
//                   placeholder="City/District/Town"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("USerCity", {
//                     required: true,
//                     minLength: {
//                       value: 3,
//                       message:
//                         "City/District/Town must be three character long",
//                     },
//                   })}
//                 />
//               </li>
//               {errors.USerCity && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.USerCity.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <input
//                   type="text"
//                   placeholder="Your State !!!"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("USerState", {
//                     required: true,
//                     minLength: {
//                       value: 3,
//                       message: "State must be three character long",
//                     },
//                   })}
//                 />
//               </li>
//               {errors.USerState && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.USerState.message}</p>
//                 </div>
//               )}

//               <li className="step step-primary">
//                 <input
//                   type="text"
//                   placeholder="Landmark (Optional)"
//                   className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
//                   {...register("userLandMark", {
//                     minLength: {
//                       value: 3,
//                       message: "Landmark must be three character long",
//                     },
//                   })}
//                 />
//               </li>
//               {errors.userLandMark && (
//                 <div className="text-center text-red-400">
//                   <p>{errors.userLandMark.message}</p>
//                 </div>
//               )}
//             </ul>

//             <div className="pl-[2.3rem]">
//               <button
//                 className="bg-[#FB641B] p-2 rounded-2xl text-white w-[20rem] "
//                 type="submit"
//               >
//                 SAVE AND DELIVER HERE
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="basis-[20%] bg-black"></div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserDetails;

// -------------------------------------------------------------------------------

// -----this contains information related to user user information when user will fill before ordering.

import React, { useEffect } from "react";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const UserDetails = () => {
  const navigate = useNavigate();
  const { cartArr, totalPrice } = useSelector((state) => state.myCartSlice);
  console.log("totalPrice", totalPrice);

  const total = totalPrice;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  const letsBuy = async (userData) => {
    if (total > 0) {
      try {
        const paymentRes = await axios.post(
          "http://localhost:6900/user/orderbuying",
          {
            price: total,
          },
          { withCredentials: true }
        );

        console.log("paymentRes ==>", paymentRes);
        console.log("Order ID from server:", paymentRes.data.order.id);

        var options = {
          key: "rzp_test_zLBMlOiZ0PWrd4", // Enter the Key ID generated from the Dashboard
          amount: total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Predulive Labs", //your business name
          description: "Predulive Labs is a service provider based company...",
          image: "https://example.com/your_logo",
          order_id: paymentRes.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

          handler: async function (response) {
            // const body = { ...response };

            console.log("response ==>", response);
            try {
              const validateResponse = await axios.post(
                "http://localhost:6900/user/orderverify",
                {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                },
                { withCredentials: true }
              );

              console.log("validateResponse ==>", validateResponse);

              if (validateResponse.data.success) {
                console.log(
                  "validateResponse.message==>",
                  validateResponse.data.message
                );

                const orderResponse = await axios.post(
                  "http://localhost:6900/user/order",
                  {
                    allCards: cartArr,
                    details: {
                      name: userData.fullUserName,
                      pincode: userData.UserPincode,
                      locality: userData.UserLocality,
                      phNumberOne: userData.UserNumber,
                      phNumberTwo: userData.UserAlterNumber,
                      address: userData.UserAddress,
                      district: userData.USerCity,
                      state: userData.USerState,
                      landmark: userData.userLandMark,
                    },
                  },
                  { withCredentials: true }
                );

                console.log("orderResponse ===>", orderResponse);
                navigate("/orders");
              } else {
                alert("Payment error");
              }
            } catch (err) {
              console.log(err.rensponse || err);
            }
          },

          prefill: {
            //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
            name: "Gaurav Kumar", //your customer's name
            email: "gaurav.kumar@example.com",
            contact: "9000090000", //Provide the customer's phone number for better conversion rates
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const paymentObject = new window.Razorpay({ ...options });
        paymentObject.open();

        // payment gatway "UI" code
        // verifyFun(paymentRes);
      } catch (err) {
        console.log("Front End Error ===> ", err.response.data.message || err);
      }
    }
  };

  // const userDetailForm = async (userData) => {
  //   try {
  //     await letsBuy();

  //     if (paymentId) {
  //       const orderResponse = await axios.post(
  //         "http://localhost:6900/user/order",
  //         {
  //           allCards: cartArr,
  //           details: {
  //             name: userData.fullUserName,
  //             pincode: userData.UserPincode,
  //             locality: userData.UserLocality,
  //             phNumberOne: userData.UserNumber,
  //             phNumberTwo: userData.UserAlterNumber,
  //             address: userData.UserAddress,
  //             district: userData.USerCity,
  //             state: userData.USerState,
  //             landmark: userData.userLandMark,
  //           },
  //         },
  //         { withCredentials: true }
  //       );

  //       console.log("orderResponse ===>", orderResponse);
  //       navigate("/orders");
  //     } else {
  //       console.log("payment error occured");
  //     }
  //   } catch (err) {
  //     console.log(err.response.data.message);
  //   }
  // };

  return (
    <div className="w-[100%]">
      <MainHeader />
      <div className="w-[100%] flex">
        <div className="w-[100%] p-4 basis-[80%]">
          <div className="bg-[#2874F0] text-white rounded-lg pl-6">
            <h1 className="text-[2rem] font-semibold ">DELIVERY ADDRESS</h1>
          </div>

          <form
            className="flex flex-col gap-4 pl-9"
            onSubmit={handleSubmit(letsBuy)}
          >
            <ul className="steps steps-vertical">
              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("fullUserName", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "name must be atleast 3 Characters long",
                    },
                  })}
                />
              </li>
              {errors.fullUserName && (
                <div className="text-center text-red-400">
                  <p>{errors.fullUserName.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <input
                  type="number"
                  placeholder="Your Pincode"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("UserPincode", {
                    required: true,
                    minLength: { value: 6, message: "must be 6 Digit" },
                  })}
                />
              </li>

              {errors.UserPincode && (
                <div className="text-center text-red-400">
                  <p>{errors.UserPincode.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("UserLocality", {
                    required: true,
                    minLength: {
                      value: 3,
                      message:
                        "Required Field and Number of Character must be more than 3 character long",
                    },
                  })}
                />
              </li>

              {errors.UserLocality && (
                <div className="text-center text-red-400">
                  <p>{errors.UserLocality.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <input
                  type="number"
                  placeholder="Your Contact Number"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("UserNumber", {
                    required: true,
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message:
                        "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.",
                    },
                  })}
                />
              </li>

              {errors.UserNumber && (
                <div className="text-center text-red-400">
                  <p>{errors.UserNumber.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <input
                  type="number"
                  placeholder="Alternate Contact Number (Optional)"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("UserAlterNumber", {
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message:
                        "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.",
                    },
                  })}
                />
              </li>

              {errors.UserAlterNumber && (
                <div className="text-center text-red-400">
                  <p>{errors.UserAlterNumber.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <textarea
                  placeholder="Your Address !!!"
                  rows="4"
                  cols="50"
                  className="w-[80%] border-2 outline-none pl-3 pt-3 rounded-2xl"
                  {...register("UserAddress", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Address must be more than 3 character long",
                    },
                  })}
                ></textarea>
              </li>
              {errors.UserAddress && (
                <div className="text-center text-red-400">
                  <p>{errors.UserAddress.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="City/District/Town"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("USerCity", {
                    required: true,
                    minLength: {
                      value: 3,
                      message:
                        "City/District/Town must be three character long",
                    },
                  })}
                />
              </li>
              {errors.USerCity && (
                <div className="text-center text-red-400">
                  <p>{errors.USerCity.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Your State !!!"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("USerState", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "State must be three character long",
                    },
                  })}
                />
              </li>
              {errors.USerState && (
                <div className="text-center text-red-400">
                  <p>{errors.USerState.message}</p>
                </div>
              )}

              <li className="step step-primary">
                <input
                  type="text"
                  placeholder="Landmark (Optional)"
                  className="w-[80%] border-2 h-[2.7rem] outline-none pl-3 rounded-2xl"
                  {...register("userLandMark", {
                    minLength: {
                      value: 3,
                      message: "Landmark must be three character long",
                    },
                  })}
                />
              </li>
              {errors.userLandMark && (
                <div className="text-center text-red-400">
                  <p>{errors.userLandMark.message}</p>
                </div>
              )}
            </ul>

            <div className="pl-[2.3rem]">
              <button
                className="bg-[#FB641B] p-2 rounded-2xl text-white w-[20rem] "
                type="submit"
              >
                SAVE AND DELIVER HERE
              </button>
            </div>
          </form>
        </div>

        <div className="basis-[20%] bg-black"></div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetails;
