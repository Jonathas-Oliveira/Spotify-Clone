import React from 'react'
import logo from '../../assets/img/spotify-logo.png'
import './styles.css'
import Button from '../button/index'

function Header (props){
    return (
        <div className="container-header">
            <div className="logo">
               <a href="/"><img src={logo} alt="Logo"/></a> 
            </div>
        
        
        <div className="box-nav">
            <ul className='lista1'>
                <li> <a href="/">Premium </a></li>
                <li><a href="/"> Ajuda </a></li>
                <li><a href="/">Baixar</a></li>
            </ul>
        <div className='divisor'>
            |
        </div>
            <ul className='lista2'>
                <li><a href="/"> Inscreva-se</a></li>
                <li><a href="/"> Entrar </a></li>
            </ul>
        </div>
        <Button ></Button>
        </div>
    )
}
export default Header