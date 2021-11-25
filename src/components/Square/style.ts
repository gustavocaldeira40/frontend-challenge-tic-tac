import styled from 'styled-components';

export const Button = styled.button`
    height: 100px;
    width: 100px;
    border: 1px solid #4f4f4f;
    border-radius: 2px;
    padding: 2%;
    background: transparent;
    list-style: none;

    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    transition: all 1s;

    &:focus {
        background: aliceblue;
        border: 1px solid black;
    }
`;
