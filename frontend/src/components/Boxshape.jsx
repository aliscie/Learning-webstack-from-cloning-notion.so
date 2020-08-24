import React, { useState } from 'react'
import '../css/style.css'

function Boxshape({ className }) {
      const [w, setW] = useState(100)
      const [h, setH] = useState(100)
      const [isDown, setisDown] = useState(false)
      const [dowPostion, setpostion] = useState({})
      function handledown(e) {
            setisDown(true)
            setpostion({ prex: e.clientX, prey: e.clientY })
      }

      function Handle({ className }) {

            const mouseOverHandler = (e) => {
                  if (isDown) {
                        setW(w - (dowPostion.prex - e.clientX))
                        setH(h - (dowPostion.prey - e.clientY))
                        setpostion({ prex: e.clientX, prey: e.clientY })

                        // className == 'corner D' && setH(pre => { return pre - (prex - x) })
                  }
            }

            return (
                  <div
                        onMouseDown={handledown}
                        onMouseUp={() => setisDown(false)}
                        onMouseMove={mouseOverHandler}
                        className={`corner ${className}`}
                  ></div>
            )
      }

      return (
            <div

                  style={{ width: `${w}px`, height: `${h}px` }}
                  className='item'>
                  <div className='box'>
                        <Handle className='A' />
                        <Handle className='B' />
                        <Handle className='C' />
                        <Handle className='D' />
                  </div>
            </div>
      )
}

export default Boxshape
