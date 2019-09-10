import React from 'react'
import AppHeader from './AppHeader'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RootProvider } from '../../../store/context/RootContext'

describe('AppHeader', () => {
  it('should render', () => {
    const wrapper = render(
      <RootProvider>
        <BrowserRouter>
          <AppHeader />
        </BrowserRouter>
      </RootProvider>
    )

    expect(wrapper).toBeTruthy()
  })
})
