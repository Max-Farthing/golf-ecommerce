import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Roots'
import HomePage from './pages/HomePage'
import GolfBallsPage from './pages/GolfBalls'
import GolfClubsPage from './pages/GolfClubs'
import GolfBagsPage from './pages/GolfBags'
import GolfTechPage from './pages/GolfTech'
import ProductDetailsPage from './pages/ProductDetails'
import LogInPage from './pages/LogIn'
import NewAccountPage from './pages/NewAccount'
import Cart from './pages/CartPage'

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
          { path: ':category/:productId', element: <ProductDetailsPage />}
        ]
      },
      {
        path: 'login',
        children: [
          { index: true, element: <LogInPage /> },
          { path: 'create', element: <NewAccountPage /> }
        ]
      },
      {
        path: 'cart',
        children: [
          { index: true, element: <Cart /> }
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
