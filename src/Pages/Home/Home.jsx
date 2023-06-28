import CardNoticias from "../../Components/HomeComponents/CardNoticias/CardNoticia.jsx";
import ComponenteFilho from "../../Components/HomeComponents/ComponenteFilho/ComponenteFilho.jsx"

function Home() {

  const temNoticia = true
  const temNoticia2 = true

  const vitoria = 'vitoria do outro time, vasco perde'
  const imagem = "https://s2.glbimg.com/QxgfZZ0KaNp-BRgg_Pfile-2-WM=/0x468:1536x1332/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif():format(webp)/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/3/8/IFfzYCRkGLGL7jqP5YAg/fzqkz10wwaqujd6.jfif"
  const caso = 'Imagem de uma bola de Futebol'

  const handleComponenteFilho = (mensage) => {
    console.log('mensagem: ',mensage);
  }

  const renderizarQtdNoticia = () => {
    if (temNoticia2) {
      return <span>1 noticia nao lida</span>
    } 
      return <span>não tem noticias</span>
  }

  const PrTitulo = 'Bitello empata para o Grêmio contra o América-MG na Arena; SIGA'
    return(
      <>
      <h1>Home</h1>

      {renderizarQtdNoticia()}

      {temNoticia ? (<CardNoticias perde={vitoria}
                                    image={imagem} 
                                    oAlt={caso} 
                                    titulao={PrTitulo}/>
                    ):(<span>não tem nada</span>)}



      {/* {temNoticia && 
      <CardNoticias perde={vitoria}
                    image={imagem} 
                    oAlt={caso} 
                    titulao={PrTitulo}/>} */}
      {/* <CardNoticias perde={vitoria}
                    image={imagem} 
                    oAlt={caso} 
                    titulao={PrTitulo}/> */}
      
      <ComponenteFilho callback={handleComponenteFilho} />
      </>
    )
  }

export default Home;