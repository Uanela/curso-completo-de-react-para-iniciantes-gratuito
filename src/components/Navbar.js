import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>SiGeStock</h1>
      <div>
        <a href="/">Home</a>
        <a href="/create">Novo producto</a>
      </div>
    </nav>
  );
}
