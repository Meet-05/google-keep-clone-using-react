import React, { useState } from "react";

function Note(props) {
  const [changeColor, setColor] = useState(false);

  function handleOnMouseOver() {
    setColor(true);
  }

  function handleOnMouseOut() {
    setColor(false);
  }

  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        style={{ backgroundColor: changeColor ? "#e8505b" : null }}
        onClick={handleClick}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
