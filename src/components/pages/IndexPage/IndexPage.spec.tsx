import React from 'react'
import IndexPage from './IndexPage'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('IndexPage', () => {
  it('should render', () => {
    const wrapper = render(
      <BrowserRouter>
        <IndexPage />
      </BrowserRouter>
    )

    expect(wrapper).toBeTruthy()
  })
})
