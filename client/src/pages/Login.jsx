import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onLoginUser = async (e) => {
    e.preventDefault();
    const response = await axios.get("/");
    console.log("🚀 ~ onLoginUser ~ response:", response.data);
  };
  return (
    <div>
      <form onSubmit={onLoginUser}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
