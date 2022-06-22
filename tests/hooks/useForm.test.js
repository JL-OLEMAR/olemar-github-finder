import { act, renderHook } from '@testing-library/react'

import { useForm } from '../../src/hooks/useForm.js'

describe('Tests in the hook useForm', () => {
  const initialState = { search: 'facebook' }

  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialState))

    expect(result.current).toEqual([
      { search: initialState.search },
      expect.any(Function),
      expect.any(Function)
    ])
  })

  test('should change the search field of the form', () => {
    const newSearch = 'angular'
    const { result } = renderHook(() => useForm(initialState))

    // Get the second value of the useForm
    const [, handleInputChange] = result.current

    // Act for the functions of the hooks
    act(() => {
      // name and value: for each form field required
      handleInputChange({ target: { name: 'search', value: newSearch } })
    })

    // Get the first value of the UPDATED useForm
    expect(result.current[0].search).toBe(newSearch)
  })

  test('should reset the form after a search', () => {
    const newSearch = 'angular'
    const { result } = renderHook(() => useForm(initialState))

    // Get the second and third value of the useForm
    const [, handleInputChange, reset] = result.current

    act(() => {
      handleInputChange({ target: { name: 'search', value: newSearch } })
      reset()
    })

    expect(result.current[0].search).toBe(initialState.search)
  })
})
