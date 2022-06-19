import { fireEvent, render, screen } from '@testing-library/react'

import { UserSearch } from '../../../src/components/users/UserSearch.jsx'

describe('Tests in <UserSearch />', () => {
  const inputValue = 'facebook'
  const onGetUsers = jest.fn()
  const onUISetAlert = jest.fn()

  beforeEach(() => {
    render(<UserSearch onGetUsers={onGetUsers} onUISetAlert={onUISetAlert} />)
  })

  test('should change the value of the input', () => {
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: inputValue } })
    expect(input.value).toBe(inputValue)
  })

  test('should call onGetUsers if input has a value', () => {
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } }) // change the value of the input === onChange
    fireEvent.submit(form)

    expect(onGetUsers).toHaveBeenCalledTimes(1)
    expect(onGetUsers).toHaveBeenCalledWith(inputValue)
    expect(onUISetAlert).not.toHaveBeenCalled()
    expect(input.value).toBe('')
  })

  test('should call onUISetAlert if the input is empty', () => {
    const form = screen.getByRole('form')

    fireEvent.submit(form)
    expect(onUISetAlert).toHaveBeenCalled()
    expect(onUISetAlert).toHaveBeenCalledWith('Please enter something', 'error')
    // expect(onGetUsers).not.toHaveBeenCalled() // TODO: reset mocks
  })
})
