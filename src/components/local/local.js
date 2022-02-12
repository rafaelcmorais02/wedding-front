import React from 'react'
import './local.css'
import { FaRegHandPointDown } from 'react-icons/fa';
import { BiChurch } from 'react-icons/bi';

const Local = () => {
    return (
        <div className='localText'>
            <h5 style={{ 'margin': '0' }}>Te esperamos lá <FaRegHandPointDown style={{ 'fontSize': '20px' }} /> <BiChurch style={{ 'fontSize': '25px' }} /></h5>
        </div>
    )
}
export default Local