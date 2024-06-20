import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { ClothesCategory, TechCategory, ProductDetails, AllCategories } from './pages'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './lib/apollo'


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<AllCategories />} />
              <Route path='/tech' element={<TechCategory />} />
              <Route path='/clothes' element={<ClothesCategory />} />
            <Route path='product/:id' element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}
