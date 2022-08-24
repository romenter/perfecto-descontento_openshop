import React from "react";
import {Link} from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import logo from './../../assets/logo/logo-light.png'
import './footer.css'


const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <article>
                <Link to='/' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <p>"We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service."</p>
                <div className='footer__socials'>
                    <a href='https://facebook.com/' target='_blank' alt='fb'><FaFacebookF/></a>
                    <a href='https://twitter.com/' target='_blank' alt='tw'><AiOutlineTwitter/></a>
                    <a href='https://instagram.com/' target='_blank' alt='ig'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Direcciones</h4>
                <Link to="/"><span>Inicio</span></Link>
                <Link to="/products"><span>Productos</span></Link>
                <Link to="/about"><span>Historia</span></Link>
                <Link to="/gallery"><span>Galeria</span></Link>
                <Link to="/contact"><span>Contactame</span></Link>
            </article>
            <article>
                <h4>Mundo arte</h4>
                <Link to="/s"><span>Blog personal</span></Link>
                <Link to="/s"><span>Eventos</span></Link>
                <Link to="/s"><span>Comunidades</span></Link>
                <Link to="/s"><span>Preguntas frecuentes</span></Link>
            </article>
            <article>
                <h4>Contacto</h4>
                <Link to="/contact"><span>Contactanos</span></Link>
                <Link to="/s"><span>Soporte</span></Link>
            </article>
        </div>
        <div className='footer__copyright'>
            <small>2022 ROMEN TER GAZARIAN</small>
            <small>Todos los derechos reservados</small>
        </div>
    </footer>
  )
}



export default Footer