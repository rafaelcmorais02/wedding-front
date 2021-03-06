import React from 'react'
import './guests.css'
import InputMask from 'react-input-mask';
import axios from 'axios'

const Guests = () => {
    const handleSend = async () => {
        const name = document.getElementById("nameInput").value
        const phone = document.getElementById("phoneInput").value
        const regex = /^[(]{0,1}[0-9]{2}[)]{0,1}[-\s.]{0,1}[0-9]{5}[-\s.]{0,1}[0-9]{4}$/

        if (regex.test(phone) && name) {
            const confirmed = true
            const data = JSON.stringify({
                name,
                phone,
                confirmed
            });

            const config = {
                method: 'post',
                url: 'https://levemenina.com/guests',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            await axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    window.alert("Mensagem enviada com sucesso")
                    document.getElementById("nameInput").value = ""
                    document.getElementById("phoneInput").value = ""
                })
                .catch(function (error) {
                    console.log(error);
                    window.alert("Erro no cadastro")
                    document.getElementById("nameInput").value = ""
                    document.getElementById("phoneInput").value = ""
                });
        } else {
            window.alert("É preciso completar todos os campos")
        }
    }
    return (
        <div id='guests' className='guests'>
            <div className='guestsText'>
                <h5>Venha participar desse momento especial conosco!</h5>
                <h5>Apenas pedimos que você confirme sua presença até o dia <span className='guestsSpan'>10 de Março de 2022</span>, informando:</h5>
                <hr />
            </div>

            <form className='guestsForm'>
                <div className="mb-3">
                    <label htmlFor="phonelInput" className="form-label">Telefone</label>
                    <InputMask mask='(99) 99999-9999' type="text" id="phoneInput" className="form-control" placeholder="Digite seu telefone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Nome Completo</label>
                    <input type="text" id="nameInput" className="form-control" placeholder="Digite seu nome completo" />
                </div>
                <div className="mb-3">
                </div>
                <button type="button" className="btn btn-dark" onClick={handleSend}>Confirmar</button>
            </form>
        </div>
    )
}
export default Guests