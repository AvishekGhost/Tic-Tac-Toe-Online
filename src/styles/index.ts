import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Row = styled.div`
	display: flex;
`;

export const Block = styled.div`
	border: solid 1px black;
	display: flex;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	height: 50px;
	width: 50px;
	transition: 0.3s;

	&:hover {
		background-color: lightgrey;
	}
`;

export const Button = styled.button`
	width: 156px;
`;
