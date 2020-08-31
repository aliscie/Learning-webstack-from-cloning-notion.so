import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Boxshape from '../hooks/Boxshape'

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
      it('expect true', () => {
            const warper = shallow(<Boxshape />)
            const handel = warper.find('Handle.D').simulate('mousedown')
            expect(handel).toBe()
      })
})