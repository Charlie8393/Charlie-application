import styled from "styled-components";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
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
    font-size: 24px;
    position: relative;
    background-color:#03fc90;
`
function LoginPage(){
    const history = useHistory();
    const[user,setUser] = useState({
        id:"",
        password:"",
    }); // when we first load a page we initialize the states to empty string / nill / 0.
    // states will be filled un when the user does specific action.
    const {id, password} = user;
    // Create a function which routes to Mainpage
    const gomain = () => {
        if(id ==="" || password===""){
            alert("ID or passowrd is empty");
            return;
        }
        if(id==="Charlie" && password==="1234"){
            alert("You may Log in!");
            history.push("/main");
        }
        if(id!=="Charlie"|| password!=="1234"){
            alert("ID or password is wrong");
            return;
        }
    };
    // e stands for events
    const putUserInfo = (e) => {
        const {name,value} = e.target;
        console.log(name);
        console.log(value);
        setUser ({
            ...user,
            // use name to avoid repetition to use same code.
            [name]: value,
        });
        console.log(user);
    }
    return (
    <Container>
        <Leftside>
            <WelcomeTitle>Welcome Back!</WelcomeTitle>
           <div>
            <Label>ID</Label>
            {/* // we are going to replace empty string to the following input by the
            user * */}
            <Input type="text" value = {id} name = "id" onChange={putUserInfo}></Input>
            </div>
            <div>
            <Label>Password</Label>
            <Input type="Password" value={password} name = "password" onChange={putUserInfo}></Input>
            </div>
            <Button onClick={gomain}>Login</Button>
        </Leftside>
        <Rightside src="https://www.sportscasting.com/wp-content/uploads/2020/03/Boston-Red-Sox-bats-at-spring-training.jpg"></Rightside>
        
    </Container>
    );
}
export default LoginPage;

