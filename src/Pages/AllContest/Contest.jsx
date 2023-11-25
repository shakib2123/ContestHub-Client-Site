import { Link } from "react-router-dom";

const Contest = ({ contest }) => {
  const { _id, contestName, image, attendance, description } = contest;
  const shortDesc = description.slice(0, 100);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] md:w-full h-96 md:h-[400px] m-2 brightness-110 hover:brightness-90 mx-auto"
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 text-center">
          <div className="flex flex-col items-center justify-center p-2 text-gray-200">
            <div className="font-bold m-2 mt-[30%]">
              <h2 className=" text-lg md:text-2xl">{contestName}</h2>
            </div>

            <p className="text-blue-400 text-lg font-medium">
              Attempted count: {attendance}
            </p>
            <div className="m-2 text-sm">
              <p className="text-gray-300">{shortDesc}.....</p>
            </div>
            <Link to={`/contestDetails/${_id}`}>
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contest;
