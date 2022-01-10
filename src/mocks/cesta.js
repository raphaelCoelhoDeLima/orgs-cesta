import logo from "../../assets/logo.png"

import tomate from "C:/Users/rcllp/Documents/Orgs/orgs-cesta/assets/frutas/Tomate.png"
import brocolis from "C:/Users/rcllp/Documents/Orgs/orgs-cesta/assets/frutas/Brócolis.png"
import batata from "C:/Users/rcllp/Documents/Orgs/orgs-cesta/assets/frutas/Batata.png"
import pepino from "C:/Users/rcllp/Documents/Orgs/orgs-cesta/assets/frutas/Pepino.png"
import abobora from "C:/Users/rcllp/Documents/Orgs/orgs-cesta/assets/frutas/Abóbora.png"
const cesta = {
    topo:{
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,

            },
            {
                nome: "Brocólis",
                imagem: brocolis,

            },
            {
                nome: "Batata",
                imagem: batata,

            },
            {
                nome: "Pepino",
                imagem: pepino,

            },
            {
                nome: "Abóbora",
                imagem: abobora,

            },
        ]
    }
}
export default cesta