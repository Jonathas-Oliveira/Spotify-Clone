import React from 'react'
import './styles.css'
import logo from '../../assets/img/spotify-logo.png'
import instagram from '../../assets/img/instagram.svg'
import twitter from '../../assets/img/twitter.svg'
import facebook from '../../assets/img/facebook.svg'

function Footer (props){
   
    return (
        <div  className="container-footer">
            <img  src={logo} alt=""/>
            <div className="empresa">
                <p className='title'>EMPRESA</p>
                <p className='maleavel'>Sobre</p>
                <p className='maleavel'>Empregos</p>
                <p className='maleavel'>For the Record</p>
            </div>
            <div className="comunidade">
                <p className='title'>COMUNIDADE</p>
                <p className='maleavel'>Para Artistas</p>
                <p className='maleavel'>Para Desenvolvedores</p>
                <p className='maleavel' >Marcas</p>
                <p className='maleavel'>Fornecedores</p>
            </div>
            <div className="link uteis">
                <p className='title'>LINK ÚTEIS</p>
                <p className='maleavel'> Ajuda</p>
                <p className='maleavel'>Player da Web</p>
                <p className='maleavel'>Aplicarivo móvel grátis</p>
            </div>
            <div className="icons">
               <div className="molde">
                    <img className='icon' src={instagram} alt=""/>
                </div>
                <div className="molde">
                    <img className='icon' src={twitter} alt=""/>
                </div>
                <div className="molde">
                    <img className='icon' src={facebook} alt=""/>
                </div>
            </div>
            <div className='contrat'>
                <p className="describ">Legal</p>
                <p className="describ">Centro de Privacidade</p>
                <p className="describ">Sobre anúncios</p>
                <p className="describ">Política de privacidade</p>
                <p className="describ">Cookies</p>
            </div>
        </div>
    )
}

export default Footer