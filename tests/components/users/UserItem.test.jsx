import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import { UserItem } from '../../../src/components/users/UserItem.jsx'

describe('Tests in <UserItem />', () => {
  const user = {
    login: 'JL-OLEMAR',
    avatar_url: 'https://avatars.githubusercontent.com/u/71868068?v=4'
  }

  test('should match the snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <UserItem user={user} />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })

  test('should show the image with URL and ALT correctly', () => {
    render(
      <MemoryRouter>
        <UserItem user={user} />
      </MemoryRouter>
    )

    const { src, alt } = screen.getByRole('img')

    expect(src).toBe(user.avatar_url)
    expect(alt).toBe(`${user.login} Profile`)
  })

  test('should show the title with the user login correctly', () => {
    render(
      <MemoryRouter>
        <UserItem user={user} />
      </MemoryRouter>
    )

    expect(screen.getByText(user.login)).toBeTruthy()
  })

  test('should show the href of the link correctly', () => {
    render(
      <MemoryRouter>
        <UserItem user={user} />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link').getAttribute('href')

    expect(linkElement).toBe(`/user/${user.login}`)
  })
})
