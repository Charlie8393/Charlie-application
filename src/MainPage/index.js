import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    background-color:#346beb;
    display: flex; 
`;
const WelcomeTitle = styled.h1`
    color: #42f5e9;
    font-weight: 800;
    font-size: 40px;
    margin-top: 150px;
    text-align: right;
`;

const Introduce = styled.div`
    color: #fcba03;
    font-weight: 800;
    font-size: 40px;
    margin-top: 250px;
`;
function MainPage(){
    return(
        <Container>
        <WelcomeTitle>Charlie</WelcomeTitle>
        <Introduce>Reading book, Remembering, do homework</Introduce>
        </Container>
    );
}

export default MainPage;