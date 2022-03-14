import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    background-color:#346beb;
    display: flex; //Flex Container
    //This will make it up to down.
    display: column;
`;
const WelcomeTitle = styled.h1`
    color: #42f5e9;
    font-weight: 800;
    font-size: 40px;
    margin-top: 100px;
`;
function MainPage(){
    <Container>
        <WelcomeTitle>Charlie</WelcomeTitle>
    </Container>
}

export default MainPage;