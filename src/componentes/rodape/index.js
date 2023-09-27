import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <img src='imagens/fundo.png' alt='fundo' className='fundo'/>
            <div>
                <img src='imagens/fb.png' alt='facebookIcon'/>
                <img src='imagens/tw.png' alt='twitterIcon'/>
                <img src='imagens/ig.png' alt='instagramIcon'/>
            </div>
            <div><img src='imagens/logo.png' alt='organoLogo' className='logo'/></div>
            <div>
                <h5>Desenvolvido por Alura.</h5>
            </div>
        </footer>
    )
}

export default Rodape