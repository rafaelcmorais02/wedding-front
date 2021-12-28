import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="collapse show" id="navbarToggleExternalContent">
                <div className="navbarExternalContent bg-light p-4">
                    <div className='navbarExternalContentRow'>
                        <div className="navbarExternalContentColumn">
                            <h5 className="text-black h4">Save <span className='navbarIcon' ><FaRegHeart /></span> Date</h5>
                            <span className="text-muted">02 de Abril de 2022</span>
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
                                <a className="nav-link active" aria-current="page" href="navbarRow">Home</a>
                            </li>
                            <li className="navbarItem nav-item">
                                <a className="nav-link" href="teste">Convidados</a>
                            </li>
                            <li className="navbarItem nav-item">
                                <a className="nav-link" href="Presentes">link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar