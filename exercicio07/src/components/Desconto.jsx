function Desconto(props){

    var temDesconto = props.temDesconto

    

    return(
        <>
          {temDesconto == true ? <h1>Tem Desconto</h1> : <h1>Sem Desconto</h1>}
        </>
    )

}

export default Desconto