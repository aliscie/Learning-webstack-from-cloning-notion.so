import React, { useEffect, useState } from 'react';
import useElements from './apiHooks/useElements'
import Recur from './components/recursion'

function App() {
  const { data, put, deleting, SetnewPost } = useElements();
  //I don't understand why this don't work.
  // function deleteall() {
  //   var i = 79
  //   for (i = 79; i <= 131; i++) {
  //     deleting(i);
  //     console.log('item with id ' + i + ' is deleted.')
  //   }
  // }
  // );
  return (
    <div
      style={{ paddingLeft: "200px", flexGrow: '1', alignItems: 'center' }}

    // style={{ maxWidth: '100%', width: '100%', whiteSpace: 'pre-warp', wordBreak: 'break-all', padding: '3px 2px', outline: 'none' }}

    >
      {/* <button onClick={() => { deleteall() }}></button> */}
      <Recur data={data} />
      <button
        onClick={() => SetnewPost({ tag: 'div', text: 'add new text', style: { borderRadius: '5px', backgroundColor: 'grey' } })}
        className=' btn btn-success'
      >+ parent</button>
      <button
        onClick={() => SetnewPost({ tag: 'img', src: 'https://image.shutterstock.com/image-photo/samoyed-dog-resting-on-green-260nw-1744113746.jpg' })}
        className=' btn btn-success'
      >+ img</button>


    </div>
  );
}

export default App;
