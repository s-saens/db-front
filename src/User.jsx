import React, { useState } from 'react';
import './User.css';

const User = ({ onSubmit }) => {

  // 각 입력 필드의 상태를 관리하는 useState 훅 사용
  const [km, setKm] = useState('');
  const [cost, setCost] = useState('');
  const [monthlyExpense, setMonthlyExpense] = useState('');

  // 사용자 정보를 서버로 보내는 함수
  const handleSubmit = () => {
    const data = { km: km, price: cost, month_budget: monthlyExpense };
    onSubmit(data);
  };

  return (
    <div className="recommendation-form">
      <h2>차량 추천 받기</h2>
      <div className="input-group">
        <label htmlFor="cost">일시불 예산</label>
        <input
          type="text"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="monthlyExpense">월 유지비 예산</label>
        <input
          type="text"
          id="monthlyExpense"
          value={monthlyExpense}
          onChange={(e) => setMonthlyExpense(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="km">월 주행거리 (km)</label>
        <input
          type="text"
          id="km"
          value={km}
          onChange={(e) => setKm(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>추천받기</button>
    </div>
  );
};

export default User;