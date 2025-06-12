import React, { useState } from 'react';
import './App.css';

 function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className='text-center'>Simple React Counter</h1>
      <p>Count: {count}</p>

     <button onClick={() => setCount(count + 1)}  >Increase</button>
     <button onClick={() => setCount(count - 1)}>Decrease</button>
     <button onClick={() => setCount(count - 0)}>Reset</button>
    </div>
  );
}

export default App;
