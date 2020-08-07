import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'

function ActionsButton({ i }) {
      const { data, put, setid, deleting, SetnewPost } = useElements();
      const [mouseover1, setmouseover1] = useState(false)
      const [mouseover2, setmouseover2] = useState(false)




      return (
            <div
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
            </div>
      )
}
export default ActionsButton;