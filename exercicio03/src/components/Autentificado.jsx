

function Autenticado(props){

    var text = false
    
    if(text == true){
        return(<h1>Bem-Vindo,{props.user}!</h1>)
    }else{
        //em branco não retorna nada
    }
    

}

export default Autenticado

/*
     if (Autenticado == true){
            <h1>Bem Vindo, {props.user}</h1>
        }else{
            <h2>NÃO TEM NADA</h2>
        }
*/