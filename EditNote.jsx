import { useState } from 'react'

function EditNote({id, title, noteText, hide, showDelete, edit}) {

  return (
    <div className="note-popup-container">
        <input type="text" name="titleEdit" id="titleEdit" value={`${id}.${title}`} placeholder='Wpisz tytuł notatki...' />
        <div className="note-popup-menu-container">
            <button className='greenBtn' onClick={edit(id)}>Potwierdź zmiany</button>
            <button className='redBtn' onClick={hide}>Schowaj notatkę</button>
            <button className='redBtn' onClick={showDelete(id)}>Usuń notatkę</button>
        </div>
        <input type="text" name="noteTextEdit" id="noteTextEdit" value={noteText} placeholder='Wpisz treść notatki...' />
    </div>
  )
}

export default EditNote