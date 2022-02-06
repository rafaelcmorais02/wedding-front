import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'
import Map from './components/map/map'
import Video from './components/aboutUs/video'
import Guests from './components/guests/guests'
import Carousel from './components/carousel/carousel'
import Gifts from './components/gifts/gifts'
import { dadosCard } from "./data/dataCard"
const App = () => {
    const [id, setId] = useState(0)
    console.log(dadosCard[0])
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{dadosCard[id].titulo} - R$ {dadosCard[id].valor} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Caso você prefira um pix, aqui está a nossa chave
                            <br />
                            <spam className='modalSpam'>Pix: 14400760650 (CPF)</spam>
                        </div>
                        <div className="modal-body">
                            Mas se preferir aqui está o link de uma loja sugerida por nós:
                            <br />
                            <br />
                            <a href={dadosCard[id].loja}>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Loja</button>
                            </a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Obrigado</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <Navbar />
                <FirstSection />
                <Video />
                <Guests />
                <Gifts />
                <Carousel setId={setId} />
                <Map />
            </div>
        </>
    )
}
export default App