import React from 'react';

interface FormGroupProps {
    title: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ title }) => {
    return (
        <div className="flex w-full flex-col gap-2.5">
            <div className="flex flex-row items-center justify-between">
                <span className="text-sm font-medium">{title}</span>
                <span className=""></span>
            </div>
            <div
                className={
                    'flex h-13 w-full flex-col rounded-xl border-1 border-gray-200 bg-white shadow-sm transition-colors duration-200'
                }
            ></div>
        </div>
    );
};

export default FormGroup;
