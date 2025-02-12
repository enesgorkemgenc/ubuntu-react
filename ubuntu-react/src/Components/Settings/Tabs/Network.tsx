import React from 'react';

import FormGroup from '../../.Shared/FormGroup';
import FormField from '../../.Shared/FormField';
import AddButton from '../../.Shared/AddButton';
import Toggle from '../../.Shared/Toggle';

const Network: React.FC = () => {
    const [wiredConnected, setWiredConnected] = React.useState(true);

    return (
        <div className="flex w-full flex-1 flex-col gap-9">
            <FormGroup
                title="Wired"
                helperElements={<AddButton onClick={() => {}} />}
            >
                <FormField
                    label={`${wiredConnected ? 'Connected - ' : ''}1,000 Mb/s`}
                    clickable={true}
                    onClick={() => {
                        setWiredConnected(!wiredConnected);
                    }}
                >
                    <Toggle
                        checked={wiredConnected}
                        onToggle={(newValue) => {
                            setWiredConnected(newValue);
                        }}
                    />
                </FormField>
            </FormGroup>

            <FormGroup title="VPN">
                <FormField label="Not set up"></FormField>
            </FormGroup>

            <FormGroup title="Proxy">
                <FormField label="P Proxy"></FormField>
            </FormGroup>
        </div>
    );
};

export default Network;
