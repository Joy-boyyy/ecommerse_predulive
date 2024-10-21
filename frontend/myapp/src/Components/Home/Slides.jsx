import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";

const Slides = () => {
  const { slideArr } = useSelector((state) => state.homeSlide);
  const ArrObj = slideArr;
  const [myState, setState] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setState((prevState) =>
        prevState < ArrObj.length - 1 ? prevState + 1 : 0
      );
    }, 4000);

    return () => {
      clearInterval(myInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextFun = () => {
    setState((prevSt) => {
      return prevSt < ArrObj.length - 1 ? prevSt + 1 : 0;
    });
  };

  const prevFun = () => {
    setState((prevSt) => {
      return prevSt > 0 ? prevSt - 1 : ArrObj.length - 1;
    });
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <div className="w-[100%] h-[20rem]" style={{ position: "relative" }}>
        <span
          style={{ position: "absolute", top: "50%", right: "0px" }}
          className="bg-white p-4 rounded-full cursor-pointer"
          onClick={nextFun}
        >
          <MdNavigateNext size={20} />
        </span>
        <img
          src={ArrObj[myState].imgS}
          alt={`imgss ${ArrObj[myState].id}`}
          className="w-[100%] h-[100%] object-cover"
        />
        <span
          style={{ position: "absolute", top: "50%", left: "0px" }}
          className="bg-white p-4 rounded-full cursor-pointer"
          onClick={prevFun}
        >
          <GrFormPrevious size={20} />
        </span>
      </div>
    </div>
  );
};

export default Slides;
