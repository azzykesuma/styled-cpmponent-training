import React from 'react'
import { ErrorMessage } from './SignUp.element'

function ErrorMsg(props) {
    return (
        <ErrorMessage>
            {props.children}
        </ErrorMessage>
    )
}

export default ErrorMsg