import styled from "styled-components";

const CardContainer = styled.div`

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme.colors.secundary} ;
        text-decoration: none;
    }

    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 280px;
    padding: 1em;
    box-shadow: 2px 2px 2px rgba(34, 34, 34, .45);
    background: ${(props) => props.theme.colors.secundary};
    border-radius: 20px;
    border-top: 1px solid rgba(34, 34, 34, .3);
    border-left: 1px solid rgba(34, 34, 34, .3);
    

    img{
        width: 100px;
        height: 120px;
        background-size: cover ;
        box-shadow: 2px 2px 2px rgba(34, 34, 34, .3);
        border-radius: 2px;
    }

    .infos{
        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: space-around;
        margin: 0 1em;
        font-size: 16px;
        background: ${(props) => props.theme.colors.secundary} 
    }
    
    h3{
        color: ${(props) => props.theme.colors.primary};
        background: ${(props) => props.theme.colors.secundary};
        font-size: 18px;
        margin-top: 1em;
    }

    .infos p{
        background: ${(props) => props.theme.colors.secundary};
    }

    button{
        border: none;
        cursor: pointer;
        padding: .5em 1em;
        background: ${(props) => props.theme.colors.primary} !important;
        border-radius: 10px;
        color:  ${(props) => props.theme.colors.secundary};
        margin-top: 1em;
    }

    button:hover{
        background: ${(props) => props.theme.colors.primaryHover} !important;
    }

`

export default CardContainer