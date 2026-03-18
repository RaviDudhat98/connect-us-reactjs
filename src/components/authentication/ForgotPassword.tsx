import { Box, Button, InputAdornment, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ConnectUsLogo from "../base/ConnectUsLogo";
import { useState } from "react";

function ForgotPassword() {
  const [form, setForm] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = { email: "" };

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);

    return !newErrors.email;
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
        <h3 className="text-black font-semibold text-3xl">ConnectUs</h3>
        <span className="text-gray-600 text-sm">Forgot password</span>
        <div className="login-container mt-10">
          <Box
            className="login-form flex flex-col justify-center gap-5"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                "& .MuiInputBase-root": { borderRadius: "12px" },
              }}
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
                      <MailOutlineIcon />
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
    </>
  );
}

export default ForgotPassword;
