import { lazy } from "react";

const AuthenticationPage = lazy(() => import("../pages/AuthenticationPage"));

export const publicRoutes = [{ path: "/chat", component: AuthenticationPage }];

export const privateRoutes = [{ path: "/", component: AuthenticationPage }];
