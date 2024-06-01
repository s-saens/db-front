// RecommendedItem.js
import React from 'react';

const RecommendedItem = ({ name, price, company, type, fuel, cc, efficiency }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '30px 50px', marginBottom: '10px', borderRadius: '30px', margin: '20px' }}>
      <h3>{name}</h3>
      <hr/>
      <p>{price} 만원</p>
      <p>{company}</p>
      <p>{type}</p>
      <p>{fuel}</p>
      <p>{cc} cc</p>
      <p>{efficiency} km/l</p>
    </div>
  );
};

export default RecommendedItem;
