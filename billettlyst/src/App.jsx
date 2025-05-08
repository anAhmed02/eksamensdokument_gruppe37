import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./komponenter/Home";
import EventPage from "./komponenter/EventPage";
import CategoryPage from "./komponenter/CategoryPage";
import Dashboard from "./komponenter/Dashboard";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" elemen={<Home />} />
                <Route path="/event/:id" elemnt={<EventPage />} />
                <Route path="/category/:slug" elemnt={<CategoryPage />} />
                <Route path="/dashboard" elemnt={<Dashboard />} />
            </Routes>
        </Router>
    );
}




export default App;