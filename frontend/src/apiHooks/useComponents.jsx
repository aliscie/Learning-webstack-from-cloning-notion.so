import React, { useState, useState }
import axios from 'axios'
const componentsApi = axios.create({ baseURL: 'http://127.0.0.1:8000/components/' })
componentsApi.get('').then((res) => res.data.filter(i => i.main == null))
function useElements() {

}
export default useElements;