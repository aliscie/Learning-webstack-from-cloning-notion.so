import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useElements from '../apiHooks/useElements'

function Drag(prop) {
      const { data, put, deleting, SetnewPost } = useElements();
      const [draged, setDraged] = useState(false)
      const [overed, setOvered] = useState(false)
      const props = useSpring({ backgroundColor: overed ? 'rgb(165, 222, 249,0.3)' : 'rgb(165, 222, 249,0)' })
      // display: draged ? 'none' : 'block'

      const onDragOver = e => {
            e.preventDefault();
      };

      const onDragStart = (e) => {
            setDraged(true);
            //if the user drag the butten then  e.target.childNodes[0].lastChild.id
            //if the user drag the object it self liek draging the image then e.target.id
            // console.log(e.target.id ? e.target.id : e.target.children[0].id)
            const elementid = e.target.id ? e.target.id : e.target.children[0].id
            e.dataTransfer.setData("name", elementid);
      };

      const onDrop = (e) => {
            setOvered(false)
            put({ id: e.dataTransfer.getData("name"), data: { main: `${e.target.id}` } })

      };


      return (
            <animated.div
                  // draggable='true'
                  onDragStart={onDragStart}
                  onDragEnd={() => { setDraged(false) }}
                  onDragEnter={() => { setOvered(true) }}
                  onDragLeave={() => { setOvered(false) }}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  style={props}
            >
                  {prop.childern}
            </animated.div>
      )
}

export default Drag
