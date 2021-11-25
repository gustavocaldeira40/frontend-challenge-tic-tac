import React, { FC } from 'react';

import { Button } from './style';

interface Match {
    value: any;
    Press: () => void;
    getLabel: (value: any) => typeof value;
}

const Square: FC<Match> = ({ value, Press, getLabel }) => {
    return (
        <Button id="match" type="button" onClick={Press}>
            {getLabel(value)}
        </Button>
    );
};

export default Square;
