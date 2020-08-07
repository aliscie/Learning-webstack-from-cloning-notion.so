import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'
import ActionsButton from './button'
function Actions({ i }) {
      const { data, put, setid, deleting, SetnewPost } = useElements();
      function update(event, i) {
            put({ text: event.target.innerText });
            setid(i.id)
      }
      return (
            <div>
                  <ActionsButton i={i} />
                  <div
                        style={{ display: 'inline-block' }}
                        onKeyUp={(event) => update(event, i)}
                        contentEditable='true'>
                        {i.text}
                  </div>
            </div>
      )
}
export default Actions;