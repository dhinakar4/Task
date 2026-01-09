import { useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { useContext } from "react";
import {ThemeContext} from "./context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";



export default function Navbar1() {
  const navigate = useNavigate();
  const {theme, toggleTheme} = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow
      bg-gray-800 text-white dark:bg-gray-200 dark:text-white">

      <h1 className="text-xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="bg-red-400 px-2 py-2 !rounded-full"
        > {theme === "light" ? <MdDarkMode size={20} /> : <MdOutlineLightMode size={20} />}
        </button>

        <button
          onClick={handleLogout}
          className=""
        >
          <TbLogout size={22} />
        </button>
      </div>
    </nav>
  );
}
