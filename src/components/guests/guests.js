import React from 'react'
import './guests.css'

const Guests = () => {
    return (
        <div id='guests' className='guests'>
            <div className='guestsText'>
                <h3>Venha participar desse momento especial conosco. Apenas pedimos que você confirme sua paresença abaixo:</h3>
            </div>

            <form className='guestsForm'>

                <legend>Lista de presença:</legend>
                <div className="mb-3">
                    <label for="emailInput" className="form-label">Email</label>
                    <input type="text" id="emailInput" className="form-control" placeholder="Digite seu email" />
                </div>
                <div className="mb-3">
                    <label for="Nome" className="form-label">Convidado</label>
                    <select id="Nome" className="form-select">
                        <option>Emillie</option>
                    </select>
                </div>
                <div className="mb-3">
                </div>
                <button type="submit" className="btn btn-dark">Enviar</button>

            </form>
        </div>
    )
}
export default Guests