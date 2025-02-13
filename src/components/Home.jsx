import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import checks from "../assets/logo/check.png";
import searchs from "../assets/icon/searchs.png";
import profile from "../assets/icon/profile.png";
import AddAlertTwoToneIcon from "@mui/icons-material/AddAlertTwoTone";
import Books from "./Books";

function Home() {
  return (
    <div>
      <div className="h-[100vh] bg-[#2E3030]">
        <div className="  w-[100%] h-[100vh] ">
          <header className="flex justify-between p-[10px] px-[70px] ">
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
            <div className="flex items-center gap-8">
              <div>
                <Box sx={{ color: "action.active" }}>
                  <Badge color="secondary" variant="dot">
                    <AddAlertTwoToneIcon sx={{ color: "#fff" }} />
                  </Badge>
                </Box>
              </div>
              <div>
                <button className="border-2 border-solid text-[#FD648E] h-[40px] w-[40px] rounded-[50%] flex items-center justify-centerbg-gradient-to-r from-[#FD648E] via-[#884CB2] to-[#FD648E]">
                  <img
                    className="h-[35px] text-[#fff]"
                    src={profile}
                    alt="png"
                  />
                </button>
              </div>
            </div>
          </header>
          <div>
            <Books />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
