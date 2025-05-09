import { BrowserRouter as Router } from 'react-router-dom';
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
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}




export default App;