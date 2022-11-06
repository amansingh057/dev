import React, { useState } from 'react'

function CreateNote(props) {
  const [note,SetNote] = useState({
    title : "",
    content : ""
  })
  function handleChange(event){
    const {value,name} =event.target
    SetNote(prev => {
      return {
        ...prev,
        [name] : value
      }
    })
  }
  function handleClick(event){
    props.onAdd(note)
    SetNote({
      title : "",
    content : ""
    })
    event.preventDefault()
  }
  return (
    <div >
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." value={note.content} rows="3" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote