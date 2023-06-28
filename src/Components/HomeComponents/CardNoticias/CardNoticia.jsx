import "./style.css"

function CardNoticias({ perde,image,oAlt,titulao }) {
    return(
        <>
            <div className="card-noticia">
                <img src={image} 
                    alt={oAlt} />
                 <h3>{titulao}</h3>
                     <p>{perde}</p>
            </div>
        </>
    )
}

export default CardNoticias;