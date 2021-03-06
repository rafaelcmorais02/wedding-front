import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'
import Map from './components/map/map'
import Video from './components/aboutUs/video'
import Guests from './components/guests/guests'
import Carousel from './components/carousel/carousel'
import Gifts from './components/gifts/gifts'
import Local from './components/local/local'
import Footer from './components/footer/footer'
import imag1 from "./images/imag01.jpeg"
import imag2 from "./images/imag02.jpeg"
import imag3 from "./images/imag03.jpg"
import imag4 from "./images/imag04.jpg"
import imag5 from "./images/imag05.jpg"
import imag6 from "./images/imag06.jpeg"
import imag7 from "./images/imag07.jpg"
import imag8 from "./images/imag08.jpg"
import imag9 from "./images/imag09.jpg"
import imag10 from "./images/imag10.jpeg"
import imag11 from "./images/imag11.jpeg"
import imag12 from "./images/imag12.jpeg"
import imag13 from "./images/imag13.jpg"
import imag14 from "./images/imag14.jpg"
import imag15 from "./images/imag15.jpeg"
import imag16 from "./images/imag16.jpg"
import imag17 from "./images/imag17.jpg"
import imag18 from "./images/imag18.jpeg"
import imag19 from "./images/imag19.jpg"
import imag20 from "./images/imag20.jpg"
import imag21 from "./images/imag21.jpeg"
import imag22 from "./images/imag22.jpg"



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
            imag7,
            imag8,
            imag9,
            imag10,
            imag11,
            imag12,
            imag13,
            imag14,
            imag15,
            imag16,
            imag17,
            imag18,
            imag19,
            imag20,
            imag21,
            imag22
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
                            Caso voc?? prefira um pix, aqui est?? a nossa chave
                            <br />
                            <span className='modalSpan'>Pix: 14400760650 (CPF)</span>
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
                <Local />
                <Map />
                <Footer />
            </div>
        </>
    )
}
export default App