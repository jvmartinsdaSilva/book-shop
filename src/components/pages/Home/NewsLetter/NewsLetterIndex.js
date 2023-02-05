import NewsLetterContainer from "./NewsLetterStyle"


const NewsLetter = () => {
    return (
        <NewsLetterContainer>
            <div className="newsLetterLogo">
                <h1>
                    Assine nossa
                    <br />
                    News Letter
                </h1>
                Olá
            </div>
            <p>
                E receba todas nossas novidades
                <br /> diretamente no seu email
            </p>
            <input
                type='text'
                placeholder="Digite seu email" />
            <button>ASSINAR</button>
        </NewsLetterContainer>
    )
}

export default NewsLetter