import React, { useState } from 'react'
import '../css/style.css'

function Boxshape({ className, Items, i }) {
      console.log(document.getElementById(i.id))
      const [V, setV] = useState({ w: 'auto', h: 'auto', t: 0, l: 15 })
      const [isDown, setisDown] = useState(false)
      const [isover, setover] = useState(false)

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
                                    w: document.getElementById(i.id).offsetWidth - (dowPostion.prex - e.clientX),
                                    h: document.getElementById(i.id).offsetHeight - (dowPostion.prey - e.clientY)
                              })
                        }
                        if (className === 'C') {
                              setV({
                                    w: document.getElementById(i.id).offsetWidth + (dowPostion.prex - e.clientX),
                                    h: document.getElementById(i.id).offsetHeight - (dowPostion.prey - e.clientY),
                                    l: V.l - (dowPostion.prex - e.clientX)
                              })
                        }
                        if (className === 'B') {
                              setV({
                                    w: document.getElementById(i.id).offsetWidth - (dowPostion.prex - e.clientX),
                                    h: document.getElementById(i.id).offsetHeight + (dowPostion.prey - e.clientY),
                                    t: V.t - (dowPostion.prey - e.clientY)
                              })
                        }
                        if (className === 'A') {
                              setV({
                                    w: document.getElementById(i.id).offsetWidth + (dowPostion.prex - e.clientX),
                                    h: document.getElementById(i.id).offsetHeight + (dowPostion.prey - e.clientY),
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
                  style={{ width: V.w, height: V.h, top: `${V.t}px`, left: `${V.l}px`, borderColor: 'red', border: isover ? 'inset' : 'none' }}
                  onMouseOver={() => setover(true)}
                  onMouseLeave={() => setover(false)}
                  className='item'
            >
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
