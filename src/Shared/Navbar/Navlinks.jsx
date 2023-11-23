import { NavLink } from "react-router-dom";
import { FaHouse, FaLightbulb } from "react-icons/fa6";
const Navlinks = () => {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-[#e63946] underline underline-offset-2  border border-[#e63946]"
              : "text-gray-800 font-bold text-lg"
          }
          to="/"
        >
          <FaHouse></FaHouse>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-[#e63946] underline underline-offset-2  border border-[#e63946]"
              : "text-gray-800 font-bold text-lg"
          }
          to="all-contest"
        >
          <FaLightbulb></FaLightbulb>
          All Contest
        </NavLink>
      </li>
    </>
  );
};

export default Navlinks;
