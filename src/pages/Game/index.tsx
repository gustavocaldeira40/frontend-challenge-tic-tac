import React, { FC, useState } from 'react';

import { AiOutlineClose, FiCircle } from 'react-icons/all';

import { Board } from '../../components';
import UseGameState from '../useGameState';

import {
    Container,
    ContainerPlay,
    ContainerTitle,
    TitleMain,
    ContainerRocket,
    ContainerFields,
    ContainerBoard,
    ContainerBackground,
    ContainerSteps,
    ContainerTextSteps,
    TextSteps,
    ContainerInformationGame,
    ContainerTexts,
    TextWinner,
    ButtonReset,
} from './style';

/* ------------------------------------------- */
/* function to get the text O or X */
/* ------------------------------------------- */
const getLabel = (value: any) => {
    if (!value) return null;
    return value > 0 ? (
        <FiCircle id="O" name="O" color="red" size={40} />
    ) : (
        <AiOutlineClose id="X" name="X" color="black" size={40} />
    );
};

/* ------------------------------------------- */
/* function to get initial state of the board */
/* ------------------------------------------- */
const getInitialState = () => {
    const state: any = {};
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            state[`${r}-${c}`] = null;
        }
    }
    return state;
};

/* -------------------------------------------- */
/* function that gets the row and column index */
/* -------------------------------------------- */

const getKeyFromIndex = (index: number) => {
    const row = Math.floor(index / 3);
    const column = index % 3;
    return `${row}-${column}`;
};

const Game: FC = () => {
    const { computeMove, stepNumber, resetStep } = UseGameState();

    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState<number | any>(null);

    function getWinner(v: any) {
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const sumRow =
                    v[`${r}-${c}`] + v[`${r}-${c + 1}`] + v[`${r}-${c + 2}`];
                if (sumRow === 3 || sumRow === -3) {
                    return sumRow;
                }

                const sumCol =
                    v[`${r}-${c}`] + v[`${r + 1}-${c}`] + v[`${r + 2}-${c}`];
                if (sumCol === 3 || sumCol === -3) {
                    return sumCol;
                }

                const sumDiagonal =
                    v[`${r}-${c}`] +
                    v[`${r + 1}-${c + 1}`] +
                    v[`${r + 2}-${c + 2}`];
                if (sumDiagonal === 3 || sumDiagonal === -3) {
                    return sumDiagonal;
                }

                const sumReverseDiagonal =
                    v[`${r}-${c}`] +
                    v[`${r + 1}-${c - 1}`] +
                    v[`${r + 2}-${c - 2}`];
                if (sumReverseDiagonal === 3 || sumReverseDiagonal === -3) {
                    return sumReverseDiagonal;
                }
            }
        }

        return null;
    }
    const handleClick = async (key: number) => {
        if (winner || values[key]) {
            return;
        }
        const newValues = {
            ...values,
            [key]: player,
        };
        setValues(newValues);
        setPlayer(player * -1);
        const newWinner = getWinner(newValues);

        if (newWinner) {
            setWinner(newWinner > 0 ? 1 : -1);
        }
        computeMove();
    };

    const reset = () => {
        setWinner(null);
        setValues(getInitialState);
        setPlayer(1);
        resetStep();
        return true;
    };

    const draw = Object.values(values).filter(Boolean).length === 9 && !winner;

    return (
        <Container>
            <ContainerPlay>
                <ContainerTitle>
                    <TitleMain>TIC-TAC-LIVEN</TitleMain>
                    <ContainerRocket role="img" aria-label="rocket">
                        🚀
                    </ContainerRocket>
                </ContainerTitle>
                <ContainerFields>
                    <ContainerBoard>
                        <Board
                            getLabel={getLabel}
                            values={values}
                            handleClick={(key: number) => handleClick(key)}
                            getKeyFromIndex={(index: number) =>
                                getKeyFromIndex(index)
                            }
                        />
                    </ContainerBoard>

                    <ContainerSteps>
                        <ContainerTextSteps>
                            <TextSteps>Current step: </TextSteps>
                            <TextSteps isBold>{stepNumber}</TextSteps>
                        </ContainerTextSteps>
                    </ContainerSteps>

                    {(winner || draw) && (
                        <>
                            <ContainerBackground />
                            <ContainerInformationGame>
                                <ContainerTexts>
                                    {winner ? (
                                        <>
                                            <TextWinner isBold>
                                                O ganhador é:
                                            </TextWinner>
                                            <TextWinner>
                                                {winner >= 0 ? 'O' : 'X'}
                                            </TextWinner>
                                        </>
                                    ) : (
                                        <TextWinner isBold>
                                            Houve um empate
                                        </TextWinner>
                                    )}
                                </ContainerTexts>
                                <ButtonReset type="reset" onClick={reset}>
                                    Reininciar
                                </ButtonReset>
                            </ContainerInformationGame>
                        </>
                    )}
                </ContainerFields>
                <ButtonReset type="reset" onClick={reset}>
                    Reininciar
                </ButtonReset>
            </ContainerPlay>
        </Container>
    );
};

export default Game;
