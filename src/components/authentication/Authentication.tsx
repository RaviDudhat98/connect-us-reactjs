import Login from "./Login";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import Registration from "./Registration";
import { AuthModes } from "../../utils/Enums";
import ForgotPassword from "./ForgotPassword";

function Authentication() {
  const authStore = useSelector((state: RootState) => state.authentication);

  const authComponentMap = {
    [AuthModes.SIGN_IN]: Login,
    [AuthModes.SIGN_UP]: Registration,
    [AuthModes.FORGOT_PASSWORD]: ForgotPassword,
  };

  const AuthComponent = authComponentMap[authStore.authMode];

  return (
    <>
      <AuthComponent />
    </>
  );
}

export default Authentication;
