import React, { useState, useEffect } from 'react'
import Longiest from '../hooks/MaxArr'
import './tablecss.css'
import useElements from '../apiHooks/useElements'

function Table({ i }) {

      function Cells({ content }) {
            const tableStyle = { outline: '1px solid black', paddingRight: '5px', paddingLeft: '4px' }

            return (
                  <div
                        style={tableStyle}
                        contentEditable="true"
                  >{content}</div>
            )
      }
      return (
            <div >
                  <h1>{i.text}</h1>
                  {i.sub.map(column => {
                        return (

                              <div style={{ display: 'inline-block' }}>
                                    <div style={{ color: 'gray' }}> <Cells content={column.text} /></div>
                                    {column.sub.map((cell) => {
                                          return (
                                                <Cells content={cell.text} />
                                          )
                                    })}

                              </div>

                        )
                  })
                  }



            </div>
      )
}

export default Table
