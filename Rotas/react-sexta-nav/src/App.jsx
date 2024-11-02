import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import ContatoPage from './pages/ContatoPage'
import MainLayout from './layout/MainLayout'
import ProductLayout from './layout/ProductLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/sobre' element={<SobrePage />} />
          <Route path='/contato' element={<ContatoPage />} />
        </Route>

        <Route path='/produto' element={<ProductLayout />}>
          <Route index element={"Descrição"} />
          <Route index path='/produto/descricao' element={"Descrição"} />
          <Route path='/produto/preco' element={"Preço"} />
        </Route>

        <Route path='*' element={"Erro"} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
