import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { countCartItem } from "../../Redux/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalNumberItems } = useSelector((state) => state.myCartSlice);

  useEffect(() => {
    dispatch(countCartItem());
  });
  return (
    <div className="w-[100%]">
      <nav className="w-[100%]">
        <ul className="flex gap-2 items-center">
          <li>
            <details className="dropdown">
              <summary className="btn m-1">Credential</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link>Login</Link>
                </li>
                <li>
                  <Link>Register</Link>
                </li>
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
          <li className="relative ">
            <MdOutlineShoppingCart
              size={30}
              onClick={() => {
                navigate("/cart");
              }}
              className="cursor-pointer"
            />
            <p className="absolute top-[-17px] right-0 text-[1.6rem] font-bold text-red-500">
              {totalNumberItems}
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
