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
      <div className="w-[100%] flex">
        <div className="basis-[10%]  flex items-center justify-center">
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
        <div className="basis-[73%]  flex items-center">
          <Search />
        </div>
        <div className="w-[12%]  flex items-center">
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
