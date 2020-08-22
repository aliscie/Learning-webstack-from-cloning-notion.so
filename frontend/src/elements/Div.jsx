import React from 'react'
import useElements from '../apiHooks/useElements'
import useStyles from '../apiHooks/useStyles'

function Div({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      const { GetByName, SsetPut, SsetDel, SsetPost } = useStyles()

      function update(event, i) {
            put({ id: i.id, data: { text: `${event.target.innerText}` } });
      }
      return (
            <div
                  id={i.id}
                  onKeyUp={(event) => update(event, i)}
                  onFocusCapture={(event) => (event.target.innerText === 'add new text') && (event.target.innerText = '')}
                  onBlur={(event) => (event.target.innerText === '') && (event.target.innerText = 'add new text')}
                  onMouseOver={(event) => event.target.focus()}
                  // onChange={(event) => (event.target.innerText === 'add new text') && setstyle('gray')}
                  contentEditable='true'
                  style={{ outline: 'none' }}
                  placeholder='text'
            >
                  {i.text}
            </div>
      )
}

export default Div;
