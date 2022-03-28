import styled from "styled-components";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
const Container = styled.div`
    height: 120vh;
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
    margin-top: 100px;
    margin-left: -20%;
`;

const Introduce = styled.div`
    color: #fcba03;
    font-weight: 800;
    font-size: 40px;
    margin-top: 150px;
    margin-left: -20%;
`;
const Picture = styled.img`
    margin-top: 170px;
    width:150px;
    height:150px;
    position: center;
    margin-left: -50%;
`
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const Button = styled.button`
    font-weight: 800;
    color: #3503fc;
    width:100px;
    height:50px;
    position: center;
    background-color:#03fc90;
    margin-top: 340px;
    margin-left: -65%;
`
const Ig = styled.div`
    display: flex;
    flex-direction: row;
`
const Profile = styled.img`
    margin-top: -500px;  
    width : 250px;
    height: 250px;
    position: center;
    margin-left: 230%;
`
function MainPage(){
    const history = useHistory();
    const nextmain = () => {
        history.push("/main2");
    }
    return(
        <Container>
        <WelcomeTitle>Charlie Sohn</WelcomeTitle>
        <Introduce>Reading book | Watching baseball | Do homework</Introduce>
        <ImageWrapper>
            <a href="http://www.kyobobook.co.kr/index.laf?NaPm=ct%3Dl19yc9x9%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dc61625e935ffc530c10fbdf769e628998c63e818&OV_REFFER=https://search.naver.com">
            <Picture src="https://www.oberlo.com/media/1612639204-image3.jpg?fit=max&fm=jpg&w=1824"></Picture>
            </a>

            <a href="https://sports.news.naver.com/kbaseball/index.nhn">
            <Picture src="https://www.seoulfn.com/news/photo/201803/301820_102172_53.jpg"></Picture>
            </a>

            <a href="https://www.chegg.com/?irclickid=3sdVdQW8LxyIRWPzK70kXULqUkGQARVCj2LWWk0&sharedid=lifehack.org&utm_medium=affiliate&utm_source=Skimbit%20Ltd.&utm_campaign=Online%20Tracking%20Link&irgwc=1">
            <Picture src="https://1en5vh48t4rqdnq1j3h9ihn4-wpengine.netdna-ssl.com/wp-content/uploads/2006/09/make-the-homework-hour-happy-hour-top-10-tips-860x420.jpg"></Picture>
            </a>
            <Button onClick={nextmain}>Learn more</Button>
        </ImageWrapper>
        <Ig>
        <Profile src="https://avatar.cdnpk.net/4838949.jpg"></Profile>
        </Ig>
        </Container>
    );
}

export default MainPage;