import React, { useState, useEffect } from 'react'
import './tablecss.css'

function Table({ i }) {
      const [longiest, setLong] = useState(0)
      let arr = []
      for (let m = 0; m <= longiest; m++) {
            arr.push(m)
      }
      console.log(arr)
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
                        {arr.map(number => {
                              return (
                                    <tr>
                                          {
                                                Object.keys(i.table).map(s => {
                                                      return <th>{i.table.[s][number]}</th>
                                                }
                                                )
                                          }

                                    </tr>
                              )
                        })

                        }

                  </tbody>
            </div>
      )
}

export default Table
