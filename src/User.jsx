import React, { useState } from 'react';
import './User.css';

const User = () => {
  // 각 입력 필드의 상태를 관리하는 useState 훅 사용
  const [km, setKm] = useState('');
  const [cost, setCost] = useState('');
  const [monthlyExpense, setMonthlyExpense] = useState('');
  const [age, setAge] = useState('');

  // 사용자 정보를 서버로 보내는 함수
  const handleSubmit = () => {
    // HTTP 요청 보내는 코드 작성
    console.log('서버로 사용자 정보를 보냅니다.');
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
        <label htmlFor="monthlyExpense">월급</label>
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
      <div className="input-group">
        <label htmlFor="age">나이</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>추천받기</button>
    </div>
  );
};

export default User;