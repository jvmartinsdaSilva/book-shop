import { useEffect, useState } from "react"

import ProductsContainer from "./ProductsStyle"
import Card from "../../Card/CardIndex"

const Products = ({ BookSearch, allBooks }) => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (BookSearch) {
            console.log(BookSearch)
            const BooksFilterForSearch = allBooks.filter((book) => {
                const bookName = book.name
                const bookNormalized = bookName.toLowerCase()

                return bookNormalized.indexOf(BookSearch) >= 0
            })
            setBooks(BooksFilterForSearch)
        } else {
            setBooks(allBooks)
        }


    }, [BookSearch, allBooks])

    return (
        <ProductsContainer>
            {allBooks.length === 0 && <h3>ERRO...</h3>}
            {books.length === 0 && <h4>Nenhum livro encotrado....</h4>}
            {books.map((book) => (
                <Card
                    nome={book.name}
                    price={book.price}
                    img={book.img}
                    id={book.id}
                    key={book.id}

                />
            ))}

        </ProductsContainer>
    )
}
export default Products
