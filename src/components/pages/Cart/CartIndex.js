import CartContainer from "./CartStyle"
import ItemCart from "./ItemCart"

const Cart = ({ cartBooks }) => {
    return (
        <CartContainer>
            {console.log(cartBooks)}
            {cartBooks.length === 0 ?
                <p><strong>Seu carrinho está vazio</strong></p>
                :
                cartBooks.map((book) => (
                    <ItemCart 
                    name={book.name}
                    amount={book.amount}
                    totalPrice={book.totalPrice}
                    key={book.id}
                    />
                ))
            }

        </CartContainer>

    )
}

export default Cart