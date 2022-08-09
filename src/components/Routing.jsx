import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Results } from './Results'

export const Routing = () => {

  
  return (
      <Routes>
        <Route exact path='/' element={ <Navigate to="/search" /> }/>
  
        <Route path='/search' element={ <Results/>}/>
        <Route path='/images' element={ <Results/>}/>
        <Route path='/news' element={ <Results/>}/>
        <Route path='/videos' element={ <Results/>}/>
      </Routes>
  )
}


