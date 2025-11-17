import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="app-container">
        <h1>Notatki</h1>
        <div className="menu-container">
          <button className='greenBtn'>Dodaj nową notatkę</button>
          <button className='greenBtn'>Zapisz notatki</button>
          <input type="text" name="search" id="searchInput" placeholder='Wpisz słowo kluczowe'/>
          <button className='greenBtn'>Wyszukaj notatki</button>
        </div>
        <div className="notes-container">
          
        </div>
      </div>
    </>
  )
}

export default App
