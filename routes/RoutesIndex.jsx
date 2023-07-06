import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MovieTemp } from '../pages/MovieTemp'
import { NotFound } from '../pages/NotFound'

export const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/MoviePage' element={<MovieTemp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
