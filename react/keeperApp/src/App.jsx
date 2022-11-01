import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import AllNotes from "./AllNotes";

function App() {
  return (
    <>
      <Header />
      {AllNotes.map( note => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
