function Nota(props){

   var nota = props.notas;

   if(nota >= 90){
      return(<><h1>Excelente Nota, meus parabéns!</h1></>)
   }else if(nota >= 70 && nota <= 89){
      return(<><h1>Sua nota está boa!</h1></>)
   }else if(nota < 70){
      return (<><h1>Precisa melhorar sua nota amigão!</h1></>)
   }

}

export default Nota