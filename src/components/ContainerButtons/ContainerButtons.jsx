import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../features/theme/ThemeSlice";

const ContainerButtons = () => {
  const themeValue = useSelector((state) => state.theme.theme);
  const htmlDoc = document.documentElement;
  const dispatch = useDispatch();

  useEffect(() => {
    if (themeValue === "light") {
      htmlDoc.classList.remove("dark");
      localStorage.theme = "light";
    } else if (themeValue === "dark") {
      htmlDoc.classList.add("dark");
      localStorage.theme = "dark";
    }
  }, [themeValue]);

  const handleToggleTheme = () => {
    if (themeValue === "light") {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme("light"));
    }
  };

  return (
    <div className="flex items-center">
      {/* Switch for light/dark mode */}
      <button
        onClick={handleToggleTheme}
        className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full focus:outline-none"
      >
        {themeValue === "light" ? lightIcon : darkIcon}
      </button>
    </div>
  );
};

// Icons for light and dark modes
const lightIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      className="fill-sky-400/20 stroke-sky-500"
    ></path>
    <path
      d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
      className="stroke-sky-500"
    ></path>
  </svg>
);

const darkIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
      className="fill-sky-400/20"
    ></path>
    <path
      d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
      className="fill-sky-500"
    ></path>
  </svg>
);

export default ContainerButtons;
