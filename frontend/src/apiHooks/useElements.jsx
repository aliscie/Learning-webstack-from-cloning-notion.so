import React, { useState, useEffect } from 'react'
import axios from 'axios'

const elementsApi = axios.create({ baseURL: 'http://127.0.0.1:8000/elements/' })
function useElements() {
      const [data, setState] = useState([])
      const [newData, put] = useState()
      const [id, setid] = useState()
      const [IDtoDelete, deleting] = useState()
      const [newPost, SetnewPost] = useState()
      useEffect(() => {
            elementsApi.put(`${id}/`, newData).then(res => console.log(res.data)).catch(err => err && console.log(err))
      }, [newData])

      useEffect(() => {
            if (IDtoDelete) {
                  elementsApi.delete(`${IDtoDelete}/`).then(res => console.log(res)).catch(err => err && console.log(err))
            }
      }, [IDtoDelete])

      useEffect(() => {
            if (newPost) {
                  elementsApi.post('', newPost).then(res => console.log(res)).catch(err => err && console.log(err))
            }
      }, [newPost])

      useEffect(() => {
            if (data) {
                  //problem when update a text the get function refresh the page and change the postion of the curter (typnig mouse curser)
                  elementsApi.get('').then(res => setState(res.data.filter(i => i.main == null))).catch(err => err && console.log(err))
            }
      }, [
            data
      ])

      return { data, put, setid, deleting, SetnewPost }

}
export default useElements;
