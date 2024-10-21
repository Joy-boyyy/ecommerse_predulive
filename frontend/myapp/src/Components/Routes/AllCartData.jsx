import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "../Header/MainHeader";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  cardInc,
  cardDesc,
  cardDel,
  totalPriceFun,
} from "../../Redux/Slice/CartSlice";
import { useNavigate } from "react-router-dom";

const AllCartData = () => {
  const { cartArr, totalNumberItems, totalPrice } = useSelector(
    (state) => state.myCartSlice
  );
  console.log("carsArr===> ", cartArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(totalPriceFun());
  });

  return (
    <div className="w-[100%] ">
      <MainHeader />
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
                className="flex gap-5 justify-between items-center p-5 border-t border-b "
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
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="bg-blue-500 p-2 rounded-full"
                    onClick={() => {
                      dispatch(cardDesc(mapProp.id));
                    }}
                  >
                    <FaMinus color="white" />
                  </button>
                  {mapProp.totalAmount}
                  <button
                    type="button"
                    className="bg-blue-500 p-2 rounded-full"
                    onClick={() => {
                      dispatch(cardInc(mapProp.id));
                    }}
                  >
                    <IoMdAdd color="white" />
                  </button>
                </div>

                {/* ------------- delete button */}
                <button
                  type="button"
                  onClick={() => {
                    dispatch(cardDel(mapProp.id));
                  }}
                >
                  <MdDelete size={30} />
                </button>
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
