import React, { useState } from 'react';
import './Compose.css';



export default function Compose(props) {

  const [text, setText] = useState('');

  function handleChange(event) {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
      props.functionCallFromParent(event.target.value);
      setText('');

    }
  }

  return (
    <div className="compose">
      <input
        type="text"
        className="compose-input"
        placeholder="Type a message, @name"
        onKeyPress={handleChange}
        value={text}
        onChange={e => setText(e.target.value)}
      />

      {
        props.rightItems
      }

    </div>
  );
}