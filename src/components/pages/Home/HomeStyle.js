import styled from "styled-components";

const HomeContainer = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;


    h2{ 
        margin: 1em;
        color: ${(props) => props.theme.colors.primary};
        text-align: start;
    }


`
export default HomeContainer