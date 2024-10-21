import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchFill } from "../../Redux/Slice/SearchSlice";

const SearchResult = () => {
  const AllProducts = useSelector((state) => state.productSlice);
  const { mySearchStr } = useSelector((state) => state.userSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchCard, setSearchCard] = useState([]);

  useEffect(() => {
    const cardFilter = () => {
      const filteredData = AllProducts?.filter(
        (filterProp) =>
          filterProp.Rel.toLowerCase().includes(mySearchStr.toLowerCase()) ||
          filterProp.Title.toLowerCase().includes(mySearchStr.toLowerCase()) ||
          filterProp.Amount.toString().includes(mySearchStr)
      );
      setSearchCard(filteredData);
    };
    cardFilter();
  }, [mySearchStr, AllProducts]);

  return (
    <div className="w-[100%] mt-5">
      {searchCard.length === 0 ? (
        <div className="w-[100%] text-center mt-5">
          <p className="text-[2rem] font-bold">Sorry No Search Found !!!</p>
        </div>
      ) : (
        <div className="w-[100%]">
          <div className="flex flex-col gap-3 pl-5">
            {searchCard?.map((searchedData) => (
              <div
                onClick={() => {
                  navigate(`/selected/${searchedData.Id}`);
                  dispatch(searchFill(""));
                }}
                className="flex cursor-pointer items-center gap-2 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,_rgba(27,31,35,0.15)_0px_0px_0px_1px]"
                key={searchedData.Id}
              >
                <div>
                  <img
                    className="w-[5rem] h-[5rem]"
                    src={searchedData.Image}
                    alt={searchedData.Rel}
                  />
                </div>
                <p>{searchedData.Title}</p>
                <p className="font-bold">₹{searchedData.Amount}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
