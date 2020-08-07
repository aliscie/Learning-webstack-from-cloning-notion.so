import React, { useState, useEffect } from 'react'
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
                              <div>
                                    {i.tag === 'img' ? <i.tag src={i.src} /> : <i.tag>{i.text}
                                          <div style={{ marginLeft: "20px" }}>
                                                {i.sub && <ItSelf data={i.sub} />}
                                          </div>
                                    </i.tag>}
                              </div>
                        )
                  })}
            </div>
      )

}
export default Recur;