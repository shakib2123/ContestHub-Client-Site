import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import { MdDoNotDisturbOnTotalSilence, MdWatchLater } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const MyWinningContest = () => {
  const axiosSecure = useAxios();
  const { user, loader } = useAuth();

  const { data: winningCount = [] } = useQuery({
    enabled: !loader,
    queryKey: ["winningCount"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(winningCount);
  const pending = winningCount.filter((win) => win.status === "pending");
  const winning = winningCount.filter((win) => win.status === "winner");
  const colors = ["#00C49F", "#FFBB28"];
  const data = [
    { name: "Pending", value: pending.length },
    { name: "Winning", value: winning.length },
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex gap-8 flex-col justify-center items-center">
      <div>
        <div className="stats shadow ">
          <div className="stat place-items-center">
            <div className="stat-title">Total Participate</div>
            <div className="stat-value flex items-center gap-1">
              <MdDoNotDisturbOnTotalSilence /> {winningCount.length}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Pending</div>
            <div className="stat-value text-secondary flex items-center gap-1">
              <MdWatchLater /> {pending.length}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Win In</div>
            <div className="stat-value flex items-center gap-1 text-amber-500">
              <FaCrown /> {winning.length}
            </div>
          </div>
        </div>
      </div>
      {/* chart */}
      <div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="value"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 2]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default MyWinningContest;
