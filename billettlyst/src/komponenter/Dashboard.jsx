import { useState } from "react";

function Dashboard() {
    const [isLoggenIn, setIsLoggedIn] = usestate(false);

    function handleLogin(e) {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    return (
        <div>
            {isLoggenIn ? (
                <div>
                    <h1>Min side</h1>
                    <p>Velkomen tilbake!</p>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <h1>Logg inn</h1>
                    <input placeholder="Brukernavn" />
                    <input type="password" placeholder="passord" />
                    <button type="submit">Logg inn</button>
                </form>
            )}
        </div>
    );
}


export default Dashboard;