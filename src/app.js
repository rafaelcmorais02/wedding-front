import React from 'react'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'
import Map from './components/map/map'
import Video from './components/aboutUs/video'
import Guests from './components/guests/guests'
import Carousel from './components/carousel/carousel'
import Gifts from './components/gifts/gifts'
const App = () => {

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Está quase lá</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Assim que recebermos o valor e item será retirado da lista
                            <br />
                            Pix: xxxx
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
                <Carousel />
                <Map />
            </div>
        </>
    )
}
export default App