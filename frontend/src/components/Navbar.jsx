import React, { useState } from "react";

function Navbar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      alert("Welcome " + username);
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Smart Student Management System</h1>

      <div className="bg-white text-black p-3 rounded-lg shadow-md w-52">
        <h2 className="text-lg font-bold text-center mb-2">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-1.5 rounded text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-1.5 rounded text-sm"
          />

          <button
            type="submit"
            className="bg-blue-700 text-white p-1.5 rounded text-sm"
          >
            Login
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
