import React, { useEffect, useState } from 'react';
import useElements from './apiHooks/useElements'
import Recur from './components/recursion'

function App() {
  const { data, put, deleting, SetnewPost } = useElements();


  return (
    <div
      style={{ paddingLeft: "200px", flexGrow: '1', alignItems: 'center' }}>
      <Recur data={data} />
      <button
        onClick={() => SetnewPost({ tag: 'div', text: 'add new text', style: { borderRadius: '5px', backgroundColor: 'orange' } })}
        className=' btn btn-success'
      >+ parent</button>
      <button
        onClick={() => SetnewPost({ tag: 'table' })}
        className=' btn btn-success'
      >+ table</button>
      <button
        onClick={() => SetnewPost({ tag: 'img', src: 'https://image.shutterstock.com/image-photo/samoyed-dog-resting-on-green-260nw-1744113746.jpg' })}
        className=' btn btn-success'
      >+ img</button>


    </div >
  );
}

export default App;
