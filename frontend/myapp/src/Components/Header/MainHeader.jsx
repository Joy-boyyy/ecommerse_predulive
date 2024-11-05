import Search from "./Search";
import NavBar from "./NavBar";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const { mySearchStr } = useSelector((state) => state.userSearch);
  const navigate = useNavigate();
  return (
    <header className="w-[100%] flex-col shadow-lg">
      <div className="w-[100%] md:flex">
        <div className="md:basis-[10%] flex md:flex items-center justify-center">
          <h1
            className="text-2rem font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Logo
          </h1>
        </div>
        {/* ----------------search box */}
        <div className="md:basis-[73%]  md:flex md:items-center ">
          <Search />
        </div>
        <div className="md:w-[12%]  md:flex md:items-center">
          <NavBar />
        </div>
      </div>

      {/* -------search Result */}

      {mySearchStr && (
        <div>
          <SearchResult />
        </div>
      )}
    </header>
  );
};

export default MainHeader;
