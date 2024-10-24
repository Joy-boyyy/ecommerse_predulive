// all cards you can see after filter menu here code comes

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { addWishList } from "../../Redux/Slice/WishlistSlice";
import { FaHeart } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedCollection } = useSelector(
    (state) => state.collectionSelected
  );

  const { wishArr } = useSelector((state) => state.wishlist);

  const AllProducts = useSelector((state) => state.productSlice);
  const [stateCard, setStateCard] = useState([]);

  useEffect(() => {
    const cardFilter = () => {
      const filteredData = AllProducts?.filter((filterProp) =>
        filterProp.Rel.includes(selectedCollection)
      );
      setStateCard(filteredData);
    };
    cardFilter();
  }, [selectedCollection, AllProducts]);

  // sharing data to server

  const wishlistFunAndServer = async (e, ID) => {
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
        console.log(wishVar.data);
        toast.success(wishVar.data.message, {
          position: "bottom-center",
        });
        dispatch(addWishList(ID));
      } else {
        navigate("/user/login");
      }
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="w-[100%] mt-9">
      {/* --------- TOastify */}
      <ToastContainer />
      <div className="w-[100%] flex flex-wrap items-start gap-4 justify-center">
        {stateCard?.map((mapProp) => (
          <div
            onClick={() => {
              navigate(`/selected/${mapProp.Id}`);
            }}
            key={mapProp.Id}
            className="card glass w-[20rem] cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]"
          >
            <figure>
              <img src={mapProp.Image} alt={mapProp.Title} />
            </figure>
            <div className="pl-4">
              <h2 className="card-title">{mapProp.Title}</h2>
              <p className="text-green-500">{mapProp.Rel}</p>
              <p className="text-green-500">Free Delivery</p>

              <p className="font-bold"> ₹{mapProp.Amount}</p>
            </div>

            <div className="card-body border-t">
              <div className="card-actions justify-end ">
                <span
                  className="cursor-pointer "
                  onClick={(e) => {
                    wishlistFunAndServer(e, mapProp.Id);
                  }}
                >
                  {wishArr.includes(mapProp.Id) ? (
                    <FaHeart size={30} color="red" />
                  ) : (
                    <CiHeart size={30} />
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFilter;
