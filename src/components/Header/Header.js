import React from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="py-2">
      <div className="container mx-auto lg:py-0">
        <div className="flex justify-between items-center">
          <a href="/about">
            <img src={Logo} alt="logo" className="h-[120px] w-[120px]" />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
