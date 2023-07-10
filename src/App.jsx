import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'

function App() {
 
  return (
    <>
   <Container className='my-5 mainPage'>
    <h1 className='display-4 text-center'>titulo de prueba</h1>
    <hr />
    <Formulario></Formulario>
   </Container>
   <footer className='bg-dark text-light py-4'>
    <p className='text-center display-6'>Todos los derechos reservados &copy; </p>
   </footer>
    </>
  )
}

export default App
