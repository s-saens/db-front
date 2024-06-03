// RecommendedItem.js
import React from 'react';

const RecommendedItem = (car) => {
  return (
    <div style={{ border: '1px solid #ccc', width: '200px', marginBottom: '10px', borderRadius:'10px', margin: '20px', textAlign: 'center' }}>
      <h3>{car.name}</h3>
      <p>{car.company}</p>
      <hr/>
      <p>{car.type}</p>
      <p>{car.fuel}</p>
      <p>{car.cc} cc</p>
      <p>{car.efficiency} km/l</p>
      <hr/>
      <p>가격: {car.price}원</p>
      <p>월 유지비: {car.expense.toFixed(0)}원</p>
      <p>부적합성: {car.score.toFixed(1)}</p>
    </div>
  );
};

export default RecommendedItem;