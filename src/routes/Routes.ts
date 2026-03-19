import { lazy } from "react";

const AuthenticationPage = lazy(() => import("../pages/AuthenticationPage"));
const ResetPassword = lazy(
  () => import("../components/authentication/ResetPassword"),
);

export const publicRoutes = [
  { path: "/", component: AuthenticationPage },
  { path: "/reset-password", component: ResetPassword },
];

export const privateRoutes = [{ path: "/chat", component: AuthenticationPage }];
