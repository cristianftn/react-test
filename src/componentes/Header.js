import React, {Component} from 'react';
import logoBorobil from '../imagenes/logo-borobil-2.svg';


class Header extends Component{

        render(){
            return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar" >
                 <a className="nav-link" href="#"><img src={logoBorobil} className="logo" alt="logo" width="200" height="100" /></a>
                <div className="collapse navbar-collapse menu" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Nosotras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Te ayudamos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    </ul>
                </div>
                </nav>
            );
        }
}

export default Header;


