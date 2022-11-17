import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ReadBlogs from "./Pages/ReadBlogs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Blogs" element={<ReadBlogs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
