import React, { useState } from 'react'
import '../css/style.css'

function Boxshape({ className }) {
      const [w, setW] = useState(100)
      const [h, setH] = useState(100)
      const [isDown, setisDown] = useState(false)

      function Handle({ className }) {

            const mouseOverHandler = () => {
                  console.log(`mouse over: ${className}`)
            }

            return (
                  <div
                        onMouseOver={mouseOverHandler}
                        className={`corner ${className}`}></div>
            )
      }

      return (
            <div

                  style={{ width: `${w}px`, height: `${h}px` }}
                  className='item'>
                  <div className='box'>
                        <Handle className='corner A' />
                        <Handle className='corner B' />
                        <Handle className='corner C' />
                        <Handle className='corner D' />
                  </div>
            </div>
      )
}

export default Boxshape
