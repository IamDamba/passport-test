// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// ||||||||||||||||||||||||||||| MainLayout Component ||||||||||||||||||||||||||||||||||||

const MainLayout = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="app-container">
      <Outlet />
    </div>
  );
};
export default MainLayout;
