import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import CollectionRoute from "./Components/Routes/CollectionRoute";
import SelectedCard from "./Components/Routes/SelectedCard";
import Wishlist from "./Components/Wishlist/Wishlist";
import AllCartData from "./Components/Routes/AllCartData";
import UserDetails from "./Components/Routes/UserDetails";
import Register from "./Components/UserCredential/Register";
import Login from "./Components/UserCredential/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { useEffect } from "react";
import axios from "axios";
import { cardPush } from "./Redux/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { setWishList } from "./Redux/Slice/WishlistSlice";
import NotFound from "./Components/NotFound/NotFound";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import PaymentPage from "./Components/PaymentPage/PaymentPage";
import AIprojectPage from "./Components/aiProject/AIprojectPage";
import AIprojectDetails from "./Components/aiProject/AIprojectDetails";

const App = () => {
  const dispatch = useDispatch();
  // fetching data from backend if incase someone does refresh
  // Note: if no any card item is present then i will get error which will not break the code
  // because each time i am fetching data if we do refresh

  useEffect(() => {
    // -------------fetching cart data

    const fetchCartFun = async () => {
      try {
        const cartVarData = await axios.get(
          "http://localhost:6900/user/carts",
          {
            withCredentials: true,
          }
        );

        if (cartVarData?.data?.cartData.length > 0) {
          for (let cardsData of cartVarData?.data?.cartData) {
            dispatch(
              cardPush({
                Id: cardsData?.card,
                productAmount: cardsData?.amount,
                Image: cardsData?.imgs,
                Amount: cardsData?.price,
                Title: cardsData?.title,
              })
            );
          }
        }
      } catch (err) {
        // console.log(err.response.data.message);
        console.log(err.message);
      }
    };

    // ----------- FUnction call
    fetchCartFun();
  }, [dispatch]);

  // Note: if no any wishlist is present then i will get error which will not break the code

  useEffect(() => {
    const fetchWishFun = async () => {
      try {
        const wishVarData = await axios.get(
          "http://localhost:6900/user/wishlists",
          {
            withCredentials: true,
          }
        );

        if (wishVarData?.data?.wishData.length > 0) {
          dispatch(setWishList(wishVarData?.data?.wishData));
        }
      } catch (err) {
        // console.log(err.response.data.message);
        console.log(err.message);
      }
    };

    fetchWishFun();
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collections/:mapProp" element={<CollectionRoute />} />
          <Route path="selected/:Id" element={<SelectedCard />} />
          <Route
            path="wishlist"
            element={<ProtectedRoute Component={Wishlist} />}
          />
          <Route
            path="cart"
            element={<ProtectedRoute Component={AllCartData} />}
          />
          <Route path="UserDetails" element={<UserDetails />} />

          <Route path="user/register" element={<Register />} />
          <Route path="user/login" element={<Login />} />
          <Route
            path="orders"
            element={<ProtectedRoute Component={OrderDetails} />}
          />

          <Route
            path="payment"
            element={<ProtectedRoute Component={PaymentPage} />}
          />

          <Route path="ai" element={<AIprojectPage />} />
          <Route path="ai-project-details/:id" element={<AIprojectDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
