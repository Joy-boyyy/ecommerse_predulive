import { useEffect } from "react";
import AllCollection from "../AllCollections/AllCollection";
import { useParams } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import CardFilter from "../CardFilter/CardFilter";
import { collectionFilter } from "../../Redux/Slice/CollectionSelectore";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";

const CollectionRoute = () => {
  const { mapProp } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(collectionFilter(mapProp));
  }, [mapProp, dispatch]);

  return (
    <div>
      <MainHeader />
      <AllCollection />
      <CardFilter />
      <Footer />
    </div>
  );
};

export default CollectionRoute;
