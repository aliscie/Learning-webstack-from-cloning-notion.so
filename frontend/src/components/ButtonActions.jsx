import React, { useState } from 'react'
import useElements from '../apiHooks/useElements'
import { Select } from 'antd';
import useStyles from '../apiHooks/useStyles';
import { configConsumerProps } from 'antd/lib/config-provider';

const { Option } = Select;

function ButtonActions({ i }) {
      const { data, put, deleting, SetnewPost } = useElements();
      const { GetByName, SsetPut, SsetDel, SsetPost } = useStyles()

      function update(event) {
            put({ id: i.id, data: { src: `${event.target.value}` } })
      }

      function recureDelete(y) {
            y.map(y => {
                  Delete(y)
            })
      }

      function Delete(x) {
            //delete all child element
            //but can't delete parents.
            const promise1 = new Promise((resolve, reject) => {
                  if (x.sub.length > 0) { recureDelete(x.sub) }
                  else { resolve(x) }
            });

            promise1.then((x) => {
                  deleting(x.id)
            });

      }

      function onChange(value) {
            value == 'delete' && Delete(i);
            value == 'create sub' && SetnewPost({ tag: 'div', text: 'add new text', main: `${i.id}` })
            value == 'create' && SetnewPost({ tag: 'div', text: 'add new text', main: `${i.main}` })
            value == 'sub image' && SetnewPost({ tag: 'img', src: 'https://voxpopulii.in/system/static/dashboard/img/default_user.png', main: `${i.id}` })
      }

      function onBlur() {
            // console.log('blur');
      }

      function onFocus() {
            // console.log('focus');
      }

      function onSearch(val) {
            // console.log('search:', val);
      }

      return (

            <Select
                  // autoFocus={true}
                  showSearch
                  bordered={false}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                        option.children.indexOf(input.toLowerCase()) >= 0
                  }
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
export default ButtonActions;