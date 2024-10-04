
import React from 'react';
import {comments} from './commentData';
import Card from './Card';
import './app.css';

function App() {
  return (
    <div>
      {comments.map((comment,index) => (
        <Card key={index} commentObject={comment} />
        ))}
    </div>
  )
}
export default App;