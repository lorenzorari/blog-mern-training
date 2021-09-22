import React from "react";

const Navbar = () => {
  const tabs = ["Home", "Articles", "Add an article"];

  return (
    <header>
      <nav className="flex justify-center items-center h-16 bg-green-700 text-white">
        <ul className="flex gap-4">
          {tabs.map((tab) => (
            <li className="px-2 py-1 rounded cursor-pointer hover:bg-green-900">
              {tab}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
