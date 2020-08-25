import React, { useState } from 'react'
import '../css/style.css'

function Boxshape({ className }) {
      const [S, setS] = useState({ w: 100, h: 100 })
      const [isDown, setisDown] = useState(false)
      const [dowPostion, setpostion] = useState({})
      function handledown(e) {
            setisDown(true)
            setpostion({ prex: e.clientX, prey: e.clientY })
      }

      function Handle({ className }) {

            const mouseOverHandler = (e) => {
                  if (isDown) {
                        setS({
                              w: S.w - (dowPostion.prex - e.clientX),
                              h: S.h - (dowPostion.prey - e.clientY)
                        })
                        setpostion({ prex: e.clientX, prey: e.clientY })
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

                  style={{ width: `${S.w}px`, height: `${S.h}px` }}
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
