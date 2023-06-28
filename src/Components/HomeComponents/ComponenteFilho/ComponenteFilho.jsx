function ComponenteFilho( {callback} ) {

    const handleClick = () => {
        callback('bora')
    }

    return(
        <>
        <button onClick={handleClick}>Clique Aqui</button>
        </>
    )

}

export default ComponenteFilho