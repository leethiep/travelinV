import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ReadBlogs from "./Pages/ReadBlogs";
import ProtectedRoutes from "./components/PrivateRouter";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import Blogs from "./Pages/Blogs";
import PersonalPage from "./Pages/PersonalPage";
// import PrivateRoutes from "./PrivateRoutes";
// import ProtectedRoutes from "./PrivateRouter";
// import Personal from "./Personal";
// import LoginPage from "./Login";
// import Register from "./Register";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PersonalPage />} />
          <Route path="/Blogs" element={<ReadBlogs />} />
          {/* <Route path="/Blogs/:relatedPostID" element={<Blogs />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            {/* <Route path="/personal" element={<Personal />} /> */}
          </Route>
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
