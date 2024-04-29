import React from 'react'
import ReactDOM from 'react-dom/client'
import Computador from './components/computador/Computador.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Computador nome="Dell" preco="4.000" processador="Ryzen 5" memoria="ssd" placa="VGA"/>
    <Computador nome="Asus" preco="3.500" processador="Intel Core i7" memoria="RAM" placa="MDA"/>
    <Computador nome="Lenovo" preco="2.990" processador="Intel Core i5" memoria="RAM" placa="MDA"/>
    <Computador nome="Positivo" preco="1.050" processador="Intel Core i7" memoria="RAM" placa="Gygabite"/>
    <Computador nome="CCE" preco="3.500" processador="AMD" memoria="SSD" placa="MDA"/>
    <Computador nome="Samsung" preco="4.950" processador="Intel Core i5" memoria="RAM" placa="MDA"/>
  </React.StrictMode>,
)
