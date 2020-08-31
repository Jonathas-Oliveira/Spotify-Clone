import React from 'react'
import './styles.css'
import ContentHome from '../../components/contentHome'
import Footer from '../../components/footer'
import Header from '../../components/header/index'
function Home (props){

    return(
        <div  className="container-home" >
            <Header></Header>
            <ContentHome>
            </ContentHome>
            <Footer></Footer>
            
        </div>
    )
}

export default Home