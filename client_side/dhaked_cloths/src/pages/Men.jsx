import React, { useEffect } from "react";
import { fetchData } from "../redux_toolkit/menSlice";
import { useDispatch, useSelector } from "react-redux";

const Men = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.men.item);
  const status = useSelector((state) => state.men.status);
  console.log("myvalue", data);
  useEffect(() => {
    dispatch(fetchData("men"));
  }, []);

  console.log("status", status);

  if (status == "loading") {
    return <h1>Data is loading...</h1>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:w-[80%] sm:m-auto py-4 sm:py-8">
      {data.map((el) => (
        <div key={el._id} className="shadow-cart text-center rounded-3xl">
          <img
            className="w-full h-60 rounded-tl-3xl rounded-tr-3xl"
            src={el.image}
            alt=""
          />
          <p>{el.type}</p>
          <p>{el.name}</p>
          <p>{el.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Men;
