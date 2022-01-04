import React from 'react'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'
import Carousel from './components/carousel/carousel'

const App = () => {

    return (
        <>
            <div className='container-fluid'>
                <Navbar />
                <FirstSection />
                <Carousel />
            </div>
        </>
    )
}
export default App