import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import under from "../assets/logo/under.png";

function Clean() {
  return (
    <div className="h-[100vh] bg-[#2E3030] flex justify-center items-center">
      <div>
        <div>
          <img className="h-[400px]" src={under} alt="" />
        </div>
        <div className="flex justify-center items-center mt-[70px]">
          <Stack sx={{gap : '10px'}} spacing={2} direction="row">
            <Button sx={{background : '#6200EE', height : '40px' , width : '240px' , fontFamily : 'Mulish'}} variant="contained">Go Home Page</Button>
            <Button sx={{ height : '40px' , width : '240px' , fontFamily : 'Mulish'}} variant="outlined">Reload Page</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Clean;
