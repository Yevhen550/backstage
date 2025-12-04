import React from 'react'

const Forbes = ({forbes}) => {
  return (
    <div>
      <h2>{forbes.name}</h2>
      <img src={forbes.avatar} alt={forbes.name} width="640" />
      <p>Price: {forbes.capital}credits</p>
    </div>
  );
}

export default Forbes
