import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductCardContainer from "./ProductCardStyle"

const ProductCard = () => {
    const [book, setBook] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getBokkId = async () => {
            await fetch(`http://localhost:8080/books/${id}`)
                .then((res) => res.json())
                .then((data) => setBook(data))
                .catch((err) => console.log('ERRO: ' + err))
        }
        getBokkId()

    }, [id])

    return (
        <ProductCardContainer>
            <img src={`/images/${book.img}.jpg`} alt='Book'/>
            <div className="infos">
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <p className="price">{book.price}</p>
                {/* <p><button>-</button>4<button>+</button></p> */}
            </div>
        </ProductCardContainer>
    )
}

export default ProductCard