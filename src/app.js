import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'
import Map from './components/map/map'
import Video from './components/aboutUs/video'
import Guests from './components/guests/guests'
import Carousel from './components/carousel/carousel'
import Gifts from './components/gifts/gifts'
import Footer from './components/footer/footer'
import imag1 from "./images/imag01.jpg"
import imag2 from "./images/imag02.jpeg"
import imag3 from "./images/imag03.jpeg"
import imag4 from "./images/imag04.jpeg"
import imag5 from "./images/imag05.jpeg"
import imag6 from "./images/imag06.jpeg"



const App = () => {
    const handleReservarItem = async () => {
        const data = JSON.stringify({
            "status": false
        });

        const config = {
            method: 'patch',
            url: `https://levemenina.com/gifts/${dadosCard[id].pk}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        await axios(config)
            .then(function (response) {
                window.alert("Obrigado pelo presente! Ass: Emillie e Rafael")
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
                window.alert("Erro no registro do presente")
            });
    }
    const [id, setId] = useState(0)
    const [dadosCard, setDadosCard] = useState([])
    useEffect(() => {
        const imagObj = {
            imag1,
            imag2,
            imag3,
            imag4,
            imag5,
            imag6,
        }
        const cardData = []
        const gifts = async () => {
            const response = await axios.get('https://levemenina.com/gifts')
            let i = 0
            for (const item of response.data.body.gifts) {
                if (item.status === true) {
                    if (i === 0) {
                        cardData.push({
                            pk: item['_id'],
                            id: i,
                            className: "carousel-item active",
                            secClassName: "active",
                            current: "true",
                            label: "Slide " + (i + 1),
                            imag: imagObj[item.imag],
                            titulo: item.titulo,
                            descricao: item.descricao,
                            valor: item.valor,
                            loja: item.loja,
                        })
                    } else {
                        cardData.push({
                            pk: item['_id'],
                            id: i,
                            className: "carousel-item",
                            label: "Slide " + (i + 1),
                            titulo: item.titulo,
                            imag: imagObj[item.imag],
                            descricao: item.descricao,
                            valor: item.valor,
                            loja: item.loja,
                        })
                    }
                    i++
                }
            }
            setDadosCard(cardData)
            console.log(cardData)
        }
        gifts()
    }, [])

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{(dadosCard[id] || '').titulo} - R$ {(dadosCard[id] || '').valor} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Caso você prefira um pix, aqui está a nossa chave
                            <br />
                            <spam className='modalSpam'>Pix: 14400760650 (CPF)</spam>
                        </div>
                        <div className="modal-body">
                            Ou compre o item direto da loja, clicando  <a href={(dadosCard[id] || '').loja}>
                                aqui
                            </a>
                            <br />
                            <br />
                            <div className='modalThanks'>
                                Nossos sinceros agradecimentos!
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleReservarItem}>Reservar Item</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Sair</button>

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
                <Carousel setId={setId} dadosCard={dadosCard} />
                <Map />
                <Footer />
            </div>
        </>
    )
}
export default App