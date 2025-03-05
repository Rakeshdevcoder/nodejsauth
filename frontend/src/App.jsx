<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> d98c783 (pushing final code)
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

const App = () => {
<<<<<<< HEAD
=======
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  
>>>>>>> d98c783 (pushing final code)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectAuthenticatedUser>
              <SignUp />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/signin"
          element={
            <RedirectAuthenticatedUser>
              <SignIn />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
