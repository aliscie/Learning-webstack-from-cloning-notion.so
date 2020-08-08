import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'

import { Select } from 'antd';

const { Option } = Select;
function ActionsButton({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();

      function update(event) {
            put({ id: i.id, data: { src: `${event.target.value}` } })

      }

      function onChange(value) {
            value == 'delete' && deleting(i.id)
            value == 'create sub' && SetnewPost({ tag: 'div', text: 'add new text', main: `${i.id}` })
            value == 'create' && SetnewPost({ tag: 'div', text: 'add new text', main: `${i.main}` })
            value == 'sub image' && SetnewPost({ tag: 'img', src: 'https://voxpopulii.in/system/static/dashboard/img/default_user.png', main: `${i.id}` })

      }

      function onBlur() {
            console.log('blur');
      }

      function onFocus() {
            console.log('focus');
      }

      function onSearch(val) {
            console.log('search:', val);
      }

      return (

            <Select
                  bordered={false}
                  filterOption={(input, option) => { console.log(input, option) }
                  }
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                        //.toLowerCase() dont' work?
                        option.children.indexOf(input.toLowerCase()) >= 0
                  }
                  showSearch
                  defaultValue="options" style={{ width: 120 }}>
                  <Option
                        className='btn btn-danger'
                        value="delete">delete</Option>
                  <Option value="create sub">create sub</Option>
                  <Option value="create" >
                        create </Option>
                  <Option value="sub image" >
                        sub image </Option>
                  {i.src && <Option value="url"  >
                        <input onChange={(event) => {
                              put({ id: i.id, data: { src: `${event.target.value}` } })
                        }} />
                  url</Option>}
            </Select>
      )
}
export default ActionsButton;