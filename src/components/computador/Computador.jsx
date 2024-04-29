//1) import
import './Computador.css'

//2) function
function Computador(props){
  return(
    <>
    <p>Nome: {props.nome}</p>
    <p>Preço: {props.preco}</p>
    <p>Processador: {props.processador}</p>
    <p>Memoria: {props.memoria}</p>
    <p>Placa de vídeo: {props.placa}</p>
    <hr />
    <br />
    <br />
    </>
  )
}

//3) exportação

export default Computador