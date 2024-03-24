import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  
  const [text,setText]= useState('')

  // {target} is an destructure thing. we only need event.target
  const handleTextChange = ({target}) =>{
    const {value} = target;
    // this line update the value for text with value
    setText(value)
  }

  const handleSubmit = (event) =>{
    if(text.length){
      // preventdefault stop the page from refreshing when the form is submitted
      event.preventDefault()
      
      const thought = {
        id:generateId(),
        text:text,
        expiresAt:getNewExpirationTime()
      };
      props.addThought(thought);
      setText('')
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit = {handleSubmit}>
      <input
        // onchange will keep updating the value of the form
        onChange = {handleTextChange}
        value = {text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add"/>
    </form>
  );
}
