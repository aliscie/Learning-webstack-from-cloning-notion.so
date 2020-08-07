import React, { useEffect, useState } from 'react';
import useElements from './apiHooks/useElements'
import Recur from './components/recursion'

function App() {
  const { data, put, setid, deleting, SetnewPost } = useElements();
  //I don't understand why this don't work.
  // function deleteall() {
  //   var i = 79
  //   for (i = 79; i <= 131; i++) {
  //     deleting(i);
  //     console.log('item with id ' + i + ' is deleted.')
  //   }
  // }


  return (
    <div>
      {/* <button onClick={() => { deleteall() }}></button> */}
      <Recur data={data} />
      <button
        onClick={() => SetnewPost({ tag: 'div', text: 'add new text' })}
        className=' btn btn-success'
      >create parent</button>

    </div>
  );
}

export default App;
