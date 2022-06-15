// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./routes/mainLayout/MainLayout";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

// ||||||||||||||||||||||||||||| App Component ||||||||||||||||||||||||||||||||||||

const App = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
export default App;
