import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "../Header/MainHeader";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  cardInc,
  cardDesc,
  cardDel,
  totalPriceFun,
} from "../../Redux/Slice/CartSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllCartData = () => {
  const { cartArr, totalNumberItems, totalPrice } = useSelector(
    (state) => state.myCartSlice
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(totalPriceFun());
  });

  const deleteFun = useCallback(
    async (ID) => {
      try {
        const delVar = await axios.delete(
          `http://localhost:6900/user/delcartitem/${ID}`,
          {
            withCredentials: true,
          }
        );
        console.log(delVar.data);
        toast.success(delVar.data.message, {
          position: "bottom-center",
        });
        dispatch(cardDel(ID));
      } catch (err) {
        console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "bottom-center",
        });
      }
    },
    [dispatch]
  );
  // ------------increment fun
  const incFun = useCallback(
    async (ID) => {
      try {
        const incVar = await axios.post(
          "http://localhost:6900/user/cartamount",
          {
            cardId: ID,
            purpose: "inc",
            amount: 1,
          },
          {
            withCredentials: true,
          }
        );
        console.log("incVar", incVar.data.message);
        toast.success(incVar.data.message, {
          position: "bottom-center",
        });
        dispatch(cardInc(ID));
      } catch (err) {
        // console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "bottom-center",
        });
      }
    },
    [dispatch]
  );

  // ---------------desc

  const descFun = useDispatch(
    async (ID) => {
      try {
        const descVar = await axios.post(
          "http://localhost:6900/user/cartamount",
          {
            cardId: ID,
            purpose: "desc",
            amount: 1,
          },
          {
            withCredentials: true,
          }
        );
        // console.log("descVar", descVar.data.message);
        toast.success(descVar.data.message, {
          position: "bottom-center",
        });

        dispatch(cardDesc(ID));
      } catch (err) {
        toast.error(err.response.data.message, {
          position: "bottom-center",
        });
        // console.log(err.response.data.message);
      }
    },
    [dispatch]
  );

  return (
    <div className="w-[100%] ">
      <MainHeader />
      {/* ----------toaster */}
      <ToastContainer />
      {cartArr.length < 1 ? (
        <div className="w-[100%] text-center mt-4">
          <h1 className="text-[2rem] font-bold">Cart Is Empty</h1>
        </div>
      ) : (
        <div className="mt-6 flex gap-3">
          <div className="basis-[80%]">
            {cartArr.map((mapProp) => (
              <div
                key={mapProp.id}
                className="flex flex-col md:flex-row gap-5 justify-between items-center p-5 border-t border-b "
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={mapProp.imgs}
                    alt="product img"
                    className="w-[8rem] h-[8rem]"
                  />
                  <div>
                    <h1 className="text-[1.3rem] font-semibold">
                      Title: {mapProp.title}
                    </h1>
                    <p className="flex gap-2">
                      <span className="font-semibold"> Original Price: </span>
                      <span>{mapProp.price}</span>
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold">
                        {" "}
                        Number of product:{" "}
                      </span>
                      <span> {mapProp.totalAmount}</span>
                    </p>
                    <p className="flex gap-2">
                      <span className="font-semibold"> Total Price: </span>
                      <span> {mapProp.price * mapProp.totalAmount}</span>
                    </p>
                  </div>
                </div>
                {/* ----------------inc and desc button */}
                {/* -------------- button Container */}
                <div className="flex gap-5">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="bg-blue-500 p-2 rounded-full"
                      onClick={() => {
                        descFun(mapProp.id);
                      }}
                    >
                      <FaMinus color="white" />
                    </button>
                    {mapProp.totalAmount}
                    <button
                      type="button"
                      className="bg-blue-500 p-2 rounded-full"
                      onClick={() => {
                        incFun(mapProp.id);
                      }}
                    >
                      <IoMdAdd color="white" />
                    </button>
                  </div>

                  {/* ------------- delete button */}
                  <button
                    type="button"
                    onClick={() => {
                      deleteFun(mapProp.id);
                    }}
                  >
                    <MdDelete size={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="basis-[20%] border-2  flex flex-col items-center p-2">
            <div>
              <h1 className="text-[2rem] font-bold mb-3 border-b text-orange-400">
                Price Details
              </h1>
              <p>
                <span className="font-semibold text-[1.3rem]">
                  {" "}
                  Total Products:
                </span>
                <span className="ml-2 text-[1.4rem]">{totalNumberItems}</span>
              </p>
              <p>
                <span className="font-semibold text-[1.3rem]">
                  {" "}
                  Total Price:{" "}
                </span>{" "}
                <span>{totalPrice}</span>
              </p>
              <p>
                <span className="font-semibold text-[1.3rem]">
                  {" "}
                  Delivery Charges:
                </span>
                FREE
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="bg-blue-400 text-white p-4 rounded-md"
                onClick={() => {
                  navigate("/userdetails");
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ----------------footer */}
    </div>
  );
};

export default AllCartData;
