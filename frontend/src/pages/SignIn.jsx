import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../helpers/api";

const Signin = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (value, key) => {
    switch (key) {
      case "username":
        setFormValues((currValues) => ({ ...currValues, username: value }));
        break;
      case "passowrd":
        setFormValues((currValues) => ({ ...currValues, password: value }));
        break;
      default:
        console.log("ERROR");
    }
  };

  const isButtonDisabled = () => {
    return !formValues.username || !formValues.password;
  };

  const handleLogin = async () => {
    const response = await api.post("/auth/login", {
      username: formValues.username,
      password: formValues.password,
    });

    if (response.status === "success") {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.userDetails.role);
      navigate("/jobs");
    }
  };

  return (
    <div>
      <div>
        <label>Username</label>
        <input
          onChange={(event) =>
            handleInputChange(event.target.value, "username")
          }
          type="text"
          required
        />
        <br />
        <label>Passowrd</label>
        <input
          onChange={(event) =>
            handleInputChange(event.target.value, "passowrd")
          }
          type="password"
          required
        />
        <br />
        <button onClick={handleLogin} disabled={isButtonDisabled()}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signin;
