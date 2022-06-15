// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ||||||||||||||||||||||||||||| Register Component ||||||||||||||||||||||||||||||||||||

const Register = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <form>
      <input type="text" name="" placeholder="Enter Username" />
      <input type="password" name="" placeholder="Enter Email Address" />
      
      <Link to="login">Already Have Account ?</Link>
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
