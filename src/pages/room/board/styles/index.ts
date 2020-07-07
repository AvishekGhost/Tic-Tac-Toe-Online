import styled, { css } from "styled-components";

export const Block = styled.div`
	${({ theme }) => css`
		align-items: center;
		border: solid 1px ${theme.colors.black};
		cursor: pointer;
		display: flex;
		height: 70px;
		justify-content: center;
		transition: ${theme.transitions};
		width: 70px;
		font-weight: bold;
	`}
`;

export const Container = styled.div<{ marking: boolean }>`
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
					: theme.colors.black};
			}
		}
	`}
`;

export const IsMarked = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.white};
		display: flex;
		background-color: ${theme.colors.black};
		cursor: default;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
		:disabled ;
	`}
`;

export const Row = styled.div`
	display: flex;
`;
