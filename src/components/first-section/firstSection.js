import React, { useEffect, useState } from 'react'
import './firstSection.css'
let days, hours, minuts, seconds
const FirstSection = () => {
    const [now, setNow] = useState(new Date())
    const dueDate = new Date('2022-04-02T16:00:00')
    useEffect(() => {
        setTimeout(() => {
            let diff = dueDate - now
            days = parseInt(((diff / 1000) / 3600) / 24)
            hours = parseInt((((diff / 1000) / 3600) / 24 - days) * 24)
            minuts = parseInt((((((diff / 1000) / 3600) / 24 - days) * 24) - hours) * 60)
            seconds = parseInt(((((((diff / 1000) / 3600) / 24 - days) * 24) - hours) * 60 - minuts) * 60)
            setNow(new Date())
        }, 1000);
    })
    return (
        <>
            <div className='firstSection'>
                <h5>{days}d:{hours}h:{minuts}m:{seconds}s</h5>
            </div>
        </>
    )
}
export default FirstSection