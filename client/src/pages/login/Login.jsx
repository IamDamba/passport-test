// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ||||||||||||||||||||||||||||| Login Component ||||||||||||||||||||||||||||||||||||

const Login = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <form style={{ display: "grid" }}>
      <a href="/api/auth/google">Login With Google</a>
      <Link to="register">New Here ?</Link>
    </form>
  );
};
export default Login;
