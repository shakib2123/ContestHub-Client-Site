import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import { FaFilePen } from "react-icons/fa6";
import { MdDelete, MdWatchLater } from "react-icons/md";
const MyContest = () => {
  const axiosSecure = useAxios();
  const { user, loader } = useAuth();
  const {
    data: contests = [],
    isLoading,
    isError,
  } = useQuery({
    enabled: !loader,
    queryKey: ["myContests"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(contests);
  return (
    <div className="max-w-7xl mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Contest Name & Count</th>
            <th>Prize Money</th>
            <th>Status</th>
            <th>Action</th>
            <th>Select Winner</th>
          </tr>
        </thead>
        <tbody>
          {contests.map((contest, index) => (
            <tr key={contest._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src={contest.image} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{contest.contestName}</div>
                    <div className="text-sm opacity-50">
                      Attempt Count: {contest.attendance}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Prize Money: ${contest.prize}
                <br />
                {contest.winnerName && (
                  <span className="badge badge-ghost badge-sm">
                    Winner: {contest.winnerName}
                  </span>
                )}
              </td>
              <td>
                <span className="text-red-500 bg-yellow-100 p-1 w-fit rounded-lg  font-medium flex items-center gap-1">
                  <MdWatchLater /> Pending
                </span>
              </td>
              <th>
                <button className="btn bg-blue-300 btn-xs">
                  <FaFilePen /> Update
                </button>
                <br />
                <button className="btn bg-red-300 btn-xs mt-2">
                  <MdDelete />
                  Delete
                </button>
              </th>
              <th>
                <button className="btn btn-ghost bg-green-300 btn-xs">See submission</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyContest;
