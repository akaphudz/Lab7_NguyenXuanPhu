import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import UserRoutes from "./routes/UserRoutes"; // Import UserRoutes

const App = () => {
  return (
    <Router>
      <div>
        <h1>Shopping Online</h1>
        <UserRoutes /> {/* Sử dụng UserRoutes ở đây */}
      </div>
    </Router>
  );
};

export default App;
