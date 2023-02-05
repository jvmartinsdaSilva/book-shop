import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text}
    }


`

export default GlobalStyle