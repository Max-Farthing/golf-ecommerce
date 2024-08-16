import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Roots'
import HomePage from './pages/HomePage'
import GolfBallsPage from './pages/GolfBalls'
import GolfClubsPage from './pages/GolfClubs'
import GolfBagsPage from './pages/GolfBags'
import GolfTechPage from './pages/GolfTech'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      {
        path: 'products',
        children: [
          { path: 'golfBalls', element: <GolfBallsPage /> },
          { path: 'golfClubs', element: <GolfClubsPage /> },
          { path: 'golfBags', element: <GolfBagsPage /> },
          { path: 'golfTech', element: <GolfTechPage /> },

        ]
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
