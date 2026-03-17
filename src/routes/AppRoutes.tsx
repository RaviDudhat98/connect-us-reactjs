import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "./Routes";

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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
