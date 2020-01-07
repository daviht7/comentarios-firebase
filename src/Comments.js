import React from 'react';

// import { Container } from './styles';

export default function src({ comments }) {
  return (
      <div>
        {comments.map(c => (
          <div>{c}</div>
        ))
        }
    </div>
  );
}
