import React, { useState } from 'react';
import User from './User';
import Recommend from './Recommend';

const App = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = async (data) => {
    const queryString = new URLSearchParams(data).toString();
    console.log(data); // log
    const response = await fetch(`http://localhost:3123/recommend?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log(result); // log
    setResult(result);
  };

  const resetResult = () => {
    result = null;
  }

  return (
    <div>
      {!result ? <User onSubmit={handleSubmit} /> : <Recommend data={result} onClickBack={resetResult} />}
    </div>
  );
};

export default App;