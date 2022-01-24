import React from 'react'
import './guests.css'
import InputMask from 'react-input-mask';
import axios from 'axios'

const Guests = () => {
    const handleSend = async () => {
        const name = document.getElementById("nameInput").value
        const phone = document.getElementById("phoneInput").value
        document.getElementById("nameInput").value = ""
        document.getElementById("phoneInput").value = ""

        const confirmed = true
        const data = JSON.stringify({
            name,
            phone,
            confirmed
        });

        const config = {
            method: 'post',
            url: 'http://ec2-52-67-114-101.sa-east-1.compute.amazonaws.com/guests',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        console.log(config)
        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                window.alert("Mensagem enviada com sucesso")

            })
            .catch(function (error) {
                console.log(error);
                window.alert("É preciso completar todos os campos")
            });
    }
    return (
        <div id='guests' className='guests'>
            <div className='guestsText'>
                <h3>Venha participar desse momento especial conosco. Apenas pedimos que você confirme sua paresença abaixo:</h3>
            </div>

            <form className='guestsForm'>

                <legend>Lista de presença:</legend>
                <div className="mb-3">
                    <label for="phonelInput" className="form-label">Telefone</label>
                    <InputMask mask='(99) 999999999' type="text" id="phoneInput" className="form-control" placeholder="Digite seu telefone" />
                </div>
                <div className="mb-3">
                    <label for="nameInput" className="form-label">Nome Completo</label>
                    <input type="text" id="nameInput" className="form-control" placeholder="Digite seu nome completo" />
                </div>
                <div className="mb-3">
                </div>
                <button type="button" className="btn btn-dark" onClick={handleSend}>Enviar</button>

            </form>
        </div>
    )
}
export default Guests