import React, { useEffect } from "react";
import MainHeader from "../Header/MainHeader";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUserOrders } from "../../Redux/Slice/OrderHistorySlice";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { userOrders } = useSelector((state) => state.orderHisSlide);
  console.log("userOrders ==>", userOrders);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const axiosOrderHis = await axios(
  //         "http://localhost:6900/user/orderhistory",
  //         { withCredentials: true }
  //       );
  //       console.log("all orders Object==>", axiosOrderHis);
  //       console.log(
  //         "all orders==>",
  //         axiosOrderHis.data.userOrderData.allOrders
  //       );
  //       console.log(
  //         "all orders one location==>",
  //         axiosOrderHis.data.userOrderData.orderDetails
  //       );
  //       console.log(
  //         "all orders Date==>",
  //         axiosOrderHis.data.userOrderData.orderDate
  //       );

  //       const orderVar = {
  //         allOrders: axiosOrderHis.data.userOrderData.allOrders,
  //         orderDetails: axiosOrderHis.data.userOrderData.orderDetails,
  //         orderDate: axiosOrderHis.data.userOrderData.orderDate.toString(),
  //       };
  //       dispatch(setUserOrders({ ...orderVar }));
  //     } catch (err) {
  //       console.log(err.response || err);
  //     }
  //   };
  //   fetchOrders();
  // }, [dispatch]);

  useEffect(() => {
    // Fetch data only if userOrders is empty
    if (userOrders.length === 0) {
      const fetchOrders = async () => {
        try {
          const axiosOrderHis = await axios(
            "http://localhost:6900/user/orderhistory",
            { withCredentials: true }
          );

          const orderVar = {
            allOrders: axiosOrderHis.data.userOrderData.allOrders,
            orderDetails: axiosOrderHis.data.userOrderData.orderDetails,
            orderDate: axiosOrderHis.data.userOrderData.orderDate.toString(),
          };
          dispatch(setUserOrders({ ...orderVar }));
        } catch (err) {
          console.log(err.response || err);
        }
      };
      fetchOrders();
    }
  }, [dispatch, userOrders.length]);

  return (
    <div className="w-[100%]">
      <MainHeader />

      <div className="w-[100%] text-center">
        {userOrders.length < 1 ? (
          <h1>No any Orders have been done yet !!!</h1>
        ) : (
          <div>
            <div>
              <h1 className="text-[2rem] font-bold">Order Details: </h1>
            </div>
            {userOrders.map((mapProp, ind) => (
              <div key={ind}>
                {mapProp.userOrder.length === 1 ? (
                  <div className="flex flex-col lg:flex-row">
                    <div>
                      <img
                        src={mapProp?.userOrder[0]?.imgs}
                        alt={mapProp.userOrder[0].title}
                        className="w-[10rem] h-[10rem]"
                      />
                    </div>
                    <div className="">
                      <p>
                        <span className="text-[1.2rem] font-semibold">
                          Title:
                        </span>
                        <span>{mapProp?.userOrder[0]?.title}</span>
                      </p>
                      <p>
                        <span className="text-[1.2rem] font-semibold">
                          Price:
                        </span>
                        <span>{mapProp?.userOrder[0]?.price}</span>
                      </p>
                      <p>
                        <span className="text-[1.2rem] font-semibold">
                          Number of Products:
                        </span>
                        <span>{mapProp?.userOrder[0]?.totalAmount}</span>
                      </p>
                      <p>
                        <span className="text-[1.2rem] font-semibold">
                          {" "}
                          Status:
                        </span>

                        <span>{mapProp?.userOrder[0]?.status}</span>
                      </p>
                    </div>
                    {/* ------------- booking time */}

                    <div>
                      <p>
                        <span className="text-[1.2rem] font-semibold">
                          {" "}
                          Time:
                        </span>{" "}
                        {new Date(mapProp.bookTime).toLocaleString()}
                      </p>
                    </div>

                    {/* --------------- user detail component */}
                    <div className=" w-[50%] flex justify-end">
                      <UserDetail allDetail={mapProp.userAddress} />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 ">
                    {mapProp.userOrder.map((mapProp2, index) => (
                      <div
                        className="flex  flex-col md:flex-row gap-6 p-3 items-center border-2"
                        key={mapProp2?.id || index}
                      >
                        <div>
                          <img
                            src={mapProp2?.imgs}
                            alt={mapProp2?.title}
                            className="w-[10rem] h-[10rem]"
                          />
                        </div>
                        <div className=" text-start">
                          <p>
                            <span className="text-[1.2rem] font-semibold">
                              Title:
                            </span>
                            <span>{mapProp2.title}</span>
                          </p>
                          <p>
                            <span className="text-[1.2rem] font-semibold">
                              Price:
                            </span>{" "}
                            <span>{mapProp2.price} </span>
                          </p>
                          <p>
                            <span className="text-[1.2rem] font-semibold">
                              {" "}
                              Number of Products:{" "}
                            </span>
                            <span> {mapProp2.totalAmount} </span>
                          </p>
                          <p>
                            {" "}
                            <span className="text-[1.2rem] font-semibold">
                              {" "}
                              Status:
                            </span>
                            <span>{mapProp2.status}</span>
                          </p>
                        </div>

                        {/* ------------- booking time */}

                        <div>
                          <p>
                            <span className="text-[1.2rem] font-semibold">
                              {" "}
                              Time:
                            </span>{" "}
                            <span>
                              {new Date(mapProp.bookTime).toLocaleString()}
                            </span>
                          </p>
                        </div>

                        {/* all User Details */}
                        <div className=" md:w-[50%] flex justify-end ">
                          <UserDetail allDetail={mapProp.userAddress} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;

const UserDetail = ({ allDetail }) => {
  return (
    <div className="text-start">
      <p>
        {" "}
        <span className="text-[1.2rem] font-semibold">Name: </span>{" "}
        <span>{allDetail?.name}</span>
      </p>

      <div className="">
        <p>
          {" "}
          <span className="text-[1.2rem] font-semibold">
            Contact number:{" "}
          </span>{" "}
          <span>{allDetail?.phNumberOne}</span>
        </p>

        <p>
          {" "}
          <span className="text-[1.2rem] font-semibold">
            Contact number2:{" "}
          </span>{" "}
          <span>{allDetail?.phNumberTwo || "NA"}</span>
        </p>
      </div>

      <div>
        <p>
          {" "}
          <span className="text-[1.2rem] font-semibold">State: </span>{" "}
          <span>{allDetail?.state}</span>
        </p>
        <p>
          {" "}
          <span className="text-[1.2rem] font-semibold">District: </span>{" "}
          <span>{allDetail?.district}</span>
        </p>
      </div>

      <p>
        {" "}
        <span className="text-[1.2rem] font-semibold">Address: </span>{" "}
        <span>{allDetail?.address}</span>
      </p>

      <div>
        <p>
          {" "}
          <span className="text-[1.2rem] font-semibold">Locality: </span>{" "}
          <span>{allDetail?.locality}</span>
        </p>

        <p>
          {" "}
          <span className="text-[1.2rem] font-semibold">Landmark: </span>{" "}
          <span>{allDetail?.landmark || "NA"}</span>
        </p>

        <p>
          {" "}
          <span className="text-[1.2rem] font-semibold">Pin-Code: </span>{" "}
          <span>{allDetail?.pincode}</span>
        </p>
      </div>
    </div>
  );
};
