import React, { useState } from 'react';

function CreateArea(props) {
  const [textInput, setTextInput] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTextInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(textInput);
    setTextInput({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={textInput.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={textInput.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

//value attributes in the Input element reflect the state of the notes.
