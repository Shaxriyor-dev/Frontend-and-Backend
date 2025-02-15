import * as React from "react";
import checks from "../assets/logo/check.png";
import searchs from "../assets/icon/searchs.png";
import profile from "../assets/icon/profile.png";

export default function Navbar() {
  return (
    <nav className="bg-[#2E3030]">
      <div className="container mx-auto max-w-[1260px] p-3 flex justify-between items-center">
        <div className="flex items-center gap-18">
          <div className="flex items-center gap-7">
            <img src={checks} alt="" />
            <a
              className="text-[20px] text-[#6200EE] font-[700] font-[Mulish]"
              href="/"
            >
              Books <span className="text-[#ffffff]">List</span>
            </a>
          </div>
          <div className="h-[48px] w-[390px] flex items-center justify-center gap-5 hover:bg-[#cdcdcd] transition duration-400 rounded-[5px] text-[#000]">
            <button>
              <img src={searchs} alt="" />
            </button>
            <input
              className=" h-[45px] outline-none w-[320px] text-[17px] text-[#FEFEFE] font-[400] font-[Mulish] hover:text-[#000]"
              type="search"
              placeholder="Search for any training you want "
            />
          </div>
        </div>

        <button className="border-2 border-[#FD648E] h-[40px] w-[40px] rounded-[50%] flex items-center justify-center object-cover">
          <img className="h-full w-full" src={profile} alt="profile image" />
        </button>
      </div>
    </nav>
  );
}
