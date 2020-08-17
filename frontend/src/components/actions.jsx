import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'
import 'antd/dist/antd.css';
import Button from './button'
import { useSpring, animated } from 'react-spring'
function Actions({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      const [isover, setisover] = useState(false)
      // const [rad, setRad] = useState(null)

      const props = useSpring({ transform: isover ? 'scale(1)' : 'scale(0)' })
      function update(event, i) {
            put({ id: i.id, data: { text: `${event.target.innerText}` } });
      }
      return (
            <div

                  onMouseLeave={() => setisover(false)} onMouseOver={() => setisover(true)}
                  style={{ display: 'flex' }}            >
                  <animated.div style={props} ><Button i={i} /></animated.div>
                  {
                        i.tag === 'img' ? <img id={i.id} src={i.src} /> :
                              <div
                                    id={i.id}
                                    onKeyUp={(event) => update(event, i)}
                                    contentEditable='true'>
                                    {i.text}
                              </div>
                  }
                  <input onChange={e => put({ id: i.id, data: { style: { borderRadius: `${e.target.value}px`, background: 'grey' } } })} type='number' style={{ width: '40px', height: '20px' }} />
            </div >
      )
}
export default Actions;