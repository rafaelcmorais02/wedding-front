import React from 'react'
import Navbar from './components/navbar/navbar'
import FirstSection from './components/first-section/firstSection'

const App = () => {

    return (
        <>
            <div className='container'>
                <Navbar />
                <FirstSection />
            </div>
        </>
    )
}
export default App