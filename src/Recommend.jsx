// Recommendation.js
import React from 'react';
import RecommendedItem from './RecommendedItem';

function back() {
  window.location.reload();
}
const Recommendation = (cars) => {
  return (
    <div>
      <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {cars.data.results.map((c, index) => {
          if(index < 5)
            return (
              <div key={index} style={{ flex: '0 0 auto', marginRight: '20px' }}>
                {index+1}. <RecommendedItem {...c} />
              </div>
            );
        })}
      </div>
      <button style={{ margin: '50px' }} onClick={() => {back()}}>뒤로</button>
    </div>
  );
};

export default Recommendation;
