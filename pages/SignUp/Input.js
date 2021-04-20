import React from 'react'
import './Form.element.css'

function FieldInput(props) {
    return (
        <Field className={FieldInput}>
            {props.children}
        </Field>
    )
}

export default FieldInput