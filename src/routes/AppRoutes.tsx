import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "./Routes";

const AppLayout = lazy(() => import("../components/layout/AppLayout"));

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading component...</div>}>
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
