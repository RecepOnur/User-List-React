import "./App.css";
import List from "./components/List";
import UserDetail from "./components/UserDetail";
import React, { useState } from "react";

function App() {
  const [activeUserId, setActiveUserId] = useState("");
  return (
    <div className="App">
      <div>
        <List setActiveUserId={setActiveUserId}></List>
      </div>
      {activeUserId && (
        <div>
          <UserDetail activeUserId={activeUserId}></UserDetail>
        </div>
      )}
    </div>
  );
}

export default App;
