import React from 'react';
import { Link } from 'react-router-dom';

/** 
    @param {object} props
    @param {object} props.event
    @param {string} props.event.id
    @param {string} props.event.name
    @param {Array<{url: string}>} [props.event.images]
    @param {{ start: { localDate: string } }} [props.event.dates]
*/
export default function EventCard({ event }) {
  return (
    <article className="festival-card">
      {event.images?.[0]?.url && (
        <img
          src={event.images[0].url}
          alt={`Plakat for ${event.name}`}
          className="festival-cardimg"
        />
      )}
      <div className="festival-cardcontent">
        <h2 className="festival-cardtitle">{event.name}</h2>
        <p className="festival-carddate">
          {event.dates?.start?.localDate}
        </p>
        <Link to={`/event/${event.id}`} className="festival-card__btn">
          Les mer om {event.name}
        </Link>
      </div>
    </article>
  );
}