import { Box, InputAdornment, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlineIcon from "@mui/icons-material/LockOutline";

function Login() {
  return (
    <>
      <div className="bg-white border rounded-2xl shadow px-8 py-6 w-[90%] md:w-[40%] ld:w-[30%] ">
        <h3 className="text-black font-semibold text-2xl">ConnectUs</h3>
        <span className="text-xs">Sign in to continue</span>
        <div className="login-container my-3">
          <Box
            className="login-form flex flex-col justify-center gap-2"
            component="form"
            sx={{
              "& .MuiTextField-root": {},
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              className="w-full!"
              error
              id="email-input"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              autoComplete="off"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              required
              error
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText="Incorrect entry."
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlineIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
}

export default Login;
