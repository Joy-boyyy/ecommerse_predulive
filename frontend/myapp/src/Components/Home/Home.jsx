import React from "react";

import MainHeader from "../Header/MainHeader";
import RecentProjects from "./RecentProjects";
import AllCollection from "../AllCollections/AllCollection";
import RecentEvents from "../Home/RecentEvents";
import GoogleReview from "../Home/GoogleReview";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <RecentProjects />
      <AllCollection />
      <RecentEvents />
      <GoogleReview />
      <Footer />
    </div>
  );
};

export default Home;
