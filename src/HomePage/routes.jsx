import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./HomePage"

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="order" element={<Home/>} />
          <Route path="grapic" element={<h1>This is about</h1>} />
          <Route path="settings" element={<h1>This is about1</h1>} />
          <Route path="menu" element={<h1>This is about1</h1>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
