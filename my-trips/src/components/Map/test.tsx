import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    const { container } = render(<Map />)
    render(<Map />)

    expect(
      container.querySelector(
        '#sandbox > div > div > div:nth-child(1) > div:nth-child(1) > div > div'
      )
    )
  })

  it('should render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Toledo',
      slug: 'toledo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/toledo/i)).toBeInTheDocument()
  })
})
