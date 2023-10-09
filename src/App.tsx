import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/main/Main.tsx'
import MovieDetails from './pages/movieDetails/MovieDetails.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/movie/:id',
    element: <MovieDetails />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
