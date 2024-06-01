import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Categories, KidsCategories, MenCategories, ProductDetails, WomenCategories } from './pages'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './lib/apollo'


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Categories />}>
              <Route index element={<WomenCategories />} />
              <Route path='men' element={<MenCategories />} />
              <Route path='kids' element={<KidsCategories />} />
            </Route>

            <Route path='/:id' element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}
