import React, { useState, useEffect } from 'react'

function Longiest(i) {
      const [longiest, setLong] = useState(0)

      let arr = []
      for (let m = 0; m < longiest; m++) {
            arr.push(m)
      }
      useEffect(() => {
            Object.keys(i).map(column => {
                  longiest < i.[column].length && setLong(i.[column].length)
            })
      }, [longiest])
      return arr
}
export default Longiest