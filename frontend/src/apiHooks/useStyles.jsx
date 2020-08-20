
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const stylesApi = axios.create({ baseURL: 'http://127.0.0.1:8000/styles/' })

function useStyles() {
      const [Get, SsetGet] = useState([])
      const [SPut, SsetPut] = useState({})
      const [SDel, SsetDel] = useState()
      const [SPost, SsetPost] = useState()


      useEffect(() => {
            if (SPost) {
                  stylesApi.post('', SPost).then(res => console.log(res)).catch(err => err && console.log(err))
            }
      }, [SPost])

      useEffect(() => {
            stylesApi.get('').then(res => SsetGet(res.data)).catch(err => err && console.log(err))

      }, [])

      useEffect(() => {
            if (SDel) {
                  stylesApi.delete(`${SDel}/`).then(res => console.log(res)).catch(err => err && console.log(err))
            }
      }, [SDel])

      function GetByName(name) {
            return Get.filter(i => i.name === `${name}`)
      }

      return { GetByName, SsetPut, SsetDel, SsetPost }

}
export default useStyles;