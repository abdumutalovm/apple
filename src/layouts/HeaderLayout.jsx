import React, { useEffect, useState } from "react";
import logo from "../assets/apple_log.png";
import { Link, Outlet } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

function HeaderLayout() {
  const [data, setData] = useState([])
  useEffect(() => {
    const storedBag = JSON.parse(localStorage.getItem('bag'));
    if (storedBag) {
      setData(storedBag);
    }
  }, [])

  return (
    <>
      <header className="p-3">
        <div className="flex max-w-screen-xl mx-auto items-center justify-between">
          <Link to="/">
            <img src={logo} alt="apple logo" className="w-6" />
          </Link>
          <div className="flex items-center gap-20">
            <Link to="/iphones" className="transition text-zinc-600 hover:text-black">
              Iphone
            </Link>
            <Link to="/ipads" className="transition text-zinc-600 hover:text-black">
              Ipad
            </Link>
            <Link to="/macs" className="transition text-zinc-600 hover:text-black">
              Mac
            </Link>
            <Link to="/watches" className="transition text-zinc-600 hover:text-black">
              Watch
            </Link>
            <Link to="/vision" className="transition text-zinc-600 hover:text-black">
              Vision
            </Link>
            <Link to="/airpods" className="transition text-zinc-600 hover:text-black">
              AirPods
            </Link>
            <Link to="/about" className="transition text-zinc-600 hover:text-black">
              About
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <CiSearch className="cursor-pointer" size={23} />
            <span className="w-[40px] transition cursor-pointer p-2 hover:bg-zinc-300 rounded-2xl">
              <Link to="/badge">
                <CiShoppingCart size={23} className="absolute" />
                <span className="relative left-3 bottom-2.5 bg-blue-600 px-1.5 text-[10px] text-white rounded-md">{data.length}</span>
              </Link>
            </span>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default HeaderLayout;
