import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./komponenter/Navbar";
import Home from "./komponenter/Home";
import EventPage from "./komponenter/EventPage";
import CategoryPage from "./komponenter/CategoryPage";
import Dashboard from "./komponenter/Dashboard";
import EventCard from "./komponenter/EventCard";
import ArtistCard from "./komponenter/ArtistCard";
import './App.css'

function App() {
    
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
