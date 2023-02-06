import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import ProductCardContainer from "./ProductCardStyle"
import { GrAdd, GrSubtract } from "react-icons/gr";

const ProductCard = ({ checkBookInCart }) => {
    const [book, setBook] = useState({})
    const { id } = useParams()
    const [amountBook, setAmountBook] = useState(1)

    useEffect(() => {
        const getBookId = async () => {
            const res = await fetch(`http://localhost:8080/books/${id}`)
            const bookId = await res.json()
            setBook(bookId)
        }
        getBookId()

    }, [id])

    const subtractBook = () => {
        if (amountBook <= 1) {
            return
        }
        setAmountBook(amountBook - 1)
    }

    const addBook = () => {
        if (amountBook >= book.stock) {
            return
        }
        setAmountBook(amountBook + 1)
    }

    const getInfosBook = () => {
        const myBook = {
            id: book.id,
            name: book.name,
            description: book.description,
            amount: amountBook,
            totalPrice: (book.price * amountBook)
        }

        if (myBook.amount <= 0) {
            console.log('False')
            return
        }

        checkBookInCart(myBook)

    }

    return (
        <ProductCardContainer>
            <img src={`/images/${book.img}.jpg`} alt='Book' />
            <div className="infos">
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <p className="price">{(book.price)}</p>
                <p className="amountControl">
                    <button onClick={() => subtractBook()}><GrSubtract /></button>
                    {amountBook}
                    <button onClick={() => addBook()}><GrAdd /></button>
                </p>
                <p>Em estoque: {book.stock}</p>
                <p>Total a pagar {(book.price * amountBook)}</p>
                <Link to='/cart'>
                    <button onClick={() => getInfosBook()} className="buyBook">COMPRAR</button>
                </Link>
            </div>
        </ProductCardContainer>
    )
}

export default ProductCard