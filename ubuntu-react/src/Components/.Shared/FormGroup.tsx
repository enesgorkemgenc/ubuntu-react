import React from 'react';

interface FormGroupProps {
    children: React.ReactNode;
    helperElements?: React.ReactNode;
    title: string;
}

const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
    return (
        <div className="flex w-full flex-col gap-2.5">
            <div className="flex flex-row items-center justify-between">
                <span className="text-sm font-medium">{props.title}</span>
                {props.helperElements}
            </div>
            <div
                className={
                    'flex h-13 w-full flex-col flex-row items-center overflow-hidden rounded-xl border-1 border-gray-300/60 bg-white shadow-sm transition-colors duration-200'
                }
            >
                {props.children}
            </div>
        </div>
    );
};

export default FormGroup;
