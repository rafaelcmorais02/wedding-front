import { dadosCard } from "./dataCard"

let count = 0
let i = 0
let obj = {}
let caouselData = []
const formatCarousel = () => {
    let id = [], imag = [], titulo = [], descricao = []
    for (const item of dadosCard) {
        console.log("passou aqui")
        i = i + 1
        id.push(item.id)
        imag.push(item.imag)
        titulo.push(item.titulo)
        descricao.push(item.descricao)
        if (i === 3) {
            if (count === 0) {
                obj = {
                    id: count,
                    className: "carousel-item active",
                    secClassName: "active",
                    current: "true",
                    label: "Slide " + count + 1,
                }
            } else {
                obj = {
                    id: count,
                    className: "carousel-item",
                    label: "Slide " + count + 1,
                }
            }
            caouselData.push({
                ...obj,
                dados: {
                    id: id,
                    imag: imag,
                    titulo: titulo,
                    descricao: descricao
                }
            })
            count = count + 1
            i = 0
            id = []
            imag = []
            titulo = []
            descricao = []
        }
    }
    return caouselData
}
export default formatCarousel
