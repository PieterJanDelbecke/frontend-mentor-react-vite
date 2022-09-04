import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import SnapLogo from "../images/logo.svg";

const Container = styled.nav`
	position: relative;
	border: 1px red solid;
	height: 100px;
`;

const LeftDiv = styled.div`
	border: 1px red solid;
	display: inline-block;
	position: absolute;
	display: flex;
	align-items: center;
	height: 100%;
`;
const RightDiv = styled.div`
	border: 1px red solid;
	display: inline-block;
	position: absolute;
	display: flex;
	align-items: center;
	height: 100%;
	right: 0px;
`;

const Logo = styled.img`
	display: inline-block;
	position: relative;
	margin: auto 30px;
	border: 1px red solid;
	height: 40px;
`;

const Button = styled.button`
	position: relative;
	border: red solid 1px;
	width: 160px;
	height: 40px;
	margin: auto 20px;
	background-color: transparent;
	color: darkgray;
	:hover {
		color: black;
	}
	${(props) =>
		props.register &&
		css`
			border: 2px solid darkgray;
			border-radius: 5px;
			:hover {
				border: 2px solid black;
			}
		`}
`;

const NavBar = () => {
	return (
		<Container>
			<LeftDiv>
				<Logo src={SnapLogo} alt="logo" />
				<Button>Features</Button>
				<Button>Company</Button>
				<Button>Careers</Button>
				<Button>About</Button>
			</LeftDiv>
			<RightDiv>
				<Button>Login</Button>
				<Button register>Register</Button>
			</RightDiv>
		</Container>
	);
};

export default NavBar;
