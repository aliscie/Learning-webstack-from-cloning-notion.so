import React, { useEffect } from 'react'
import useElements from '../apiHooks/useElements'

function AddImage({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      function update(event) {
            // console.log(event.target.value, i.id)
            put({ id: i.id });

            if (i.src) {
                  put({ data: { src: `${event.target.value}` } })
                  //problem: i don't know to to check if an i.src have a vild url
            } else if (!i.src) {
                  put({ data: { src: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' } })

            }
      }


      return (
            <div>
                  <input type='text' onChange={update} />
                  <img src={i.src} />
            </div>
      )
}
export default AddImage;