import { useState } from 'react'

function DeleteNote({id, title, hide, deleteNote}) {

  return (
    <div className="note-popup-container">
        <h1>{id}. {title}</h1>
        <div className="note-popup-menu-container">
            <button className='yellowBtn' onClick={hide}>Anuluj</button>
            <button className='redBtn' onClick={deleteNote(id)}>Usuń notatkę</button>
        </div>
    </div>
  )
}

export default DeleteNote