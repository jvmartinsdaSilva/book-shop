import styled from "styled-components";


const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1em;
    padding-bottom: 0.5em;

    input{
        border: none;
        padding: 1em;
        width: 150px;
        background: ${(props) => props.theme.colors.secundary};
        border-radius: 20px;
    }

    button{
        border: none;
        margin: 0 1em;
        transform: scale(1.9);
        cursor: pointer;
    }


    h1{
        font-size: 20px;
        color: ${(props) => props.theme.colors.primary};
    }


`

export default HeaderContainer