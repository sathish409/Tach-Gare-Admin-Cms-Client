import React, { useState } from 'react'
import { CustomInput } from '../../components/CustomInput'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
   const [form, setform]=useState({})
   const [passwordValidationError, setPasswordValidationError]=useState({})

   const handleOnChange=(e)=>{

    //password rules
    //1. Must be longer than 6 chars
    //2.Must Include uppercase
      //3.Must Include lowercase
      //4. Must incluse special chars
    const {name, value}=e.target
    setPasswordValidationError("")
    if(name==="password"){
        value.length <6 && setPasswordValidationError("Must be longer than 6 chars")
       !/[A-Z]/.test(value) && setPasswordValidationError("Must Include uppercase")
       !/[a-z]/.test(value) && setPasswordValidationError("Must Include lowercase")
       !/[0-9]/.test(value) && setPasswordValidationError("Must Include Number")
    }
    if(name==="confirmPassword"){
        form.password !== value && 
        setPasswordValidationError("Password do not match")
    }
    setform({
        ...form,
        [name]:value,
    })
   }
   const handleOnSubmit=(e)=>{
    e.preventDefault()
    const {confirmPassword, ...rest}= form;
    if(confirmPassword !=rest.password){
        toast.error("password do not match")
        return;
    }
   }

    const inputs=[
        {
            label:"first name",
            name:"fname",
            required:true,
            placeholder:"sam",
        },
        {
            label:"last name",
            name:"lname",
            required:true,
            placeholder:"boga",
        },
        {
            label:"Email",
            name:"email",
            required:true,
            placeholder:"sam@boga",
        },
        {
            label:"Phone",
            name:"phone",
            placeholder:"97018",
        },
        {
            label:"Adress name",
            name:"adress",
            placeholder:"8 lower mount street",
        },
        {
            label:"Password",
            name:"password",
            required:true,
            type:"password",
            placeholder:"XXXXXX",
        },
        {
            label:"Confirm Password",
            name:"confirmpassword",
            type:"password",
            required:true,
            placeholder:"XXXXXX",
        },

    ]
  return (
    <div>
        <div className="text-center">Tech gare admin
        <hr />
        {inputs.map((item,i)=>(
            <CustomInput key={i} {...item} onChange={handleOnChange}/> 
        ))}
        <div className="">
            {passwordValidationError && 
              <div className="text-error"></div>}
        </div>
      
        <Form className='w-50 m-auto border rounded shadow-lg p-3 mt-5'>
        <div className="d-grid">
            <Button type="submit" disabled={passwordValidationError}>Sign Up</Button>
        </div>
        </Form>
        </div>
      
    </div>
  )
}

export default SignUp