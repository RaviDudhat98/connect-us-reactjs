import { lazy } from "react";

const AuthenticationPage = lazy(() => import("../pages/AuthenticationPage"));

export const publicRoutes = [{ path: "/", component: AuthenticationPage }];

export const privateRoutes = [{ path: "/chat", component: AuthenticationPage }];
