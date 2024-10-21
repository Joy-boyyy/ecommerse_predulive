import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import CollectionRoute from "./Components/Routes/CollectionRoute";
import SelectedCard from "./Components/Routes/SelectedCard";
import Wishlist from "./Components/Wishlist/Wishlist";
import AllCartData from "./Components/Routes/AllCartData";
import UserDetails from "./Components/Routes/UserDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collections/:mapProp" element={<CollectionRoute />} />
          <Route path="selected/:Id" element={<SelectedCard />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<AllCartData />} />
          <Route path="UserDetails" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
