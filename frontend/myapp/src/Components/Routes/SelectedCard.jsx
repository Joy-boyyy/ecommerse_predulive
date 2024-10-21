import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import { useSelector, useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addWishList } from "../../Redux/Slice/WishlistSlice";
import { FaHeart } from "react-icons/fa";
import { cardPush } from "../../Redux/Slice/CartSlice";
import Footer from "../Footer/Footer";

const SelectedCard = () => {
  const AllProducts = useSelector((state) => state.productSlice);

  const { Id } = useParams();
  const [detailCard, setDetailedCard] = useState({});
  const { wishArr } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  console.log("Id===>", Id);

  useEffect(() => {
    const runFun = () => {
      const foundDATA = AllProducts.filter((item) => item.Id.toString() === Id);
      console.log("foundDATA ===>", foundDATA);
      setDetailedCard(foundDATA[0]);
    };
    runFun();
  }, [AllProducts, Id]);

  console.log("detailCard ===>", detailCard);

  // const objData = Object.keys(detailCard?.Specifications);

  return (
    <div className="w-[100%]">
      <MainHeader />
      <div className="w-[100%] flex gap-3 min-h-[90vh] items-center p-4">
        <div className="w-[30%]">
          <img
            src={detailCard?.Image}
            alt={detailCard?.Title}
            className="w-[100%] h-[30rem]"
          />
        </div>
        <div className="w-[70%]">
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
                  e.stopPropagation();
                  dispatch(addWishList(detailCard.Id));
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
                  dispatch(cardPush(detailCard));
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
