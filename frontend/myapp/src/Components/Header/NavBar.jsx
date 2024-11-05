import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { countCartItem } from "../../Redux/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BsBoxSeam } from "react-icons/bs";
import { doEmpty } from "../../Redux/Slice/CartSlice";
import { setWishList } from "../../Redux/Slice/WishlistSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalNumberItems, cartArr } = useSelector(
    (state) => state.myCartSlice
  );
  const [isAut, setAut] = useState(false);

  useEffect(() => {
    dispatch(countCartItem());
  }, [dispatch, cartArr]);

  useEffect(() => {
    const tokenRec = Cookies.get("token");
    if (tokenRec !== undefined) {
      setAut(true);
    } else {
      setAut(false);
    }
  }, []);

  return (
    <div className="w-[100%]">
      <nav className="w-[100%]">
        <ul className="flex gap-2 items-center justify-end md:justify-normal">
          <li>
            <details className="dropdown">
              <summary className="btn m-1">Credential</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {isAut ? (
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        Cookies.remove("token");
                        dispatch(doEmpty([]));
                        dispatch(setWishList([]));
                        navigate("/user/login");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/user/login");
                        }}
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/user/register");
                        }}
                      >
                        Register
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>
          <li>
            <CiHeart
              className="cursor-pointer"
              size={30}
              onClick={() => {
                navigate("/wishlist");
              }}
            />
          </li>

          {/* ---------------- All Orders */}
          {Cookies.get("token") !== undefined && (
            <li
              onClick={() => {
                navigate("/orders");
              }}
            >
              <BsBoxSeam className="cursor-pointer" size={25} />
            </li>
          )}

          <li className="relative ">
            <MdOutlineShoppingCart
              size={30}
              onClick={() => {
                navigate("/cart");
              }}
              className="cursor-pointer"
            />
            <p
              onClick={() => {
                navigate("/cart");
              }}
              className="cursor-pointer absolute top-[-17px] right-0 text-[1.6rem] font-bold text-red-500"
            >
              {totalNumberItems}
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
