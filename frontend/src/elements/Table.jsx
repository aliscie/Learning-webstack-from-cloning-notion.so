import React, { useState, useEffect } from 'react'
import Longiest from '../hooks/MaxArr'
import './tablecss.css'

function Table({ i }) {
      const MaxArr = Longiest(i.table)

      return (
            <div>
                  <thead><tr>
                        {Object.keys(i.table).map(s => {
                              return (

                                    <th>{s}</th>
                              )
                        })}
                  </tr></thead>

                  <tbody>
                        {MaxArr.map(number => {
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
