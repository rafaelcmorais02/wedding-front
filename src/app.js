import React from 'react'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'
import Carousel from './components/carousel/carousel'
import Map from './components/map/map'
import Video from './components/aboutUs/video'
import Guests from './components/guests/guests'

const App = () => {

    return (
        <>
            <div className='container-fluid'>
                <Navbar />
                <FirstSection />
                <Video />
                <Guests />
                <Map />
                {/* <Carousel /> */}
            </div>
        </>
    )
}
export default App