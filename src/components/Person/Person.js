import React from 'react';
import './Person.css';

const Person = ({id, name, quote, superlative}) => (
  <div className='person'>
    <h3>{id}</h3>
    <h3>{name}</h3>
    <h3>{quote}</h3>
    <h3>{superlative}</h3>
  </div>
)
   
export default Person;
