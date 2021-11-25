/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import React, { useState } from 'react';

const UseGameState = () => {
    const [stepNumber, setStepNumber] = useState(0);

    const computeMove = () => {
        if (stepNumber === 9) {
            setStepNumber(9);
        }
        setStepNumber((currentStepNumber) => currentStepNumber + 1);
    };

    const resetStep = () => {
        setStepNumber(0);
    };

    return {
        resetStep,
        stepNumber,
        computeMove,
    };
};

export default UseGameState;
