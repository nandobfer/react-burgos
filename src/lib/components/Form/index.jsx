import React from "react";
import { Formik } from 'formik';

export const Form = ({children, initialValues, onSubmit, className, refs}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            {props => {
                const {
                    // values,
                    // touched,
                    // isSubmitting,
                    // handleChange,
                    // handleBlur,
                    handleSubmit,
                    // handleReset
                } = props;
                return (
                    <form onSubmit={handleSubmit} className={className} ref={refs}>
                        {children}
                    </form>
                )
            }}

        </Formik>
    )
}