import React from "react"
function Card(props) {
    const { title, descricao, image, id } = props
    const setFlag = (flag) => props.setFlag(flag)
    const setId = (primary) => props.setId(primary)

    const handleFlag = () => {
        setFlag(prev => !prev)
        setId(id)
    }

    return (
        <>
            <div className="card" style={{ "width": "20rem", "backgroundColor": "#ffb6c1", "height": "100%" }}>
                <img src={image} className="card-img-top" alt="..." style={{ "marginTop": "10px" }} />
                <div className="card-body" style={{ "backgroundColor": "#ffb6c1" }}>
                    <h5 className="card-title title-card">{title}</h5>
                    <p className="card-text descricao-card">{descricao}</p>
                    <div className="row2">
                        <div className="column2">
                            <button className="btn btn-secondary" onClick={handleFlag} style={{ "backgroundColor": "#212529" }}>Comprar</button>
                        </div>
                        <div className="column3">R$ 49,90</div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card