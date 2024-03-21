import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-5 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <div className="flex items-center">
          <img src="/navlogo.png" alt="" className="w-44"/>
          </div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-xl text-slate-gray font-bold hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul> 
          <div className="flex gap-2 text-lg leading-normal font-bold font-montserrat max-lg:hidden wide:mr-24 mr-5 px-3 py-2 rounded-lg">
            <a href="/">Log in</a>
          </div>
          <div className="flex gap-2 text-lg leading-normal font-semibold font-montserrat max-lg:hidden wide:mr-24 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800">
            <a href="/">Sign up</a>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-primary z-20">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-loose text-2xl text-slate-gray font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;