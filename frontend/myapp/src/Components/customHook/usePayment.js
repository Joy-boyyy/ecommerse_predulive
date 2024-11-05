// import { useEffect, useCallback, useState } from "react";
// import axios from "axios";

// const usePayment = (totalPrice) => {
//   const total = totalPrice;
//   const [orderReceipt, setOrderReceipt] = useState(null);
//   const [payError, setError] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const verifyFun = useCallback(
//     (paymentRes) => {
//       const options = {
//         key: "rzp_test_zLBMlOiZ0PWrd4",
//         amount: total * 100,
//         currency: "INR",
//         name: "Predulive Labs",
//         description: "Predulive Labs is a service provider based company...",
//         image: "https://example.com/your_logo",
//         order_id: paymentRes.data.order.id,
//         handler: async function (response) {
//           try {
//             const validateResponse = await axios.post(
//               "http://localhost:6900/verify",
//               {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//               }
//             );

//             if (validateResponse.message) {
//               console.log(validateResponse.message);
//             }
//           } catch (err) {
//             console.log(err.response || err);
//             setError(err.response?.data?.message || err);
//           }
//         },
//         prefill: {
//           name: "Gaurav Kumar",
//           email: "gaurav.kumar@example.com",
//           contact: "9000090000",
//         },
//         notes: {
//           address: "Razorpay Corporate Office",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);

//       rzp1.on("payment.failed", function (response) {
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
//       });

//       rzp1.open();
//     },
//     [total]
//   );

//   const letsBuy = useCallback(async () => {
//     if (total > 0) {
//       try {
//         const paymentRes = await axios.post("http://localhost:6900/order", {
//           amount: total * 100,
//           currency: "INR",
//           receipt: `${total}-${Date.now()}-${Math.random()
//             .toString(36)
//             .substring(2, 9)}`,
//         });

//         console.log("paymentRes ==>", paymentRes);
//         console.log("Order ID from server:", paymentRes.data.order.id);

//         setOrderReceipt(paymentRes.data.order.receipt);
//         console.log(
//           "paymentRes.data.order.receipt ==>",
//           paymentRes.data.order.receipt
//         );

//         // Trigger the payment gateway UI
//         verifyFun(paymentRes);
//       } catch (err) {
//         console.log(
//           "Front End Error ===> ",
//           err.response?.data?.message || err
//         );
//         setError(err.response?.data?.message || err);
//       }
//     }
//   }, [total, verifyFun]);

//   return { letsBuy, orderReceipt, payError };
// };

// export default usePayment;
