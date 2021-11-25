import React, { FC, useState } from 'react';
import { BoardValues } from '../../models/board';
import Square from '../Square';

import { Container } from './style';

const Board: FC<BoardValues> = ({
    values,
    getKeyFromIndex,
    handleClick,
    getLabel,
}) => {
    return (
        <Container>
            {Array.from({ length: 9 }).map((_, index: number) => {
                const key = getKeyFromIndex(index);
                return (
                    <Square
                        key={index}
                        Press={() => handleClick(key)}
                        value={values[key]}
                        getLabel={getLabel}
                    />
                );
            })}
        </Container>
    );
};

export default Board;
