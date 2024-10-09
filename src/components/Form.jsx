import React, { useState } from "react";

import Button from "./UI/Button";
import Input from "./UI/Input";
import Label from "./UI/Label";


const Form = ({onNewUserAdd}) => {
	const [formFields, setFormFields] = useState({
		firstName: "",
		lastName: "",
		email: ""
	});

	const clearInputs = () => {
		const clearedFields = Object.keys(formFields)
			.reduce((acc, key) => {
				acc[key] = "";
				return acc;
			}, {});

		setFormFields(clearedFields);
	}


	const onButtonPressed = (event) => {
		event.preventDefault();

		onNewUserAdd({...formFields});
    clearInputs();
	}


  return (
    <form style={{ marginBottom: "2%" }}>
			<Button 
				style={{ marginTop: "20px" }}
				onClick={onButtonPressed}>
				Add User
			</Button>

			<Label htmlFor="FirstName-input">FirstName</Label>
			<Input
				value={formFields.firstName}
				onChange={
					e => setFormFields({...formFields, firstName: e.target.value})
				} 
				type="text" 
				id="FirstName-input" 
				name="FirstName-input"/>

			<Label htmlFor="LastName-input">LastName</Label>
			<Input
				value={formFields.lastName}
				onChange={
					e => setFormFields({...formFields, lastName: e.target.value})
				} 
				type="text" 
				id="LastName-input" 
				name="LastName-input"/>

			<Label htmlFor="Email-input">Email</Label>
			<Input 
				value={formFields.email}
				onChange={
					e => setFormFields({...formFields, email: e.target.value})
				}
				type="email" 
				id="Email-input" 
				name="Email-input"/>
		</form>
	)
}


export default Form;