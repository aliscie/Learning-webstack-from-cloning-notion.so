import React, { useState, useEffect } from 'react'
import Actions from './actions'
function ItSelf({ data }) {
      return (
            <div>
                  <Recur data={data} />
            </div>);

}
function Recur({ data }) {
      return (
            <div className='card container' >
                  {data.map(i => {
                        return (
                              <div>
                                    {i.tag === 'img' ? <i.tag src={i.src} /> : <Actions i={i} />}
                                    <div style={{ marginLeft: "20px" }}>
                                          {i.sub && <ItSelf data={i.sub} />}</div>
                              </div>
                        )
                  })}
            </div >
      )

}
export default Recur;