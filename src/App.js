import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';
import './style.css';

export default function App() {
  const [thoughts, setThoughts] = useState([

    // start with two thoughts
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) =>{
    setThoughts((prev) =>{
      // has to add the return keyword else nothing is return
      return [thought,...prev]
    })
  }

  const removeThought = (thoughtIdToRemove) =>{
    setThoughts((thoughts)=>{
      return thoughts.filter((thought)=>{
        return thought.id !==thoughtIdToRemove
      })
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought = {addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            // has to include key for the list element for React
            <Thought key={thought.id} thought={thought} 
              removeThought ={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}
