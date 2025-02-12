import React, { useEffect, useRef } from 'react';

interface FormFieldProps {
    label: string;
    clickable?: boolean;
    onClick?: () => void;

    children?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = (props) => {
    const fieldRef = useRef(null);

    useEffect(() => {
        if (props.clickable) {
            fieldRef.current.classList.add('hover:bg-gray-100/60');
            fieldRef.current.classList.add('active:bg-gray-200/80');
        }
    }, []);

    return (
        <div
            ref={fieldRef}
            onClick={props.onClick}
            className="flex h-full w-full flex-row items-center justify-between px-3 transition-colors duration-200"
        >
            <div>
                <span className="text-sm font-light">{props.label}</span>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default FormField;
