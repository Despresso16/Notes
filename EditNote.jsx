import { useState } from 'react'

function EditNote({title, noteText, hidePopUp, showDeleteNote, editNote}) {

  return (
    <div className="note-popup-container">
        <input type="text" name="titleEdit" id="titleEdit" value={title} placeholder='Wpisz tytuł notatki...' />
        <div className="note-popup-menu-container">
            <button className='greenBtn' onClick={editNote}>Potwierdź zmiany</button>
            <button className='redBtn' onClick={hidePopUp}>Schowaj notatkę</button>
            <button className='redBtn' onClick={showDeleteNote}>Usuń notatkę</button>
        </div>
        <input type="text" name="noteTextEdit" id="noteTextEdit" value={noteText} placeholder='Wpisz treść notatki...' />
    </div>
  )
}

export default EditNote