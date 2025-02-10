import React from 'react';

interface AddButtonProps {
    onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = (props) => {
    return (
        <div className="text flex h-8 w-8 flex-col items-center justify-center rounded-md hover:bg-black/4 active:bg-black/8">
            <span className="text-center text-lg font-thin">+</span>
        </div>
    );
};

export default AddButton;
