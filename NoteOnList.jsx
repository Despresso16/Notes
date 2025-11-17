import { useState } from 'react'

function NoteOnList({title, wordCount, showViewNote, showEditNote, showDeleteNote}) {

  return (
    <div className="note-onlist-container">
        <div className="note-description">
            <h4>{title}</h4>
            <p>Długość notatki: {wordCount} słów</p>
        </div>
        <div className="note-menu">
            <button className='greenBtn' onClick={showViewNote}>Wyświetl notatkę</button>
            <button className='yellowBtn' onClick={showEditNote}>Edytuj notatkę</button>
            <button className='redBtn' onClick={showDeleteNote}>Usuń notatkę</button>
        </div>
        
    </div>
  )
}

export default NoteOnList
