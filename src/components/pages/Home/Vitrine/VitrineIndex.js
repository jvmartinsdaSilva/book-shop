import { useEffect, useState } from "react"
import Card from "../../../Card/CardIndex"
import VitrineContainer from "./VitrineStyle"


const Vitrine = ({allBooks}) => {
    const [filterBooks, setFilterBooks] = useState([])

    useEffect(() => {
       const books = allBooks.slice(0, 3)
       setFilterBooks(books)
    }, [allBooks])


    return (
        <VitrineContainer>
            {allBooks.length === 0 && <h3>Pedimos desculpas, estamos com problemas !</h3>}
            {filterBooks.map((book) => (
                <Card
                    nome={book.name}
                    price={book.price}
                    img={book.img}
                    id={book.id}
                    key={book.id}
                />
            ))}
        </VitrineContainer>
    )
}

export default Vitrine
