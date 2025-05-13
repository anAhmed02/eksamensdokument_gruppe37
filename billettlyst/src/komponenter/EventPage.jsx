import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [festivals, setFestivals] = useState([]);
  const API_KEY = 'HX1eiAg74CfyBUI7OUbj9WGgGxkGWJDs'; // Flytt gjerne til .env
  const festivalNames = [
    'Findings',
    'Neon',
    'Skeikampenfestivalen',
    'Tons of Rock'
  ];

  useEffect(() => {
    async function fetchFestivals() {
      const results = await Promise.all(
        festivalNames.map(async (name) => {
          const result = await fetch(
            `/discovery/v2/events.json?keyword=${encodeURIComponent(name)}&countryCode=NO&apikey=${API_KEY}`
          );
          const data = await result.json();
          return data._embedded?.events?.[0] || null;
        })
      );
      setFestivals(results.filter(Boolean));
    }
    fetchFestivals();
  }, []);

  return (
    <main>
      <h1>Utvalgte festivaler</h1>
      <section className="festival-grid">
        {festivals.map((evt) => (
          <article key={evt.id} className="festival-card">
            <Link to={`/event/${evt.id}`}>
              <h2>{evt.name}</h2>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
