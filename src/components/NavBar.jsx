import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import SnapLogo from "../images/logo.svg";
import ToDoIcon from "../images/icon-todo.svg";
import CalendarIcon from "../images/icon-calendar.svg";
import RemindersIcon from "../images/icon-reminders.svg";
import PlanningIcon from "../images/icon-planning.svg";

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

const FeaturesDiv = styled.div`
	position: absolute;
	width: 240px;
	border: 1px solid blue;
	right: 0px;
	top: 40px;
	background-color: white;
    display: ${(props) => (props.showFeatures ? 'block' : 'none')};
`;

const FeatureLink = styled(Link)`
	display: block;
	text-decoration: none;
`;

const LinkDiv = styled.div`
	margin: 12px auto;
	width: 200px;
    height: 24px;
	border: 1px red solid;
	position: relative;
`;

const LinkText = styled.p`
	display: inline-block;
	position: absolute;
	border: 1px red solid;
    left: 90px;
    font-size: 18px;
`;

const LinkIcon = styled.img`
    left: 24px;
	position: absolute;
	border: 1px red solid;
	display: inline-block;
	height: 24px;
	width: 24px;
`;

const NavBar = () => {
	const [showFeatures, setShowFeatures] = useState(false);
	const [showCompany, setShowCompany] = useState(false);

	const handleShowFeatures = () => {
		setShowFeatures((prevValue) => !prevValue);
	};

	const handleShowCompany = () => {
		setShowCompany((prevValue) => !prevValue);
	};

	return (
		<Container>
			<LeftDiv>
				<Logo src={SnapLogo} alt="logo" />
				<Button onClick={handleShowFeatures}>
					Features
					<FeaturesDiv showFeatures={showFeatures}>
						<FeatureLink to="/">
							<LinkDiv>
								<LinkIcon src={ToDoIcon}></LinkIcon>
								<LinkText>ToDo List</LinkText>
							</LinkDiv>
						</FeatureLink>
						<FeatureLink to="/">
							<LinkDiv>
								<LinkIcon src={CalendarIcon}></LinkIcon>
								<LinkText>Calendar</LinkText>
							</LinkDiv>
						</FeatureLink>
						<FeatureLink to="/">
							<LinkDiv>
								<LinkIcon src={RemindersIcon}></LinkIcon>
								<LinkText>Reminders</LinkText>
							</LinkDiv>
						</FeatureLink>
						<FeatureLink to="/">
							<LinkDiv>
								<LinkIcon src={PlanningIcon}></LinkIcon>
								<LinkText>Planning</LinkText>
							</LinkDiv>
						</FeatureLink>
					</FeaturesDiv>
				</Button>
				<Button onClick={handleShowCompany}>Company</Button>
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
