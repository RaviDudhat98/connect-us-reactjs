import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { publicRoutes } from "./Routes";
import SpinnerLoader from "../components/loader/SpinnerLoader";

const AppLayout = lazy(() => import("../components/layout/AppLayout"));
const ChatPage = lazy(() => import("../pages/ChatPage"));

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerLoader />}>
          <Routes>
            {publicRoutes.map((publicR) => {
              return (
                <Route
                  key={publicR.path}
                  path={publicR.path}
                  element={<publicR.component />}
                />
              );
            })}
            {/* Chat routes wrapped in AppLayout (thin sidebar + content) */}
            <Route element={<AppLayout />}>
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/chat/:id" element={<ChatPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
