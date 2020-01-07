import React,{ useState } from 'react';

function App() {

  const comments = [
    "comment 1","comment 2"
 ]

  const [comment,setComment] = useState(comments)

  function sendComment(c) {
    setComment([...comment,c])
  }

  return (
    <div>
      {/* new comment */}
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button onClick={() => sendComment("olá 1")}>Enviar</button>
      </div>
      {/* comments */}
      <div>
        {comment.map(c => (
          <div>{c}</div>
      ))}
      </div>
    </div>
  );
}

export default App;
