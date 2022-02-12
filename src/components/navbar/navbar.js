import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='sticky-top'>
            <div className="collapse show" id="navbarToggleExternalContent">
                <div className="navbarExternalContent bg-light p-4">
                    <div className='navbarExternalContentRow'>
                        <div className="navbarExternalContentColumn">
                            <h2 style={{ 'fontSize': '45px' }} className="text-black h1">Save the Date</h2>
                            <h3 style={{ 'fontSize': '30px' }}>Emillie <span className='navbarIcon' ><FaRegHeart /></span> Rafael</h3>
                            <span style={{ 'fontSize': '20px' }} className="text-muted">02 de Abril de 2022</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-light bg-dark navbarBody">
                <div className="container-fluid">
                    <div className="navbarRow">
                        <button className="navbarButton navbar-toggler navbatButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <ul className="navbarRow navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="navbarItem nav-item">
                                <a className="nav-link" aria-current="page" href="#home">Home |</a>
                            </li>
                            <li className="navbarItem nav-item">
                                <a className="nav-link" href="#guests">Confirmar |</a>
                            </li>
                            <li className="navbarItem nav-item">
                                <a className="nav-link" href="#gifts">Presentes |</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar