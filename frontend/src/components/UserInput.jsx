import React, { useState, useEffect } from "react";

const UserInput = () => {
  const [Name, SetName] = useState("");

  useEffect(() => {
    console.log("Name changed:", Name);
  }, [Name]);

  return (
    <div>
      <input
        type="text"
        value={Name}
        onChange={(t) => SetName(t.target.value)}
        placeholder="Enter your name"
      />

      <p>Welcome {Name}</p>
    </div>
  );
};

export default UserInput;
