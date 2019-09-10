import React from 'react'
import ArticleListPage from './ArticleListPage'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('ArticleListPage', () => {
  it('should render', () => {
    const wrapper = render(
      <BrowserRouter>
        <ArticleListPage />
      </BrowserRouter>
    )

    expect(wrapper).toBeTruthy()
  })
})
