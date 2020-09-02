import React, { useState, useEffect } from 'react'
import Actions from './actions'
import Drag from '../hooks/Drag'

function ItSelf({ data }) {
      return (
            <div>
                  <Recur data={data} />
            </div>);

}
function Recur({ data }) {
      return (
            <div>
                  {data.map(i => {
                        return (
                              <Drag i={i} childern={
                                    <div>
                                          <Actions i={i} />
                                          <div style={{ marginLeft: "20px" }}>
                                                {i.sub && <ItSelf data={i.sub} />}</div>
                                    </div>} />
                        )
                  })}
            </div >
      )

}
export default Recur;