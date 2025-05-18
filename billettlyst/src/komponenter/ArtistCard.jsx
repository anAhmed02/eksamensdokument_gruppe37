import React from 'react';

 /** 
    @param {object} props
    @param {object} props.artist
    @param {string} props.artist.id        
    @param {string} props.artist.name      
    @param {string} [props.artist.image]   
    @param {string} [props.artist.role]    
 */
export default function ArtistCard({ artist }) {
  return (
    <article className="artist-card">
      {artist.image && (
        <img
          src={artist.image}
          alt={artist.name}
          className="artist-card__img"
        />
      )}
      <div className="artist-card__content">
        <h3 className="artist-card__name">{artist.name}</h3>
        {artist.role && (
          <p className="artist-card__role">{artist.role}</p>
        )}
      </div>
    </article>
  );
}
