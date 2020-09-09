import React, { useState, useEffect } from 'react'
import Longiest from '../hooks/MaxArr'
import './tablecss.css'
import useElements from '../apiHooks/useElements'

function Table({ i }) {

      function Cell({ elements }) {
            return (
                  <div style={{ display: 'flex' }}>
                        {elements.map(cell => {
                              return (
                                    <div style={{ border: '2px solid black', padding: '5px', width: '100px' }}>
                                          {cell}
                                    </div>
                              )
                        })}
                  </div>
            )
      }

      return (
            <div >
                  {!i.main && <h1>{i.table}</h1>}
                  {i.table.columns && <h4><Cell elements={i.table.columns} /></h4>}
                  {i.table.cells && <Cell elements={i.table.cells} />}
            </div>
      )
}

export default Table
