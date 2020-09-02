import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useElements from '../apiHooks/useElements'
import { isDraging } from '../components/Boxshape'
function Drag({ i, childern, isDown }) {
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
            const elementid = e.target.children[0].children[0]
            e.dataTransfer.setData("name", elementid.className);
      };

      const onDrop = (e) => {
            setOvered(false)
            put({ id: e.dataTransfer.getData("name"), data: { main: `${e.target.className}` } })

      };

      return (
            <animated.div
                  draggable={`${!isDown}`}
                  onDragStart={onDragStart}
                  onDragEnd={() => { setDraged(false) }}
                  onDragEnter={() => { setOvered(true) }}
                  onDragLeave={() => { setOvered(false) }}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  style={props}
            >
                  {childern}
            </animated.div>
      )
}

export default Drag
