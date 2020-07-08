import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 15px;
`;

export const Input = styled.input<{ error?: string }>`
	${({ error, theme }) => css`
		color: ${theme.colors.black};
		background-color: ${theme.colors.white};
		border-radius: 10px;
		border: solid 2px ${error ? "red" : theme.colors.lightGray};
		height: 40px;
		padding: 0 15px;

		&:focus {
			border: solid 2px ${theme.colors.blue};
			outline: none;
		}
	`}
`;

export const Label = styled.label<{ error?: string }>`
	${({ error, theme }) => css`
		color: ${error ? "red" : theme.colors.black};
		font-weight: bold;
		margin-bottom: 5px;
		padding-left: 15px;
	`}
`;
