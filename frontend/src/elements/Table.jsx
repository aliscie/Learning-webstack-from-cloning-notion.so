import React, { useState, useEffect } from 'react'
import './tablecss.css'

function Table({ i }) {
      const [longiest, setLong] = useState(0)
      const [m, setM] = useState(0)

      useEffect(() => {
            for (let m = 3; m >= 0; m--) {
                  setM(m)
            }
      }, [m])

      useEffect(() => {
            Object.keys(i.table).map(i => {
                  longiest < i.length && setLong(i.length)
                  console.log('longiest ' + longiest)
            })
      }, [longiest])



      return (
            <div>
                  <thead><tr>
                        {Object.keys(i.table).map(i => {
                              return (

                                    <th>{i}</th>
                              )
                        })}
                  </tr></thead>
                  <tbody>
                        <tr>
                              {
                                    Object.keys(i.table).map(s => {
                                          return <th>{i.table.[s][m]}</th>
                                    }
                                    )
                              }
                        </tr>
                  </tbody>
            </div>
      )
}

export default Table
