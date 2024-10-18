function Botao(props){

    var button = props.logado

    return(
        <>

        {button == true ? (<button>Sair</button>) :
        (<button>Entrar</button>)}

        </>
    )
    
    
}

export default Botao