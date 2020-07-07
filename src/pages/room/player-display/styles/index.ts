import styled, { css } from "styled-components";

export const KickLeaveBtn = styled.span`
	${({ theme }) => css`
		cursor: pointer;
		background-color: red;
		padding: 5px;
		color: ${theme.colors.white};
		border-radius: 5px;
		font-weight: bold;
	`}
`;

export const JoinBtn = styled.span`
	${({ theme }) => css`
		cursor: pointer;
		background-color: green;
		padding: 5px;
		color: ${theme.colors.white};
		border-radius: 5px;
		font-weight: bold;
	`}
`;

export const LoginToJoinBtn = styled.span`
	${({ theme }) => css`
		cursor: pointer;
		font-weight: bold;
		background-color: ${theme.colors.black};
		padding: 5px;
		color: ${theme.colors.white};
		border-radius: 5px;
	`}
`;

export const SeeProfileBtn = styled.span`
	${({ theme }) => css`
		cursor: pointer;
		font-weight: bolder;
		background-color: yellowgreen;
		padding: 5px;
		color: ${theme.colors.black};
		border-radius: 5px;
	`}
`;
