import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {
    FormContainer,
    Title,
    FormBox,
    FormField,
    FormLabel,
    CheckBoxLabel,
    Button
} from './SignUp.element'
import ErrorMsg  from './ErrorMsg'
import './Form.element.css'
import { FaLock } from 'react-icons/fa'

const initialValues = {
    Fname : '',
    Lname : '',
    email : '',
    password : '',
    Cpassword : '',
    checkBox : []
}

const onSubmit = (values,onSubmitProps) => {
    alert('Data Has Been Submitted')
    console.log('form data',values)
    onSubmitProps.resetForm()
}


const validationSchema = Yup.object({
    Fname : Yup.string().required('Required'),
    Lname : Yup.string().required('Required'),
    email : Yup.string().required('Required'),
    password : Yup.string().required('required'),
    Cpassword : Yup.string().oneOf([Yup.ref('password'),''],'Password does not match!').required('Required'),
    checkBox : Yup.array().required('Required')
})

function SignUp() {

    return (
        <FormContainer>
            <Title>We Warmly Welcome You to Our Pack!</Title>
            <FormBox>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
                >
                    {
                        formik => {
                            console.log('formik props',formik)
                            return (
                                <Form>
                                    <FormField>
                                        <FormLabel htmlFor='Fname'>First Name</FormLabel>
                                        <Field
                                        id='Fname'
                                        name='Fname'
                                        type='text'
                                        className='FieldInput'
                                        />
                                        <ErrorMessage name='Fname' component={ErrorMsg} />
                                    </FormField>
                                    <FormField>
                                        <FormLabel htmlFor='Lname'>Last Name</FormLabel>
                                        <Field
                                        id='Lname'
                                        name='Lname'
                                        type='text'
                                        className='FieldInput'
                                        />
                                        <ErrorMessage name='Lname' component={ErrorMsg} />
                                    </FormField>
                                    <FormField>
                                        <FormLabel htmlFor='email'>E-mail</FormLabel>
                                        <Field
                                        id='email'
                                        name='email'
                                        className='FieldInput'
                                        />
                                        <ErrorMessage name='email' component={ErrorMsg} />
                                    </FormField>
                                    <FormField>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Field
                                        id='password'
                                        name='password'
                                        type='password'
                                        className='FieldInput'
                                        />
                                        <ErrorMessage name='password' component={ErrorMsg} />
                                    </FormField>
                                    <FormField>
                                        <FormLabel htmlFor='Cpassword'>Confirm Password</FormLabel>
                                        <Field
                                        id='Cpassword'
                                        name='Cpassword'
                                        type='password'
                                        className='FieldInput'
                                        />
                                        <ErrorMessage name='Cpassword' component={ErrorMsg} />
                                    </FormField>
                                    <FormField>
                                        <CheckBoxLabel htmlFor='checkbox'>
                                            <Field
                                            id='checkBox'
                                            name='checkBox'
                                            type='checkbox'
                                            value='yes'
                                            />
                                            I hereby declare that the information i provided are true
                                            <ErrorMessage name='checkBox' component={ErrorMsg} />
                                        </CheckBoxLabel> 
                                        
                                    </FormField>
                                    <Button type='submit'><FaLock /> Register</Button>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </FormBox>
        </FormContainer>
    )
}

export default SignUp
