import React from "react";
import DashBoard from "./pages/DashBoard";
import Counter from "./components/counter";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div>
      <DashBoard />

      <Counter />

      <UserInput />
    </div>
  );
}

export default App;
