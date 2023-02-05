import styled from "styled-components";

const NavContainer = styled.nav`
    ul{
        height: 50px;
        background:  ${(props) => props.theme.colors.primary} ;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        list-style: none;
    }

    ul *{
        background-color:  ${(props) => props.theme.colors.primary};
    }

    li{
      font-weight:bold ;
      cursor: pointer;
    }
 
    a{ 
        padding: .9em;
        color: ${(props) => props.theme.colors.background};
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
        background: ${(props) => props.theme.colors.primaryHover};
    }
`


export default NavContainer

