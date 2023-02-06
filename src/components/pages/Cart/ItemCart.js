import ItemCard from "./ItemStyle";


const ItemCart = ({ name, amount, totalPrice }) => {
    return (
        <ItemCard>
            <h3>{name}</h3>
            <p>{amount} unidades</p>
            <p>Total a pagar: <strong> {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></p>
            <button>Edit</button>
            <button>EXC</button>
        </ItemCard>
    )
}


export default ItemCart