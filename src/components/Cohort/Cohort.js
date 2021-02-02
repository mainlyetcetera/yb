import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = members => {
  const stMembers = members.staffMembers;
  const memberCards = stMembers.map(member => (
    <Person
      key={member.id}
      photo={member.photo}
      name={member.name}
      quote={member.quote}
      superlative={member.superlative}
    />
  ));

  return (
    <section className='staff-list'>
      {memberCards}
    </section>
  )
}

export default Cohort;
