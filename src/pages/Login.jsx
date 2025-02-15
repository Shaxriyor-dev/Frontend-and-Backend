import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      <div className="absolute top-0 left-0 w-full h-full bg-[#2E3030] clip-diagonal"></div>
      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl w-[430px]">
        <h2 className=" text-center text-[36px] font-[700] font-[Mulish]">
        Sign in
        </h2>
        <div>
          <Box
            className="font-[Mulish] font-[500]"
            sx={{ height: "47px", maxWidth: "100%", marginTop: "35px" }}
          >
            <TextField
              fullWidth
              label="Username"
              id="Username"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "9px",
                  "& fieldset": {
                    border: "1.5px solid #EBEBEB",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid blue",
                  },
                  "&:hover fieldset": {
                    border: "1.5px solid blue",
                  },
                },
                height: "47px",
              }}
            />
          </Box>
          <Box
            className="font-[Mulish] font-[500]"
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "100%", marginTop: "35px" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "9px",
                    "& fieldset": {
                      border: "1.5px solid #EBEBEB",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid blue",
                    },
                    "&:hover fieldset": {
                      border: "1.5px solid blue",
                    },
                  },
                  height: "47px",
                }}
              />
            </div>
          </Box>
          <div>
            <Button
              sx={{
                height: "45px",
                width: "100%",
                background: "#6200EE",
                borderRadius: "5px",
                fontFamily: "Mulish",
                fontSize: "16px",
                marginTop: "50px",
              }}
              variant="contained"
              disableElevation
            >
              Submit
            </Button>
          </div>

          <p className=" text-center font-[300] text-[16px] font-[Mulish] text-[#333333] mt-[15px]">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-[#6200EE]">
              Go to sign up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
