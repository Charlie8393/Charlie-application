import styled from "styled-components";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {PrograssBar, Button, ProgressBar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const Container = styled.div`
    height: 100%;
    background-color:#c0eb34;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Othercontainer = styled.div`
    background-color:#fc03df;
    width:100%;
    display: flex; 
    padding-top: 50px;
    padding-bottom: 80px;
`
const Education = styled.div`
    background-color:#eb4034;
    width:100%;
    height:1000px;
    display: flex; 
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 80px;
`
const Department = styled.div`
    background-color:#f59342;
    width:100%;
    height:100%;
    display: flex; 
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 80px;
`
const Grade = styled.div`
    color: #d1f542;
    font-weight: 800;
    font-size: 50px;
    font-family: monospace;
    margin-left: 40%;
`
const Title = styled.div`
    color: #425df5;
    font-weight: 800;
    font-size: 50px;
    font-family: Arial;
    margin-left: 30%;
`
const Things = styled.div`
    color: #02f043;
    font-weight: 800;
    font-size: 25px;
    margin-top: 40px;
    margin-left: 17%;
`
const Nextcontainer = styled.div`
    color: #5c3166;
    display: flex;
    margin-right: 20px;
`
const Leftside = styled.div`
    font-size: 100px;
    color: blue;
    text-align: center;
    margin-top: 0px;
    width:50%;
    height:100%;

`;

const Rightside = styled.div`
   
    margin-top: 0px;
    width:50%;
    height:100%;
    
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
const Profile = styled.img` 
    width : 350px;
    height: 350px;
    position: center;
`
const Profile2 = styled.img` 
    width : 350px;
    height: 250px;
    position: center;
    margin-left: 22%;
`
const ImageBox = styled.div`
    border: 1rem solid #346beb;
    width 420px;
    height: 420px;
    display: flex;
    padding: 20px;
`

function Othermain(){
    const bs = {
        width: "300px",
        backgroundColor: "#b1db1a",
        height: "30px",
        
    }
    return(
        <Container>
            <Othercontainer>
                <Leftside>
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
           
            </Leftside>

          <Rightside>
            <ImageBox>
                <Profile src="https://as2.ftcdn.net/v2/jpg/02/18/96/71/1000_F_218967179_SG74TzqtF9FeCcBdelRlkDPrMKrsWWxp.jpg"></Profile> 
             </ImageBox> 
            </Rightside> 
            </Othercontainer>
            <Education>
                <Grade>Education</Grade>
                <Nextcontainer>GPA</Nextcontainer>
                <ProgressBar style={bs} max={5.0} label={`4.0/5.0`} min={0.0} now={4.0}/>
                <Nextcontainer>Speech Grade</Nextcontainer>
                <ProgressBar style={bs} max={100} label={`90/100`} min={0} now={90}/>
                <Nextcontainer>TOFEL</Nextcontainer>
                <ProgressBar style={bs} max={33} label={`23/33`} min={0} now={23}/>
                <Nextcontainer>Chinease Unit 6 workbook</Nextcontainer>
                <ProgressBar style={bs} max={100} label={`83/100`} min={0} now={83}/>
                <Nextcontainer>Pre-calculus Quiz 6.1~6.3</Nextcontainer>
                <ProgressBar style={bs} max={10.0} label={`9.5/10.0`} min={0} now={9.5}/>
            </Education>
            <Department>
                <Title>Thinking Department</Title>
                <Things>1. Department of Mass Communication</Things>
                <Profile2 src="https://fci.utar.edu.my/images/img100-01rvcopy_1563162291.jpg?n=1563162290423set"></Profile2>
                <Things>2. Department of Statistics</Things>
                <Profile2 src="https://sjctnc.edu.in/wp-content/uploads/2013/06/stat-copy.jpg"></Profile2>
                <Things>3. Department of Computer Science</Things>
                <Profile2 src="https://www.pngfind.com/pngs/m/627-6272777_department-of-computer-science-300-computer-science-and.png"></Profile2>
                <Things>4. Department of Creative Writing</Things>
                <Profile2 src="https://writing-creative.seoultech.ac.kr/site/writing-creative/img/intro/intro02.png"></Profile2>
                <Things>5. Major of business management</Things>
                <Profile2 src="https://www.essaycorp.com/blog/wp-content/uploads/2017/06/what-is-business-management-major.png"></Profile2>
            </Department>
        </Container>
        
    );
}
export default Othermain;