import React,{ useState } from 'react';

// import { Container } from './styles';

export default function NewComment({sendComment}) {

  const [newComment,setNewComment] = useState([])

  return (
    <div>
      <textarea 
      onChange={(e) => setNewComment(e.target.value)} 
      value={newComment}>
      </textarea>
      <button onClick={() => sendComment(newComment) & setNewComment("")}>Enviar</button>
    </div>
  );
}
