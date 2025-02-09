import React from 'react';

import FormGroup from '../../.Shared/FormGroup';

const Network: React.FC = () => {
    return (
        <div className="flex w-full flex-1 flex-col gap-9">
            <FormGroup title="Wired" />
            <FormGroup title="VPN" />
            <FormGroup title="Proxy" />
        </div>
    );
};

export default Network;
