import styled, { css } from "styled-components";

export const Content = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	max-width: 400px;
`;

export const Card = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		border-radius: 15px;
		display: flex;
		flex: 1;
		flex-direction: column;
		max-height: fit-content;
		padding: 15px;
	`}
`;

export const Title = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.white};
		text-align: center;
	`}
`;
