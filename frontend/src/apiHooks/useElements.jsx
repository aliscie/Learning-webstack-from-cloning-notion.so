import React, { useState, useEffect } from 'react'
import axios from 'axios'

const elementsApi = axios.create({ baseURL: 'http://127.0.0.1:8000/elements/' })
function useElements() {
      const [data, setState] = useState([])
      const [newData, put] = useState({})
      const [IDtoDelete, deleting] = useState()
      const [newPost, SetnewPost] = useState()
      useEffect(() => {
            elementsApi.put(`${newData.id}/`, newData.data).then(res => console.log(res.data)).catch(err => err && console.log(err))
      }, [newData])

      useEffect(() => {
            if (IDtoDelete) {
                  elementsApi.delete(`${IDtoDelete}/`).then(res => console.log(res)).catch(err => err && console.log(err))
            }
      }, [IDtoDelete])

      useEffect(() => {
            //i use the if to prevent post from activating it self.
            if (newPost) {
                  elementsApi.post('', newPost).then(res => console.log(res)).catch(err => err && console.log(err))
            }
      }, [newPost])

      useEffect(() => {
            //       if (data) {
            //problem when update a text the get function refresh the page and change the postion of the curter (typnig mouse curser)
            //problem2: if I removed if statment it will not show new elements till refresh manually
            elementsApi.get('').then(res => setState(res.data.filter(i => i.main == null))).catch(err => err && console.log(err))
            //       }
      }, [
            // data
      ])

      return { data, put, deleting, SetnewPost }

}
export default useElements;
