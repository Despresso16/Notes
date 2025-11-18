import { useState } from 'react'

function ViewNote({id, title, noteText, hide, showEdit, showDelete}) {

  return (
    <div className="note-popup-container">
        <h1>{id}. {title}</h1>
        <div className="note-popup-menu-container">
            <button className='yellowBtn' onClick={showEdit(id)}>Edytuj notatkę</button>
            <button className='redBtn' onClick={hide}>Schowaj notatkę</button>
            <button className='redBtn' onClick={showDelete(id)}>Usuń notatkę</button>
        </div>
        <p>{noteText}</p>
    </div>
  )
}

export default ViewNote
