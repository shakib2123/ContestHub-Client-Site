import usePayments from "../../../hooks/usePayments";

const MyParticipatedContest = () => {
  const { payments } = usePayments();

  return (
    <div>
      <div className="navbar bg-base-100 mb-10">
        <div className="flex-1">
          <h2 className="lg:text-xl font-bold text-center text-red-500">
            My participated contests!!
          </h2>
        </div>
        <div className="flex-none">
          <button className="p-2 bg-teal-600 text-gray-100 font-medium rounded-full">
            Upcoming Contest
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {payments.map((payment) => (
          <div
            style={{ borderRadius: "20px 100px 20px 100px" }}
            key={payment._id}
            className="card w-full bg-base-100 shadow-xl"
          >
            <figure className="h-64 w-full">
              <img
                className="w-full object-cover"
                src={payment?.contestImage}
                alt="img"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{payment?.contestName}</h2>
              <p>Deadline: {payment?.deadline}</p>
              <p className="text-sm">Attend In: {payment?.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyParticipatedContest;
