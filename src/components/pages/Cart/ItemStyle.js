import styled from "styled-components";

const ItemCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.5em;
    border: 1px solid black;
    border-radius: 10px;
    margin: 1.5em;

    h3{
        color: ${({theme}) => theme.colors.primary}
    }

    button{
        border: none;
        color: ${({theme}) => theme.colors.primary};
        font-weight: bolder;
        cursor: pointer;
    }

`

export default ItemCard