import React from 'react'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'
import Map from './components/map/map'
import Video from './components/aboutUs/video'
import Guests from './components/guests/guests'
import Carousel from './components/carousel/carousel'

const App = () => {

    return (
        <>
            <div className='container-fluid'>
                <Navbar />
                <FirstSection />
                <Video />
                <Guests />
                <Carousel />
                <Map />
            </div>
        </>
    )
}
export default App