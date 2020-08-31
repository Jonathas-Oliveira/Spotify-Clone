import React from 'react'
import './styles.css'
function Section (props){
    return(
        <div className="section-container">
            <h1 className='h1'>Escutar  muda tudo</h1>
            <div className="titleweb">
                <h2 className='TITLE h2'>Escutar</h2>
                <p className='TITLE p2'>muda tudo</p>
                <p className='describP'>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
            </div>
            <p className='p'>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
            <button className='versaoBetaButton'>VERSÃO BETA</button>
        </div>
    )
}

export default Section