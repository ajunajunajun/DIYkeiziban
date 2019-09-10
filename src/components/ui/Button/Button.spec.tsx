import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from './Button'
import { Link, BrowserRouter } from 'react-router-dom'

describe('Button', () => {
  it('should render', () => {
    const wrapper = render(<Button />)

    expect(wrapper).toBeTruthy()
  })
  describe('<Button size />', () => {
    const allowedSizes = ['small', 'medium', 'large']
    allowedSizes.forEach(size =>
      it(`${size} is available`, () => {
        const { getByTestId } = render(<Button size={size} />)

        expect(getByTestId(`test-c-button--${size}`)).toBeTruthy()
      })
    )
  })
  describe('<Button as />', () => {
    it('should render as Link', () => {
      const wrapper = render(
        <BrowserRouter>
          <Button as={Link} to="#foo" />
        </BrowserRouter>
      )

      expect(wrapper).toBeTruthy()
    })
  })
  describe('<Button onClick />', () => {
    it('should execute `onClick` when clicked the button', () => {
      const callback = jest.fn()
      const { getByText } = render(<Button onClick={callback}>test</Button>)

      fireEvent.click(getByText('test'))

      expect(callback).toHaveBeenCalledTimes(1)
    })
  })
})
