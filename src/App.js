import React,{ useState, useEffect } from 'react';

import Comments from './Comments'
import NewComment from './NewComment'

import { database } from './firebase'

function App() {

  const [comments,setComments] = useState({})
  const [loading,setLoading] = useState(false)

  function sendComment(c) {
    
    const id = database.ref().child("comments").push().key;

    const comments = {}
    comments[`comments/${id}`] = {
      c
    }
    database.ref().update(comments)
   //setComments([...comments,c + " " + id])
  } 

  useEffect(() => {
    async function getData() {
    setLoading(true)
    const data = database.ref("comments")
    await data.on("value", snapshot => {
      setComments(snapshot.val())
      setLoading(false)
    })
  }

  getData();

  },[])

  return (
    <div>
      
      <NewComment 
      sendComment={sendComment}/>
 
      <Comments 
      comments={comments} 
      />

      { loading && <p>Carregando...</p>}

    </div>
  );
}

export default App;
