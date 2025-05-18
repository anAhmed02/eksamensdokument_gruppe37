import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventCard from './EventCard';
import '../App.css';

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

    <section className="festival-grid">
      {festivals.map((event) => (
        <article key={event.id} className="festival-card">
          {event.images?.[0]?.url && (
            <img
              src={event.images[0].url}
              alt={`Plakat for ${event.name}`}
            />
          )}

          <div className="festival-card-content">
            <h2>{event.name}</h2>
            <Link to={`/event/${event.id}`} className="btn">
              Les mer om {event.name}
            </Link>
          </div>
        </article>
      ))}
    </section>
  </main>
);
}

export default Home;
