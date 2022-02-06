import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        <footer className="text-center text-white" style={{ "backgroundColor": "#f8c8d7" }}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://wa.me/+5537991092653?text=Quero%20Saber%20mais%20sobre%20os%20produtos%20Leve%20Menina" target="_blank" rel="noreferrer" role="button" style={{ "borderColor": "black", "color": "black" }}> <FontAwesomeIcon icon={faWhatsapp} /></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/invites/contact/?i=10syysma27shm&utm_content=mty7qh5" target="_blank" rel="noreferrer" role="button" style={{ "borderColor": "black", "color": "black" }}><FontAwesomeIcon icon={faInstagram} /></a>
                </section>
            </div>

            <div className="text-center p-3" style={{ "backgroundColor": "#ffb6c1", "color": "black" }}>
                © 2022 Copyright
            </div>
        </footer>
    )
}

export default footer