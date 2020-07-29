import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		cursor: pointer;
		color: ${theme.colors.black};
		border: 1px solid ${theme.colors.black};
		font-size: 18px;
		text-align: center;
		margin-bottom: 5px;
		padding: 10px;
		border-radius: 10px;
		width: 80%;

		&:hover {
			border: 10px solid ${theme.colors.black};
		}
	`}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
