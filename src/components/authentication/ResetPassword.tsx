import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import ConnectUsLogo from "../base/ConnectUsLogo";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = { password: "", confirmPassword: "" };

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (form.confirmPassword === form.password) {
      newErrors.confirmPassword =
        "Confirm password does not match with Password";
    }

    setErrors(newErrors);

    return !newErrors.password && !newErrors.confirmPassword;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("e", e);
    if (validate()) {
      console.log("Form Data:", form);
    }
  };

  return (
    <>
      <div className="bg-blue-500 h-screen flex justify-center items-center">
        <div className="bg-white border rounded-2xl shadow px-8 py-6 w-[90%] md:w-[30%] ld:w-[25%]">
          <div className="flex justify-center items-center my-2">
            <ConnectUsLogo />
          </div>
          <h3 className="text-black font-semibold text-3xl">ConnectUs</h3>
          <span className="text-gray-600 text-sm">Reset your password</span>
          <div className="login-container mt-10">
            <Box
              className="login-form flex flex-col justify-center gap-5"
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                sx={{
                  "& .MuiInputBase-root": { borderRadius: "12px" },
                }}
                required
                id="password-input"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                placeholder="Enter your password"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlineIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                value={form.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{
                  "& .MuiInputBase-root": { borderRadius: "12px" },
                }}
                required
                id="confirm-password-input"
                name="confirm-password"
                label="Confirm password"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                placeholder="Confirm your password"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlineIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the confirm password"
                              : "display the confirm password"
                          }
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <div className="">
                <Button
                  type="submit"
                  variant="contained"
                  className="bg-blue-500! rounded-[10px]! w-full py-3! normal-case! font-semibold!"
                >
                  Send email
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
