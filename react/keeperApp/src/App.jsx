import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
// import AllNotes from "./AllNotes";

function App() {
  const [newNote,setNewNote] = useState([])
  function addNote(note){
    setNewNote(prev => {
      return [
        ...prev,
        note
      ]
    })
    console.log(newNote)
  }
  function deleteNote(id){
    setNewNote(prev => {
      return prev.filter((item,index) => {
        return index !==id
      })
    })
  }
  return (
    <>
      <Header />
      <CreateNote onAdd = {addNote}/>
      {newNote.map((notess,index) => {
        return <Note key={index} id ={index} title={notess.title} content={notess.content} onDelete ={deleteNote}/>
      })}
      
      <Footer />
    </>
  );
}

export default App;

// {AllNotes.map( note => {
//   return (
//     <Note key={note.key} title={note.title} content={note.content} />
//   );
// })}
