
import React, { useState, useState }
import axios from 'axios'
const stylesApi = axios.create({ baseURL: 'http://127.0.0.1:8000/styles/' })
stylesApi.get('').then((res) => res.data.filter(i => i.main == null))
function useElements() {

}
export default useElements;