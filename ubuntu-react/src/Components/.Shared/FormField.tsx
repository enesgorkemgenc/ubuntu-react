import React from 'react';

interface FormFieldProps {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ type, value, onChange }) => {
    return <div className=""></div>;
};

export default FormField;
