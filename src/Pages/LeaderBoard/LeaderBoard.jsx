import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  const axiosSecure = useAxios();
  const { data: leaderContest = [] } = useQuery({
    queryKey: ["leaderBoard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests?sortOrder=desc");
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-3 bg-gray-200 min-h-[calc(100vh-150px)]">
      <h2 className="text-2xl md:text-3xl text-gray-700 pt-4  font-bold text-center">
        Top Picks: Explore Exciting Contests – Unleash the Power of Creativity!
      </h2>
      <div className="grid grid-cols-1 py-8 lg:grid-cols-2 gap-4 mt-8">
        {leaderContest.map((contest) => (
          <div
            key={contest._id}
            className="md:h-56 flex flex-col md:flex-row gap-2 w-full bg-base-100 shadow-xl"
          >
            <figure className=" w-full md:max-w-[300px] h-64 md:h-full">
              <img
                src={contest?.image}
                className="w-full h-full object-cover"
                alt="img"
              />
            </figure>
            <div className="flex flex-col p-3 space-y-3">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">
                  {contest?.contestName}
                </h2>
                <p className="text-red-600">
                  Total Attendance: {contest?.attendance}
                </p>
                <p className="text-sm text-gray-600">{contest?.description}</p>
              </div>
              <div className=" justify-end">
                <Link to={`/contestDetails/${contest?._id}`}>
                  <button className="btn bg-teal-600 text-white font-medium">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
