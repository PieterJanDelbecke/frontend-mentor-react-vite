import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import NavBar from "./NavBar";
import ImageHeroDesktop from '../images/image-hero-desktop.png'

const Container = styled.div`
	width: 1920px;
	height: 1080px;
	border: 1px red solid;
	margin: 0 auto;
`;
const MainPageContainer = styled.div`
    border: 1px solid red;
    height: 85%;
    display: flex;
    justify-content: center;
`
const InnerDiv = styled.div`
    border: 1px solid orange;
    margin: 0px 24px;
    width: 42%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 72px;
    font-weight: bold;
`

const Img = styled.img`
    height: 100%;
`

const MainPage = (props) => {
	return (
		<Container>
			<NavBar />
			<MainPageContainer>
				<InnerDiv>
                    <Title>Make Remote Work</Title>
                </InnerDiv>
				<InnerDiv>
                    <Img src={ImageHeroDesktop} alt="Image hero desktop"/>
                </InnerDiv>
			</MainPageContainer>
		</Container>
	);
};

export default MainPage;
