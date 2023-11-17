import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Home from "./Components/Home";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Resume from "./Components/Resume";
import AdminHeader from "./Components/AdminHeader";

import { UserProvider } from "./Components/UserProvider";
import Forgotpassword from "./Components/Forgotpassword";
import Otpverification from "./Components/Otpverification";
import Changepassword from "./Components/Changepassword";
import Verify from "./Components/Verify";
import Header from "./Components/Header"; // Import your Header component
import ImageUpload from "./Components/Imageupload";

const PrivateRoute = ({ isAuthenticated, userRole, ...props }) => {
  const token = sessionStorage.getItem("accessToken");
  return isAuthenticated && token ? (
    <>
     
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/" />
  );
};

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(""); 

  const setUserRoleOnLogin = (role) => {
    setUserRole(role);
  };

  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home isUserAuthenticated={isUserAuthenticated} />}
        />

        <Route path="/main" element={<PrivateRoute isAuthenticated={isAuthenticated} userRole={userRole} />}>

          <Route path="/main" element={<Main userRole={userRole} />} />
          
        </Route>
   
        <Route path="/login" element={<Login setUserRoleOnLogin={setUserRoleOnLogin} isUserAuthenticated={isUserAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/otpverification/:id" element={<Otpverification />} />
        <Route path="/changepassword/:id" element={<Changepassword />} />
        <Route path="/verify/:token" element={<Verify />} />

     
        <Route
          path="/admin/api"
          element={<PrivateRoute isAuthenticated={isAuthenticated} userRole={userRole} />}
        >
          <Route path="/admin/api" element={<AdminHeader />} />
        </Route>

        <Route path="/imageupload" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route path="/imageupload" element={<ImageUpload/>}/>
        </Route>
           
       
      </Routes>
    </Router>
    </UserProvider>
   
  );
};

export default App;
