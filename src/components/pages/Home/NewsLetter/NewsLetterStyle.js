import styled from "styled-components";

const NewsLetterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 3em 0;
    width: 300px;
    height: 250px;

    .newsLetterLogo{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    h1{
        color: ${(props) => props.theme.colors.primary};
        margin-right: 1em;
    }

    p{
        color: ${(props) => props.theme.colors.text};

    }

    input{
        margin-top: 1em;
        border: none;
        height: 40px;
        padding: 1em;
        background: ${(props) => props.theme.colors.secundary};   
    }

    button{
        margin: 1em 0;
        padding: 1em;
        background: ${(props) => props.theme.colors.primary};
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover{
        background: ${(props) => props.theme.colors.primaryHover};

    }


`
export default NewsLetterContainer