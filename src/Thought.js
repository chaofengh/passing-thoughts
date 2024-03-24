import React,{useEffect} from 'react';

export function Thought(props) {
  // in the App.js file, there are thought and removethought attribute. so we can create them in the Thought.js file
  // the thought.id is not needed here. so it is not saved in a variable
  // thought is a props object, removeThought is a callback function
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    // the remove thought function just include element.id that doesnt match the parameter.
    // function is writen in the App.js
    removeThought(thought.id);
  };

  
  useEffect(() =>{
    const timesup = setTimeout(()=>{
      removeThought(thought.id)
    }, thought.expiresAt - Date.now());

    return () =>{
      clearTimeout(timesup);
    }  
    // only run the effect if thought changes
  },[thought])

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
