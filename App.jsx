import { useState } from 'react'
import './App.css'
import NoteOnList from './NoteOnList';
import ViewNote from './ViewNote';
import EditNote from './EditNote';
import DeleteNote from './DeleteNote';


function App() {
  class Note {
    constructor (id, title, text){
      this.id = id
      this.title = title;
      this.text = text
    }
    getWordCount(){
      return this.text.trim().split(/\s+/).length
    }
  }
  const [notes, setNotes] = useState([new Note(0,"TO DO", "-posprzatac w domu\n-wyrzucic smieci"), new Note(1, "Fajne drogi", "-Skala\n-Niegowonice\n-salmopol")]) // przykladowe notatki
  const [popupType, setPopupType] = useState("")
  const [popup, setPopup] = useState(null)

  const getNewNoteId = () =>{
    return notes[notes.length-1].id+1;
  }
  const hidePopUp = () =>{
    setPopupType("")
  }
  const deleteNote = (noteId) =>{
    
  }
  const viewNote = (noteId) =>{
    setPopupType("view")
    renderPopUp(noteId)
  }
  const editNote = (noteId) =>{
    
  }
  const showDeleteNote = (noteId) =>{
    setPopupType("delete")
    renderPopUp(noteId)
  }
  const showEditNote = (noteId) =>{
    setPopupType("edit")
    renderPopUp(noteId)
  }
  const renderPopUp = (noteId) =>{
    let selectedNote = new Note(getNewNoteId, "", "")
    if(noteId>=0){
      selectedNote = notes.map((note) =>{
        if(note.id === noteId) return note;
      })
    }
    switch(popupType){
      case "view":
         setPopup(<ViewNote id={selectedNote.id} title={selectedNote.title} noteText={selectedNote.text} hide={hidePopUp} showEdit={showEditNote} showDelete={showDeleteNote}/>)
         break;
      case "edit":
        setPopup(<EditNote id={selectedNote.id} title={selectedNote.title} noteText={selectedNote.text} hide={hidePopUp} showDelete={showDeleteNote} edit={editNote}/>)
        break;
      case "delete":
        setPopup(<DeleteNote id={selectedNote.id} title={selectedNote.title} hide={hidePopUp} deleteNote={deleteNote}/>)
        break;
      default:
        setPopup(null)
        break;
    }

  }
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
          {notes.map((note) =>{
             return <NoteOnList key={note.id} id={note.id} title={note.title} wordCount={note.getWordCount()} view={viewNote} showDelete={showDeleteNote} showEdit={showEditNote} />
          })}
        </div>
      </div>
      {popup}
    </>
  )
}

export default App
