import { FaSearchengin } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.ibb.co/CJhX2s5/360-F-495286577-rps-T2-Shmr6g81h-Oh-GXALhx-WOfx1v-OQBa.jpg')",
      }}
      className="h-[calc(100vh-110px)] bg-cover bg-center max-w-screen-xl mx-auto flex justify-center items-center"
    >
      <div className="max-w-2xl mx-auto text-center space-y-4 p-2">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300">
          Unlock Your Potential: Join the Ultimate Innovation Hub!
        </h2>
        <p className="text-gray-400 text-lg">
          Join the challenge. Show your skills. Be the champion. Explore now!
        </p>
        <div className="join">
          <input
            className="input input-bordered join-item md:w-96"
            placeholder="Search here..."
          />
          <button className="btn join-item rounded-lg">
            <FaSearchengin className="text-2xl"></FaSearchengin>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
