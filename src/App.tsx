import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <a className="brand" href="/">
          Arash Movie DB
        </a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="/about">Details</a>
          </li>
        </ul>
      </nav>
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
