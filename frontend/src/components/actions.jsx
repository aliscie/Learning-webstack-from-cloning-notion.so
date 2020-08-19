import React, { useState, useEffect } from 'react'
import useElements from '../apiHooks/useElements'
import useStyles from '../apiHooks/useStyles'
import 'antd/dist/antd.css';
import Button from './button'
import { useSpring, animated } from 'react-spring'

function Actions({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      const { GetByName, SsetPut, SsetDel, SsetPost } = useStyles()
      const [isover, setisover] = useState(false)


      const props = useSpring({ transform: isover ? 'scale(1)' : 'scale(0)' })
      function update(event, i) {
            put({ id: i.id, data: { text: `${event.target.innerText}` } });
      }

      function handlechange(e) {
            SsetPost({ name: `${i.id}`, style: { backgroundColor: 'red', color: 'blue' } });
            // put({ id: i.id, data: { style: `${SGet.name}` } });
      }

      return (
            <div
                  onClick={() => SsetPost({ name: `${i.id}`, style: { color: 'red' } })}
                  onMouseLeave={() => setisover(false)}
                  onMouseOver={() => setisover(true)}
                  style={{ display: 'flex' }}
            >

                  <animated.div style={props} ><Button i={i} /></animated.div>

                  <div
                        style={GetByName(i.id).map(i => { return JSON.parse(i.style) })[0]}
                  >
                        {
                              i.tag === 'img' ? <img id={i.id} src={i.src} /> :
                                    <div
                                          id={i.id}
                                          onKeyUp={(event) => update(event, i)}
                                          contentEditable='true'>
                                          {i.text}
                                    </div>
                        }
                  </div>
                  <input
                        onChange={handlechange}
                        type='number' style={{ width: '40px', height: '20px' }} />
            </div >
      )
}
export default Actions;