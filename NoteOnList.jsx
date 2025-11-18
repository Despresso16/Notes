import { useState } from 'react'

function NoteOnList({id, title, wordCount, view, showEdit, showDelete}) {

  const correctGrammar = (number) =>{
    switch(number){
      case 1:
        return "slowo";
      case 2:
        return "slowa"
      case 3:
        return "slowa"
      case 4:
        return "slowa"
      default:
        return "slow"
    }
  }
  return (
    <div className="note-onlist-container">
        <div className="note-description">
            <h4>{id}. {title}</h4>
            <p>Długość notatki: {wordCount} {correctGrammar(wordCount)}</p>
        </div>
        <div className="note-menu">
            <button className='greenBtn' onClick={view(id)}>Wyświetl notatkę</button>
            <button className='yellowBtn' onClick={showEdit(id)}>Edytuj notatkę</button>
            <button className='redBtn' onClick={showDelete(id)}>Usuń notatkę</button>
        </div>
        
    </div>
  )
}

export default NoteOnList
