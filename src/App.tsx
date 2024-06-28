
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Navbar from './components/navBar/Navbar'
import Footer from './components/footer/Footer'
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormularioTema from './components/temas/formularioTema/FormularioTema'
import DeletarTema from './components/temas/deletarTemas/DeletarTema'

function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter> 
        <Navbar/>
           <div className='min-h-[80vh]'>
           <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/cadastro' element={<Cadastro/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/temas' element={<ListaTemas/>}/>
              <Route path='/formularioTema' element={<FormularioTema/>}/>
              <Route path='/editarTema/:id' element={<FormularioTema/>}/>
              <Route path='/deletarTema/:id' element={<DeletarTema/>}/>

              
          </Routes>
           </div>
           <Footer/>
      </BrowserRouter>
    </AuthProvider>
     
    </>
  )
}

export default App
