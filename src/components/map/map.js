import React from 'react'
import './map.css'

const Map = () => {
    return (
        <div className="map">
            <div className='mapText'>
                <h5 style={{ "fontWeight": "bold" }}>Nos encontramos lá!</h5>
            </div>
            <iframe
                src="https://maps.google.com/maps?q=sitio%20paraty%20divinopolis&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Map"></iframe>
            <br />
        </div>
    );
}
export default Map