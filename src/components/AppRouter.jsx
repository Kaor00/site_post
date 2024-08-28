import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error from "../pages/404";
import { publicRoutes, privatRoutes } from "../router";
import { AuthContext } from "./context";
import Loaderr from "./UI/Loaderr/Loaderr";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if (isLoading) return <Loaderr/>
  return isAuth ? (
    <Routes>
      {privatRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      {/* <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to={"/error"} replace />} /> */}
      <Route path="*" element={<Navigate to={"/posts"} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="/Login" element={<Error />} />
      <Route path="*" element={<Navigate to={"/Login"} replace />} />
    </Routes>
  );
};

export default AppRouter;
