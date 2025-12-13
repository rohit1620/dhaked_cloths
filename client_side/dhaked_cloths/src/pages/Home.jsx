import React, { useEffect } from "react";
import { fetchData } from "../redux_toolkit/menSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <div className="bg-[url('/cloths4.jpeg')]  bg-cover bg-center h-screen text-center sm:h-screen w-full sm:hidden">
        <h1 className="font-bold text-5xl pt-9 text-yellow-500 italic">
          𝓓𝓗𝓐𝓚𝓔𝓓 𝓒𝓛𝓞𝓣𝓗𝓢
        </h1>
        <p className="px-4 text-white text-2x py-3 text-bold italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo saepe
          quibusdam! Inventore consectetur accusamus facilis ad minima quas
        </p>
      </div>
      <div className="bg-[url('/cloths2.jpeg')]  bg-cover bg-center h-64 sm:h-screen w-full hidden sm:block ">
        <h1 className="font-bold text-7xl italic text-center pt-35 text-blue-600">
          𝓓𝓗𝓐𝓚𝓔𝓓 𝓒𝓛𝓞𝓣𝓗𝓢
        </h1>
        <p className="px-40 text-center text-xl font-bold text-gray-800 py-4 italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          cupiditate, totam accusamus neque eum sequi quia nemo quam recusandae
          minima placeat tenetur at enim laboriosam, saepe adipisci, dolor
        </p>
      </div>
      <h1 className="text-5xl text-center py-5 italic ">Our Services</h1>
      <div className="sm:flex justify-around sm:pb-9 sm:w-[80%] sm:m-auto sm:gap-7">
        <div className="sm:w-[25%]">
          <h1 className="text-3xl text-bold italic py-3 sm:text-2xl">
            𝓜𝓮𝓷 𝓒𝓵𝓸𝓽𝓱𝓼
          </h1>
          <img
            className="h-96 w-full rounded-2xl"
            src="https://elizabetta.net/cdn/shop/articles/mens-handrolled-large-silk-pocket-square.jpg?v=1692808561"
            alt=""
          />
        </div>
        <div className="sm:w-[25%]">
          <h1 className="text-3xl text-bold italic py-3 sm:text-2xl">
            𝓦𝓸𝓶𝓮𝓷 𝓒𝓵𝓸𝓽𝓱𝓼
          </h1>
          <img
            className="h-96 w-full rounded-2xl"
            src="https://assets.ajio.com/medias/sys_master/root/20250617/CvHA/68514fcb55340d4b4fb9a9fd/-473Wx593H-701762626-pink-MODEL.jpg"
            alt=""
          />
        </div>
        <div className="sm:w-[25%]">
          <h1 className="text-3xl text-bold italic py-3 sm:text-2xl">
            𝓑𝓸𝔂–𝓚𝓲𝓭𝓼 𝓒𝓵𝓸𝓽𝓱𝓼
          </h1>
          <img
            className="h-96 w-full rounded-2xl"
            src="https://www.mumkins.in/cdn/shop/files/kurta-pajama-for-boys-bs10mum16-pink-1.jpg?v=1757335409&width=1080"
            alt=""
          />
        </div>
        <div className="sm:w-[25%]">
          <h1 className="text-3xl text-bold italic py-3 sm:text-2xl">
            𝓖𝓲𝓻𝓵–𝓚𝓲𝓭𝓼 𝓒𝓵𝓸𝓽𝓱𝓼
          </h1>
          <img
            className="h-96 w-full rounded-2xl "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJawyKbzL1MwpLN_iZ8hEvPkHrMsyCfyoZnw&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
