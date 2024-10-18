function Usuario(props){

    var online = props.online

    return(
        <>
            {online == true ? <h1>Usuário Online</h1> : <h1>Usuário Offline</h1>}
        </>

    )
}

export default Usuario