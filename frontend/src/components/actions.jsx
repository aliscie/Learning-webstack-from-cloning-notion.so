import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'
import 'antd/dist/antd.css';
import Button from './button'
import { useSpring, animated } from 'react-spring'
function Actions({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      const [isover, setisover] = useState(false)
      const props = useSpring({ transform: isover ? 'scale(1)' : 'scale(0)' })
      function update(event, i) {
            put({ id: i.id, data: { text: `${event.target.innerText}` } });
      }
      return (
            <div


                  onMouseLeave={() => setisover(false)} onMouseOver={() => setisover(true)}
                  style={{ paddingLeft: "200px", flexGrow: '1', display: 'flex', alignItems: 'center' }}>
                  <animated.div style={props} ><Button i={i} /></animated.div>
                  {
                        i.tag === 'img' ? <img id={i.id} src={i.src} /> :
                              <div
                                    id={i.id}
                                    style={{ maxWidth: '100%', width: '100%', whiteSpace: 'pre-warp', wordBreak: 'break-all', padding: '3px 2px', outline: 'none' }}
                                    onKeyUp={(event) => update(event, i)}
                                    contentEditable='true'>
                                    {i.text}{' '}{i.id}
                              </div>
                  }

            </div>
      )
}
export default Actions;