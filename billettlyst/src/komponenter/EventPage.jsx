import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const API_KEY = "HX1eiAg74CfyBUI7OUbj9WGgGxkGWJDs";

    useEffect(() => {
        fetch(
            `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey={API_KEY}`
        )
        .then((res) => res.json())
        .then((data) => setEvent(data));
    }, [id]);

    if (!event) return <p>Laster arrangement...</p>;

    return (
        <main>
            <h1>{event.name}</h1>
            {event.images?.[0]?.url && (
                <img
                src={event.images[0].url}
                alt={event.name}
                />
        )}
        <p><strong>Dato:</strong> {event.dates?.start?.localDate}</p>
        <p><strong>Sted:</strong> {event._embedded?.venues?.[0]?.name}, {event._embedded?.venues?.[0]?.city?.name}, {event._embedded?.venues?.[0]?.country?.name}</p>
        <p><strong>Info:</strong> {event.info || "Ingen beskrivelse tilgjengelig."}</p>
        {event.url && (
            <p>
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                    Kjøp billetter
                </a>
            </p>
        )}
    </main>
    );
}

export default EventPage;