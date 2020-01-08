import React from 'react';

// import { Container } from './styles';

export default function Comment({ c }) {
  console.log(c.c)
  return (
    <div>Commentário : {c.c} </div>
  );
}
