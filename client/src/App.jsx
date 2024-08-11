import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../pages/Roots'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
