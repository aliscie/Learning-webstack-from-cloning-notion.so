import React from 'react';
import useElements from './apiHooks/useElements'
import Recur from './components/recursion'

function App() {
  const { data, put, setid, deleting, SetnewPost } = useElements();

  return (
    <div>
      <h1>test</h1>
      <Recur data={data} />

    </div>
  );
}

export default App;
