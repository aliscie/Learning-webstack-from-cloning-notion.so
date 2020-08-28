import React, { useState } from 'react'
import '../css/style.css'

function Boxshape({ className, Items, i }) {
      // console.log(document.getElementById(i.id).offsetHeight)
      const [V, setV] = useState({ w: null, h: null, t: 0, l: 15 })
      const [isDown, setisDown] = useState(false)
      const [dowPostion, setpostion] = useState({})


      function handledown(e) {

            setisDown(true)
            setpostion({ prex: e.clientX, prey: e.clientY })
      }

      function Handle({ className }) {

            const mouseOverHandler = (e) => {
                  console.log(className)
                  if (isDown) {
                        if (className === 'D') {
                              setV({
                                    w: V.w - (dowPostion.prex - e.clientX),
                                    h: V.h - (dowPostion.prey - e.clientY)
                              })
                        }
                        if (className === 'C') {
                              setV({
                                    w: V.w + (dowPostion.prex - e.clientX),
                                    h: V.h - (dowPostion.prey - e.clientY),
                                    l: V.l - (dowPostion.prex - e.clientX)
                              })
                        }
                        if (className === 'B') {
                              setV({
                                    w: V.w - (dowPostion.prex - e.clientX),
                                    h: V.h + (dowPostion.prey - e.clientY),
                                    t: V.t - (dowPostion.prey - e.clientY)
                              })
                        }
                        if (className === 'A') {
                              setV({
                                    w: V.w + (dowPostion.prex - e.clientX),
                                    h: V.h + (dowPostion.prey - e.clientY),
                                    t: V.t - (dowPostion.prey - e.clientY),
                                    l: V.l - (dowPostion.prex - e.clientX)
                              })
                        }
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
                  id={i.id}
                  // style={{ width: `${V.w}px`, height: `${V.h}px`, top: `${V.t}px`, left: `${V.l}px` }}
                  className='item'>
                  <div className='box'>
                        <Items />
                        <Handle className='A' />
                        <Handle className='B' />
                        <Handle className='C' />
                        <Handle className='D' />
                  </div>
            </div>
      )
}

export default Boxshape
