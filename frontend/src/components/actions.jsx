import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'
function Actions({ i }) {
      const { data, put, setid, deleting, SetnewPost } = useElements();
      function update(event, i) {
            put({ text: event.target.innerText });
            setid(i.id)
      }
      return (
            <div>

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