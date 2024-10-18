function Jogador(props){

    var player = props.nivel

    return(
        <>
        {
            player === 'iniciante' ? (<h1>Bem vindo, iniciante!</h1>) :
            player === 'intermediário' ? (<h1>Bem vindo, intermediário</h1>) :
            player === 'avançado' ? (<h1>Bem vindo, avançado!</h1>) : <><h1>Nível não correspondido</h1></>
        
        }
        </>
    )
}

export default Jogador