import React ,{useState}from 'react'
import  HamburgerButton  from 'react-hamburger-menu'
import './stylle.css'
import  Modal from 'react-modal'
import logoSpotify from '../../assets/img/spotify-logo.png'
import close from '../../assets/img/close.svg'

function Button (props){

    const [ModalOpen,setModalOpen]= useState(false)
    return(
        <div className="container-button">
        <button className='buttonOpen'onClick={() => setModalOpen(!ModalOpen)}><HamburgerButton
        width={18}
        height={15}
        color='#fff'
        className='burguer'/>
        </button>
        

        <Modal className='Modalbutton' onRequestClose={() => setModalOpen(false)}  isOpen={ModalOpen} >
        <div className="ContainerButtonModal">
        <button className='close' onClick={() => setModalOpen(false)}> <img className='closeImg' src={close} alt='close'></img></button>        
        <div className="ContentModalButton">
           <p className="description">Premium</p>
           <p className="description">Ajudar</p>
           <p className="description">Baixar</p>
           <p>-</p>
           <p className="login">Inscreva-se</p>
           <p className="login">Entrar</p>
            
        <img className='rodape' src={logoSpotify} alt=""/>
        </div>
        </div>
        </Modal>

        </div>
    )
}

export default Button