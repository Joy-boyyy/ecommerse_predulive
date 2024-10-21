import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { searchFill } from "../../Redux/Slice/SearchSlice";

const Search = () => {
  const { mySearchStr } = useSelector((state) => state.userSearch);
  const dispatch = useDispatch();

  console.log(mySearchStr);

  return (
    <div className="w-[100%]  flex border-2 rounded-3xl items-center shadow-[0px_7px_29px_rgba(100,100,111,0.2)]">
      <input
        type="search"
        placeholder="Search your product"
        className="w-[100%] h-[2.5rem] rounded-3xl pl-3 outline-none "
        value={mySearchStr}
        onChange={(e) => {
          dispatch(searchFill(e.target.value));
        }}
      />
      <span className="pr-2">
        <CiSearch size={30} />
      </span>
    </div>
  );
};

export default Search;
