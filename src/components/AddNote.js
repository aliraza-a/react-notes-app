import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  // for character count
  const charLimit = 200;

  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    //   check character count isn't filled
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    //   check note is not empty
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);

      //   clear input field after note added
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
