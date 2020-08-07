import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'

function Actions({ i }) {
      const { data, put, setid, deleting, SetnewPost } = useElements();
      function update(event, i) {
            put({ text: event.target.innerText });
            setid(i.id)
      }
      return (
            <div
                  onKeyUp={(event) => update(event, i)}
                  contentEditable='true'>
                  {i.text}
            </div>
      )
}
export default Actions;