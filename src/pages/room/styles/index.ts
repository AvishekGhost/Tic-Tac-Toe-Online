import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Block = styled.div`
	${({ theme }) => css`
		align-items: center;
		border: solid 1px black;
		display: flex;
		justify-content: center;
		cursor: pointer;
		height: 70px;
		width: 70px;
		transition: ${theme.transitions};
	`}
`;

export const Grid = styled.div<{ marking: boolean }>`
	${({ marking, theme }) => css`
		border: solid 1px ${theme.colors.black};
		margin-bottom: 30px;

		& > div > div {
			background-color: ${marking
				? theme.colors.lightGray
				: theme.colors.white};

			&:hover {
				background-color: ${marking
					? theme.colors.lightGray
					: theme.colors.lightBlue};
			}
		}
	`}
`;

export const Row = styled.div`
	display: flex;
`;
