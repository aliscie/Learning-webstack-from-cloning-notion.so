import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'

function ActionsButton({ i }) {
      const { data, put, setid, deleting, SetnewPost } = useElements();
      const [mouseover1, setmouseover1] = useState(false)
      const [mouseover2, setmouseover2] = useState(false)
      const [mouseover3, setmouseover3] = useState(false)




      return (
            <div
                  style={{ display: 'inline-block' }}
            //how to set the buttons on the left side?
            >
                  <button
                        onClick={() => deleting(i.id)}
                        onMouseLeave={() => setmouseover1(false)}
                        onMouseOver={() => setmouseover1(true)}
                        style={{ opacity: mouseover1 ? '1' : '0.1' }}
                        className='btn btn-danger'
                  >-</button>
                  <button
                        onClick={() => SetnewPost({ tag: 'div', text: 'add new text', main: `${i.id}` })}
                        onMouseLeave={() => { setmouseover2(false) }}
                        onMouseOver={() => { setmouseover2(true) }}
                        style={{ opacity: mouseover2 ? '1' : '0.1' }}
                        className='btn btn-success'
                  >+</button>
                  <button
                        onClick={() => SetnewPost({ tag: 'img', src: 'https://image.shutterstock.com/image-photo/samoyed-dog-resting-on-green-260nw-1744113746.jpg', main: `${i.id}` })}
                        onMouseLeave={() => { setmouseover3(false) }}
                        onMouseOver={() => { setmouseover3(true) }}
                        style={{ opacity: mouseover3 ? '1' : '0.1' }}
                        className='btn btn-success'
                  >+sub img</button>
            </div>
      )
}
export default ActionsButton;