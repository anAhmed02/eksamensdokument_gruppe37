import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [festivals, setFestivals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const API_KEY = "HX1eiAg74CfyBUI7OUbj9WGgGxkGWJDs";
  const festivalNames = ["Findings Festival", "NEON Festival", "Skeikampenfestivalen", "Tons of Rock"];

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  useEffect(() => {
    async function fetchFestivals() {
      try {
        const results = [];
        for (const name of festivalNames) {
          const result = await fetch(
            `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${name}&countryCode=NO&apikey=${API_KEY}`
          );
          if (!result.ok) throw new Error(`HTTP ${result.status}`);
          const data = await result.json();
          results.push(data._embedded?.attractions?.[0] || null);
          await delay(500); 
        }
        setFestivals(results.filter(Boolean));
      } catch (err) {
        console.error("Feil ved henting av festivaler:", err);
      }
    }
    fetchFestivals();
  }, []);
  
  

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/category/${searchTerm.toLowerCase()}`);
    }
  };

  return (
    <main>
      <h1>Klar for årets festival?</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Søk etter arrangement"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Søk</button>
      </form>

      <section className="grid">
        {festivals.length === 0 ? (
          <p>Laster festivaler…</p>
        ) : (
          festivals.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} className="card">
              <h3>{event.name}</h3>
              {event.images?.[0]?.url && <img src={event.images[0].url} alt={event.name} />}
              <p>{event.dates?.start?.localDate}</p>
            </Link>
          ))
        )}
      </section>
    </main>
  );
}

export default Home;
