// Recommendation.js
import React from 'react';
import RecommendedItem from './RecommendedItem';

const Recommendation = () => {
  // 더미 데이터
  const vehicles = [
    { name: '캐스퍼', price: '1800', company: '현대', type: '경형', fuel: '휘발유', cc: '1900', efficiency: '15' },
    { name: '아반떼', price: '2000', company: '현대', type: '준중형', fuel: '휘발유', cc: '1900', efficiency: '20' },
    { name: '쏘나타', price: '3000', company: '현대', type: '중형', fuel: '휘발유', cc: '1900', efficiency: '19' }
  ];

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {vehicles.map((vehicle, index) => (
          <div key={index} style={{ marginRight: '20px' }}>
            <RecommendedItem {...vehicle} />
          </div>
        ))}
      </div>
      <button style={{ margin: '50px' }}>뒤로</button>
    </div>
  );
};

export default Recommendation;
