import React from "react";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  const tabs = [
    { title: "Home", path: "/" },
    { title: "Articles", path: "/articles" },
    { title: "Add an article", path: "/add-article" },
  ];

  const handleClickTab = (tab) => {
    history.push(tab.path);
  };

  return (
    <header>
      <nav className="flex justify-center items-center h-16 bg-green-700 text-white">
        <ul className="flex gap-4">
          {tabs.map((tab, i) => (
            <li
              key={i}
              className="px-2 py-1 rounded cursor-pointer hover:bg-green-900"
              onClick={() => handleClickTab(tab)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
