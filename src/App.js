import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from './components'
import { Categories, ProductDetails } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' Component={Categories}/>

          <Route path='/women' Component={Categories}/>
          <Route path='/men' Component={Categories}/>
          <Route path='/kids' Component={Categories}/>

          <Route path='/:id' Component={ProductDetails} />
        </Routes>
      </BrowserRouter>
    )
  }
}
