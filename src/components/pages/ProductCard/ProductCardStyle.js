import styled from "styled-components";


const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
    padding: 1em;
    width: 300px;
    box-shadow: 2px 2px 2px rgba(34, 34, 34, .45);
    background: ${(props) => props.theme.colors.secundary};
    border-top: 1px solid rgba(34, 34, 34, .3);
    border-left: 1px solid rgba(34, 34, 34, .3);
    border-radius: 20px;

    

    img{
        background-size: cover;
        width: 150px;
        height: 200px;
    }

    .infos{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 1em;
        width: 180px;
        height: 100%;
        text-align: start;
        background: ${(props) => props.theme.colors.secundary};
    }
    
    h3,p{
        background: ${(props) => props.theme.colors.secundary};
    }
    
    h3{
        margin: 1em 0;
        color: ${(props) => props.theme.colors.primary};
    }
    
    .price{
        text-align: center;
        margin-top: 1em;
        color: ${(props) => props.theme.colors.primary};
        font-size: 20px;
        font-weight: bolder;
    }
`

export default ProductCardContainer