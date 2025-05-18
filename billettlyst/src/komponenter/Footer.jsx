import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Data hentet fra{' '}
        <a
          href="https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ticketmaster Discovery API
        </a>
      </p>
    </footer>
  );
}