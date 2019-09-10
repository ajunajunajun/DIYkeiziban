import React from 'react'
import SideBar from './SideBar'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('SideBar', () => {
  it('should render', () => {
    const wrapper = render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    )

    expect(wrapper).toBeTruthy()
  })
})
