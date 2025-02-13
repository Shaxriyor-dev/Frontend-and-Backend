import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  return (
    <>
      <div className="relative flex justify-center items-center h-screen bg-gray-100">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2E3030] clip-diagonal"></div>
        <div className="relative z-10 bg-white p-8 rounded-2xl h-[518px] shadow-xl w-[430px]">
          <h2 className=" text-center text-[36px] font-[700] font-[Mulish]">
            Sign up
          </h2>
          <div>
            <Box
              className="font-[Mulish] font-[500]"
              sx={{ height:'47px'  ,  maxWidth: "100%", marginTop: "35px" }}
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
                  height : '47px'
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
                    height:'47px'
                  }}
                />
              </div>
            </Box>
            <Box
              className="font-[Mulish] font-[500]"
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  color: "#FEFEFE",
                  width: "100%",
                  marginTop: "35px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Confirm password"
                  type="password1"
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
                  }}
                />
              </div>
            </Box>
            <div>
              <Button sx={{height : '45px' , width : '100%' , background : '#6200EE' , borderRadius : '5px' , fontFamily : 'Mulish' , fontSize : '16px' , marginTop : '50px'}} variant="contained" disableElevation>
                Submit
              </Button>
            </div>
               <div>
                  <p className=" text-center font-[300] text-[16px] font-[Mulish] text-[#333333] mt-[15px]">Already signed in? 
                       <span className="text-[#6200EE]">Go to sign in.</span>
                    </p>
               </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
