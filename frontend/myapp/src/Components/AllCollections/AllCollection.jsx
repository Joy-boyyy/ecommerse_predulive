import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { collectionFilter } from "../../Redux/Slice/CollectionSelectore";

const AllCollection = () => {
  const AllProducts = useSelector((state) => state.productSlice);
  const { selectedCollection } = useSelector(
    (state) => state.collectionSelected
  );

  const dispatch = useDispatch();

  let mySet = new Set();
  AllProducts.forEach((product) => {
    mySet.add(product.Rel);
  });

  console.log("mySet =====>", mySet);

  return (
    <div className="w-[100%] mt-2 ">
      <div className="w-[100%] flex gap-3 flex-wrap items-start justify-center">
        {[...mySet].map((mapProp, ind) => (
          <Link to={`/collections/${mapProp}`} key={ind}>
            <div
              onClick={() => {
                dispatch(collectionFilter(mapProp));
              }}
              className={`${
                selectedCollection === mapProp
                  ? "bg-slate-400 shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px] text-white"
                  : ""
              } cursor-pointer border-2 p-8 rounded-full hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,_rgba(0,0,0,0.12)_0px_-12px_30px,_rgba(0,0,0,0.12)_0px_4px_6px,_rgba(0,0,0,0.17)_0px_12px_13px,_rgba(0,0,0,0.09)_0px_-3px_5px]`}
            >
              <p>{mapProp.toUpperCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCollection;
