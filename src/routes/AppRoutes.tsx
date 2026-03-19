import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "./Routes";
import SpinnerLoader from "../components/loader/SpinnerLoader";

const AppLayout = lazy(() => import("../components/layout/AppLayout"));

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerLoader />}>
          <Routes>
            {publicRoutes.map((publicR) => {
              return (
                <>
                  <Route
                    path={publicR.path}
                    element={<publicR.component />}
                  ></Route>
                </>
              );
            })}
            <Route element={<AppLayout />}>
              {privateRoutes.map((privateR) => {
                return (
                  <>
                    <Route
                      path={privateR.path}
                      element={<privateR.component />}
                    ></Route>
                  </>
                );
              })}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
