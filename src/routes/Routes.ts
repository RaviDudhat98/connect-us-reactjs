import { lazy } from "react";

const ChatPage = lazy(() => import("../pages/ChatPage"));
const AuthenticationPage = lazy(() => import("../pages/AuthenticationPage"));
const ResetPassword = lazy(
  () => import("../components/authentication/ResetPassword"),
);

export const publicRoutes = [
  { path: "/", component: AuthenticationPage },
  { path: "/reset-password", component: ResetPassword },
];

export const privateRoutes = [
  { path: "/chat", component: ChatPage },
  { path: "/chat/:id", component: ChatPage },
];
