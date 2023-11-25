import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Contest from "./Contest";
import { FaBriefcase, FaFirstAid, FaGamepad } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const AllContest = () => {
  const axiosSecure = useAxios();
  const [category, setCategory] = useState("");
  const handleClick = (type) => {
    setCategory(type);
  };
  console.log(category);
  const {
    data: allContest = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allContest", category],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests?category=${category}`);
      return res.data;
    },
  });
  console.log(allContest);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-4 items-center overflow-auto px-4">
        <div
          onClick={() => handleClick("Business Contest")}
          className={`flex flex-col  items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer ${
            category === "Business Contest"
              ? " text-blue-600 border-blue-600 border-b-4"
              : ""
          }`}
        >
          <FaBriefcase size={26}></FaBriefcase>
          <p className="text-sm font-medium">Business Contest</p>
        </div>
        <div
          onClick={() => handleClick("Medical Contest")}
          className={`flex flex-col  items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer ${
            category === "Medical Contest"
              ? " text-blue-600 border-blue-600 border-b-4"
              : ""
          }`}
        >
          <FaFirstAid size={26} />
          <p className="text-sm font-medium">Medical Contest</p>
        </div>
        <div
          onClick={() => handleClick("Article Writing")}
          className={`flex flex-col  items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer ${
            category === "Article Writing"
              ? " text-blue-600 border-blue-600 border-b-4"
              : ""
          }`}
        >
          <FaFilePen size={26} />
          <p className="text-sm font-medium">Article Writing</p>
        </div>
        <div
          onClick={() => handleClick("Gaming")}
          className={`flex flex-col  items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer ${
            category === "Gaming"
              ? " text-blue-600 border-blue-600 border-b-4"
              : ""
          }`}
        >
          <FaGamepad size={26} />
          <p className="text-sm font-medium">Gaming</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allContest.map((contest) => (
          <Contest key={contest._id} contest={contest}></Contest>
        ))}
      </div>
    </div>
  );
};

export default AllContest;
