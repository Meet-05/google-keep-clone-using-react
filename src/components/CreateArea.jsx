import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [changeColor, setColor] = useState(false);

  function handleOnMouseOver() {
    setColor(true);
  }

  function handleOnMouseOut() {
    setColor(false);
  }

  function updateNote(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={updateNote}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={updateNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
          style={{ backgroundColor: changeColor ? "#e8505b" : null }}
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
