import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductCardContainer from "./ProductCardStyle"
import { GrAdd, GrSubtract } from "react-icons/gr";

const ProductCard = () => {
    const [book, setBook] = useState({})
    const { id } = useParams()
    const [amountBook, setAmountBook] = useState(0)

    useEffect(() => {
        const getBookId = async () => {
            await fetch(`http://localhost:8080/books/${id}`)
                .then((res) => res.json())
                .then((data) => setBook(data))
                .catch((err) => console.log('ERRO: ' + err))
        }
        getBookId()

    }, [id])

    const subtractBook = () => {
        if (amountBook <= 0) {
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

    const addBookInCart = () => {
        const myBook =  {
            id: book.id,
            name: book.name,
            description: book.description,
            amount: amountBook,
            price: (book.price * amountBook)
        }

        console.log(myBook)
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
                <button onClick={() => addBookInCart()} className="buyBook">COMPRAR</button>
            </div>
        </ProductCardContainer>
    )
}

export default ProductCard