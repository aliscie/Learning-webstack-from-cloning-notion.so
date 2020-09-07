import React, { useState, useEffect } from 'react'
import Longiest from '../hooks/MaxArr'
import './tablecss.css'
import useElements from '../apiHooks/useElements'

function Table({ i }) {
      const MaxArr = Longiest(i.table)
      const { data, put, deleting, SetnewPost } = useElements();

      function Th({ Val, s, number }) {
            function onKeyUp(e) {
                  const values = i.table
                  values.[s][number] = e.target.innerText
                  console.log(values)
                  // console.log(e.target, Val, s, number)
                  put({ id: i.id, data: { table: values } })

            }
            return (
                  <th
                        contentEditable='true'
                        onKeyUp={onKeyUp}
                  >
                        {Val}
                  </th>
            )
      }
      return (
            <div>
                  <thead><tr>
                        {Object.keys(i.table).map((s, index) => {
                              return (

                                    <Th index={index} key={i.id} Val={s} />
                              )
                        })}
                  </tr></thead>

                  <tbody>
                        {MaxArr.map(number => {
                              return (
                                    <tr>

                                          {
                                                Object.keys(i.table).map((s, index) => {
                                                      return <Th s={s} number={number} Val={i.table.[s][number]} />
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
