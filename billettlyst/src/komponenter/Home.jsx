import { useEffect, useState } from React;
import { Link } from "react-router-dom";

function Home() {


    return (
        <main>
            <h1>Klar for årets festival</h1>
            <form onSubmit={handleSearch}>
                <input
                type="text"
                placeholder="Søk etter arrangement"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" >
                    Søk
                </button>
            </form>
        </main>
    )
}