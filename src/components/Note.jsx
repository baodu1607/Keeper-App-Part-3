import React from 'react';

function Note(props) {
  function handleClicked(event) {
    //console.log('Clicked! ');
    props.onDelete(props.id);
    //somehow pass over the index of the note that is being deleted
    //through this deleteNote function.
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClicked}>DELETE</button>
    </div>
  );
}

export default Note;
