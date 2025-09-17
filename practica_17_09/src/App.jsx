
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MoviesContainer from './components/MovieContainerCard/MoviesContainer'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={  <MoviesContainer/>}/>
      <Route path='/:id' element={<MovieDetail />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
