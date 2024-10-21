import MainHeader from "../Header/MainHeader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addWishList } from "../../Redux/Slice/WishlistSlice";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishArr } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AllProducts = useSelector((state) => state.productSlice);
  const [wishedFor, setWished] = useState([]);

  useEffect(() => {
    const filteredData = AllProducts.filter((filterProp) =>
      wishArr.includes(filterProp.Id)
    );

    setWished(filteredData);
  }, [AllProducts, wishArr]);

  return (
    <div>
      <MainHeader />
      {/* ---wishlist data */}
      <div className="mt-5 w-[100%]">
        {wishedFor.length < 1 ? (
          <div className="w-[100%] text-center text-[2rem] font-bold">
            <h1>No Wishlist available !!!</h1>
          </div>
        ) : (
          <div className="w-[100%] p-3">
            {wishedFor.map((mapProp) => (
              <div
                className="w-[100%] flex gap-4 items-center border-b mt-3 border-t cursor-pointer"
                onClick={() => {
                  navigate(`/selected/${mapProp.Id}`);
                }}
              >
                <div>
                  <img
                    src={mapProp.Image}
                    alt={mapProp.Rel}
                    className="w-[10rem]"
                  />
                </div>
                <p>{mapProp.Title}</p>
                <p className="font-bold text-[1.2rem]"> ₹{mapProp.Amount}</p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addWishList(mapProp.Id));
                  }}
                >
                  <span>
                    {wishArr.includes(mapProp.Id) ? (
                      <FaHeart size={30} color="red" />
                    ) : (
                      <CiHeart size={30} />
                    )}
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
