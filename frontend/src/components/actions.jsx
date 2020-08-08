import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'
// import AddImage from './image'
import ActionsButton from './button'

import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';

function Actions({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();

      function update(event, i) {
            put({ id: i.id, data: { text: `${event.target.innerText}` } });
      }
      const content = (
            <div>
                  <ActionsButton i={i} />
            </div>
      )

      return (
            <Popover placement="rightBottom" trigger='click' content={content}>

                  {i.tag === 'img' ? <div>
                        <img src={i.src} />
                  </div> :

                        <div
                              // problem: JSON.parse(i.style) return undifinde.
                              // should I use PostgreSQL and use JSONField?
                              onClick={() => { console.log(i.id) }}
                              style={{ display: 'inline-block' }}
                              onKeyUp={(event) => update(event, i)}
                              contentEditable='true'>
                              {i.text}
                        </div>}
            </Popover>
      )
}
export default Actions;