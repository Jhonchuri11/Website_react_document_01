import React from "react";
import '../style/Dropdown.css';
import profile from '../assets/images/profile.png';
import logout from '../assets/images/logout.png';
import addDoc from '../assets/images/addDoc.png';
import { Link } from "react-router-dom";
export default function Dropdown() {

    return (
        <div className="sub-menu-wrap" id="subMenu">
            <div class="sub-menu">
                    <div class="email-user">
                        <img src={profile}/>
                        <h2>Nombre usuario</h2>
                    </div>
                    <hr/>
                    <a href="#" class="sub-menu-link">
                        <img src={logout}/>
                        <p>Cerrar sesión</p>
                        <span>&gt;</span>
                    </a>
                    <Link to={'/listadoDocumento'} class="sub-menu-link">
                        <img src={addDoc}/>
                        <p>Crear documento</p>
                        <span>&gt;</span>
                    </Link>
            </div>
        </div>
    )
};

