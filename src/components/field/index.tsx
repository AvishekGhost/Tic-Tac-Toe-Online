import React, { FC, ChangeEvent } from "react";

import { Container, Input, Label, Error } from "./styles";

interface IProps {
	errMessage?: string;
	id: string;
	label: string;
	onChange: (value: string) => void;
	placeHolder?: string;
	required?: boolean;
	type?: string;
	value: string;
}

const Field: FC<IProps> = ({
	errMessage,
	id,
	label,
	onChange,
	required,
	placeHolder,
	type,
	value,
}) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<Container>
			<Label error={errMessage} htmlFor={id}>
				{required && "* "}
				{label}:
			</Label>
			<Input
				error={errMessage}
				id={id}
				onChange={handleChange}
				type={type}
				value={value}
				placeholder={placeHolder}
			/>
			{errMessage && <Error>{errMessage}</Error>}
		</Container>
	);
};

export default Field;
