import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        <footer className="text-center text-white" style={{ "backgroundColor": "#f8c8d7" }}>
            <div className="container p-4 pb-0">
                <section className="mb-4">

                    <p className="d-flex justify-content-center align-items-center" style={{ "color": "black" }}>
                        <span className="me-3">Em caso de dúvidas entre em contato:</span>
                    </p>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://wa.me/+5537991092653?text=Quero%20saber%20mais%20sobre%20seu%20casamento" target="_blank" rel="noreferrer" role="button" style={{ "borderColor": "black", "color": "black" }}> <FontAwesomeIcon icon={faWhatsapp} /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/invites/contact/?i=11cvb561ef1c3&utm_content=q9auo0" target="_blank" rel="noreferrer" role="button" style={{ "borderColor": "black", "color": "black" }}><FontAwesomeIcon icon={faInstagram} /></a>
                </section>
            </div>

            <div className="text-center p-3" style={{ "backgroundColor": "#ffb6c1", "color": "black" }}>
                © 2022 Copyright: emillieerafael.com
            </div>
        </footer>
    )
}

export default footer