import styled from 'styled-components';

export const ScreenWidth: number = window.innerWidth;

export const ScreenHeight: number = window.innerHeight;

export interface TextWinnerProps {
    isBold?: boolean;
}

export interface TextStepProps {
    isBold?: boolean;
    color?: string;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    margin: 4% 0;
`;

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerPlay = styled.div`
    background-color: #fff;
    width: 80%;
    height: ${ScreenHeight / 12}vh;
    border-radius: 10px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContainerRocket = styled.span`
    margin: 0 2%;
`;

export const TitleMain = styled.h1``;

export const ContainerFields = styled.div`
    display: flex;
    flex: 1;
`;

export const ContainerBoard = styled.div`
    width: 300px;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    margin: 3% 0;
`;

export const ContainerBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    flex: 1;
    top: 0;
    left: 0;
    display: flex;
    background: #4f4f4f4f;
`;

export const ContainerSteps = styled.div`
    width: 100%;
    height: 100%;
    padding: 4% 1%;
`;

export const ContainerTextSteps = styled.div`
    display: flex;
    margin: 4px 0;
`;

export const TextSteps = styled.p<TextStepProps>`
    font-weight: ${(props) => (props.isBold ? 'bold' : 'normal  ')};
    color: ${(props) => (props.color ? props.color : '#4f4f4f')};
    margin: 0 2px;
`;

export const ContainerInformationGame = styled.div`
    width: ${ScreenWidth / 100}%;
    height: ${ScreenHeight / 50}%;

    position: absolute;
    top: ${ScreenHeight / 30}%;
    bottom: ${ScreenHeight / 20}%;
    left: ${ScreenWidth / 50}%;
    padding: 1%;
    background: #fff;
    border-radius: 10px;

    box-shadow: 0 0 10px aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ContainerTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5% 0;
`;

export const TextWinner = styled.p<TextWinnerProps>`
    font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
    font-size: 17px;
    margin: 0 2%;

    text-transform: capitalize;
`;
export const ContainerButton = styled.div``;

export const ButtonReset = styled.button`
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 255, 0.1);

    transition: all 1s;
    padding: 2px;
    border-radius: 5px;

    font-size: 18px;

    &:hover {
        background: aliceblue;
    }
`;
