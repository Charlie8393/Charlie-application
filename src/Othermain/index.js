import styled from "styled-components";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
const Container = styled.div`
    height: 120vh;
    background-color:#c0eb34;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Me = styled.h1`
    color: #eb3477;
    font-weight: 800;
    font-size: 60px;
    font-family: cursive;
    margin-top: -10px;
    margin-left: -5%;
`;
const Introduce = styled.div`
    color: #1c1a19;
    font-weight: 800;
    font-size: 30px;
    margin-top: 20px;
    margin-left: 32%;
`;
const Word = styled.div`
    color: #1c1a19;
    font-weight: 800;
    font-size: 15px;
    margin-top: 80px;
    margin-left: 37.5%;
`;
const Information = styled.div`
    color: #1c1a19;
    font-weight: 800;
    font-size: 15px;
    margin-top: 80px;
    margin-left: -22%;
`
const Real = styled.div`
    color: #1c1a19;
    font-weight: 800;
    font-size: 15px;
    margin-top: -300px;
    margin-left: 60%;
`
const Real2 = styled.div`
    color: #1c1a19;
    font-weight: 800;
    font-size: 15px;
    margin-top: 70px;
    margin-left: 60%;
`
const Real3 = styled.div`
    color: #1c1a19;
    font-weight: 800;
    font-size: 15px;
    margin-top: 80px;
    margin-left: 60%;
`
const Real4 = styled.div`
    color: #1c1a19;
    font-weight: 800;
    font-size: 15px;
    margin-top: 90px;
    margin-left: 60%;
`
const Ig = styled.div`
    display: flex;
    flex-direction: row;
`
const Profile = styled.img`
    margin-top: -450px;  
    width : 250px;
    height: 250px;
    position: center;
    margin-left: -200%;
`
function Othermain(){
    return(
        <Container>
            <Me>About Me</Me>
            <Introduce>Hello I am Charlie Sohn. I am a Student from South Korea.</Introduce>
            <Word>I'm a student in BCC. I like watching baseball and movies. I am preparing to got to college right now. I like to talk with each other. My favorite food is fried chicken. I could speak Korean and English, and little bit of Chinese. I am thinking about my dream a lot, but I want to become a producer.</Word>
            <Information>Name:</Information>
            <Information>Email:</Information>
            <Information>Phone:</Information>
            <Information>Date of Birth:</Information>
            <Real>Charlie</Real>
            <Real2>charlie.sohn02@gmail.com</Real2>
            <Real3>010 2182 3270</Real3>
            <Real4>26 November 2004</Real4>
            <Ig>
                <Profile src="https://as2.ftcdn.net/v2/jpg/02/18/96/71/1000_F_218967179_SG74TzqtF9FeCcBdelRlkDPrMKrsWWxp.jpg"></Profile>
            </Ig>
        </Container>
    );
}
export default Othermain;