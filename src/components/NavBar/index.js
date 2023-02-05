import { Link } from 'react-router-dom'
import NavContainer from "./style";


const NavBar = () => {
    return (
        <NavContainer>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/products'>Produtos</Link></li>
                <li><Link to='/cart'>Carrinho</Link></li>
            </ul>
        </NavContainer>
    )
}

export default NavBar

