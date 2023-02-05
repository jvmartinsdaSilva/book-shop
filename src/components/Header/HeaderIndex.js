import HeaderContainer from "./HeaderStyle"
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Header = ({ getBook }) => {
    const [searchBoock, setSearchBook] = useState()

    useEffect(() => {
        getBook(searchBoock)
    }, [getBook, searchBoock])

    return (
        <HeaderContainer>
            <h1>Book Shop</h1>
            <label htmlFor="inputSearch">

                <input
                    id="inputSearch"
                    type='text'
                    placeholder="Pesquisar por livros"
                    onChange={(e) => setSearchBook(e.target.value)}
                />

                <Link to='products'>
                    <button>
                        <AiOutlineSearch />
                    </button>
                </Link>           
            </label>
        </HeaderContainer>
    )
}

export default Header