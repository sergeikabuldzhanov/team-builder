import React from 'react';
import {useState, useEffect} from 'react';

function Form(props){
    const [formState, setFormState] = useState({
        name: '',
        role: '',
        email: '',
    });
    useEffect(()=>{
        if(props.memberToEdit){
            setFormState(props.memberToEdit)
        };
    }, [props.memberToEdit]);

    function handleChange(event){
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        props.setter(formState);
    }

    return (

    <form className = "form" onSubmit = {handleSubmit}>

        <label htmlFor = "form_name">Name</label>
        <input type = "text" name = "name" id = "form_name" onChange = {handleChange} value = {formState.name}/>

        <label htmlFor = "form_role">Role</label>
        <input type = "text" name = "role" id = "form_role" onChange = {handleChange} value = {formState.role}/>

        <label htmlFor = "form_email">Email</label>
        <input type = "email" name = "email" id = "form_email" onChange = {handleChange} value = {formState.email}/>

        <input type="submit" name="submit"/>

    </form>
    )
}

export default Form;