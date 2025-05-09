import { useEffect, useState } from React;
import { Link } from "react-router-dom";

function Home() {
    const [festivals, setFestivals] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const API_KEY = "HX1eiAg74CfyBUI7OUbj9WGgGxkGWJDs"; 

    const festivalNames = [
    "Findings",
    "Neon",
    "Skeikampenfestivalen",
    "Tons of Rock"
    ];

    useEffect(() => {
        async function fetchFestivals() {
            const results = await Promise.all(
                festivalNames.map(async (name) => {
                    const res = await fetch(
                        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(
                        name
                    )}&countryCode=NO&apikey=${API_KEY}`
                );
                const data = await res.json();
                return data._embedded?.events?.[0]; 
            })
      );
      setFestivals(results.filter(Boolean));
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
    );
}

export default Home;