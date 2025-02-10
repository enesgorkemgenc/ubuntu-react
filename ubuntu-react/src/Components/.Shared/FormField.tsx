import React from 'react';

interface FormFieldProps {
    label: string;
    children?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = (props) => {
    return (
        <div className="flex w-full flex-row items-center justify-between">
            <div>
                <span className="text-sm font-light">{props.label}</span>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default FormField;
