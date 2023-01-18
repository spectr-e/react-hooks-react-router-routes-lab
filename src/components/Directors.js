import React from "react"
import { directors } from "../data"

function Directors() {
  function renderDirectors(director) {
    return (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        <ul>
          {director.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <h1>Directors</h1>
      {directors.map((director) => renderDirectors(director))}
    </div>
  )
}

export default Directors
