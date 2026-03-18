import { render, screen, waitFor } from '@testing-library/react'
import CarCatalog from '@/components/CarCatalog'

describe('CarCatalog', () => {
  it('should have correct number of car images', async () => {
    const mockResult = {
      success: true,
      count: 2,
      data: [
        {
      "_id": "69b3d0727c88cf16b3cea803",
      "model": "Accord",
      "description": "Honda Accord",
      "picture": "https://drive.google.com/uc?id=1Vsq3yGo0TbJtNnD-Q-GmIKEPhi774W_O",
      "seats": 4,
      "doors": 4,
      "largebags": 2,
      "smallbags": 2,
      "automatic": true,
      "dayRate": 2500,
      "__v": 0,
      "id": "69b3d0727c88cf16b3cea803"
    },
        {
      "_id": "69b3d0727c88cf16b3cea803",
      "model": "Accord",
      "description": "Honda Accord",
      "picture": "https://drive.google.com/uc?id=1Vsq3yGo0TbJtNnD-Q-GmIKEPhi774W_O",
      "seats": 4,
      "doors": 4,
      "largebags": 2,
      "smallbags": 2,
      "automatic": true,
      "dayRate": 2500,
      "__v": 0,
      "id": "69b3d0727c88cf16b3cea803"
    },
      ],
    }

    const carCatalog = await CarCatalog({ carJson: mockResult })
    render(carCatalog)

    await waitFor(() => {
      const carImages = screen.queryAllByRole('img')
      expect(carImages.length).toBe(2)
    })
  })
})