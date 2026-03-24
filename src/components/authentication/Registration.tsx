import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import GoogleIcon from "@mui/icons-material/Google";
import ConnectUsLogo from "../base/ConnectUsLogo";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BadgeIcon from "@mui/icons-material/Badge";
import { useDispatch } from "react-redux";
import { setAuthMode } from "../../app/slices/authSlice";
import { AuthModes } from "../../utils/Enums";

function Registration() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",

    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    // Name validation
    if (!form.name) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }
    console.log("new", newErrors);

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.password;
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
      <div>
        <div className="flex justify-center items-center my-2">
          <ConnectUsLogo />
        </div>
        <h3 className="text-chat-text-primary font-semibold text-3xl">ConnectUs</h3>
        <span className="text-chat-text-secondary text-sm">Sign up to continue</span>
        <div className="login-container mt-10">
          <Box
            className="login-form flex flex-col justify-center gap-5"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
              id="name-input"
              name="name"
              label="Name"
              autoComplete="off"
              placeholder="Enter your name"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon sx={{ color: "var(--chat-text-muted)" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              id="email-input"
              name="email"
              label="Email"
              autoComplete="off"
              placeholder="Enter your email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon sx={{ color: "var(--chat-text-muted)" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              value={form.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
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
                      <LockOutlineIcon sx={{ color: "var(--chat-text-muted)" }} />
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

            <div className="">
              <Button
                type="submit"
                variant="contained"
                className="bg-(--chat-accent)! hover:bg-(--chat-accent-hover)! rounded-[10px]! w-full py-3! normal-case! font-semibold!"
              >
                Sign Up
              </Button>
            </div>
          </Box>

          <div className="flex flex-row justify-center my-5 w-full">
            <Divider className="py-1.5 w-[43%] border-(--chat-border)"></Divider>
            <span className="mx-3 text-chat-text-muted">OR</span>
            <Divider className="py-1.5 w-[43%] border-(--chat-border)"></Divider>
          </div>
          <div className=" my-3">
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              className="text-chat-text-primary! border-(--chat-border)! border-1.5! rounded-[10px]! w-full py-3! normal-case! font-semibold! hover:bg-(--chat-item-hover)!"
            >
              Continue with Google
            </Button>
          </div>
          <div className="mt-4">
            <span className="text-chat-text-secondary text-sm">
              Already have an account?
            </span>
            <span
              className="mx-1 text-chat-accent font-semibold! text-sm cursor-pointer hover:underline"
              onClick={() => dispatch(setAuthMode(AuthModes.SIGN_IN))}
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
