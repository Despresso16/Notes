import { useState } from 'react'

function ViewNote({title, noteText, hidePopUp, showEditNote, showDeleteNote}) {

  return (
    <div className="note-popup-container">
        <h1>{title}</h1>
        <div className="note-popup-menu-container">
            <button className='yellowBtn' onClick={showEditNote}>Edytuj notatkę</button>
            <button className='redBtn' onClick={hidePopUp}>Schowaj notatkę</button>
            <button className='redBtn' onClick={showDeleteNote}>Usuń notatkę</button>
        </div>
        <p>{noteText}</p>
    </div>
  )
}

export default ViewNote
