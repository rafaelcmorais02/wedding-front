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
                url: 'https://ec2-52-67-114-101.sa-east-1.compute.amazonaws.com/guests',
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
                <h3>Venha participar desse momento especial conosco. Apenas pedimos que você confirme sua paresença até o dia 30 de fev de 2022:</h3>
            </div>

            <form className='guestsForm'>

                <legend>Lista de presença:</legend>
                <div className="mb-3">
                    <label for="phonelInput" className="form-label">Telefone</label>
                    <InputMask mask='(99) 99999-9999' type="text" id="phoneInput" className="form-control" placeholder="Digite seu telefone" />
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