// selected card

import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import { useSelector, useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addWishList } from "../../Redux/Slice/WishlistSlice";
import { FaHeart } from "react-icons/fa";
import { cardPush } from "../../Redux/Slice/CartSlice";
import Footer from "../Footer/Footer";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelectedCard = () => {
  const AllProducts = useSelector((state) => state.productSlice);
  const navigate = useNavigate();

  const { Id } = useParams();
  const [detailCard, setDetailedCard] = useState({});
  const { wishArr } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    const runFun = () => {
      const foundDATA = AllProducts.filter((item) => item.Id.toString() === Id);

      setDetailedCard(foundDATA[0]);
    };
    runFun();
  }, [AllProducts, Id]);

  // const objData = Object.keys(detailCard?.Specifications);

  // sharing data to server

  const wishlistFunAndServer = useCallback(
    async (e, ID) => {
      try {
        e.stopPropagation();

        const tokentGOt = Cookies.get("token");
        if (tokentGOt !== undefined) {
          const wishVar = await axios.post(
            "http://localhost:6900/user/wishlist",
            {
              cardId: ID,
            },
            {
              withCredentials: true,
            }
          );
          // console.log(wishVar.data);
          toast.success(wishVar.data.message, {
            position: "bottom-center",
          });

          dispatch(addWishList(ID));
        } else {
          navigate("/user/login");
        }
      } catch (err) {
        // console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "bottom-center",
        });
      }
    },
    [dispatch, navigate]
  );

  // ----addToCartFun
  const addToCartFun = useCallback(
    async (detailCard) => {
      try {
        const tokentGOt = Cookies.get("token");
        if (tokentGOt !== undefined) {
          const cartRVar = await axios.post(
            "http://localhost:6900/user/addcart",
            {
              cardId: detailCard.Id,
              price: detailCard.Amount,
              amount: 1,
              title: detailCard.Title,
              imgs: detailCard.Image,
            },
            {
              withCredentials: true,
            }
          );
          console.log("cartRVar==>", cartRVar);
          dispatch(cardPush(detailCard));
          toast.success(cartRVar.data.message, {
            position: "bottom-center",
          });
        } else {
          navigate("/user/login");
        }
      } catch (err) {
        // console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "bottom-center",
        });
      }
    },
    [navigate, dispatch]
  );

  return (
    <div className="w-[100%]">
      <MainHeader />
      {/* -----------Toaster */}
      <ToastContainer />
      {/* ---selected Card Data */}
      <div className="text-center mt-5 px-6">
        {" "}
        <h1 className="text-[2rem] font-semibold border-b-2">
          {" "}
          Selected Product{" "}
        </h1>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row gap-3 min-h-[90vh] items-center px-4 pb-4">
        <div className="md:w-[40%] w-[80%]">
          <img
            src={detailCard?.Image}
            alt={detailCard?.Title}
            className="w-[100%] h-[30rem]"
          />
        </div>
        <div className="w-[60%]">
          <div className="w-[100%]">
            <h1 className="text-[2rem] font-bold">{detailCard?.Title}</h1>
            <p className="text-green-400">{detailCard?.Rel}</p>
            <p className="text-[2rem] font-bold">₹{detailCard?.Amount}</p>
            <p>
              <span className="text-[2rem] font-bold">Specifications:</span>

              {/* {Object.keys(detailCard?.Specifications)?.map(
                (mapProp, mapInd) => (
                  <span key={mapInd}>
                    {mapProp} : {detailCard?.Specifications[mapProp]}
                  </span>
                )
              )} */}
            </p>
            <p className="text-[#A8A8A8]">{detailCard?.Description}</p>
            <p className="text-[2rem] font-bold">Features:</p>
            <p className="text-[#A8A8A8]">
              {detailCard?.Features?.map((mappProp, indd) => (
                <span key={indd}>{mappProp}</span>
              ))}
            </p>
            <p className="text-[2rem] font-bold">Package Includes:</p>
            <p>
              {detailCard?.Package_Includes?.map((mappProp, indd) => (
                <span key={indd}>{mappProp}</span>
              ))}
            </p>
            {/* -----------------------buttons */}
            <div className="flex gap-3 mt-3">
              <button
                type="button"
                className="flex gap-2 items-center bg-green-400 p-3 rounded-md"
                onClick={(e) => {
                  wishlistFunAndServer(e, detailCard.Id);
                }}
              >
                <span>Wishlist </span>
                <span>
                  {wishArr.includes(detailCard.Id) ? (
                    <FaHeart size={30} color="red" />
                  ) : (
                    <CiHeart size={30} />
                  )}
                </span>
              </button>
              <button
                type="button"
                className="flex gap-2 items-center bg-blue-300 p-3 rounded-md"
                onClick={() => {
                  addToCartFun(detailCard);
                }}
              >
                <span>Add to cart </span>
                <span>
                  <IoCartOutline className="cursor-pointer" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectedCard;
