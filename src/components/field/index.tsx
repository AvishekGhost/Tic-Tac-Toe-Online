import React, { FC, ChangeEvent } from "react";

import { Container, Input, Label } from "./styles";
import { Error } from "../../components";

interface IProps {
	disabled?: boolean;
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
	required,
	label,
	onChange,
	...rest
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
			<Input error={errMessage} id={id} onChange={handleChange} {...rest} />
			{errMessage && <Error>{errMessage}</Error>}
		</Container>
	);
};

export default Field;
