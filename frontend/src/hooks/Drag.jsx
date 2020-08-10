import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Drag(prop) {
      const [draged, setDraged] = useState(false)
      const [overed, setOvered] = useState(false)
      const props = useSpring({ backgroundColor: overed ? 'rgb(165, 222, 249,0.3)' : 'rgb(165, 222, 249,0)', display: draged ? 'none' : 'block' })


      return (
            <animated.div
                  draggable='true'
                  onDragStart={() => { setDraged(true) }}
                  onDragEnd={() => { setDraged(false) }}
                  onDragEnter={() => { setOvered(true) }}
                  onDragLeave={() => { setOvered(false) }}
                  style={props}
            >
                  {prop.childern}
            </animated.div>
      )
}

export default Drag
