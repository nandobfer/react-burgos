import React from 'react';
import { Field } from 'formik';
import MaskedInput from 'react-text-mask';

export const Input = (props) => {
    // const props = {
    //     mask: mask,
    //     disabled: disabled,
    //     id: id,
    //     placeholder: placeholder,
    //     type: "text",
    //     className: className,
    //     style: style,
    // }
    return (
        <Field name={props.id}>
            {({field}) => (
                props.mask 
                ? <MaskedInput 
                    {...field}
                    {...props}
                    guide={props.guide || false}
                    ref={props.innerRef}
                />
                : <input 
                    {...field}
                    {...props}
                    ref={props.innerRef}
                />
            )}
        </Field>
    )
}