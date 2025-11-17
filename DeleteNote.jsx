import { useState } from 'react'

function DeleteNote({title, hidePopUp, deleteNote}) {

  return (
    <div className="note-popup-container">
        <h1>{title}</h1>
        <div className="note-popup-menu-container">
            <button className='yellowBtn' onClick={hidePopUp}>Anuluj</button>
            <button className='redBtn' onClick={showDeleteNote}>Usuń notatkę</button>
        </div>
    </div>
  )
}

export default DeleteNote