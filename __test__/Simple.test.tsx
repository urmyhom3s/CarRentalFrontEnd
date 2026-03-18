import ReservationMenu from '@/components/ReservationMenu'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Banner from '@/components/Banner'
describe('ReservationMenu', () => {
  it('should have title', () => {
    // Arrange
    render(<ReservationMenu />)

    // Act
    const bannerText = screen.getByText('Sub-Menu Here')

    // Assert
    expect(bannerText).toBeInTheDocument()
  })
})

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
    status: 'unauthenticated',
  }),
}))

describe('ReservationMenu', () => {
  it('should have title', () => {
    render(<ReservationMenu />)
    const bannerText = screen.getByText('Sub-Menu Here')
    expect(bannerText).toBeInTheDocument()
  })
})

describe('Banner', () => {
  it('should show banner title', () => {
    render(<Banner />)

    const title = screen.getByText('Your Travel Partner')
    expect(title).toBeInTheDocument()
  })

  it('should change image src to cover2.jpg after one click', async () => {
    render(<Banner />)

    const image = screen.getByRole('img')
    await userEvent.click(image)

    expect(image).toHaveAttribute('src', expect.stringContaining('cover2.jpg'))
  })

  it('should loop image when clicking multiple times', async () => {
    render(<Banner />)

    const image = screen.getByRole('img')

    await userEvent.click(image)
    expect(image).toHaveAttribute('src', expect.stringContaining('cover2.jpg'))

    await userEvent.click(image)
    expect(image).toHaveAttribute('src', expect.stringContaining('cover3.jpg'))
  })
})