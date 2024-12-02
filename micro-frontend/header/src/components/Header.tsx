import React from "react";

const Header: React.FC = () => {
  return (
    <header className="">
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
