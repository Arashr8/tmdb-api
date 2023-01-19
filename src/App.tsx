import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>TMDB</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Details</li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
