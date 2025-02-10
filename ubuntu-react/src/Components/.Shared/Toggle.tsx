import React from 'react';

interface ToggleProps {
    defaultChecked?: boolean;
    onToggle: (val: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = (props) => {
    const [checked, setChecked] = React.useState(props.defaultChecked ?? true);

    return (
        <div
            className={
                'active:bg-opacity-70/50 flex h-6.5 w-11 flex-row transition-all duration-150' +
                (checked
                    ? ' bg-orange-600 hover:bg-orange-600/90.5'
                    : ' bg-gray-300/80 hover:bg-gray-400/65') +
                ' rounded-full transition-colors'
            }
            style={{ padding: '3px' }}
            onClick={() => {
                const newValue = !checked;
                setChecked(newValue);
                props.onToggle(newValue);
            }}
        >
            <span
                className={`aspect-square h-full ${checked ? 'translate-x-4.5' : ''} rounded-full bg-white transition-all duration-150 ease-out`}
            ></span>
        </div>
    );
};

export default Toggle;
