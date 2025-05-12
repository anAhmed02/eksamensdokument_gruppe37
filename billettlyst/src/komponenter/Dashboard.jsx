import React, { useState } from "react";

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <div className="dashboard-container">
      {isLoggedIn ? (
        <div className="dashboard-welcome">
          <h1>Min side</h1>
          <p>Velkommen tilbake!</p>
        </div>
      ) : (
        <form className="dashboard-form" onSubmit={handleLogin}>
          <h1>Logg inn</h1>
          <div className="form-group">
            <input type="text" placeholder="Brukernavn" />
            <input type="password" placeholder="Passord" />
          </div>
          <button type="submit">Logg inn</button>
        </form>
      )}
    </div>
  );
}

export default Dashboard;
