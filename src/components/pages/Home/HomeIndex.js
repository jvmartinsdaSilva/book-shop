import HomeContainer from "./HomeStyle"
import NewsLetter from "./NewsLetter/NewsLetterIndex"
import Vitrine from "./Vitrine/VitrineIndex"


const Home = ({allBooks}) => {
    
    return(
        <HomeContainer>
            <NewsLetter />
            <h2>Conheça alguns de nossos produtos</h2>
            <Vitrine allBooks={allBooks}/>
        </HomeContainer>
    )
}

export default Home