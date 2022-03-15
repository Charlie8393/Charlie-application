import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    background-color:#346beb;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const WelcomeTitle = styled.h1`
    color: #42f5e9;
    font-weight: 800;
    font-size: 40px;
    margin-top: 150px;
`;

const Introduce = styled.div`
    color: #fcba03;
    font-weight: 800;
    font-size: 40px;
    margin-top: 250px;
`;
const Picture = styled.img`
    margin-top: 350px;
    width:10%;
    height:10%;
`
function MainPage(){
    return(
        <Container>
        <WelcomeTitle>Charlie</WelcomeTitle>
        <Introduce>Reading book, Watching baseball, do homework</Introduce>
        <Picture src="https://www.oberlo.com/media/1612639204-image3.jpg?fit=max&fm=jpg&w=1824"></Picture>
        <Picture src="https://img.global.news.samsung.com/global/wp-content/uploads/2015/07/Main_Thumb_0708.jpg"></Picture>
        <Picture src="https://1en5vh48t4rqdnq1j3h9ihn4-wpengine.netdna-ssl.com/wp-content/uploads/2006/09/make-the-homework-hour-happy-hour-top-10-tips-860x420.jpg"></Picture>
        </Container>
    );
}

export default MainPage;