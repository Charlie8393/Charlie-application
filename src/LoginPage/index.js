import styled from "styled-components";
const Container = styled.div`
    height: 100vh;
    background-color:#346beb;
    display: flex; //Flex Container
    //This will make it up to down.
    display: column;
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
    margin-top: 0px;
    width:50%;
    height:100%;
    background-color: #f5426f;
`;
const Rightside = styled.img`
    // background-image: url("https://www.sportscasting.com/wp-content/uploads/2020/03/Boston-Red-Sox-bats-at-spring-training.jpg");
    margin-top: 0px;
    width:50%;
    height:100%;
    
`;

const Label = styled.label`
    font-size:24px;
    color: #f5ef42;
    font-family: cursive;
`
const Input = styled.input`
    font-size:24px;
    position: relative;
    left : 3%;
`
const WelcomeTitle = styled.h1`
    color: #42f5e9;
    font-weight: 800;
    font-size: 40px;
    margin-top: 100px;
`;

const Button = styled.button`
    font-weight: 800;
    color: #3503fc;
    width:100px;
    height:50px;
    position: relative;
    left: 3%;
    background-color:#03fc90;
`
function LoginPage(){
    return (
    <Container>
        <Leftside>
            <WelcomeTitle>Welcome Back!</WelcomeTitle>
           <div>
            <Label>ID</Label>
            <Input></Input>
            </div>
            <div>
            <Label>Password</Label>
            <Input></Input>
            </div>
            <Button>GO</Button>
        </Leftside>
        <Rightside src="https://www.sportscasting.com/wp-content/uploads/2020/03/Boston-Red-Sox-bats-at-spring-training.jpg"></Rightside>
        
    </Container>
    );
}
export default LoginPage;
