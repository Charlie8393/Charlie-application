import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    background-color:#28bec6;
    display: flex; //Flex Container
    //This will make it up to down.
    flex-direction:column;
`;

/**
 * 
//TODO
Flex Container
 */
const Leftside = styled.h1`
    font-size: 100px;
    color: blue;
    text-align: center;
    margin-top: 20px;
    width:50%;
    background-color: beige;
`;
const Rightside = styled.div`
    font-size: 100px;
    color: blue;
    text-align: center;
    margin-top: 20px;
    width:50%;
    height:88%;
    background-color: #f57e42;
`;
function LoginPage(){
    return (
    <Container>
        <Leftside>Left Half Page</Leftside>
        <Rightside>Right Half Page</Rightside>
    </Container>
    );
}
export default LoginPage;
