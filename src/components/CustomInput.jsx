import React from 'react'
import Form from 'react-bootstrap/Form';
export const CustomInput = ({label, ...rest}) => {
  return (
    <Form.Group className="mb-3 w-50">
        {label && <Form.Label>{label}</Form.Label>}
        
        <Form.Control {...rest} />
      </Form.Group>
  )
}
