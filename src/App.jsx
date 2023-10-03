import React from 'react'
import Add_product from './component/Add_product/Add_product'
import { Route, Routes } from 'react-router'
import View_product from './component/View_product/View_product'
import Header from './component/Header/Header'
import Edit_product from './component/Edit_product/Edit_product'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Add_product />} />
        <Route path='/view' element={<View_product />} />
        <Route path='/edit/:id' element={<Edit_product />} />
      </Routes>

    </>
  )
}

export default App