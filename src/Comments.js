import React from 'react';

import Comment from './Comment'

export default function src({ comments }) {

  const keys = Object.keys(comments)

  return (
      <div>
       {keys.map(comm => (
         <Comment c={comments[comm]} key={comm} />
       ))}
      </div>
  );
}
