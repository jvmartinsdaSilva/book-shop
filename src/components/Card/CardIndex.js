import CardContainer from "./CardStyle";
import { Link } from 'react-router-dom'


const Card = ({ nome, img, price, id }) => {

    return (
        <CardContainer>
            <div className="imgContainer">
                <img src={`/images/${img}.jpg`} alt='Capa do livro' />
            </div>
            <div className="infos">
                <h3>{nome}</h3>
                <p>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                <Link to={`/product/${id}`}><button id={id}>COMPRAR</button></Link>
            </div>
        </CardContainer>
    )
}

export default Card