import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Menu from "../Pages/MenuPage"
import Login from "../Pages/LoginPage";
import ProtectedRoutes from "./protectedRoutes";
export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<Layout/>}>
              <Route path="order" element={<></>} />
              <Route path="grapic" element={<h1>This is about</h1>} />
              <Route path="settings" element={<h1>This is about1</h1>} />
              <Route path="menu" element={<Menu/>} />
            </Route>
          </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
