import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'
import AddImage from './image'
function Actions({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      function update(event, i) {
            put({ data: { text: event.target.innerText } });
            put({ id: i.id })
      }

      return (
            <div>
                  {i.tag === 'img' ? <AddImage i={i} /> :

                        <div
                              // problem: JSON.parse(i.style) return undifinde.
                              // should I use PostgreSQL and use JSONField?
                              onClick={() => { console.log(i.style) }}
                              style={{ display: 'inline-block' }}
                              onKeyUp={(event) => update(event, i)}
                              contentEditable='true'>
                              {i.text}
                        </div>}
            </div>
      )
}
export default Actions;