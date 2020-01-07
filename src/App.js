import React,{ useState } from 'react';

import Comments from './Comments'
import NewComment from './NewComment'

function App() {

  const [comments,setComments] = useState([])

  function sendComment(c) {
    setComments([...comments,c])
  } 

  return (
    <div>
      
      <NewComment 
      sendComment={sendComment}/>
 
      <Comments 
      comments={comments} 
      />

    </div>
  );
}

export default App;
