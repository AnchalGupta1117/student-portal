import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout, dummyUser } from "../auth";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4 sticky top-0 z-50 flex justify-between items-center">
      <div className="font-bold text-xl">Student Portal</div>

      <div className="space-x-4 flex items-center">
        <Link
          to="/"
          className="hover:underline text-white dark:text-white"
        >
          Home
        </Link>

        {isLoggedIn() && (
          <>
            <Link
              to="/users"
              className="hover:underline text-white dark:text-white"
            >
              Users
            </Link>
            <Link
              to="/dashboard"
              className="hover:underline text-white dark:text-white"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-white text-black dark:text-black px-3 py-1 rounded hover:bg-gray-200"
            >
              Logout
            </button>
            <span className="ml-2 text-white dark:text-white bg-transparent">
              {dummyUser.name}
            </span>
          </>
        )}

        {!isLoggedIn() && (
          <Link
            to="/login"
            className="hover:underline text-white dark:text-white"
          >
            Login
          </Link>
        )}

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-2 px-3 py-1 rounded border border-white dark:border-gray-400 bg-white dark:bg-white text-black text-sm hover:bg-gray-100"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
