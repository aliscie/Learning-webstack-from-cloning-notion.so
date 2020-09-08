import React, { useState, useEffect } from 'react'
import Longiest from '../hooks/MaxArr'
import './tablecss.css'
import useElements from '../apiHooks/useElements'

function Table({ i }) {
      console.log(i)
      return (
            <div >
                  <h1 style={{ outline: '2px solid black' }}>{i.text}</h1>
            </div>
      )
}

export default Table
